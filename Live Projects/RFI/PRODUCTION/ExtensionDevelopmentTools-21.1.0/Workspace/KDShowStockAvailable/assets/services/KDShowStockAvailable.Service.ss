
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDShowStockAvailable.KDShowStockAvailable.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDShowStockAvailable.KDShowStockAvailable.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}