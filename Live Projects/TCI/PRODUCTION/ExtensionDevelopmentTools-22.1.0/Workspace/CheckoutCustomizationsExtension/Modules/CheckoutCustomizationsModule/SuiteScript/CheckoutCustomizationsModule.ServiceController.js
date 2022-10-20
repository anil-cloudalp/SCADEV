define("TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return JSON.stringify({
        message: "Hello World I'm an Extension using a Service!"
      });
    },

    post: function post() {
              try
                {
                    var updateFields =
                    [
                        'companyname',
                        'isperson'
                    ];
                    var updateValues =
                    [
                         this.data.companyname,
                         'F'
                    ];

                    nlapiSubmitField('customer', this.data.userid, updateFields, updateValues);

                    return {success: true}
                }
                catch (e)
                {
                    return {success: false, message: e.message}
                }
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
