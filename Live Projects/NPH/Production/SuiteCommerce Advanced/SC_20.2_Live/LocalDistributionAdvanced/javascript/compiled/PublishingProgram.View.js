/// <amd-module name="PublishingProgram.View"/>
define("PublishingProgram.View", ["require", "exports", "publishing_program.tpl", "Backbone.View"], function (require, exports, publishing_program_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: publishing_program_tpl,
        title: 'Our Publishing Program'
    });
    return CustomView;
});

//# sourceMappingURL=PublishingProgram.View.js.map
