// Kodella.KDFeeCreditCard.KDFeeCreditCard.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('Kodella.KDFeeCreditCard.KDFeeCreditCard'
,	[
		'Kodella.KDFeeCreditCard.KDFeeCreditCard.ServiceController',
		'Profile.Model',
		'Application'
	]
,	function (
		KDFeeCreditCardServiceController,
		ProfileModel,
	    Application
	)
	{
		'use strict';
		Application.on('after:Profile.get', function afterProfileGet(Model, responseData) {
          
          try{
			var objPromotions = {};
			var feeSearch = nlapiSearchRecord("customrecord_kd_credit_card_fee",null,
			[
			], 
				[
				new nlobjSearchColumn("custrecord_kd_creditcard_name"), 
				new nlobjSearchColumn("custrecord_kd_promotion_fee"),
				new nlobjSearchColumn("custrecord_kd_payment_method")
				]
			);
		
            //nlapiLogExecution('debug','type',typeof(responseData.fees))
			//nlapiLogExecution('debug','objpromotions',responseData)
			//		
 
								
			if(feeSearch){
              
             for(var i = 0; i<feeSearch.length; i++){
				objPromotions[feeSearch[i].getValue("custrecord_kd_payment_method")] = feeSearch[i].getText("custrecord_kd_promotion_fee")
			}
		
			responseData.fees = JSON.stringify(objPromotions);
              nlapiLogExecution('debug','response',responseData.fees)
			}
          }catch(e){
            
            nlapiLogExecution('error','error',e)
          }
			return responseData;
         
		});
		
	});