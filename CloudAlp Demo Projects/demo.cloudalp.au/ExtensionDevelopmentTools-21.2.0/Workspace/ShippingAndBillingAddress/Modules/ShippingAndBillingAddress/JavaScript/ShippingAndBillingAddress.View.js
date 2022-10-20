// @module CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress
define('CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View'
	, [
		'cloudalp_shippingandbillingaddress_shippingandbillingaddress.tpl'

		, 'CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_shippingandbillingaddress_shippingandbillingaddress_tpl

		, ShippingAndBillingAddressModel

		, Backbone
	) {
		'use strict';

		// @class CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_shippingandbillingaddress_shippingandbillingaddress_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new ShippingAndBillingAddressModel();
				// var self = this;
				// this.model.fetch().done(function(result) {
				// 	self.message = result.message;
				// 	self.render();
				// });
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}

			//@method getContext @return CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View.Context
				this.message = this.message || 'Hello World!!';
				return {
					message: this.message
				};
			}
		});
	});
