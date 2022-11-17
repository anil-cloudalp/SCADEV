// Model.js
// -----------------------
// @module Case
define("Acme.QuantityAvailExt.QuantityExt.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/QuantityExt/SuiteScript2/QuantityExt.Service.ss"
            ),
            true
        )
});
});
