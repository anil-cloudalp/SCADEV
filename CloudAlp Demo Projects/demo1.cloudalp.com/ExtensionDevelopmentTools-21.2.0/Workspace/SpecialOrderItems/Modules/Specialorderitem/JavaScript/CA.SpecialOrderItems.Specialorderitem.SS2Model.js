// Model.js
// -----------------------
// @module Case
define("CA.SpecialOrderItems.Specialorderitem.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/Specialorderitem/SuiteScript2/Specialorderitem.Service.ss"
            ),
            true
        )
});
});
