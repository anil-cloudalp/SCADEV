define("Kodella.KDShowStockAvailable.KDShowStockAvailable", [
  "Kodella.KDShowStockAvailable.KDShowStockAvailable.View",
  "Transaction.Line.Views.Cell.Navigable.View",
], function (KDShowStockAvailableView, ProductLineStockDescriptionView) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var layout = container.getComponent("Layout");
      var cart = container.getComponent("Cart");
      /*if(layout)
			{
				layout.addChildView('Header.Logo', function() { 
					return new KDShowStockAvailableView({ container: container });
				});
			}*/
      if (ProductLineStockDescriptionView) {
        //debugger;
        ProductLineStockDescriptionView.prototype.getContext = _.wrap(
          ProductLineStockDescriptionView.prototype.getContext,
          function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));

            //debugger;
            if (this.model.attributes.item.attributes.isinstock) {
              context.inStockMessage = "This item is IN STOCK";
            } else {
              context.inStockMessage = " This item is available to back order";
            }

            return context;
          }
        );
      }
    },
  };
});
