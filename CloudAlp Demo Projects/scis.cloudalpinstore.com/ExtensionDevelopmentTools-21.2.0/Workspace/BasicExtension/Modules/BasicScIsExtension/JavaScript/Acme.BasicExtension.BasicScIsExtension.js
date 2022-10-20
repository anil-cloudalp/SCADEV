
define(
	'Acme.BasicExtension.BasicScIsExtension', []
,   function ()
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			//alert('Hello World I\'m an Extension!!');
			var scislayout = container.getComponent('SCISLayout');
			console.log("SCISLAYOUT", scislayout);
			var cart = container.getComponent('Cart');

			cart.on('beforeAddLine', function () {
				console.log("this will trigger before adding the line to cart");
			})

			console.log("Layout component",container.getComponent('Layout'));
			console.log("Scis Layout Component",container.getComponent('SCISLayout'));
			console.log("Cart component", cart);

			// cart.on('beforeVoidLine', function () {
			// 	// console.log("this will trigger before adding the line to cart");
			// 	var options = {
			// 			title: 'Please Confirm Once Again',
			// 			toastType: 'info',
			// 			toastContent: 'Are You Sure...?',
			// 			messageContent: 'Tap OK if you want to Void this line. tap Cancel to unvoid this item.',
			// 			confirmationButtonText: 'OK',
			// 			cancelationButtonText: 'Cancel'
			// 	};

				// cart.addPromotion({
				// 	promocode: 'SCADEMO'
				// }).fail(function(error) {
				// 	alert(error);
				// });

				// if (cart) {
				// 	console.log("get lines", cart.getLines());
				// }
				

			// 	var option = {
			// 			title: 'message popup',
			// 			toastType: 'info',
			// 			toastContent: 'You Clicked On Ok Button',
			// 			messageContent: 'this item will be voided',
			// 			confirmationButtonText: 'OK'
			// 	};

			// 	console.log("before showing confirmation box");
			// 	return scislayout.showConfirmationPopup(options).then(function (params) {
			// 		if (params.action === 'ok'){
			// 			console.log('OK button was clicked.');
			// 			return scislayout.showMessagePopup(option).then(function () {
			// 				console.log("you clicked on okay button");
			// 			})
			// 		}
			// 		else if (params.action === 'cancel'){
			// 			throw new Error('Cancel button was clicked.');
			// 		}
			// 	}).fail(function(error){
			// 		console.log(error);
			// 	});
			// })

			
			// cart.addLine({
			// line: {
			// 	quantity: 1,
			// 	item: {
			// 	internalid: 5480
			// 	}
			// }
			// }).fail(function () {
			// 	console.log("item not added");
			// }).done(function () {
			// 	console.log("item added successfully");
			// 	cart.voidLine({
			// 		line_id: '1'
			// 	});
			// 	cart.getSummary().then(function(summary){
			// 		console.log(summary);
			// 	});
			// })
		}
	};
});
