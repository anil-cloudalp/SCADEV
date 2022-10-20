// @module RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization
define('RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization.View'
,	[
	'rudracustomization_headermenucustomization_headermenucustomization.tpl'
	
	,	'RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization.SS2Model'
	
	,	'Backbone'
    ]
, function (
	rudracustomization_headermenucustomization_headermenucustomization_tpl
	
	,	HeaderMenuCustomizationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: rudracustomization_headermenucustomization_headermenucustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HeaderMenuCustomizationModel();
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

		//@method getContext @return RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
