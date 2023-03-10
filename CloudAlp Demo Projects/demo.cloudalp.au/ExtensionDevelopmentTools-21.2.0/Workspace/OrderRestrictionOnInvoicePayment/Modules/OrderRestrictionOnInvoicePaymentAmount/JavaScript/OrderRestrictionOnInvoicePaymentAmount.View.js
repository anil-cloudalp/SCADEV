// @module Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount
define('Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount.View'
,	[
	'acme_orderrestrictiononinvoicepayment_orderrestrictiononinvoicepaymentamount.tpl'
	
	,	'Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount.SS2Model'
	
	,	'Backbone'
    ]
, function (
	acme_orderrestrictiononinvoicepayment_orderrestrictiononinvoicepaymentamount_tpl
	
	,	OrderRestrictionOnInvoicePaymentAmountSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_orderrestrictiononinvoicepayment_orderrestrictiononinvoicepaymentamount_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new OrderRestrictionOnInvoicePaymentAmountModel();
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

		//@method getContext @return Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount.View.Context
	,	getContext: function getContext()
		{
			//@class Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
