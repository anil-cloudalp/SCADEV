
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}