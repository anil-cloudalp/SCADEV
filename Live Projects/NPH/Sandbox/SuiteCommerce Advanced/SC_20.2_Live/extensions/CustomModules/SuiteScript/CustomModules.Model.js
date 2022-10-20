
//@MODULE CustomModules

define('CustomModules.Model'
, [
    'Models.Init'
  , 'SC.Model'
  , 'underscore'
  ]
, function
  (
    ModelsInit
  , SCModel
  , _
  )
{

  'use strict';

  return SCModel.extend({

    name: 'CustomModules'



,	createReturns: function(returnsFields){
		var name = returnsFields['name']
		,	email = returnsFields['email']
		,	phone = returnsFields['phone']
		,	order = returnsFields['order']
		,	customer = returnsFields['customer']
		,	item = returnsFields['item']
		,	reason_for_return = returnsFields['reason-for-return']
		,	reason = returnsFields['reason']
		,	comments = returnsFields['comments'];

			var returnString = {};
			
		if(name != null && name != '' && phone != null && phone != '' && email != null && email != '' && reason_for_return != null && reason_for_return != '' )
		{
			try{
				var	record = nlapiCreateRecord('customrecord_appf_returns_exchanges');
				record.setFieldValue('name',name);
				record.setFieldValue('custrecord_appf_re_email',email);
				record.setFieldValue('custrecord_appf_re_phone',phone);
				record.setFieldValue('custrecord_appf_re_reason_for_return',reason_for_return);
				  
				if(reason != null && reason != '')
					record.setFieldValue('custrecord_appf_re_reason',reason);
				if(order != null && order != '')
				{
					record.setFieldValue('custrecord_appf_re_order',order);
				}
				if(customer != null && customer != '')
				{
					record.setFieldValue('custrecord_appf_re_customer',customer);
				}
				if(item != null && item != '')
				{
					record.setFieldValue('custrecord_appf_re_item',item);
				}
				
				if(comments != null && comments != '')
					record.setFieldValue('custrecord_appf_re_comments',comments);

				  var recId =  nlapiSubmitRecord(record,true,true);
					returnString.id = recId;
			}
			catch(e){
				returnString.error = e.toString();
			}
		}

		return (JSON.stringify(returnString));
	}
,	createContactLead: function(contactFields)
	{
  	   //contactFields
  	   nlapiLogExecution('DEBUG','contactFields:',JSON.stringify(contactFields));
  		var firstname = contactFields['firstname']
    	,	lastname = contactFields['lastname']
  		,	email = contactFields['email']
  		,	phone = contactFields['phone']
  		,	message = contactFields['message'];

  			var returnString = {};

  		if(firstname != null && firstname != '' && lastname != null && lastname != '' && email != null && email != '' && message != null && message != '' )
		{
			try{
				var filters = [];
				filters.push(new nlobjSearchFilter('email',null,'is',email));

				var search = nlapiSearchRecord('customer',null,filters,null);
				  if(search != null)
				  record = nlapiLoadRecord('lead',search[0].getId());
				  else
				var	record = nlapiCreateRecord('lead');
				record.setFieldValue('customform',115);//NPH - Lead Form
				record.setFieldValue('entityid',firstname+" "+lastname);
				record.setFieldValue('firstname',firstname);
				record.setFieldValue('lastname',lastname);
				record.setFieldValue('email',email);
				if(phone != null && phone != '')
				{
				  record.setFieldValue('phone',phone);
				}
				record.setFieldValue('comments',message);
				
				var recId =  nlapiSubmitRecord(record,true,true);
					returnString.id = recId;
			}
			catch(e){
				returnString.error = e.toString();
			}

		}

  		return (JSON.stringify(returnString));
  	}
,	getLoyalityPoints: function()
	{
		var returnString = {};
		var custId = nlapiGetUser();
		try{
		
			var itemFields = nlapiLookupField('customer',custId,['custentity_nph_loyalty_org_cust','custentity_nph_loyalty_eligible']);
			
			returnString.data = itemFields;
		
		}
		catch(e){
			returnString.error = e.toString();
		}
		return returnString;
	}
,	getShipItems: function()
	{
		var returnString = {};
		
		try{
		
			var filters = [];
			var cols = [];		
						
			filters.push(new nlobjSearchFilter('isinactive',null, 'is', 'F'));
			
			cols.push(new nlobjSearchColumn('displayname'));
			cols.push(new nlobjSearchColumn('internalid'));
						
			var results = nlapiSearchRecord('shipitem',null,filters,cols);
			
			var resultsArr = [];
			if(results && results.length > 0)
			{	
				results.forEach(function(result){
					
					resultsArr.push({
						name: result.getValue('displayname'),	
						id: result.getValue('internalid')
					});
				});
			}		
			
			returnString.data = resultsArr;
		
		}
		catch(e){
			returnString.error = e.toString();
		}
		return returnString;
	}
,	getCheckoutFields: function()
    {
		var returnString = {};
		
		try{
			//var userId = nlapiGetUser();
			
			/*if(userId){*/
				var imprintRec = nlapiCreateRecord('salesorder');
				var locFld = imprintRec.getField('custbody_appf_campaign_category');
		
				var locOptions = locFld.getSelectOptions();
				
				var  locArr = [];
				
				for(var i=0;i < locOptions.length;i++)
				{
					var obj = {};
					
					obj.id = locOptions[i].getId();
					obj.name = locOptions[i].getText();
					
					locArr.push(obj);
				}
				returnString.campaign_category = locArr;
			/*}
			else{
				returnString.userId = userId;
			}*/
			
			
		}
		catch(e){
			returnString.error = e.toString();
		}

		return returnString;
    }
,	getProfileFields: function()
    {
		var returnString = {};
		
		try{

			//returnString.fields = nlapiLookupField('customer', nlapiGetUser(), ['custentity_customer_pays_as', 'companyname', 'category']);
			var filters = [];
			var cols = [];		
						
			filters.push(new nlobjSearchFilter('internalid',null, 'is', nlapiGetUser()));
			
			cols.push(new nlobjSearchColumn('custentity_customer_pays_as'));
			cols.push(new nlobjSearchColumn('companyname'));
			cols.push(new nlobjSearchColumn('category'));
			cols.push(new nlobjSearchColumn('custentity_npo_constituent_type'));
						
			var results = nlapiSearchRecord('customer',null,filters,cols);
			
			var resultsArr = [];
			if(results && results.length > 0)
			{	
				results.forEach(function(result){
					
					resultsArr.push({
						isPaidForOrg: (result.getValue('custentity_customer_pays_as') == 2),
						paidFor: result.getText('custentity_customer_pays_as'),
						company: result.getValue('companyname'),
						category: result.getText('category'),
						indiType: result.getText('custentity_npo_constituent_type')
					});
				});
			}
			returnString.results = resultsArr.length ? resultsArr[0] : [];
		}
		catch(e){
			returnString.error = e.toString();
		}

		return returnString;
    }

  });

});
