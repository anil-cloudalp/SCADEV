
define(
	'Kodella.KDGlobalExtension.KDGlobalExtension'
,   [
		'Kodella.KDGlobalExtension.KDGlobalExtension.View',
		'jQuery'
	]
,   function (
		KDGlobalExtensionView,
		jQuery
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */


			// jQuery(document).ready(function(){
			// 	if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/)) {
			// 		jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
			// 	}else if(navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/) && navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') ){
			// 		jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
			// 	}

			// });

			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.on('afterShowContent', function(){


				// if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/)) {
				// 	jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
				// }else if(navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/) && navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') ){
				// 	jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
				// }

                var casesButton = document.querySelectorAll('[data-id="cases"]');
				if(casesButton.length > 0){
					casesButton[0].remove();
				}

				var casesMenu = document.querySelectorAll("[data-permissions='lists.listCase.2']")
				if(casesMenu.length > 0){
					casesMenu[0].remove();	
				}

				
				var casesMobile = document.querySelectorAll("[name='submitnewcase']")
				if(casesMobile.length > 0){
					casesMobile[0].remove();	
				}


				var li = document.querySelectorAll(".list-type");	
				var ListType = jQuery('.list-type').parent().children('ul');
				 for (var i = 0; i<ListType.length; i++) {
				   ListType[i].firstElementChild.classList.add("custom-change-submenu-only");		
					 }		  
					 jQuery('.custom-change-submenu-only').children('ul').css('display', 'block');
					 jQuery('.cms-menu').css('position', 'initial');
					 jQuery('.list-type').parent().css('position', 'relative');
				});
			}

		}
	};
});
