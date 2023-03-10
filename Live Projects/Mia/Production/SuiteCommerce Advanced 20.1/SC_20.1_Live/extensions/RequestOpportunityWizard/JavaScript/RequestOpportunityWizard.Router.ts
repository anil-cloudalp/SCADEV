

/// <amd-module name="RequestOpportunityWizard.Router"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import WizardRouter = require('../../../Advanced/Wizard/JavaScript/Wizard.Router');
import RequestOpportunityWizardView = require('./RequestOpportunityWizard.View');
import RequestQuoteWizardStep = require('../../../Advanced/RequestQuoteWizard/JavaScript/RequestQuoteWizard.Step');
import RequestQuoteWizardPermissionErrorView = require('../../../Advanced/RequestQuoteWizard/JavaScript/RequestQuoteWizard.Permission.Error.View');
import AjaxRequestsKiller = require('../../../Commons/AjaxRequestsKiller/JavaScript/AjaxRequestsKiller');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

// @class RequestOpportunityWizard.Router @extends Wizard.Router
export = WizardRouter.extend({
    // @property {RequestOpportunityWizardStep.Step} step
    step: RequestQuoteWizardStep,

    // @property {RequestQuoteWizardStep.View} view
    view: RequestOpportunityWizardView,

    initialize: function() {
        const init_promise = WizardRouter.prototype.initialize.apply(this, arguments);

        this.application.waitForPromise(init_promise);
    },

    _registerPageType: function _registerPageType(options) {
        const pageType = this.application.getComponent('PageType');
		
        pageType.registerPageType({
            name: 'request-opportunity-wizard',
            routes: options.routes,
            view: RequestOpportunityWizardView,
            defaultTemplate: {
                name: 'requestquote_wizard_layout.tpl',
                displayName: 'Request opportunity wizard default'
            }
        });
    },

    // @method runStep override default runstep method to validate that a Opportunity id has been specified in the URL and the corresponding Opportunity is already loaded
    // @return {Void}
    runStep: function() {
        // Computes the position of the user in the flow
        const fragments = Backbone.history.fragment.split('?');
        const url = fragments[0];
        const str_options = fragments.length ? fragments[1] : '';
        const position = this.getStepPosition(url); // this.getStepPosition(url)
        let content = '';
        let page_header = '';
        const layout = this.application.getLayout();
        const options = Utils.parseUrlOptions(str_options);
        const self = this;
        const opportunityid = str_options && ~str_options.indexOf('opportunityid=');
        const promise = jQuery.Deferred();

        if (SC.ENVIRONMENT.permissions.transactions.tranEstimate < 2) {
            const error_view = new RequestQuoteWizardPermissionErrorView({
                application: this.application
            });

            error_view.showContent();

            return promise.reject();
        }
        if (opportunityid) {
            // wizard just finished and user refreshed the page
            page_header = Utils.translate('Your Opportunity Request has been Placed');
            content +=
                Utils.translate(
                    'You can review your Opportunity request at <a href="/opportunities/$(0)">Your Account</a> ',
                    options.opportunityid
                ) +
                Utils.translate(
                    'or continue Shopping on our <a data-touchpoint="home" data-hashtag="#/" href="/">Home Page</a>.'
                );

            layout.internalError &&
                layout.internalError(content, page_header, Utils.translate('My Account'));

            return promise.reject();
        }
        if (position.fromBegining === 0) {
            self.model.clear();
            // this is done because many OrderWizard Modules dont check if the summary is set
            self.model.set('summary', {}, { silent: true });
            self.model.set('internalid', 'null');

            return self.model
                .fetch({
                    killerId: AjaxRequestsKiller.getKillerId()
                })
                .then(function() {
                    self.model.trigger('init');
                    return WizardRouter.prototype.runStep.apply(self);
                });
        }
        return WizardRouter.prototype.runStep.apply(self, arguments);
    }
});
