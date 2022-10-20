/// <amd-module name="Register.Model"/>
define("Register.Model", ["require", "exports", "Utils", "Backbone"], function (require, exports, Utils, Backbone) {
    "use strict";
    // @class Register.Model @extend Backbone.Model
    var RegisterModel = Backbone.Model.extend({
        // @property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl('services/Register.Service.ss'),
        // @property validation
        // Backbone.Validation attribute used for validating the form before submit.
        validation: {
            firstname: { required: true, msg: Utils.translate('First Name is required') },
            lastname: { required: true, msg: Utils.translate('Last Name is required') },
            entityid: { required: true, msg: Utils.translate('Account Number is required') },
            company: { required: true, msg: Utils.translate('Company is required') },
            country: { required: true, msg: Utils.translate('Country is required') },
            state: { fn: Utils.validateState },
            city: { required: true, msg: Utils.translate('City is required') },
            title: { required: true, msg: Utils.translate('Title is required') },
            phone: { fn: Utils.validatePhone, required: true },
            email: { required: true, pattern: 'email', msg: Utils.translate('Vaild email is required') },
            zip: { required: true, msg: Utils.translate('Zip code is required') }
        }
    });
    return RegisterModel;
});

//# sourceMappingURL=Register.Model.js.map
