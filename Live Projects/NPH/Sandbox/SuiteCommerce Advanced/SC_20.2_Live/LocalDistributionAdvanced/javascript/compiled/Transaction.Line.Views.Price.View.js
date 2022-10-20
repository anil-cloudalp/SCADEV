/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Transaction.Line.Views.Price.View", ["require", "exports", "underscore", "transaction_line_views_price.tpl", "Configuration", "Profile.Model", "Backbone", "Backbone.View", "Session"], function (require, exports, _, transaction_line_views_price_tpl, Configuration_1, Profile_Model_1, Backbone, BackboneView, Session) {
    "use strict";
    var TransactionLineViewsPriceView = BackboneView.extend({
        // @property {Function} template
        template: transaction_line_views_price_tpl,
        // @method initialize
        // @param {Transaction.Line.Views.Price.View.Options} options
        // @return {Void}
        initialize: function () {
            this.profileModel = Profile_Model_1.ProfileModel.getInstance();
            var isPriceVisible = !!this.options.ignorePriceVisibility ||
                (this.model.get('item') && this.model.get('item').get('ispricevisible') !== false);
            this.isPriceEnabled = !Profile_Model_1.ProfileModel.getInstance().hidePrices() && isPriceVisible;
            if (this.isPriceEnabled) {
                this.model.on('change:quantity', function () {
                    this.render();
                }, this);
            }
        },
        // @method getUrlLogin Get the login URL contains an origin hash parameter indicating the current URL to came back after login
        // @return {String}
        getUrlLogin: function () {
            var url = Session.get('touchpoints.login') + "&origin=" + (Configuration_1.Configuration.get('currentTouchpoint') || 'home') + "&origin_hash=";
            return (url +
                encodeURIComponent(this.options.origin === 'PDPQUICK'
                    ? this.model.generateURL().replace('/', '')
                    : Backbone.history.fragment));
        },
        // @method getContext
        // @returns {Transaction.Line.Views.Price.View.Context}
        getContext: function () {
            var price_container_object = this.model.getPrice();
            var showComparePrice = this.options.showComparePrice &&
                price_container_object.price < price_container_object.compare_price;
            var item = this.model.get('item') || this.model;
            var quantity = this.model.get('quantity');
            var betterPrice = item && item.getBetterPrice(quantity);
            if (betterPrice) {
                showComparePrice = true;
            }
            // Price Addition For Other Charge Item
            var customPrice;
            var originalPrice = price_container_object.price || 0;
            var imprintDetails, isCrossItem, isHolyItem, othChargePrice = 0, crossItemPrice = 0, holyItemPrice = 0;
            /*var isCalculation = false;
            console.log(this);
            if(_.has(this,'attributes')){
                    
                if(_.has(this.attributes,'data-root-component-id')){
                    
                    if(_.propertyOf(this.attributes)('data-root-component-id') == "Cart.Detailed.View" || _.propertyOf(this.attributes)('data-root-component-id') == "Wizard.View"){
                        isCalculation = true;
                    }
                }
            }
            if(this.parentView.attributes.id == "Cart.Confirmation.View" || isCalculation){*/
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
            if (imprintDetails && originalPrice) {
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
                customPrice = this.model.get('rate_formatted') || price_container_object.price_formatted || '';
            }
            // @class Transaction.Line.Views.Price.View.Context
            return {
                // @property {Transaction.Line.Model} model
                model: this.model,
                // @property {Boolean} showComparePrice
                showComparePrice: showComparePrice,
                // @property {Boolean} isInStock
                isInStock: !!this.model.getStockInfo().isInStock,
                // @property {String} currencyCode
                currencyCode: (SC.getSessionInfo('currency') && SC.getSessionInfo('currency').code) ||
                    SC.ENVIRONMENT.currencyCodeSpecifiedOnUrl,
                // @property {String} comparePriceFormatted
                comparePriceFormatted: betterPrice
                    ? betterPrice.defaultItemPrice
                    : price_container_object.compare_price_formatted || '',
                // @property {Number} price
                price: price_container_object.price || 0,
                // @property {String} rateFormatted
                rateFormatted: customPrice,
                // @property {Boolean} isPriceEnabled
                isPriceEnabled: this.isPriceEnabled,
                // @property {String} urlLogin
                urlLogin: this.getUrlLogin(),
                // @property {Boolean} isLoggedIn
                isLoggedIn: this.profileModel.isLoggedIn()
            };
            // @class Transaction.Line.Views.Price.View
        }
    });
    return TransactionLineViewsPriceView;
});

//# sourceMappingURL=Transaction.Line.Views.Price.View.js.map
