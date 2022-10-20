
function service(request, response)
{
	'use strict';
	try 
	{
		require('Demo.TrackMyOrders.TrackMyOrdersModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Demo.TrackMyOrders.TrackMyOrdersModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}