
// @module Acme.printquote.PrintQuote
define('Acme.printquote.PrintQuoteModel.View'
,	[
	'acme_printquote_printquotemodel.tpl'
	
	,	'Acme.printquote.PrintQuote.SS2Model'
	, 'Backbone'
	, 'underscore'
	, 'jQuery'
	, "Backbone.Model"
    , 'Backbone.FormView'
	, 'SC.Configuration'
	, 'GlobalViews.Confirmation.View'
	, 'LiveOrder.Model'
	, 'Utils'
	, "Acme.printquote.PrintQuote.Model"
	, "GlobalViews.Modal.View"
	, 'GlobalViews.Message.View'
    ]
, function (
	acme_printquote_printquotemodel_tpl

	, PrintQuoteSS2Model	
	, Backbone
	, _
	, jQuery
	, BackboneModel
	, BackboneFormView
	, Configuration
	, GlobalViewsConfirmationView
	, LiveOrderModel
	, Utils
	, AcmeprintquotePrintQuoteModel
	, GlobalViewsModalView
	, GlobalViewsMessageView
)
{
    'use strict';

	return Backbone.View.extend({
		template: acme_printquote_printquotemodel_tpl,
		// page_header: Utils.translate('Email Address'),

 	attributes: {
    	id: 'PrintQuote_model',
    	class: ''
	},
	
	events: {
			'click [data-action="sendmail"]': 'sendmail'
		}
	, bindings: {	
	
	}
	, initialize: function (options) {
		this.showModalPageHeader = true
	}
	, childViews: {

	}

, sendmail: function sendmail(e) {		
	
	e.preventDefault();
	var emailvalue = $('#in-modal-email').val();
	var model = new AcmeprintquotePrintQuoteModel();
	var data = { cartdata: this.options.cartData, email: emailvalue };

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailvalue)) {
		model.save(data).done((res) => {

				var global_view_message = new GlobalViewsMessageView({	
					message: "Email Sent Successfully",
					type: "success",
					closable: true,
				});

				jQuery(".email-validation").html(
					global_view_message.render().$el.html()
				);
			setTimeout(() => {

				$('#modal-PrintQuote_model').css("display", "none");
				$('#modal-PrintQuote_model').removeClass("modal fade modal-PrintQuote_model in");
				$('.modal-backdrop.in').removeAttr('class')

			}, 1000);
				
		}).fail((res) => {

			var err = jQuery.parseJSON(res.responseText);
			var global_view_message = new GlobalViewsMessageView({	
					message: err.errorMessage,
					type: "error",
					closable: true,
			});
			
				jQuery(".email-validation").html(
					global_view_message.render().$el.html()
				);
			setTimeout(() => {
				$('#modal-PrintQuote_model').css("display", "none");
				$('#modal-PrintQuote_model').removeClass("modal fade modal-PrintQuote_model in");
				$('.modal-backdrop.in').removeAttr('class')

			}, 2000);
		})
	} else {

		var global_view_message = new GlobalViewsMessageView({	
			message: "enter valid email.",
			type: "error",
			closable: true,
		});

		jQuery(".email-validation").html(
			global_view_message.render().$el.html()
		);

	}
}
, getContext: function () {
	    return {
			text: 'Quote',
			pagetitle: Configuration.get("quote.popupboxtitle"),
			buttontext: Configuration.get("quote.buttontext")
		};
	  } 
	});
});
