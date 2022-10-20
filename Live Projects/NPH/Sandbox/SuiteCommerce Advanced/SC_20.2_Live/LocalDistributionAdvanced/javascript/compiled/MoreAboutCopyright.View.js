/// <amd-module name="MoreAboutCopyright.View"/>
define("MoreAboutCopyright.View", ["require", "exports", "more_about_copyright.tpl", "Backbone.View"], function (require, exports, more_about_copyright_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: more_about_copyright_tpl,
        title: 'Learn About Copyright'
    });
    return CustomView;
});

//# sourceMappingURL=MoreAboutCopyright.View.js.map
