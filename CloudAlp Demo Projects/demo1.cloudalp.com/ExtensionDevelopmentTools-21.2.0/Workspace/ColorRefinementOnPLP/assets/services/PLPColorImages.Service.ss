
function service(request, response)
{
	'use strict';
	try 
	{
		require('CloudAlp.ColorRefinementOnPLP.PLPColorImages.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CloudAlp.ColorRefinementOnPLP.PLPColorImages.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}