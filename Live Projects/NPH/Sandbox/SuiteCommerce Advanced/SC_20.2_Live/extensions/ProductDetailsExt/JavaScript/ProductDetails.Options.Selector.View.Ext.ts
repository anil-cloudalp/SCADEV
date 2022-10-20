/// <amd-module name="ProductDetails.Options.Selector.View.Ext"/>
import * as _ from 'underscore';
import existingView = require('../../../Advanced/ProductDetails/JavaScript/ProductDetails.Options.Selector.View');

_.extend(existingView.prototype, {
	
	getContext:  _.wrap(existingView.prototype.getContext, function init(fn) {
		let retObj = fn.apply(this, _.toArray(arguments).slice(1));
		
		const item = this.model.get('item');
		
		retObj.isGiftItem = (item.get('itemtype') == "GiftCert") || false;
		retObj.isMatrixItem = !_.isUndefined(item.get('matrixchilditems_detail'))? true : false;
				
		return retObj;
	})
});

export = existingView;

