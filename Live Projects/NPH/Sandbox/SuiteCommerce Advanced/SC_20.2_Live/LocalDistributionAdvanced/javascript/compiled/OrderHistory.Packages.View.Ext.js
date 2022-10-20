define("OrderHistory.Packages.View.Ext", ["require", "exports", "underscore", "OrderHistory.Packages.View", "Configuration", "Transaction.Line.Views.Cell.Actionable.View", "Transaction.Line.Views.QuantityAmount.View", "OrderHistory.Item.Actions.View", "OrderHistory.List.Tracking.Number.View", "Backbone", "Backbone.CollectionView"], function (require, exports, _, existingView, Configuration_1, TransactionLineViewsCellActionableView, TransactionLineViewsQuantityAmountView, OrderHistoryItemActionsView, OrderHistoryListTrackingNumberView, Backbone, BackboneCollectionView) {
    "use strict";
    _.extend(existingView.prototype, {
        childViews: _.extend(existingView.prototype.childViews, {
            TrackingNumbers: function () {
                var shipMethod = this.model.get('shipmethod');
                var speeDeeTrackingLink = (shipMethod && (shipMethod.get('internalid') == "8920")) ? this.model.get('trackingLink') : '';
                return new OrderHistoryListTrackingNumberView({
                    model: new Backbone.Model({ trackingNumbers: this.model.get('trackingnumbers'), trackingLink: speeDeeTrackingLink }),
                    showTrackPackagesLabel: true
                });
            },
            'Items.Collection': function () {
                var lines = _.filter(this.model.get('lines'), function (line) { return (line.get('item').get('custitem_appf_is_imprint_item') != true); });
                return new BackboneCollectionView({
                    collection: lines,
                    childView: TransactionLineViewsCellActionableView,
                    viewsPerRow: 1,
                    childViewOptions: {
                        navigable: !this.options.application.isStandalone(),
                        application: this.options.application,
                        SummaryView: TransactionLineViewsQuantityAmountView,
                        ActionsView: OrderHistoryItemActionsView,
                        showTaxDetails: Configuration_1.Configuration.get('showTaxDetailsPerLine'),
                        showAlert: !_.isUndefined(this.options.showAlert)
                            ? !!this.options.showAlert
                            : true,
                        ignorePriceVisibility: !!this.options.ignorePriceVisibility
                    }
                });
            }
        })
    });
    return existingView;
});

//# sourceMappingURL=OrderHistory.Packages.View.Ext.js.map
