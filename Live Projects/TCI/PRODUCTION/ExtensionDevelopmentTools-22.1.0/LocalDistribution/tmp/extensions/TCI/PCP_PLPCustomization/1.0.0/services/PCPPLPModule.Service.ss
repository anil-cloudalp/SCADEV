
function service(request, response)
{
	'use strict';
	try 
	{
		require('TCI.PCP_PLPCustomization.PCPPLPModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TCI.PCP_PLPCustomization.PCPPLPModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}