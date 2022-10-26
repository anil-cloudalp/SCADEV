// Model.js
// -----------------------
// @module Case
define("Acme.SuiteScriptExt.SuiteScriptExt.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/SuiteScriptExt/SuiteScript2/SuiteScriptExt.Service.ss"
            ),
            true
        )
});
});
