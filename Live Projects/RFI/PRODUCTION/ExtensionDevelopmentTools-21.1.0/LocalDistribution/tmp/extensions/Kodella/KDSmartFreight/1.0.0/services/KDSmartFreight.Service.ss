
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDSmartFreight.KDSmartFreight.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDSmartFreight.KDSmartFreight.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}