/// <amd-module name="Cart.Item.Summary.View.Ext"/>
import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import existingView = require('../../../Commons/Cart/JavaScript/Cart.Item.Summary.View');
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

_.extend(existingView.prototype, {
	
	// @method getContext
    // @return {Cart.Item.Summary.View.Context}
    getContext: function() {
        const minimum_quantity = this.model.get('item').get('_minimumQuantity', true) || 1;
        const maximum_quantity = this.model.get('item').get('_maximumQuantity', true);
        const price_container_object = this.model.getPrice();
	
		// Price Addition For Other Charge Item
		var customPrice:any;
		var originalPrice = price_container_object.total || this.model.get('total') || 0;
		
		var imprintDetails
		,	isCrossItem
		,	isHolyItem
		,	othChargePrice:any = 0
		,	crossItemPrice:any = 0
		,	holyItemPrice:any = 0;
		
		var itemQty = this.model.get('quantity');
		//console.log(this.model);
		if(_.has(this,'attributes')){
				
			if(_.has(this.attributes,'data-root-component-id')){
				
				if(_.propertyOf(this.attributes)('data-root-component-id') == "Cart.Detailed.View"){
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
		if(imprintDetails && itemQty){
						
			if(imprintDetails.indexOf('|') != -1){
				othChargePrice = imprintDetails.split('|')[1];
				
				if(isCrossItem == "T")
				crossItemPrice = imprintDetails.split('|')[3];
			
				if(isHolyItem == "T")
				holyItemPrice = imprintDetails.split('|')[5];
			}
			
			customPrice = originalPrice + (parseFloat(othChargePrice) * itemQty);
			
			if(crossItemPrice)
				customPrice += parseFloat(crossItemPrice) * itemQty;
			
			if(holyItemPrice)
				customPrice += parseFloat(holyItemPrice) * itemQty;
			
			customPrice = SC.SESSION.currency.symbol + customPrice.toFixed(2);
		}
		else{
			customPrice = price_container_object.total_formatted || this.model.get('total_formatted') || '';
		}
        // @class Cart.Item.Summary.View.Context
        return {
            // @property {Model} line
            line: this.model,
            // @property {String} lineId
            lineId: this.model.get('internalid'),
            // @property {Boolean} isMinusButtonDisabled
            isMinusButtonDisabled:
                this.model.get('item').get('quantity') <= minimum_quantity ||
                this.model.get('item').get('quantity') === 1,
            // @property {Boolean} isPlusButtonDisabled
            isPlusButtonDisabled:
                !!maximum_quantity && this.model.get('item').get('quantity') >= maximum_quantity,
            // @property {Boolean} showQuantity
            showQuantity: this.model.get('item').get('_itemType') === 'GiftCert',
            // @property {Boolean} showComparePrice
            showComparePrice: this.model.get('amount') > this.model.get('total'),
            // @property {Boolean} showMinimumQuantity
            showMinimumQuantity: minimum_quantity > 1,
            // @property {Integer} minimumQuantity
            minimumQuantity: minimum_quantity,
            // @property {Boolean} showMaximumQuantity
            showMaximumQuantity: !!maximum_quantity,
            // @property {Integer} maximumQuantity
            maximumQuantity: maximum_quantity,
            // @property {Boolean} isPriceEnabled
            isPriceEnabled: !ProfileModel.getInstance().hidePrices(),
            // @property {String} totalFormatted
            totalFormatted: customPrice //price_container_object.total_formatted || this.model.get('total_formatted') || ''
        };
        // @class Cart.Item.Summary.View
    }
	
});

export = existingView;

