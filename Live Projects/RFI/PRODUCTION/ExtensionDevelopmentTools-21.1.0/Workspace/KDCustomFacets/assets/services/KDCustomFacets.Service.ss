
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.KDCustomFacets.KDCustomFacets.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.KDCustomFacets.KDCustomFacets.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}