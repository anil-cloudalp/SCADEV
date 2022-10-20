// Model.js
// -----------------------
// @module Case
define("CA.checkoutCustomization.RoleBasedCheckout.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RoleBasedCheckout/SuiteScript2/RoleBasedCheckout.Service.ss"
            ),
            true
        )
});
});
