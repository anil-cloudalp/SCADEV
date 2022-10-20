define(
  'TCI.ManageOrdersExt.RequestAReturn.Items.ServiceController', 
[
  'ServiceController', 
  'TCI.ManageOrdersExt.RequestAReturn.Items'
], function(
  ServiceController,
  RequestAReturnItemsModel
) {
  "use strict";

  return ServiceController.extend({
    name: 'TCI.ManageOrdersExt.RequestAReturn.Items.ServiceController',

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var itemsToReturn = this.request.getParameter('itemsToReturn');
      var name = this.request.getParameter('name');
      var email = this.request.getParameter('email');
      var phone = this.request.getParameter('phone');
      var reason = this.request.getParameter('reason');
      var order = this.request.getParameter('order');
      return RequestAReturnItemsModel.returnRequest({
        itemsToReturn:itemsToReturn,
        name: name,
        email:email,
        phone:phone,
        reason:reason,
        order: order
      });
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
