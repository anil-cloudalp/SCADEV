
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.checkoutCustomization.RoleBasedCheckout.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.checkoutCustomization.RoleBasedCheckout.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}