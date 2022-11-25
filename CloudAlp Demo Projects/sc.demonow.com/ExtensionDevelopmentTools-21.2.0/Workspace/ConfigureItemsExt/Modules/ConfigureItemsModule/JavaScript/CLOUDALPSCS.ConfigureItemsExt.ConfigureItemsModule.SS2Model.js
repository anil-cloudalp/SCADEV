// Model.js
// -----------------------
// @module Case
define("CLOUDALPSCS.ConfigureItemsExt.ConfigureItemsModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ConfigureItemsModule/SuiteScript2/ConfigureItemsModule.Service.ss"
            ),
            true
        )
});
});
