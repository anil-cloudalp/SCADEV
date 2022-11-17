
define(
	'Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount'
,   [
		'Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount.View',
	    'OrderWizard.Module.PaymentMethod.Selector',
		'GlobalViews.Message.View',
		'Configuration'
	] 
,   function (
		OrderRestrictionOnInvoicePaymentAmountView,
	    OrderWizardModulePaymentMethodSelector,
		GlobalViewsMessageView,
		Configuration
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var checkout = container.getComponent('Checkout');
			var cart = container.getComponent('Cart');
			if (checkout) {
				OrderWizardModulePaymentMethodSelector.prototype.getContext = _.wrap(OrderWizardModulePaymentMethodSelector.prototype.getContext, function getContext(fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						var activeModules = context.activeModules;
						var selectedPaymentMethod = _.find(activeModules, function (activemodule) {
							if (((activemodule.isSelected) && (activemodule.isActive)) == true) {
								return true;
							}
						})
					
					   if (selectedPaymentMethod.type == "invoice") {
						   cart.getSummary().then(function (summary) {
							   console.log("OrderRestrictionOnInvoicePaymentAmount", Configuration.get('OrderRestrictionOnInvoicePaymentAmount.config'));
								if (summary.total > Configuration.get('OrderRestrictionOnInvoicePaymentAmount.config')) {
									  var globalViewMessage = new GlobalViewsMessageView({
											message: "<p class='payment_Method_not_allowed'>The Total Amount allowed for Purchase using Invoice is $10000</p>",
											type: "error",
											closable: true
									  });
									var html = globalViewMessage.render().$el.html();		
									$('[data-view="OrderWizardSummary.AfterSubtotal"]').html(html);									   
									var SubmitButtons = $('[data-action="submit-step"]');
											_.each(SubmitButtons, function (button) {
												$(button).hide()
											})		
									}
							});
						} else {
								var SubmitButtons  = $('[data-action="submit-step"]');
								_.each(SubmitButtons, function (button) {
									    $(button).show();
								})
						       $('[data-view="OrderWizardSummary.AfterSubtotal"]').html("");
						}
						return context;
				})
			}
		}
	};
});
