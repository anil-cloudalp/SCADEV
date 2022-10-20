define("TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.ServiceController", ["ServiceController","TCI.CheckoutCustomizationsExtension.SchoolDistrictLookupSS.Model"], function(
  ServiceController,SchoolDistrictLookupModel
) {
  "use strict";

  return ServiceController.extend({
    name: "TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function ()
    {
        var zipCode = this.request.getParameter('zipcode');
        var results = SchoolDistrictLookupModel.get(zipCode);//callGet(zipCode);
        this.sendContent(results);
     
    },

    put: function()
    {
        var results = SchoolDistrictLookupModel.update(this.data);//updateSchools(this.data);
        this.sendContent(results);
    },

    post: function post() {
      // not implemented
 
    },

    delete: function() {
      // not implemented
    }
  });
});
