
define(
	'CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress'
	, [
		'CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View',
		'Address.Details.View',
		'OrderWizard.Module.Address',
		'Profile.Model',
		'Backbone.CollectionView',
		'Handlebars',
		'Utils',
		'SC.Configuration',
		'order_wizard_address_row.tpl',
		'order_wizard_address_cell.tpl',
		"Address.Edit.Fields.View"
	]
	, function (
		ShippingAndBillingAddressView,
		AddressDetailsView,
		OrderWizardModuleAddress,
		ProfileModel,
		BackboneCollectionView,
		Handlebars,
		Utils,
		Configuration,
		order_wizard_address_row_tpl,
		order_wizard_address_cell_tpl,
		AddressEditFieldsView
	) {
		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				// Note : this will work only when checkoutpage  is standard
				var currentTouchpoint = Configuration.get('currentTouchpoint');
				function shipaddressFilter(data) {
					const result = [];
					data.forEach(i => {
						if (i.get('defaultbilling') == 'F') { result.push(i); } else if (i.id == "-1") { result.push(i); };
					});
					return result;
				};

				var eventsFileds = AddressEditFieldsView.prototype.events;
				eventsFileds['click .default-check '] = "defaultcheckbox";
				AddressEditFieldsView.prototype.events = eventsFileds;

				_.extend(AddressEditFieldsView.prototype, {
					defaultcheckbox: function (e) {
						const $target = jQuery(e.target);
						$target.prop('checked', true);
					},
					getContext: _.wrap(AddressEditFieldsView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));
						var profileModelInst = ProfileModel.getInstance().get('addresses');
						if (profileModelInst.models.length === 0 && currentTouchpoint === 'checkout') {
							ret.isAddressCollectionLength1checkout = true;
						}
						if (profileModelInst.models.length === 0 & currentTouchpoint === 'customercenter') {
							ret.isAddressCollectionLength1myaccount = true;
						}
						var isBilling = window.location.hash.includes('billing');
						ret.isBillingPage = isBilling;

						return ret;
					})
				});

				// to show only billing address in myaccount enable this code
				// _.extend(AddressListView.prototype, {
				// 	childViews: _.extend({}, AddressListView.prototype.childViews, {
				// 		'Addresses.Collection': function () {
				// 			var addr = this.getAddressesToShow();
				// 			var myaccountAddr = shipaddressFilter(addr);
				// 			return new BackboneCollectionView({
				// 				childView: AddressDetailsView,
				// 				collection: myaccountAddr,
				// 				viewsPerRow:
				// 					this.itemsPerRow ||
				// 					(Utils.isDesktopDevice() ? 3 : Utils.isTabletDevice() ? 2 : 1),
				// 				cellTemplate: backbone_collection_view_cell_tpl,
				// 				rowTemplate: backbone_collection_view_row_tpl,
				// 				childViewOptions: this.getAddressListOptions()
				// 			});
				// 		}
				// 	})
				// });
				// end

				_.extend(OrderWizardModuleAddress.prototype, {
					childViews: _.extend({}, OrderWizardModuleAddress.prototype.childViews, {
						'Address.List': function () {
							var Address = this.getAddressesToShow();
							var shippingOnly = [];
							if (Address.length == 2) {
								if (Address[0].get('defaultbilling') === "T") {
									shippingOnly = Address.find((i) => i.get('internalid') == '-1');
								}
								else {
									shippingOnly = Address;
								}
								if (this.manage == "billaddress" && Address[0].get('defaultbilling') === "F") {
									shippingOnly = Address.find((i) => i.get('internalid') == '-1');
								}

							} else if (this.manage == "shipaddress") {
								shippingOnly = shipaddressFilter(Address);
							}
							else {
								shippingOnly = Address.find((i) => (i.get('defaultbilling') == 'T') ? i : i.get('internalid') == '-1');

							};
							return new BackboneCollectionView({
								collection: shippingOnly,
								viewsPerRow:
									this.itemsPerRow ||
									(Utils.isDesktopDevice() ? 3 : Utils.isTabletDevice() ? 2 : 1),
								rowTemplate: order_wizard_address_row_tpl,
								cellTemplate: order_wizard_address_cell_tpl,
								childView: AddressDetailsView,
								childViewOptions: this.getAddressListOptions()
							});
						}
					})
				});

				_.extend(AddressDetailsView.prototype, {
					getContext: _.wrap(AddressDetailsView.prototype.getContext, function getContext(fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						// to manage edit remove buttons
						if (context.manageOption === 'shipaddress') {
							context.showShippingAdrr = true;
						}
						if (currentTouchpoint === 'customercenter' && context.isDefaultBillingAddress === false) {
							context.showShippingAdrr = true;
						}
						// end
						context.currentTouchpoint = Configuration.get('currentTouchpoint');
						return context;
					})
				});





			}
		};
	});
