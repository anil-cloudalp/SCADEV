// @module Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation
define('Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View'
,	[
	'kodella_kdextraregistervalidation_kdextraregistervalidation.tpl'
	
	,	'Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdextraregistervalidation_kdextraregistervalidation_tpl
	
	,	KDExtraRegisterValidationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdextraregistervalidation_kdextraregistervalidation_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDExtraRegisterValidationModel();
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

		//@method getContext @return Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
