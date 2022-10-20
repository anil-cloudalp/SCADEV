
//@MODULE LandingPages

define('LandingPages.Model'
, [
	'Models.Init'
	, 'SC.Model'
	, 'underscore'
	, 'Application'
]
, function
(
	ModelsInit
	, SCModel
	, _
	, Application
)
{

	'use strict';
	
	
	return SCModel.extend({

		name: 'LandingPages.Model'
		
	,	createLead: function(data){
		
			var returnString = {};
			
			try{
				
				var search = nlapiSearchRecord('customer', null, ['email','is', data.email], null);
				
				if(search && search != null && search != '' && search.length){
					
					var record = nlapiLoadRecord('lead', search[0].getId());
				}
				else{
					var	record = nlapiCreateRecord('lead');
					record.setFieldValue('email', data.email);
				}
				
				record.setFieldValue('firstname', data.firstname);
				record.setFieldValue('lastname', data.lastname);
				record.setFieldValue('companyname', data.company);
				
				record.selectNewLineItem('addressbook');
				record.setCurrentLineItemValue('addressbook', 'addressee', String(data.firstname + " " + data.lastname));
				record.setCurrentLineItemValue('addressbook', 'addr1', data.addr1);
				record.setCurrentLineItemValue('addressbook', 'addr2', data.addr2);
				record.setCurrentLineItemValue('addressbook', 'country', data.country);
				record.setCurrentLineItemValue('addressbook', 'state', data.state);
				record.setCurrentLineItemValue('addressbook', 'city', data.city);
				record.setCurrentLineItemValue('addressbook', 'zip', data.zip);
				record.setCurrentLineItemValue('addressbook', 'addrphone', data.phone);
				record.commitLineItem('addressbook');
				
				
				record.setFieldValue('phone', data.phone);
				record.setFieldValue('comments', data.comments);
				
				returnString.recordId = nlapiSubmitRecord(record, true, true);
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
		
		}
		
	});

});
