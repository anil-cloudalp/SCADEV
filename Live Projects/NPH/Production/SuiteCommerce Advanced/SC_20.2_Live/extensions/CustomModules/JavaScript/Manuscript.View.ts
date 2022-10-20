/// <amd-module name="Manuscript.View"/>

import * as manuscript_tpl from 'manuscript.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: manuscript_tpl
	,     title: 'Manuscript Submissions'
	
   });
export = CustomView;