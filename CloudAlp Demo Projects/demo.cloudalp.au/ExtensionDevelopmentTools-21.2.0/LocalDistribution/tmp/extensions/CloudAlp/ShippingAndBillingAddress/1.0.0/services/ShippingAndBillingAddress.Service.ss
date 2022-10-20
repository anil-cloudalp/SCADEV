
function service(request, response)
{
	'use strict';
	try 
	{
		require('CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}