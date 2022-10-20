// Model.js
// -----------------------
// @module Case
define("Kodella.KDDownloadPrice.KDDownloadPrice.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDDownloadPrice/SuiteScript2/KDDownloadPrice.Service.ss"
            ),
            true
        )
});
});
