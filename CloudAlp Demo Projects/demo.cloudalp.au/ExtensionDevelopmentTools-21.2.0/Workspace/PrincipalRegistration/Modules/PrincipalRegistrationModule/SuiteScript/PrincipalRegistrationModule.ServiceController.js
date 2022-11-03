define("MIA.PrincipalRegistration.PrincipalRegistrationModule.ServiceController", ['ServiceController','MIA.PrincipalRegistration.PrincipalRegistrationModule.Model'], function(
  ServiceController,PrincipalRegistrationModuleModel
) {
  "use strict";

  return ServiceController.extend({
    name: "MIA.PrincipalRegistration.PrincipalRegistrationModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
        var email = this.request.getParameter('email') ;
        return PrincipalRegistrationModuleModel.getListData(email);
    },

    post: function post() {
      return PrincipalRegistrationModuleModel.submit(this.data.data);
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
