/// <amd-module name="ContactUs.Model"/>
define("ContactUs.Model", ["require", "exports", "Utils", "Backbone"], function (require, exports, Utils, Backbone) {
    "use strict";
    // @class ContactUs.Model @extend Backbone.Model
    var ContactUsModel = Backbone.Model.extend({
        // @property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl('services/LandingPages.Service.ss'),
        // @property validation
        // Backbone.Validation attribute used for validating the form before submit.
        validation: {
            firstname: { required: true, msg: Utils.translate('First Name is required') },
            lastname: { required: true, msg: Utils.translate('Last Name is required') },
            addr1: { required: true, msg: Utils.translate('Address is required') },
            company: { required: true, msg: Utils.translate('Company is required') },
            country: { required: true, msg: Utils.translate('Country is required') },
            state: { fn: Utils.validateState },
            city: { required: true, msg: Utils.translate('City is required') },
            zip: { fn: Utils.validateZipCode },
            phone: { fn: Utils.validatePhone, required: true },
            email: { required: true, pattern: 'email', msg: Utils.translate('Vaild email is required') }
        }
    });
    return ContactUsModel;
});

//# sourceMappingURL=ContactUs.Model.js.map
