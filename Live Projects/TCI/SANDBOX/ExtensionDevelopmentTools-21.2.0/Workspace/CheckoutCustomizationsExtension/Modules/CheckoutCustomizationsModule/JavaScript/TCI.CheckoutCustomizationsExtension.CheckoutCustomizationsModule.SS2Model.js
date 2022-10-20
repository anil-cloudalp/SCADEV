// Model.js
// -----------------------
// @module Case
define("TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CheckoutCustomizationsModule/SuiteScript2/CheckoutCustomizationsModule.Service.ss"
            ),
            true
        )
});
});
