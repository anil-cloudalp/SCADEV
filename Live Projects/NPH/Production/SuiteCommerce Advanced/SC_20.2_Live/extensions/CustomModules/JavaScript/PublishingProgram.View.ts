/// <amd-module name="PublishingProgram.View"/>

import * as publishing_program_tpl from 'publishing_program.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: publishing_program_tpl
	,     title: 'Our Publishing Program'
	
   });
export = CustomView;