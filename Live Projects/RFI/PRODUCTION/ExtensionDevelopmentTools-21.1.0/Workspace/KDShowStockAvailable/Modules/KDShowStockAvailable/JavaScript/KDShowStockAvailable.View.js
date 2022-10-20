// @module Kodella.KDShowStockAvailable.KDShowStockAvailable
define("Kodella.KDShowStockAvailable.KDShowStockAvailable.View", [
  "kodella_kdshowstockavailable_kdshowstockavailable.tpl",

  "Kodella.KDShowStockAvailable.KDShowStockAvailable.SS2Model",

  "Backbone",
  "ProductLine.Stock.View",
], function (
  kodella_kdshowstockavailable_kdshowstockavailable_tpl,

  KDShowStockAvailableSS2Model,

  Backbone,
  ProductLineStockDescriptionView
) {
  "use strict";

  // @class Kodella.KDShowStockAvailable.KDShowStockAvailable.View @extends Backbone.View
  return Backbone.View.extend({
    template: kodella_kdshowstockavailable_kdshowstockavailable_tpl,

    initialize: function (options) {
      /*
      var container = options.container;
      var cart = container.getComponent("Cart");
      cart.getLines().then(function (lines) {
        lines.forEach(function (line) {
          debugger;
          ProductLineStockDescriptionView.prototype.getContext = _.wrap(
            ProductLineStockDescriptionView.prototype.getContext,
            function (fn) {
              var context = fn.apply(this, _.toArray(arguments).slice(1));

              //debugger;
              context.UserInfo = {
                inStockMessage: line.item.extras.isinstock,
              };

              return context;
            }
          );
        });
        debugger;
      });
*/
      /*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
      // this.model = new KDShowStockAvailableModel();
      // var self = this;
      // this.model.fetch().done(function(result) {
      // 	self.message = result.message;
      // 	self.render();
      // });
    },

    events: {},

    bindings: {},

    childViews: {},

    //@method getContext @return Kodella.KDShowStockAvailable.KDShowStockAvailable.View.Context
    getContext: function getContext() {
      //@class Kodella.KDShowStockAvailable.KDShowStockAvailable.View.Context
      this.message = this.message || "Hello World!!";
      return {
        message: this.message,
      };
    },
  });
});
