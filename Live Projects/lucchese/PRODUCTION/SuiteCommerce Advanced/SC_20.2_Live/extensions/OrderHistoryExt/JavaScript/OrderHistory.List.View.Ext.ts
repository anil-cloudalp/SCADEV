/// <amd-module name="OrderHistory.List.View.Ext"/>

import * as _ from 'underscore';

import OrderHistoryListView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.List.View');

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';
import OrderHistoryListTrackingNumberView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.List.Tracking.Number.View');
import RecordViewsActionableView = require('../../../Advanced/RecordViews/JavaScript/RecordViews.Actionable.View');
import Handlebars = require('../../../Commons/Utilities/JavaScript/Handlebars');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');

_.extend(OrderHistoryListView.prototype, {


  initialize: _.wrap(OrderHistoryListView.prototype.initialize, function initialize(fn) {
    fn.apply(this, _.toArray(arguments).slice(1));

     this.isSCISIntegrationEnabled = false;
  }),
  _buildResultsView: function() {
        const self = this;
        let selectedColumns = [];

        if (!Configuration.get().transactionListColumns.enableOrderHistory) {
			selectedColumns.push({ label: 'PO #', id: 'otherrefnum', type: 'po' });
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
                }
            }
        });
    }

});

export = OrderHistoryListView;
