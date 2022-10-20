// Model.js
// -----------------------
// @module Case
define("TCI.ManageOrdersExt.RequestAnInvoice.Model", ["Backbone", "Utils", "underscore"], function(
    Backbone,
    Utils,
    _
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        validation: {
            order: { required: true, msg: _('Order Number is required').translate() },
            zip: { required: true, msg: _('Billing Zip Code is required').translate() }
        },
        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RequestAnInvoice.Service.ss"
            )
        )
        
});
});
