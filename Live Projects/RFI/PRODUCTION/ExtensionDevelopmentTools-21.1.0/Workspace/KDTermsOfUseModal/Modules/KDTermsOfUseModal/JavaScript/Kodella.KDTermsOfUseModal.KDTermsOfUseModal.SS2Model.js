// Model.js
// -----------------------
// @module Case
define("Kodella.KDTermsOfUseModal.KDTermsOfUseModal.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDTermsOfUseModal/SuiteScript2/KDTermsOfUseModal.Service.ss"
            ),
            true
        )
});
});
