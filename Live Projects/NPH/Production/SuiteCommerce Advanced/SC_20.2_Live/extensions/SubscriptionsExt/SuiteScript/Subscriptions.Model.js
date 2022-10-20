
//@MODULE Subscriptions

define('Subscriptions.Model'
, [
    'Models.Init'
  , 'SC.Model'
  , 'underscore'
  ,	'Application'
  ]
, function
  (
    ModelsInit
  , SCModel
  , _
  ,	Application
  )
{

  'use strict';

  return SCModel.extend({

		name: 'Subscriptions'


	,	get: function(data)
		{
			var haveSubscription = false;
			
			var filters = [];
			var cols = [];
			
			filters.push(new nlobjSearchFilter('internalid',null,'is',nlapiGetUser()));
			
			cols.push(new nlobjSearchColumn('custentity_appf_emed_expire'));
			cols.push(new nlobjSearchColumn('custentity_appf_efic_expire'));
			cols.push(new nlobjSearchColumn('custentityappf_wc_expire'));
			cols.push(new nlobjSearchColumn('custentity_appf_kc_expire'));
			cols.push(new nlobjSearchColumn('custentity_appf_bsw'));
			

			var results = nlapiSearchRecord('customer',null,filters,cols);
			
			var exp_dates = {};
			
			if(results != null && results != '' && results.length > 0)
			{	
				results.forEach(function(result){
					
					
					exp_dates.emed_expire = result.getValue('custentity_appf_emed_expire');
					exp_dates.efic_expire = result.getValue('custentity_appf_efic_expire');	
					exp_dates.wc_expire = result.getValue('custentityappf_wc_expire');	
					exp_dates.kc_expire = result.getValue('custentity_appf_kc_expire');	
					exp_dates.bsw_expire = result.getValue('custentity_appf_bsw');	
					
					
				});
			}
			
			var today = new Date();
			today.setHours(0,0,0,0);
	
			if(data.type == "EMEDS"){
				
				if(exp_dates.emed_expire){
					
					var exp_date = nlapiStringToDate(exp_dates.emed_expire);
					
					
					
					if(exp_date.getTime() >= today.getTime()){
						
						haveSubscription = true;
						
						return this.getEmedsData(data);
					}
					
				}
			}
			if(data.type == "EFIC"){
				
				if(exp_dates.efic_expire){
					
					var exp_date = nlapiStringToDate(exp_dates.efic_expire);
					
					
					
					if(exp_date.getTime() >= today.getTime()){
						
						haveSubscription = true;
						
						return this.getEficData(data);
					}
					
				}
			}
			if(data.type == "WC"){
				
				if(exp_dates.wc_expire){
					
					var exp_date = nlapiStringToDate(exp_dates.wc_expire);
					
					
					
					if(exp_date.getTime() >= today.getTime()){
						
						haveSubscription = true;
						
						return this.getWcData(data);
					}
					
				}
			}
			if(data.type == "KC"){
				
				if(exp_dates.kc_expire){
					
					var exp_date = nlapiStringToDate(exp_dates.kc_expire);
					
					
					
					if(exp_date.getTime() >= today.getTime()){
						
						haveSubscription = true;
						
						return this.getWcData(data);
					}
					
				}
			}
			if(data.type == "BSW"){
				
				if(exp_dates.bsw_expire == "T"){

						haveSubscription = true;
						
						return this.getBswData(data);
				}
			}
			
			if(data.type == "subscription"){
				return exp_dates;
			}
			
			if(!haveSubscription)
				return {'haveSubscription': false};
		}
	,	getBswData: function(data)
		{
			if(data.title){
				
				var filters = {
						'title': ['name', 'contains', data.title]
					,	'isinactive_operator': 'and'
					,	'isinactive': ['isinactive', 'is', 'F']
					
				};

			}
			else{
				var filters = {
						'isinactive': ['isinactive', 'is', 'F']
				};
			}

			var columns = {
					'title': new nlobjSearchColumn('name')
				,	'book': new nlobjSearchColumn('custrecord_appf_bsw_book')
				,	'audience': new nlobjSearchColumn('custrecord_appf_bsw_audience')
				,	'topic': new nlobjSearchColumn('custrecord_appf_bsw_topic')
				,	'download_link': new nlobjSearchColumn('custrecord_appf_bsw_download_link')
				};
				
			if(data.sort)
				columns[data.sort].setSort();
				
			var search_results = Application.getPaginatedSearchResults({
						record_type: 'customrecord_appf_bsw_subscription'
					,	filters: _.values(filters)
					,	columns: _.values(columns)
					,	page: data.page || 1
					,	results_per_page : data.results_per_page
					});
				
				var records = _.map((search_results.records) || [], function (record)
				{
					

					//@class Transaction.Model.List.Result.Record
					var result = {
						
						title: record.getValue('name')
					,	book: record.getValue('custrecord_appf_bsw_book')
					,	audience: record.getValue('custrecord_appf_bsw_audience')
					,	topic: record.getValue('custrecord_appf_bsw_topic')
					,	download_link: record.getValue('custrecord_appf_bsw_download_link')
					
					
					};

					return result;
				});
				
				var results = search_results;
					results.records = records;
				
				return results;
		}
	,	getWcData: function(data)
		{
			
			if(data.type == 'KC'){
				var filters = {
					'is_kids_connection': ['custrecord_appf_is_kids_connection', 'is', 'T']
				,	'isinactive_operator': 'and'
				,	'isinactive': ['isinactive', 'is', 'F']
				};
			}
			else{
				var filters = {
					'is_wels_connection': ['custrecord_appf_is_kids_connection', 'is', 'F']
				,	'isinactive_operator': 'and'
				,	'isinactive': ['isinactive', 'is', 'F']
				};
			}
			var month = new Array();
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";
			
			var columns = {
					'title': new nlobjSearchColumn('name')
				,	'date': new nlobjSearchColumn('custrecord_appf_wc_date')
				,	'description': new nlobjSearchColumn('custrecord_appf_wc_description')
				,	'image': new nlobjSearchColumn('custrecord_appf_wc_image')
				,	'download_link': new nlobjSearchColumn('custrecord_appf_wc_download_link')
				,	'download_cc_link': new nlobjSearchColumn('custrecord_appf_wc_download_cc_link')
				};
				
			var search_results = Application.getPaginatedSearchResults({
						record_type: 'customrecord_appf_wels_connection'
					,	filters: _.values(filters)
					,	columns: _.values(columns)
					,	page: data.page || 1
					,	results_per_page : data.results_per_page
					});
				
				var records = _.map((search_results.records) || [], function (record)
				{
					
					var date = record.getValue('custrecord_appf_wc_date');
					if(date){
						date = nlapiStringToDate(date);
						date = month[date.getMonth()] + " " + date.getFullYear();
					}
					
					
					//@class Transaction.Model.List.Result.Record
					var result = {
						title: record.getValue('name')
					,	date: date
					,	description: record.getValue('custrecord_appf_wc_description')
					,	imageUrl: record.getText('custrecord_appf_wc_image')
					,	download_link: record.getValue('custrecord_appf_wc_download_link')
					,	download_cc_link: record.getValue('custrecord_appf_wc_download_cc_link')
					};

					return result;
				});
				
				var results = search_results;
					results.records = records;
				
				return results;
		}
	,	getEmedsData: function(data)
		{
			
			var filters = {
					'date': ['custrecord_appf_date_emeds', 'on', data.date]
				,	'isinactive_operator': 'and'
				,	'isinactive': ['isinactive', 'is', 'F']
			};
			
					
			
			var columns = {
					'title': new nlobjSearchColumn('name')
				,	'date': new nlobjSearchColumn('custrecord_appf_date_emeds')
				,	'content': new nlobjSearchColumn('custrecord_appf_content_emeds')
				};
				
			var search_results = Application.getPaginatedSearchResults({
						record_type: 'customrecord_appf_email_meditations'
					,	filters: _.values(filters)
					,	columns: _.values(columns)
					,	page: data.page || 1
					,	results_per_page : data.results_per_page
					});
				
				var records = _.map((search_results.records) || [], function (record)
				{
					
					var result = {
						title: record.getValue('name')
					,	date: record.getValue('custrecord_appf_date_emeds')
					,	content: record.getValue('custrecord_appf_content_emeds')
					
					};

					return result;
				});
				
				var results = search_results;
					results.records = records;
				
				return results;
		}
	,	getEficData: function(data)
		{
			//onorbefore
			if(data.date)
			{
				var filters = {
						'date': ['custrecord_appf_date_efic', 'onOrBefore', data.date]
					,	'isinactive_operator': 'and'
					,	'isinactive': ['isinactive', 'is', 'F']
				};
			}
			else
			{
				var filters = {
					'isinactive': ['isinactive', 'is', 'F']
				};
			}				
			
			var columns = {
					'date': new nlobjSearchColumn('custrecord_appf_date_efic')
				,	'content': new nlobjSearchColumn('custrecord_appf_content_efic')
				,	'image': new nlobjSearchColumn('custrecord_appf_image_efic')
				,	'issue_link': new nlobjSearchColumn('custrecord_appf_view_issue_link_efic')
				};
				
				columns["date"].setSort(true);
				
			var search_results = Application.getPaginatedSearchResults({
						record_type: 'customrecord_appf_efic_subscription'
					,	filters: _.values(filters)
					,	columns: _.values(columns)
					,	page: data.page || 1
					,	results_per_page : data.results_per_page
					});
				
				var records = _.map((search_results.records) || [], function (record)
				{
					
					//@class Transaction.Model.List.Result.Record
					var result = {
					
						date: record.getValue('custrecord_appf_date_efic')
					,	content: record.getValue('custrecord_appf_content_efic')
					,	imageUrl: record.getText('custrecord_appf_image_efic')
					,	issue_link: record.getValue('custrecord_appf_view_issue_link_efic')
					};

					return result;
				});
				
				var results = search_results;
					results.records = records[0];
				
				return results;
		}

  });

});
