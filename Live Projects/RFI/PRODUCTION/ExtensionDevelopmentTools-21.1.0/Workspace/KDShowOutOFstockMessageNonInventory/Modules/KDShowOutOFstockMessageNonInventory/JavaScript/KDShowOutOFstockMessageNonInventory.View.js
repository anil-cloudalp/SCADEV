// @module Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory
define("Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View", [
  "kodella_kdshowoutofstockmessagenoninventory_kdshowoutofstockmessagenoninventory.tpl",

  "Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.SS2Model",

  "Backbone",
], function (
  kodella_kdshowoutofstockmessagenoninventory_kdshowoutofstockmessagenoninventory_tpl,

  KDShowOutOFstockMessageNonInventorySS2Model,

  Backbone
) {
  "use strict";

  // @class Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View @extends Backbone.View
  return Backbone.View.extend({
    template: kodella_kdshowoutofstockmessagenoninventory_kdshowoutofstockmessagenoninventory_tpl,

    initialize: function (options) {
      var pdp = options.container.getComponent("PDP");
      var self = this;
      try {
        if (pdp) {
          var iteminfo = pdp.getItemInfo();

          //obstain item info
          if (!iteminfo) return;
          if (
            iteminfo.hasOwnProperty("item") &&
            !iteminfo.item.custitem_ispurchasable &&
            iteminfo.item.outofstockmessage &&
			(iteminfo.item.custitem_ispurchasable !== undefined) &&  (iteminfo.item.custitem_ispurchasable !== null) // custitem_ispurchasable field is only applied to non-inventory items
          ) {
            //obtain the out of stock message and check if the item is available online, send the data to the template
            self.oufofstockmessage = iteminfo.item.outofstockmessage;
            self.ispurchasable = !iteminfo.item.custitem_ispurchasable; //tiene que ser false para que se muestre el mensaje
          }
        }
      } catch (error) {
        console.log(error);
        self.ispurchasable = false;
      }

      /*  Uncomment to test backend communication with an example service
                  (you'll need to deploy and activate the extension first)
              */
      // this.model = new KDShowOutOFstockMessageNonInventoryModel();
      // var self = this;
      // this.model.fetch().done(function(result) {
      // 	self.message = result.message;
      // 	self.render();
      // });
    },

    events: {},

    bindings: {},

    childViews: {},

    //@method getContext @return Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View.Context
    getContext: function getContext() {
      //@class Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View.Context
      //this.message = this.message || "Hello World!!";
      return {
        oufofstockmessage: this.oufofstockmessage,
        ispurchasable: this.ispurchasable,
      };
    },
  });
});
