// @module CA.checkoutCustomization.RoleBasedCheckout
define('CA.checkoutCustomization.RoleBasedCheckout.View'
,	[
	'ca_checkoutcustomization_rolebasedcheckout.tpl'
	
	,	'CA.checkoutCustomization.RoleBasedCheckout.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_checkoutcustomization_rolebasedcheckout_tpl
	
	,	RoleBasedCheckoutSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.checkoutCustomization.RoleBasedCheckout.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_checkoutcustomization_rolebasedcheckout_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new RoleBasedCheckoutModel();
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

		//@method getContext @return CA.checkoutCustomization.RoleBasedCheckout.View.Context
	,	getContext: function getContext()
		{
			//@class CA.checkoutCustomization.RoleBasedCheckout.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
