// Model.js
// -----------------------
// @module Case
define("STAXS.Certificates.certificates.SS2Model", ["Backbone", "Utils"], function (
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/certificates/SuiteScript2/certificates.Service.ss"
            ),
            true
        )
    });
});
