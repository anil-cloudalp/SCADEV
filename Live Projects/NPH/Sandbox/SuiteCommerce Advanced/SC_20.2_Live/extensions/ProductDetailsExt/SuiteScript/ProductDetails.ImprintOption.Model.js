

define('ProductDetails.ImprintOption.Model'
, [
    'Models.Init'
  , 'SC.Model'
  , 'underscore'
  ]
, function
  (
    ModelsInit
  , SCModel
  , _
  )
{

  'use strict';

  return SCModel.extend({

    name: 'ProductDetails.ImprintOption'
 ,	search: function(itemId)
    {
		var returnString = {};
		returnString.addInfo = this.getAdditionalInfo(itemId);
		returnString.imprintData = this.getImprintData(itemId);
		returnString.subItems = this.getSubItems(itemId);
		
		return returnString;
		
	}
  , getImprintData: function(itemId)
    {
		var returnString = {};
		try{
			var filters = [];
			var cols = [];
			
			filters.push(new nlobjSearchFilter('custrecord_appf_connected_item',null,'is',itemId));
			filters.push(new nlobjSearchFilter('isinactive',null, 'is', 'F'));
			
			
			cols.push(new nlobjSearchColumn('custrecord_appf_detail_non_inventory_ite'));
			cols.push(new nlobjSearchColumn('custrecord_appf_imprint_title_website'));
			cols.push(new nlobjSearchColumn('custrecord_appf_personal_locs_website'));
			cols.push(new nlobjSearchColumn('custrecord_appf_oth_charge_item_price'));
			
			cols.push(new nlobjSearchColumn('custrecord_appf_honly_bible'));
			cols.push(new nlobjSearchColumn('custrecord_appf_holy_bible_item'));
			cols.push(new nlobjSearchColumn('custrecord_appf_holy_bible_item_price'));
			cols.push(new nlobjSearchColumn('custrecord_appf_cross'));
			cols.push(new nlobjSearchColumn('custrecord_appf_cross_item'));
			cols.push(new nlobjSearchColumn('custrecord_appf_cross_item_price'));
			cols.push(new nlobjSearchColumn('custrecord_imprint_options'));
			
			
			
			
			
			var results = nlapiSearchRecord('customrecord_appf_imprint_options',null,filters,cols);
			var resultsArr = [];
			
			if(results != null && results != '' && results.length > 0)
			{	
				results.forEach(function(result){
					
					var obj = {};
					
					
					obj.otherChargeItem = result.getValue('custrecord_appf_detail_non_inventory_ite');	
					obj.otherChargeItem_title = result.getValue('custrecord_appf_imprint_title_website');
					obj.options = result.getValue('custrecord_appf_personal_locs_website');
					obj.price = result.getValue('custrecord_appf_oth_charge_item_price');
					
					obj.holyBible = result.getValue('custrecord_appf_honly_bible');
					obj.holyBibleItem = result.getValue('custrecord_appf_holy_bible_item');
					obj.holyBibleItemPrice = result.getValue('custrecord_appf_holy_bible_item_price');
					obj.cross = result.getValue('custrecord_appf_cross');
					obj.crossItem = result.getValue('custrecord_appf_cross_item');
					obj.crossItemPrice = result.getValue('custrecord_appf_cross_item_price');
					obj.imprintOptions = result.getValue('custrecord_imprint_options');
					
					resultsArr.push(obj);
				});
			}
			
			var imprintRec = nlapiCreateRecord('customrecord_appf_imprint_options');
			var locFld = imprintRec.getField('custrecord_appf_personal_locs_website');
			var imprintOptionFld = imprintRec.getField('custrecord_imprint_options');
			
			var locOptions = locFld.getSelectOptions();
			var imprintOptions = imprintOptionFld.getSelectOptions();
			
			var  locArr = [];
			
			for(var i=0;i < locOptions.length;i++)
			{
				var obj = {};
				obj.id=locOptions[i].getId();
				obj.name = locOptions[i].getText();
				locArr.push(obj);
			}
			
			var  imprintOptionArr = [];
			
			for(var j=0;j < imprintOptions.length;j++)
			{
				var obj = {};
				obj.id=imprintOptions[j].getId();
				obj.name = imprintOptions[j].getText();
				imprintOptionArr.push(obj);
			}
			
			returnString.locArr = locArr;
			returnString.imprintOptionArr = imprintOptionArr;
			
			returnString.results = resultsArr;
		}
		catch(e){
			returnString.error = e.toString();
		}

		return returnString;
    }
 ,	getAdditionalInfo: function(itemId)
    {

		var returnString = {};
		try{
			var filters = [];
			var cols = [];
			
			filters.push(new nlobjSearchFilter('custrecord_appf_item_add_infor',null,'is',itemId));
			filters.push(new nlobjSearchFilter('isinactive',null, 'is', 'F'));
			
			cols[0] = new nlobjSearchColumn('custrecord_appf_title_sequence');
			cols[0].setSort();
			cols.push(new nlobjSearchColumn('custrecord_appf_title'));
			cols.push(new nlobjSearchColumn('custrecord_appf_add_infor_value'));
			
			
			var results = nlapiSearchRecord('customrecord_appf_addtional_information',null,filters,cols);
			var resultsArr = [];
			
			if(results != null && results != '' && results.length > 0)
			{	
				results.forEach(function(result){
					
					var obj = {};
					
					obj.title = result.getText('custrecord_appf_title');	
					obj.value = result.getValue('custrecord_appf_add_infor_value');
					obj.sequence = result.getValue('custrecord_appf_title_sequence');
					
					resultsArr.push(obj);
				});
			}
			
			returnString.results = resultsArr;
		}
		catch(e){
			returnString.error = e.toString();
		}

		return returnString;
	}
,	getSubItems: function(itemId)
    {

		var returnString = {};
		
		try{
			
			var filters = []
			,	cols = [];
					
			filters.push(new nlobjSearchFilter('custitem_group_item_parent', null, 'is', itemId));
			filters.push(new nlobjSearchFilter('custitem_appf_group_item', null, 'is', 'T'));

					
			cols.push(new nlobjSearchColumn('internalid'));

			var search = nlapiCreateSearch('item', filters, cols);

					

			var resultSet= search.runSearch();
			var results = [];
			resultSet.forEachResult(function(searchResult)
			{
				results.push(searchResult.getValue('internalid'));   
				return true;                
			});
			
			returnString.results = results;
		}
		catch(e){
			returnString.error = e.toString();
		}

		return returnString;
	}
  });

});