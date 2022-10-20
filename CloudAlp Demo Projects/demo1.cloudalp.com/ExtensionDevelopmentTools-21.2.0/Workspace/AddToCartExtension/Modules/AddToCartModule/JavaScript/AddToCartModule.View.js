// @module CA.AddToCartExtension.AddToCartModule
define('CA.AddToCartExtension.AddToCartModule.View'
,	[
	'ca_addtocartextension_addtocartmodule.tpl'
	
	,	'CA.AddToCartExtension.AddToCartModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_addtocartextension_addtocartmodule_tpl
	
	,	AddToCartModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.AddToCartExtension.AddToCartModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_addtocartextension_addtocartmodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new AddToCartModuleModel();
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

		//@method getContext @return CA.AddToCartExtension.AddToCartModule.View.Context
	,	getContext: function getContext()
		{
			//@class CA.AddToCartExtension.AddToCartModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
