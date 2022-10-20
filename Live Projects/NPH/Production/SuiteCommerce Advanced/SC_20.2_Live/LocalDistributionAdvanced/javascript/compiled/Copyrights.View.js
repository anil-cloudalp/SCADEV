/// <amd-module name="Copyrights.View"/>
define("Copyrights.View", ["require", "exports", "copyrights.tpl", "Backbone.View"], function (require, exports, copyrights_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: copyrights_tpl,
        title: 'Copyrights & Permissions'
    });
    return CustomView;
});

//# sourceMappingURL=Copyrights.View.js.map
