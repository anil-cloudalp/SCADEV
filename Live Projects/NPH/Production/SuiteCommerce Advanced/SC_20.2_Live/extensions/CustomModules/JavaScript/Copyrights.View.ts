/// <amd-module name="Copyrights.View"/>

import * as copyrights_tpl from 'copyrights.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: copyrights_tpl
	,     title: 'Copyrights & Permissions'
	
   });
export = CustomView;