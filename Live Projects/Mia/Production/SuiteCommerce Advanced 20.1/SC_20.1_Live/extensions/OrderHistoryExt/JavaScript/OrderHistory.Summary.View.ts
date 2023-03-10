/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="OrderHistory.Summary.View"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as order_history_summary_tpl from 'order_history_summary.tpl';

import CancelView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.Cancel.View');
import ReturnAuthorizationGetReturnableLines = require('../../../Advanced/ReturnAuthorization/JavaScript/ReturnAuthorization.GetReturnableLines');
import CartPromocodeListView = require('../../../Commons/Cart/JavaScript/Cart.Promocode.List.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import BackboneModel = require('../../../Commons/BackboneExtras/JavaScript/Backbone.Model');
import ProfileModel = require('../../../Commons/Profile/JavaScript/Profile.Model');
// @class OrderHistory.Summary.View @extend Backbone.View
const OrderHistorySummaryView: any = BackboneView.extend({
    // @property {Function} template
    template: order_history_summary_tpl,

    events: {
        'click [data-action="cancel"]': 'cancel',
		'click [name="follow_up_order"]': 'followUpOrder'
    },
	followUpOrder: function(e){
		e.stopPropagation();
		var $target = this.$(e.currentTarget);
		var orderId = $target.attr('data-id');
		const Profile = ProfileModel.getInstance();
		var serviceUrl = Utils.getAbsoluteUrl('services/GetMacDetails.ss?followUp=T&soId=' + orderId + '&custEmail=' + Profile.get('email'));
		$target.attr('disabled',true);
		new BackboneModel().fetch({url: serviceUrl}).then(function(res){
			if(res && _.has(res,'email') && res.email == "OK"){
				$target.next().html('Follow Up Done Successfully');
			}
			else{
				$target.next().html('Follow Up Failed');
				$target.attr('disabled',false);
			}
		});
	},

    initialize: function(options) {
        this.any_line_purchasable = this.isAnyLinePurchasable();
        this.all_gift_certificates = this.isAllGiftCertificates();
        this.show_request_return_button = options.show_request_return_button;
        this.pdfUrl = options.pdfUrl;
        this.isBasic = options.is_basic;
        this.application = options.application;
    },

    // @method cancel
    cancel: function() {
        new CancelView({
            application: this.application,
            model: this.model
        }).showInModal('order');
    },

    // @method isAnyLinePurchasable
    isAnyLinePurchasable: function() {
        if (!this.any_line_purchasable) {
            this.any_line_purchasable = this.model.get('lines').any(function(line) {
                return line.get('item').get('_isPurchasable');
            });
        }

        return this.any_line_purchasable;
    },

    // @method getPaidByTerms
    getPaidByTerms: function() {
        let terms_id = 0;
        this.model.get('paymentmethods').each(function(model) {
            terms_id = model.get('paymentterms') && model.get('paymentterms').internalid;
        });

        return terms_id;
    },

    // @method getDownloadPdfUrl @returns {String}
    getDownloadPdfUrl: function() {
        let pdfUrl = '';
        switch (this.model.get('recordtype')) {
            case 'cashsale':
                pdfUrl = Utils.getDownloadPdfUrl({
                    asset: 'cash-sale-details',
                    id: this.model.get('internalid')
                });
                break;
            case 'salesorder':
                pdfUrl = Utils.getDownloadPdfUrl({
                    asset: 'order-details',
                    id: this.model.get('internalid')
                });
                break;
            case 'invoice':
                pdfUrl = Utils.getDownloadPdfUrl({
                    asset: 'invoice-details',
                    id: this.model.get('internalid')
                });
                break;
        }

        return pdfUrl;
    },

    // @method isReturnable indicates if the order accepts returns or not
    isReturnable: function() {
        if (_.isUndefined(this.isReturnable)) {
            const not_consider_fulfillments = this.model.get('recordtype') !== 'salesorder';
            const returnable_calculator = new ReturnAuthorizationGetReturnableLines(this.model, {
                notConsiderFulfillments: not_consider_fulfillments
            });

            this.isReturnable = !!(
                this.model.get('isReturnable') &&
                returnable_calculator.calculateLines().validLines.length
            );
        }

        return this.isReturnable;
    },

    // @method isAllGiftCertificates
    isAllGiftCertificates: function() {
        if (!this.all_gift_certificates) {
            this.all_gift_certificates = this.model.get('lines').all(function(line) {
                return line.get('item').get('itemtype') === 'GiftCert';
            });
        }

        return this.all_gift_certificates;
    },

    childViews: {
        CartPromocodeListView: function() {
            return new CartPromocodeListView({
                model: this.model,
                isReadOnly: true
            });
        }
    },

    // @method getContext @return OrderHistory.Summary.View.Context
    getContext: function() {
        const invoice_model = this.model.get('receipts').findWhere({ recordtype: 'invoice' });
        const have_terms = this.getPaidByTerms();
		const cashsale_model = this.model.get('receipts').findWhere({ recordtype: 'cashsale'});
		var macUrl = '';
		if(this.model.get('status').internalid == "fullyBilled" || this.model.get('status').internalid == "partiallyFulfilled"){
			
			var params:any = {};
			
			params.n =
				(SC &&
					SC.ENVIRONMENT &&
					SC.ENVIRONMENT.siteSettings &&
					SC.ENVIRONMENT.siteSettings.siteid) ||
				'';
			params.soId = this.model.get('internalid');
			params.tranId = this.model.get('tranid');
			macUrl = Utils.addParamsToUrl(Utils.getAbsoluteUrl('services/GetMacDetails.ss'), params);
		}
		var isCreatedFromQuote = (this.model.get('createdfrom').recordtype == "Estimate");
		var createSalesOrd = (SC.ENVIRONMENT.permissions.transactions.tranSalesOrd >= 2);
        // @class OrderHistory.Summary.View.Context
        return {
            // @property {OrderHistory.Model} model
            model: this.model,
            // @property {Boolean} showReorderAllItemsButton
            showReorderAllItemsButton:
                !this.application.isStandalone &&
                this.any_line_purchasable &&
                !this.all_gift_certificates && !isCreatedFromQuote && createSalesOrd,
            // @property {Array} showSummaryDiscount
            showSummaryDiscount: !!this.model.get('summary').discounttotal,
            // @property {Boolean} showSummaryShippingCost
            showSummaryShippingCost: !!this.model.get('summary').shippingcost,
            // @property {Boolean} showSummaryPickupCost
            showSummaryPickupCost: !!this.model.get('lines').where({ linegroup: 'instore' }).length,
            // @property {Boolean} showSummaryHandlingCost
            showSummaryHandlingCost: !!this.model.get('summary').handlingcost,
            // @property {Boolean} showSummaryGiftCertificateTotal
            showSummaryGiftCertificateTotal: !!this.model.get('summary').giftcertapplied,
            // @property {Boolean} showSummaryPromocode
            showSummaryPromocode: !!(
                this.model.get('promocodes') && this.model.get('promocodes').length
            ),
            // @property {Boolean} showViewInvoiceButton
            showViewInvoiceButton: !!invoice_model && !this.isBasic && !!have_terms,
			
            // @property {Object} invoiceModel
            invoiceModel: invoice_model,
			showViewCashSaleButton: !!cashsale_model && !this.isBasic,
            cashsaleModel: cashsale_model,
            // @property {String} pdfUrl
            pdfUrl: this.getDownloadPdfUrl(),
            // @property {Boolean} showRequestReturnButton
            showRequestReturnButton: this.isReturnable(),
            // @property {Boolean} showCancelButton
            showCancelButton: this.model.get('isCancelable'),
            // @property {String} taxLabel
            taxLabel: Configuration.get('summaryTaxLabel')
                ? Configuration.get('summaryTaxLabel')
                : 'Tax',
			macUrl: macUrl
        };
    }
});

export = OrderHistorySummaryView;
