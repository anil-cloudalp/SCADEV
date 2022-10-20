// @module RudraCustomization.FecetsCustomization.FecetsCustomization
define('RudraCustomization.FecetsCustomization.FecetsCustomization.View'
,	[
	'rudracustomization_fecetscustomization_fecetscustomization.tpl'

	
	,	'Backbone'
    ]
, function (
	rudracustomization_fecetscustomization_fecetscustomization_tpl
	 
	
	,	Backbone
)
{
    'use strict';

	// @class RudraCustomization.FecetsCustomization.FecetsCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: rudracustomization_fecetscustomization_fecetscustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new FecetsCustomizationModel();
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

		//@method getContext @return RudraCustomization.FecetsCustomization.FecetsCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class RudraCustomization.FecetsCustomization.FecetsCustomization.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
