/// <amd-module name="Manuscript.View"/>
define("Manuscript.View", ["require", "exports", "manuscript.tpl", "Backbone.View"], function (require, exports, manuscript_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: manuscript_tpl,
        title: 'Manuscript Submissions'
    });
    return CustomView;
});

//# sourceMappingURL=Manuscript.View.js.map
