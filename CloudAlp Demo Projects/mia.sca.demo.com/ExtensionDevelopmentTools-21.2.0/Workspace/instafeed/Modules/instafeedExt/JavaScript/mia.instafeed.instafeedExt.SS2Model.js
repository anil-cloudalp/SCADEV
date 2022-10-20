// Model.js
// -----------------------
// @module Case
define("mia.instafeed.instafeedExt.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/instafeedExt/SuiteScript2/instafeedExt.Service.ss"
            ),
            true
        )
});
});
