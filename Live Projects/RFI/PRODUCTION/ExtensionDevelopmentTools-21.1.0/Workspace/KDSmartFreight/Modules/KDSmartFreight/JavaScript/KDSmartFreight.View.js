// @module Kodella.KDSmartFreight.KDSmartFreight
define('Kodella.KDSmartFreight.KDSmartFreight.View'
	, [
		'kodella_kdsmartfreight_kdsmartfreight.tpl'

		, 'Profile.Model'
		, 'Kodella.KDSmartFreight.KDSmartFreight.Model'

		, 'Backbone'
		, 'LiveOrder.Model'
		, 'Wizard.Module'
		, 'Address.Model'
		, 'Backbone.CompositeView'
	]
	, function (
		kodella_kdsmartfreight_kdsmartfreight_tpl

		, ProfileModel
		, KDSmartFreightModel

		, Backbone
		, LiveOrderModel
		, WizardModule
		, AddressModel
		, BackboneCompositeView
	) {
		'use strict';

		// @class Kodella.KDSmartFreight.KDSmartFreight.View @extends Backbone.View
		return WizardModule.extend({

			template: kodella_kdsmartfreight_kdsmartfreight_tpl
			, initialize: function (options) {
				WizardModule.prototype.initialize.apply(this, arguments);
				BackboneCompositeView.add(this);
				var self = this;
				// global variables to use in calculations;
				self.total_weight = 0, self.numberOfItems = 0;
				self.zonesCost = {
					"2000-2249": 15,
					"2555-2574": 15,
					"2740-2786": 15,
					"3000-3199": 15,
					"4000-4305": 15,
					"4500-4560": 15,
					"3201": 15,
					"2250-2554": 25,
					"2575-2739": 25,
					"2787-2999": 25,
					"3202-3999": 25,
					"3200": 25,
					"5200-5999": 25,
					"4306-4499": 25,
					"4561-4999": 25,
					"6000-6214": 16,
					"5000-5199": 16,
					"7000-7999": 30,
					"0800-0999": 30,
					"6215-6999": 30
				}
			}

			, events: {
				'click .select_shipping': 'setShipping',
				'click #allocate-shipping': 'setShipping',
				'click #defaultGroupExample2': 'showSmart',
				'click #defaultGroupExample1': 'hideSmart'

			}

			, bindings: {
			}

			, childViews: {

			},
			hideSmart: function () {
				jQuery("#select-shipping").hide();
				jQuery("#memo-details").show();
				jQuery('.order-wizard-step-button-continue').removeAttr('disabled');
				jQuery("#0CustomerPickup").click();
			},
			showSmart: function () {

				jQuery("#select-shipping").show();
				jQuery("#memo-details").hide();

			},
			checkInitLogic: function () {
				var profilemodel = ProfileModel.getInstance();
				var liveorder = LiveOrderModel.getInstance();
				var self = this;
				if (liveorder.get("isPickUp")) {
					var cost = 0;
					var obj = liveorder.get('options');
					obj.custbody_shipping_cost_sca = cost.toString();
					self.wizard.getCurrentStep().submit();
					return
				}

				var summary = liveorder.get("summary");
			    	// var total = summary.total;
				 	var total = summary.subtotal;

				var address = liveorder.get('addresses').models;
				var selected = _.filter(address, function (myAddress) {
					return myAddress.get('defaultshipping') == 'T'
				})
				var city = selected[0].get("city").toLowerCase();
				if (city) city = city.replace(" ", "_");
				var state = selected[0].get("state");
				var zip = selected[0].get("zip");

				var customerIsRf = _.filter(profilemodel.get("customfields"), function (field) {
					return field.name == 'custentity_rfi_line_of_bus'
				})

				var resultShipping = "0", textShipping = '';
				// ask to the profile if the customer is RF
				if (customerIsRf[0].value == '1') {
					jQuery("#wizard-step-content").hide();
					// check total order to apply the shipping cost in 0, the order total needs to be more than 749.99					
					if (total < parseFloat(SC.CONFIGURATION.KDSmartFreight.totalOrder)) {
						for (var key in self.zonesCost) {
							var range = '';
							if (key.indexOf("-") != -1) {
								range = key.split("-");
								if (parseFloat(zip) >= parseFloat(range[0]) && parseFloat(zip) <= parseFloat(range[1])) {
									resultShipping = self.zonesCost[key];
								}
							} else {
								if (parseFloat(zip) == parseFloat(key)) {
									resultShipping = self.zonesCost[key];
								}
							}
						}


					}
					jQuery("#shipping-fee").remove();
					jQuery("#pickup-details").append("<span id='shipping-fee'>Shipping cost was defined by your zone</span>")
					var obj = liveorder.get('options');
					obj.custbody_shipping_cost_sca = resultShipping.toString();
					obj.custbody_shipping_method = textShipping.toString();

					liveorder.set('options', obj);
					liveorder.save().done(function () {

						liveorder.fetch().done(function () {
							self.enableContinue()
							self.wizard.getCurrentStep().submit();
						})
					});
				} else {
					this.rendertable()
				}
			},
			returnDisplayName:function(name){
				var ret = '';
				switch (name) {
					case 'EXPRESS':
						ret = 'Road Freight'
						break;
					case 'EXP':
						ret = 'Road Freight'
						break;
					case 'PREMIUM':
						ret = 'Air Freight'
						break;
					case 'GENERAL':
						ret = 'Road Freight'
						break;
					default:
						break;
				}
				return ret;
			},
			rendertable: function () {
				var self = this;

				var table = '';
				var failTable = false;
				var items = [];
				var liveorder = LiveOrderModel.getInstance();
				_.each(liveorder.get('lines').models, function (model) {
					items.push({ "itemId": model.get('item').id, "quantity": model.get('quantity') })
				})
				var profilemodel = ProfileModel.getInstance();

				self.numberOfItems = items.length;
				var model = new KDSmartFreightModel();
				self.model = model;

				var globalArray = [];
				var addr1 = liveorder.get('addresses').models[0].get("addr1");
				var addr2 = liveorder.get('addresses').models[0].get("addr2");;
				var addr3 = liveorder.get('addresses').models[0].get("addr3");
				var city = liveorder.get('addresses').models[0].get("city");;
				var state = liveorder.get('addresses').models[0].get("state")
				var zip = liveorder.get('addresses').models[0].get("zip")

				model.save({ async: true, items: items }).done(function (result) {

					var liveorderValidate = LiveOrderModel.getInstance();
					var address = liveorderValidate.get('addresses').models;
					var selected = _.filter(address, function (myAddress) {
						return myAddress.get('defaultshipping') == 'T'
					})
					var mainAddress = selected[0].attributes;
					var totalVolume = result.cubic.custbody_avt_ifs_total_volume;
					var weight = result.wight.total_weight; // 353.59;
					self.total_weight = weight;
					var entity = profilemodel.id;

					var shipmentIsCarton = self.total_weight / self.numberOfItems < 20;

					var carton = "T";
					if (!shipmentIsCarton) {
						carton = 'F';
					}

					model.fetch({
						async: true, data: {
							addr1: addr1,
							addr2: addr2,
							addr3: addr3,
							city: city,
							state: state,
							zip: zip,
							weight: weight,
							cubic: totalVolume,
							carton: carton
						}
					}
					).done(function (result) {

						var toParsebodyXML = result.bodyXML;
						var parser = new DOMParser();
						var xmlDocument = parser.parseFromString(toParsebodyXML, 'text/xml');
						var responseTable = xmlDocument.all[2]
						var resultSF = xmlDocument.all[3]
						var resultParsed = parser.parseFromString(resultSF.innerHTML, 'text/xml');
						var replaced = resultSF.innerHTML.replaceAll('&lt;', '<');
						var replacedFinal = replaced.replaceAll('&gt;', '>');
						//console.log(replacedFinal)
						var xmlDocument = parser.parseFromString(replacedFinal, 'text/xml');
						var elements = "";//xmlDocument.childNodes[0].childNodes[3].children;
						var qtyArray = [];

						elements = replacedFinal.split("<DeliveryOption>");
						for (var x = 0; x < elements.length; x++) {
							var current = elements[x];
							if(current && current.indexOf("<deliveryoptionresults>")==-1){
								if(current && current.indexOf('service')!=-1){
									var carriesService = current.split("<service>")[1].split("</service>")[0];
									var displayName = self.returnDisplayName(carriesService);
								}								
								if(current && current.indexOf('carriername')!=-1 && 
								current && current.indexOf('secondarypricing')!=-1 &&
								current && current.indexOf('primarypricing')!=-1 &&
								current && current.indexOf('optionid')!=-1){
									var objTable = {
										carriersName: current.split("<carriername>")[1].split("</carriername>")[0],
										carriesService: displayName,//current.split("<service>")[1].split("</service>")[0],
										GST: current.split("<secondarypricing>")[1].split("</secondarypricing>")[0],
										cost: current.split("<primarypricing>")[1].split("</primarypricing>")[0],
										displayName:displayName,
										key: current.split("<optionid>")[1].split("</optionid>")[0]
									}						
		
									qtyArray.push(objTable)
								}								
								
							}
							
						}

						qtyArray = qtyArray.sort(function (a, b) {
							return a.cost - b.cost
						})
						if (qtyArray.length >= 1) {
							var headers = ['Quote','Carrier Service', 'GST', 'Freight cost'];

							var tableSmart = document.createElement('table');
							tableSmart.id = "tableSmart";
							var theadSmart = document.createElement('thead');
							tableSmart.append(theadSmart);

							headers.forEach(function (element) {
								var thSmart = document.createElement('th');
								thSmart.textContent = element;
								theadSmart.append(thSmart);
							});

							for (var i = 0; i < qtyArray.length; i++) {

								var trSmart = document.createElement('tr');

								var checkboxSmart = document.createElement('input');
								checkboxSmart.type = 'radio';
								checkboxSmart.id = i;
								checkboxSmart.name = qtyArray[i].carriersName
								checkboxSmart.value = qtyArray[i].cost
								checkboxSmart.classList.add('select_shipping');

								var tdSmartCheck = document.createElement('td');
								tdSmartCheck.append(checkboxSmart);
								trSmart.append(tdSmartCheck);

								// var tdSmartName = document.createElement('td');
								// tdSmartName.textContent = qtyArray[i].carriersName
								// trSmart.append(tdSmartName);

								var tdSmartService = document.createElement('td');
								tdSmartService.textContent = qtyArray[i].carriesService;
								trSmart.append(tdSmartService);

								// var tdSmartDname = document.createElement('td');
								// tdSmartDname.textContent = qtyArray[i].displayName;
								// trSmart.append(tdSmartDname);

								var tdSmartGST = document.createElement('td');
								tdSmartGST.textContent = qtyArray[i].GST
								trSmart.append(tdSmartGST);

								var tdSmartCost = document.createElement('td');
								tdSmartCost.textContent = qtyArray[i].cost;
								trSmart.append(tdSmartCost);

								tableSmart.append(trSmart);

							}

							table = tableSmart;
							var container = document.getElementById('select-shipping');
							container.append(table);

						} else {
							var messageNoSmart = document.createElement('p');
							messageNoSmart.innerHTML = 'No Smart Freight options for this address.';
							messageNoSmart.style.padding = '6px';
							//messageNoSmart.style.background = '#ffd3d3';
							messageNoSmart.style.display = 'table';
							messageNoSmart.style.borderRadius = '10px';
							messageNoSmart.style.color = '#c72121';

							failTable = true;
							document.getElementsByClassName('module-rendered')[0].append(messageNoSmart);
						}

					})
					jQuery("#pickup-details").show();
				});
			}
			, removeDuplicates: function (originalArray, prop) {
				var newArray = [];
				var lookupObject = {};

				for (var i in originalArray) {
					lookupObject[originalArray[i][prop]] = originalArray[i];
				}

				for (i in lookupObject) {
					newArray.push(lookupObject[i]);
				}
				return newArray;
			}
			, setShipping: function (e) {
				e.preventDefault();
				var liveorder = LiveOrderModel.getInstance();
				var self = this;

				$('.select_shipping').prop('checked', false);
				var resultShipping = e.target.value;
				var textShipping = jQuery(e.target).parent().next('td').text();

				// if(resultShipping){
				// 	resultShipping = resultShipping.toString()
				// }
				//console.log(resultShipping);

				var obj = liveorder.get('options');
				obj.custbody_shipping_cost_sca = resultShipping;
				obj.custbody_shipping_method = textShipping;

				liveorder.set('options', obj);
				liveorder.save().done(function () {
					e.target.checked = true;
					liveorder.fetch().done(function () {
						self.enableContinue()
					})
				});


			},

			setFinalPriceTable: function (price) {
				var finalPrice = 0;
				var percentInt = parseFloat(SC.CONFIGURATION.KDSmartFreight.config);
				var percent = 0;
				if (!isNaN(percentInt)) {
					var percent = parseFloat(price * percentInt / 100);
				} else {
					var percent = parseFloat(price * 2 / 100);
				}
				finalPrice = percent + parseFloat(price);
				return finalPrice.toFixed(2);


			},


			enableContinue: function () {
				jQuery('.order-wizard-step-button-continue').removeAttr('disabled');
			},
			beforeShowContent: function beforeShowContent() {

			}
			//@method getContext @return Kodella.KDSmartFreight.KDSmartFreight.View.Context
			, getContext: function getContext() {
				this.checkInitLogic();

				jQuery('.order-wizard-step-button-continue').removeAttr('disabled');
				this.message = this.message || 'Hello World!!'
				return {
					message: this.message
				};
			}
		});
	});
