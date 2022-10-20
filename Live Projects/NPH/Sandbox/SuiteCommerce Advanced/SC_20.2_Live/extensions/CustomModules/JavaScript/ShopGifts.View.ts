/// <amd-module name="ShopGifts.View"/>

import * as shop_gifts_tpl from 'shop_gifts.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

	template: shop_gifts_tpl
,     title: 'Shop Confirmation Gifts'

,	getContext: function()
	{
		return {
			isNotCmsEdit: (window.parent.location.href.indexOf("cms") == -1)? true:false
		};
	}
});
   
export = CustomView;