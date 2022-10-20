define("CA.MyAccountCustomization.RoleBasedMyAccount.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.MyAccountCustomization.RoleBasedMyAccount.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
		console.warn("user roles", nlapiGetContext().getRole());
      const ret = {
            role: nlapiGetContext().getRole()   
		,	user: nlapiGetUser()
        };

        return ret;
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
