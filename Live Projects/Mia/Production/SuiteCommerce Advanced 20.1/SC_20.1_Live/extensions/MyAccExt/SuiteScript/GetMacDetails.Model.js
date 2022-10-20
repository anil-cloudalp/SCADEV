
//@MODULE GetMacDetails

define('GetMacDetails.Model'
, [
	'Models.Init'
	, 'SC.Model'
	, 'underscore'
	, 'Application'
]
, function
(
	ModelsInit
	, SCModel
	, _
	, Application
)
{

	'use strict';

	return SCModel.extend({

		name: 'GetMacDetails.Model'
		
	,	getMacDetails: function(soId,tranID)
		{
			
			var returnString = {};
			try{
				
				var search = nlapiLoadSearch('inventorydetail', 'customsearch1158');
				
					search.addFilter(new nlobjSearchFilter('createdfrom','transaction','anyof',soId));
					
				var resultSet = search.runSearch();
				var results = [];
				resultSet.forEachResult(function(searchResult)
				{
					var obj = {};
					//obj.so = searchResult.getValue('createdfrom','transaction');  
					obj.item = searchResult.getText('item',null,'group');  
					obj.serialnumber = searchResult.getText('inventorynumber',null,'group');  
					obj.mac = searchResult.getValue('custitemnumber_ccmovc_mac_address','inventoryNumber','group'); 
					
					results.push(obj);
					
					return true;                
				});
				
				if(results.length > 0)
					returnString.html = this.generateHtml(results,tranID);
				else
					returnString.error = 'No Record Avilable';
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
			
		}
	,	generateHtml: function(results,tranID)
		{
			var excelData = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"   xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">'; 

				excelData += '<Worksheet ss:Name="Sheet1"><Table><Column ss:AutoFitWidth="0" ss:Width="94.5"/><Column ss:AutoFitWidth="0" ss:Width="122.25"/><Column ss:AutoFitWidth="0" ss:Width="150"/><Column ss:AutoFitWidth="0" ss:Width="153"/><Row><Cell><Data ss:Type="String"> Order Number</Data></Cell><Cell><Data ss:Type="String"> Item</Data></Cell><Cell><Data ss:Type="String"> Serial Number</Data></Cell><Cell><Data ss:Type="String"> MAC Number</Data></Cell></Row>';
			
			_.each(results,function(result){
				
				excelData += '<Row><Cell><Data ss:Type="String">'+ tranID +'</Data></Cell><Cell><Data ss:Type="String">' + result.item + '</Data></Cell><Cell><Data ss:Type="String">Serial No: ' + result.serialnumber + ' </Data></Cell><Cell><Data ss:Type="String">Mac No: ' + result.mac + '</Data></Cell></Row>';
			});
			
			excelData += '</Table></Worksheet></Workbook>';
			
			return excelData;
		}
	,	getReturnsData: function(recordType,internalid){
		
			var invoiceData = this.getInvoiceData(recordType,internalid);
			
			var createdfrom = _.has(invoiceData,'createdfrom')? invoiceData.createdfrom : '';
			return {
				invoiceData: invoiceData,
				serialNumbers: this.getSerialNumber(createdfrom)
			};
		}
	,	getInvoiceData: function(recordType,internalid)
		{
			
			var returnString = {};
			try{
				if(recordType == 'salesorder'){
					
					var filters = {
							'type': ['type', 'anyof', ['CustInvc','CashSale']]
						,	'shipping_operator': 'and'
						,	'shipping': ['shipping', 'is', 'F']
						,	'taxline_operator': 'and'
						,	'taxline': ['taxline', 'is', 'F']
						,	'mainline_operator': 'and'
						,	'mainline': ['mainline', 'is', 'F']
						,	'createdfrom_operator': 'and'
						,	'createdfrom': ['createdfrom', 'anyof', internalid]
					};
				}
				else{
					var filters = {
							'type': ['type', 'anyof', 'CustInvc']
						,	'shipping_operator': 'and'
						,	'shipping': ['shipping', 'is', 'F']
						,	'taxline_operator': 'and'
						,	'taxline': ['taxline', 'is', 'F']
						,	'mainline_operator': 'and'
						,	'mainline': ['mainline', 'is', 'F']
						,	'internalid_operator': 'and'
						,	'internalid': ['internalid', 'is', internalid]
					};
				}
				

				var columns = {
						'trandate': new nlobjSearchColumn('trandate')
					,	'item': new nlobjSearchColumn('item')
					,	'warranty': new nlobjSearchColumn('custitem_ecoml_warranty','item')
					,	'createdfrom': new nlobjSearchColumn('createdfrom')
				};
				columns['trandate'].setSort();
				var search_results = Application.getAllSearchResults('transaction', _.values(filters), _.values(columns));
				var createdfrom;
				returnString.results = _.map(search_results || [], function (record)
				{
					var invoiceDate = record.getValue('trandate');
					
					if(!createdfrom)
						createdfrom = record.getValue('createdfrom');
						
					var warranty = record.getValue('custitem_ecoml_warranty','item');
					var disableReturns = false;
					
					if(invoiceDate){
						
						var warrantyMonth = 0;
						if(warranty)
							warrantyMonth = parseInt(warranty.substring(0, 2));
							
						var dateInv =  nlapiStringToDate(invoiceDate);
						dateInv = nlapiAddMonths(dateInv, warrantyMonth);
						
						var today = new Date();
						today.setHours(0,0,0,0);
						
						if(dateInv.getTime() < today.getTime())
							disableReturns = true;
						
					}
					var result = {
						item: record.getValue('item')
					,	disableReturns: disableReturns
					};

					return result;
				});
				returnString.createdfrom = createdfrom;
				
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
			
		}
	,	getSerialNumber: function(salesorder)
		{
			
			var returnString = {};
			try{
				var filters = {
						'type': ['type', 'anyof', 'ItemShip']
					,	'shipping_operator': 'and'
					,	'shipping': ['shipping', 'is', 'F']
					,	'cogs_operator': 'and'
					,	'cogs': ['cogs', 'is', 'F']
					,	'createdfrom_operator': 'and'
					,	'createdfrom': ['createdfrom', 'anyof', salesorder]
				};
				

				var columns = {
						'item': new nlobjSearchColumn('item')
					,	'inventorynumber': new nlobjSearchColumn('inventorynumber','inventoryDetail')
				};
				
				var search_results = Application.getAllSearchResults('transaction', _.values(filters), _.values(columns));
				
				returnString.results = _.map(search_results || [], function (record)
				{
					var result = {
						item: record.getValue('item')
					,	inventorynumber: record.getText('inventorynumber','inventoryDetail')
					};

					return result;
				});
				
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
			
		}
	,	getMarketingBanners: function(priceLevel)
		{
			
			var returnString = {};
			try{
				var filters = {
						'group': ['custrecord_customer_group', 'anyof', priceLevel]
					,	'isinactive_operator': 'and'
					,	'isinactive': ['isinactive', 'is', 'F']
					,	'exclude_customer_operator': 'and'
					,	'exclude_customer': ['custrecord_exclude_customer_list', 'noneof', nlapiGetUser()]
				};
				

				var columns = {
						'main_banner': new nlobjSearchColumn('custrecord_main_banner')
					,	'main_banner_item': new nlobjSearchColumn('custrecord_main_banner_item')
					,	'side_banner': new nlobjSearchColumn('custrecord_side_menu')
					,	'side_banner_item': new nlobjSearchColumn('custrecord_side_banner_item')
					,   'main_banner_url' : new nlobjSearchColumn('custrecord_main_url')
				};
				
				var search_results = Application.getAllSearchResults('customrecord_customer_marketing_zone', _.values(filters), _.values(columns));
				
				var results = _.map(search_results || [], function (record)
				{
					var result = {
						main_banner: record.getText('custrecord_main_banner')
					,	main_banner_item: record.getValue('custrecord_main_banner_item')
					,	side_banner: record.getText('custrecord_side_menu')
					,	side_banner_item: record.getValue('custrecord_side_banner_item')
					,   main_banner_url : record.getValue('custrecord_main_url')
					};

					return result;
				});
				returnString.results = (results && results.length > 0)? results[0] : [];
				
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
			
		}
	,	getSalesRep: function() {
			var returnString = {};
			try{
				const salesrep = {};

				const search_result = nlapiLookupField('customer', nlapiGetUser(), [
					'salesrep.phone',
					'salesrep.email',
					'salesrep.entityid',
					'salesrep.mobilephone',
					'salesrep.fax',
					'salesrep'
				]);

				if (search_result) {
					// @class Opportunity.Model.Get.SalesRepresentative
					// @property {String?} phone
					salesrep.phone = search_result['salesrep.phone'];
					// @property {String} email
					salesrep.email = search_result['salesrep.email'];
					// @property {String} fullname
					salesrep.fullname = search_result['salesrep.entityid'];
					// @property {String} name
					salesrep.name = search_result['salesrep.entityid'];
					// @property {String?} mobilephone
					salesrep.mobilephone = search_result['salesrep.mobilephone'];
					// @property {String} fax
					salesrep.fax = search_result['salesrep.fax'];
					// @property {String} internalid
					salesrep.internalid = search_result.salesrep;
				}

				returnString.salesrep = salesrep;
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;

            // @class Opportunity.Model
        }
	,	getDocs: function(filter)
		{
			
			var returnString = {};
			try{
				
				var filters = {
						'display_in_website': ['custrecord_display_in_website', 'is', 'T']
					,	'isinactive_operator': 'and'
					,	'isinactive': ['isinactive', 'is', 'F']
				};
				
				if(filter){
					
					var vendor = filter.split('-')[0];
					var category = filter.split('-')[1];
					
					if(vendor && vendor != 'all'){
						filters['vendors_operator'] = 'and';
						filters['vendors'] = ['custrecord_vendors', 'anyof', vendor];
					}
					if(category && category != 'all'){
						filters['category_operator'] = 'and';
						filters['category'] = ['custrecord_download_category', 'anyof', category];
					}
				}
				
				

				var columns = {
						'name': new nlobjSearchColumn('name')
					,	'doc': new nlobjSearchColumn('custrecord_website_download')
					,	'vendor': new nlobjSearchColumn('custrecord_vendors')
					,	'category': new nlobjSearchColumn('custrecord_download_category')
				};
				
				var search_results = Application.getAllSearchResults('customrecord_website_download', _.values(filters), _.values(columns));
				
				var documents = _.map(search_results || [], function (record)
				{
					var fileId = record.getValue('custrecord_website_download');
					var docUrl = '';
					if(fileId){
						var file = nlapiLoadFile(fileId);
						docUrl = file.getURL();
					}
					var result = {
						name: record.getValue('name')
					,	docUrl: docUrl
					,	vendor: record.getText('custrecord_vendors')
					,	category: record.getText('custrecord_download_category')
					,	group: record.getText('custrecord_vendors') + '  :  ' + record.getText('custrecord_download_category')
					};
					

					return result;
				});
				var collection = [];
				if(documents && documents.length > 0){
					documents = _.sortBy(documents,function(obj){ return obj.group.toLowerCase(); });
					documents = _.groupBy(documents,'group');
					
					for (var key in documents) {
						
						collection.push({
							key: key,
							items: documents[key]
						});
					}
				}
				
				returnString.documents = collection;
				
				//to get select options
				var record = nlapiCreateRecord('customrecord_website_download');
				var downloadCat = record.getField('custrecord_download_category');
				var vendors = record.getField('custrecord_vendors');

				var downloadCatOptions = _.map(downloadCat.getSelectOptions(), function(opt){
				 
					return {
						id: opt.getId(),
						name: opt.getText() 
					};
				});
				returnString.downloadCatOptions = (downloadCatOptions && downloadCatOptions.length >0)? _.sortBy(downloadCatOptions,function(obj){ return obj.name.toLowerCase(); }): [];
				
				var vendorsOptions = _.map(vendors.getSelectOptions(), function(opt){
				 
					return {
						id: opt.getId(),
						name: opt.getText() 
					};
				});
				returnString.vendorsOptions = (vendorsOptions && vendorsOptions.length >0)? _.sortBy(vendorsOptions,function(obj){ return obj.name.toLowerCase(); }): [];
				
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
			
		}
	,	prepareEmail: function(orderId,custEmail)
		{
			var returnString = {};
			try{
			
				const emails = nlapiLookupField('customer', nlapiGetUser(),['salesrep.email','email','salesrep']);
				
				var salesrepEmail = (emails && _.has(emails,'salesrep.email'))?emails['salesrep.email']: '';
				var userEmail = (emails && _.has(emails,'email'))?emails['email']: '';
				var salesrepId = (emails && _.has(emails,'salesrep'))?emails['salesrep']: '';
				
				if(userEmail != custEmail){
					this.findContact(nlapiGetUser(),custEmail);
				}
				
				if(salesrepId){
					this.sendEmail('417',orderId,salesrepEmail,salesrepId);
					this.sendEmail('418',orderId,custEmail,salesrepId);
					returnString.email = 'OK';
				}
				else{
					returnString.email = 'no salesrep';
				}
				
			}
			catch(e){
				returnString.emailError = e.toString();
			}
			return returnString;

		}
	,	findContact: function(custId,custEmail){
		
			var searchContacts = nlapiSearchRecord('customer',null,[['internalid','is',custId],'and',['contact.email','is',custEmail]],new nlobjSearchColumn('internalid','contact'));

			this.contactId = (searchContacts && searchContacts.length > 0)? searchContacts[0].getValue('internalid','contact'):'';

		}
	,	sendEmail: function(templateId,orderId,toEmail,salesrepId){

			var emailMerger = nlapiCreateEmailMerger(templateId);
			
			if(this.contactId){
				emailMerger.setEntity('contact', this.contactId);
			}
			
			emailMerger.setEntity('customer', nlapiGetUser());
			
			emailMerger.setTransaction(orderId); 
			
			var mergeResult = emailMerger.merge(); 
			var emailSubject = mergeResult.getSubject();
			var emailBody = mergeResult.getBody(); 
			
			var records = {'transaction': orderId};

			nlapiSendEmail(salesrepId, toEmail, emailSubject, emailBody,null, null, records);
		}
		
	});

});
