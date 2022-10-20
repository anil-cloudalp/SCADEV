
define(
	'CloudAlp.PromoLimit.PromoLimit'
	, [
		'CloudAlp.PromoLimit.PromoLimit.View',
		'Cart.Promocode.List.Item.View'
	]
	, function (
		PromoLimitView,
		CartPromocodeListItemView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');

				_.extend(CartPromocodeListItemView.prototype, {
					getContext: _.wrap(CartPromocodeListItemView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));

						return ret;

					})
				});



				// if(layout)
				// {
				// 	layout.addChildView('Header.Logo', function() {
				// 		return new PromoLimitView({ container: container });
				// 	});
				// }

			}
		};
	});
