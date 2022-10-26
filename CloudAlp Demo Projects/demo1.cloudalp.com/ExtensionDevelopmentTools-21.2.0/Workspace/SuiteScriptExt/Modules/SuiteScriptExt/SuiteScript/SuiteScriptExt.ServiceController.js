define("Acme.SuiteScriptExt.SuiteScriptExt.ServiceController", ["ServiceController",'LiveOrder.Model','SC.Models.Init','Acme.SuiteScriptExt.SuiteScriptExt'], function(
  ServiceController,
  LiveOrderModel,
  ModelsInit,
  SuiteScriptExtModel
) {
  "use strict";

  return ServiceController.extend({

    name: "Acme.SuiteScriptExt.SuiteScriptExt.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
            common: {
                requireLogin: true,
                requirePermissions: {
                    list: ['lists.listCase.1']
                }
            }
        },

   get: function() {
            const id = this.request.getParameter('internalid') || this.data.internalid;
            if (id) {
                return SuiteScriptExtModel.get(id);
            }
     
      const list_header_data = {   
              filter: this.request.getParameter('filter'),
              order: this.request.getParameter('order'),
              sort: this.request.getParameter('sort'),
              from: this.request.getParameter('from'),
              to: this.request.getParameter('to'),
              page: this.request.getParameter('page')   
      };
     
        return SuiteScriptExtModel.search(nlapiGetUser() + '', list_header_data);
    },

      post: function() {
              const new_case_id = SuiteScriptExtModel.create(nlapiGetUser() + '', this.data);
              return SuiteScriptExtModel.get(new_case_id);
      },
  
      put: function() {
            const id = this.request.getParameter('internalid') || this.data.internalid;
            SuiteScriptExtModel.update(id, this.data);
            return SuiteScriptExtModel.get(id);
      },

      delete: function() {
        // not implemented
      }

  });
});

