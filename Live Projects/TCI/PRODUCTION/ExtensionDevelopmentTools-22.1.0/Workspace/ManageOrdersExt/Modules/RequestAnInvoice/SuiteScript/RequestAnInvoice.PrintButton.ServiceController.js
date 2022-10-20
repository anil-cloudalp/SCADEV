define(
  'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.ServiceController',
[
  'ServiceController',
  'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton'
], function(
  ServiceController,
  FindInvoicePrintButtonModel
) {
  "use strict";

  return ServiceController.extend({
    name: 'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.ServiceController',

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function () {
      // console.log('this.request', this.request);
      var zip = this.request.getParameter('zip');
      var tranid = this.request.getParameter('tranid');
      var customerId = this.request.getParameter('customerId');
      var purchaseId = this.request.getParameter('purchaseId');
      return FindInvoicePrintButtonModel.print({
        zip:zip,
        tranid:tranid,
        customerId:customerId,
        purchaseId:purchaseId
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
