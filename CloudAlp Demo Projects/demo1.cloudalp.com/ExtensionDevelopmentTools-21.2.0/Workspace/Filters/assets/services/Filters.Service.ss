
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.Filters.Filters.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.Filters.Filters.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}