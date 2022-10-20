/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="BackOrders.List.View"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as backorders_tpl from 'backorders.tpl';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import OrderHistoryListTrackingNumberView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.List.Tracking.Number.View');
import TransactionListView = require('../../../Commons/Transaction/JavaScript/Transaction.List.View');
import OrderHistoryCollection = require('./OrderHistory.Collection');
import GlobalViewsPaginationView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View');
import GlobalViewsShowingCurrentView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.ShowingCurrent.View');
import ListHeaderView = require('../../../Commons/ListHeader/JavaScript/ListHeader.View');
import RecordViewsActionableView = require('../../../Advanced/RecordViews/JavaScript/RecordViews.Actionable.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');
import Handlebars = require('../../../Commons/Utilities/JavaScript/Handlebars');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');

// @class OrderHistory.List.View view list of orders @extend Backbone.View
const BackOrdersListView: any = TransactionListView.extend({
    // @property {Function} template
    template: backorders_tpl,
    // @property {String} title
    title: Utils.translate(' Back Orders'),
    // @property {String} className
    className: 'BackOrderListView',
    // @property {String} page_header
    page_header: Utils.translate('Back Orders'),
    // @property {Object} attributes
    attributes: {
        id: 'BackOrderHistory',
        class: 'BackOrderListView'
    },
    // @method getSelectedMenu
    getSelectedMenu: function() {
        return 'backorders';
    },
    // @method getBreadcrumbPages
    getBreadcrumbPages: function() {
        return {
            text: this.title,
            href: '/backorders'
        };
    },
    // @method initialize
    initialize: function(options) {
        this.application = options.application;
        
        this.collection = new OrderHistoryCollection([], {
            filters: 'backorders:true'
        });
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

        // Manages sorting and filtering of the collection
        this.listHeader = new ListHeaderView({
            view: this,
            application: this.application,
            collection: this.collection,
            sorts: this.sortOptions,
            //rangeFilter: 'date',
            //rangeFilterLabel: Utils.translate('From'),
            hidePagination: true,
            allowEmptyBoundaries: true,
			showSearchPO: false
        });
        this.collection.on('reset', this.showContent, this);
    },
    // @method listenCollection
    listenCollection: function() {
        this.setLoading(true);

        this.collection.on({
            request: jQuery.proxy(this, 'setLoading', true),
            reset: jQuery.proxy(this, 'setLoading', false)
        });
    },
    // @method setLoading
    setLoading: function(value) {
        this.isLoading = value;
    },
    // @property {Array} sortOptions
    // Array of default sort options
    // sorts only apply on the current collection
    // which might be a filtered version of the original
    sortOptions: [
        {
            value: 'trandate',
            name: Utils.translate('Sort By Date')/*,
            selected: true*/
        },
        {
            value: 'tranid',
            name: Utils.translate('Sort By Number')
        },
        {
            value: 'amount',
            name: Utils.translate('Sort By Amount')
        }/*,
        {
            value:'backordered',
            name: Utils.translate('Sort By Back Ordered Quantity'),
            selected: true
        }*/
    ],
    // @property {Object} childViews
    childViews: {
        ListHeader: function() {
            return this.listHeader;
        },
        'GlobalViews.Pagination': function() {
            return new GlobalViewsPaginationView(
                _.extend(
                    {
                        totalPages: Math.ceil(
                            this.collection.totalRecordsFound / this.collection.recordsPerPage
                        )
                    },
                    Configuration.defaultPaginationSettings
                )
            );
        },
        'GlobalViews.ShowCurrentPage': function() {
            return new GlobalViewsShowingCurrentView({
                items_per_page: this.collection.recordsPerPage,
                total_items: this.collection.totalRecordsFound,
                total_pages: Math.ceil(
                    this.collection.totalRecordsFound / this.collection.recordsPerPage
                )
            });
        },
        'Order.History.Results': function() {
            return this._resultsView;
        }
    },
    _buildResultsView: function() {
        const self = this;
        let selectedColumns = [];

       // if (!Configuration.get().transactionListColumns.enableOrderHistory) {
            selectedColumns.push({ label: 'Date', id: 'trandate', type: 'date' });
            selectedColumns.push({
                label: 'Item',
                name: 'Item',
                id: 'backorderitem',
                type:'item'
            });
            if (self.isSCISIntegrationEnabled) {
                selectedColumns.push({ label: 'Origin', id: 'origin' });
            } else {
                selectedColumns.push({ label: 'Status', id: 'status', type: 'date' });
            }
            selectedColumns.push({
                label: 'Amount',
                name: 'amount',
                id: 'amount_formatted',
                type: 'currency'
            });
            selectedColumns.push({
                label: 'Ordered',
                name: 'quantity',
                id: 'quantity',
                type:'quantity'
            });
			selectedColumns.push({
                label: 'Fullfilled',
                name: 'quantityshipped',
                id: 'quantityshipped',
                type:'quantity'
            });
            selectedColumns.push({
                label: 'Back Ordered',
                name: 'backordered',
                id: 'quantitybackordered',
                type:'quantity'
            }); 
            selectedColumns.push({
                label: 'Due Date',
                name: 'duedate',
                id: 'duedate',
                type:'date'
            })
            
        const records_collection = new Backbone.Collection(
            this.collection.map(function(order) {
                const model = new Backbone.Model({
                    title: new Handlebars.SafeString(
                        Utils.translate('<span class="tranid">$(0)</span>', order.get('tranid'))
                    ),
                    touchpoint: 'customercenter',
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
				hideTrack: true,
				showFollowUp: false,
                backOrderPage: true
            }
        });
    },

    // @method getContext @return OrderHistory.List.View.Context
    getContext: function() {
        this._resultsView = this._buildResultsView();
        let columns = [];
        if (this._resultsView.collection.length > 0) {
            columns = this._resultsView.collection.at(0).get('columns');
        }
        // @class OrderHistory.List.View.Context
        return {
            // @property {String} pageHeader
            pageHeader: this.page_header,
            // @property {Boolean} collectionLengthGreaterThan0
            collectionLengthGreaterThan0: this.collection.length > 0,
            // @property {Boolean} isLoading
            isLoading: this.isLoading,
            // @property {Boolean} showPagination
            showPagination: !!(this.collection.totalRecordsFound && this.collection.recordsPerPage),
            // @property {Boolean} showBackToAccount
            showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD',
            // @property {Boolean} isSCISIntegrationEnabled
            isSCISIntegrationEnabled: this.isSCISIntegrationEnabled,
            // @property {Boolean} allIsActive
            allIsActive: this.activeTab === 'all',
            // @property {Boolean} openIsActive
            openIsActive: this.activeTab === 'open',
			billedIsActive: this.activeTab === 'billed',
            // @property {Boolean} inStoreIsActive
            inStoreIsActive: this.activeTab === 'instore',
            // @property {Array<{}>} columns
            columns: columns
        };
    }
});

export = BackOrdersListView;
