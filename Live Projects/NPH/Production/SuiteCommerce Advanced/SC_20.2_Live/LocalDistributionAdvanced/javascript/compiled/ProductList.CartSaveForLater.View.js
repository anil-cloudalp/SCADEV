/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("ProductList.CartSaveForLater.View", ["require", "exports", "underscore", "Utils", "jQuery", "Profile.Model", "ProductList.DetailsLater.View", "ProductList.Model", "ProductList.Item.Model", "Cart.Detailed.View", "Session", "Tracker", "Backbone", "Configuration"], function (require, exports, _, Utils, jQuery, Profile_Model_1, ProductListDetailsLaterView, ProductListModel, ProductListItemModel, CartDetailedView, Session, Tracker, Backbone) {
    "use strict";
    var original_initialize = CartDetailedView.prototype.initialize;
    var product_list_model = new ProductListModel();
    _.extend(CartDetailedView.prototype, {
        initialize: function () {
            var self = this;
            original_initialize.apply(this, arguments);
            this.productListModel = product_list_model;
            this.utils = this.application.ProductListModule && this.application.ProductListModule.Utils;
            Profile_Model_1.ProfileModel.getPromise().done(function () {
                self.render();
            });
        },
        childViews: _.extend({}, CartDetailedView.prototype.childViews, {
            SavedForLater: function () {
                if (this.utils && this.utils.isProductListEnabled()) {
                    return new ProductListDetailsLaterView({
                        application: this.options.application,
                        model: this.productListModel
                    });
                }
                return null;
            }
        }),
        // save for later:
        // handles the click event of the save for later button
        // removes the item from the cart and adds it to the saved for later list
        saveForLaterItem: function (e) {
            e.preventDefault();
            if (!this.validateLogin()) {
                return;
            }
            var cart_line = this.model.get('lines').get(jQuery(e.target).data('internalid'));
            var internalid = cart_line.get('internalid');
            var whole_promise = jQuery.Deferred();
            var self = this;
            // extract Imprint options from the line
            var imprintItem, isCrossItem, isHolyItem, imprintItemId = 0, crossItemId = 0, holyItemId = 0;
            //console.log(cart_line);
            var options = cart_line.get('options') || '';
            var itemQty = cart_line.get('quantity') || '';
            if (_.has(options, 'models')) {
                _.each(options.models, function (opt) {
                    if (opt.get('cartOptionId') == "custcol_appf_imprint_item_details")
                        imprintItem = !_.isUndefined(opt.get('value')) ? opt.get('value').internalid : '';
                    if (opt.get('cartOptionId') == "custcol_appf_imprint_cross")
                        isCrossItem = !_.isUndefined(opt.get('value')) ? opt.get('value').internalid : '';
                    if (opt.get('cartOptionId') == "custcol_appf_holy_bible")
                        isHolyItem = !_.isUndefined(opt.get('value')) ? opt.get('value').internalid : '';
                    if (imprintItem) {
                        if (imprintItem.indexOf('|') != -1) {
                            imprintItemId = parseInt(imprintItem.split('|')[0]);
                            if (isCrossItem == "T")
                                crossItemId = parseInt(imprintItem.split('|')[2]);
                            if (isHolyItem == "T")
                                holyItemId = parseInt(imprintItem.split('|')[4]);
                        }
                    }
                });
            }
            //console.log(itemQty + ' - ' + imprintItemId  + ' - ' + crossItemId  + ' - ' + holyItemId);
            if (cart_line.get('itemtype') == "InvtPart") {
                if (_.has(options, 'models')) {
                    options.models = [];
                }
                cart_line.set('options', options);
            }
            jQuery
                .when(this.model.removeLine(cart_line), self.addItemToList(cart_line))
                .then(function () {
                if (imprintItemId) {
                    var cartLines = self.model.get('lines');
                    $(document).ajaxStart(function () {
                        if ($('#cart-loading').length == 0)
                            $('body').append('<div id="cart-loading"></div>');
                    });
                    $(document).ajaxStop(function () {
                        if ($('#cart-loading').length > 0)
                            $('#cart-loading').remove();
                    });
                    var promises = [];
                    if (_.has(cartLines, 'models')) {
                        _.each(cartLines.models, function (cartLine) {
                            //console.log(cartLine);
                            if (cartLine.get('item').get('internalid') == imprintItemId) {
                                var imprintItemTotal = cartLine.get('quantity');
                                if (imprintItemTotal == itemQty) {
                                    var promise = self.model.removeLine(cartLine);
                                    promises.push(promise);
                                }
                                else {
                                    imprintItemTotal -= itemQty;
                                    cartLine.set('quantity', imprintItemTotal);
                                    var promise = self.model.updateLine(cartLine, true);
                                    promises.push(promise);
                                }
                            }
                            if (crossItemId && cartLine.get('item').get('internalid') == crossItemId) {
                                var crossItemTotal = cartLine.get('quantity');
                                if (crossItemTotal == itemQty) {
                                    var promise = self.model.removeLine(cartLine);
                                    promises.push(promise);
                                }
                                else {
                                    crossItemTotal -= itemQty;
                                    cartLine.set('quantity', crossItemTotal);
                                    var promise = self.model.updateLine(cartLine, true);
                                    promises.push(promise);
                                }
                            }
                            if (holyItemId && cartLine.get('item').get('internalid') == holyItemId) {
                                var holyItemTotal = cartLine.get('quantity');
                                if (holyItemTotal == itemQty) {
                                    var promise = self.model.removeLine(cartLine);
                                    promises.push(promise);
                                }
                                else {
                                    holyItemTotal -= itemQty;
                                    cartLine.set('quantity', holyItemTotal);
                                    var promise = self.model.updateLine(cartLine, true);
                                    promises.push(promise);
                                }
                            }
                        });
                    }
                    if (promises.length > 0) {
                        jQuery.when(promises).then(function (valArray) {
                            self.model.fetch();
                            //self.render();
                            console.log(valArray);
                        });
                    }
                }
                self.showConfirmationMessage(Utils.translate('Good! You saved the item for later. If you want to add it back to your cart, see below in <b>"Saved for later"</b>'));
                whole_promise.resolve();
            });
            this.disableElementsOnPromise(whole_promise, "#" + internalid + " button");
        },
        // Add a new product list item into a product list
        addItemToList: function (cart_line) {
            var defer = jQuery.Deferred();
            var self = this;
            if (this.productListModel.isNew()) {
                this.productListModel.save().done(function () {
                    self.doAddItemToList(self.productListModel.get('internalid'), cart_line, defer);
                });
            }
            else {
                self.doAddItemToList(self.productListModel.get('internalid'), cart_line, defer);
            }
            return defer.promise();
        },
        // Adds the new item to the collection
        doAddItemToList: function (product_list_id, cart_line, internal_promise) {
            var self = this;
            var existingItem = self.productListModel.get('items').find(function (element) {
                return (element.get('item').get('internalid') === cart_line.get('item').get('internalid'));
            });
            if (existingItem) {
                var newQuantity = existingItem.get('quantity') + cart_line.get('quantity');
                existingItem.set('quantity', newQuantity);
                existingItem.save(null, { validate: false }).then(function () {
                    Tracker.getInstance().trackAddToWishlist(cart_line);
                    internal_promise.resolve();
                });
            }
            else {
                var product_list_item_model_1 = ProductListItemModel.createFromTransactionLine(cart_line);
                product_list_item_model_1.set('productList', { id: product_list_id });
                product_list_item_model_1.set('description', '');
                product_list_item_model_1.set('item', cart_line.get('item'), { silent: true });
                product_list_item_model_1.save(null, { validate: false }).done(function () {
                    product_list_item_model_1.set('item', cart_line.get('item'), { silent: true });
                    self.productListModel.get('items').add(product_list_item_model_1, { at: 0 });
                    Tracker.getInstance().trackAddToWishlist(cart_line);
                    internal_promise.resolve();
                });
            }
        },
        validateLogin: function () {
            if (Profile_Model_1.ProfileModel.getInstance().get('isLoggedIn') === 'F') {
                var parameters = {
                    origin: this.application.getConfig().currentTouchpoint,
                    origin_hash: encodeURIComponent(Backbone.history.fragment)
                };
                window.location.href = Utils.addParamsToUrl(Session.get('touchpoints.login'), parameters);
                return false;
            }
            return true;
        }
    });
    CartDetailedView.prototype.events = _.extend({}, CartDetailedView.prototype.events, {
        'click [data-action="save-for-later-item"]': 'saveForLaterItem'
    });
    return CartDetailedView;
});

//# sourceMappingURL=ProductList.CartSaveForLater.View.js.map
