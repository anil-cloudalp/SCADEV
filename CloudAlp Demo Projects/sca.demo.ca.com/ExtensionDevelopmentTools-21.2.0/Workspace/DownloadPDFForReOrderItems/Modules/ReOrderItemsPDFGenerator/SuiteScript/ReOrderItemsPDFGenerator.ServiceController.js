define("RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.ServiceController", ["ServiceController",'Configuration'], function(
  ServiceController
  ,Configuration
) {
  "use strict";

  return ServiceController.extend({
    name: "RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var customData={};
      
      if(Configuration.get('ReOrderItems.fileId') !== ''){
        try {
          var FieldData = Configuration.get('ReOrderItems.fileId');
          var htmlFile= nlapiLoadFile(FieldData).getValue();
          customData.htmlTextFile= htmlFile;   
        } catch (error) {
          console.warn(JSON.stringify(error),"Error Data");
        }
      }else{
        customData.error = 'Please Add Internal Id in the configuration tab';

      }
     
      
      return customData;
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
