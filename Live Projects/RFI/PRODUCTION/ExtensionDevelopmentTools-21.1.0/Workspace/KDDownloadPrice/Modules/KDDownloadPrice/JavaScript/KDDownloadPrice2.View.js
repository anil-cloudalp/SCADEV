// @module Kodella.KDDownloadPrice.KDDownloadPrice
define("Kodella.KDDownloadPrice.KDDownloadPrice2.View", [
  "kodella_kddownloadprice_kddownloadprice2.tpl",

  "Backbone",
], function (
  kodella_kddownloadprice_kddownloadprice_tpl,

  Backbone
) {
  "use strict";

  // @class Kodella.KDDownloadPrice.KDDownloadPrice.View @extends Backbone.View
  return Backbone.View.extend({
    template: kodella_kddownloadprice_kddownloadprice_tpl,

    initialize: function (options) {
      /*  Uncomment to test backend communication with an example service
            (you'll need to deploy and activate the extension first)
          */

      // this.model = new KDDownloadPriceModel();
      // var self = this;
      // this.model.fetch().done(function(result) {
      // 	self.message = result.message;
      // 	self.render();
      // });
      window.open("/site/RFI RF Price List.pdf", "_blank");
    },

    events: {},

    bindings: {},

    childViews: {},

    //@method getContext @return Kodella.KDDownloadPrice.KDDownloadPrice.View.Context
    getContext: function getContext() {
      //@class Kodella.KDDownloadPrice.KDDownloadPrice.View.Context
      this.message = this.message || "Hello World!!";
      return {
        message: this.message,
      };
    },
  });
});
