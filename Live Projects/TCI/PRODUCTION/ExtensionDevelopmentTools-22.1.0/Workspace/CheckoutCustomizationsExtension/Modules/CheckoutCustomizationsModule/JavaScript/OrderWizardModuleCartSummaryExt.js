/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/


define(
	'TCI.CheckoutCustomizationsExtension.OrderWizardModuleCartSummaryExt'
	,	[
	        'underscore'
		,	'OrderWizard.Module.CartSummary'
		,	'Utils'
	]
	,	function (
			_
		,	OrderWizardModuleCartSummary
		,	Utils
	)
	{
		'use strict';

		OrderWizardModuleCartSummary.prototype.getContext = _.wrap(OrderWizardModuleCartSummary.prototype.getContext, function (fn) {
		
			// Clear previous checkout session data before starting, but
			// only if the user has not reached the Confirmation view yet
			if (Backbone.history.getFragment().indexOf('confirmation') === -1) {
				sessionStorage.removeItem('subtotal_formatted');
				sessionStorage.removeItem('shippingcost_formatted');
				sessionStorage.removeItem('surcharge_formatted');
				sessionStorage.removeItem('total_formatted');
			}
			var context = fn.apply(this, _.toArray(arguments).slice(1));
			var model = this._getModel();
			var summary = model.get('summary') || {};
			

			if (window.sessionStorage && summary.surchargesubtotal > 0) {
				//Since LOM confirmation loses the itemized cart, use
				//sessionStorage for now. This is merely UI for cart summary
				sessionStorage.setItem('subtotal_formatted', summary.subtotal_formatted);
				sessionStorage.setItem('shippingcost_formatted', summary.shippingcost_formatted);
				sessionStorage.setItem('surcharge_formatted', summary.surchargesubtotal_formatted);
				sessionStorage.setItem('total_formatted', summary.total_formatted);
			}

			context.subtotal_formatted = sessionStorage.getItem('subtotal_formatted');
			context.shippingcost_formatted = sessionStorage.getItem('shippingcost_formatted');
			context.surcharge_formatted = sessionStorage.getItem('surcharge_formatted');
			context.total_formatted = sessionStorage.getItem('total_formatted');
			
			return context;
		});

	});

