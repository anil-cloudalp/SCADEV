define("CloudAlp.ShoppingCustomization.ShoppingCustomization.ServiceController", ["ServiceController"], function (
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "CloudAlp.ShoppingCustomization.ShoppingCustomization.ServiceController",

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
      var returnresp = {};
      try {
        var body = '<p><span style="font-size:13px ;font-weight:bold">First Name</span> : ' + this.data.firstname + '</p>'
          + '<p><span style="font-size:13px ;font-weight:bold">Last Name</span> : ' + this.data.lastname + '</p>'
          + '<p><span style="font-size:13px ;font-weight:bold">Company</span> : ' + this.data.company + '</p>'
          + '<p><span style="font-size:13px ;font-weight:bold">Email address</span> : ' + this.data.email + '</p>'
          + '<p><span style="font-size:13px ;font-weight:bold">Phone</span> : ' + this.data.phone + '</p>'
          + '<p><span style="font-size:13px ;font-weight:bold">Comments</span> : ' + this.data.comments + '</p>';
        // nlapiSendEmail(author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo);
        nlapiSendEmail(this.data.author, this.data.recipient, this.data.subject, body, null, null, null, null);
        returnresp.status = true;
      } catch (error) {
        returnresp.status = error;
      }
      return returnresp;
    },

    put: function put() {
      // not implemented
    },

    delete: function () {
      // not implemented
    }
  });
});
