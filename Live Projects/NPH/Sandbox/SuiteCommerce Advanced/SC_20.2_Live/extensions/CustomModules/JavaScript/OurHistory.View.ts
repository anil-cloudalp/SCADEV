/// <amd-module name="OurHistory.View"/>

import * as our_history_tpl from 'our_history.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: our_history_tpl
	,     title: 'Our History'
	
   });
export = CustomView;