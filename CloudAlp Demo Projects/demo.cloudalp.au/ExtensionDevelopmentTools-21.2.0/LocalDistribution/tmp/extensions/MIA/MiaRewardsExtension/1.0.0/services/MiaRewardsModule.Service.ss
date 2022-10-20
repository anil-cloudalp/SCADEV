
function service(request, response)
{
	'use strict';
	try 
	{
		require('MIA.MiaRewardsExtension.MiaRewardsModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('MIA.MiaRewardsExtension.MiaRewardsModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}