// @module STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess
define('STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess.View'
,	[
	'staxs_myaccountcustomizations_hidemyaccountandcertificatesonlyaccess.tpl'
	
	,	'STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess.Model'
	
	,	'Backbone'
    ]
, function (
	staxs_myaccountcustomizations_hidemyaccountandcertificatesonlyaccess_tpl
	
	,	HideMyaccountAndCertificatesOnlyAccessModel
	
	,	Backbone
)
{
    'use strict';

	// @class STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess.View @extends Backbone.View
	return Backbone.View.extend({

		template: staxs_myaccountcustomizations_hidemyaccountandcertificatesonlyaccess_tpl

	,	initialize: function (options) {
			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HideMyaccountAndCertificatesOnlyAccessModel();
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

		//@method getContext @return STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess.View.Context
	,	getContext: function getContext()
		{
			//@class STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
