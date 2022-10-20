
define(
	'LandingPages.ServiceController'
,	[
		'ServiceController'
	,	'LandingPages.Model'
	, 'underscore'
	]
,	function(
		ServiceController
	,	LandingPagesModel
	,	_
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'LandingPages.ServiceController'
			
		,	get: function get()
			{
				
			}

		,	post: function post()
			{
				return LandingPagesModel.createLead(this.data);
			}

		});
	}
);