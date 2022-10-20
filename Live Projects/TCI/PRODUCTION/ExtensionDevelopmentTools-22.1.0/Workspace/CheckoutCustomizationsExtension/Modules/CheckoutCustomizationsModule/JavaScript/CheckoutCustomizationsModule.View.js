// @module TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule
define('TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View'
,	[
	'tci_checkoutcustomizationsextension_checkoutcustomizationsmodule.tpl'
	
	,	'TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	tci_checkoutcustomizationsextension_checkoutcustomizationsmodule_tpl
	
	,	CheckoutCustomizationsModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: tci_checkoutcustomizationsextension_checkoutcustomizationsmodule_tpl

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

		//@method getContext @return TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View.Context
	,	getContext: function getContext()
		{
			//@class TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View.Context

		}
	});
});
