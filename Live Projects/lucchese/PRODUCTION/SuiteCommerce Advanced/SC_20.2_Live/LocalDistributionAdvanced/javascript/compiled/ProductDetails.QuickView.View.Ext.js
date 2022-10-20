/// <amd-module name="ProductDetails.QuickView.View.Ext"/>
define("ProductDetails.QuickView.View.Ext", ["require", "exports", "underscore", "ProductDetails.QuickView.View", "Configuration", "Item.Collection", "ColorUtils"], function (require, exports, _, ProductDetailsQuickView_View, Configuration_1, ItemCollection, ColorUtils) {
    "use strict";
    _.extend(ProductDetailsQuickView_View.prototype, {
        events: _.extend({}, ProductDetailsQuickView_View.prototype.events, {
            'click .product-views-option-tile-input-picker': 'showStock'
        }),
        beforeShowContent: _.wrap(ProductDetailsQuickView_View.prototype.beforeShowContent, function beforeShowContent(fn) {
            var promise = fn.apply(this, _.toArray(arguments).slice(1));
            var promiseNew = jQuery.Deferred();
            var self = this;
            promise.always(function () {
                var familyName = self.model.get('item').get('custitem_appf_b2b_family_name');
                if (familyName) {
                    var options = {
                        'custitem_appf_b2b_family_name': familyName,
                        'fields': 'urlcomponent,itemoptions_detail'
                    };
                    self.colorMaps = new ItemCollection();
                    self.colorMaps.fetch({ data: options }).then(function () {
                        promiseNew.resolve();
                    });
                }
                else {
                    promiseNew.resolve();
                }
            });
            return promiseNew;
        }),
        showStock: function (e) {
            var obj = {};
            var self = this;
            var isOptionsAvailable = true;
            var count = 0;
            var invLocation = Configuration_1.Configuration.get('InventoryCart.location') || 109; //9001 DISTR (ID: 109)
            _.each(this.model.get('options').models, function (model) {
                if (model.get('isMandatory') && model.get('type') == 'select') {
                    if (model.get('values').length < 1) {
                        isOptionsAvailable = false;
                    }
                }
            });
            var optionsLen = _.filter(this.model.get('options').models, function (model) {
                return model.get('isMandatory') && model.get('type') == 'select' && model.get('templateSelector') == "product_views_option_tile.tpl";
            });
            if (isOptionsAvailable) {
                var label = $(e.currentTarget).parent().text().trim();
                var itemOptionId = $(e.currentTarget).parent().parent().parent().parent().attr('data-item-option-id').trim();
                obj[itemOptionId] = label;
                count++;
                $('.product-views-option-tile-picker').each(function () {
                    if ($(this).hasClass('active')) {
                        if (label != $(this).text().trim() && itemOptionId != $(this).parent().parent().parent().attr('data-item-option-id')) {
                            obj[$(this).parent().parent().parent().attr('data-item-option-id').trim()] = $(this).text().trim();
                            count++;
                        }
                    }
                });
                var filteredArr = [];
                _.each(self.model.get('item').get('matrixchilditems_detail'), function (model) {
                    filteredArr.push(model);
                });
                if (count == optionsLen.length && !_.isEmpty(obj)) {
                    var res = this.filter(filteredArr, obj);
                    var total_stock = 0;
                    _.each(res, function (res) {
                        if (!_.isUndefined(res.quantityavailable_detail)) {
                            if (res.quantityavailable_detail.locations.length > 0) {
                                _.each(res.quantityavailable_detail.locations, function (location) {
                                    if (location.internalid == invLocation)
                                        total_stock = total_stock + location.quantityavailable;
                                });
                            }
                        }
                    });
                    $('.quantity-available-stock-value-qty').html(total_stock);
                }
            }
        },
        filter: function (arr, criteria) {
            return arr.filter(function (obj) {
                return Object.keys(criteria).every(function (c) {
                    return obj[c] == criteria[c];
                });
            });
        },
        getContext: _.wrap(ProductDetailsQuickView_View.prototype.getContext, function getContext(fn) {
            var retObj = fn.apply(this, _.toArray(arguments).slice(1));
            var colorObj = this.model.getOption('custcol2');
            var internalid = this.model.getItem().get('internalid');
            var selectedColorId = (colorObj && colorObj.get('value') && colorObj.get('value').internalid);
            var ccode = (colorObj && colorObj.get('value') && colorObj.get('value').label);
            var colObj_1 = ColorUtils.getColorInfo(ccode, internalid);
            retObj.colorValue = _.has(colObj_1, 'label') ? colObj_1['label'] : ccode;
            var self = this;
            retObj.colorMaps = _.map(this.getColorMaps(), function (obj) {
                if ((obj.colorId == selectedColorId) && (obj.id == internalid)) {
                    obj.selected = true;
                }
                var colObj = ColorUtils.getColorInfo(obj.color, obj.id);
                obj.colorValue = _.has(colObj, 'hexcode') ? colObj['hexcode'] : '';
                obj.colorLabel = _.has(colObj, 'label') ? colObj['label'] : '';
                return obj;
            });
            return retObj;
        }),
        getColorMaps: function () {
            var colorMaps = [];
            if (this.colorMaps && this.colorMaps.length) {
                this.colorMaps.each(function (model) {
                    var colorObj = model.getOption('custcol2');
                    var colorOpts = (colorObj && colorObj.get('values')) ? colorObj.get('values') : [];
                    _.each(colorOpts, function (opt) {
                        if (_.has(opt, 'internalid')) {
                            colorMaps.push({
                                id: model.get('internalid'),
                                url: model.get('urlcomponent'),
                                colorId: opt.internalid,
                                color: opt.label
                            });
                        }
                    });
                });
            }
            else {
                var model = this.model.get('item');
                var colorObj = model.getOption('custcol2');
                var colorOpts = (colorObj && colorObj.get('values')) ? colorObj.get('values') : [];
                _.each(colorOpts, function (opt) {
                    if (_.has(opt, 'internalid')) {
                        colorMaps.push({
                            id: model.get('internalid'),
                            url: model.get('urlcomponent'),
                            colorId: opt.internalid,
                            color: opt.label
                        });
                    }
                });
            }
            return colorMaps;
        }
    });
    return ProductDetailsQuickView_View;
});

//# sourceMappingURL=ProductDetails.QuickView.View.Ext.js.map
