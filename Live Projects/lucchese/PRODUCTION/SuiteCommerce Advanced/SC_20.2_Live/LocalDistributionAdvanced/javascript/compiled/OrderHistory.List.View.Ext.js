/// <amd-module name="OrderHistory.List.View.Ext"/>
define("OrderHistory.List.View.Ext", ["require", "exports", "underscore", "OrderHistory.List.View", "Utils", "Configuration", "OrderHistory.List.Tracking.Number.View", "RecordViews.Actionable.View", "Handlebars", "Backbone", "Backbone.CollectionView"], function (require, exports, _, OrderHistoryListView, Utils, Configuration_1, OrderHistoryListTrackingNumberView, RecordViewsActionableView, Handlebars, Backbone, BackboneCollectionView) {
    "use strict";
    _.extend(OrderHistoryListView.prototype, {
        initialize: _.wrap(OrderHistoryListView.prototype.initialize, function initialize(fn) {
            fn.apply(this, _.toArray(arguments).slice(1));
            this.isSCISIntegrationEnabled = false;
        }),
        _buildResultsView: function () {
            var self = this;
            var selectedColumns = [];
            if (!Configuration_1.Configuration.get().transactionListColumns.enableOrderHistory) {
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
                }
                else {
                    selectedColumns.push({ label: 'Status', id: 'status', type: 'status' });
                }
            }
            else {
                selectedColumns = Configuration_1.Configuration.get().transactionListColumns.orderHistory;
            }
            var records_collection = new Backbone.Collection(this.collection.map(function (order) {
                var model = new Backbone.Model({
                    title: new Handlebars.SafeString(Utils.translate('<span class="tranid">$(0)</span>', order.get('tranid'))),
                    touchpoint: 'customercenter',
                    detailsURL: "/purchases/view/" + order.get('recordtype') + "/" + order.get('internalid'),
                    recordType: order.get('recordtype'),
                    id: order.get('internalid'),
                    internalid: order.get('internalid'),
                    trackingNumbers: order.get('trackingnumbers'),
                    columns: self._buildColumns(selectedColumns, order)
                });
                return model;
            }));
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
    return OrderHistoryListView;
});

//# sourceMappingURL=OrderHistory.List.View.Ext.js.map
