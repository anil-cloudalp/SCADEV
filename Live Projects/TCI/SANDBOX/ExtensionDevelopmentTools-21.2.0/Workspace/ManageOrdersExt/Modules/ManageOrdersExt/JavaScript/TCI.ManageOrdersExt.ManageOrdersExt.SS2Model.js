// Model.js
// -----------------------
// @module Case
define("TCI.ManageOrdersExt.ManageOrdersExt.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ManageOrdersExt/SuiteScript2/ManageOrdersExt.Service.ss"
            ),
            true
        )
});
});
