/// <amd-module name="ShippingPolicy.View"/>

import * as shipping_policy_tpl from 'shipping_policy.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: shipping_policy_tpl
	,     title: 'Shipping Policy'
	
   });
export = CustomView;