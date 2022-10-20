// @module CloudAlp.ColorRefinementOnPLP.PLPColorImages
define('CA.ColorRefinementOnPLP.PLPColorImages.View'
	, [
		'ca_colorrefinementonplp_plpcolorimages.tpl'

		, 'CA.ColorRefinementOnPLP.PLPColorImages.Model'

		, 'Backbone'
	]
	, function (
		ca_colorrefinementonplp_plpcolorimages_tpl

		, PLPColorImagesModel

		, Backbone
	) {
		'use strict';

		// @class CloudAlp.ColorRefinementOnPLP.PLPColorImages.View @extends Backbone.View
		return Backbone.View.extend({

			template: ca_colorrefinementonplp_plpcolorimages_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new PLPColorImagesModel();
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

			//@method getContext @return CloudAlp.ColorRefinementOnPLP.PLPColorImages.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.ColorRefinementOnPLP.PLPColorImages.View.Context
				return {};
			}
		});
	});
