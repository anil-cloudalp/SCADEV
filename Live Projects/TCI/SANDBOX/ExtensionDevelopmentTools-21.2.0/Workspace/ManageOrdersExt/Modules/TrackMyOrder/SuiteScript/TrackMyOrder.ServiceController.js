define(
  'TCI.ManageOrdersExt.TrackMyOrder.ServiceController', 
[
  'ServiceController', 
  'TCI.ManageOrdersExt.TrackMyOrder'
], function(
  ServiceController,
  TrackYourOrderModel
) {
  "use strict";

  return ServiceController.extend({
    name: 'TCI.ManageOrdersExt.TrackMyOrder.ServiceController',

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var zip = this.request.getParameter('zip');
      var order = this.request.getParameter('order');
      return TrackYourOrderModel.getTracking({zip:zip, order:order})
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
