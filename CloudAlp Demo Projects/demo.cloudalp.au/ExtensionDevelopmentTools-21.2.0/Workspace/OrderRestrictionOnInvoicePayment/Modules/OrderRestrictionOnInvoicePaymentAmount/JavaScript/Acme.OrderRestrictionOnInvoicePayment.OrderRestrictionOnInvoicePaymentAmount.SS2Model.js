// Model.js
// -----------------------
// @module Case
define("Acme.OrderRestrictionOnInvoicePayment.OrderRestrictionOnInvoicePaymentAmount.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/OrderRestrictionOnInvoicePaymentAmount/SuiteScript2/OrderRestrictionOnInvoicePaymentAmount.Service.ss"
            ),
            true
        )
});
});
