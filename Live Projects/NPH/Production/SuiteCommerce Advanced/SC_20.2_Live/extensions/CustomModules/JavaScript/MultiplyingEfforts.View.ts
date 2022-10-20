/// <amd-module name="MultiplyingEfforts.View"/>

import * as multiplying_efforts_tpl from 'multiplying_efforts.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: multiplying_efforts_tpl
	,     title: 'Multiplying Your Efforts'
	
   });
export = CustomView;