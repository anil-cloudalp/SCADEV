define("STAXS.CheckToHideCategories.CheckToHideCategories.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "STAXS.CheckToHideCategories.CheckToHideCategories.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var filters = [];
      var columns = [];
      var not_required_categories = [];
      filters.push('custrecord_staxs_notvisible_for_customer', 'is', 'T');
      columns.push(new nlobjSearchColumn('name'));
      var not_req_ids = nlapiSearchRecord('commercecategory',null,filters,columns);
      for(var i=0;i<not_req_ids.length;i++){
        var obj = {};
        obj.not_required_categories_id =   not_req_ids[i].id;
        obj.not_required_categories_name = not_req_ids[i].getValue('name');
        not_required_categories.push(obj)
        }
      return not_required_categories;
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
