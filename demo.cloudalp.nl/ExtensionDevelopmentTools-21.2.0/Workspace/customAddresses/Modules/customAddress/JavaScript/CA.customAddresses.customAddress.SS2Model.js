// Model.js
// -----------------------
// @module Case
define("CA.customAddresses.customAddress.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/customAddress/SuiteScript2/customAddress.Service.ss"
            ),
            true
        )
});
});
