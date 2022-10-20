/// <amd-module name="Customer.Notes"/>
define("Customer.Notes", ["require", "exports", "customer_notes.tpl", "jQuery", "Wizard.StepModule"], function (require, exports, customer_notes_tpl, jQuery, Wizard_StepModule_1) {
    "use strict";
    var CustomerNotes = Wizard_StepModule_1.WizardStepModule.extend({
        // @property {Function} template
        template: customer_notes_tpl,
        customerNotes: 'custbody_appf_b2b_memo',
        // @property {String} className
        className: 'Customer.Notes',
        isActive: function () {
            return true;
        },
        submit: function () {
            var customer_notes_input = this.$('[name=customer_notes_input]').val() || '';
            this.wizard.model.get('options')[this.customerNotes] = customer_notes_input;
            return jQuery.Deferred().resolve();
        },
        getContext: function () {
            return {
                customerNotes: this.wizard.model.get('options')[this.customerNotes] || '',
                isOpcPage: (this.step && (this.step.step_url == "opc"))
            };
        }
    });
    return CustomerNotes;
});

//# sourceMappingURL=Customer.Notes.js.map
