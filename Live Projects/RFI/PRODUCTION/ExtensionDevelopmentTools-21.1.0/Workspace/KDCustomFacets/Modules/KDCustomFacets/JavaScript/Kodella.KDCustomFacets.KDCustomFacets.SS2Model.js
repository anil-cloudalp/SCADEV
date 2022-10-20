// Model.js
// -----------------------
// @module Case
define("Kodella.KDCustomFacets.KDCustomFacets.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDCustomFacets/SuiteScript2/KDCustomFacets.Service.ss"
            ),
            true
        )
});
});
