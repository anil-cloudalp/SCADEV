/// <amd-module name="MoreAboutCopyright.View"/>

import * as more_about_copyright_tpl from 'more_about_copyright.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: more_about_copyright_tpl
	,     title: 'Learn About Copyright'
	
   });
export = CustomView;