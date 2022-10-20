// Model.js
// -----------------------
// @module Case
define("CA.PdpPdf.PDPCustompdf.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PDPCustompdf/SuiteScript2/PDPCustompdf.Service.ss"
            ),
            true
        )
});
});
