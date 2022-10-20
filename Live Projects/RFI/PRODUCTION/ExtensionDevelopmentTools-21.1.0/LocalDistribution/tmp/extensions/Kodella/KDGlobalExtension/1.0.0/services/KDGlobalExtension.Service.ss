
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDGlobalExtension.KDGlobalExtension.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDGlobalExtension.KDGlobalExtension.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}