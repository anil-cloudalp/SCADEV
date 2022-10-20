
function service(request, response)
{
	'use strict';
	try 
	{
		require('RudraCustomization.ProductDetailsCustomization.ProductDetailsCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('RudraCustomization.ProductDetailsCustomization.ProductDetailsCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}