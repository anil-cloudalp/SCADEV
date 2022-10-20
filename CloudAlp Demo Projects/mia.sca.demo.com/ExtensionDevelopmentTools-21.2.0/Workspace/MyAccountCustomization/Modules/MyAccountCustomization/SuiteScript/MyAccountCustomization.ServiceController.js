define("RudraCustomization.MyAccountCustomization.MyAccountCustomization.ServiceController", ["ServiceController",'RudraCustomization.MyAccountCustomization.Model'], function(
  ServiceController
  , MyAccountCustomizationModel
) {
  "use strict";

  return ServiceController.extend({
    name: "RudraCustomization.MyAccountCustomization.MyAccountCustomization.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {
        requireLogin: true
      }
    },

    get: function get() {
      return MyAccountCustomizationModel.getSalesOrder();
    },

    post: function post() {
      // not implemented
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
