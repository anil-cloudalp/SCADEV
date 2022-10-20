/// <amd-module name="ProductDetails.Full.View.Ext"/>
import * as _ from 'underscore';

import ProductDetailsFullView = require('../../../Advanced/ProductDetails/JavaScript/ProductDetails.Full.View');
import Utils = require('../../../Commons/Utilities/JavaScript/Utils');
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';
import ItemCollection = require('../../../Commons/Item/JavaScript/Item.Collection');
import ColorUtils = require('../../../extensions/ColorExt/JavaScript/ColorUtils');

_.extend(ProductDetailsFullView.prototype, {
  events: _.extend({}, ProductDetailsFullView.prototype.events, {
    'click .product-views-option-tile-input-picker': 'showStock'
  }),
beforeShowContent: _.wrap(ProductDetailsFullView.prototype.beforeShowContent, function beforeShowContent(fn) {
		var promise = fn.apply(this, _.toArray(arguments).slice(1));
		var promiseNew = jQuery.Deferred();
		var self = this;
		promise.always(function(){
			var familyName = self.model.get('item').get('custitem_appf_b2b_family_name');
      console.log("familyname",familyName);
			if(familyName){
				var options = {
					'custitem_appf_b2b_family_name': familyName,
					'fields': 'urlcomponent,itemoptions_detail'
				};
				self.colorMaps = new ItemCollection();
				self.colorMaps.fetch({data: options}).then(function(){
					promiseNew.resolve();
				});
			}
      else{
				promiseNew.resolve();
			}
		});
		return promiseNew;
	}),
  initialize: _.wrap(ProductDetailsFullView.prototype.initialize, function initialize(fn) {
    fn.apply(this, _.toArray(arguments).slice(1));
    var self = this;
    this.application.getLayout().on('afterAppendView', function() {
      var count = 0;
      var obj = {};
	  var invLocation = Configuration.get('InventoryCart.location') || 109; //9001 DISTR (ID: 109)
      var optionsLen = _.filter(self.model.get('options').models, function(model: any) {
          return model.get('isMandatory') && model.get('type') == 'select' && model.get('templateSelector') == "product_views_option_tile.tpl";
      });

      $('.product-views-option-tile-picker').each(function() {
        if ($(this).hasClass('active')) {
            obj[$(this).parent().parent().parent().attr('data-item-option-id').trim()] = $(this).text().trim();
            count++;
        }
      });
      var filteredArr = [];
      _.each(self.model.get('item').get('matrixchilditems_detail'), function(model: any) {
        filteredArr.push(model);
      });

      if (count == optionsLen.length && !_.isEmpty(obj)) {		  
        var res = self.filter(filteredArr, obj);
          var total_stock:any = 0;
        _.each(res, function(res: any) {
          if (!_.isUndefined(res.quantityavailable_detail)) {
            if (res.quantityavailable_detail.locations.length > 0) {
              _.each(res.quantityavailable_detail.locations, function(location: any) {
				  console.log(location);
				  if(location.internalid == invLocation) 
                total_stock = total_stock + location.quantityavailable;
              });
            }
          }
        });
		if(res.length)
		{
			$('.quantity-available-stock-value-qty').html(total_stock);
		} 
      }
    });
  }),

  showStock: function(e: any) {
    var obj = {};
    var self = this;
    var isOptionsAvailable = true;
    var count = 0;
	var invLocation = Configuration.get('InventoryCart.location') || 109; //9001 DISTR (ID: 109)
    _.each(this.model.get('options').models, function(model: any) {
      if (model.get('isMandatory') && model.get('type') == 'select') {
        if (model.get('values').length < 1) {
          isOptionsAvailable = false;
        }
      }
    });

    var optionsLen = _.filter(this.model.get('options').models, function(model: any) {

      return model.get('isMandatory') && model.get('type') == 'select' && model.get('templateSelector') == "product_views_option_tile.tpl";

    });


    if (isOptionsAvailable) {
      var label = $(e.currentTarget).parent().text().trim();
      var itemOptionId = $(e.currentTarget).parent().parent().parent().parent().attr('data-item-option-id').trim();
      obj[itemOptionId] = label;
      count++;

      $('.product-views-option-tile-picker').each(function() {

        if ($(this).hasClass('active')) {
          if (label != $(this).text().trim() && itemOptionId != $(this).parent().parent().parent().attr('data-item-option-id')) {

            obj[$(this).parent().parent().parent().attr('data-item-option-id').trim()] = $(this).text().trim();
            count++;
          }

        }
      });

      var filteredArr = [];
      _.each(self.model.get('item').get('matrixchilditems_detail'), function(model: any) {
        filteredArr.push(model);
      });

      if (count == optionsLen.length && !_.isEmpty(obj)) {
        var res = this.filter(filteredArr, obj);
          var total_stock:any = 0;
        _.each(res, function(res: any) {
          if (!_.isUndefined(res.quantityavailable_detail)) {
            if (res.quantityavailable_detail.locations.length > 0) {
              _.each(res.quantityavailable_detail.locations, function(location: any) {
				  if(location.internalid == invLocation) 
                total_stock = total_stock + location.quantityavailable;
              });
            }
          }
        });
        $('.quantity-available-stock-value-qty').html(total_stock);
      }
    }
  },
  filter: function(arr: any, criteria: any) {
    return arr.filter(function(obj: any) {
      return Object.keys(criteria).every(function(c) {
        return obj[c] == criteria[c];
      });
    });
  },
getContext: _.wrap(ProductDetailsFullView.prototype.getContext, function getContext(fn) {
		var retObj = fn.apply(this, _.toArray(arguments).slice(1));
		
	
		var colorObj = this.model.getOption('custcol2');
		var internalid = this.model.getItem().get('internalid');
		var selectedColorId = (colorObj && colorObj.get('value') && colorObj.get('value').internalid);
		
		var ccode = (colorObj && colorObj.get('value') && colorObj.get('value').label);
		
		var colObj_1:any = ColorUtils.getColorInfo(ccode,internalid);
				
		retObj.colorValue = _.has(colObj_1,'label')? colObj_1['label'] : ccode;
			
		var self = this;
		
		retObj.colorMaps = _.map(this.getColorMaps(),function(obj:any){
			
			if((obj.colorId == selectedColorId) && (obj.id == internalid)){
				obj.selected = true;
			}
			
			var colObj:any = ColorUtils.getColorInfo(obj.color,obj.id);
				
			obj.colorValue = _.has(colObj,'hexcode')? colObj['hexcode'] : '';
			obj.colorLabel = _.has(colObj,'label')? colObj['label'] : '';
			
			
			return obj;
		});
		
		return retObj;
  }),
  getColorMaps: function(){
	  
		var colorMaps = [];
		
		if(this.colorMaps && this.colorMaps.length){

			this.colorMaps.each(function(model:any){
				
				var colorObj:any = model.getOption('custcol2');
				
				var colorOpts = (colorObj && colorObj.get('values'))? colorObj.get('values') : [];
				
				_.each(colorOpts,function(opt:any){
					
					if(_.has(opt,'internalid')){
						colorMaps.push({
						  id: model.get('internalid'),
						  url: model.get('urlcomponent'),
						  colorId: opt.internalid,
						  color: opt.label
						});
					}
				});
				
			});
		}
	    else{
			var model = this.model.get('item');
			var colorObj:any = model.getOption('custcol2');
				
			var colorOpts = (colorObj && colorObj.get('values'))? colorObj.get('values') : [];
			
			_.each(colorOpts,function(opt:any){
				
				if(_.has(opt,'internalid')){
					colorMaps.push({
					  id: model.get('internalid'),
					  url: model.get('urlcomponent'),
					  colorId: opt.internalid,
					  color: opt.label
					});
				}
			});
		}
		
		return colorMaps;
  }

});

export = ProductDetailsFullView;
