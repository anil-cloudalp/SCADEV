

/// <amd-module name="RequestOpportunityWizard.Module.Fields"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as request_opportunity_wizard_module_fields_tpl from 'request_opportunity_wizard_module_fields.tpl';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import WizardModule = require('../../../Advanced/Wizard/JavaScript/Wizard.Module');

// @class RequestQuoteWizard.Module.Comments @extend Wizard.Module
export = WizardModule.extend({
    // @property {Function} template
    template: request_opportunity_wizard_module_fields_tpl,
    // @property {Object} events
	 errors: ['ERR_RQW_FIELDS'],
    events: {
        'keyup [data-action="validate-textarea-length"]': 'validateTextareaLength',
		'change [data-field="title"]': 'checkTitle'
    },
	checkTitle: function(e){
		var title = jQuery(e.currentTarget).val();
		var serviceUrl = Utils.getAbsoluteUrl('services/Opportunity.Service.ss?title=' + title);
		var self = this;
		if(title){
			jQuery.get(serviceUrl,function(res){
				
				if(res && _.has(res,'isTitleExist') && res.isTitleExist){
					self.isTitleExist = true;
					jQuery(e.currentTarget).next().html('This opportunity already exists, please contact us to progress this further');
				}
				else{
					self.isTitleExist = false;
					jQuery(e.currentTarget).next().html('');
				}
			});
		}
	},
    // @method getMaxLength Auxiliary method to return the max allowed character length
    // @return {Number}
    getMaxLength: function() {
        return _.isNumber(this.options.maxLength) ? this.options.maxLength : 999;
    },

    // @method validateTextareaLength Auxiliary function to control the max length on the text are on IE8
    // It doesnt return anything as it will set the new string when the value exceed the max allowed
    // @return {Void}
    validateTextareaLength: function() {
        const text = this.$('[data-action="validate-textarea-length"]').val();
        const limit = this.getMaxLength();

        if (text.length > limit) {
            this.$('[data-action="validate-textarea-length"]').val(text.substr(0, limit));
        }
    },

    // @method submit Set the memo of the current transaction
    // @returns {jQuery.Deferred}
    submit: function() {
		var $inputs = this.$('[data-field]');
		var fields = [];
		var hasError = false;
		$inputs.each(function(){
			
			var value:any = '';
			if(jQuery(this).is(':checkbox')){
				value = jQuery(this).prop('checked')? 'T': 'F';
			}
			else{
				value = jQuery(this).val();
			}
			var fieldId = jQuery(this).attr('data-field');
			
			if(value){
				fields.push({'id':fieldId,'value':value});
			}
			else{
				hasError = true;
			}	
		});
		
		if(this.isTitleExist)
			hasError = true;
		
		if(hasError){
			return jQuery.Deferred().reject({
				errorCode: 'ERR_RQW_FIELDS',
				errorMessage: Utils.translate('Please fill all the required fields')
			});
		}
		else{
			this.wizard.model.set('fields',fields);
		}
		
        this.wizard.model.set('memo', this.$('[data-type="memo-input"]').val());
        return jQuery.Deferred().resolve();
    },

    // @method getContext
    // @return {RequestOpportunityWizard.Module.Fields.Context}
    getContext: function() {
        // @class RequestOpportunityWizard.Module.Fields.Context
		
        return {
            // @property {Boolean} showTitle
            showTitle: !!(!this.options.hide_title && this.getTitle()),
            // @property {String} title
            title: this.getTitle(),
            // @property {String} memo
            memo: this.wizard.model.get('memo'),
            // @property {Boolean} isReadOnly
            isReadOnly: !!this.options.is_read_only,
            // @property {Boolean} hideContent
            hideContent: this.options.is_read_only && !this.wizard.model.get('memo'),
            // @property {Number} maxLength
            maxLength: this.getMaxLength(),
			listOptions:  this.wizard.model.get('listoptions')
        };
        // @class RequestOpportunityWizard.Module.Fields
    }
});
