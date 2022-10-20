/// <amd-module name="Cart.Lines.View.Ext"/>
import * as _ from 'underscore';
import existingView = require('../../../Commons/Cart/JavaScript/Cart.Lines.View');

_.extend(existingView.prototype, {
	
	getContext:  _.wrap(existingView.prototype.getContext, function init(fn) {
		let retObj = fn.apply(this, _.toArray(arguments).slice(1));
		
		
		retObj.linkAttributes = retObj.item.get('_url');
		
		return retObj;
	})
});

export = existingView;

