
define(
	'Acme.BreadCrumCustomization.PDPBreadCrumCustomization'
,   [
		'Acme.BreadCrumCustomization.PDPBreadCrumCustomization.View'
	, 	'GlobalViews.Breadcrumb.View'
	,	"ProductDetails.Full.View"
	]
,   function (
			PDPBreadCrumCustomizationView,
			GlobalViewsBreadcrumbView,
			PDPFull
		)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var PDP = container.getComponent("PDP");
				if (PDPFull) {
					GlobalViewsBreadcrumbView.prototype.getContext = _.wrap(GlobalViewsBreadcrumbView.prototype.getContext, function getContext(fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
							if (context.pages.length > 1) {
								for (var i = 0; i < context.pages.length; i++){
									if (i == context.pages.length - 1) {
										var ItemInfo = PDP.getItemInfo();
										if (ItemInfo) {
												context.pages[i].text = ItemInfo.item.displayname;
										}
									}
								}
							}
						return context;
					})
				}
		}
	};
});
