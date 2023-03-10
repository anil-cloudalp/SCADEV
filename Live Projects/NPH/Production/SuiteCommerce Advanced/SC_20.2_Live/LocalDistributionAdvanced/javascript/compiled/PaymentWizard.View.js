/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("PaymentWizard.View", ["require", "exports", "Utils", "payment_wizard_layout.tpl", "Wizard.View", "Wizard.StepNavigation.View", "Backbone", "Utils"], function (require, exports, Utils, payment_wizard_layout_tpl, WizardView, WizardStepNavigationView, Backbone) {
    "use strict";
    // @class PaymentWizard.View @extend Wizard.View
    var PaymentWizardView = WizardView.extend({
        // @property {Function} template
        template: payment_wizard_layout_tpl,
        // @property {String} bodyClass
        bodyClass: 'force-hide-side-nav',
        attributes: {
            id: 'payment-wizard',
            'data-root-component-id': 'Wizard.View'
        },
        // @method initialize
        initialize: function () {
            this.wizard = this.constructor.wizard;
            WizardView.prototype.initialize.apply(this, arguments);
            this.title = Utils.translate('Make a Payment');
        },
        beforeShowContent: function beforeShowContent() {
            return this.wizard.runStep();
        },
        getPageDescription: function () {
            return 'payment - ' + (Backbone.history.fragment || '').split('?')[0];
        },
        childViews: {
            'Wizard.StepNavigation': function () {
                return new WizardStepNavigationView({ wizard: this.wizard });
            }
        }
    });
    return PaymentWizardView;
});

//# sourceMappingURL=PaymentWizard.View.js.map
