
define(
	'TCI.ManageOrdersExt.TrackMyOrder'
,   [
		'TCI.ManageOrdersExt.TrackMyOrder.View'
	]
,   function (
		TrackMyOrderView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{			
			/** @type {LayoutComponent} */
			var pageType = container.getComponent('PageType');
			
			// console.log('pageType', pageType);
			pageType.registerPageType({
                name: 'manageorders_trackmyorder',
                routes: ['track-your-order'],
                view: TrackMyOrderView,
                defaultTemplate: {
                    name: 'tci_manageordersext_trackmyorder.tpl',
                    displayName: 'Track Your Order'
                }
            });

		}
	};
});
