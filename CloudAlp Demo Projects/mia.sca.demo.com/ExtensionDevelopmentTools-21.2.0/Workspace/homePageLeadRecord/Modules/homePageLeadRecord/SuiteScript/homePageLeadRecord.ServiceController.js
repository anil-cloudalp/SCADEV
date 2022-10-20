define("RudraCustomization.homePageLeadRecord.homePageLeadRecord.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "RudraCustomization.homePageLeadRecord.homePageLeadRecord.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      // return JSON.stringify({
      //   message: "Hello World I'm an Extension using a Service!"
      // });
    },

    post: function post() {

	
        var firstname = this.data.firstname
        ,  lastname = this.data.lastname
        ,  email = this.data.email
        ,  phone = this.data.phone|| ''
        ,  comments = this.data.comments|| ''
        ,  companyname = this.data.company|| ''
      
        var returnString = {};
    
        if(firstname != null && firstname != '' && lastname != null && lastname != '' && email != null && email != '')
        {
          try{
            var filters = [];
            filters.push(new nlobjSearchFilter('email',null,'is',email));
    
            var search = nlapiSearchRecord('customer',null,filters,null);
            if(search != null)
            var record = nlapiLoadRecord('lead',search[0].getId());
            else
            var record = nlapiCreateRecord('lead');
            record.setFieldValue('entityid',firstname+" "+lastname);
            record.setFieldValue('firstname',firstname);
            record.setFieldValue('lastname',lastname);
            record.setFieldValue('email',email);
            record.setFieldValue('phone',phone);
            
            if(comments != null && comments != '')
            record.setFieldValue('comments',comments);
            
    
            var recId =  nlapiSubmitRecord(record,true,true);
            returnString.id = recId;
          
          }
          catch(e){
            returnString.error = e.toString();
          }
        }
        return returnString;

    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
