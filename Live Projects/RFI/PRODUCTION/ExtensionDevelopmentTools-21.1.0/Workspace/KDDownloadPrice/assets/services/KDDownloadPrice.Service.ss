
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDDownloadPrice.KDDownloadPrice.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDDownloadPrice.KDDownloadPrice.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}