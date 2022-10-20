/// <amd-module name="ProductDetails.Options.Selector.Pusher.View.Ext"/>
import * as _ from 'underscore';
import existingView = require('../../../Advanced/ProductDetails/JavaScript/ProductDetails.Options.Selector.Pusher.View');

_.extend(existingView.prototype, {
	
	getContext:  _.wrap(existingView.prototype.getContext, function init(fn) {
		let retObj = fn.apply(this, _.toArray(arguments).slice(1));
		
		const item = this.model.get('item');
		
		retObj.selectedOptions = '';
				
		return retObj;
	})
});

export = existingView;

