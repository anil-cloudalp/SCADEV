// Model.js
// -----------------------
// @module Case
define("RudraCustomization.homePageLeadRecord.homePageLeadRecord.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/homePageLeadRecord.Service.ss"
            )
        ),
        validation: {
            firstname: {
                required: true,
                msg: Utils.translate('First Name is required')
            },
            lastname: {
               
                required:true,
                
                msg: Utils.translate('Last Name is required')
                
            },
            email: {
                required: true,
                pattern: 'email',
                msg: Utils.translate('Valid Email is required')
            },
            phone: {
                required:true,
                fn: Utils.validatePhone,
            }
           
        }
        
});
});
