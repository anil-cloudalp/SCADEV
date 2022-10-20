
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.Certificates.certificates.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.Certificates.certificates.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}