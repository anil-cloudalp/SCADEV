
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.SearchForAddressInCheckout.SearchForAddressInCheckout.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.SearchForAddressInCheckout.SearchForAddressInCheckout.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}