
define(
	'Acme.ScisLayoutCustomizations.ScisLayoutCustomization', []
,   function ()
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			var scislayout = container.getComponent('SCISLayout');
			var cart = container.getComponent('Cart');
			cart.on('beforeVoidLine', function () {
				var options = {
						title: 'Void The Item',
						toastType: 'info',
						toastContent: 'Are you Sure....?',
						messageContent: 'Tap OK if you want to Void this line.',
						confirmationButtonText: 'OK',
						cancelationButtonText: 'Cancel'
				};
				return scislayout.showConfirmationPopup(options).then(function (params) {
					if (params.action === 'ok'){
						console.log('OK button was clicked.');
					}
					else if (params.action === 'cancel'){
						throw new Error('Cancel button was clicked.');
					}
				}).fail(function(error){
					console.log(error);
				});
			});
			cart.on('afterReturnLine', function () {
				var option = {
						title: 'RETURN ITEM',
						toastType: 'info',
						toastContent: 'You Clicked On return Button',
						messageContent: 'this item is Returned',
						confirmationButtonText: 'OK'
				};
				return scislayout.showMessagePopup(option).then(function () {
						console.log("you clicked on okay button");
				})
			})
		}
	};
});
