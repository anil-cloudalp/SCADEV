
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.ShowCaseFields.ShowCaseFields.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.ShowCaseFields.ShowCaseFields.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}