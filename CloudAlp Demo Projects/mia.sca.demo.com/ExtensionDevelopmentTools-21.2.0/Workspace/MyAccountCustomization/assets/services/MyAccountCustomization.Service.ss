
function service(request, response)
{
	'use strict';
	try 
	{
		require('RudraCustomization.MyAccountCustomization.MyAccountCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('RudraCustomization.MyAccountCustomization.MyAccountCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}