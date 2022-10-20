// Model.js
// -----------------------
// @module Case
define("TCI.PCP_PLPCustomization.PCPPLPModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PCPPLPModule/SuiteScript2/PCPPLPModule.Service.ss"
            ),
            true
        )
});
});
