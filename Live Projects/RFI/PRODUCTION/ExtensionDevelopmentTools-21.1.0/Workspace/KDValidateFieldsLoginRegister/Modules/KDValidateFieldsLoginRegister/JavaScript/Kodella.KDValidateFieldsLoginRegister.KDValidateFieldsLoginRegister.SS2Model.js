// Model.js
// -----------------------
// @module Case
define("Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDValidateFieldsLoginRegister/SuiteScript2/KDValidateFieldsLoginRegister.Service.ss"
            ),
            true
        )
});
});
