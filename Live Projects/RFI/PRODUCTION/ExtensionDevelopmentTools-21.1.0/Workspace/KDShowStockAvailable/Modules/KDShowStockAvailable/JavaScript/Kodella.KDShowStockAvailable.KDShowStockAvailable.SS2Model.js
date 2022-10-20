// Model.js
// -----------------------
// @module Case
define("Kodella.KDShowStockAvailable.KDShowStockAvailable.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDShowStockAvailable/SuiteScript2/KDShowStockAvailable.Service.ss"
            ),
            true
        )
});
});
