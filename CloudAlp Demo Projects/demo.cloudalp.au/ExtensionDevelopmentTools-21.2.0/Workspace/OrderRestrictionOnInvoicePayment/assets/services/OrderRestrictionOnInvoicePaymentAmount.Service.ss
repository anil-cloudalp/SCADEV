
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}