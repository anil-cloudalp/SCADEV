
function service(request, response)
{
	'use strict';
	try 
	{
		require('TCI.ManageOrdersExt.RequestAnInvoice.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TCI.ManageOrdersExt.RequestAnInvoice.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}