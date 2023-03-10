/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Subscriptions.Pricing.View", ["require", "exports", "underscore", "subscriptions_pricing.tpl", "QuantityPricing.View", "Utils"], function (require, exports, _, subscriptions_pricing_tpl, QuantityPricingView, Utils) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionsPricingView = void 0;
    // @class Subscriptions.Pricing.View @extends Backbone.View
    exports.SubscriptionsPricingView = QuantityPricingView.extend({
        template: subscriptions_pricing_tpl,
        initialize: function () {
            var prices = this.model.get('item').get('_priceDetails') &&
                this.model.get('item').get('_priceDetails').priceschedule;
            if (prices && prices.length > 1) {
                this.options.notUseAccordion = true;
            }
            QuantityPricingView.prototype.initialize.apply(this, arguments);
        },
        getContext: function () {
            var _this = this;
            var priceObject = this.model.getDefaultOfferStr();
            var columnTitle = priceObject.type === 'usage' ? 'Unit' : 'Quantity';
            var priceOption = priceObject.priceOption === 'FIXED' ? 'all' : 'each';
            var type;
            switch (priceObject.type) {
                case 'usage':
                    type = 'unit';
                    break;
                case 'recurring':
                    type = priceObject.priceOption === 'FIXED' ? ' per unit' : 'each';
                    break;
                default:
                    break;
            }
            switch (priceObject.planType) {
                case 'tiered':
                    _.each(this.price_schedule, function (priceSchedule, index) {
                        priceSchedule.tdPreppend =
                            priceObject.priceOption === 'FIXED' ? 'from  ' : 'first ';
                        priceSchedule.tdAppend = " " + priceOption;
                        if (index === 0) {
                            priceSchedule.tdPreppend =
                                priceObject.priceOption === 'FIXED' ? 'up to ' : 'first ';
                        }
                        if (priceObject.priceOption === 'FIXED') {
                            if (index === 0) {
                                priceSchedule.auxPrice = priceSchedule.price;
                            }
                            else {
                                priceSchedule.auxPrice =
                                    _this.price_schedule[index - 1].auxPrice + priceSchedule.price;
                                priceSchedule.price_formatted =
                                    SC.SESSION.currency.symbol + priceSchedule.auxPrice.toFixed(2);
                            }
                        }
                        if (index === _.size(_this.price_schedule) - 1) {
                            priceSchedule.tdPreppend =
                                priceObject.priceOption === 'FIXED' ? 'over ' : 'the next ';
                        }
                    });
                    break;
                case 'volume':
                    _.each(this.price_schedule, function (price, index) {
                        price.tdPreppend = 'from ';
                        price.tdAppend = " " + priceOption;
                        if (index === 0) {
                            price.tdPreppend = 'up to ';
                        }
                        if (index === _.size(_this.price_schedule) - 1) {
                            price.tdPreppend = 'over ';
                        }
                    });
                    break;
                default:
                    break;
            }
            return {
                isFullMode: this.options.fullMode,
                option: priceObject.option,
                type: this.model.getDefaultOfferStr().isOneTime ? 'each' : type,
                priceSchedule: this.price_schedule,
                frequency: "/" + priceObject.frequency,
                defaultPrice: Utils.formatCurrency(priceObject.minamount) || priceObject.defaultPrice,
                showMinimumMaximum: !!(priceObject.minamount || priceObject.maxamount),
                showMinimum: !!priceObject.minamount,
                minimumValue: Utils.formatCurrency(priceObject.minamount),
                showMaximum: !!priceObject.maxamount,
                maximumValue: Utils.formatCurrency(priceObject.maxamount),
                showQuantity: !(priceObject.type === 'usage'),
                pricingColumnTitle: columnTitle,
                showPricingDetails: this.priceSchedule > 1
            };
        }
    });
});

//# sourceMappingURL=Subscriptions.Pricing.View.js.map
