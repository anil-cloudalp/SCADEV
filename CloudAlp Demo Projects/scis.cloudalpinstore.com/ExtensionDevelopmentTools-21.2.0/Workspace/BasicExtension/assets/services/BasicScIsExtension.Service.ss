
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.BasicExtension.BasicScIsExtension.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.BasicExtension.BasicScIsExtension.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}