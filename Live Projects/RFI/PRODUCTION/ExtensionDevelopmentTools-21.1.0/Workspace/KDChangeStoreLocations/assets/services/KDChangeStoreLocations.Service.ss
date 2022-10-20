
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDChangeStoreLocations.KDChangeStoreLocations.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDChangeStoreLocations.KDChangeStoreLocations.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}