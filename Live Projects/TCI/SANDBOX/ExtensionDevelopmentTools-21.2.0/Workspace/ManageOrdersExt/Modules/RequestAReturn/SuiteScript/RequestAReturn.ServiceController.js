define(
  'TCI.ManageOrdersExt.RequestAReturn.ServiceController', 
[
  'ServiceController', 
  'TCI.ManageOrdersExt.RequestAReturn'
], function(
  ServiceController,
  RequestAReturnModel
) {
  "use strict";

  return ServiceController.extend({
    name: 'TCI.ManageOrdersExt.RequestAReturn.ServiceController',

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var zip = this.request.getParameter('zip');
      var order = this.request.getParameter('order');
      var reason = this.request.getParameter('reason');
      var name = this.request.getParameter('name');
      var email = this.request.getParameter('email');
      var phone = this.request.getParameter('phone');
      return RequestAReturnModel.getTracking({zip:zip, order:order, reason:reason, name:name, email:email, phone:phone});
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
