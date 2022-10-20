
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.RequestShipAddress.RequestShipAddressModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.RequestShipAddress.RequestShipAddressModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}