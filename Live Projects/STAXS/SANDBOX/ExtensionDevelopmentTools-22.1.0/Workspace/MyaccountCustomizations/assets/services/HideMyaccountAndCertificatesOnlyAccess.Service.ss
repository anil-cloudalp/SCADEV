
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}