/// <amd-module name="PromoteNph.View"/>
define("PromoteNph.View", ["require", "exports", "promote_nph.tpl", "Backbone.View"], function (require, exports, promote_nph_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: promote_nph_tpl,
        title: 'Promote NPH'
    });
    return CustomView;
});

//# sourceMappingURL=PromoteNph.View.js.map
