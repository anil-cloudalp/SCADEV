
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.ShoppingCust.ShoppingCust.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.ShoppingCust.ShoppingCust.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}