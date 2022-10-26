// Model.js
// -----------------------
// @module Case
define("Acme.SuiteScriptExt.SuiteScriptExt.Model", ["Backbone", "Utils",], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

    validation: {
        title: {
            required: true,
            msg: Utils.translate('Subject is required')
        },

        message: {
        //    fn: this.validateMessage
        },

        reply: {
          //  fn: this.validateReply
        },

        email: {
            required: () => {
                return !!form.include_email;
            },
            pattern: 'email',
            msg: Utils.translate('Please provide a valid email')
        }
        },
        

    getValidationRules(){
        return {
            title: [val => ValidationUtils.required(val, Utils.translate('Subject is required'))],
            message: [val => this.validateMessage(val, 'message')],
            reply: [val => this.validateReply(val, 'reply')],
            email: [
                val => ValidationUtils.email(val, Utils.translate('Please provide a valid email'))
            ]
        };
    }
        ,
 
        validateReply() {
            if (!this.get('isNewCase') && !value && !this.isClosing) {
                    return Utils.translate('$(0) is required', name);
            }
            return '';
        },
 
    validateMessage() {
        if (this.get('isNewCase')) {
            if (!value) {
                return Utils.translate('$(0) is required', name);
            }
            return CaseModel.validateLength(value, name);
        }
        return '';
    },
    
    validateLength() {
        const max_length = 4000;
        if (value && value.length > max_length) {
            return Utils.translate('$(0) must be at most $(1) characters', name, max_length);
        }
        return '';
    },
    
    urlRoot: Utils.getAbsoluteUrl(
        getExtensionAssetsPath(
            "services/SuiteScriptExt.Service.ss"
        )
    )
});
});