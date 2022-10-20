/// <amd-module name="WelsRelationship.View"/>

import * as wels_relationship_tpl from 'wels_relationship.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: wels_relationship_tpl
	,     title: 'Our Relationship to WELS'
	
   });
export = CustomView;