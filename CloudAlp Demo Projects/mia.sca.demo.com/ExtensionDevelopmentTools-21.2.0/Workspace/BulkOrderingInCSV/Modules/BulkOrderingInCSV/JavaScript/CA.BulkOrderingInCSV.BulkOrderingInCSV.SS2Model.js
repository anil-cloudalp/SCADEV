// Model.js
// -----------------------
// @module Case
define("CA.BulkOrderingInCSV.BulkOrderingInCSV.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/BulkOrderingInCSV/SuiteScript2/BulkOrderingInCSV.Service.ss"
            ),
            true
        )
});
});
