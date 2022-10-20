/// <amd-module name="OurHistory.View"/>
define("OurHistory.View", ["require", "exports", "our_history.tpl", "Backbone.View"], function (require, exports, our_history_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: our_history_tpl,
        title: 'Our History'
    });
    return CustomView;
});

//# sourceMappingURL=OurHistory.View.js.map
