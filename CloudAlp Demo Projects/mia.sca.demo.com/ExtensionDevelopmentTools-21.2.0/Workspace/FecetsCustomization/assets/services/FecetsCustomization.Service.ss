
function service(request, response)
{
	'use strict';
	try 
	{
		require('RudraCustomization.FecetsCustomization.FecetsCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('RudraCustomization.FecetsCustomization.FecetsCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}