
//@MODULE CustomModules

define('CustomModules.ServiceController'
, [
    'ServiceController'
  , 'Application'
  , 'CustomModules.Model'
  ]
, function
  (
    ServiceController
  , Application
  , CustomModulesModel
  )
{
  'use strict';

  return ServiceController.extend({
    name: 'CustomModules.ServiceController'
	
  , get: function()
    {
		var checkout = this.request.getParameter('checkout');
		
		var profile = this.request.getParameter('profile');
		
		if(checkout){
			
			return CustomModulesModel.getCheckoutFields();
		}
		if(profile){
			
			return CustomModulesModel.getProfileFields();
		}
		
		return CustomModulesModel.getLoyalityPoints();
	}
  , post: function()
    {	
		//nlapiLogExecution('DEBUG','post data In WholesaleAccount',JSON.stringify(this.data));
       if(this.data.urlFragment == '/returns')
       {
         return CustomModulesModel.createReturns(this.data.returnsFields);
       }
	   if(this.data.urlFragment == '/contact-modal')
       {
         return CustomModulesModel.createContactLead(this.data.contactFields);
       }
       if (this.data.urlFragment == '/customer-migration')
       {
           //return CustomModulesModel.createCustomerMigrationLead(this.data.customerMigrationFields); 
       }
	   
	   
    }
  });
});
