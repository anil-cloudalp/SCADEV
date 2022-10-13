// Model.js
// -----------------------
// @module Case
define("Acme.html2pdf.html2pdf.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/html2pdf/SuiteScript2/html2pdf.Service.ss"
            ),
            true
        )
});
});
