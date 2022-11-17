
define(
	'Acme.QuantityAvailExt.QuantityExt'
,   [
		 'Acme.QuantityAvailExt.QuantityExt.View',
	     'ProductDetails.Full.View',
		 'Acme.QuantityAvailExt.QuantityExt.Model',
		'jQuery',
		 "Utils"
	]
,   function (
		QuantityExtView,
		PDPFull,
		QuantityAvailableExtModel,
		jQuery,
		Utils
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			/** @type {LayoutComponent} */

			this.application = container;
			var Promise = jQuery.Deferred();
			Utils.container = container;
			var model = new QuantityAvailableExtModel();
			model.fetch().then(function (res) {
				console.log("res");
				container.AllLocationDetails = res;
				Promise.resolve();
			});
			this.application.waitForPromise(Promise);
			var layout = container.getComponent('Layout');
			var PDP = container.getComponent("PDP");
			var PDPFULLChildViews = PDPFull.prototype.childViews;				
			PDPFULLChildViews.QuantityAvailView = function () {
				return new QuantityExtView({
					model: this.model
				});
			}
			PDPFull.prototype.childViews = PDPFULLChildViews;


			if (PDP) {
				// PDP.on("afterShowContent", function () {
				// 	PDPFull.prototype.getContext = _.wrap(PDPFull.prototype.getContext, function (fn) {  
				// 		var context = fn.apply(this, _.toArray(arguments).slice(1));
				// 		var locationInfo = [];
				// 		var ItemInfo = PDP.getItemInfo();
				// 		console.log("itemInfo", ItemInfo);
				// 		var itemLocation = ItemInfo.item.quantityavailable_detail.locations;
				// 		console.log('itemLocation', itemLocation);
				// 		var AllLOcations = container.AllLocationDetails;
						
				// 	if (ItemInfo.item.matrixchilditems_detail) {
				// 		console.log("get Sku", this.model.getSku());
				// 	} else {
				// 		for(var i = 0; i < AllLOcations.length; i++){
				// 			for (var j = 0; j < itemLocation.length; j++){
				// 				if (AllLOcations[i].id == itemLocation[j].internalid) {
				// 					console.log(AllLOcations[i].name);
				// 					console.log(itemLocation[j]);
				// 					var obj = {};
				// 					obj.name= AllLOcations[i].name;
				// 					obj.QuantityAvailable = itemLocation[j].quantityavailable;
				// 					locationInfo.push(obj);
				// 				}
				// 			}
				// 		}
				// 	}
						
				// 		console.log("this", locationInfo);
				// 		context.locationInfo = locationInfo;
				// 		return context;
				// 	})
				// })

				// if (layout) {
				// 	layout.addChildView('quantity-Available-per-location', function () {
				// 		return new QuantityExtView({ container: container });
				// 	});
				// }

				// PDP.on("afterOptionSelection", function (option) {
				// 	console.log("after Option selection 1", PDP.getItemInfo());
				// 	PDPFull.prototype.getContext();
				// 	// PDPFull.prototype.getContext = _.wrap(PDPFull.prototype.getContext, function (fn) { 
				// 	// 	var context = fn.apply(this, _.toArray(arguments).slice(1));
				// 	// 	console.log("after Options selection");
				// 	// 	return context;
				// 	// });
				// })

			}
		}
	};
});
