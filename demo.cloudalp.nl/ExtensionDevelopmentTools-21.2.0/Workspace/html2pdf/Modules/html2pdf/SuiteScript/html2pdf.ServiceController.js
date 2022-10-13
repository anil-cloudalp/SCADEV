define("Acme.html2pdf.html2pdf.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "Acme.html2pdf.html2pdf.ServiceController",

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

      var file = nlapiCreateFile("mypdf.pdf", "PDF", this.data.base64data);
      file.setFolder(2822);
      var id = nlapiSubmitFile(file);
      console.warn("id", id);
      return id;
    
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
