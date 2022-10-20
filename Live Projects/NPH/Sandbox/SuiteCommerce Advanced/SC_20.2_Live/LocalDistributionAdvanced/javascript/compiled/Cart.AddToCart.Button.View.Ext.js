/// <amd-module name="Cart.AddToCart.Button.View.Ext"/>
define("Cart.AddToCart.Button.View.Ext", ["require", "exports", "underscore", "Cart.AddToCart.Button.View", "LiveOrder.Line.Model", "Cart.Confirmation.Helpers"], function (require, exports, _, existingView, LiveOrderLineModel, CartConfirmationHelpers) {
    "use strict";
    _.extend(existingView.prototype, {
        addToCart: function addToCart(e) {
            try {
                setTimeout(function () {
                    for (var i = 0; i < document.getElementsByClassName("bx-pager-link").length; i++) {
                        var activeImgOptionURL = document.getElementsByClassName("bx-pager-link")[i].children[0].currentSrc.split("?")[0];
                        var mainImg = document.getElementsByClassName("product-details-image-gallery-container")[i + 1].innerHTML;
                        var mainImgSplit = mainImg.split(" ");
                        var mainImgSplitURL = mainImgSplit[1].split("?");
                        if (mainImgSplitURL[0] != ("src=\"" + activeImgOptionURL)) {
                            mainImgSplitURL[0] = "src=" + activeImgOptionURL;
                            mainImgSplit[1] = mainImgSplitURL.join("?");
                            var newImgSrc = mainImgSplit.join(" ");
                            document.getElementsByClassName("product-details-image-gallery-container")[i + 1].innerHTML = newImgSrc;
                        }
                    }
                }, 3000);
            }
            catch (e) {
                console.warn('The Zoom bug fix is throwing an error (Cart.AddToCart.Button.View): ' + JSON.stringify(e));
            }
            e.preventDefault();
            var self = this;
            var cart_promise;
            var imprintItemId = '';
            var crossItemId = '';
            var holyItemId = '';
            var imprintItemLines = [];
            if ($('.sub-items').length > 0)
                var isSubItem = true;
            else
                var isSubItem = false;
            if (isSubItem) {
                _.each($('[name="sub_item_qty"]'), function (subItem) {
                    var qtyEl = $(subItem);
                    var itemQty = $(subItem).val();
                    itemQty = parseInt(String(itemQty));
                    if (itemQty > 0) {
                        var itemId = $(subItem).attr('data-item-id');
                        var subItemLine = {
                            quantity: itemQty,
                            item: {
                                internalid: itemId
                            }
                        };
                        imprintItemLines.push(subItemLine);
                    }
                });
            }
            else if (!this.model.areAttributesValid(['options', 'quantity'], self.getAddToCartValidators())) {
                return;
            }
            if (_.has(this, 'attributes')) {
                if (_.has(this.attributes, 'data-root-component-id')) {
                    if (_.propertyOf(this.attributes)('data-root-component-id') == "ProductDetails.Full.View") {
                        var imprintItem = this.model.get('custcol_appf_imprint_item_details') || '';
                        var isCrossItem = this.model.get('custcol_appf_imprint_cross') || '';
                        var isHollyItem = this.model.get('custcol_appf_holy_bible') || '';
                        if (imprintItem) {
                            if (imprintItem.indexOf('|') != -1) {
                                imprintItemId = parseInt(imprintItem.split('|')[0]);
                                if (isCrossItem == "T")
                                    crossItemId = parseInt(imprintItem.split('|')[2]);
                                if (isHollyItem == "T")
                                    holyItemId = parseInt(imprintItem.split('|')[4]);
                            }
                        }
                    }
                }
            }
            var imprintItemQty = this.model.get('quantity') || '';
            if (imprintItemId && imprintItemQty) {
                var othitem = {
                    quantity: imprintItemQty,
                    item: {
                        internalid: imprintItemId
                    }
                };
                imprintItemLines.push(othitem);
                if (crossItemId) {
                    imprintItemLines.push({
                        quantity: imprintItemQty,
                        item: {
                            internalid: crossItemId
                        }
                    });
                }
                if (holyItemId) {
                    imprintItemLines.push({
                        quantity: imprintItemQty,
                        item: {
                            internalid: holyItemId
                        }
                    });
                }
            }
            if (!this.model.isNew() && this.model.get('source') === 'cart') {
                cart_promise = this.cart.updateProduct(this.model);
                /*if(imprintItemLines.length > 0){
                    this.cart.addLines(imprintItemLines);
                }*/
                cart_promise.done(function () {
                    self.options.application.getLayout().closeModal();
                });
            }
            else {
                var line = LiveOrderLineModel.createFromProduct(this.model);
                if (!isSubItem) {
                    imprintItemLines.push(line);
                }
                if (imprintItemLines.length)
                    cart_promise = this.cart.addLines(imprintItemLines);
                else
                    return false;
                if (isSubItem)
                    CartConfirmationHelpers._goToCart(cart_promise);
                else
                    CartConfirmationHelpers.showCartConfirmation(cart_promise, line, self.options.application);
            }
            cart_promise.fail(function (jqXhr) {
                var error_details = null;
                try {
                    if (jqXhr && jqXhr.responseText) {
                        var response = JSON.parse(jqXhr.responseText);
                        error_details = response.errorDetails;
                    }
                }
                catch (error) {
                    console.error(error);
                }
                finally {
                    if (error_details && error_details.status === 'LINE_ROLLBACK') {
                        self.model.set('internalid', error_details.newLineId);
                    }
                }
            });
            this.disableElementsOnPromise(cart_promise, e.target);
            return false;
        }
    });
    return existingView;
});

//# sourceMappingURL=Cart.AddToCart.Button.View.Ext.js.map
