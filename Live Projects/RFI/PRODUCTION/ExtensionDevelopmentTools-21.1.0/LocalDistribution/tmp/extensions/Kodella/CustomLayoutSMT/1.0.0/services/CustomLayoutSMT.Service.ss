
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.CustomLayoutSMT.CustomLayoutSMT.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.CustomLayoutSMT.CustomLayoutSMT.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}