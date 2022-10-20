// @module RudraCustomization.ProductDetailsCustomization.ProductDetailsCustomization
define('RudraCustomization.ProductDetailsCustomization.ProductDetailsCustomization.View'
,	[
	'rudracustomization_productdetailscustomization_productdetailscustomization.tpl'
	
	
	,	'Backbone'
    ]
, function (
	rudracustomization_productdetailscustomization_productdetailscustomization_tpl

	
	,	Backbone
)
{
    'use strict';

	// @class RudraCustomization.ProductDetailsCustomization.ProductDetailsCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: rudracustomization_productdetailscustomization_productdetailscustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ProductDetailsCustomizationModel();
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

		//@method getContext @return RudraCustomization.ProductDetailsCustomization.ProductDetailsCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class RudraCustomization.ProductDetailsCustomization.ProductDetailsCustomization.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
