/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Facets.ItemCell.View"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';

import ProductLineStockView = require('../../../Commons/ProductLine/JavaScript/ProductLine.Stock.View');
import ProductModel = require('../../../Commons/Product/JavaScript/Product.Model');
import GlobalViewsStarRating = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.StarRating.View');
import CartQuickAddToCartView = require('../../../Commons/Cart/JavaScript/Cart.QuickAddToCart.View');
import ProductViewsOptionView = require('../../../Commons/ProductViews/JavaScript/ProductViews.Option.View');
import ProductLineStockDescriptionView = require('../../../Commons/ProductLine/JavaScript/ProductLine.StockDescription.View');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import { Application } from '../../../Commons/ApplicationSkeleton/JavaScript/Application';

import ProductDetailsAddToProductListView = require('../../../Advanced/ProductDetails/JavaScript/ProductDetails.AddToProductList.View');
import ProductViewsPriceView = require('../../../Commons/ProductViews/JavaScript/ProductViews.Price.View');
import SessionStorageHandler = require("../../../Commons/Utilities/JavaScript/SessionStorageHandler");

interface FacetsItemCellViewOptions {
    template?: unknown;
    application: Application;
    model: any;
}
export = BackboneView.extend({
    attributes: {},

    initialize: function(options: FacetsItemCellViewOptions) {
        if (options.template) {
            this.template = options.template;
        }
    },

    contextData: {
        item: function() {
            return Utils.deepCopy(this.model);
        }
    },

    childViews: {
        'ItemViews.Stock': function() {
            return new ProductLineStockView({
                model: this.model
            });
        },
		'ItemViews.Price': function ()
		{
			return new ProductViewsPriceView({
				model: this.model
			});
		},
        'GlobalViews.StarRating': function() {
            const view = new GlobalViewsStarRating({
                model: this.model,
                showRatingCount: false,
                queryOptions: Utils.parseUrlOptions(location.href)
            });

            return this.options.showStarRating === false ? null : view;
        },

        'ItemDetails.Options': function() {
            const options_configuration = Configuration.get('ItemOptions.optionsConfiguration', []);

            return new BackboneCollectionView({
                collection: _.filter(this.model.get('options').sortBy('index'), function(
                    option: any
                ) {
                    const option_configuration: any = _.findWhere(options_configuration, {
                        cartOptionId: option.get('cartOptionId')
                    });
                    return option_configuration && option_configuration.showSelectorInList;
                }),
                childView: ProductViewsOptionView,
                viewsPerRow: 1,
                childViewOptions: {
                    item: this.model,
                    templateName: 'facetCell',
                    showLink: true,
                    hideLabel: true,
                    showSmall: true
                }
            });
        },

        'Cart.QuickAddToCart': function() {
            const product = new ProductModel({
                item: this.model,
                quantity: this.model.get('_minimumQuantity', true)
            });

            return new CartQuickAddToCartView({
                model: product,
                application: this.options.application || this.parentView.options.application
            });
        },
		'AddToProductList': function ()
		{
			var product = new ProductModel({
				item: this.model
			,	quantity: this.model.get('_minimumQuantity', true)
			});

			return new ProductDetailsAddToProductListView({
				model: product
			,	application: this.options.application || this.parentView.options.application
			});
		},
		StockDescription: function() {
            return new ProductLineStockDescriptionView({
                model: this.model
            });
        }
    },

    getContext: function() {
		
		this.model.productimg = true;
		if(this.model.get("commercecategory").categories.length > 0)
		{
			if(this.model.get("commercecategory").categories[0].id == Configuration.get("Musicianresourcepage.musicianresourceid"))
			{           
		
				this.model.productimg = false;
			}
		}
		
		var withinrange = false;
		var today = new Date();
		today.setHours(0, 0, 0, 0)

		var date1 = this.model.get('custitem_new_arrival_start_date')|| '';
		var date2 =  this.model.get('custitem_new_arrival_end_date')|| '';

		var currentdate:any = today.getTime();

		var fromdate:any = date1? new Date(date1).getTime():""
		var enddate:any = date2? new Date(date2).getTime():""
		
		if(parseFloat(currentdate) >= parseFloat(fromdate) && parseFloat(currentdate) <= parseFloat(enddate))
		withinrange = true;
	
		var array = this.options.previouslyPurchased;
		var self = this;
        if(self.options.isspecialCategory==true) 
		{   		
            for(var i = 0;i < array.length;i++) 
			{ 			
                 if(array[i][self.model.get('internalid')] == true){           
                       self.model.is_purchases = true;   
                 }
            }
        }

        return {
            // @property {String} itemId
            itemId: this.model.get('_id'),
            // @property {String} name
            name: this.model.get('_name'),
            // @property {String} url
            url: this.model.get('_url'),
            // @property {String} sku
            sku: this.model.getSku(),
            // @property {Boolean} isEnvironmentBrowser
            isEnvironmentBrowser:
                SC.ENVIRONMENT.jsEnvironment === 'browser' && !SC.ENVIRONMENT.isTouchEnabled,
            // @property {ImageContainer} thumbnail
            thumbnail: this.model.getThumbnail(),
            // @property {Boolean} itemIsNavigable
            itemIsNavigable: !_.isUndefined(this.options.itemIsNavigable)
                ? !!this.options.itemIsNavigable
                : true,
            // @property {Boolean} showRating
            showRating: SC.ENVIRONMENT.REVIEWS_CONFIG && SC.ENVIRONMENT.REVIEWS_CONFIG.enabled,
            // @property {Number} rating
            rating: this.model.get('_rating'),
            // @property {String} track_productlist_list
            track_productlist_list: this.model.get('track_productlist_list'),
            // @property {String} track_productlist_position
            track_productlist_position: this.model.get('track_productlist_position'),
            // @property {String} track_productlist_category
            track_productlist_category: this.model.get('track_productlist_category'),
			isGiftItem: (this.model.get('itemtype') == "GiftCert"),
			removeLogo: this.model.get('custitem_appf_remove_logo'),
			isOnSale: this.model.get('custitem_appf_item_on_sale') || false,
			newBadge: withinrange,
			ispurchase:this.options.isspecialcategory,
            is_purchased: this.model.is_purchases,
			showImg:this.model.productimg		
        };
    }
});
