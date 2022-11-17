// @module Acme.QuantityAvailExt.QuantityExt
define('Acme.QuantityAvailExt.QuantityExt.View'
,	[
	'acme_quantityavailext_quantityext.tpl'
	
	,	'Acme.QuantityAvailExt.QuantityExt.SS2Model'
	
	, 'Backbone'
	
	, "Utils"
    ]
, function (
	acme_quantityavailext_quantityext_tpl
	
	,	QuantityExtSS2Model
	
	, Backbone
	, Utils
)
{
    'use strict';

	// @class Acme.QuantityAvailExt.QuantityExt.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_quantityavailext_quantityext_tpl

	,	initialize: function (options) {
		        this.model.on('change', this.render, this);
	    }

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Acme.QuantityAvailExt.QuantityExt.View.Context
	,	getContext: function getContext()
		{
			//@class Acme.QuantityAvailExt.QuantityExt.View.Context
		console.log("this.application", Utils.container);
		var container = Utils.container;
	    var PDP = container.getComponent("PDP");
			var self = this;
		var locationInfo = [];
		var backorderInfo = [];
			var ItemInfo = PDP.getItemInfo();
		var itemLocation = ItemInfo.item.quantityavailable_detail.locations;
		var QuantityBackordereddetails = ItemInfo.item.quantitybackordered_detail.locations;
		var AllLOcations = container.AllLocationDetails;
		
		if (ItemInfo.item.matrixchilditems_detail) {
			var isParentItem = true;
			for (var s = 0; s < ItemInfo.item.matrixchilditems_detail.length; s++){
				if (ItemInfo.item.matrixchilditems_detail[s].itemid == self.model.getSku()) {
					isParentItem = false;
					itemLocation = ItemInfo.item.matrixchilditems_detail[s].quantityavailable_detail.locations;
					QuantityBackordereddetails = ItemInfo.item.matrixchilditems_detail[s].quantitybackordered_detail.locations;
				}
			}
			 
			if (isParentItem) {
				itemLocation = [];
			}
		} 

		for (var i = 0; i < AllLOcations.length; i++){
					for (var j = 0; j < itemLocation.length; j++){
						if (AllLOcations[i].id == itemLocation[j].internalid) {
							var obj = {};
							obj.name= AllLOcations[i].name;
							obj.QuantityAvailable = itemLocation[j].quantityavailable;
							locationInfo.push(obj);
							}
					}
				}
			
			   	for(var a = 0; a < AllLOcations.length; a++){
					for (var b = 0; b < QuantityBackordereddetails.length; b++){
						if (AllLOcations[a].id == QuantityBackordereddetails[b].internalid) {
							var obj = {};
							obj.name= AllLOcations[a].name;
							obj.quantitybackordered = QuantityBackordereddetails[b].quantitybackordered;
							backorderInfo.push(obj);
							}
					}
				}
			
			
			for (var l = 0; l < backorderInfo.length; l++){
				for (var m = 0; m < locationInfo.length; m++){
					if (backorderInfo[l].name == locationInfo[m].name) {
						locationInfo[m].quantitybackordered = backorderInfo[l].quantitybackordered;
						}
				}
			}


			var Locationname = [];
			_.each(locationInfo, function (locationnames) {
				Locationname.push(locationnames.name);
			})
			
			for (var h = 0; h < backorderInfo.length; h++){
				console.log("found", backorderInfo[h].name);
				var found = Locationname.find(element => element == backorderInfo[h].name);
				if (!found) {
					locationInfo.push(backorderInfo[h]);
				}
			}
		
		this.message = this.message || 'Hello World!!'
		console.log("length",locationInfo.length > 0);
			return {
				locationInfo: locationInfo,
				hasInventoryInfo : locationInfo.length > 0
			};
		}
	});
});
