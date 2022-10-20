/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Header.MiniCartItemCell.View"/>
import * as _ from 'underscore';
import * as header_mini_cart_item_cell_tpl from 'header_mini_cart_item_cell.tpl';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

import TransactionLineViewsOptionsSelectedView = require('../../../Commons/Transaction.Line.Views/JavaScript/Transaction.Line.Views.Options.Selected.View');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

// @module Header

// @class Header.MiniCart.View @extends BackboneView
export = BackboneView.extend({
    template: header_mini_cart_item_cell_tpl,

    childViews: {
        'Item.SelectedOptions': function() {
            return new TransactionLineViewsOptionsSelectedView({
                model: this.model
            });
        }
    },

    // @method getContext
    // @return {Header.MiniCart.View.Context}
    getContext: function() {
        const price_container_object = this.model.getPrice();
        const item = this.model.get('item') || this.model;
        const betterPrice = item && item.getBetterPrice(this.model.get('quantity'));
			
			
		// Price Addition For Other Charge Item
		var customPrice;
		var originalPrice = price_container_object.price || this.model.get('rate') || '';
		var imprintDetails
		,	isCrossItem
		,	isHolyItem
		,	othChargePrice:any = 0
		,	crossItemPrice:any = 0
		,	holyItemPrice:any = 0;
		
		
		if(_.has(this,'attributes')){
				
			if(_.has(this.attributes,'data-root-component-id')){
				
				if(_.propertyOf(this.attributes)('data-root-component-id') == "Header.MiniCart.View"){
					_.each(this.model.get('options').models, function(opt:any){
						
						if(opt.get('cartOptionId') == "custcol_appf_imprint_item_details")
							imprintDetails = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
						
						if(opt.get('cartOptionId') == "custcol_appf_imprint_cross")
							isCrossItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
						
						if(opt.get('cartOptionId') == "custcol_appf_holy_bible")
							isHolyItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
					});
				}
			}
		}
		if(imprintDetails){
						
			if(imprintDetails.indexOf('|') != -1){
				othChargePrice = imprintDetails.split('|')[1];
				
				if(isCrossItem == "T")
					crossItemPrice = imprintDetails.split('|')[3];
			
				if(isHolyItem == "T")
				holyItemPrice = imprintDetails.split('|')[5];
			}
			
			customPrice = originalPrice + parseFloat(othChargePrice);
			
			if(crossItemPrice)
				customPrice += parseFloat(crossItemPrice);
			
			if(holyItemPrice)
				customPrice += parseFloat(holyItemPrice);
			
			customPrice = SC.SESSION.currency.symbol + customPrice.toFixed(2);
		}
		else{
			customPrice = price_container_object.price_formatted || this.model.get('rate_formatted') || '';
		}
        // @class Header.MiniCart.View.Context
        return {
            line: this.model,
            // @property {Number} itemId
            itemId: this.model.get('item').id,
            // @property {String} itemType
            itemType: this.model.get('item').get('itemtype'),
            // @property {String} linkAttributes
            linkAttributes: this.model.get('item').get('_url'), /*this.model.getFullLink({
                quantity: null,
                location: null,
                fulfillmentChoice: null
            }),*/
            // @property {ImageContainer} thumbnail
            thumbnail: this.model.getThumbnail(),
            // @property {Boolean} isPriceEnabled
            isPriceEnabled: !ProfileModel.getInstance().hidePrices(),
            // @property {Boolean} isFreeGift
            isFreeGift: this.model.get('free_gift') === true,
            // @property {String} rateFormatted
            rateFormatted: customPrice, /*betterPrice
                ? betterPrice.betterItemPrice
                : this.model.get('rate_formatted') || price_container_object.price_formatted || '',*/
            // @property {Boolean} showComparePrice
            showComparePrice: !!betterPrice,
            // @property {String} comparePriceFormatted
            comparePriceFormatted: betterPrice && betterPrice.defaultItemPrice
        };
        // @class Header.MiniCart.View
    }
});
