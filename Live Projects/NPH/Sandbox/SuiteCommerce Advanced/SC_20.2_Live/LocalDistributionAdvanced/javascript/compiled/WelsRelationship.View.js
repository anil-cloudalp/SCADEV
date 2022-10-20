/// <amd-module name="WelsRelationship.View"/>
define("WelsRelationship.View", ["require", "exports", "wels_relationship.tpl", "Backbone.View"], function (require, exports, wels_relationship_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: wels_relationship_tpl,
        title: 'Our Relationship to WELS'
    });
    return CustomView;
});

//# sourceMappingURL=WelsRelationship.View.js.map
