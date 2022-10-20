// Model.js
// -----------------------
// @module Case
define("CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ShippingAndBillingAddress/SuiteScript2/ShippingAndBillingAddress.Service.ss"
            ),
            true
        )
});
});
