/// <amd-module name="ContactUs.View"/>
define("ContactUs.View", ["require", "exports", "contact_us.tpl", "Backbone.View"], function (require, exports, contact_us_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: contact_us_tpl,
        title: 'Contact Us'
    });
    return CustomView;
});

//# sourceMappingURL=ContactUs.View.js.map
