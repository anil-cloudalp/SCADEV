// Model.js
// -----------------------
// @module Case
define("Kodella.KDFeeCreditCard.KDFeeCreditCard.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDFeeCreditCard/SuiteScript2/KDFeeCreditCard.Service.ss"
            ),
            true
        )
});
});
