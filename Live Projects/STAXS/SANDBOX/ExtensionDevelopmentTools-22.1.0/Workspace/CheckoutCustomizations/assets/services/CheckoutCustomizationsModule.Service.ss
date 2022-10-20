
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.CheckoutCustomizations.CheckoutCustomizationsModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.CheckoutCustomizations.CheckoutCustomizationsModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}