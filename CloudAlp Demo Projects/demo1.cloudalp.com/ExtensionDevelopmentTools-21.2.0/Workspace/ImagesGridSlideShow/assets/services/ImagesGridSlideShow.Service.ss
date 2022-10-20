
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.ImagesGridSlideShow.ImagesGridSlideShow.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.ImagesGridSlideShow.ImagesGridSlideShow.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}