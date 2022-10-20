
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}