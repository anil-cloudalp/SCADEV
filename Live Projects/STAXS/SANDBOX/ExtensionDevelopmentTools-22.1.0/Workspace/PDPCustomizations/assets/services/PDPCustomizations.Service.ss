
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.PDPCustomizations.PDPCustomizations.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.PDPCustomizations.PDPCustomizations.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}