
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.ScisLayoutCustomizations.ScisLayoutCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.ScisLayoutCustomizations.ScisLayoutCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}