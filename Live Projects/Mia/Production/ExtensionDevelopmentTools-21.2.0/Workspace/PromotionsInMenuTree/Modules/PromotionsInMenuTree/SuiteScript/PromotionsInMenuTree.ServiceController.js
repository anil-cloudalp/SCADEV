define("CA.PromotionsInMenuTree.PromotionsInMenuTree.ServiceController", ["ServiceController","CA.PromotionsInMenuTree.Model"], function(
  ServiceController,
  PromotionsInMenuTreeModel
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.PromotionsInMenuTree.PromotionsInMenuTree.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var listParams = {
        cust_tier: this.request.getParameter('customer_tier') || ''
      };
      var promoFilter = this.request.getParameter('promoFilter');
      if(listParams.cust_tier){
        return PromotionsInMenuTreeModel.list(listParams);
      }
      else if(promoFilter){
        return PromotionsInMenuTreeModel.search(promoFilter);
      }
      else{
        return true;
      } 
    },

    post: function post() {
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
