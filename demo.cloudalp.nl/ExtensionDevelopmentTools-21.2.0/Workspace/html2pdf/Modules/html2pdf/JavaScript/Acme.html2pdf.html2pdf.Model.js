// Model.js
// -----------------------
// @module Case
define("Acme.html2pdf.html2pdf.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";
    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/html2pdf.Service.ss"
            )
        )   
});
});
