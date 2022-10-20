
function service(request, response)
{
	'use strict';
	try 
	{
		require('MIA.PrincipalRegistration.PrincipalRegistrationModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('MIA.PrincipalRegistration.PrincipalRegistrationModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}