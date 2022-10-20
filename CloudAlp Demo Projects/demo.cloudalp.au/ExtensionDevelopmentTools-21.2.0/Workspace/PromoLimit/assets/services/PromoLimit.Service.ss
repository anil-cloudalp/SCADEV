
function service(request, response)
{
	'use strict';
	try 
	{
		require('CloudAlp.PromoLimit.PromoLimit.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CloudAlp.PromoLimit.PromoLimit.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}