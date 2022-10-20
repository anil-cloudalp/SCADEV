// @module STAXS.CheckoutCustomizations.CheckoutCustomizationsModule
define('STAXS.CheckoutCustomizations.CheckoutCustomizationsModule.View'
,	[
	'staxs_checkoutcustomizations_checkoutcustomizationsmodule.tpl'
	
	,	'STAXS.CheckoutCustomizations.CheckoutCustomizationsModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	staxs_checkoutcustomizations_checkoutcustomizationsmodule_tpl
	
	,	CheckoutCustomizationsModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class STAXS.CheckoutCustomizations.CheckoutCustomizationsModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: staxs_checkoutcustomizations_checkoutcustomizationsmodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new CheckoutCustomizationsModuleModel();
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

		//@method getContext @return STAXS.CheckoutCustomizations.CheckoutCustomizationsModule.View.Context
	,	getContext: function getContext()
		{
			//@class STAXS.CheckoutCustomizations.CheckoutCustomizationsModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
