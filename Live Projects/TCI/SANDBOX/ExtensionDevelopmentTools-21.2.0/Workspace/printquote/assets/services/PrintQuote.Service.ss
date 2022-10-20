
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.printquote.PrintQuote.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.printquote.PrintQuote.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}