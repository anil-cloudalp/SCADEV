
function service(request, response)
{
	'use strict';
	try 
	{
		require('TCI.ManageOrdersExt.ManageOrdersExt.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TCI.ManageOrdersExt.ManageOrdersExt.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}