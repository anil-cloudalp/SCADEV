
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
				var isHome = this.request.getParameter('isHome');
				var getListData = this.request.getParameter('getListData');
				
				var fieldKey = this.request.getParameter('fieldKey');
				var value = this.request.getParameter('value');
				
				if(fieldKey && value){
					return LandingPagesModel.addOption(fieldKey,value);
				}
				
				
				if(getListData){
					return LandingPagesModel.getListData();
				}
				
				return LandingPagesModel.getVendors(isHome);
			}

		,	post: function post()
			{
				return LandingPagesModel.createLead(this.data);
				
			}

		});
	}
);