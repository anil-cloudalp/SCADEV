// @module CA.ShoppingCust.ShoppingCust
define('CA.ShoppingCust.ShoppingCust.View'
	, [
		'ca_shoppingcust_shoppingcust.tpl'

		, 'CA.ShoppingCust.ShoppingCust.Model'

		, 'Backbone'
	]
	, function (
		ca_shoppingcust_shoppingcust_tpl

		, ShoppingCustModel

		, Backbone
	) {
		'use strict';

		// @class CA.ShoppingCust.ShoppingCust.View @extends Backbone.View
		return Backbone.View.extend({

			template: ca_shoppingcust_shoppingcust_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new ShoppingCustModel();
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

			//@method getContext @return CA.ShoppingCust.ShoppingCust.View.Context
			, getContext: function getContext() {
				//@class CA.ShoppingCust.ShoppingCust.View.Context
				this.message = this.message || 'Hello World!!';
				return {
					message: this.message
				};
			}
		});
	});
