
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.SuiteScriptExt.SuiteScriptExt.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.SuiteScriptExt.SuiteScriptExt.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}