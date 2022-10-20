// Model.js
// -----------------------
// @module Case
define("Car.CustomAccountRegister.CustomAccountRegisterModule.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/CustomAccountRegisterModule.Service.ss"
            )
        ),
        validation: {
            email: {
                required: true,
                pattern: 'email',
                msg: Utils.translate('Valid Email is required')
            },
        }
        
});
});
