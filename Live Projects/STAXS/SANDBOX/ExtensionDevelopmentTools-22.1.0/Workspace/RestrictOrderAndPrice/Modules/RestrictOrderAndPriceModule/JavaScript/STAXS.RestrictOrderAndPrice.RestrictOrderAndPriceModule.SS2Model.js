// Model.js
// -----------------------
// @module Case
define("STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RestrictOrderAndPriceModule/SuiteScript2/RestrictOrderAndPriceModule.Service.ss"
            ),
            true
        )
});
});
