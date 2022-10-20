
/// <amd-module name="RequestOpportunityWizard.View"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as requestquote_wizard_layout_tpl from 'requestquote_wizard_layout.tpl';

import WizardView = require('../../../Advanced/Wizard/JavaScript/Wizard.View');
import WizardStepNavigationView = require('../../../Advanced/Wizard/JavaScript/Wizard.StepNavigation.View');

// @class RequestOpportunityWizard.View @extends Wizard.View
export = WizardView.extend({
    // @property {Function} template
    template: requestquote_wizard_layout_tpl,

    attributes: {
        id: 'request-opportunity-wizard',
        'data-root-component-id': 'Wizard.View'
    },

    // @property {String} page_header
    page_header: Utils.translate('Request an Opportunity'),

    // @property {String} bodyClass This property indicate the class used on the body to remove the My Account side menu
    bodyClass: 'force-hide-side-nav',

    initialize: function initialize() {
        this.wizard = this.constructor.wizard;

        WizardView.prototype.initialize.apply(this, arguments);
    },

    beforeShowContent: function beforeShowContent() {
        return this.wizard.runStep();
    },

    // @method getBreadcrumbPages
    // @return {BreadcrumbPage}
    getBreadcrumbPages: function() {
        return { href: '/request-an-opportunity', text: Utils.translate('Request an Opportunity') };
    },

    // @property {ChildViews} childViews
    childViews: {
        'Wizard.StepNavigation': function() {
            return new WizardStepNavigationView({ wizard: this.wizard });
        }
    },

    // @method getContext
    // @return {RequestOpportunityWizard.View.Context}
    getContext: function() {
        // @class RequestOpportunityWizard.View.Context
        return {
            // @property {String} pageHeader
            pageHeader: this.page_header
        };
        // @class RequestOpportunityWizard.View
    }
});
