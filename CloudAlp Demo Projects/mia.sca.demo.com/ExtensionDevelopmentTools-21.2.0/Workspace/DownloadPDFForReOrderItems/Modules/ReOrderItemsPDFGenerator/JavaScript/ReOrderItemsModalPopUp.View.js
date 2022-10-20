
// @module CA.globalPopUpLoginRedirection.globalPopUpLoginRedirection
define('RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsModalPopUp.View'
,	[
	'reorderitem_popup_msg.tpl'
	
	
	,	'Backbone'
    ,   'Utils'
    ]
, function (
	reorderitem_popup_msg_tpl

	
	,	Backbone
    ,   Utils
)
{
    'use strict';

	// @class CA.globalPopUpLoginRedirection.globalPopUpLoginRedirection.View @extends Backbone.View
	return Backbone.View.extend({

		template: reorderitem_popup_msg_tpl
	,	modalClass: 'global-views-modal-small'
    ,   page_header: Utils.translate('Error Message')
	,	initialize: function (options) {
        this.message = options.message;

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new globalPopUpLoginRedirectionModel();
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

		//@method getContext @return CA.globalPopUpLoginRedirection.globalPopUpLoginRedirection.View.Context
	,	getContext: function getContext()
		{
			//@class CA.globalPopUpLoginRedirection.globalPopUpLoginRedirection.View.Context
			
			return {
				errorMessage: this.message
			};
		}
	});
});
