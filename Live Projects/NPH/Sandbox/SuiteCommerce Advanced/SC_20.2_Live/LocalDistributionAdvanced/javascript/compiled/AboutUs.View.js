/// <amd-module name="AboutUs.View"/>
define("AboutUs.View", ["require", "exports", "about_us.tpl", "Backbone.View"], function (require, exports, about_us_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: about_us_tpl,
        title: 'About Northwestern Publishing House'
    });
    return CustomView;
});

//# sourceMappingURL=AboutUs.View.js.map
