/// <amd-module name="ExtraWorks.View"/>
define("ExtraWorks.View", ["require", "exports", "extra_works.tpl", "Backbone.View"], function (require, exports, extra_works_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: extra_works_tpl,
        title: 'How Extra Rewards Work'
    });
    return CustomView;
});

//# sourceMappingURL=ExtraWorks.View.js.map
