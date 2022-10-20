
function service(request, response)
{
	'use strict';
	try 
	{
		require('RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}