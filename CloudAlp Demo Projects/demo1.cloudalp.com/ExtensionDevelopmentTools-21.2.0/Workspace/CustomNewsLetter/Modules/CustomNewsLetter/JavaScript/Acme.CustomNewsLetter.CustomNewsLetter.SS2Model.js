// Model.js
// -----------------------
// @module Case
define("Acme.CustomNewsLetter.CustomNewsLetter.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CustomNewsLetter/SuiteScript2/CustomNewsLetter.Service.ss"
            ),
            true
        )
});
});
