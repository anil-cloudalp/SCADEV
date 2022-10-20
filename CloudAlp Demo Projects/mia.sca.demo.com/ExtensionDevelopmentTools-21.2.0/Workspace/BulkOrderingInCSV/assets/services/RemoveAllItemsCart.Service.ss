
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.BulkOrderingInCSV.RemoveItemsToCart.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.BulkOrderingInCSV.RemoveItemsToCart.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}