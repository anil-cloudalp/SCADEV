// Model.js
// -----------------------
// @module Case
define("Acme.ScisCartCustomizations.ScisCartCustomizations.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ScisCartCustomizations/SuiteScript2/ScisCartCustomizations.Service.ss"
            ),
            true
        )
});
});
