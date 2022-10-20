
define(
	'Register.ServiceController'
,	[
		'ServiceController'
	,	'Register.Model'
	, 'underscore'
	]
,	function(
		ServiceController
	,	RegisterModel
	,	_
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'Register.ServiceController'
			
		,	get: function get()
			{
				
			}

		,	post: function post()
			{
				return RegisterModel.createLead(this.data);
			}

		});
	}
);