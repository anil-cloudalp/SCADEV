
define(
	'GetMacDetails.ServiceController'
,	[
		'ServiceController'
	,	'GetMacDetails.Model'
	, 'underscore'
	, 'ReturnAuthorization.Model'
	]
,	function(
		ServiceController
	,	GetMacDetailsModel
	,	_
	,	ReturnAuthorizationModel
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'GetMacDetails.ServiceController'
			
		,	options: function() {
				return {
					common: {
						requireLogin: true
					}
				};
			}
		,	get: function get()
			{
				var soID = this.request.getParameter('soId');
				var tranID = this.request.getParameter('tranId');
				
				var recordType = this.request.getParameter('recordType');
				var internalid = this.request.getParameter('internalid');
				
				var docs = this.request.getParameter('docs');
				var docsFilter = this.request.getParameter('filter');
				
				var salesRep = this.request.getParameter('salesRep');
				var followUp = this.request.getParameter('followUp');
				
				var custEmail = this.request.getParameter('custEmail');
				
				if(docs){
					return GetMacDetailsModel.getDocs(docsFilter);
				}
				
				if(salesRep){
					return GetMacDetailsModel.getSalesRep();
				}
				if(followUp){
					return GetMacDetailsModel.prepareEmail(soID,custEmail);
				}
				
				if(recordType && internalid){
					return GetMacDetailsModel.getReturnsData(recordType,internalid);
				}
				else{
					var htmlData = GetMacDetailsModel.getMacDetails(soID,tranID);
					
					if(_.has(htmlData,'html')){
						this.response.setContentType('EXCEL',tranID + '_Mac_Address.xls');
						this.response.write(nlapiEncrypt(htmlData.html, 'base64'));
					}
					else
						this.response.write(htmlData.error);
				}
			},

			post: function() {
				
			}

		});
	}
);