/// <amd-module name="LinkToNph.View"/>

import * as link_to_nph_tpl from 'link_to_nph.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: link_to_nph_tpl
	,     title: 'Link To NPH'
	
   });
export = CustomView;