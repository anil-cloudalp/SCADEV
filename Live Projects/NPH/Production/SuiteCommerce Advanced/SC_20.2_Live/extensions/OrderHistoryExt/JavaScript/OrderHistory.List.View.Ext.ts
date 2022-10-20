/// <amd-module name="OrderHistory.List.View.Ext"/>
import * as _ from 'underscore';
import existingView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.List.View');

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';
import { ListHeaderView } from '../../../Commons/ListHeader/JavaScript/ListHeader.View';

import OrderHistoryListTrackingNumberView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.List.Tracking.Number.View');
import OrderHistoryCollection = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.Collection');
import RecordViewsActionableView = require('../../../Advanced/RecordViews/JavaScript/RecordViews.Actionable.View');
import Handlebars = require('../../../Commons/Utilities/JavaScript/Handlebars');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

_.extend(existingView.prototype, {
	// @method initialize
    initialize: function(options) {
        this.application = options.application;
		
		var fragment = Backbone.history.fragment;
				
		if(fragment.indexOf('filter=') != -1){
			Backbone.history.navigate('#purchases', {trigger:true});
		}
		
        if (Backbone.history.fragment.indexOf('open-purchases') === 0) {
            this.collection = new OrderHistoryCollection([], {
                filters: 'status:open'
            });
            this.activeTab = 'open';
        } else if (Backbone.history.fragment.indexOf('instore-purchases') === 0) {
            this.collection = new OrderHistoryCollection([], {
                filters: 'origin:instore'
            });
            this.activeTab = 'instore';
        } else {
            this.collection = new OrderHistoryCollection();
            this.activeTab = 'all';
        }
        this.isSCISIntegrationEnabled = Configuration.get(
            'siteSettings.isSCISIntegrationEnabled',
            false
        );

        const isoDate = Utils.dateToString(new Date());

        this.rangeFilterOptions = {
            fromMin: '1800-01-02',
            fromMax: isoDate,
            toMin: '1800-01-02',
            toMax: isoDate
        };

        this.listenCollection();
		
		var self = this;
		var profile = ProfileModel.getInstance();
		var filterOptions1 = [];
		
		if(profile.get('isLoggedIn') === 'T'){
			filterOptions1.push({
				value: profile.get('internalid')
			,	name: profile.get('firstname') + " " + profile.get('lastname')
			,	selected: true
			});
		}
			
        // Manages sorting and filtering of the collection
        this.listHeader = new ListHeaderView({
            view: this,
            application: this.application,
            collection: this.collection,
            sorts: this.sortOptions,
            rangeFilter: 'date',
            rangeFilterLabel: Utils.translate('From'),
            hidePagination: true,
            allowEmptyBoundaries: true,
			filters: filterOptions1
        });
		this.collection.on('reset',function(){
			
			var filterOptions = [];	
			
			filterOptions.push({
						value: 'ALL'
					,	name: '-- ALL --'
					});
			
			if(_.has(this,"listOptions")){
				
				_.each(this.listOptions,function(obj){
					
					if(!_.isEmpty(obj)){
							
						filterOptions.push(obj);
					}
				});
			}
			if(filterOptions.length > 1){	
			self.listHeader.filters = filterOptions;
			}
			
		});
        this.collection.on('reset', this.showContent, this);
    },
	_buildResultsView: function() {
        const self = this;
        let selectedColumns = [];

        if (!Configuration.get().transactionListColumns.enableOrderHistory) {
			
			selectedColumns.push({label: 'Customer', id: 'entity', type:'entity'});
            selectedColumns.push({ label: 'Date', id: 'trandate', type: 'date' });
            selectedColumns.push({
                label: 'Amount',
                name: 'amount',
                id: 'amount_formatted',
                type: 'currency'
            });

            if (self.isSCISIntegrationEnabled) {
                selectedColumns.push({ label: 'Origin', id: 'origin' });
            } else {
                selectedColumns.push({ label: 'Status', id: 'status', type: 'status' });
            }
        } else {
            selectedColumns = Configuration.get().transactionListColumns.orderHistory;
        }

        const records_collection = new Backbone.Collection(
            this.collection.map(function(order) {
                const model = new Backbone.Model({
                    title: new Handlebars.SafeString(
                        Utils.translate('<span class="tranid">$(0)</span>', order.get('tranid'))
                    ),
                    touchpoint: 'customercenter',
                    detailsURL: `/purchases/view/${order.get('recordtype')}/${order.get(
                        'internalid'
                    )}`,
                    recordType: order.get('recordtype'),
                    id: order.get('internalid'),
                    internalid: order.get('internalid'),
                    trackingNumbers: order.get('trackingnumbers'),
                    columns: self._buildColumns(selectedColumns, order)
                });
                return model;
            })
        );

        return new BackboneCollectionView({
            childView: RecordViewsActionableView,
            collection: records_collection,
            viewsPerRow: 1,
            childViewOptions: {
                actionView: OrderHistoryListTrackingNumberView,
                actionOptions: {
                    showContentOnEmpty: true,
                    contentClass: '',
                    collapseElements: true
                },
				hideTracking: true
            }
        });
    }
});

export = existingView;