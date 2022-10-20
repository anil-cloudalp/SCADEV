
define(
	'CA.SpecialOrderItems.Specialorderitem'
,   [
		'CA.SpecialOrderItems.Specialorderitem.View',
		"ProductDetails.Full.View",
		"underscore",
		"Facets.ItemCell.View"
	]
,   function (
		SpecialorderitemView,
		PDPFull,
		_,
		FacetsItemCellView
	)
{
	'use strict';
	
	return  {
		mountToApp: function mountToApp (container)
		{
			
			/** @type {LayoutComponent} */
			var PDP = container.getComponent("PDP");
			var PLP = container.getComponent("PLP");

		if (PDP) {
			PDP.on("beforeShowContent", function () {
				PDPFull.prototype.getContext = _.wrap(PDPFull.prototype.getContext, function (fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					var ItemInfo = PDP.getItemInfo();
					if (ItemInfo.item && ItemInfo.item.custitem_special_order_item) {
						context.is_special_order_item = true;
					} else {
						context.is_special_order_item = false;
					}
					return context;
					})
				})
		}
		if (PLP) {
			PLP.on("beforeShowContent", function () {
					FacetsItemCellView.prototype.getContext = _.wrap(FacetsItemCellView.prototype.getContext, function (fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						if (this.model && this.model.get("custitem_special_order_item")) {
								context.is_special_order_item = true;
						} else {
								context.is_special_order_item = false;
						}
						return context;
					});
				})
			}
		}
	};
});
