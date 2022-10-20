/// <amd-module name="Customer.Notes"/>

import * as customer_notes_tpl from 'customer_notes.tpl';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';
import { WizardStepModule } from '../../../Advanced/Wizard/JavaScript/Wizard.StepModule';

const CustomerNotes: any = WizardStepModule.extend({
    // @property {Function} template
    template: customer_notes_tpl,
	
	customerNotes: 'custbody_appf_b2b_memo',
	
    // @property {String} className
    className: 'Customer.Notes',

    isActive: function(): boolean {
        return true;
    },
    submit: function() {
        const customer_notes_input = this.$('[name=customer_notes_input]').val() || '';
        this.wizard.model.get('options')[this.customerNotes] = customer_notes_input;
        return jQuery.Deferred().resolve();  
    },
    getContext: function() {
        return {
            customerNotes: this.wizard.model.get('options')[this.customerNotes] || '',
			isOpcPage: (this.step && (this.step.step_url == "opc"))
        };
    }
});

export = CustomerNotes;
