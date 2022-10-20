
define(
	'Kodella.KDFeeCreditCard.KDFeeCreditCard'
	, [
		'Kodella.KDFeeCreditCard.KDFeeCreditCard.View',
		"Profile.Model",
		"LiveOrder.Model",
		"OrderWizard.Module.PaymentMethod.Creditcard",
		"OrderWizard.Module.PaymentMethod.Selector"
	]
	, function (
		KDFeeCreditCardView,
		ProfileModel,
		liveOrder,
		CreditCardView,
		Selector
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				// debugger
				var layout = container.getComponent('Layout');
				var cart = container.getComponent('Cart');
				var checkout = container.getComponent('Checkout');
				var FeeAdded = '';
				var InstanceProfile = ProfileModel.getInstance();
				var defaultCreditCard = InstanceProfile.get('defaultCreditCard');

				var fees;
				console.log('InstanceProfile.attributes.fees', InstanceProfile.attributes.fees)
				if (InstanceProfile.attributes.fees) fees = JSON.parse(InstanceProfile.attributes.fees);

				//var fees = JSON.parse(InstanceProfile.attributes.fees); 
				//console.log(defaultCreditCard.attributes.paymentmethod.key, 'card'); 

				// if(defaultCreditCard.attributes.paymentmethod){
				// 	var defaultCC = defaultCreditCard.attributes.paymentmethod.key;
				// 	console.log(defaultCC);
				// 	console.log(defaultCreditCard.attributes.paymentmethod);
				// }
				//Remove all the promotions on load web to prevent the summary with the fee if the user recharge the site 


				checkout.on("afterShowContent", function () {
					//on the billing step, the changeFee event is added to the main view so the FEE is applied if the customer selects a credit card
					checkout.getCurrentStep().then(function (step) {

						if (step.url === "billing") {

							//console.log(FeeAdded);
							var liveOrderModel = liveOrder.getInstance();
							cart.getPaymentMethods().then(function (paymentmethods) {
								//console.log(paymentmethods[0].creditcard.paymentmethod.internalid);
								//if(paymentmethods[0].creditcard){
								//var creditCardId = paymentmethods[0].creditcard.paymentmethod.internalid;
								//console.log(creditCardId);
								if (FeeAdded != '') {

									cart.getPromotions().then(function (promotions) {
										//console.log(promotions);
										cart.removePromotion({ promocode_internalid: FeeAdded }).then(function (promotionRemoved) {
											//console.log('removed');
										})
									});
								}
								//}
							});
						}

						if (step.url === "review") {

							var liveOrderModel = liveOrder.getInstance();
							console.log(liveOrderModel);
							cart.getPaymentMethods().then(function (paymentmethods) {
								//console.log(paymentmethods[0].creditcard.paymentmethod.internalid);


								if (paymentmethods[0].creditcard || paymentmethods[0].type == "paypal") {

									if (paymentmethods[0].creditcard) var creditCardId = paymentmethods[0].creditcard.paymentmethod.internalid;

									if (creditCardId == undefined) {

										creditCardId = paymentmethods[0].internalid;
									}
									//console.log(creditCardId);
									if (creditCardId) {
										cart.getPromotions().then(function (promotions) {

											for (var i = 0; i < promotions.length; i++) {
												var promoID = promotions[i].internalid;
												var promoType = promotions[i].code;
												cart.removePromotion({ promocode_internalid: promoID }).then(function (promotionRemoved) {
													//console.log('removed');
												})
											}
										});


										cart.addPromotion({ promocode: fees[parseInt(creditCardId)] }).then(function (promotion) {
											//document.getElementByClassName('global-views-message-success alert')[0].style.display = 'none'
											FeeAdded = promotion.promotion.internalid;
											console.log(promotion);

										}, function () {
											//console.log("Could not add promotion.")
										});
									}
								}
							});
						} else if (step.url === 'shippingoptions') {
							//console.log(liveOrder.getInstance(), 'dir');

						}
					})


				})

			}


		};
	});

