
function service(request, response)
{
	'use strict';
	try 
	{
		require('CLOUDALPSCS.ConfigureItemsExt.ConfigureItemsModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CLOUDALPSCS.ConfigureItemsExt.ConfigureItemsModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}