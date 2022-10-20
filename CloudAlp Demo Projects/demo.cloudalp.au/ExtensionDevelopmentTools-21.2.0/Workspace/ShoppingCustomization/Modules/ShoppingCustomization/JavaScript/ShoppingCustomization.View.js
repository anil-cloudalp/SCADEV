// @module CloudAlp.ShoppingCustomization.ShoppingCustomization
define('CloudAlp.ShoppingCustomization.ShoppingCustomization.View'
	, [
		'cloudalp_shoppingcustomization_shoppingcustomization.tpl'

		, 'CloudAlp.ShoppingCustomization.ShoppingCustomization.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_shoppingcustomization_shoppingcustomization_tpl

		, ShoppingCustomizationModel

		, Backbone
	) {
		'use strict';

		// @class CloudAlp.ShoppingCustomization.ShoppingCustomization.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_shoppingcustomization_shoppingcustomization_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new ShoppingCustomizationModel();
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

			//@method getContext @return CloudAlp.ShoppingCustomization.ShoppingCustomization.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.ShoppingCustomization.ShoppingCustomization.View.Context
				return "";
			}
		});
	});
