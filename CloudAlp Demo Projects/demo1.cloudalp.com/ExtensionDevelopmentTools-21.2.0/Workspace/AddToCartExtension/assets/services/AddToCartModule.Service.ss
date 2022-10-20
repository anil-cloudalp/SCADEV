
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.AddToCartExtension.AddToCartModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.AddToCartExtension.AddToCartModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}