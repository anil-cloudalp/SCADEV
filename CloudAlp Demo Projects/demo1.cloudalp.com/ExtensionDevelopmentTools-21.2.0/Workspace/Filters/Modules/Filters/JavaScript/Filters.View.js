// @module CA.Filters.Filters
define('CA.Filters.Filters.View'
	, [
		'ca_filters_filters.tpl'

		, 'CA.Filters.Filters.Model'

		, 'Backbone'
	]
	, function (
		ca_filters_filters_tpl

		, FiltersModel

		, Backbone
	) {
		'use strict';

		// @class CA.Filters.Filters.View @extends Backbone.View
		return Backbone.View.extend({

			template: ca_filters_filters_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new FiltersModel();
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

			//@method getContext @return CA.Filters.Filters.View.Context
			, getContext: function getContext() {
				//@class CA.Filters.Filters.View.Context
				this.message = this.message || 'Hello World!!';
				return {
					message: this.message
				};
			}
		});
	});
