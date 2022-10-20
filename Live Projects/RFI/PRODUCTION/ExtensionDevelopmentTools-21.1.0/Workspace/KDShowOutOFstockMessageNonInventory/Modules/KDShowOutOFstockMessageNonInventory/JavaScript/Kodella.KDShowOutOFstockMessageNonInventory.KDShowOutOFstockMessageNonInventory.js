define("Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory", [
  "Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View",
], function (KDShowOutOFstockMessageNonInventoryView) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var layout = container.getComponent("Layout");
      var pdp = container.getComponent("PDP");

      if (layout && pdp) {
        layout.addChildView("Product.Stock.Info", function () {
          return new KDShowOutOFstockMessageNonInventoryView({
            container: container,
          });
        });
      }
    },
  };
});
