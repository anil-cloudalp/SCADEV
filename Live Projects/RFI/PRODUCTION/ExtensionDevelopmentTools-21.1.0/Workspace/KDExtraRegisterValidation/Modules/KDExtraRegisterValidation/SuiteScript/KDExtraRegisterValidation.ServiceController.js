define("Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      // return JSON.stringify({
      //   message: "Hello World I'm an Extension using a Service!"
      // });

      try{
        var objResponse='';
        nlapiLogExecution('audit', 'executing suitelet', this.request.getParameter('entitymail'))
        var entityMail = this.request.getParameter('entitymail');
         nlapiLogExecution('audit', 'entity', entityMail)
        var url = nlapiResolveURL('SUITELET', 'customscript_kd_get_duplicate_email', 'customdeploy_kd_get_duplicate_email_dpy', true)
        nlapiLogExecution('debug', 'request', url)
        var ret = nlapiRequestURL(url + '&entityMail='+entityMail); 
        nlapiLogExecution('debug', 'param constructor', ret)
        if(ret.getBody()){
          objResponse=ret.getBody()
        };

      }catch(e){
        nlapiLogExecution('audit', 'Error', JSON.stringify(e));
      }
      return (objResponse);
    },

    post: function post() {
      // not implemented
    },

    put: function put() {
		var resp = {};
          try{
			  var cust = nlapiLoadRecord('customer',this.data.internalid);
			  cust.setFieldValue('giveaccess','F');
			  var id = nlapiSubmitRecord(cust,false,true); 
			  if(id)
			  resp.id = id;
			  else
			  resp.error = "Unable to update the record."
          }catch(e){
            resp.error = e.message;
          }
          return resp;
    },

    delete: function() {
      // not implemented
    }
  });
});



var entitySearch = nlapiSearchRecord("entity",null,
[
   ["email","haskeywords",]
], 
[
   new nlobjSearchColumn("entityid").setSort(false), 
]
);
