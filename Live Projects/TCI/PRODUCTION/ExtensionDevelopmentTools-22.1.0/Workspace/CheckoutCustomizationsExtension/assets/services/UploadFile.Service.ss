
function service(request, response)
{
	'use strict';
	try 
	{
		require('TCI.CheckoutCustomizationsExtension.UploadFile.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TCI.CheckoutCustomizationsExtension.UploadFile.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}