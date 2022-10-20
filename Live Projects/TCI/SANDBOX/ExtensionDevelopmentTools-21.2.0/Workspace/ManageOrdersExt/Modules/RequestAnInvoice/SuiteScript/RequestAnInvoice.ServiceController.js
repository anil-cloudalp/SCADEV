define(
  'TCI.ManageOrdersExt.RequestAnInvoice.ServiceController',
[
  'ServiceController',
  'TCI.ManageOrdersExt.RequestAnInvoice'
], function(
  ServiceController,
  FindInvoiceModel
) {
  "use strict";

  return ServiceController.extend({
    name: 'TCI.ManageOrdersExt.RequestAnInvoice.ServiceController',

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function () {
      var zip = this.request.getParameter('zip');
      var order = this.request.getParameter('order');
      return FindInvoiceModel.getTracking({zip:zip, order:order})
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
