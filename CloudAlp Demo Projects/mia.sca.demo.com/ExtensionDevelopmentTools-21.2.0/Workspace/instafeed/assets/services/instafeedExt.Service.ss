
function service(request, response)
{
	'use strict';
	try 
	{
		require('mia.instafeed.instafeedExt.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('mia.instafeed.instafeedExt.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}