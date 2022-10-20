// @module CA.PdpPdf.PDPCustompdf
define('CA.PdpPdf.PDPCustompdf.View'
,	[
	'ca_pdppdf_pdpcustompdf.tpl'
	
	,	'CA.PdpPdf.PDPCustompdf.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_pdppdf_pdpcustompdf_tpl
	
	,	PDPCustompdfSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.PdpPdf.PDPCustompdf.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_pdppdf_pdpcustompdf_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new PDPCustompdfModel();
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

		//@method getContext @return CA.PdpPdf.PDPCustompdf.View.Context
	,	getContext: function getContext()
		{
			//@class CA.PdpPdf.PDPCustompdf.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
