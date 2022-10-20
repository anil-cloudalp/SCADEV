// Model.js
// -----------------------
// @module Case
define("STAXS.PDPCustomizations.PDPCustomizations.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PDPCustomizations/SuiteScript2/PDPCustomizations.Service.ss"
            ),
            true
        )
});
});
