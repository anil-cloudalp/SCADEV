
function service(request, response)
{
	'use strict';
	try 
	{
		require('Car.CustomAccountRegister.CustomAccountRegisterModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Car.CustomAccountRegister.CustomAccountRegisterModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}