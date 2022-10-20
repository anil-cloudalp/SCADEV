// @module CloudAlp.PromoLimit.PromoLimit
define('CloudAlp.PromoLimit.PromoLimit.View'
	, [
		'cloudalp_promolimit_promolimit.tpl'

		, 'CloudAlp.PromoLimit.PromoLimit.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_promolimit_promolimit_tpl

		, PromoLimitModel

		, Backbone
	) {
		'use strict';

		// @class CloudAlp.PromoLimit.PromoLimit.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_promolimit_promolimit_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new PromoLimitModel();
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

			//@method getContext @return CloudAlp.PromoLimit.PromoLimit.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.PromoLimit.PromoLimit.View.Context
				this.message = this.message || 'Hello World!!';
				return {
					message: this.message
				};
			}
		});
	});
