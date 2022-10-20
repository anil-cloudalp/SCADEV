// Model.js
// -----------------------
// @module Case
define("Car.CustomAccountRegister.CustomAccountRegisterModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CustomAccountRegisterModule/SuiteScript2/CustomAccountRegisterModule.Service.ss"
            ),
            true
        )
});
});
