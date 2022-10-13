
define(
	'CA.customAddresses.customAddress'
,   [
		'CA.customAddresses.customAddress.View',
		'Profile.Model',
		'CA.customAddresses.customAddress.Model',
	    'jQuery',
	    'underscore',
		'OrderWizard.Module.Address',
		'Address.Edit.View',
		'Wizard.StepModule',
		'Address.Model',
		'Backbone.FormView',
		'Backbone',
		'Utils',
		'Configuration',
		'Loggers',
		'LiveOrder.Model',
	    'Transaction.Model',
		"Address.Edit.Fields.View",
	    "Address.Details.View",
	    "Address.List.View",
	    "Address.Collection",
		'Backbone.View'
	]
	, function (
		customAddressView,
		ProfileModel,
		CAcustomAddressescustomAddressModel,
		jQuery,
		_,
		OrderWizardModuleAddress,
		AddressEditView,
		WizardStepModule,
		AddressModel,
		BackboneFormView,
		Backbone,
		Utils,
		Configuration,
		Loggers,
		LiveOrderModel,
		TransactionModel,
		AddressEditFieldsView,
		AddressDetailsView,
		AddressListView,
		AddressCollection,
		BackboneView
	) {
		'use strict';

	return {
		
		mountToApp: function mountToApp(container) {
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var checkout = container.getComponent("Checkout");
			var StopDefaultProcess = Configuration.get('customAddress.config');
			console.log("Configuration", Configuration.get('customAddress'));
			console.log("StopDefaultProcess", StopDefaultProcess);
			var addressType = "";
			_.extend(AddressDetailsView.prototype, {
				events: {
					'click [data-action="edit-address"]': 'editAddress'
				},
				editAddress: function (e) {
					addressType = $(e.target).parent().parent()[0].dataset.manage;
					console.log("e.target for myaccount", $(e.target).parent().parent()[0]);
					console.log("edit Address", addressType);
				}
			}),
			
		//	showDefaultLabels
			
				AddressDetailsView.prototype.getContext = _.wrap(AddressDetailsView.prototype.getContext, function getContext(fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					context.showDefaultLabels = false;
					return context;
				})
				
		   _.extend(OrderWizardModuleAddress.prototype, {
				events: {
					'click .order-wizard-address-cell4': 'AddNewAddress',
					'click [data-action="submit"]': 'submit',
					'click [data-action="select"]': 'selectAddress',
					'click [data-action="change-address"]': 'changeAddressHandler',
					'click [data-action="remove"]': 'validateAddressRemovalHandler',
					'click [data-action="edit-address"]': 'editAddress',
					'change [data-action="same-as"]': 'markSameAsHandler',
					'change form': 'changeForm'
				},
			   AddNewAddress: function (e) {
				   var promise = jQuery.Deferred();
				   if ($(e.target).data('action') != "edit-address") {
					    $(document).ready(function () {
							addressType = $(e.target).parent().parent().parent().parent().parent().parent().parent().parent().data("manage");
							console.log("AddressType", addressType);
							promise.resolve();
				        })
				   } else {
					   promise.resolve();
				   }
				   return promise;
				}
			}),
				
	_.extend(OrderWizardModuleAddress.prototype, {
		editAddress: function (e) {
				const address_id_str = this.$(e.target).data('id');
				const address_id = parseInt(address_id_str, 10);
				if (_.isNaN(address_id) || !_.isNumber(address_id)) {
					e.stopPropagation();
					e.preventDefault();

					const collection = this.getAddressCollection();
					const selected_address = collection.get(address_id_str);
					let view;

				if (selected_address) {
					selected_address.unset('internalid', { silent: true });
					view = new AddressEditView({
						application: this.wizard.application,
						collection: collection,
						model: selected_address
					});
				
					const add_new_address_on_profile = function (model) {
						// Make sure that the new address now take part of the profile addresses
						// This is important if a temporal address is edited more than once
						this.wizard.options.profile.get('addresses').add(model);
					};
					const reset_current_address = function (model) {
						// After saving the temp address, we set it as the one selected
						this.setAddress(model.id);
					};

					view.model.once('change', add_new_address_on_profile, this);

					// If the address being edited is the selected one we must re-set once it is created
					if (this.wizard.model.get(this.manage) === address_id_str) {
						view.model.once('sync', reset_current_address, this);
					}

					view.once(
						'modal-close',
						function () {
							view.model.off('sync', reset_current_address);
							view.model.off('change', add_new_address_on_profile);
						},
						this
					);
				} else {
					location.reload();  
				}
				this.wizard.application.getLayout().showInModal(view);
			}
		}
	})
	
_.extend(AddressEditView.prototype, {	
	events: {
				"click .address-edit-form-button-submit" : "SaveAddressForm"
	},
	SaveAddressForm: function (e) {
		var self = this;
		e.stopPropagation();
		var fullname = $('[name="fullname"]').val();
		var company = $('[name="company"]').val();
		var addr1 = $('[name="addr1"]').val();
		var addr2 = $('[name="addr2"]').val();
		var city = $('[name="city"]').val();
		var country = $('[name="country"]').val();
		var state = $('[name="state"]').val();
		var zip = $('[name="zip"]').val();
		var phone = $('[name="phone"]').val();
		var isresidential = $('[name="isresidential"]');
		var custrecorddefalut_ship = $('[name="custrecorddefalut_ship"]');
		var custrecorddefault_billing = $('[name="custrecorddefault_billing"]');
		var SaveAddressModel = new CAcustomAddressescustomAddressModel();

		if (custrecorddefalut_ship[0].checked) {
			custrecorddefalut_ship = $('[name="custrecorddefalut_ship"]').val();
		} else {
			custrecorddefalut_ship = 'F';
		}

		if (custrecorddefault_billing[0].checked) {
			custrecorddefault_billing = $('[name="custrecorddefault_billing"]').val();
		} else {
			custrecorddefault_billing = 'F';
		}
		
		if (isresidential[0].checked) {
			isresidential = $('[name="isresidential"]').val();
		} else {
			isresidential = "F";
		}

		self.model.set("fullname", fullname);
		self.model.set("addr1", addr1);
		self.model.set("addr2", addr2);
		self.model.set("company", company);
		self.model.set("city",city);
		self.model.set("country", country);
		self.model.set("state", state);
		self.model.set("phone", phone);
		self.model.set("zip", zip);
		self.model.set("isresidential", isresidential);

		self.model.save().done((result) => {
			var data = ({ "AddInternalId": self.model.get('internalid'), "custrecorddefault_billing": custrecorddefault_billing, "fullname": fullname, "company": company, "addr1": addr1, "addr2": addr2, "city": city, "country": country, "state": state, "zip": zip, "isresidential": isresidential, "custrecorddefalut_ship": custrecorddefalut_ship, "phone": phone });
			SaveAddressModel.save(data).done((re) => {
				console.log("After Update",re);
				var result = {};
				result.internalid = re;
				$('[data-dismiss="modal"]').click();
					if (custrecorddefalut_ship == "T") {
						self.updatedAddress(result);
					} else if(custrecorddefault_billing == "T") {
						self.updatedAddress(result);
					}
				})
		    })
	    }
    }),
			
AddressEditFieldsView.prototype.render = _.wrap(AddressEditFieldsView.prototype.render, function render(fn) {
	fn.apply(this, _.toArray(arguments).slice(1));
	var self = this;
	var promise = jQuery.Deferred();
		$(document).ready(function () {
			if (addressType == "shipaddress") {
				$('[name="custrecorddefault_billing"]').parent().css("display", "none");
				if ((StopDefaultProcess == "Billing")) {
						$('[name="custrecorddefalut_ship"]').parent().css("display", "none");
				}
			} else if (addressType == "billaddress") {
				$('[name="custrecorddefalut_ship"]').parent().css("display", "none");
				if ((StopDefaultProcess == "Shipping")) {
						$('[name="custrecorddefault_billing"]').parent().css("display", "none");
					}
			} 
			var addremovemodel = new CAcustomAddressescustomAddressModel();
			addremovemodel.save({ "AddID": self.model.get('internalid') }).done((res) => {
				if (addressType == "shipaddress") {
					if ((res) && (res.isDefaultShip == self.model.get('internalid'))) {
							$('[name="custrecorddefalut_ship"]').attr("checked","checked")
					}
				}
				else if (addressType == "billaddress") {
					console.log("in bill address", res);
					console.log("model",self.model.get('internalid'));
					if ((res) && (res.isDefaultBill == self.model.get('internalid'))) {
							$('[name="custrecorddefault_billing"]').attr("checked","checked")
					}
				} else {
					
						if ((res) && (res.isDefaultShip == self.model.get('internalid'))) {
								$('[name="custrecorddefalut_ship"]').attr("checked","checked")
						}
					
						if ((res) && (res.isDefaultBill == self.model.get('internalid'))) {
							   $('[name="custrecorddefault_billing"]').attr("checked","checked")
						}
				}
				promise.resolve();
			})		
		});
	return promise; 
}) 
			
		AddressEditFieldsView.prototype.getContext = _.wrap(AddressEditFieldsView.prototype.getContext, function getContext(fn) {
			var context = fn.apply(this, _.toArray(arguments).slice(1));
			context.showDefaultControls = false;
			return context;
		})
			
			
		AddressEditView.prototype.initialize = _.wrap(AddressEditView.prototype.initialize, function initialize(fn) {
			fn.apply(this, _.toArray(arguments).slice(1));
			this.model.on('change', _.bind(this.updatedAddress, this));
		}),
			

	AddressEditView.prototype.updatedAddress = function updatedAddress(res) {
		console.log("from update Address", res.internalid);
		console.log("AddressType in updateAddress",addressType);
		var addressInternalid = res.internalid;
		var profile = ProfileModel.getInstance();
		var addresses = profile.get('addresses').models;
		var defaultship = "";
		var defaultbill = "";
			_.each(addresses, function (add) {
				if (add.get('defaultshipping') == "T") {
					defaultship = add.get('internalid');
				}
				if (add.get('defaultbilling') == "T") {
					defaultbill = add.get('internalid');
				}
			})

		if (addressInternalid) {
			var addremovemodel = new CAcustomAddressescustomAddressModel();
			if (StopDefaultProcess == "Shipping") {
				if (addressType == "shipaddress") {
					if (defaultship == "") {
						defaultship = addressInternalid
					}
					addremovemodel.save({ "internalid": addressInternalid, "defaultship": (defaultship) }).done((res) => {
						if (res) {
							var id = (res);
							console.log("Res res res", res);
							$("#" + id).click();
						}
					});
				} else if(addressType != "billaddress"){
					// Myaccount customizations
					addremovemodel.save({ "internalid": addressInternalid, "DefaultAdd": (defaultship) }).done((res) => {
						if (res) {
							var id = (res);
							console.log("Res res res", res);
							$("#" + id).click();
						}
					});

				
				}
			} else if (StopDefaultProcess == "Billing") {
				if (addressType == "billaddress") {
					console.log("bill address");
					if (defaultbill == "") {
						defaultbill = addressInternalid;
					}
					addremovemodel.save({ "internalid": addressInternalid, "defaultbill": defaultbill }).done((res) => {
						if (res) {
							var id = (res);
							$("#" + id).click();
						}
					});
				} else if(addressType != "shipaddress"){
						addremovemodel.save({ "internalid": addressInternalid, "DefaultAdd": (defaultbill) }).done((res) => {
							if (res) {
								var id = (res);
								console.log("Res res res", res);
								$("#" + id).click();
							}
						});
				   }
			} else {
				if (addressType == "shipaddress") {
					if (defaultship == "") {
						defaultship = addressInternalid
					}
					addremovemodel.save({ "internalid": addressInternalid, "defaultship": defaultship }).done((res) => {
						if (res) {
							var id = (res);
							$("#" + id).click();
						}
					});
				} else if(addressType == "billaddress") {
					if (defaultbill == "") {
						defaultbill = addressInternalid
					}
					addremovemodel.save({ "internalid": addressInternalid, "defaultbill": defaultbill }).done((res) => {
						if (res) {
							var id = (res);
							$("#" + id).click();
						}
					});
				} else {
						addremovemodel.save({ "internalid": addressInternalid, "DefaultAdd": (defaultbill) }).done((res) => {
							if (res) {
								var id = (res);
								console.log("Res res res", res);
								$("#" + id).click();
							}
						});
				   }
			   }
		   }
	    }				

		_.extend(LiveOrderModel.prototype, {
			setAddress: function setAddress(address_type, address_id, options, save) {
				const self = this;
					const address = {
						id: address_id,
						type: address_type
					};
					return this.cancelableTrigger('before:LiveOrder.setAddress', address).pipe(function() {
								try {
									TransactionModel.prototype.setAddress.apply(self, [
										address_type,
										address_id,
										options
									]);
									var profile = ProfileModel.getInstance();
									var addresses = profile.get('addresses').models;
									var defaultshipAdd = "";
									var defaultbillAdd = "";
							
									_.each(addresses, function (add) {
											if (add.get('defaultshipping') == "T") {
												defaultshipAdd = add.get('internalid');
											}
											if (add.get('defaultbilling') == "T") {
												defaultbillAdd = add.get('internalid');
											}
										})
									
									let promise = jQuery.Deferred().resolve();
									if (save) {
										promise = self.save();
									}
									return promise.then(function() {
										self.cancelableTrigger('after:LiveOrder.setAddress', address).then(function () {
											if (self.get("sameAs") == true) {
												console.log("in sameas");
												if (address.type == "shipaddress") {
													if ((StopDefaultProcess == "Shipping") || (StopDefaultProcess == "Both")) {
														setTimeout(function () {
															var addressInternalid = address.id;
															var addremovemodel = new CAcustomAddressescustomAddressModel();
																if (defaultshipAdd == "") {
																	defaultshipAdd = addressInternalid
																}													
															addremovemodel.save({ "internalid": addressInternalid, "defaultship": defaultshipAdd });
														}, 3000);
													}
												} else if (address.type == "billaddress") {
													if ((StopDefaultProcess == "Billing")) {
														setTimeout(function () {
															var addressInternalid = address.id;
															var addremovemodel = new CAcustomAddressescustomAddressModel();
															if (defaultbillAdd == "") {
																defaultbillAdd = addressInternalid;
															}
															addremovemodel.save({ "internalid": addressInternalid, "defaultbill": defaultbillAdd });
														}, 3000);
													} else if ((StopDefaultProcess == "Both")) {
														setTimeout(function () {
															var addressInternalid = address.id;
															var addremovemodel = new CAcustomAddressescustomAddressModel();
															if (defaultbillAdd == "") {
																defaultbillAdd = addressInternalid;
															}
															addremovemodel.save({ "internalid": addressInternalid, "defaultbill": defaultbillAdd });
														}, 6000);
													}
												}
											} else {
												if (address.type == "shipaddress") {
													if ((StopDefaultProcess == "Shipping") || (StopDefaultProcess == "Both")) {
														setTimeout(function () {
															var addressInternalid = address.id;
															var addremovemodel = new CAcustomAddressescustomAddressModel();
															if (defaultshipAdd == "") {
																	defaultshipAdd = addressInternalid
															}													
															addremovemodel.save({ "internalid": addressInternalid, "defaultship": defaultshipAdd }).done((res) => {
															});
														}, 3000);
													}
												} else if (address.type == "billaddress") {
													console.log("address.type",address.type);
													if ((StopDefaultProcess == "Billing")) {
														setTimeout(function () {
															var addressInternalid = address.id;
															var addremovemodel = new CAcustomAddressescustomAddressModel();
															if (defaultbillAdd == "") {
																defaultbillAdd = addressInternalid;
															}
															addremovemodel.save({ "internalid": addressInternalid, "defaultbill": defaultbillAdd });
														}, 3000);
													} else if ((StopDefaultProcess == "Both")) {
														setTimeout(function () {
															var addressInternalid = address.id;
															var addremovemodel = new CAcustomAddressescustomAddressModel();
															if (defaultbillAdd == "") {
																defaultbillAdd = addressInternalid;
															}
															addremovemodel.save({ "internalid": addressInternalid, "defaultbill": defaultbillAdd });
														}, 6000);
													}
												}
											}
										})
									});
								} catch (error) {
									return jQuery.Deferred().reject(error);
							    }
						});
					}
				})
			}
		}
});
