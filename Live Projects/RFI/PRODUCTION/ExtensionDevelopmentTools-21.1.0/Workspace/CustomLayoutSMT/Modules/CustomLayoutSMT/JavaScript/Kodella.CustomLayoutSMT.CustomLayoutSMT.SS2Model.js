// Model.js
// -----------------------
// @module Case
define("Kodella.CustomLayoutSMT.CustomLayoutSMT.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CustomLayoutSMT/SuiteScript2/CustomLayoutSMT.Service.ss"
            ),
            true
        )
});
});
