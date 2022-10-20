// @module STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule
define('STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.View'
,	[
	'staxs_restrictorderandprice_restrictorderandpricemodule.tpl'
	
	,	'STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	staxs_restrictorderandprice_restrictorderandpricemodule_tpl
	
	,	RestrictOrderAndPriceModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: staxs_restrictorderandprice_restrictorderandpricemodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new RestrictOrderAndPriceModuleModel();
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

		//@method getContext @return STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.View.Context
	,	getContext: function getContext()
		{
			
			//@class STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
