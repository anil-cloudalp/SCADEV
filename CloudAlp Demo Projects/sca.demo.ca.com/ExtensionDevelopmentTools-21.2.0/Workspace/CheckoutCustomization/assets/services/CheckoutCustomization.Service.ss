
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.CheckoutCustomization.CheckoutCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.CheckoutCustomization.CheckoutCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}