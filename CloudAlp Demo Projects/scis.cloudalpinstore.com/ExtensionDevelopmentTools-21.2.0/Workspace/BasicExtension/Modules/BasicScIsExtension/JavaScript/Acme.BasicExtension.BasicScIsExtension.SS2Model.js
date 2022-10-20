// Model.js
// -----------------------
// @module Case
define("Acme.BasicExtension.BasicScIsExtension.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/BasicScIsExtension/SuiteScript2/BasicScIsExtension.Service.ss"
            ),
            true
        )
});
});
