/// <amd-module name="ShopGifts.View"/>
define("ShopGifts.View", ["require", "exports", "shop_gifts.tpl", "Backbone.View"], function (require, exports, shop_gifts_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: shop_gifts_tpl,
        title: 'Shop Confirmation Gifts',
        getContext: function () {
            return {
                isNotCmsEdit: (window.parent.location.href.indexOf("cms") == -1) ? true : false
            };
        }
    });
    return CustomView;
});

//# sourceMappingURL=ShopGifts.View.js.map
