// Model.js
// -----------------------
// @module Case
define("Acme.ScisLayoutCustomizations.ScisLayoutCustomization.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ScisLayoutCustomization/SuiteScript2/ScisLayoutCustomization.Service.ss"
            ),
            true
        )
});
});
