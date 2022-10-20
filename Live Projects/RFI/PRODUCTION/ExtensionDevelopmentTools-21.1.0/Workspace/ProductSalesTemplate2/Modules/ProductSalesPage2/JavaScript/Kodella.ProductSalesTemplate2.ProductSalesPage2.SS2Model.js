// Model.js
// -----------------------
// @module Case
define("Kodella.ProductSalesTemplate2.ProductSalesPage2.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ProductSalesPage2/SuiteScript2/ProductSalesPage2.Service.ss"
            ),
            true
        )
});
});
