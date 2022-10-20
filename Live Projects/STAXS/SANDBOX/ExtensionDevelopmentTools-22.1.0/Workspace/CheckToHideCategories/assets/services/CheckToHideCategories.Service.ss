
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.CheckToHideCategories.CheckToHideCategories.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.CheckToHideCategories.CheckToHideCategories.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}