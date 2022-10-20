
function service(request, response)
{
	'use strict';
	try 
	{
		require('TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}