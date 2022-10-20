
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDPDPCustom.KDPDPCustom.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDPDPCustom.KDPDPCustom.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}