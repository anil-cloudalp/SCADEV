/// <amd-module name="ProductViews.Price.View.Ext"/>

import * as _ from 'underscore';

import ProductViewsPriceView = require('../../../Commons/ProductViews/JavaScript/ProductViews.Price.View');


_.extend(ProductViewsPriceView.prototype, {
	
	getContext:  _.wrap(ProductViewsPriceView.prototype.getContext, function init(fn) {
		let retObj = fn.apply(this, _.toArray(arguments).slice(1));
		
		if(this.options.origin == 'ITEMCELL'){
			var matrixPrice = this.model.get('item').get('onlinematrixpricerange') || '';
			var min_price_formatted = '';
			var max_price_formatted = '';
			var currency = _.has(SC.SESSION,'currency')? SC.SESSION.currency.symbol : '$';
			
			if(matrixPrice && (matrixPrice.indexOf(' ') != -1)){
				var prices = matrixPrice.split(' ');
				prices = _.unique(prices);
				
				if(prices.length > 1){
					min_price_formatted = currency + prices[0];
					max_price_formatted = currency + prices[1];
				}
			}
			
			if(min_price_formatted && max_price_formatted){
				retObj.isPriceRange = true;
				retObj.minPriceFormatted = min_price_formatted;
				retObj.maxPriceFormatted = max_price_formatted;
			}
		}
		
		return retObj;
	})
	
});

export = ProductViewsPriceView;
