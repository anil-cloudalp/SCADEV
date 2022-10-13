
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.html2pdf.html2pdf.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.html2pdf.html2pdf.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}