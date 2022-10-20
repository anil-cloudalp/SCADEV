/// <amd-module name="CheckoutCustomFields"/>

import * as checkout_custom_fields_tpl from 'checkout_custom_fields.tpl';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../AdVanced/SCA/JavaScript/Configuration';
import { WizardStepModule } from '../../../AdVanced/Wizard/JavaScript/Wizard.StepModule';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

const CheckoutCustomFields: any = WizardStepModule.extend({
		
		template: checkout_custom_fields_tpl
		
	,	className: 'CheckoutCustomFields'
	
	,	errors: [
			'ERR_ORDER_BY'
		]
		
	,	isActive: function ()
		{
			return true;
		}

	,	submit: function ()
		{
			var profile = ProfileModel.getInstance();
			
			var campaign_category = this.$('[name="campaign_category"]').val() || '';
			var ordered_by = this.$('[name="ordered_by"]').val() || '';
			var cust_comment = this.$('[name="cust_comment"]').val() || '';
			
		
			if((profile.get('isperson') === false) && !ordered_by){
				
				return jQuery.Deferred().reject({
					errorCode: 'ERR_ORDER_BY',
					errorMessage: 'Please Enter Ordered By Name'
				});
			}
			else{
				this.wizard.model.get('options')['custbody_appf_ordered_by'] = ordered_by;
			}
			this.wizard.model.get('options')['custbody_ns_customer_comments'] = cust_comment;
			this.wizard.model.get('options')['custbody_appf_campaign_category'] = campaign_category;

			return jQuery.Deferred().resolve();
		}
	,	getContext: function ()
		{	
			var profile = ProfileModel.getInstance();
			var options = this.wizard.model.get('options');
			return {
				isPerson: (profile && profile.get('isperson')),
				ordered_by: options['custbody_appf_ordered_by'] || '',
				cust_comment: options['custbody_ns_customer_comments'] || '',
				campaign_category: options['custbody_appf_campaign_category'] || '',
				campaign_category_options: this.wizard.application.campaign_category || []
			};
		}
});
export = CheckoutCustomFields;
