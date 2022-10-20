
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.PdpPdf.PDPCustompdf.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.PdpPdf.PDPCustompdf.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}