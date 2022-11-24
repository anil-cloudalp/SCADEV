// @module Acme.BreadCrumCustomization.PDPBreadCrumCustomization
define('Acme.BreadCrumCustomization.PDPBreadCrumCustomization.View'
,	[
	'acme_breadcrumcustomization_pdpbreadcrumcustomization.tpl'
	
	,	'Acme.BreadCrumCustomization.PDPBreadCrumCustomization.SS2Model'
	
	,	'Backbone'
    ]
, function (
	acme_breadcrumcustomization_pdpbreadcrumcustomization_tpl
	
	,	PDPBreadCrumCustomizationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Acme.BreadCrumCustomization.PDPBreadCrumCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_breadcrumcustomization_pdpbreadcrumcustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new PDPBreadCrumCustomizationModel();
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

		//@method getContext @return Acme.BreadCrumCustomization.PDPBreadCrumCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class Acme.BreadCrumCustomization.PDPBreadCrumCustomization.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
