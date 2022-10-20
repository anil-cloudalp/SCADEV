
function service(request, response)
{
	'use strict';
	try 
	{
		require('RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}