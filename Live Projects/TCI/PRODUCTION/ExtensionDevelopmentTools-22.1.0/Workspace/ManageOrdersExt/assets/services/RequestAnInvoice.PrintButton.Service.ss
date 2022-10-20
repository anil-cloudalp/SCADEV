
function service(request, response)
{
	'use strict';
	try 
	{
		require('TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}