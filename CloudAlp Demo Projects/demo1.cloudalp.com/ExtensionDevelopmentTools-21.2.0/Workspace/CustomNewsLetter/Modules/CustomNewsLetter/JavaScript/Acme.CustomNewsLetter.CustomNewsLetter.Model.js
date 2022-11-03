// Model.js
// -----------------------
// @module Case
define("Acme.CustomNewsLetter.CustomNewsLetter.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/CustomNewsLetter.Service.ss"
            )
        )
,
        // @property {String} email The email of the subscriber
        email: '',

        // @property validation Backbone.Validation attribute used for validating the form before submit.
        validation: {
            email: [
                {
                    required: true,
                    msg: 'Enter an email address to subscribe'
                },
                {
                    pattern: 'email',
                    msg: 'Valid email address is required'
                }
            ]
        }  
});
});
