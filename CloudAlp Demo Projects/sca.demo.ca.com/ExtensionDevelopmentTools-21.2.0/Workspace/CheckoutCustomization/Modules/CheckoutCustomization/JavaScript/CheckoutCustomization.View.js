// @module CA.CheckoutCustomization.CheckoutCustomization
define('CA.CheckoutCustomization.CheckoutCustomization.View'
,	[
	'ca_checkoutcustomization_checkoutcustomization.tpl'
	
	// ,	'CA.CheckoutCustomization.CheckoutCustomization.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_checkoutcustomization_checkoutcustomization_tpl
	
	// ,	CheckoutCustomizationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.CheckoutCustomization.CheckoutCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_checkoutcustomization_checkoutcustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new CheckoutCustomizationModel();
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

		//@method getContext @return CA.CheckoutCustomization.CheckoutCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.CheckoutCustomization.CheckoutCustomization.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
