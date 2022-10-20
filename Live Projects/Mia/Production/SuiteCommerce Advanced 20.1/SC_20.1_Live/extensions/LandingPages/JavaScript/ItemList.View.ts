
/// <amd-module name="ItemList.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as item_list_tpl from 'item_list.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

import ProfileModel = require('../../../Commons/Profile/JavaScript/Profile.Model');
import Configuration = require('../../../Commons/Utilities/JavaScript/SC.Configuration');
import Session = require('../../../Commons/Session/JavaScript/Session');
import ItemCellView = require('./ItemCell.View');

// @module ItemList.View @extends Backbone.View
const ItemListView: any = BackboneView.extend({
    template: item_list_tpl,

    title: Utils.translate('Inventory Availability | Mia Telecomms'),

    page_header: Utils.translate('Inventory Availability'),

    attributes: {
        id: 'item_list',
        class: 'plp_item_list'
    },

    events: {
		'click [name="item_list_grab"]': 'grabItemList',
		'click [name="expandIcon"]': 'expandIcon',
		'click [data-action="expand-it"]': 'expandIcon',
		'click [data-action="show-items"]': 'grabItemList',
		'click [name="grap_all_items"]': 'grabAllItemList'
		
    },
    initialize: function() {
		const Profile = ProfileModel.getInstance();
		this.isChannelUcUser = ((Profile.get('isLoggedIn') === 'T') && (Profile.get('isChannelUcUser') == true))? true:false;
		
		
	},
	grabAllItemList: function(e){
		
		const promise = jQuery.Deferred();
		
		this.items = [];
		this.categoryInventory = this.$(e.currentTarget).attr('data-url');
		this.$(e.currentTarget).text('Processing');
		this.$(e.currentTarget).attr('disabled',true);
		
		if(this.allItemsData && this.allItemsData.length > 0){
			
			this.items = this.allItemsData;
			
			promise.resolve();
			
		}
		else{
			this.getAllItems(this.ItemSearchUrl(''),promise);
		}
		var self = this;
		
		promise.then(function(){
			
			if(!self.allItemsData)
				self.allItemsData = self.items;
			
			var categoriesWithItems = self.getCategoriesWithItems();
			
			self.createExcel(categoriesWithItems);
			
			self.$(e.currentTarget).text('Download Inventory  - Excel');
			self.$(e.currentTarget).attr('disabled',false);
		});
	},
	createExcel: function(categoriesWithItems){
		
		var excelData = `<?xml version="1.0"?>
						<?mso-application progid="Excel.Sheet"?>
						<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
						 xmlns:o="urn:schemas-microsoft-com:office:office"
						 xmlns:x="urn:schemas-microsoft-com:office:excel"
						 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
						 xmlns:html="http://www.w3.org/TR/REC-html40">`;

		excelData += `<Styles><Style ss:ID="s71">
					   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
					   <Font ss:Color="#FFFFFF" ss:Bold="1"/>
					   <Interior ss:Color="#DD7E43" ss:Pattern="Solid"/>
					  </Style>
					  <Style ss:ID="s72">
					   <Interior ss:Color="#FCD5B4" ss:Pattern="Solid"/>
					  </Style>
					  <Style ss:ID="s73">
					   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
					  </Style>
					  <Style ss:ID="s74">
					   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
					  </Style>
					  <Style ss:ID="s75">
					   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
					  </Style>
					  <Style ss:ID="s76">
					   <Alignment ss:Horizontal="Left" ss:Vertical="Top" ss:WrapText="1"/>
					   <Font ss:Size="20" ss:Color="#FFFFFF"/>
					   <Interior ss:Color="#DD7E43" ss:Pattern="Solid"/>
					  </Style>
					 </Styles>`;
		if(this.isChannelUcUser){
			excelData += '<Worksheet ss:Name="Channel UC Inventory List">';
		}else{
			excelData += '<Worksheet ss:Name="Mia Distribution Inventory List">';
		}
		
			
		excelData += '<Table><Column ss:AutoFitWidth="0" ss:Width="300" ss:StyleID="s73"/><Column ss:AutoFitWidth="0" ss:Width="150" ss:StyleID="s73"/><Column ss:AutoFitWidth="0" ss:Width="300" ss:StyleID="s73"/><Column ss:AutoFitWidth="0" ss:Width="70"  ss:StyleID="s74"/><Column ss:AutoFitWidth="0" ss:Width="100"/>';
		
		if(this.isChannelUcUser){
			excelData += `<Row ss:Height="26.25">
					<Cell ss:StyleID="s76"><Data ss:Type="String">Channel UC</Data></Cell>
				   </Row>
				   <Row ss:AutoFitHeight="0" ss:Height="110"><Cell ss:StyleID="s75"><Data ss:Type="String">Unit 4, 7-9 Orion Road,Lane Cove West NSW&#10;2066&#10;Australia&#10;PH: 1300 768 548&#10;sales@channeluc.com</Data></Cell>
				   </Row>`;
		}else{
			excelData += `<Row ss:Height="26.25">
					<Cell ss:StyleID="s76"><Data ss:Type="String">MiaDistribution</Data></Cell>
				   </Row>
				   <Row ss:AutoFitHeight="0" ss:Height="110"><Cell ss:StyleID="s75"><Data ss:Type="String">Unit 4, 7-9 Orion Road,Lane Cove West NSW&#10;2066&#10;Australia&#10;PH: 1300 768 548&#10;sales@miadistribution.com.au</Data></Cell>
				   </Row>`;
		}
	
				   
		_.each(categoriesWithItems,function(categoriesWithItem:any){
			
			var catName = categoriesWithItem.category;
			catName = catName.replace(/\/shop-main\/|-shop/gi,'');
			catName = catName.replace(/\//g,': ');
			catName = catName.replace(/-/g,' ');
			catName = catName.toUpperCase();
			
			excelData += '<Row><Cell ss:MergeAcross="4" ss:StyleID="s71"><Data ss:Type="String">' + catName + '</Data></Cell></Row>';
			
			excelData += '<Row><Cell ss:StyleID="s72"><Data ss:Type="String">ITEM NAME</Data></Cell><Cell ss:StyleID="s72"><Data ss:Type="String">MPN</Data></Cell><Cell ss:StyleID="s72"><Data ss:Type="String">DESCRIPTION</Data></Cell><Cell ss:StyleID="s72"><Data ss:Type="String">IN STOCK</Data></Cell><Cell ss:StyleID="s72"><Data ss:Type="String">PRICE</Data></Cell></Row>';
			
			_.each(categoriesWithItem.items,function(item:any){
			
				
				var desc = String(item.storedescription).replace('<br>','<br/>');
			
				excelData += '<Row><Cell><Data ss:Type="String">'+item.storedisplayname2 +'</Data></Cell><Cell><Data ss:Type="String">' + item.mpn + '</Data></Cell><Cell><Data ss:Type="String">' + desc + ' </Data></Cell><Cell><Data ss:Type="Number">' + item.instock + '</Data></Cell><Cell><Data ss:Type="String">' + item.onlinecustomerprice_formatted + '</Data></Cell></Row>';
			});
		});
		excelData += '</Table></Worksheet></Workbook>';
		this.downloadExcel(excelData); 
	},
	downloadExcel: function(data){
		
		var blob = new Blob([data], { type: "application/vnd.ms-excel" });
		
		var link = URL.createObjectURL(blob);
		var a = document.createElement("a");
		
		if(this.isChannelUcUser){
			a.download = 'Channel UC Inventory List.xls';
		}else{
			a.download = 'Mia Distribution Inventory List.xls';
		}
		
		a.href = link;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	},
	getCategoriesWithItems: function(){
		var categories = [];
		var categoriesWithItems = [];
		var self = this;
		_.each(self.items,function(item:any){
			var cats = item.commercecategory.categories || [];
			
			_.each(cats,function(cat:any){
				categories = _.union(categories,cat.urls);
			});
			
		});
		
		categories = _.uniq(categories);
		
		if(this.categoryInventory){
			categories = _.filter(categories,function(categoryUrl){return (categoryUrl.indexOf(self.categoryInventory) != -1);});
		}
		_.each(categories,function(categoryUrl){
			var obj:any = {'category': categoryUrl};
			obj.items = _.filter(self.items, function(item:any){ 
				var match = false;
				var cats = item.commercecategory.categories || [];
				
				_.each(cats,function(cat:any){
					if(cat.urls.indexOf(categoryUrl) != -1){
						match = true;
					}
				});
				
				return match; 
			});
			categoriesWithItems.push(obj);
		});
		
		return _.sortBy(categoriesWithItems, 'category');
	},
	expandIcon: function(e)
	{
		e.stopPropagation();
		var expander = $(e.currentTarget);
		
		if(expander.is('a')){
			expander = (expander.next().is('button'))? expander.next().next(): expander.next();
		}
		
		expander.next().slideToggle();
		
		if(expander.is('.expanded'))
			expander.removeClass();
		else
			expander.addClass('expanded');
	},
	grabItemList: function(e){
		const $target = jQuery(e.currentTarget);
		const promise = jQuery.Deferred();
		var categoryUrl = $target.attr('data-url');
		this.items = [];
		
		this.getAllItems(this.ItemSearchUrl(categoryUrl),promise);
		var self = this;
		promise.then(function(){
			
			var view = new ItemCellView({items: self.items});
			view.render();
			$target.next().html(view.el);
			$target.addClass('active');
		});
		
	},
    ItemSearchUrl: function(categoryUrl) {
        const profile = ProfileModel.getInstance();
        var url = Utils.addParamsToUrl(
            profile.getSearchApiUrl(),
            _.extend(
                Configuration.get('matrixchilditems.enabled') &&
                    Configuration.get('matrixchilditems.fieldset')
                    ? {
                          matrixchilditems_fieldset: Configuration.get('matrixchilditems.fieldset')
                      }
                    : {},
                {fieldset: "itemlist",limit:100},
                Session.getSearchApiParams()
            )
			
        );
        if(categoryUrl)
			url = Utils.addParamsToUrl(url, {'commercecategoryurl': categoryUrl});
        return url;
    },
	setQtyAvailable: function(items){
		_.each(items,function(item:any){
			
			var quantityavailable_detail = item.quantityavailable_detail;
			var qtyAvailable:any = {};
			
			if(_.has(quantityavailable_detail,'locations')){
				if(quantityavailable_detail.locations.length > 0){
					qtyAvailable = _.findWhere(quantityavailable_detail.locations, {internalid: 6});  //Lane Cove
				}
			}
			item.instock = _.has(qtyAvailable,'quantityavailable')? qtyAvailable.quantityavailable : 0;
		});
		
		return items;
	},
	getAllItems: function(url,promise){
		var self = this;
		jQuery.get(url,function(itemsRes){

			if(_.has(itemsRes,'total')){
				self.items = _.union(self.items,itemsRes.items);
			}
			if(_.has(itemsRes,'links')){
				var links:any = _.findWhere(itemsRes.links,{'rel': 'next'});
				
				var href = _.has(links,'href')? links.href: '';
				
				if(href){
					self.getAllItems(href,promise);
				}
				else{
					self.items = self.setQtyAvailable(self.items);
					promise.resolve();
				}
			}
		});
	},
    getContext: function() {
		
        return {
	
            categories: (SC.CATEGORIES && SC.CATEGORIES.length >0)?SC.CATEGORIES[0].categories: [],
			isLogin: (ProfileModel.getInstance().get('isLoggedIn') === 'T'),
			loginUrl: Session.get('touchpoints.login') + '&origin=home&origin_hash=inventory-availability'
        };
    }
});

export = ItemListView;
