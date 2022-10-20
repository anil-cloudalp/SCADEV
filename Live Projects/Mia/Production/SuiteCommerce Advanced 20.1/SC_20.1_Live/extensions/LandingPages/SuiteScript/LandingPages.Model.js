
//@MODULE LandingPages

define('LandingPages.Model'
, [
	'Models.Init'
	, 'SC.Model'
	, 'underscore'
	, 'Application'
	,	'StoreItem.Model'
]
, function
(
	ModelsInit
	, SCModel
	, _
	, Application
	,	StoreItem
)
{

	'use strict';
	
	
	return SCModel.extend({

		name: 'LandingPages.Model'

	,	getVendors: function(isHome)
		{
			
			var returnString = {};
			try{
				var filters = {
						'display_in_website': ['custrecord_vendors_display_in_website', 'is', 'T']
					,	'isinactive_operator': 'and'
					,	'isinactive': ['isinactive', 'is', 'F']
				};

				var columns = {
						'internalid': new nlobjSearchColumn('internalid')
					,	'sequence_no': new nlobjSearchColumn('custrecord_vendors_sequence_no')
					,	'name': new nlobjSearchColumn('name')
					,	'description': new nlobjSearchColumn('custrecord_vendors_detail_description')
					,	'image': new nlobjSearchColumn('custrecord_vendors_detail_image')
					,	'url': new nlobjSearchColumn('custrecord_vendors_detail_url')
					,	'thumbnail': new nlobjSearchColumn('custrecord_vendors_thumbnail_image')
					,	'type': new nlobjSearchColumn('custrecord_vendors_type')
				};
				if(isHome)
					columns['internalid'].setSort();
				else
					columns['sequence_no'].setSort();
				
				var search_results = Application.getAllSearchResults('customrecord_vendors_list', _.values(filters), _.values(columns));
				
				var allTypes = [];
				
				returnString.vendors = _.map(search_results || [], function (record)
				{
					
					var vendorsType = record.getText('custrecord_vendors_type');
					
					if(vendorsType){
					
						var types = vendorsType.split(',');
						
						types.forEach(function(type){
						
							if(allTypes.indexOf(type) == -1){
								allTypes.push(type)
							}
						});
					
					}
					var result = {
						
						name: record.getValue('name')
					,	description: record.getValue('custrecord_vendors_detail_description')
					,	image: record.getText('custrecord_vendors_detail_image')
					,	url: record.getValue('custrecord_vendors_detail_url')
					,	thumbnail: record.getText('custrecord_vendors_thumbnail_image')
					,	type: vendorsType
					};

					return result;
				});
				
				returnString.types = allTypes.sort();
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
			
		}
	,	getCategoryFields: function(categoryids)
		{
			
			var returnString = {};
			try{
				var filters = {
						'display_in_website': ['displayinsite', 'is', 'T']
					,	'isinactive_operator': 'and'
					,	'isinactive': ['isinactive', 'is', 'F']
					,	'internalid_operator': 'and'
					,	'internalid': ['internalid', 'anyof', categoryids]
				};

				var columns = {
						'internalid': new nlobjSearchColumn('internalid')
					,	'banner': new nlobjSearchColumn('pagebanner')
					,	'video': new nlobjSearchColumn('custrecord_category_embed_video')
					,	'right_to_video': new nlobjSearchColumn('custrecord_image_right_to_video')
					,	'level': new nlobjSearchColumn('nestlevel')
					,	'itemId': new nlobjSearchColumn('custrecord_featured_item')
					,	'itemType': new nlobjSearchColumn('type','custrecord_featured_item')
				};
				
				columns['level'].setSort();
				
				var search_results = Application.getAllSearchResults('commercecategory', _.values(filters), _.values(columns));
				
				returnString.catFields = _.map(search_results || [], function (record)
				{
					var fileID = record.getValue('pagebanner');
					var imageUrl = '';
					if(fileID){
						var file = nlapiLoadFile(fileID);
						imageUrl = file.getURL();
					}
					var result = {
						
						internalid: record.getValue('internalid')
					,	banner: imageUrl
					,	video: record.getValue('custrecord_category_embed_video')
					,	rightToVideo: record.getText('custrecord_image_right_to_video')
					,	level: record.getValue('nestlevel')
					,	itemId: record.getValue('custrecord_featured_item')
					,	itemType: record.getValue('type','custrecord_featured_item')
					};
					if(result.itemId && result.itemType){
						result.item = StoreItem.get(result.itemId,result.itemType,'details');
					}
					return result;
				});
				
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
			
		}
	,	getListData: function(){
			
			var returnString = {};
			
			try{
				var record = nlapiCreateRecord('lead');
				
				var territory = record.getField('custentity_territory');
				var hearAboutUs = record.getField('leadsource');
				var distributorRelationship = record.getField('custentity8');
				var brandSold = record.getField('custentity_os_brand_sold');
				var marketSegment = record.getField('custentity5');
				var industryType = record.getField('custentity7');
				var voicePlatform = record.getField('custentity4');
				
				var addrSubrecord = record.createCurrentLineItemSubrecord('addressbook', 'addressbookaddress');
				var country = addrSubrecord.getField('country'); 
				
				var listOptions = {};
				listOptions.territory = this.getOptions(territory);
				listOptions.hearAboutUs = this.getOptions(hearAboutUs);
				listOptions.distributorRelationship = this.getOptions(distributorRelationship);
				listOptions.brandSold = this.getOptions(brandSold);
				listOptions.marketSegment = this.getOptions(marketSegment);
				listOptions.industryType = this.getOptions(industryType);
				listOptions.voicePlatform = this.getOptions(voicePlatform);
				listOptions.countries = this.getOptions(country);
				
				returnString.listOptions = listOptions;
				
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
		}
	,	getOptions: function(listField){
			
			
			var listOptions = _.map(listField.getSelectOptions(), function(opt){
			 
				return {
					id: opt.getId(),
					name: opt.getText() 
				};
			});
			
			var returnValue = (listOptions && listOptions.length > 0)? _.sortBy(listOptions,function(obj){ return obj.name.toLowerCase(); }): [];
			
			return returnValue;
		}
	,	addOption: function(fieldKey,value){
			
			var returnString = {};
			var mappingList = {
				'distributorRelationship': 'customlist563',
				'brandSold': 'customlist201',
				'voicePlatform': 'customlist558'
			};
			try{
				var recordType = mappingList[fieldKey];
				
				if(recordType){
					var record = nlapiCreateRecord(recordType);
					
					record.setFieldValue('name',value);
					
					returnString.recordId = nlapiSubmitRecord(record,true,true);
				}
				//returnString.recordId = '2';
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
		}
	,	createLead: function(data){
		
			var returnString = {};
			console.warn('data: ',JSON.stringify(data));
			try{
				
				var search = nlapiSearchRecord('customer',null,['email','is',data.email],null);
				
				if(search && search.length){
					
					var record = nlapiLoadRecord('lead',search[0].getId());
				}
				else{
					var	record = nlapiCreateRecord('lead');
					record.setFieldValue('email',data.email);
				}
				record.setFieldValue('companyname',data.companyname);
				record.setFieldValue('custentity1',data.abn);
				
				if(data.bizphone)
					record.setFieldValue('custentity_business_phone',data.bizphone);
				
				
				record.selectNewLineItem('addressbook');
				record.setCurrentLineItemValue('addressbook','addressee',data.firstname + " " + data.lastname);
				record.setCurrentLineItemValue('addressbook','addr1',data.address1);
				
				if(data.address2)
					record.setCurrentLineItemValue('addressbook','addr2',data.address2);
					
				record.setCurrentLineItemValue('addressbook','city',data.city);
				record.setCurrentLineItemValue('addressbook','country',data.country);
				record.setCurrentLineItemValue('addressbook','zip',data.zipcode);
				
				if(data.phone)
					record.setCurrentLineItemValue('addressbook','addrphone',data.phone);
					
				record.commitLineItem('addressbook');
				
				record.setFieldValue('custentity_territory',data.territory);
				record.setFieldValue('firstname',data.firstname);
				record.setFieldValue('lastname',data.lastname);
				
				if(data.jobtitle)
					record.setFieldValue('title',data.jobtitle);
					
				
				if(data.phone)
					record.setFieldValue('phone',data.phone);
					
				record.setFieldValue('custentity_login_email',data.loginemail);
				record.setFieldValue('comments',data.prodofinterest);
				
				if(data.hearaboutus)
					record.setFieldValue('leadsource',data.hearaboutus);
				
				//if(data.distributorRelationship)
				//	record.setFieldValue('custentity8',data.distributorRelationship);
				
				if(data.currentdistributorrelationship)
					record.setFieldValue('custentitycurrent_distributor_rel_web',data.currentdistributorrelationship);
				
				if(data.brandSold)
					record.setFieldValue('custentity_os_brand_sold',data.brandSold);
					
				if(data.marketSegment)
					record.setFieldValue('custentity5',data.marketSegment);
					
				if(data.industryType)
					record.setFieldValue('custentity7',data.industryType);
				
				if(data.voicePlatform)
					record.setFieldValue('custentity4',data.voicePlatform);
				
				returnString.recordId = nlapiSubmitRecord(record,true,true);
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
		
		}
		// get-in-touch-model=================
	,	register: function(contactFields) {
	
			var firstname = contactFields['firstname']
			,  lastname = contactFields['lastname']
			,  email = contactFields['email']
			,  phone = contactFields['phone']|| ''
			,  comments = contactFields['comments']|| ''
			,  companyname = contactFields['company']|| ''
		
			var returnString = {};
	
			if(firstname != null && firstname != '' && lastname != null && lastname != '' && email != null && email != '')
			{
				try{
					var filters = [];
					filters.push(new nlobjSearchFilter('email',null,'is',email));
	
					var search = nlapiSearchRecord('customer',null,filters,null);
					if(search != null)
					var record = nlapiLoadRecord('lead',search[0].getId());
					else
					var record = nlapiCreateRecord('lead');
					record.setFieldValue('entityid',firstname+" "+lastname);
					record.setFieldValue('firstname',firstname);
					record.setFieldValue('lastname',lastname);
					record.setFieldValue('email',email);
					record.setFieldValue('phone',phone);
					
					if(comments != null && comments != '')
					record.setFieldValue('comments',comments);
					
	
					var recId =  nlapiSubmitRecord(record,true,true);
					returnString.id = recId;
				
				}
				catch(e){
					returnString.error = e.toString();
				}
			}
			return returnString;
	
	
		}
		
	});

});
