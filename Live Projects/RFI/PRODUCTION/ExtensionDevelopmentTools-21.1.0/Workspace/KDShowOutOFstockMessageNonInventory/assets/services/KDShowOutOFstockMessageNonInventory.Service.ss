
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}