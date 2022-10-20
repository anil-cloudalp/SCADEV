

/// <amd-module name="Opportunity.Details.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts" />

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as quote_details_tpl from 'quote_details.tpl';

import Configuration = require('../../../Commons/Utilities/JavaScript/SC.Configuration');
import TransactionLineViewsCellNavigableView = require('../../../Commons/Transaction.Line.Views/JavaScript/Transaction.Line.Views.Cell.Navigable.View');
import AddressDetailsView = require('../../../Commons/Address/JavaScript/Address.Details.View');
import OpportunityModel = require('./Opportunity.Model');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import AjaxRequestsKiller = require('../../../Commons/AjaxRequestsKiller/JavaScript/AjaxRequestsKiller');
import UrlHelper = require('../../../Commons/UrlHelper/JavaScript/UrlHelper');

import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
// @class Opportunity.Details.View @extends Backbone.View
export = BackboneView.extend({
    // @property {Function} template
    template: quote_details_tpl,

    // @property {String} title
    title: Utils.translate('Opportunity Details'),

    // @property {class: String} attributes
    attributes: {
        id: 'OpportunitiesDetail',
        class: 'OpportunityDetails'
    },
	events: {
        'click [name="transform_to_quote"]': 'transformToQuote'
    },
	transformToQuote: function(e){
		var opportunity_id = this.model.get('internalid');
		var $target = this.$(e.currentTarget);
		var serviceUrl = Utils.getAbsoluteUrl('services/Opportunity.Service.ss?opportunity_id=' + opportunity_id);
		
		$target.attr('disabled',true);
		
		jQuery.get(serviceUrl,function(res){
			
			if(res && _.has(res,'id')){
				$target.next().html('This opportunity record has successfully <a href="/quotes/'+ res.id +'">transformed to a new Quote</a>');
				$target.remove();
			}
			else{
				$target.attr('disabled',false);
			}
		});
	},
    // @method initialize
    // @param {application: ApplicationSkeleton} options
    // @return {Void}
    initialize: function(options): void {
        this.application = options.application;
        this.model = new OpportunityModel({
            internalid: options.routerArguments[0]
        });

        
    },

    beforeShowContent: function beforeShowContent() {
        return this.model.fetch({
            killerId: AjaxRequestsKiller.getKillerId()
        });
    },

    // @method getSelectedMenu
    // @return {String}
    getSelectedMenu: function() {
        return 'opportunities';
    },

    // @method getBreadcrumbPages
    // @return {Array<BreadcrumbPage>} Override breadcrumbs titles
    getBreadcrumbPages: function() {
        return [
            {
                text: Utils.translate('Opportunities'),
                href: '/Opportunities'
            },
            {
                text: Utils.translate('Opportunity #$(0)', this.model.get('tranid') || ''),
                href: '/Opportunities'
            }
        ];
    },

    // @property {ChildViews} childViews
    childViews: {
        'Items.Collection': function() {
            return new BackboneCollectionView({
                collection: this.model.get('lines'),
                childView: TransactionLineViewsCellNavigableView,
                viewsPerRow: 1,
                childViewOptions: {
                    navigable: !this.options.application.isStandalone,

                    detail1Title: Utils.translate('Qty:'),
                    detail1: 'quantity',

                    detail2Title: Utils.translate('List price:'),
                    detail2: 'rate_formatted',

                    detail3Title: Utils.translate('Amount:'),
                    detail3: 'total_formatted'
                }
            });
        },
        'Billing.Address': function() {
            return new AddressDetailsView({
                model: this.billaddress,
                hideDefaults: true,
                hideActions: true,
                hideSelector: true
            });
        }
    },

    

    // @method getContext
    // @return {Opportunity.Details.View.Context}
    getContext: function() {
        const lineItemsLength = _.reduce(
            this.model.get('lines').pluck('quantity'),
            function(accum: number, quantity: number) {
                return accum + quantity;
            },
            0
        );
		
        // @class Opportunity.Details.View.Context
        return {
            // @property {String} tranid
            tranid: this.model.get('tranid') || '',
            // @property {Opportunity.Model} model
            model: this.model,
            // @property {Number} lineItemsLength
            lineItemsLength: lineItemsLength,
            
            showDiscount: !!this.model.get('discount'),
            // @property {Boolean} showMessage
            showMessage: !!this.model.get('message'),
            // @property {String} message
            message: this.model.get('message'),
            // @property {Boolean} showMemo
            showMemo: false,
            // @property {Boolean} collapseElements
            collapseElements: Configuration.get('sca.collapseElements'),
            // @property {Transaction.Model.Get.Summary} summary
            summary: this.model.get('summary'),
            // @property {Boolean} showSalesRepInformation
            hasSalesrep: !!(this.model.get('salesrep') && this.model.get('salesrep').fullname),
            // @property {Boolean} showSalesRepInformation Name
            salesrepName: this.model.get('salesrep') && this.model.get('salesrep').fullname,
            // @property {Boolean} showSalesRepInformation Phone
            salesrepPhone:
                (this.model.get('salesrep') && this.model.get('salesrep').phone) ||
                Configuration.get('quote.defaultPhone'),
            // @property {Boolean} showSalesRepInformation Email
            salesrepEmail:
                (this.model.get('salesrep') && this.model.get('salesrep').email) ||
                Configuration.get('quote.defaultEmail'),
            
            // @property {Boolean} isOpen
            isOpen: this.model.get('isOpen') && !Configuration.get('isBasic'),
            // @property {Boolean} showOpenedAccordion
            showOpenedAccordion: Utils.isTabletDevice() || Utils.isDesktopDevice(),
            // @property {Boolean} hasPermission
            hasPermission: this.model.get('allowToPurchase'),
            // @property {Boolean} showHandlingCost
            showHandlingCost: !!this.model.get('summary').handlingcost,
            // @property {Boolean} showGiftCertificateMessage
            showGiftCertificateMessage: this.showGiftCertificateMessage,
            
            // @property {Boolean} showQuoteStatus
            showQuoteStatus: !!(
                this.model.get('status') && this.model.get('status').internalid
            ),
			entityStatusName: (this.model.get('status'))? this.model.get('status').internalid: '',
			isOpportunity: true,
			isQuoteCreated: (this.model.get('statusRef') == "issuedEstimate")
        };

        // @class Opportunity.Details.View
    }
});

// @class Opportunity.Details.View.ErrorMessages
// In this object each key is the error code and each value is the transalte message
// This object is used as a dictionary for error that came form the backend
