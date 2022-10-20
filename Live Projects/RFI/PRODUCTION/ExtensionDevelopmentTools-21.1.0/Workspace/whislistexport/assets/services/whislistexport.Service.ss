
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.whislistexport.whislistexport.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.whislistexport.whislistexport.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}