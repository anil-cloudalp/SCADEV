define("Acme.ScisCartCustomizations.ScisCartCustomizations.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "Acme.ScisCartCustomizations.ScisCartCustomizations.ServiceController",

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
