define("RestorationProgram.View", ["require", "exports", "restoration_program.tpl", "Backbone.View", "Utils"], function (require, exports, restoration_program_tpl, BackboneView, Utils) {
    "use strict";
    // @module ContactUs.View @extends Backbone.View
    var RestorationProgramView = BackboneView.extend({
        template: restoration_program_tpl,
        title: Utils.translate('Restoration Program'),
        page_header: Utils.translate('Restoration Program'),
        initialize: function () {
            this.application = this.options.application;
        },
        getContext: function () {
            return {};
        }
    });
    return RestorationProgramView;
});

//# sourceMappingURL=RestorationProgram.View.js.map
