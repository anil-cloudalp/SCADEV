
define(
	'STAXS.RequestShipAddress.RequestShipAddressModule'
,   [
		'STAXS.RequestShipAddress.RequestShipAddressModule.View',
		'Cart.Summary.View',
	    'Profile.Model',
		'Header.MiniCart.View',
		'Header.View',
		'Utils',
		'Address.Edit.View'
	]
,   function (
		RequestShipAddressModuleView,
		CartSummaryView,
	  	ProfileModel,
		HeaderMiniCartView,
		HeaderView,
		Utils,
		AddressEditView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var userprofilecomponent = container.getComponent("UserProfile");
			
			if(layout)
			{
				layout.addChildView('RequestshippingAddress', function() { 
					return new RequestShipAddressModuleView({ container: container });
				});

			}
		
			var hideproceedtochkout = false;

			userprofilecomponent.getUserProfile().done(function(profile) {

				if(profile.addresses.length > 0){
					hideproceedtochkout = false;
					container.hideproceedtochkout = hideproceedtochkout
					return new RequestShipAddressModuleView({ container: container });
		
				}else {
					hideproceedtochkout = true;
					container.hideproceedtochkout = hideproceedtochkout
					return new RequestShipAddressModuleView({ container: container });
				}
		});

		var showchkout = false;
		var  hidingbtninchkout = false;

		userprofilecomponent.getUserProfile().done(function(profile) {

			if(_.isUndefined(profile.addressbook)){
				showchkout = false;	
			}
			else{
				if(Utils.isInShopping()){
					if(profile.addressbook.length > 0){
							showchkout = true;		
					}else {
							showchkout = false;
					}
				}

			}
	
	});
	
_.extend(AddressEditView.prototype,{
	getContext: _.wrap(AddressEditView.prototype.getContext, function getContext(fn){
		var ret= fn.apply(this, _.toArray(arguments).slice(1));	
		if(SC.ENVIRONMENT.SCTouchpoint == "checkout"){
			hidingbtninchkout = true;
		}else{
			hidingbtninchkout = false;
		}
		ret.hidingbtninchkout = hidingbtninchkout;
		return ret
	})
})

_.extend(CartSummaryView.prototype,{
	getContext: _.wrap(CartSummaryView.prototype.getContext, function getContext(fn){
		var ret= fn.apply(this, _.toArray(arguments).slice(1));	

		ret.showchkout = true;
		return ret
	})
})
// HeaderView.prototype.initialize = _.wrap(HeaderView.prototype.initialize, function initialize(fn) {
// 	fn.apply(this, _.toArray(arguments).slice(1))
// 	$(window).scroll(function () {
// 	//  console.log("sticky", $('.sticky')[0].offsetHeight);
// 			var sticky = $('.sticky'),
// 			scroll = $(window).scrollTop();
// 	if (scroll >= $('.sticky')[0].offsetHeight) sticky.addClass('fixed');
// 	else sticky.removeClass('fixed');
// 	}); 
// })
_.extend(HeaderMiniCartView.prototype,{
	getContext: _.wrap(HeaderMiniCartView.prototype.getContext, function getContext(fn){
		var ret= fn.apply(this, _.toArray(arguments).slice(1));

		ret.hideproceedtochkout = hideproceedtochkout;
		return ret                        
	})
})

		}
	};
});
