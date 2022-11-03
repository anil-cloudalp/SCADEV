
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.CustomNewsLetter.CustomNewsLetter.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.CustomNewsLetter.CustomNewsLetter.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}