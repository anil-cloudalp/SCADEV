
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.ProductSalesTemplate2.ProductSalesPage2.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.ProductSalesTemplate2.ProductSalesPage2.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}