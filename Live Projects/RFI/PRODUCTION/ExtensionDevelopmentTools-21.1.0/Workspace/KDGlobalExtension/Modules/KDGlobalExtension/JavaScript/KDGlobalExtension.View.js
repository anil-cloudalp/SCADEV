// @module Kodella.KDGlobalExtension.KDGlobalExtension
define('Kodella.KDGlobalExtension.KDGlobalExtension.View'
,	[
	'kodella_kdglobalextension_kdglobalextension.tpl'
	
	,	'Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdglobalextension_kdglobalextension_tpl
	
	,	KDGlobalExtensionSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDGlobalExtension.KDGlobalExtension.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdglobalextension_kdglobalextension_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDGlobalExtensionModel();
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

		//@method getContext @return Kodella.KDGlobalExtension.KDGlobalExtension.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDGlobalExtension.KDGlobalExtension.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
