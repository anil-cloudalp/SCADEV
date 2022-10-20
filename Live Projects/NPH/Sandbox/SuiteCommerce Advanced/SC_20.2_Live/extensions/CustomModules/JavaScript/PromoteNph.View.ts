/// <amd-module name="PromoteNph.View"/>

import * as promote_nph_tpl from 'promote_nph.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: promote_nph_tpl
	,     title: 'Promote NPH'
	
   });
export = CustomView;