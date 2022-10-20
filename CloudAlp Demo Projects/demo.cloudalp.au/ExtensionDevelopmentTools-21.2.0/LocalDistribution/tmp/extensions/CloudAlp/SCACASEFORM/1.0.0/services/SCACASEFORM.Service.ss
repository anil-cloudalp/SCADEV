
function service(request, response)
{
	'use strict';
	try 
	{
		require('CloudAlp.SCACASEFORM.SCACASEFORM.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CloudAlp.SCACASEFORM.SCACASEFORM.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}