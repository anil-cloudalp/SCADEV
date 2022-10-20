/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Transaction.Line.Views.QuantityAmount.View", ["require", "exports", "underscore", "transaction_line_views_quantity_amount.tpl", "Backbone.View"], function (require, exports, _, transaction_line_views_quantity_amount_tpl, BackboneView) {
    "use strict";
    var TransactionLineViewsQuantityAmountView = BackboneView.extend({
        template: transaction_line_views_quantity_amount_tpl,
        // @method getContext @return {ItemViews.Item.QuantityAmount.View.Context}
        getContext: function () {
            // @class ItemViews.Item.QuantityAmount.View.Context
            //console.log(this);
            var customPrice;
            var originalPrice = this.model.get('total') || '';
            var imprintDetails, isCrossItem, isHolyItem, othChargePrice = 0, crossItemPrice = 0, holyItemPrice = 0;
            var itemQty = this.model.get('quantity');
            //console.log(this.model);
            if (_.has(this.model.get('options'), 'models')) {
                _.each(this.model.get('options').models, function (opt) {
                    if (opt.get('cartOptionId') == "custcol_appf_imprint_item_details")
                        imprintDetails = !_.isUndefined(opt.get('value')) ? opt.get('value').internalid : '';
                    if (opt.get('cartOptionId') == "custcol_appf_imprint_cross")
                        isCrossItem = !_.isUndefined(opt.get('value')) ? opt.get('value').internalid : '';
                    if (opt.get('cartOptionId') == "custcol_appf_holy_bible")
                        isHolyItem = !_.isUndefined(opt.get('value')) ? opt.get('value').internalid : '';
                });
            }
            if (imprintDetails && itemQty && originalPrice) {
                if (imprintDetails.indexOf('|') != -1) {
                    othChargePrice = imprintDetails.split('|')[1];
                    if (isCrossItem == "T")
                        crossItemPrice = imprintDetails.split('|')[3];
                    if (isHolyItem == "T")
                        holyItemPrice = imprintDetails.split('|')[5];
                }
                customPrice = originalPrice + (parseFloat(othChargePrice) * itemQty);
                if (crossItemPrice)
                    customPrice += parseFloat(crossItemPrice) * itemQty;
                if (holyItemPrice)
                    customPrice += parseFloat(holyItemPrice) * itemQty;
                customPrice = '$' + customPrice.toFixed(2);
            }
            else {
                customPrice = this.model.get('total_formatted') || '';
            }
            return {
                // @property {Model} line
                line: this.model,
                // @property {String} lineId
                lineId: this.model.get('internalid'),
                // @property {Boolean} showQuantity
                showQuantity: this.model.get('item').get('_itemType') !== 'Discount',
                // @property {Boolean} showDiscount
                showDiscount: !!this.model.get('discount'),
                // @property {Boolean} showAmount
                showAmount: !!this.model.get('amount'),
                customPrice: customPrice
            };
            // @class ItemViews.Item.QuantityAmount.View
        }
    });
    return TransactionLineViewsQuantityAmountView;
});

//# sourceMappingURL=Transaction.Line.Views.QuantityAmount.View.js.map
