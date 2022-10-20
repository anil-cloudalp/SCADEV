// Model.js
// -----------------------
// @module Case
define("Acme.SearchForAddressInCheckout.SearchForAddressInCheckout.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/SearchForAddressInCheckout/SuiteScript2/SearchForAddressInCheckout.Service.ss"
            ),
            true
        )
});
});
