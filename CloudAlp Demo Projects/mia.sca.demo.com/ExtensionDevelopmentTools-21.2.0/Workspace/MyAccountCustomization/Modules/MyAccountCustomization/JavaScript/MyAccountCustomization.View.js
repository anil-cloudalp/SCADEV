// @module RudraCustomization.MyAccountCustomization.MyAccountCustomization
define('RudraCustomization.MyAccountCustomization.MyAccountCustomization.View'
,	[
	'rudracustomization_myaccountcustomization_myaccountcustomization.tpl'
	
	,	'Backbone'
    ]
, function (
	rudracustomization_myaccountcustomization_myaccountcustomization_tpl
	
	,	Backbone
)
{
    'use strict';

	// @class RudraCustomization.MyAccountCustomization.MyAccountCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: rudracustomization_myaccountcustomization_myaccountcustomization_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new MyAccountCustomizationModel();
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

		//@method getContext @return RudraCustomization.MyAccountCustomization.MyAccountCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class RudraCustomization.MyAccountCustomization.MyAccountCustomization.View.Context
			// this.message = this.message || 'Hello World!!'
			return {
				// message: this.message
			};
		}
	});
});
