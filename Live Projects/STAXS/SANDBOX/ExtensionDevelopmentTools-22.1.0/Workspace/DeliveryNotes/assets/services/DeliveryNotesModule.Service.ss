
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.DeliveryNotes.DeliveryNotesModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.DeliveryNotes.DeliveryNotesModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}