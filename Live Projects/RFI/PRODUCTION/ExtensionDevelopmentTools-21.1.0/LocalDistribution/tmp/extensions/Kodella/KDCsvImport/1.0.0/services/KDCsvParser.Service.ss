
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDCsvImport.KDCsvParser.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDCsvImport.KDCsvParser.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}