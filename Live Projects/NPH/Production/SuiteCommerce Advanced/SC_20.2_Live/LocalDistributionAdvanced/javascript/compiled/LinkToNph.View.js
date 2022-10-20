/// <amd-module name="LinkToNph.View"/>
define("LinkToNph.View", ["require", "exports", "link_to_nph.tpl", "Backbone.View"], function (require, exports, link_to_nph_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: link_to_nph_tpl,
        title: 'Link To NPH'
    });
    return CustomView;
});

//# sourceMappingURL=LinkToNph.View.js.map
