define("Acme.QuantityAvailExt.QuantityExt.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "Acme.QuantityAvailExt.QuantityExt.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

      get: function get() {
            var LocationDetails = [];
            var filters = [];
            var columns = [];
            columns.push(new nlobjSearchColumn('name',null,null));
            columns.push(new nlobjSearchColumn('custrecord_safety_limit',null,null));
            filters.push(new nlobjSearchFilter('isinactive',null,'is','F'));
            var locationSearch = nlapiSearchRecord('Location', null, filters, columns);
            if ((locationSearch) && (locationSearch.length > 0)) {
                for (var i = 0; i < locationSearch.length; i++){
                  var obj = {};
                  obj.name = locationSearch[i].getValue('name');
                  obj.id = locationSearch[i].getId();
                  LocationDetails.push(obj);
                }
            }
        return LocationDetails;
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
