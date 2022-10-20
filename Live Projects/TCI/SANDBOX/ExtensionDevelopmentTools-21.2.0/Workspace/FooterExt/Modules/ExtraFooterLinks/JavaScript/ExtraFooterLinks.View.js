// @module TCI.FooterExt.ExtraFooterLinks
define('TCI.FooterExt.ExtraFooterLinks.View'
,	[
	'tci_footerext_extrafooterlinks.tpl'
	,	'Backbone.View'
    ]
, function (
	tci_footerext_extrafooterlinks_tpl
	,	BackboneView
)
{
    'use strict';

	// @class TCI.FooterExt.ExtraFooterLinks.View @extends Backbone.View
	return BackboneView.extend({

		template: tci_footerext_extrafooterlinks_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ExtraFooterLinksModel();
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

		//@method getContext @return TCI.FooterExt.ExtraFooterLinks.View.Context
	,	getContext: function getContext()
		{
			//@class TCI.FooterExt.ExtraFooterLinks.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
