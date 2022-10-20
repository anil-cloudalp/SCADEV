/// <amd-module name="WhatPeopleSaying.View"/>

import * as what_people_saying_tpl from 'what_people_saying.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: what_people_saying_tpl
	,     title: 'Hear What People Are Saying'
	,	getContext: function()
		{
			return {
				isNotCmsEdit: (window.parent.location.href.indexOf("cms") == -1)? true:false
			};
		}
   });
export = CustomView;