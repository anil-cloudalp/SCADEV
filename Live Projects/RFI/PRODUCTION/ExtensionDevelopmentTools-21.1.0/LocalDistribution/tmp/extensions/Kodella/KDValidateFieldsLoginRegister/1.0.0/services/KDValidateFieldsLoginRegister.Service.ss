
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}