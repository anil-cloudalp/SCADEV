function service(request, response)
{
	'use strict';
	try 
	{
		require('LandingPages.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('LandingPages.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}