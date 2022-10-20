/// <amd-module name="MultiplyingEfforts.View"/>
define("MultiplyingEfforts.View", ["require", "exports", "multiplying_efforts.tpl", "Backbone.View"], function (require, exports, multiplying_efforts_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: multiplying_efforts_tpl,
        title: 'Multiplying Your Efforts'
    });
    return CustomView;
});

//# sourceMappingURL=MultiplyingEfforts.View.js.map
