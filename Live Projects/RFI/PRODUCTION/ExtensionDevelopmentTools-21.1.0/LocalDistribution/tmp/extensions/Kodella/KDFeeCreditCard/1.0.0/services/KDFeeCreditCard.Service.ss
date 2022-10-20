
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDFeeCreditCard.KDFeeCreditCard.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDFeeCreditCard.KDFeeCreditCard.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}