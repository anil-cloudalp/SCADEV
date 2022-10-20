define("STAXS.RequestShipAddress.RequestShipAddressModule.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "STAXS.RequestShipAddress.RequestShipAddressModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      // not implemented
    },

    post: function post() {
      var returnstring = {}
      var userId = nlapiGetUser();
      var record = nlapiLoadRecord('customer', userId);
      var salesRep = record.getLineItemValue("salesteam",'employee',1);
      var salesRepEmail = nlapiLookupField('employee',salesRep,'email');
      try {
           nlapiSendEmail(this.data.author, salesRepEmail, this.data.subject,this.data.body, null, null, null,null );
            returnstring.status = true;
            return returnstring;
          } catch (error) {
            returnstring.status = error;
            return returnstring;
          }
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
