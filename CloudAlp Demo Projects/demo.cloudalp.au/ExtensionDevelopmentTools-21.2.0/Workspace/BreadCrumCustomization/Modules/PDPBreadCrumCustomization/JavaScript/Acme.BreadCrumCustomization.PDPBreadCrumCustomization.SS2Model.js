// Model.js
// -----------------------
// @module Case
define("Acme.BreadCrumCustomization.PDPBreadCrumCustomization.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PDPBreadCrumCustomization/SuiteScript2/PDPBreadCrumCustomization.Service.ss"
            ),
            true
        )
});
});
