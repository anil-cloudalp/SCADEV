// @module TCI.ManageOrdersExt.RequestAReturn
define('TCI.ManageOrdersExt.RequestAReturn.View'
,	[
	'tci_manageordersext_requestareturn.tpl',
	'Backbone.View',
	'TCI.ManageOrdersExt.RequestAReturn.Items.View',
	'TCI.ManageOrdersExt.RequestAReturn.Model',
	'Configuration',
	'jQuery',
	'underscore'
    ]
, function (
	tci_manageordersext_requestareturn_tpl,
	BackboneView,
	ReturnsItemsView,
	ReturnsModel,
	Configuration,
	$,
	_
)
{
    'use strict';

	var RequestAReturnView = BackboneView.extend({
		template: tci_manageordersext_requestareturn_tpl,
		events: {
		  'submit form': 'saveForm'
		},
		title: _('Returns').translate(),
		initialize: function (options) {
		//   this.application = options.application;
		},
		childViews : {
			'ReturnItems': function () {
				return new ReturnsItemsView({
				application: this.application,
				eligible: this.trackingInfo,
				ineligible: this.ineligibleItems,
				reason: this.reasonValue,
				name: this.name,
				email: this.email,
				phone: this.phone,
				order: this.order
				});
			}
		},
		getBreadcrumbPages: function () {  
		  //return [{href: '/manage-orders', text: _('Manage Orders').translate()},{href: '/returns', text: _('Returns').translate()}];
		},
		saveForm: function (e) {
			console.log('saveForm');
			var self = this;
			var returns = new ReturnsModel();              
			if (this.$el.find('[name="order"]').val() || this.$el.find('[name="zip"]').val() || $('input[name=reason]:checked').val() || $('input[name=name]').val() || $('input[name=email]').val() || $('input[name=phone]').val()) {
				e.preventDefault();
				this.order = this.$el.find('[name="order"]').val();
				this.zip = this.$el.find('[name="zip"]').val();
				this.reason = $('input[name=reason]:checked').val();
				this.reasonValue = $('input[name=reason]:checked').data('value');
				this.name = $('input[name=name]').val();
				this.email = $('input[name=email]').val();
				this.phone = $('input[name=phone]').val();
			}
			if (this.order && this.zip && this.reason && this.name && this.email && this.phone) {
				var data = {
					zip: this.zip,
					order: this.order,
					reason: this.reason,
					name: this.name,
					email: this.email,
					phone: this.phone
				};
				returns.fetch({
					data: data
				}).then(function (results) {
					if (results.success) {
						self.showTrackInfo = true;
						self.trackingInfo = results.eligible;
						self.ineligibleItems = results.ineligible;
					} else {
						self.showTrackInfo = false;
						self.notAvaliableContent = results;
						self.showNotAvaliable = true;
					}
					self.render();
					// jQuery('html, body').animate({
					// 	scrollTop: jQuery(".return-container").offset().top
					// }, 1000);
				});
			} else {
				self.showTrackInfo = false;
				self.showNotAvaliable = false;                  
				self.render();                
				self.showError(_('You must populate every field').translate());
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
				ineligible: this.ineligibleItems,
				returnTitle: Configuration.get('customReturns.title'),
				returnDescription: Configuration.get('customReturns.subtitle')
			}
		}
	});

	return RequestAReturnView;
});
