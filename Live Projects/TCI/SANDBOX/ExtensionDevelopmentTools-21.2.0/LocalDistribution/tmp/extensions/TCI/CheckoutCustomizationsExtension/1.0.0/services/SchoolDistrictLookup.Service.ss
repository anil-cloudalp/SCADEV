
function service(request, response)
{
	'use strict';
	try 
	{
		require('TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}