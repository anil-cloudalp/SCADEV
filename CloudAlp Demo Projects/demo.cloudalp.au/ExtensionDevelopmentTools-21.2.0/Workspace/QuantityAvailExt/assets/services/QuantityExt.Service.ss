
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.QuantityAvailExt.QuantityExt.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.QuantityAvailExt.QuantityExt.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}