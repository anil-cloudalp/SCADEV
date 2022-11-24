
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.BreadCrumCustomization.PDPBreadCrumCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.BreadCrumCustomization.PDPBreadCrumCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}