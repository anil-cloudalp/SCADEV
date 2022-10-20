function service(request, response)
{
	'use strict';
	try 
	{
		require('Register.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Register.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}