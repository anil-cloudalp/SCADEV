/// <amd-module name="ProductDetails.ImageGallery.View.Ext"/>
import * as _ from 'underscore';
import existingView = require('../../../Advanced/ProductDetails/JavaScript/ProductDetails.ImageGallery.View');

_.extend(existingView.prototype, {
	
	getContext:  _.wrap(existingView.prototype.getContext, function init(fn) {
		let retObj = fn.apply(this, _.toArray(arguments).slice(1));
		
		const item = this.model.get('item');
		
		var withinrange = false;
		var today = new Date();
		today.setHours(0, 0, 0, 0);
		var date1 = item.get('custitem_new_arrival_start_date')|| '';
		var date2 = item.get('custitem_new_arrival_end_date')|| '';
		
	var currentdate:any = today.getTime();
	var fromdate:any = date1? new Date(date1).getTime():""
	var enddate:any = date2? new Date(date2).getTime():""

	if(parseFloat(currentdate) >= parseFloat(fromdate) && parseFloat(currentdate) <= parseFloat(enddate))
		withinrange = true;
		
		retObj = _.extend(retObj,{
			
				nookUrl: 		item.get('custitem_nook_url') || ''
			,	kindleUrl:		item.get('custitem_appf_kindle_url') || ''
			,	lookInside:		item.get('custitem_appf_look_inside_url') || ''
			,	audioSample:	item.get('custitem_appf_audio_sample_url') || ''
			,	removeLogo: 	item.get('custitem_appf_remove_logo')
			,	isOnSale: item.get('custitem_appf_item_on_sale') || false
			,   newBadge: withinrange
		});
		
		return retObj;
	})
});

export = existingView;

