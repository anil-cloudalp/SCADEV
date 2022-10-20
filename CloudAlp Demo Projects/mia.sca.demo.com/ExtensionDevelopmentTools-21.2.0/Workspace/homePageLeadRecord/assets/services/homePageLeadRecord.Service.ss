
function service(request, response)
{
	'use strict';
	try 
	{
		require('RudraCustomization.homePageLeadRecord.homePageLeadRecord.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('RudraCustomization.homePageLeadRecord.homePageLeadRecord.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}