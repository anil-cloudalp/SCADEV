
define(
	'Kodella.KDSmartFreight.KDSmartFreight'
	, [
		'Kodella.KDSmartFreight.KDSmartFreight.View'
		, 'Profile.Model'
		, 'Kodella.KDSmartFreight.KDSmartFreight.Model'
		, 'OrderWizard.Module.Shipmethod'
		, 'LiveOrder.Model'
		, 'underscore'
		, 'OrderWizard.Step'
		, 'OrderWizard.Module.Address'
		
	]
	, function (
		KDSmartFreightView
		, ProfileModel
		, KDSmartFreightModel
		, OrderWizardModuleShipmethod
		, LiveOrderModel
		, _
		, OrderWizardStep
		, OrderWizardModuleAddress
		
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
				///app/site/hosting/scriptlet.nl?script=1547&deploy=1&compid=3389566_SB1&h=e80c9cb5d77df4ec676c&f_recordid=&custbody_avt_ifs_apply_leastcost=F&custbody_avt_ifs_faster_is=F&entity=3185&custbody_avt_ifs_sender_business=6&custbody_avt_ifs_charge_to=1&custbody_avt_ifs_apply_leastcost=F&custbody_avt_ifs_faster_is=F&custbody_avt_ifs_sender_business=6&custbody_avt_ifs_shipcarrier=&custbody_avt_ifs_shipservice=&custbody_avt_ifs_con_date=&custbody_avt_ifs_con_date=&custbody_avt_ifs_user_defaults=&custbody_avt_ifs_accountno=&shipaddr1=2/11%20Blackly%20Row&shipaddr2=&shipcity=COCKBURN&shipstate=WA&shipzip=6164&shipphone=&custbody_avt_ifs_default_freight_type=&createdfrom=&subsidiary=2&location=12&nlapiGetRecordType=estimate&custbody_avt_ifs_total_packages=1&custbody_avt_ifs_total_weight=353.59&custbody_avt_ifs_total_volume=1.7249&custbody_avt_ifs_total_length=&custbody_avt_ifs_total_width=&custbody_avt_ifs_total_height=&custbody_avt_ifs_freight_type=&custbody_avt_ifs_total_packages_2=&custbody_avt_ifs_total_weight_2=&custbody_avt_ifs_total_volume_2=&custbody_avt_ifs_total_length_2=&custbody_avt_ifs_total_width_2=&custbody_avt_ifs_total_height_2=&custbody_avt_ifs_freight_type_2=&custbody_avt_ifs_total_packages_3=&custbody_avt_ifs_total_weight_3=&custbody_avt_ifs_total_volume_3=&custbody_avt_ifs_total_length_3=&custbody_avt_ifs_total_width_3=&custbody_avt_ifs_total_height_3=&custbody_avt_ifs_freight_type_3=&custbody_avt_ifs_total_packages_4=&custbody_avt_ifs_total_weight_4=&custbody_avt_ifs_total_volume_4=&custbody_avt_ifs_total_length_4=&custbody_avt_ifs_total_width_4=&custbody_avt_ifs_total_height_4=&custbody_avt_ifs_freight_type_4=
				/** @type {LayoutComponent} */
				var cart = container.getComponent('Cart');
				var checkout = container.getComponent('Checkout');
				var liveorder = LiveOrderModel.getInstance();
				
				OrderWizardModuleShipmethod.prototype.getContext = _.wrap(OrderWizardModuleShipmethod.prototype.getContext, function (fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					_.each(context.shippingMethods, function (method) {
						//method.name = shipCustomMethods[i].name;

						if (method.internalid == '78') {
							method.isActive = true;
							var liveorder = LiveOrderModel.getInstance();
							liveorder.set('shipmethod', method.internalid);
						}


					})
					return context;
				});

				try {
					var step1 = checkout.addStepsGroup(
						{
							"group":
							{
								"name": 'Shipping Options'
								, "url": 'shippingoptions'
								, "index": 2

							}
						});
					step1.done(function (data) {
						var step2 = checkout.addStep(
							{
								"step": {
									"name": 'Select Shipping Options'
									, "url": 'shippingoptions'
									, "isActive": function () { return true }
									, "group_name": 'Shipping Options'
									, "index": 3
								}
							}

						);
						step2.done(function (data) {

							var step = checkout.addModuleToStep(
								{
									step_url: 'shippingoptions'
									, module: {
										id: 'shippingOptions'
										, index: 99
										, classname: 'Kodella.KDSmartFreight.KDSmartFreight.View'
									}
								}
							);
							checkout.addModuleToStep(
								{
									step_url: 'shippingoptions'
									, module: {
										id: 'summaryCart'
										, index: 6
										, classname: 'OrderWizard.Module.CartSummary'
										, options: { container: '#wizard-step-content-right' }
									}
								}
							);
							checkout.addModuleToStep(
								{
									step_url: 'shippingoptions'
									, module: {
										id: 'summaryCart'
										, index: 6
										, classname: 'OrderWizard.Module.PromocodeForm'
										, options: { container: '#wizard-step-content-right' }
									}
								}
							);
							checkout.addModuleToStep(
								{
									step_url: 'shippingoptions'
									, module: {
										id: 'summaryCart'
										, index: 6
										, classname: 'OrderWizard.Module.CartItems.Ship'
										, options: { container: '#wizard-step-content-right' }
									}
								}
							);
						})

					})
				} catch (e) {
					console.log(e);
				}

				 var layout = container.getComponent('Layout');
				 layout.on("afterShowContent", function () {
						
					if (document.location.href.indexOf("shippingoptions") == -1) return;						
					jQuery('.order-wizard-step-button-continue').attr('disabled', 'disabled')

					
				})
			
				// _.extend(WizardView.prototype, {
				// 	//Initialize extended
				// 	submit: _.wrap(WizardView.prototype.submit, function initFunc(fn) {
				// 		// debugger
				// 	  fn.apply(this, Array.prototype.slice.call(arguments, 1));	
				// 	  var liveorder = LiveOrderModel.getInstance();
				// 	  if(jQuery("#defaultGroupExample1").prop("checked")){						
						
				// 		var obj = liveorder.get('options');
				// 		obj.custbody_shipping_method = "Customer Pickup (Seven Hills)";
				// 		obj.custbody_rfi_c_memo_internal = jQuery("#custbody_rfi_c_memo_internal").val();
				// 		liveorder.set('options', obj);
				// 		liveorder.set("isPickUp",true);
				// 	  }else{
				// 		var obj = liveorder.get('options');
				// 		obj.custbody_shipping_method = "";
				// 		obj.custbody_rfi_c_memo_internal = '';
				// 		liveorder.set('options', obj);
				// 		liveorder.set("isPickUp",false);
				// 	  }			 
					 
				// 	}),
				// });

				_.extend(OrderWizardStep.prototype, {
					submit: _.wrap(OrderWizardStep.prototype.submit, function (fn) {
					  var context = fn.apply(this, _.toArray(arguments).slice(1));
					
					  if(jQuery("#defaultGroupExample1")[0] && this.wizard.currentStep == 'shipping/address'){
						if(jQuery("#defaultGroupExample1").prop("checked")){						
						
							var obj = this.wizard.model.get("options")
							obj.custbody_shipping_method = "Customer Pickup (Seven Hills)";
							obj.custbody_kd_notes_from_customer = jQuery("#custbody_kd_notes_from_customer").val();
							this.wizard.model.set('options', obj);
							this.wizard.model.set("isPickUp",true);
						  }else{
							var obj = this.wizard.model.get("options")
							obj.custbody_shipping_method = "";					
							this.wizard.model.set('options', obj);
							this.wizard.model.set("isPickUp",false);
	
						  }	
					  }
					  				  
					  return context;
					}),
				  });

				var obj = OrderWizardModuleAddress.prototype.events;
				obj["click #defaultGroupExample1"] = "showSmart";	 
				obj["click #defaultGroupExample2"] = "hideSmart";
				obj['click [data-action="select"]'] = 'selectAddress',			
				OrderWizardModuleAddress.prototype.events = obj;

				_.extend(OrderWizardModuleAddress.prototype, {
					//Initialize extended
					showSmart: _.wrap(OrderWizardModuleAddress.prototype.showSmart, function showSmart(fn) {											
						jQuery("#memo-details").show(); 			 
					}),
					hideSmart: _.wrap(OrderWizardModuleAddress.prototype.showSmart, function showSmart(fn) {
						jQuery("#memo-details").hide();					 			 
					}),
					delay: function(){
						var timer = 0;
						return function(callback, ms){
						clearTimeout (timer);
						timer = setTimeout(callback, ms);
					   };
					  }(),

					selectAddress: function(e){
						var add = liveorder.attributes.addresses.models;
						const defalutShipAddress = add.filter((address)=>{
							return  address.get("defaultshipping") == "T";
						});
						const defalutBillAddress = add.filter((address)=>{
							return  address.get("defaultbilling") == "T";
						});
				var changedaddress = jQuery(e.target).data('id').toString();
					 if((defalutShipAddress.length >0 && (defalutShipAddress[0].id) !== changedaddress) || (defalutBillAddress.length >0 && (defalutBillAddress[0].id) !== changedaddress))
					 {
						var self = this;
						var kdsmart = new KDSmartFreightModel();
									kdsmart.save({ async: true}).done((response)=>{
										
										  jQuery('.wizard-content .alert-error').hide();
										  self.setAddress(
											  jQuery(e.target)
												  .data('id')
												  .toString()
										  );
										  // re render so if there is changes to be shown they are represented in the view
										  self.render();
										  // As we already set the address, we let the step know that we are ready
										  self.trigger('ready', true);
									})
						}
					}
				});
				OrderWizardModuleAddress.prototype.getContext = _.wrap(OrderWizardModuleAddress.prototype.getContext, function (fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));					
					context.isPickUp = liveorder.get("isPickUp");
					return context;
				});
				
			}
		};
	});
