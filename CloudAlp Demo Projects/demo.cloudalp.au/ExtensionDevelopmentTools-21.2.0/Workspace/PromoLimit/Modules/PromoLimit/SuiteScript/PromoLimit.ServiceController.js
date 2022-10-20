define("CloudAlp.PromoLimit.PromoLimit.ServiceController", ["ServiceController"], function (
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "CloudAlp.PromoLimit.PromoLimit.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var code = this.requestParameter('code');
      console.warn("code", code);
      return JSON.stringify({
        message: "Hello World I'm an Extension using a Service!"
      });
    },

    post: function post() {
      // not implemented
      var res = {};
      var self = this;
      console.warn("code", JSON.stringify(self.data));
      var promoStartDate = nlapiSearchRecord('promotioncode', null, [new nlobjSearchFilter('code', null, 'is', self.data.code)], [new nlobjSearchColumn('startdate')]);
      if (!_.isEmpty(promoStartDate) || !_.isundefined(promoStartDate)) {
        res.startDate = promoStartDate;
      }
      return res;
    },

    put: function put() {
      // not implemented
    },

    delete: function () {
      // not implemented
    }
  });
});
