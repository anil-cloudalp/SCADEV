define("MIA.MiaRewardsExtension.MiaRewardsModule.ServiceController", ["ServiceController","MIA.MiaRewardsExtension.MiaRewardsModule.Model"], function(
  ServiceController,MiaRewardsModuleModel
) {
  "use strict";

  return ServiceController.extend({
    name: "MIA.MiaRewardsExtension.MiaRewardsModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
     var param = this.request.getParameter('getListData');
     console.warn('param', param);
     if(param){
       return MiaRewardsModuleModel.getListData();
     }
     
    },

    post: function post() {
      return MiaRewardsModuleModel.submit(this.data.data);
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
