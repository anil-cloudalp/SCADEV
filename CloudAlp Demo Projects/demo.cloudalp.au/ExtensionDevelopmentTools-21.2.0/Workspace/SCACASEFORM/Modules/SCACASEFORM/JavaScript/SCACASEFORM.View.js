// @module CloudAlp.SCACASEFORM.SCACASEFORM
define('CloudAlp.SCACASEFORM.SCACASEFORM.View'
	, [
		'cloudalp_scacaseform_scacaseform.tpl'

		, 'CloudAlp.SCACASEFORM.SCACASEFORM.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_scacaseform_scacaseform_tpl

		, SCACASEFORMModel

		, Backbone
	) {
		'use strict';

		// @class CloudAlp.SCACASEFORM.SCACASEFORM.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_scacaseform_scacaseform_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new SCACASEFORMModel();
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

			//@method getContext @return CloudAlp.SCACASEFORM.SCACASEFORM.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.SCACASEFORM.SCACASEFORM.View.Context
				// this.message = this.message || 'Hello World!!';
				return {};
			}
		});
	});
