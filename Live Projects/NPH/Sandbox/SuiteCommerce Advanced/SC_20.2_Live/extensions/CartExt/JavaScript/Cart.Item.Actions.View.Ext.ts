/// <amd-module name="Cart.Item.Actions.View.Ext"/>
import * as _ from 'underscore';
import existingView = require('../../../Commons/Cart/JavaScript/Cart.Item.Actions.View');

_.extend(existingView.prototype, {
	
	getContext:  _.wrap(existingView.prototype.getContext, function init(fn) {
		let retObj = fn.apply(this, _.toArray(arguments).slice(1));
		
		
		retObj.editUrl = this.model.getFullLink({location:null,fulfillmentChoice:null});
		
		return retObj;
	})
});

export = existingView;

