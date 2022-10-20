/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("ItemRelations.RelatedItem.View", ["require", "exports", "item_relations_related_item.tpl", "Utils", "ProductViews.Price.View", "GlobalViews.StarRating.View", "Backbone.View", "ProductDetails.AddToProductList.View", "Cart.QuickAddToCart.View", "Product.Model"], function (require, exports, item_relations_related_item_tpl, Utils, ProductViewsPriceView, GlobalViewsStarRatingView, BackboneView, ProductDetailsAddToProductListView, CartQuickAddToCartView, ProductModel) {
    "use strict";
    // @class ItemViews.RelatedItem.View Responsible for rendering an item details. The idea is that the item rendered is related to another one in the same page
    // @extend Backbone.View
    var ItemRelationsRelatedItemView = BackboneView.extend({
        // @property {Function} template
        template: item_relations_related_item_tpl,
        // @method initialize Override default method to make this view composite
        // @param {ItemViews.RelatedItem.View.Initialize.Options} options
        // @return {Void}
        initialize: function () {
            BackboneView.prototype.initialize.apply(this, arguments);
            this.productModel = new ProductModel({
                item: this.model,
                quantity: this.model.get('_minimumQuantity', true)
            });
        },
        contextData: {
            item: function () {
                return Utils.deepCopy(this.model);
            }
        },
        events: {
            'change [name="sub_item_qty"]': 'handlesubItemQty'
        },
        childViews: {
            'Item.Price': function () {
                var isSubItems = this.options.subItems || false;
                if (isSubItems) {
                    return new ProductViewsPriceView({
                        model: this.productModel,
                        origin: 'RELATEDITEM'
                    });
                }
                else {
                    return new ProductViewsPriceView({
                        model: this.model,
                        origin: 'RELATEDITEM'
                    });
                }
            },
            'Global.StarRating': function () {
                return new GlobalViewsStarRatingView({
                    model: this.model,
                    showRatingCount: false
                });
            },
            'Cart.QuickAddToCart': function () {
                var product = new ProductModel({
                    item: this.model,
                    quantity: this.model.get('_minimumQuantity', true)
                });
                return new CartQuickAddToCartView({
                    model: product,
                    application: this.parentView.options.application
                });
            },
            'AddToProductList': function () {
                var product = new ProductModel({
                    item: this.model,
                    quantity: this.model.get('_minimumQuantity', true)
                });
                return new ProductDetailsAddToProductListView({
                    model: product,
                    application: this.parentView.options.application
                });
            }
        },
        handlesubItemQty: function (e) {
            var qty = parseInt(String($(e.target).val()));
            if (qty < 1) {
                $(e.target).val(0);
                qty = 0;
            }
            this.productModel.set('quantity', qty);
        },
        // @method getContext
        // @returns {ItemViews.RelatedItem.View.Context}
        getContext: function () {
            // @class ItemViews.RelatedItem.View.Context
            return {
                // @property {String} itemURL
                itemURL: this.model.getFullLink(),
                // @property {String} itemName
                itemName: this.model.get('_name') || this.model.Name,
                // @property {ImageContainer} thumbnail
                thumbnail: this.model.getThumbnail(),
                // @property {String} sku
                sku: this.model.get('_sku'),
                // @property {String} itemId
                itemId: this.model.get('_id'),
                // @property {Item.Model} model
                model: this.model,
                // @property {Boolean} showRating
                showRating: SC.ENVIRONMENT.REVIEWS_CONFIG && SC.ENVIRONMENT.REVIEWS_CONFIG.enabled,
                // @property {String} track_productlist_list
                track_productlist_list: this.model.get('track_productlist_list'),
                // @property {String} track_productlist_position
                track_productlist_position: this.model.get('track_productlist_position'),
                // @property {String} track_productlist_category
                track_productlist_category: this.model.get('track_productlist_category'),
                isSubItems: this.options.subItems || false,
                isOnSale: this.model.get('custitem_appf_item_on_sale') || false
            };
            // @class ItemViews.RelatedItem.View
        }
    });
    return ItemRelationsRelatedItemView;
});

//# sourceMappingURL=ItemRelations.RelatedItem.View.js.map
