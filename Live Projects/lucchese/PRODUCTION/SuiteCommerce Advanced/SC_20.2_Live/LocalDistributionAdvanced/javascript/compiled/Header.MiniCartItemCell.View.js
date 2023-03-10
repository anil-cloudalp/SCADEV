/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Header.MiniCartItemCell.View", ["require", "exports", "header_mini_cart_item_cell.tpl", "Profile.Model", "Transaction.Line.Views.Options.Selected.View", "Backbone.View"], function (require, exports, header_mini_cart_item_cell_tpl, Profile_Model_1, TransactionLineViewsOptionsSelectedView, BackboneView) {
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
            // @class Header.MiniCart.View.Context
            return {
                line: this.model,
                // @property {Number} itemId
                itemId: this.model.get('item').id,
                // @property {String} itemType
                itemType: this.model.get('item').get('itemtype'),
                // @property {String} linkAttributes
                linkAttributes: this.model.getFullLink({
                    quantity: null,
                    location: null,
                    fulfillmentChoice: null
                }),
                // @property {ImageContainer} thumbnail
                thumbnail: this.model.getThumbnail(),
                // @property {Boolean} isPriceEnabled
                isPriceEnabled: !Profile_Model_1.ProfileModel.getInstance().hidePrices(),
                // @property {Boolean} isFreeGift
                isFreeGift: this.model.get('free_gift') === true,
                // @property {String} rateFormatted
                rateFormatted: betterPrice
                    ? betterPrice.betterItemPrice
                    : this.model.get('rate_formatted') || price_container_object.price_formatted || '',
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
