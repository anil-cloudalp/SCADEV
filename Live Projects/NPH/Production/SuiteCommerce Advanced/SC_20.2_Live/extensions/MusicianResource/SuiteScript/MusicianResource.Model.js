/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

define('MusicianResource.Model', [
    'SC.Model',
    'SC.Models.Init',
    'Backbone.Validation',
    'underscore',
    'Configuration'
], function(
    SCModel,
    ModelsInit,
    BackboneValidation,
    _, 
    Configuration
) {
    return SCModel.extend({

        name: 'MusicianResourceModel',
		
		getAllitemids: function(fieldoptions)
		{
			var itemIDArr = [];
			var fils = [];
			
			var catID = Configuration.get("Musicianresourcepage.musicianresourceid") || '';

			if(fieldoptions)
			{	
				if(fieldoptions.HymnNumberinternalid != null && fieldoptions.HymnNumberinternalid != '')
				{
					var hymnNumStr = fieldoptions.HymnNumberinternalid;
					var hymnNumbers = hymnNumStr.split(",");
					if(hymnNumbers.length > 0)
					{
						var hymnFormulaeText = "CASE WHEN {custitem_appf_mr_hymn_number} like '%";
						for(var h=0; h < hymnNumbers.length; h++)
						{
							hymnFormulaeText += hymnNumbers[h];
							if(h+1 < hymnNumbers.length)
								hymnFormulaeText += "%' THEN 'Y' WHEN {custitem_appf_mr_hymn_number} like '%";
							else
								hymnFormulaeText += "%' THEN 'Y'  ELSE 'N' END";							
						}
						console.warn('hymnFormulaeText',hymnFormulaeText);
						fils[0] = new nlobjSearchFilter('formulatext',null,'is','Y');
						fils[0].setFormula(hymnFormulaeText);
					}	
				}
				if(fieldoptions.HymnTitleinternalid != null && fieldoptions.HymnTitleinternalid != '')
					fils.push(new nlobjSearchFilter('custitem_appf_mr_hymn_title',null,'contains',fieldoptions.HymnTitleinternalid));
				
				if(fieldoptions.HymanTuneinternalid != null && fieldoptions.HymanTuneinternalid != '')
					fils.push(new nlobjSearchFilter('custitem_appf_mr_hymn_tune',null,'contains',fieldoptions.HymanTuneinternalid));
				
				if(fieldoptions.PsalmNumberinternalid != null && fieldoptions.PsalmNumberinternalid != '')
					fils.push(new nlobjSearchFilter('custitem_appf_mr_psalm_number',null,'is',fieldoptions.PsalmNumberinternalid));
				
				if(fieldoptions.PsalmTitleinternalid != null && fieldoptions.PsalmTitleinternalid != '')
					fils.push(new nlobjSearchFilter('custitem_appf_mr_psalm_title',null,'contains',fieldoptions.PsalmTitleinternalid));
				
				if(fieldoptions.PsalmTuneinternalid != null && fieldoptions.PsalmTuneinternalid != '')
					fils.push(new nlobjSearchFilter('custitem_appf_psalm_tune',null,'contains',fieldoptions.PsalmTuneinternalid));
				
				if(fieldoptions.HymnSectioninternalid != null && fieldoptions.HymnSectioninternalid != '')
					fils.push(new nlobjSearchFilter('custitem_appf_hymn_section',null,'anyof',fieldoptions.HymnSectioninternalid));
				
				if(fieldoptions.Ritesinternalid != null && fieldoptions.Ritesinternalid != '')
					fils.push(new nlobjSearchFilter('custitem_appf_rites',null,'anyof',fieldoptions.Ritesinternalid));
				
				if(fieldoptions.yearsunday != null && fieldoptions.yearsunday != '' && fieldoptions.yearsunday.length > 0)
					fils.push(new nlobjSearchFilter('custitem_appf_lectionary_year_sunday',null,'anyof',fieldoptions.yearsunday[0]));
				
				if(fieldoptions.bookchapterverse != null && fieldoptions.bookchapterverse != '' && fieldoptions.bookchapterverse.length > 0)
					fils.push(new nlobjSearchFilter('custitem_appf_scripture_book',null,'anyof',fieldoptions.bookchapterverse[0]));
				
				if(fieldoptions.SelectaMeterinternalid != null && fieldoptions.SelectaMeterinternalid != '')
					fils.push(new nlobjSearchFilter('custitem_appf_meter',null,'anyof',fieldoptions.SelectaMeterinternalid));
				
				if(fieldoptions.SelectaPackageinternalid != null && fieldoptions.SelectaPackageinternalid != '')
					fils.push(new nlobjSearchFilter('custitem_appf_package',null,'anyof',fieldoptions.SelectaPackageinternalid));
				
				if(fieldoptions.SelectaInstrumentType != null && fieldoptions.SelectaInstrumentType != '')
					fils.push(new nlobjSearchFilter('custitem_appf_instrument_type', null, 'anyof', fieldoptions.SelectaInstrumentType));
				
				if(catID != null && catID != '')
				{
					fils.push(new nlobjSearchFilter('commercecategoryid',null,'anyof',[catID]));
					fils.push(new nlobjSearchFilter('isonline', null, 'is', 'T'));
				}
				
				var cols = [];
				cols.push(new nlobjSearchColumn('internalid'));
				var itemSrch = nlapiSearchRecord('item',null,fils,cols);
				if(itemSrch != null && itemSrch != '')
				{
					for(var i=0; i < itemSrch.length; i++)
					{
						var itemID = itemSrch[i].getValue('internalid');
						itemIDArr.push(itemID);
					}
				}
			}
			return itemIDArr;
		}
	,	getvalues: function(itemIDs) 
		{

			var resultsArray = [];
			var validItemsArr = [];
			var self = this;
			if(itemIDs && itemIDs != null && itemIDs != '' && itemIDs.length > 0)
			{	
				var filters = [];
				if(itemIDs.length > 1)
                filters.push(new nlobjSearchFilter('internalid', 'item', 'anyof', itemIDs));
				else
				filters.push(new nlobjSearchFilter('internalid', 'item', 'is', itemIDs));
				
                filters.push(new nlobjSearchFilter('mainline', null, 'is', 'F'));
                filters.push(new nlobjSearchFilter('shipping', null, 'is', 'F'));
                filters.push(new nlobjSearchFilter('taxline', null, 'is', 'F'));
				filters.push(new nlobjSearchFilter('isinactive', 'item', 'is', 'F'));
				filters.push(new nlobjSearchFilter('entity', null, 'anyof', nlapiGetUser()));
				const columns = [
                new nlobjSearchColumn('internalid'),
                new nlobjSearchColumn('internalid','item')
				];
				var srchResults = nlapiSearchRecord('salesorder',null,filters,columns);

				if(srchResults != null && srchResults != '')
				{

					for(var i=0; i < srchResults.length; i++)
					{						
						var itemInternalID = srchResults[i].getValue('internalid','item');
						validItemsArr.push(itemInternalID.toString());							
					}
					validItemsArr = self.eliminateDuplicates(validItemsArr);													
				
				for(var j=0; j < itemIDs.length; j++)
				{
					var obj = {};
					var item = itemIDs[j].toString();
					if(validItemsArr.indexOf(item) != -1)
						obj[item] = true;
					else
						obj[item] = false;
					resultsArray.push(obj);
				}	
			  }
			}
			
			return JSON.stringify(resultsArray);

		},
		eliminateDuplicates: function(arr) 
		{
		   var i,
			   len=arr.length,
			   out=[],
			   obj={};

		   for (i=0;i<len;i++) {
			 obj[arr[i]]=0;
		   }
		   for (i in obj) {
			 out.push(i);
		   }
		   return out;
		}
    });
});

