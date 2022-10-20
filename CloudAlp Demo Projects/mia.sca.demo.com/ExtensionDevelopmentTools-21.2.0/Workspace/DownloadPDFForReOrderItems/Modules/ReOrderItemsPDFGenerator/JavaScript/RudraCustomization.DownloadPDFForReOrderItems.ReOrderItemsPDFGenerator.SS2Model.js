// Model.js
// -----------------------
// @module Case
define("RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ReOrderItemsPDFGenerator/SuiteScript2/ReOrderItemsPDFGenerator.Service.ss"
            ),
            true
        )
});
});
