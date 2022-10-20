

/// <amd-module name="RequestOpportunityWizard.Configuration"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import OrderWizardModuleCartItems = require('../../../Advanced/OrderWizard.Module.CartItems/JavaScript/OrderWizard.Module.CartItems');
import RequestQuoteWizardModuleHeader = require('../../../Advanced/RequestQuoteWizard/JavaScript/RequestQuoteWizard.Module.Header');
import RequestQuoteWizardModuleQuickAdd = require('../../../Advanced/RequestQuoteWizard/JavaScript/RequestQuoteWizard.Module.QuickAdd');
import RequestOpportunityWizardModuleFields = require('./RequestOpportunityWizard.Module.Fields');
import RequestQuoteWizardModuleItems = require('../../../Advanced/RequestQuoteWizard/JavaScript/RequestQuoteWizard.Module.Items');
import RequestQuoteWizardModuleConfirmation = require('../../../Advanced/RequestQuoteWizard/JavaScript/RequestQuoteWizard.Module.Confirmation');
import OrderWizardModuleTitle = require('../../../Advanced/OrderWizard.Module.Title/JavaScript/OrderWizard.Module.Title');

// @class RequestOpportunityWizard.Configuration Defines the configuration for the Request Opportunity Wizard module
export = {
    steps: [
        {
            name: '',
            steps: [
                {
                    url: 'request-an-opportunity',
                    name: Utils.translate('Request an Opportunity'),
                    hideBackButton: true,
                    hideContinueButton: false,
                    bottomMessage: '',
                    continueButtonLabel: Utils.translate('Submit Opportunity Request'),
                    modules: [
                        RequestQuoteWizardModuleHeader,
						RequestOpportunityWizardModuleFields,
						[
                            OrderWizardModuleTitle,
                            {
                                title: Utils.translate('Add Items')
                            }
                        ],
                        RequestQuoteWizardModuleQuickAdd,
                        RequestQuoteWizardModuleItems
                    ],
                    save: function() {
                        (<any>_.first(this.moduleInstances)).trigger(
                            'change_label_continue',
                            Utils.translate('Processing...')
                        );

                        const self = this;
                        const submit_opreation = this.wizard.model.submit();

                        submit_opreation.always(function() {
                            (<any>_.first(self.moduleInstances)).trigger(
                                'change_label_continue',
                                Utils.translate('Submit Opportunity Request')
                            );
                        });

                        return submit_opreation;
                    }
                },
                {
                    url: 'request-an-opportunity-confirmation',
                    name: Utils.translate('Request an Opportunity'),
                    hideBackButton: true,
                    hideContinueButton: true,
                    confirmationMessage: Utils.translate(
                        'A sales representative will contact you in <strong>XX business days</strong>.'
                    ),
                    modules: [
                        RequestQuoteWizardModuleConfirmation
                    ]
                }
            ]
        }
    ]
};
