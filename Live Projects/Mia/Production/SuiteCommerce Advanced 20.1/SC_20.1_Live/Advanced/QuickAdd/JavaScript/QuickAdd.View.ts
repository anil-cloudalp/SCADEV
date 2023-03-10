/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="QuickAdd.View"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as quick_add_tpl from 'quick_add.tpl';
import * as quick_add_item_tpl from 'quick_add_item.tpl';

import ItemsSearcherView = require('../../ItemsSearcher/JavaScript/ItemsSearcher.View');
import Configuration = require('../../SCA/JavaScript/SC.Configuration');
import QuickAddModel = require('./QuickAdd.Model');
import QuickAddItemView = require('./QuickAdd.Item.View');
import QuickAddItemsSearcherPlugins = require('./QuickAdd.ItemsSearcher.Plugins');
import TransactionLineViewsOptionsSelectedView = require('../../../Commons/Transaction.Line.Views/JavaScript/Transaction.Line.Views.Options.Selected.View');
import ProductViewsPriceView = require('../../../Commons/ProductViews/JavaScript/ProductViews.Price.View');
import ProductLineStockView = require('../../../Commons/ProductLine/JavaScript/ProductLine.Stock.View');
import ProductLineSkuView = require('../../../Commons/ProductLine/JavaScript/ProductLine.Sku.View');
import TransactionLineModel = require('../../../Commons/Transaction/JavaScript/Transaction.Line.Model');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneFormView = require('../../../Commons/Backbone.FormView/JavaScript/Backbone.FormView');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

