
define(
	'TCI.ManageOrdersExt.ManageOrdersExt'
,   [
		'TCI.ManageOrdersExt.TrackMyOrder.View',
		'TCI.ManageOrdersExt.RequestAnInvoice.View',
		'TCI.ManageOrdersExt.RequestAReturn.View',
		'TCI.ManageOrdersExt.ManageOrdersExt.HeaderLink.View',
		'Header.View'
	]
,   function (
		TrackMyOrderView,
		RequestAnInvoice,
		RequestAReturn,
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
			PageType.registerPageType({
                name: 'manageorders_trackmyorder',
                routes: ['track-your-order'],
                view: TrackMyOrderView,
                defaultTemplate: {
                    name: 'tci_manageordersext_trackmyorder.tpl',
                    displayName: 'Track Your Order'
                },
				application: this.application
            });

			PageType.registerPageType({
                name: 'manageorders_requestaninvoice',
                routes: ['request-an-invoice'],
                view: RequestAnInvoice,
                defaultTemplate: {
                    name: 'tci_manageordersext_requestaninvoice.tpl',
                    displayName: 'Request An Invoice'
                },
				application: this.application
            });

			PageType.registerPageType({
                name: 'manageorders_requestanreturn',
                routes: ['request-a-return'],
                view: RequestAReturn,
                defaultTemplate: {
                    name: 'tci_manageordersext_requestareturn.tpl',
                    displayName: 'Request A Return'
                },
				application: this.application
            });

			// PageType.registerPageType({
            //     name: 'manageorders_headerlink',
            //     routes: ['manage-orders'],
            //     view: ManageMyOrderHeaderLink,
            //     defaultTemplate: {
            //         name: 'tci_manageordersext_manageordersext_header_link.tpl',
            //         displayName: 'Manage My Orders'
            //     },
			// 	application: this.application
            // });
			HeaderView.addChildViews({
				'ManageOrderLink': function wrapperFunction() {
					return function() {
						return new ManageMyOrderHeaderLink();
					};
				}
			});
			HeaderView.addChildViews({
				'ManageOrderLink': function wrapperFunction() {
					return function() {
						return new ManageMyOrderHeaderLink();
					};
				}
			});


			console.log('PageType', PageType);
			console.log('PageType', layout);

		}
	};
});
