// @module STAXS.PDPCustomizations.PDPCustomizations
define('STAXS.PDPCustomizations.PDPCustomizations.View'
,	[
	'staxs_pdpcustomizations_pdpcustomizations.tpl'
	
	,'STAXS.PDPCustomizations.PDPCustomizations.Model'
	
	,	'Backbone'
    ]
, function (
	staxs_pdpcustomizations_pdpcustomizations_tpl
	
	,	PDPCustomizationsModel
	
	,	Backbone
)
{
    'use strict';

	// @class STAXS.PDPCustomizations.PDPCustomizations.View @extends Backbone.View
	return Backbone.View.extend({

		template: staxs_pdpcustomizations_pdpcustomizations_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new PDPCustomizationsModel();
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

		//@method getContext @return STAXS.PDPCustomizations.PDPCustomizations.View.Context
	,	getContext: function getContext()
		{
			//@class STAXS.PDPCustomizations.PDPCustomizations.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
