/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

define('MusicianResourceGetitems.Model', [
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

        name: 'MusicianResourceGetitemsModel',

        getoptions: function(){

			var fieldsarray = ['customlist_appf_instrument_type','customlist_appf_rites','customlist_hymn_section','customlist_sunday_year','customlist_meter','customlist_packages','customlist_scripture_reference_book'];
            
			var fldOptionsObj = {};

            for(var j=0;j<fieldsarray.length;j++){

           var hymnSectionSrch = nlapiSearchRecord(fieldsarray[j],null,[new nlobjSearchFilter('isinactive',null,'is','F')],[new nlobjSearchColumn('internalid'),new nlobjSearchColumn('name')]);
            var hymnSectionOptions = [];
            if(hymnSectionSrch != null && hymnSectionSrch != '')
            {
                for(var i=0; i < hymnSectionSrch.length; i++)
                {
                    var obj = {};
                    obj.id = hymnSectionSrch[i].getValue('internalid');
                    obj.name = hymnSectionSrch[i].getValue('name');
                    hymnSectionOptions.push(obj);
                }

                fldOptionsObj[fieldsarray[j]] = hymnSectionOptions;
            }
        }	
        
        return JSON.stringify(fldOptionsObj);

		},
		getChapter: function(data){
			var chapterOptions = [];
			if(data != null && data != '')
			{	
				console.warn('Model log',JSON.stringify(data));
				var book = data.book || '';
				if(book)
				{	
					var chapterSrch = this.getAllSearchResults('customrecord_appf_bible_verses',[new nlobjSearchFilter('isinactive',null,'is','F'),new nlobjSearchFilter('custrecord_appf_book',null,'is',book)],[new nlobjSearchColumn('custrecord_appf_chapter')]);
					if(chapterSrch != null && chapterSrch != '')
					{
						for(var i=0; i < chapterSrch.length; i++)
						{
							var chapterText = chapterSrch[i].getValue('custrecord_appf_chapter');
							if(chapterText != null && chapterText != '')
								chapterOptions.push(chapterText);
						}
					}
				}
			}
			return chapterOptions;
		},
		getVerse: function(data){
			var verseOptions = [];
			if(data != null && data != '')
			{
				var book = data.book || '';
				var chapter = data.chapter || '';

				if(book && chapter)
				{
					var verseSrch = this.getAllSearchResults('customrecord_appf_bible_verses',[new nlobjSearchFilter('isinactive',null,'is','F'),new nlobjSearchFilter('custrecord_appf_book',null,'is',book),new nlobjSearchFilter('custrecord_appf_chapter',null,'equalto',chapter)],[new nlobjSearchColumn('custrecord_appf_verses')]);

					if(verseSrch != null && verseSrch != '')
					{
						for(var i=0; i < verseSrch.length; i++)
						{
							var verses = verseSrch[i].getValue('custrecord_appf_verses');
							if(verses != null && verses != '')
								verseOptions.push(verses);
						}
					}
				}
			}
			return verseOptions;
		},
		getScriptureRef: function(data){
			var scriptureRefs = [];
			if(data != null && data != '')
			{	
				var book = data.book || '';
				var chapter = data.chapter || '';
				var verse = data.verse || '';

				if(book && chapter && verse)
				{
					var scriptureRefSrch = this.getAllSearchResults('customrecord_appf_bible_verses',[new nlobjSearchFilter('isinactive',null,'is','F'),new nlobjSearchFilter('custrecord_appf_book',null,'is',book),new nlobjSearchFilter('custrecord_appf_chapter',null,'equalto',chapter),new nlobjSearchFilter('custrecord_appf_verses',null,'is',verse)],[new nlobjSearchColumn('name')]);

					if(scriptureRefSrch != null && scriptureRefSrch != '')
					{
						for(var i=0; i < scriptureRefSrch.length; i++)
						{
							var scriptureRef = scriptureRefSrch[i].getValue('name');
							var scriptureRefID = scriptureRefSrch[i].getId();
							if(scriptureRefID != null && scriptureRefID != '')
								scriptureRefs.push(scriptureRefID);
							
						}
					}
				}
			}
			return scriptureRefs;
		}
		,
		getLectionarySundays: function(data){
			var sundayOptions = [];
			if(data != null && data != '')
			{	
				var year = data.lectionaryYear || '';

				if(year)
				{
					var cols = [];
					cols[0] = new nlobjSearchColumn('custrecord_appf_lect_sun');
					cols[1] = new nlobjSearchColumn('internalid');
					cols[1].setSort();
					var sundaySrch = this.getAllSearchResults('customrecord_appf_lectionary_sunday',[new nlobjSearchFilter('isinactive',null,'is','F'),new nlobjSearchFilter('custrecord_appf_lect_year',null,'is',year)],cols);

					if(sundaySrch != null && sundaySrch != '')
					{
						for(var i=0; i < sundaySrch.length; i++)
						{
							var sunday = sundaySrch[i].getValue('custrecord_appf_lect_sun');
							if(sunday != null && sunday != '' )
								sundayOptions.push(sunday);
						}
					}
				}
			}
			return sundayOptions;
		},
		getItemLectionarySunday: function(data){
			var lectionarySundays = [];
			if(data != null && data != '')
			{	
				var year = data.lectionaryYear || '';
				var sunday = data.lectionarysunday || '';

				if(year && sunday)
				{
					var lectionarySundaysSrch = this.getAllSearchResults('customrecord_appf_lectionary_sunday',[new nlobjSearchFilter('isinactive',null,'is','F'),new nlobjSearchFilter('custrecord_appf_lect_year',null,'is',year),new nlobjSearchFilter('custrecord_appf_lect_sun',null,'is',sunday)],[new nlobjSearchColumn('name')]);

					if(lectionarySundaysSrch != null && lectionarySundaysSrch != '')
					{
						for(var i=0; i < lectionarySundaysSrch.length; i++)
						{
							var sundays = lectionarySundaysSrch[i].getValue('name');
							var sundaysID = lectionarySundaysSrch[i].getId();
							if(sundaysID != null && sundaysID != '' )
								lectionarySundays.push(sundaysID);
						}
					}
				}
			}
			return lectionarySundays;
		},
		getAllSearchResults: function(record_type, filters, columns)
		{
			var search = nlapiCreateSearch(record_type, filters, columns);
			search.setIsPublic(true);

			var searchRan = search.runSearch()
			,	bolStop = false
			,	intMaxReg = 1000
			,	intMinReg = 0
			,	result = [];

			while (!bolStop && nlapiGetContext().getRemainingUsage() > 10)
			{
				// First loop get 1000 rows (from 0 to 1000), the second loop starts at 1001 to 2000 gets another 1000 rows and the same for the next loops
				var extras = searchRan.getResults(intMinReg, intMaxReg);

				result = this.searchUnion(result, extras);
				intMinReg = intMaxReg;
				intMaxReg += 1000;
				// If the execution reach the the last result set stop the execution
				if (extras.length < 1000)
				{
					bolStop = true;
				}
			}

			return result;
		},		
		 searchUnion: function(target, array)
		{
			return target.concat(array); // TODO: use _.union
		}
    });
});

