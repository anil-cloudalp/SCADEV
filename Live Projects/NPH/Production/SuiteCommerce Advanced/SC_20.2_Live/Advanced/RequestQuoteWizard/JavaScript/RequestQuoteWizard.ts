/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="RequestQuoteWizard"/>
/// <reference path="../../../Commons/Utilities/JavaScript/GlobalDeclarations.d.ts"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

import RequestQuoteWizardRouter = require('./RequestQuoteWizard.Router');
import RequestQuoteWizardView = require('./RequestQuoteWizard.View');
import RequestQuoteWizardConfiguration = require('./RequestQuoteWizard.Configuration');
import { QuoteModel } from '../../../Commons/Quote/JavaScript/Quote.Model';
import ProductListModel = require('../../../Commons/ProductList/JavaScript/ProductList.Model');
import ProductListItemModel = require('../../../Commons/ProductList/JavaScript/ProductList.Item.Model');
import TransactionLineModel = require('../../../Commons/Transaction/JavaScript/Transaction.Line.Model');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

// @class RequestQuoteWizard @extend ApplicationModule
export = {
    // @method mountToApp
    // @param {ApplicationSkeleton} application
    // @return {RequestQuoteWizard.Router} Returns a new instance
    // of the RequestQuoteWizard.Router router
    mountToApp: function(application) {
        application.setConfig('requestQuoteWizard', RequestQuoteWizardConfiguration);

        this.application = application;

        const { requestQuoteWizard } = application.getConfig();
        const config = {
            steps: requestQuoteWizard.steps || [],
            model: new QuoteModel(),
            profile: ProfileModel.getInstance()
        };

        if (SC.ENVIRONMENT.PRODUCTLIST_ENABLED) {
            this.setupPersistence(application, config.model);
        }

        const requestRouter = new RequestQuoteWizardRouter(application, config);

        RequestQuoteWizardView.wizard = requestRouter;

        return requestRouter;
    },

    // @method setupPersistence
    // Please note that we prevent the request if ProductList isn't enabled
    // @param {ApplicationSkeleton} application
    // @param {Backbone.Model} model
    // @return {Void}
    setupPersistence: function(application, model) {
        const self = this;
        this.pl_internalid = null;
        this.pl_json = null;

        model.on('init', function() {
            application.ProductListModule.Utils.getRequestAQuoteProductList().done(function(json) {
                self.pl_json = json;
                self.pl_internalid = json.internalid;
                const products = new ProductListModel(json).get('items').models;

                // Turn the events momentarily off
                model.get('lines').off('add', self.addLines, self);
                model.get('lines').off('change', self.changeQuantity, self);
                model.get('lines').off('remove', self.doRemoveItemFromList, self);
                model.off('submit', self.doRemoveList, self);

                _.each(products, function(product: any, i) {
                    const selected_line = TransactionLineModel.createFromProduct(product);
                    selected_line.set('internalid', _.uniqueId('item_line'));
                    selected_line.set('pl_item_internalid', product.get('internalid'));

                    model.get('lines').add(selected_line, { silent: i < products.length - 1 });
                });

                // Turn the events on again
                model.get('lines').on('change', self.changeQuantity, self);
                model.get('lines').on('add', self.addLines, self);
                model.get('lines').on('remove', self.doRemoveItemFromList, self);
                model.on('submit', self.doRemoveList, self);
            });
        });
    },

    // @method addLines
    // @param {Transaction.Line.Model} product
    // @return {Void}
    addLines: function(product) {
        const self = this;

        if (!this.pl_internalid) {
            const pl_model = new ProductListModel(this.pl_json);

            pl_model.save().done(function(pl_json) {
                self.pl_json = pl_json;
                self.pl_internalid = pl_json.internalid;
                self.doAddItemToList(product);
            });
        } else {
            this.doAddItemToList(product);
        }
    },

    // @method doAddItemToList
    // @param {Transaction.Line.Model} product
    // @return {Void}
    doAddItemToList: function(product) {
        const product_list_line = ProductListItemModel.createFromProduct(product);

        if (product.get('item').get('_matrixParent').id) {
            // As the quote is a line, it will only save the child item, but product list saves the parent item
            // so we override the item with the parent one
            product_list_line.set('item', product.get('item').get('_matrixParent'), {
                silent: true
            });
        }

        product_list_line.set('productList', {
            id: this.pl_internalid
        });

        product_list_line
            .save(null, {
                // Note this is lack of validation is require to not validate the JSON returned from the services as it will lack the Model/Collection structure required
                // to run the validation. for example the list of options will be an array and not a collection as the event handle that parse them didn't run yet
                validate: false
            })
            .done(function(obj) {
                product.set('pl_item_internalid', obj.internalid, { silent: true });
            });
    },

    // @method changeQuantity Debounced due to concurrent updates of item quantities
    // @param {Transaction.Line.Model} line
    // @return {Void}
    changeQuantity: function(line) {
        this.toggleDisableSubmitButton(true);

        const product_list_item = {
            description: '',
            options: line.get('options').toJSON(), // this.getItemOptions(line.get('options'))
            quantity: line.get('quantity'),
            productList: {
                id: this.pl_internalid
            },
            item: {
                internalid: line.get('item').get('internalid')
            },
            internalid: line.get('pl_item_internalid')
        };
        const product_list_item_model = new ProductListItemModel(product_list_item);

        const modelInCollection = this.storeLinesToUpdateCollection.get(
            product_list_item_model.get('internalid')
        );
        modelInCollection
            ? modelInCollection.set('quantity', line.get('quantity'))
            : this.storeLinesToUpdateCollection.add(product_list_item_model);

        this.updateItemModels();
    },

    // @method storeLinesToUpdateCollection
    // @return {Backbone.Collection}
    storeLinesToUpdateCollection: new Backbone.Collection(),

    // @method updateItemModels Debouncing the update quantity models
    // @return {Void}
    updateItemModels: _.debounce(function() {
        const self = this;
        const updateLinesPromises = this.storeLinesToUpdateCollection.map(function(model) {
            return model.save();
        });

        this.storeLinesToUpdateCollection.reset();

        jQuery.when.apply(jQuery, updateLinesPromises).always(function() {
            self.toggleDisableSubmitButton(false);
        });
    }, 1000),

    // @method toggleDisableSubmitButton Disable/enable the Submit Quote Request buttons
    // @param {Boolean} status
    // @return {Void}
    toggleDisableSubmitButton: function(status) {
        this.application
            .getLayout()
            .$('[data-action="submit-step"]')
            .attr('disabled', status);
    },

    // @method doRemoveList
    // @return {Void}
    doRemoveList: function() {
        if (this.pl_json) {
            const pl_model = new ProductListModel(this.pl_json);
            pl_model.destroy();
            this.pl_json = null;
            this.pl_internalid = null;
        }
    },

    // @method doRemoveItemFromList
    // @param {Transaction.Line.Model} product
    // @return {Void}
    doRemoveItemFromList: function(product) {
        const product_list_item = {
            productList: {
                id: this.pl_internalid
            },
            item: {
                internalid: product.get('item').get('internalid')
            },
            internalid: product.get('pl_item_internalid')
        };
        const product_list_item_model = new ProductListItemModel(product_list_item);

        product_list_item_model.destroy();
    }

    // 	//@method getItemOptions
    // 	//@param {Array<Object>} item_options
    // 	//@return {Object}
    // ,   getItemOptions: function (item_options)
    // 	{
    // 		var result = {};

    // 		_.each(item_options, function (value, name)
    // 		{
    // 			result[value.id || name] = { value: value.value, displayvalue: value.displayvalue };
    // 		});

    // 		return result;
    // 	}
};
