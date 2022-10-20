
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.ScisCartCustomizations.ScisCartCustomizations.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.ScisCartCustomizations.ScisCartCustomizations.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}