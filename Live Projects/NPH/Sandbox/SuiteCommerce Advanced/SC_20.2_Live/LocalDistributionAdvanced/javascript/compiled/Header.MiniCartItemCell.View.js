/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Header.MiniCartItemCell.View", ["require", "exports", "underscore", "header_mini_cart_item_cell.tpl", "Profile.Model", "Transaction.Line.Views.Options.Selected.View", "Backbone.View"], function (require, exports, _, header_mini_cart_item_cell_tpl, Profile_Model_1, TransactionLineViewsOptionsSelectedView, BackboneView) {
    "use strict";
    return BackboneView.extend({
        template: header_mini_cart_item_cell_tpl,
        childViews: {
            'Item.SelectedOptions': function () {
                return new TransactionLineViewsOptionsSelectedView({
                    model: this.model
                });
            }
        },
        // @method getContext
        // @return {Header.MiniCart.View.Context}
        getContext: function () {
            var price_container_object = this.model.getPrice();
            var item = this.model.get('item') || this.model;
            var betterPrice = item && item.getBetterPrice(this.model.get('quantity'));
            // Price Addition For Other Charge Item
            var customPrice;
            var originalPrice = price_container_object.price || this.model.get('rate') || '';
            var imprintDetails, isCrossItem, isHolyItem, othChargePrice = 0, crossItemPrice = 0, holyItemPrice = 0;
            if (_.has(this, 'attributes')) {
                if (_.has(this.attributes, 'data-root-component-id')) {
                    if (_.propertyOf(this.attributes)('data-root-component-id') == "Header.MiniCart.View") {
                        _.each(this.model.get('options').models, function (opt) {
                            if (opt.get('cartOptionId') == "custcol_appf_imprint_item_details")
                                imprintDetails = !_.isUndefined(opt.get('value')) ? opt.get('value').internalid : '';
                            if (opt.get('cartOptionId') == "custcol_appf_imprint_cross")
                                isCrossItem = !_.isUndefined(opt.get('value')) ? opt.get('value').internalid : '';
                            if (opt.get('cartOptionId') == "custcol_appf_holy_bible")
                                isHolyItem = !_.isUndefined(opt.get('value')) ? opt.get('value').internalid : '';
                        });
                    }
                }
            }
            if (imprintDetails) {
                if (imprintDetails.indexOf('|') != -1) {
                    othChargePrice = imprintDetails.split('|')[1];
                    if (isCrossItem == "T")
                        crossItemPrice = imprintDetails.split('|')[3];
                    if (isHolyItem == "T")
                        holyItemPrice = imprintDetails.split('|')[5];
                }
                customPrice = originalPrice + parseFloat(othChargePrice);
                if (crossItemPrice)
                    customPrice += parseFloat(crossItemPrice);
                if (holyItemPrice)
                    customPrice += parseFloat(holyItemPrice);
                customPrice = SC.SESSION.currency.symbol + customPrice.toFixed(2);
            }
            else {
                customPrice = price_container_object.price_formatted || this.model.get('rate_formatted') || '';
            }
            // @class Header.MiniCart.View.Context
            return {
                line: this.model,
                // @property {Number} itemId
                itemId: this.model.get('item').id,
                // @property {String} itemType
                itemType: this.model.get('item').get('itemtype'),
                // @property {String} linkAttributes
                linkAttributes: this.model.get('item').get('_url'),
                // @property {ImageContainer} thumbnail
                thumbnail: this.model.getThumbnail(),
                // @property {Boolean} isPriceEnabled
                isPriceEnabled: !Profile_Model_1.ProfileModel.getInstance().hidePrices(),
                // @property {Boolean} isFreeGift
                isFreeGift: this.model.get('free_gift') === true,
                // @property {String} rateFormatted
                rateFormatted: customPrice,
                // @property {Boolean} showComparePrice
                showComparePrice: !!betterPrice,
                // @property {String} comparePriceFormatted
                comparePriceFormatted: betterPrice && betterPrice.defaultItemPrice
            };
            // @class Header.MiniCart.View
        }
    });
});

//# sourceMappingURL=Header.MiniCartItemCell.View.js.map
