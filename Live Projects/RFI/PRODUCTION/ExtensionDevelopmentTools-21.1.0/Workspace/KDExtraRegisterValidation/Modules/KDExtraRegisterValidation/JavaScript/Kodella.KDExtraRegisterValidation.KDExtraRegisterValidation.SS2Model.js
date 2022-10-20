// Model.js
// -----------------------
// @module Case
define("Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDExtraRegisterValidation/SuiteScript2/KDExtraRegisterValidation.Service.ss"
            ),
            true
        )
});
});
