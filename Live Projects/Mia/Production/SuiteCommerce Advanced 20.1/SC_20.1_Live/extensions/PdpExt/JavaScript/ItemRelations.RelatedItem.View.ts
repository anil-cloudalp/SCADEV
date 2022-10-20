/*
© 2020 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ItemRelations.RelatedItem.View"/>

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as item_relations_related_item_tpl from 'item_relations_related_item.tpl';

import ProductViewsPriceView = require('../../../Commons/ProductViews/JavaScript/ProductViews.Price.View');
import GlobalViewsStarRatingView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.StarRating.View');
import BackboneCompositeView = require('../../../Commons/Backbone.CompositeView/JavaScript/Backbone.CompositeView');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import CartAddToCartButtonView = require('../../../Commons/Cart/JavaScript/Cart.AddToCart.Button.View');
import ProductModel = require('../../../Commons/Product/JavaScript/Product.Model');
import ProfileModel = require('../../../Commons/Profile/JavaScript/Profile.Model');
import * as _ from 'underscore';

// @class ItemViews.RelatedItem.View Responsible for rendering an item details. The idea is that the item rendered is related to another one in the same page
// @extend Backbone.View
const ItemRelationsRelatedItemView = BackboneView.extend({
  // @property {Function} template
  template: item_relations_related_item_tpl,

  // @method initialize Override default method to make this view composite
  // @param {ItemViews.RelatedItem.View.Initialize.Options} options
  // @return {Void}
  initialize: function() {
    BackboneView.prototype.initialize.apply(this, arguments);
    BackboneCompositeView.add(this);
  },

  contextData: {
    item: function() {
      return Utils.deepCopy(this.model);
    }
  },

  childViews: {
    'Item.Price': function() {
      return new ProductViewsPriceView({
        model: this.model,
        origin: 'RELATEDITEM'
      });
    },
    'Global.StarRating': function() {
      return new GlobalViewsStarRatingView({
        model: this.model,
        showRatingCount: false
      });
    },
    'CartAddToCart': function() {
      var product = new ProductModel({
					item: this.model
				,	quantity: this.model.get('_minimumQuantity', true)
				});

        return new CartAddToCartButtonView({
            model: product,
            application: this.parentView.options.application
        });
    },
  },

  // @method getContext
  // @returns {ItemViews.RelatedItem.View.Context}
  getContext: function() {
	  
	var quantityavailable_detail = this.model.get('quantityavailable_detail');
	var qtyAvailable:any = {};
  
	  if(_.has(quantityavailable_detail,'locations')){
		if(quantityavailable_detail.locations.length > 0){
		  qtyAvailable = _.findWhere(quantityavailable_detail.locations, {internalid: 6}); //Lane Cove
		}
	  }
		  
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

        url: this.model.get('_url'),
      // @property {Item.Model} model
      model: this.model,

      isEnvironmentBrowser:
          SC.ENVIRONMENT.jsEnvironment === 'browser' && !SC.ENVIRONMENT.isTouchEnabled,
      // @property {Boolean} showRating
      showRating: SC.ENVIRONMENT.REVIEWS_CONFIG && SC.ENVIRONMENT.REVIEWS_CONFIG.enabled,
      // @property {String} track_productlist_list
      track_productlist_list: this.model.get('track_productlist_list'),
      // @property {String} track_productlist_position
      track_productlist_position: this.model.get('track_productlist_position'),
      // @property {String} track_productlist_category
      track_productlist_category: this.model.get('track_productlist_category'),
	  isPriceEnabled: !ProfileModel.getInstance().hidePrices() && (SC.ENVIRONMENT.permissions.transactions.tranSalesOrd >= 2),
	  //@property {Boolean} qunatityAvaialble
      qtyAvailable: _.has(qtyAvailable,'quantityavailable'),
      //@property {Boolean} onlyRelatedItems
       onlyRelated: !_.isUndefined(this.parentView.options.onlyRelated) ? this.parentView.options.onlyRelated : false
    };
    // @class ItemViews.RelatedItem.View
  }
});

// @class ItemViews.RelatedItem.View.Initialize.Options
// @property {Item.Model} model

export = ItemRelationsRelatedItemView;
