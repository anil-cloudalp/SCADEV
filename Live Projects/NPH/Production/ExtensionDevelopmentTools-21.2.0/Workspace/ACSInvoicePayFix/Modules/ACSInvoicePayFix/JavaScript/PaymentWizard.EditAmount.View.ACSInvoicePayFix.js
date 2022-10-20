define('PaymentWizard.EditAmount.View.ACSInvoicePayFix', [
    'PaymentWizard.EditAmount.View',
    'underscore'
], function PaymentWizardEditAmountViewACSInvoicePayFix(
    PaymentWizardEditAmountView,
    _
) {
    'use strict';

    _.extend(PaymentWizardEditAmountView.prototype, {
        initialize: _.wrap(PaymentWizardEditAmountView.prototype.initialize, function initialize(fn) {
            fn.apply(this, _.toArray(arguments).slice(1));

            // This is likely another product issue. GlobalViews.Modal.View expects attribute object in child view instance
            this.attributes = this.attributes || {};
        })
    });
});
