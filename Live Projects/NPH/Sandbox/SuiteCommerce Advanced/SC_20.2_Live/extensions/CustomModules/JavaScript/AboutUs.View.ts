/// <amd-module name="AboutUs.View"/>

import * as about_us_tpl from 'about_us.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: about_us_tpl
	,   title: 'About Northwestern Publishing House'
	
   });
export = CustomView;