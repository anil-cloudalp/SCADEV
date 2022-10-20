// Model.js
// -----------------------
// @module Case
define("CloudAlp.SCACASEFORM.SCACASEFORM.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/SCACASEFORM/SuiteScript2/SCACASEFORM.Service.ss"
            ),
            true
        )
});
});
