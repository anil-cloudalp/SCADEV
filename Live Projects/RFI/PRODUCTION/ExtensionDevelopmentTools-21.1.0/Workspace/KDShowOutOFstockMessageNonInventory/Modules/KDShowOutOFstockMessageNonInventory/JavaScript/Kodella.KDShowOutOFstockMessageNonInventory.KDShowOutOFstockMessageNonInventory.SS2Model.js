// Model.js
// -----------------------
// @module Case
define("Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDShowOutOFstockMessageNonInventory/SuiteScript2/KDShowOutOFstockMessageNonInventory.Service.ss"
            ),
            true
        )
});
});
