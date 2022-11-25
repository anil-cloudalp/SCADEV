define(
	'CLOUDALPSCS.ConfigureItemsExt.ConfigureItemsModule', [
		'CLOUDALPSCS.ConfigureItemsExt.ConfigureItemsModule.View',
		'ConfigureItems.Collection',
		 'ReturnAuthorization.Form.View'
	],
	function (
		ConfigureItemsModuleView, ConfigureItemsCollection , ReturnAuthorizationFormView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				console.log("dfjb")
				console.log(ReturnAuthorizationFormView.ReturnAuthorizationFormView);

				// ReturnAuthorizationFormView.ReturnAuthorizationFormView.prototype.saveForm = _.wrap(ReturnAuthorizationFormView.ReturnAuthorizationFormView.prototype.saveForm, function saveForm(e) {
				// 	e.preventDefault();
				// 	// console.log('test', fn);
				// 	// debugger
				// 	// alert("hello");
				// })

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				var myaccountmenu = container.getComponent("MyAccountMenu");
				var pageTypeComponent = container.getComponent("PageType");
				var loginregister = container.getComponent("LoginRegisterPage");


				var pageType = {
					name: 'Configure Items',
					view: ConfigureItemsModuleView,
					routes: ['configure-items']
				}
				pageTypeComponent.registerPageType(pageType);

				var miarewardsmenugroup = {
					id: "configure_items",
					name: "Configure Items",
					index: 10,
					url: "configure-items"
				}
				myaccountmenu.addGroup(miarewardsmenugroup);
				
			}
		};
	});