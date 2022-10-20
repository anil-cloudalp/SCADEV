// @module Kodella.KDChangeStoreLocations.KDChangeStoreLocations
define('Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View'
	, [
		'kodella_kdchangestorelocations_kdchangestorelocations.tpl'

		, 'Kodella.KDChangeStoreLocations.KDChangeStoreLocations.SS2Model'

		, 'Backbone'
	]
	, function (
		kodella_kdchangestorelocations_kdchangestorelocations_tpl

		, KDChangeStoreLocationsSS2Model

		, Backbone
	) {
		'use strict';

		// @class Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View @extends Backbone.View
		return Backbone.View.extend({

			template: kodella_kdchangestorelocations_kdchangestorelocations_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new KDChangeStoreLocationsModel();
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

			//@method getContext @return Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View.Context
			, getContext: function getContext() {
				//@class Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View.Context
				this.message = this.message || 'Hello World!!'
				return {
					message: this.message
				};
			}
		});
	});
