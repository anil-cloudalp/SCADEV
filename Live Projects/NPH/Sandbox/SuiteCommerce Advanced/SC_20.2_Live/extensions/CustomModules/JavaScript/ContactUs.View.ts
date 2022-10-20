/// <amd-module name="ContactUs.View"/>

import * as contact_us_tpl from 'contact_us.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: contact_us_tpl
	,     title: 'Contact Us'
	
   });
export = CustomView;