define("Kodella.KDDownloadPrice.KDDownloadPrice", [
  "Kodella.KDDownloadPrice.KDDownloadPrice.View",
  "Kodella.KDDownloadPrice.KDDownloadPrice2.View",
  'Profile.Model',
  'MyAccountMenu'
], function (KDDownloadPriceView, KDDownloadPrice2View, ProfileModel,MyAccountMenu ) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var layout = container.getComponent("Layout");
     
      layout.on("afterShowContent",function(){
       
      })    
    
      var ProfileModelInstanced = ProfileModel.getInstance();
      var array = ProfileModelInstanced.attributes.customfields;
      var pdfType = _.findWhere(array, { name: "custentity_rfi_line_of_bus" })
      pdfType = pdfType.value
      var myAccountMenu = container.getComponent("MyAccountMenu");
      var pageType = container.getComponent("PageType");
      if (pdfType == 2 || pdfType == 1) {
        var testGroup = {
          id: "manage-users",
          name: "Price list Download ",
          index: 99,
        };
        myAccountMenu.addGroup(testGroup);
      }


      if (pdfType == 2) {
        var groupEntry = {
          id: "manage-users-list",
          groupid: "manage-users",
          index: 2,
          url: "price-list",
          name: "Download Solar Price List",
        };
        myAccountMenu.addGroupEntry(groupEntry);
      }
      if (pdfType == 1) {
        var groupEntry2 = {
          id: "manage-users-list2",
          groupid: "manage-users",
          index: 3,
          url: "price-list-2",
          name: "Download Communications Products Price List",
        };
        myAccountMenu.addGroupEntry(groupEntry2);
      }




      pageType.registerPageType({
        name: "DownloadPrice2",
        routes: ["price-list-2", "price-list-2"],
        view: KDDownloadPrice2View,
        defaultTemplate: {
          name: "kodella_kddownloadprice_kddownloadprice2.tpl",
          displayName: "Download price list 2",
        },
      });
      pageType.registerPageType({
        name: "DownloadPrice",
        routes: ["price-list", "price-list"],
        view: KDDownloadPriceView,
        defaultTemplate: {
          name: "kodella_kddownloadprice_kddownloadprice.tpl",
          displayName: "Download price list",
        },
      });
      var mA = MyAccountMenu.MyAccountMenu.getInstance();
      mA.removeSubEntry('cases');
      // if(layout)
      // {
      // 	layout.addChildView('Header.Logo', function() {
      // 		return new KDDownloadPriceView({ container: container });
      // 	});
      // }
    },
  };
});
