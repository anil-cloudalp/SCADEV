
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.CCTProductTPLOne.CCTProductTPLOne.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.CCTProductTPLOne.CCTProductTPLOne.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}