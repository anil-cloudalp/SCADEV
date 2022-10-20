
function service(request, response)
{
	'use strict';
	try 
	{
		require('CloudAlp.ShoppingCustomization.ShoppingCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CloudAlp.ShoppingCustomization.ShoppingCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}