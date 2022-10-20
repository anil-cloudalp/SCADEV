/// <amd-module name="OrderHistoryExt"/>
define("OrderHistoryExt", ["require", "exports", "Utils", "DownItems.List.View", "MyAccountMenu", "OrderHistory.MusicianResource.List.View"], function (require, exports, Utils, DownItemsListView, MyAccountMenu_1, MusicainResourceView) {
    "use strict";
    var OrderHistoryExt = {
        mountToApp: function (application) {
            var pageType = application.getComponent('PageType');
            pageType.registerPageType({
                'name': 'downloadableItems',
                'routes': ['downloadable-items'],
                'view': DownItemsListView
            });
            pageType.registerPageType({
                'name': 'musicianresourceitems',
                'routes': ['musician-resource-products'],
                'view': MusicainResourceView
            });
            var myAccountMenu = MyAccountMenu_1.MyAccountMenu.getInstance();
            myAccountMenu.addSubEntry({
                entryId: 'orders',
                id: 'downloadableitems',
                name: Utils.translate('Downloadable Items'),
                url: 'downloadable-items',
                index: 6,
                permission: 'transactions.tranFind.1,transactions.tranSalesOrd.1'
            });
            myAccountMenu.addSubEntry({
                entryId: 'orders',
                id: 'musicianresourceitems',
                name: Utils.translate("Musician's Resource Products"),
                url: 'musician-resource-products',
                index: 7,
                permission: 'transactions.tranFind.1,transactions.tranSalesOrd.1'
            });
        }
    };
    return OrderHistoryExt;
});

//# sourceMappingURL=OrderHistoryExt.js.map
