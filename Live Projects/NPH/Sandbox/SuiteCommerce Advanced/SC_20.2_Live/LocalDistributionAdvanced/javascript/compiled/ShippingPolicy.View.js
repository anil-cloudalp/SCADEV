/// <amd-module name="ShippingPolicy.View"/>
define("ShippingPolicy.View", ["require", "exports", "shipping_policy.tpl", "Backbone.View"], function (require, exports, shipping_policy_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: shipping_policy_tpl,
        title: 'Shipping Policy'
    });
    return CustomView;
});

//# sourceMappingURL=ShippingPolicy.View.js.map
