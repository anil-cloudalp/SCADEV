// Model.js
// -----------------------
// @module Case
define(
'TCI.ManageOrdersExt.RequestAReturn.Model', 
[
    'Backbone', 
    'Utils', 
    'underscore'
], function(
    Backbone,
    Utils,
    _
) {
    'use strict';

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        validation: {
            order: { required: true, msg: _('Order Number is required').translate() },
            zip: { required: true, msg: _('Billing Zip Code is required').translate() },
            reason: { required: true, msg: _('Reason for Return is required').translate() },
            name: { required: true, msg: _('Name is required').translate() },
            email: {
              required: true
              ,    pattern: 'email'
              ,    msg: _('Please provide a valid email').translate()
            },
            phone: { required: true, fn: _.validatePhone }
        },
        
        // @property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RequestAReturn.Service.ss"
            )
        )
    });
});
