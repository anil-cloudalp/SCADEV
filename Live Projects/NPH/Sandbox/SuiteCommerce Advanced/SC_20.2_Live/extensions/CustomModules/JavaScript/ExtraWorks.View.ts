/// <amd-module name="ExtraWorks.View"/>

import * as extra_works_tpl from 'extra_works.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: extra_works_tpl
	,     title: 'How Extra Rewards Work'
	
   });
export = CustomView;