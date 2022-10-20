// @module Kodella.KDCustomFacets.KDCustomFacets
define('Kodella.KDCustomFacets.KDCustomFacets.View'
,	[
	'kodella_kdcustomfacets_kdcustomfacets.tpl'
	
	,	'Kodella.KDCustomFacets.KDCustomFacets.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdcustomfacets_kdcustomfacets_tpl
	
	,	KDCustomFacetsSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDCustomFacets.KDCustomFacets.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdcustomfacets_kdcustomfacets_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDCustomFacetsModel();
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

		//@method getContext @return Kodella.KDCustomFacets.KDCustomFacets.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDCustomFacets.KDCustomFacets.View.Context
			//this.message = this.message || 'Hello World!!'
			return {
				//message: this.message
			};
		}
	});
});
