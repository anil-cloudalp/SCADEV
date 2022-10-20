// Model.js
// -----------------------
// @module Case
define("CloudAlp.ShoppingCustomization.ShoppingCustomization.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ShoppingCustomization/SuiteScript2/ShoppingCustomization.Service.ss"
            ),
            true
        )
});
});