// @class QuickAdd.View @extends Backbone.View
const QuickAddView: any = BackboneView.extend({
    // @property {Function} template
    template: quick_add_tpl,

    // @property {Object} events
    events: {
        'click [data-type="quick-add-reset"]': 'resetHandle',
        'submit form': 'saveForm',

        'click [data-action="plus"]': 'addQuantity',
        'click [data-action="minus"]': 'subQuantity',
        'change [data-type="quantity-input"]': 'setQuantity',
        'click [data-type="quantity-input"]': 'selectAll',
        'keypress [name="quantity"]': 'submitOnEnter',
        'keydown [name="quantity"]': 'onKeyDown'
    },

    // @method initialize Override default initialization method to configure inner itemsSearcher component
    // @param {QuickAdd.View.Initialize.Options?} options
    // @return {Void}
    initialize: function() {
        this.itemsSearcherComponent = new ItemsSearcherView({
            placeholderLabel: Utils.translate('Enter SKU or Item Name'),
            showBackorderables: this.options.showBackorderable,
            minLength: Configuration.get('typeahead.minLength', 3),
            maxLength: Configuration.get('searchPrefs.maxLength', 0),
            limit: Configuration.get('typeahead.maxResults', 10),
            sort: Configuration.get('typeahead.sort', 'relevance:desc'),
            highlight: Configuration.get('typeahead.highlight', true),
            componentId: 'quickaddSearch',
            componentName: 'quickaddSearch',
            showMenuOnClick: true,
            showSeeAll: false,
            collectionOptions: {
                searcherAPIConfiguration: 'searchApiMasterOptions.itemsSearcher'
            },
            itemView: QuickAddItemView,
            itemViewOptions: {
                template: quick_add_item_tpl,
                childViews: {
                    'Item.Options': function(options) {
                        return function() {
                            return new TransactionLineViewsOptionsSelectedView({
                                model: options.model
                            });
                        };
                    },
                    'Item.Price': function(options) {
                        return function() {
                            return new ProductViewsPriceView({
                                model: options.model
                            });
                        };
                    },
                    'Item.Stock': function(options) {
                        return function() {
                            return new ProductLineStockView({
                                model: options.model
                            });
                        };
                    },
                    'Item.Sku': function(options) {
                        return function() {
                            return new ProductLineSkuView({
                                model: options.model
                            });
                        };
                    }
                }
            },
            getItemDisplayName: function(item, query) {
                return item ? item.getSku() : query;
            }
        });
        this.itemsSearcherComponent.postItemsSuggestionObtained.install(
            QuickAddItemsSearcherPlugins.flatItemsMatrixResult
        );

        this.model = new QuickAddModel();
        this.model.setOptions({
            getItemQuantitySet: this.options.getItemQuantitySet,
            validateMaxQty: this.options.validateMaxQty
        });

        this.itemsSearcherComponent.on('itemSelected', this.onItemSelected, this);
        this.itemsSearcherComponent.on('keyUp', this.showReset, this);
        this.itemsSearcherComponent.on('keyDown', this.cleanSearchOnEnter, this);

        const original_save_form = this.saveForm;
        BackboneFormView.add(this);
        this.saveForm = original_save_form;
    },

    // @method saveForm Handle the current form validation and triggers the event selectedLien
    // @param {jQueryEvent} e
    // @return {Void}
    saveForm: function(e) {
        e.preventDefault();

        Backbone.Validation.bind(this);

        this.model.set(this.$('form').serializeObject());

        const product = this.model.get('selectedProduct');

        if (this.model.isValid(true) && product) {
            product.set('quantity', parseInt(this.model.get('quantity'), 10));

            const selected_line = new TransactionLineModel(product.toJSON());

            selected_line.set('internalid', _.uniqueId('item_line'));
            selected_line.set('item', product.getItem().clone());
            selected_line.set('options', product.get('options').clone());

            // if the item is a matrix we add the parent so when saving the item in a product list (request a quote case)
            // we have the parent
            if (product.get('item').get('_matrixChilds').length) {
                selected_line.get('item').set('_matrixParent', product.get('item'));
            }
            selected_line.unset('selectedProduct');
            selected_line.unset('quickaddSearch');

            // @event {QuickAdd.View.SelectedLine.Properties} selectedLine
            this.trigger(
                'selectedLine',
                // @class QuickAdd.View.SelectedLine.Properties
                {
                    // @property {Transaction.Line.Model} selectedLine
                    selectedLine: selected_line
                }
            );
            // @class QuickAdd.View

            this.$('[name="quantity"]').val('');
            this.$('[name="quantity"]').attr({ min: 1 });
            this.$('[data-type="quick-add-reset"]').hide();
            this.itemsSearcherComponent.cleanSearch();
            this.itemsSearcherComponent.setFocus();
        }
    },

    // @method setQuantity Update by removing 1 to the current quantity of the current line
    // @param {jQuery.Event} e
    // @return {Void}
    setQuantity: function(e) {
        if (this.model.get('selectedProduct')) {
            const str_quantity = this.$(e.target).val();
            const quantity = parseInt(str_quantity, 10);
            const minimum_quantity = this.model
                .get('selectedProduct')
                .get('item')
                .get('_minimumQuantity', true);
            const maximum_quantity = this.model
                .get('selectedProduct')
                .get('item')
                .get('_maximumQuantity', true);
            let quantity_already_set = 0;

            if (_.isFunction(this.options.getItemQuantitySet)) {
                quantity_already_set =
                    this.options.getItemQuantitySet(
                        this.model.get('selectedProduct').getItemId()
                    ) || 0;
            }

            if (!_.isNaN(quantity) && _.isNumber(quantity)) {
                if (quantity_already_set + quantity < minimum_quantity) {
                    if (
                        !maximum_quantity ||
                        (!!maximum_quantity && quantity + quantity_already_set < maximum_quantity)
                    ) {
                        this.$('[data-type="quantity-input"]').val(minimum_quantity);
                    }
                }
            }
        }
    },

    // @method addQuantity Increase the product's Quantity by 1
    // @param {jQuery.Event} e
    // @return {Void}
    addQuantity: function(e) {
        e.preventDefault();

        const $element = this.$(e.target);
        const quantity_input = $element.parent().find('input');
        const old_value = quantity_input.val();
        const max_quantity = this.model
            .get('selectedProduct')
            .get('item')
            .get('_maximumQuantity', true);
        let new_val = parseFloat(old_value) + 1;

        new_val = !!max_quantity && new_val > max_quantity ? max_quantity : new_val;

        quantity_input.val(new_val);
        quantity_input.change();
    },

    // @method subQuantity Decreases the product's Quantity by 1
    // @param {jQuery.Event} e
    // @return {Void}
    subQuantity: function(e) {
        e.preventDefault();

        const $element = this.$(e.target);
        const quantity_input = $element.parent().find('input');
        const old_value = quantity_input.val();
        let new_val = parseFloat(old_value) - 1;

        new_val = Math.max(
            this.model
                .get('selectedProduct')
                .get('item')
                .get('_minimumQuantity', true),
            new_val
        );

        quantity_input.val(new_val);
        quantity_input.change();
    },

    // @method showReset Handle when to show or hide the reset button
    // @param {ItemsSearcher.View.KeyDown.Properties} event_properties
    // @return {Void}
    showReset: function(event_properties) {
        if (event_properties.currentQuery) {
            this.$('[data-type="quick-add-reset"]').show();
        } else {
            this.$('[data-type="quick-add-reset"]').hide();
        }
    },

    // @method cleanSearchOnEnter Cleans the current search status
    // @param {ItemsSearcher.View.KeyDown.Properties} event_properties
    // @return {Void}
    cleanSearchOnEnter: function(event_properties) {
        if (event_properties.eventObject.keyCode === 27) {
            this.$('[data-type="quick-add-reset"]').hide();
            this.itemsSearcherComponent.cleanSearch();
        }
    },

    // @method onKeyDown Prevent letter e & other characters in "type=number" and allow arrows
    // @param {jQueryEvent} e
    // @return {Void}
    onKeyDown: function(e) {
        const jq_event: any = event;
        const key_code = e.which ? e.which : jq_event.keyCode;

        if (
            key_code > 31 &&
            (key_code < 48 || key_code > 57) &&
            !(key_code >= 37 || key_code <= 40)
        ) {
            e.preventDefault();
        }
    },

    // @method submitOnEnter Submit the form when user presses enter in the quantity input text
    // @param {jQuery.Event} e
    // @return {Void}
    submitOnEnter: function(e) {
        if (e.keyCode === 13) {
            this.itemsSearcherComponent.setFocus();
        }
    },

    // @method resetHandle Handle the reset action by hiding it and cleaning the current search status
    // @return {Void}
    resetHandle: function() {
        this.$('[data-type="quick-add-reset"]').hide();
        this.itemsSearcherComponent.cleanSearch();
        this.$('[name="quantity"]').val('');
    },

    // @method selectAll on focus select all input value
    // @return {Void}
    selectAll: function() {
        this.$('[name="quantity"]').select();
    },

    // @method onItemSelected Handle the selection of an item of the type-ahead result
    // @param {ItemsSearcher.View.itemSelected.Properties} result
    // @return {Void}
    onItemSelected: function(result) {
        // As the item searcher has been thought to work with items the property is called selectedItem, but we changed in the installed
        // plugin to use Products
        const product = result.selectedItem;
        let item;

        if (product) {
            item = product.getItem();

            this.model.set('quickaddSearch', item.get('_name'));
            this.model.set('selectedProduct', product);

            this.setDefaultQuantity(item.get('_minimumQuantity', true), item.get('internalid'));
            this.$('[name="quantity"]').focus();
            this.selectAll();

            const minimum_quantity = item.get('_minimumQuantity', true);

            if (minimum_quantity > 1) {
                this.$('[data-type="minimum-quantity"]').html(
                    Utils.translate('Minimum of $(0) required', minimum_quantity)
                );
            }

            this.$('[data-validation-error="block"]').remove();
        } else {
            this.model.unset('selectedProduct');
            this.$('[data-type="minimum-quantity"]').empty();
        }
    },

    // @method setDefaultQuantity Set the default quantity based on the minimum quantity for the selected item and
    // also validate the other items into the "cart" or cart-like
    // @param {Number} minimum_quantity
    // @param {Number} item_id
    // @return {Void}
    setDefaultQuantity: function(minimum_quantity, item_id) {
        const current_quantity = parseInt(this.$('[name="quantity"]').val(), 10);

        this.$('[name="quantity"]').select();

        if (_.isFunction(this.options.getItemQuantitySet)) {
            minimum_quantity -= this.options.getItemQuantitySet(item_id) || 0;
        }

        minimum_quantity = minimum_quantity <= 0 ? 1 : minimum_quantity;

        if (
            !_.isNumber(current_quantity) ||
            _.isNaN(current_quantity) ||
            current_quantity < minimum_quantity
        ) {
            this.model.set('quantity', minimum_quantity);
            this.$('[name="quantity"]').val(minimum_quantity);
            this.$('[name="quantity"]').attr('min', minimum_quantity);
        }
    },

    // @property {ChildViews} childViews
    childViews: {
        ItemsSearcher: function() {
            return this.itemsSearcherComponent;
        }
    },

    // @method getContext
    // @return {QuickAdd.View.Context}
    getContext: function() {
        // @class QuickAdd.View.Context
        return {
            // @property {String} itemTitle
            itemTitle:
                this.options.itemTitle || Utils.translate('Which item(s) would you like to add?'),
            // @property {String} quantityTitle
            quantityTitle: this.options.quantityTitle || Utils.translate('Quantity')
        };
        // @class QuickAdd.View
    }
});

export = QuickAddView;

// @class QuickAdd.View.Initialize.Options
// @property {String?} itemTitle Allows to specify the title used for the items sub-component
// @property {String?} quantityTitle Allows to specify the title used for the quantity input
// @property {Function<Number,Number>} getItemQuantitySet Function that given an item id returns how many item already are present in the cart-like.
// This work to decouple this component of any other concrete implementation.
// IMPORTANT: If the passed in item id is not in the cart-like this function must return 0 (the number zero).
