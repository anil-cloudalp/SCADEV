
function service(request, response)
{
	'use strict';
	try 
	{
		require('TCI.ManageOrdersExt.TrackMyOrder.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TCI.ManageOrdersExt.TrackMyOrder.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}