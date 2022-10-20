
define(
	'TCI.ManageOrdersExt.ManageOrdersExt.Header'
,   [
		'TCI.ManageOrdersExt.ManageOrdersExt.HeaderLink.View',
		'Header.View'
	]
,   function (
		ManageMyOrderHeaderLink,
		HeaderView
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
			var layout = container.getComponent('Layout');
			var PageType  = container.getComponent('PageType');

			HeaderView.addChildViews({
				'ManageOrderLink': function wrapperFunction() {
					return function() {
						return new ManageMyOrderHeaderLink();
					};
				}
			});

			// console.log('PageType', PageType);
			// console.log('PageType', layout);

		}
	};
});
