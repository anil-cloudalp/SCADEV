var extensions = {};

extensions['TCI.FooterExt.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TCI/FooterExt/1.0.0/' + asset;
}

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


// Model.js
// -----------------------
// @module Case
define("TCI.FooterExt.ExtraFooterLinks.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
});
});



define(
	'TCI.FooterExt.ExtraFooterLinks'
,   [
		'TCI.FooterExt.ExtraFooterLinks.View'
	]
,   function (
		ExtraFooterLinksView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				// layout.addChildView('Header.Logo', function() { 
				// 	return new ExtraFooterLinksView({ container: container });
				// });
			}

		}
	};
});


};

extensions['Acme.printquote.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Acme/printquote/1.0.0/' + asset;
}

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



define("Acme.printquote.PrintQuote.Model", ["Backbone", "Utils"], function (
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/PrintQuote.Service.ss"
            )
        ),
});
});


// Model.js
// -----------------------
// @module Case
define("Acme.printquote.PrintQuote.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PrintQuote/SuiteScript2/PrintQuote.Service.ss"
            ),
            true
        )
});
});



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



define(
	'Acme.printquote.PrintQuote'
,   [
	'Acme.printquote.PrintQuote.View'
	, 'GlobalViews.Modal.View'
	]
,   function (
	PrintQuoteView
	, GlobalViewsModalView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp(container)
		{
			/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				var pageType = container.getComponent("PageType");
				pageType.registerPageType({
					name: "quote-page",
					routes: ["printquote"],
					view: PrintQuoteView,
					defaultTemplate: {
						name: "acme_printquote_printquote_tpl",
						displayName: "printquote",
				    },
				});
		
		GlobalViewsModalView.prototype.getContext = _.wrap(GlobalViewsModalView.prototype.getContext, function (fn) {
			var context = fn.apply(this, _.toArray(arguments).slice(1));
			context.pageHeader = (this.options.childViewIstance.attributes) ? (this.options.childViewIstance.attributes.id == 'PrintQuote_model' ? this.options.childViewIstance.options.pageHeader || '' : this.options.pageHeader || '') : this.options.pageHeader || '';
			return context;
			});	
		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["TCI.FooterExt.ExtraFooterLinks.View","TCI.FooterExt.ExtraFooterLinks.Model","Acme.printquote.PrintQuote.View","Acme.printquote.PrintQuote.Model","Acme.printquote.PrintQuote.SS2Model","Acme.printquote.PrintQuoteModel.View"];
try{
	extensions['TCI.FooterExt.1.0.0']();
	SC.addExtensionModule('TCI.FooterExt.ExtraFooterLinks');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Acme.printquote.1.0.0']();
	SC.addExtensionModule('Acme.printquote.PrintQuote');
}
catch(error)
{
	console.error(error);
}

