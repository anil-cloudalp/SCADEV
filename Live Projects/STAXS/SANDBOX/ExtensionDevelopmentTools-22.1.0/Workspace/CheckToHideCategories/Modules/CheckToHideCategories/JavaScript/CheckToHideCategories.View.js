// @module STAXS.CheckToHideCategories.CheckToHideCategories
define('STAXS.CheckToHideCategories.CheckToHideCategories.View'
,	[
	'staxs_checktohidecategories_checktohidecategories.tpl'
	
	,	'STAXS.CheckToHideCategories.CheckToHideCategories.Model'
	
	,	'Backbone'
    ]
, function (
	staxs_checktohidecategories_checktohidecategories_tpl
	
	,	CheckToHideCategoriesSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class STAXS.CheckToHideCategories.CheckToHideCategories.View @extends Backbone.View
	return Backbone.View.extend({

		template: staxs_checktohidecategories_checktohidecategories_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new CheckToHideCategoriesModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return STAXS.CheckToHideCategories.CheckToHideCategories.View.Context
	,	getContext: function getContext()
		{
			//@class STAXS.CheckToHideCategories.CheckToHideCategories.View.Context
			return ;
		}
	});
});
