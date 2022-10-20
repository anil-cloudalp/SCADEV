// @module Kodella.KDPDPCustom.KDPDPCustom
define('Kodella.KDPDPCustom.KDPDPCustom.View'
,	[
	'kodella_kdpdpcustom_kdpdpcustom.tpl'
	
	,	'Kodella.KDPDPCustom.KDPDPCustom.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdpdpcustom_kdpdpcustom_tpl
	
	,	KDPDPCustomSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDPDPCustom.KDPDPCustom.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdpdpcustom_kdpdpcustom_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDPDPCustomModel();
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

		//@method getContext @return Kodella.KDPDPCustom.KDPDPCustom.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDPDPCustom.KDPDPCustom.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
