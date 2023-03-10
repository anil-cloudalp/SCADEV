/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Transaction.Line.Views.Option.View", ["require", "exports", "underscore", "Configuration", "Backbone.View", "ColorUtils"], function (require, exports, _, Configuration_1, BackboneView, ColorUtils) {
    "use strict";
    var TransactionLineViewsOptionView = BackboneView.extend({
        // @initialize initialize Set the option template and values availability
        // @param {Transaction.Line.Views.Option.View.initialize} options
        // @return {Void}
        initialize: function () {
            this.config = _.findWhere(Configuration_1.Configuration.get('ItemOptions.optionsConfiguration', []), {
                cartOptionId: this.model.get('cartOptionId')
            }) || { templates: {} };
            this.config.templates = this.config.templates || {};
            this.line_model = this.options.line;
            var item_options_default_templates = Configuration_1.Configuration.get('ItemOptions.defaultTemplates', {});
            if (item_options_default_templates && item_options_default_templates.selectorByType) {
                // Sets templates for this option
                if (!this.config.templates.selector) {
                    var option_selector_template = item_options_default_templates.selectorByType[this.model.get('type')];
                    var default_option_selector_template = item_options_default_templates.selectorByType.default;
                    this.config.templates.selector =
                        option_selector_template || default_option_selector_template;
                }
                if (!this.config.templates.selected) {
                    var selected_option_template = item_options_default_templates.selectedByType[this.model.get('type')];
                    var default_selected_option_template = item_options_default_templates.selectedByType.default;
                    this.config.templates.selected =
                        selected_option_template || default_selected_option_template;
                }
            }
            this.options.templateName = this.options.templateName || 'selector';
            this.template = this.config.templates[this.options.templateName];
        },
        render: function () {
            if (!this.model.get('value') || !this.model.get('value').internalid) {
                return this;
            }
            return this._render();
        },
        // @method getContext
        // @returns {Transaction.Line.Views.Option.View.Context}
        getContext: function () {
            var self = this;
            var selected_value = this.model.get('value') || {};
            var values = _.map(this.model.get('values') || [], function (value) {
                var color = '';
                var is_color_tile = false;
                var image = {};
                var is_image_tile = false;
                var colorLabel = '';
                if (self.model.get('cartOptionId') == 'custcol2') {
                    var matrix_parent = self.line_model.getItem().get('matrix_parent');
                    var matrix_parent_id = (matrix_parent && matrix_parent.internalid);
                    var colObj = ColorUtils.getColorInfo(value.label, matrix_parent_id);
                    color = _.has(colObj, 'hexcode') ? colObj['hexcode'] : '';
                    colorLabel = _.has(colObj, 'label') ? colObj['label'] : '';
                    is_color_tile = true;
                }
                /*if (self.model.get('colors')) {
                    color =
                        self.model.get('colors')[(<any>value).label] ||
                        self.model.get('colors').defaultColor;
                    if (_.isObject(color)) {
                        image = color;
                        color = '';
                        is_image_tile = true;
                    } else {
                        is_color_tile = true;
                    }
                }*/
                // @class ItemOptions.Option.View.Value
                return {
                    // @property {String} internalid
                    internalid: value.internalid,
                    // @property {Boolean} isAvailable
                    isAvailable: value.isAvailable,
                    // @property {String} label
                    label: colorLabel || value.label,
                    // @property {Boolean} isActive
                    isActive: value.internalid === selected_value.internalid,
                    // @property {String} color
                    color: color,
                    // @property {Boolean} isColorTile
                    isColorTile: is_color_tile,
                    // @property {Boolean} isImageTile
                    isImageTile: is_image_tile,
                    // @property {Object} image
                    image: image,
                    // @property {Boolean} isLightColor
                    isLightColor: _.contains(Configuration_1.Configuration.get('layout.lightColors', []), value.label)
                };
                // @class Transaction.Line.Views.Option.View
            });
            selected_value = _.extend({}, selected_value, _.findWhere(values, { internalid: selected_value.internalid }) || {});
            selected_value.label = selected_value.label || selected_value.internalid;
            // @class Transaction.Line.Views.Option.View.Context
            return {
                // @property {Transaction.Line.Option.Model} model
                model: this.model,
                // @property {Array<ItemOptions.Option.View.Value>} values
                values: values,
                // @property {Boolean} showSelectedValue
                showSelectedValue: !!selected_value,
                // @property {Boolean} isMandatory
                isMandatory: this.model.get('isMandatory'),
                // @property {String} itemOptionId
                itemOptionId: this.model.get('itemOptionId'),
                // @property {String} cartOptionId
                cartOptionId: this.model.get('cartOptionId'),
                // @property {String} label
                label: (this.config && this.config.label) || this.model.get('label'),
                // @property {ItemViews.Option.View.Option} selectedValue
                selectedValue: selected_value,
                // @property {Boolean} isTextArea
                isTextArea: this.model.get('type') === 'textarea',
                // @property {Boolean} isEmail
                isEmail: this.model.get('type') === 'email',
                // @property {Boolean} isText
                isText: this.model.get('type') === 'text',
                // @property {Boolean} isSelect
                isSelect: this.model.get('type') === 'select',
                // @property {Boolean} isCheckbox
                isCheckbox: this.model.get('type') === 'checkbox',
                // @property {Boolean} idDate
                isDate: this.model.get('type') === 'date',
                // @property {String} htmlId
                htmlId: 'option-' + this.model.get('cartOptionId'),
                // @property {String} htmlIdContainer
                htmlIdContainer: this.model.get('cartOptionId') + '-container'
            };
            // @class Transaction.Line.Views.Option.View
        }
    });
    return TransactionLineViewsOptionView;
});

//# sourceMappingURL=Transaction.Line.Views.Option.View.js.map
