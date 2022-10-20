define("CA.BulkOrderingInCSV.RemoveItemsToCart.ServiceController", ["ServiceController",'SC.Models.Init','LiveOrder.Model'], function(
    ServiceController,
    ModelsInit,
    LiveOrderModel
  ) {
    "use strict";
  
    return ServiceController.extend({
      name: "CA.BulkOrderingInCSV.RemoveItemsToCart.ServiceController",
  
      // The values in this object are the validation needed for the current service.
      options: {
        common: {}
      },
  
      get: function get() {
       
      },
  
      post: function post() {
        // not implemented
      },
  
      put: function put() {
        // not implemented
      },
  
      delete: function() {
        ModelsInit.order.removeAllItems();
        return LiveOrderModel.get() || {};
        
      }
    });
  });
  