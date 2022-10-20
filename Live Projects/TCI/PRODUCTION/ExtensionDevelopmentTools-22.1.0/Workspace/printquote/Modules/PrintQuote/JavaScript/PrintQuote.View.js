// @module Acme.printquote.PrintQuote
define('Acme.printquote.PrintQuote.View'
,	[
	'acme_printquote_printquote.tpl'
	,'Acme.printquote.PrintQuote.SS2Model'
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
	, 'Acme.printquote.PrintQuoteModel.View'
    ]
, function (
	acme_printquote_printquote_tpl
	,	PrintQuoteSS2Model
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
	, AcmeprintquotePrintQuoteModelView
)
{
    'use strict';

	// @class Acme.printquote.PrintQuote.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_printquote_printquote_tpl,


    events: {	 
			 'click [data-action="print-quote"]': 'printQuote'
			,'click [data-action="mail-quote"]': 'mailQuote'
			,'click [data-action="send-email"]': 'saveForm2'
			,'click [data-action="email-quote"]': 'showForm'
	}
	
	, bindings: {
			'[name="name"]': 'name'
		,	'[name="email"]': 'email'
		,	'[name="message"]': 'message'
	}
	
  , initialize: function (options) {
	 
			this.application = options.application;
			var liveOrderModels = LiveOrderModel.getInstance();
	  		this.liveOrderModel = liveOrderModels;
			this.model = new AcmeprintquotePrintQuoteModel();
			var self = this;
			var load = LiveOrderModel.loadCart();
			load.done(function (res) {
				self.cartdata = res;
				self.render();
			});
			BackboneFormView.add(this);
		},
  
		beforeShowContent : function beforeShowContent() {
			var self = this;
			var promise = jQuery.Deferred();
			
			var datemodel = new AcmeprintquotePrintQuoteModel();
			datemodel.fetch().done((res) => {
				var today = new Date(res);
				var yyyy = today.getFullYear();
				var mm = today.getMonth() + 1;
				var dd = today.getDate();

			if (dd < 10)
				dd = '0' + dd;
			if (mm < 10)
				mm = '0' + mm;
				var newdate =  mm  + '/' + dd + '/' + yyyy;
				self.validdate = newdate;
				promise.resolve();
			})

			return promise;
        },	
	printQuote: function() {
		
		window.print();
	}

	, mailQuote: function () {
		
		var view = new AcmeprintquotePrintQuoteModelView({  
			pageHeader: Configuration.get('quote.popupboxtitle'),
			application: this.application,
			cartData:this.cartdata
        }); 
		view.showInModal();
	}
	
	, showForm: function () {
		
			this.$('[data-collapse-content]').collapse('toggle');	

	}
	,
	
   saveForm2: function(e, model, props) {
	   
		e.preventDefault();
		model = model || this.model;
		this.$savingForm = jQuery(e.target).closest('form');
		
		if (this.$savingForm.length)
		{
			this.$savingForm.find('input[type="submit"], button[type="submit"]').attr('disabled', true);

			this.$savingForm.find('input[type="reset"], button[type="reset"]').hide();
		}
	   
		this.hideError();
		
		var self = this;
		
		// Returns the promise of the save acction of the model
		return model.save(props || this.$savingForm.serializeObject(), {
			
			wait: true
			// Hides error messages, re enables buttons and triggers the save event
			// if we are in a modal this also closes it
			,	success: function (model, response)
			{
				if (self.inModal && self.$containerModal)
				{
					self.$containerModal.removeClass('fade').modal('hide').data('bs.modal', null);
				}
				
				if (self.$savingForm.length)
				{
					self.hideError(self.$savingForm);
					self.$savingForm.find('[type="submit"], [type="reset"]').attr('disabled', false);
					model.trigger('save', model, response);
				}
				
				var emailConfirmationView = new GlobalViewsConfirmationView({
					title: _('Email Sent').translate()
					,	body: _('Your quote has been emailed.').translate()
					,	confirmLabel: _('OK').translate()
					,	hideCancelButton: true
					,	autohide: true
				});
				self.options.application.getLayout().showInModal(emailConfirmationView);
				
			}
			
			// Re enables all button and shows an error message
			,	error: function (model, response)
			{
				self.$savingForm.find('*[type=submit], *[type=reset]').attr('disabled', false);
				
				if (response.responseText)
				{
					model.trigger('error', jQuery.parseJSON(response.responseText));
				}
			}
		});
   }
   
	, 	childViews: {

		}
	, getContext: function() {
			var lines = this.liveOrderModel && this.liveOrderModel.get('lines');
			var models = lines && lines.models;
		var summary = this.liveOrderModel && this.liveOrderModel.get('summary');
	
		if (summary && !summary.shippingcost) {
				var shippingCost = 0;
				var shippingrate = 0;
				var cartHasItemToShip = false;
				if (models && models.length) {
					models.forEach(function (model) {
						var item = model.get('item')
						if (item && item.get('itemtype') == 'InvtPart') {
							if (Configuration.get('quote.shippingrate')) {
								shippingCost += model.get('amount') * Configuration.get('quote.shippingrate');
								cartHasItemToShip = true;
							} else {
								shippingCost += model.get('amount') * 0.05;
								cartHasItemToShip = true;
							}
						}
					});
					if (cartHasItemToShip) {
						shippingCost = shippingCost >= 5 ? shippingCost : 5;
					} 
				}
				summary.shippingcost = shippingCost;
				summary.shippingcost_formatted = Utils.formatCurrency(summary.shippingcost);
				summary.total = summary.total + summary.shippingcost;
				summary.total_formatted = Utils.formatCurrency(summary.total);
				if (cartHasItemToShip) {
					shippingrate = (shippingCost) * 100 / (summary.total);
				}
				summary.shippingrate = 5; //Math.round(shippingrate);
		} else{
			if (summary && summary.shippingcost) {
				if (!summary.shippingrate) {
					var shippingrate = ((summary.shippingcost) * 100) / (summary.total);
					summary.shippingrate = 5; // Math.round(shippingrate);
					
				}
			}
		}
	    return {
				text:  Configuration.get('quote.quotetitle'),
				subtext:  Configuration.get('quote.subtext'),
				lines: lines,
				summary: summary,
			    finePrint: Configuration.get('quote.notes'),
				validupto:this.validdate	
	      };
	  } 
	});
});
