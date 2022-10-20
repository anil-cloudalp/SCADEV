// @module TCI.ManageOrdersExt.RequestAnInvoice
define('TCI.ManageOrdersExt.RequestAnInvoice.View'
,	[
	'tci_manageordersext_requestaninvoice.tpl',
	'Backbone.View',
	'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.View',
	'TCI.ManageOrdersExt.RequestAnInvoice.Model',
	'Configuration',
	'underscore'
    ]
, function (
	tci_manageordersext_requestaninvoice_tpl,
	BackboneView,
	RequestAnInvoicePrintButtonView,
	RequestAnInvoiceModel,
	Configuration,
	_
)
{
    'use strict';

	var RequestAnInvoiceView = BackboneView.extend({
		template: tci_manageordersext_requestaninvoice_tpl,
		events: {
			'submit form': 'saveForm'
		},
		page: _('Request an Invoice').translate(),
		title: _('Request an Invoice').translate(),

		initialize: function (options) {
			// this.application = options.application;
			console.log('TCI.ManageOrdersExt.RequestAnInvoice.View');
		},
		childViews : {
		// 'EmailInvoice': function ()
		// {
		//   return new FindInvoiceEmailButtonView({
		//     application: this.options.application,
		//     trackingInfo: this.trackingInfo
		//   });
		// },
			'PrintInvoice': function () {
				return new RequestAnInvoicePrintButtonView({
					application: this.options.application,
					trackingInfo: this.trackingInfo
					});
			}
		},
		getBreadcrumbPages: function () {
			// return [{href: '/manage-orders', text: _('Manage Orders').translate()},{href: '/request-an-invoice', text: _('Request an Invoice').translate()}];
		},
		saveForm: function (e) {
			var order;
			var zip;
			var self = this;
			var findInvoice = new RequestAnInvoiceModel();              
			if (this.$el.find('[name="order"]').val() || this.$el.find('[name="zip"]').val()) {
				e.preventDefault();
				order = this.$el.find('[name="order"]').val();
				zip = this.$el.find('[name="zip"]').val();
			} else {
				order = this.orderid;
				zip = this.zipcode;
			}
			if(order && zip) {
				findInvoice.fetch({
					data: {
						zip: zip,
						order: order
					}
				}).then(function (results) {
					if (results.success) {
						self.showTrackInfo = true;
						self.trackingInfo = results.data;
					} else {
						self.showTrackInfo = false;
						results.message = "We could not find an order matching the PO number you entered. If your PO has leading zeros, you must include those. Additional questions? <a href='https://www.teachtci.com/contact-us/'>Contact us</a>.";
						self.notAvaliableContent = results;
						self.showNotAvaliable = true;
					}
					self.render();
				});
			} else {
				self.showTrackInfo = false;
				self.showNotAvaliable = false;                  
				self.render();                
				self.showError(_('You must enter both order number and zip code').translate());
			}
		},
		getContext: function () {
			return {
				showTrackInfo: this.showTrackInfo,
				notAvaliable: this.notAvaliableContent,
				showNotAvaliable: this.showTrackInfo? false : this.showNotAvaliable,
				hasstatus: this.trackingInfo && this.trackingInfo.shipstatus ? true : false, 
				status: this.trackingInfo && this.trackingInfo.shipstatus,
				items: this.trackingInfo && this.trackingInfo.items,
				contackInfo: this.trackingInfo && this.trackingInfo.contactinfo,
				trackingInfo: this.trackingInfo,
				findInvoiceTitle: Configuration.get('findInvoice.title'),
				findInvoiceDescription: Configuration.get('findInvoice.subtitle')
			}
		}
	});
	return RequestAnInvoiceView;
});
