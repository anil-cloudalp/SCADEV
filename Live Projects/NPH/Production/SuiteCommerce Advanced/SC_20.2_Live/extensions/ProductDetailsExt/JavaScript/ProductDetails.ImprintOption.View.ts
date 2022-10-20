/// <amd-module name="ProductDetails.ImprintOption.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as product_details_imprint_option_tpl from 'product_details_imprint_option.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');
import LiveOrderLineModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Line.Model');
import CartConfirmationHelpers = require('../../../Commons/Cart/JavaScript/Cart.Confirmation.Helpers');
import ItemCollection = require('../../../Commons/Item/JavaScript/Item.Collection');
import ProductModel = require('../../../Commons/Product/JavaScript/Product.Model');

const CustomView: any = BackboneView.extend({

		template: product_details_imprint_option_tpl

	,	events: {
			'change [name="imprint-options"]': 'imprintInputs'
		,	'change .imprint-options-values': 'setImprintOptions'
		}
	,	initialize: function initialize ()
		{
			this.searchRes = this.options.searchRes;
			
			this.results = [];
			this.locArr = [];
			this.imprintOptionArr = [];
			
			if(_.has(this.options.searchRes,'results')){
				this.results = this.options.searchRes.results;
				this.locArr = this.options.searchRes.locArr;
				this.imprintOptionArr = this.options.searchRes.imprintOptionArr;
			}
		}
	,	setImprintOptions: function(e)
		{	
			var thisEl = $(e.currentTarget);
			var value = thisEl.val();
		 
			var chk = thisEl.prop('checked');
			
			
			if(thisEl.attr('name') == 'imprint-options-name')
				$('#custcol_appf_imprint_name').val(value).trigger('blur');
			
			if(thisEl.attr('name') == 'imprint-options-date')
				$('#custcol_appf_imprint_date').val(value).trigger('blur');
			
			if(thisEl.attr('name') == 'imprint-options-dateopt')
				$('#custcolcustcol_appf_imprint_pers_loc').val(value).trigger('change');
			
			if(thisEl.attr('name') == 'imprint-options-cross')
				$('#custcol_appf_imprint_cross').prop('checked', chk).trigger('blur');
			
			if(thisEl.attr('name') == 'imprint-options-holy')
				$('#custcol_appf_holy_bible').prop('checked', chk).trigger('blur');
			
		}
	,	imprintInputs: function(e)
		{	
			var radiobtn = $(e.currentTarget).val();
			var imprintOptionsPrice = $(e.currentTarget).attr('data-price');
			var imprintOptionsName = $(e.currentTarget).attr('data-name');
			
			var name_row = $('.name-row');
			var name_text = $('[name="imprint-options-name"]');
			var date_row = $('.date-row');
			var date_text = $('[name="imprint-options-date"]');
			var option_row = $('.options-row');
			var cross_row = $('.cross-row');
			var option_select = $('[name="imprint-options-dateopt"]');
			var imprint_item_details = $('#custcol_appf_imprint_item_details');
			
			if(radiobtn){
				
				var x:any = _.findWhere(this.results,  {'otherChargeItem': radiobtn});
				//console.log(x);
				
				
				if(imprintOptionsPrice)
				{
					imprint_item_details
					.val(radiobtn + '|' + imprintOptionsPrice + '|' + x.crossItem + '|' + x.crossItemPrice + '|' + x.holyBibleItem + '|' + x.holyBibleItemPrice + '|' + imprintOptionsName)
					.trigger('blur');
				}
				
				if(x.imprintOptions.indexOf('1') != -1){
					
					name_row.show();
				}
				else{
					name_row.hide();
					name_text.val('').trigger('change');
				}
				
				if(x.imprintOptions.indexOf('2') != -1){
					
					date_row.show();
				}
				else{
					date_row.hide();
					date_text.val('').trigger('change');
				}
				if(x.cross == 'T' || x.holyBible == 'T'){
					
					if(x.cross == 'T' && x.crossItem){
						$('.cross-input').show();
					}
					else{
						$('.cross-input').hide();
						$('[name="imprint-options-cross"]').prop('checked', false).trigger('change');
					}
					
					if(x.holyBible == 'T' && x.holyBibleItem){
						$('.holy-input').show();
					}
					else{
						
						$('.holy-input').hide();
						$('[name="imprint-options-holy"]').prop('checked', false).trigger('change');
					}
					
					cross_row.show();
				}
				else{
					cross_row.hide();
					$('[name="imprint-options-cross"]').prop('checked', false).trigger('change');
			
				$('[name="imprint-options-holy"]').prop('checked', false).trigger('change');
				}
				if(x.options){
					
					$('[name="imprint-options-dateopt"]').children('option:not(:first)').remove();
					
					_.each(this.locArr, function(value:any) {
						
						if(x.options.indexOf(value.id) != -1){
							
							 $('[name="imprint-options-dateopt"]')
								 .append($("<option></option>")
								 .attr("value",value.id)
								 .text(value.name));
						}
					});
					
					option_row.show();
				}
				else{
					option_row.hide();
					option_select.val('').trigger('change');
				}
			}
			else{
				name_text.val('').trigger('change');
				date_text.val('').trigger('change');
				option_select.val('').trigger('change');
				name_row.hide();
				date_row.hide();
				option_row.hide();
				cross_row.hide();
				imprint_item_details.val('').trigger('blur');
				
				$('[name="imprint-options-cross"]').prop('checked', false).trigger('change');
			
				$('[name="imprint-options-holy"]').prop('checked', false).trigger('change');
			}
			
		}
	
	
	,	getContext: function ()
		{	
			
			
			var imprintOptionArr = this.imprintOptionArr;
			
			//console.log(this);
			var holyBibleItemPrice = 0;
			var crossItemPrice = 0;
			var holyBibleItem = 0;
			var crossItem = 0;
			
			_.each(this.results,function(result:any){
				
				if(result.holyBibleItem){
					holyBibleItemPrice = result.holyBibleItemPrice;
					holyBibleItem = result.holyBibleItem;
				}
				if(result.crossItem){
					crossItemPrice = result.crossItemPrice;
					crossItem = result.crossItem;
				}
				
			});
			var nameLabel, dateLabel;
			
			_.each(imprintOptionArr,function(opt:any){
				if(opt.id == '1')
					nameLabel = opt.name;
				if(opt.id == '2')
					dateLabel = opt.name;
			});
			
			var mainItem = this.options.model;
			
			var imprintItem = mainItem.get('custcol_appf_imprint_item_details') || '';
			var imprintItemId = 0;
			
			
			
			if(imprintItem){
				if(imprintItem.indexOf('|') != -1){
					
					 imprintItemId = imprintItem.split('|')[0];
					 
					 var x:any = _.findWhere(this.results,  {'otherChargeItem': imprintItemId});
					 
					 this.on('afterViewRender',function(){
						 
						if(x && !_.isEmpty(x)){
							
							if(x.imprintOptions.indexOf('1') != -1){
								
								$('.name-row').show();
							}
							
							if(x.imprintOptions.indexOf('2') != -1){
								
								$('.date-row').show();
							}
			
							if(x.cross == 'T' || x.holyBible == 'T'){
								
								if(x.cross == 'T' && x.crossItem){
									$('.cross-input').show();
								}
								else{
									$('.cross-input').hide();
									$('[name="imprint-options-cross"]').prop('checked', false).trigger('change');
								}
								
								if(x.holyBible == 'T' && x.holyBibleItem){
									$('.holy-input').show();
								}
								else{
									
									$('.holy-input').hide();
									$('[name="imprint-options-holy"]').prop('checked', false).trigger('change');
								}
								
								$('.cross-row').show();
							}
							
							if(x.options){
								
								_.each(this.locArr, function(value:any) {
									
									if(x.options.indexOf(value.id) != -1){
										
										 $('[name="imprint-options-dateopt"]')
											 .append($("<option></option>")
											 .attr("value",value.id)
											 .text(value.name));
									}
								});
								
								$('.options-row').show();
							}
						 }
					 });
					 
				}
			}
			return {
				results: this.results
			,	holyBibleItemPrice: holyBibleItemPrice
			,	crossItemPrice : crossItemPrice
			,	holyBibleItem: holyBibleItem
			,	crossItem : crossItem
			,	locOptions: this.locArr
			,	nameLabel: nameLabel
			,	dateLabel: dateLabel
			,	isHolyItem: (mainItem.get('custcol_appf_holy_bible') == "T")
			,	isCrossItem: (mainItem.get('custcol_appf_imprint_cross') == "T")
			,	date: mainItem.get('custcol_appf_imprint_date') || ''
			,	name: mainItem.get('custcol_appf_imprint_name') || ''
			,	locOptionId : mainItem.get('custcolcustcol_appf_imprint_pers_loc') || ''
			,	imprintItemId: imprintItemId
			};
		}

});

export = CustomView;