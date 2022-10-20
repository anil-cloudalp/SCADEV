define("Car.CustomAccountRegister.CustomAccountRegisterModule.ServiceController", ["ServiceController","Car.model"], function(
  ServiceController,
  CarModel
) {
  "use strict";

  return ServiceController.extend({
    name: "Car.CustomAccountRegister.CustomAccountRegisterModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
  // not implemented
    },

    post: function post() {

      var returnstring = {}

try {

     nlapiSendEmail(this.data.author, this.data.recipient, "New Customer",this.data.body, null, null, null,null ); //body, null, null, records, newAttachment
     return  returnstring.status = true;
    } catch (error) {

      return returnstring.status = error;
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
