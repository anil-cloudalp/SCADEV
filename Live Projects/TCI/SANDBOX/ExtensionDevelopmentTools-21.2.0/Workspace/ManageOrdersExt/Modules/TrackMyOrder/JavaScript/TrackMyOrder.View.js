// @module TCI.ManageOrdersExt.TrackMyOrder
define('TCI.ManageOrdersExt.TrackMyOrder.View'
,	[
		'Backbone.View',
		'TCI.ManageOrdersExt.TrackMyOrder.Model',
		'tci_manageordersext_trackmyorder.tpl',
		'Configuration',
		'underscore'
    ]
, function (
	BackboneView,
	TrackYourOrderModel,
	tci_manageordersext_trackmyorder_tpl,
	Configuration,
	_
)
{
    'use strict';

	console.log('PageTypeBaseView');

	var TrackMyOrderView = BackboneView.extend({
		template: tci_manageordersext_trackmyorder_tpl,
		title: _('Track Your Order').translate(),
		events: {
			'submit form': 'saveForm'
		},
		initialize: function (options) {
			// this.application = options.application;
			console.log('TCI.ManageOrdersExt.TrackMyOrder.View');
		},
		getBreadcrumbPages: function () {
			// return [{href: '/manage-orders', text: _('Manage Orders').translate()},{href: '/track-your-order', text: _('Track Your Order').translate()}];
		},
		saveForm: function (e) {
			console.log('saveForm');
			var order;
			var zip;
			var self = this;
			var trackYourOrder = new TrackYourOrderModel();              
			if (this.$el.find('[name="order"]').val() || this.$el.find('[name="zip"]').val()) {
				e.preventDefault();
				order = this.$el.find('[name="order"]').val();
				zip = this.$el.find('[name="zip"]').val();
			} else {
				order = this.orderid;
				zip = this.zipcode;
			}
			console.log('fetch');
			if(order && zip) {
				console.log('fetch');
				trackYourOrder.fetch({
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
						if (results.status === 500 && results.code === 'ERR_ORDER_NOT_FOUND') {
							self.notAvaliableContent = Configuration.get('trackyourorder.notrackinfo');
						} else {
							self.notAvaliableContent = 'Missing required fields';
						}
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
		getContext: function getContext () {
            return {
				showTrackInfo: this.showTrackInfo,
				notAvaliable: this.notAvaliableContent,
				showNotAvaliable: this.showTrackInfo? false : this.showNotAvaliable,
				items: this.trackingInfo,
				name: this.showTrackInfo ? this.trackingInfo[0].name : null,
				shipToName: this.showTrackInfo ? this.trackingInfo[0].shipToName : null,
				poNumber: this.showTrackInfo ? this.trackingInfo[0].poNumber : null,
				orderNumber: this.showTrackInfo ? this.trackingInfo[0].orderNumber : null,
				orderDate: this.showTrackInfo ? this.trackingInfo[0].orderDate : null,
				trackTitle: Configuration.get('trackyourorder.title'),
				trackDescription: Configuration.get('trackyourorder.subtitle'),
				orderNumberLabel: Configuration.get('trackyourorder.orderNumberLabel'),
				billZipLabel: Configuration.get('trackyourorder.billZipLabel')
            }
        }
	});
	return TrackMyOrderView;
});
