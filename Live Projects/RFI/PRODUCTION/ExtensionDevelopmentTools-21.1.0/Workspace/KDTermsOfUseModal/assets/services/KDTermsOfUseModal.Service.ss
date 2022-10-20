
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDTermsOfUseModal.KDTermsOfUseModal.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDTermsOfUseModal.KDTermsOfUseModal.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}