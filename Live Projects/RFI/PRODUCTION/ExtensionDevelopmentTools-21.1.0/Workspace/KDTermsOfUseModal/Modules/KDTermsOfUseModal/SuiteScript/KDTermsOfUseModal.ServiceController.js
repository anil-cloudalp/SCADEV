define("Kodella.KDTermsOfUseModal.KDTermsOfUseModal.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "Kodella.KDTermsOfUseModal.KDTermsOfUseModal.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var params = request.getAllParameters();
      var company = params["company"];
      var email = params["email"];
      var url = nlapiResolveURL('SUITELET','customscript_kd_accept_terms','customdeploy1', true);
      url += "&company=" + company + "&email=" + email;
      var ret = nlapiRequestURL(url).getBody();
      return ret;
    },

    post: function post() {
      var customerId = this.data.customerId;
      var type = this.data.type;
      var url = nlapiResolveURL('SUITELET','customscript_kd_accept_terms','customdeploy1', true);
      var ret = nlapiRequestURL(url, { customerId: customerId, type: type }).getBody();
      return ret;
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
