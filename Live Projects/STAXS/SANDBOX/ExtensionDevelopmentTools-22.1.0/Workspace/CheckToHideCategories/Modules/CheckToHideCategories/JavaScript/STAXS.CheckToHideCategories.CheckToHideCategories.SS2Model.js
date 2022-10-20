// Model.js
// -----------------------
// @module Case
define("STAXS.CheckToHideCategories.CheckToHideCategories.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CheckToHideCategories/SuiteScript2/CheckToHideCategories.Service.ss"
            ),
            true
        )
});
});
