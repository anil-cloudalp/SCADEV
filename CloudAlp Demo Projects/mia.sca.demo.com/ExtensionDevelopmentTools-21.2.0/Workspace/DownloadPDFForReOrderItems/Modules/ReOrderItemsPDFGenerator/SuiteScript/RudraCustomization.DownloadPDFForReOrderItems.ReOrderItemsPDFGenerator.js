// RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.js
// Load all your starter dependencies in backend for your extension here
// ----------------


define('RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator'
,	[
		'RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.ServiceController'
	,	'ReorderItems.Model'
	,	'SC.Models.Init'
    ,	'Application'
    ,	'StoreItem.Model'
    ,	'SiteSettings.Model'
    ,	'Utils'
    ,	'underscore'
    ,	'Transaction.Model'
    ,	'Configuration'
	]
,	function (
		ReOrderItemsPDFGeneratorServiceController
	,	ReorderItemsModel
	,	ModelsInit
    ,	Application
    ,	StoreItem
    ,	SiteSettings
    ,	Utils
    ,	_
    ,	Transaction
    ,	Configuration
	)
{
	'use strict';

	ReorderItemsModel.isMultiSite= ModelsInit.context.getFeature('MULTISITE');

	ReorderItemsModel.search = function(order_id, query_filters){
		const filters = {
			entity: ['entity', 'is', nlapiGetUser()],
			entity_operator: 'and',
			quantity: ['quantity', 'greaterthan', 0],
			quantity_operator: 'and',
			mainline: ['mainline', 'is', 'F'],
			mainline_operator: 'and',
			cogs: ['cogs', 'is', 'F'],
			cogs_operator: 'and',
			taxline: ['taxline', 'is', 'F'],
			taxline_operator: 'and',
			shipping: ['shipping', 'is', 'F'],
			shipping_operator: 'and',
			transactiondiscount: ['transactiondiscount', 'is', 'F'],
			transactiondiscount_operator: 'and',
			item_is_active: ['item.isinactive', 'is', 'F'],
			item_is_active_operator: 'and',
			item_online: ['item.isonline', 'is', 'T'],
			item_online_operator: 'and',
			item_type: ['item.type', 'noneof', 'GiftCert']
		};
		const columns = [
			new nlobjSearchColumn('internalid', 'item', 'group'),
			new nlobjSearchColumn('type', 'item', 'group'),
			new nlobjSearchColumn('parent', 'item', 'group'),
			new nlobjSearchColumn('options', null, 'group'),
			// to sort by price we fetch the max onlinecustomerprice
			new nlobjSearchColumn('onlinecustomerprice', 'item', 'max'),
			// to sort by recently purchased we grab the last date the item was purchased
			new nlobjSearchColumn('trandate', null, 'max'),
			// to sort by frequently purchased we count the number of orders which contains an item
			new nlobjSearchColumn('internalid', null, 'count')
		];
		const item_name = new nlobjSearchColumn('formulatext', 'item', 'group');

		// when sorting by name, if the item has displayname we sort by that field, if not we sort by itemid
		item_name.setFormula(
			'case when LENGTH({item.storedisplayname}) > 0 then {item.storedisplayname} else (case when LENGTH({item.displayname}) > 0 then {item.displayname} else {item.itemid} end) end'
		);

		columns.push(item_name);

		const site_settings = SiteSettings.get();

		if (site_settings.isSCISIntegrationEnabled) {
			filters.scisrecords_operator = 'and';
			filters.scisrecords = [
				[
					['type', 'anyof', ['CashSale', 'CustInvc']],
					'and',
					['createdfrom', 'is', '@NONE@'],
					'and',
					[
						'location.locationtype',
						'is',
						Configuration.get('locationTypeMapping.store.internalid')
					],
					'and',
					['source', 'is', '@NONE@']
				],
				'or',
				[['type', 'anyof', ['SalesOrd']]]
			];
		} else {
			filters.type_operator = 'and';
			filters.type = ['type', 'anyof', ['SalesOrd']];
		}

		if (this.isMultiSite) {
			const site_id = ModelsInit.session.getSiteSettings(['siteid']).siteid;
			const filter_site_option = Configuration.get('filterSite.option');
			const filter_site_ids = Configuration.get('filterSite.ids');
			var search_filter_array = null;

			if (filter_site_option === 'current') {
				search_filter_array = [site_id, '@NONE@'];
			} else if (filter_site_option === 'siteIds') {
				search_filter_array = filter_site_ids;
				search_filter_array.push('@NONE@');
			}

			if (search_filter_array && search_filter_array.length) {
				filters.site_operator = 'and';
				filters.site = ['website', 'anyof', _.uniq(search_filter_array)];

				filters.item_website_operator = 'and';
				filters.item_website = ['item.website', 'anyof', _.uniq(search_filter_array)];
			}
		}

		// show only items from one order
		if (order_id) {
			filters.order_operator = 'and';
			filters.order_id = ['internalid', 'is', order_id];

			columns.push(new nlobjSearchColumn('tranid', null, 'group'));
		}

		if (query_filters.date.from && query_filters.date.to) {
		  
			filters.date_operator = 'and';

			query_filters.date.from = query_filters.date.from.split('-');
			query_filters.date.to = query_filters.date.to.split('-');

			filters.date = [
				'trandate',
				'within',
				new Date(
					query_filters.date.from[0],
					query_filters.date.from[1] - 1,
					query_filters.date.from[2]
				),
				new Date(
					query_filters.date.to[0],
					query_filters.date.to[1] - 1,
					query_filters.date.to[2]
				)
			];
 
		}

		// select field to sort by
		switch (query_filters.sort) {
			// sort by name
			case 'name':
				item_name.setSort(query_filters.order > 0);
				break;

			// sort by price
			case 'price':
				columns[4].setSort(query_filters.order > 0);
				break;

			// sort by recently purchased
			case 'date':
				columns[5].setSort(query_filters.order > 0);
				break;

			// sort by frequenlty purchased
			case 'quantity':
				columns[6].setSort(query_filters.order > 0);
				break;

			default:
				columns[6].setSort(true);
				break;
		}

		// fetch items
		
		// Get All Data 
		const allResult = Application.getAllSearchResults('transaction', _.values(filters),columns );
	
	const items_infoAllResult = _.map(allResult, function(line) {
		return {
			id: line.getValue('internalid', 'item', 'group'),
			type: line.getValue('type', 'item', 'group')
		};
	});


	if (items_infoAllResult.length) {
		// preload order's items information
		StoreItem.preloadItems(items_infoAllResult);

		var customAllData = _.map(allResult, function(line) {
			// prepare the collection for the frontend
			
			// @class ReorderItems.Model.Attributes
			return {
				// @property {StoreItem} item
				item: StoreItem.get(
					line.getValue('internalid', 'item', 'group'),
					line.getValue('type', 'item', 'group')
				),
				// @property {String} tranid
				tranid: line.getValue('tranid', null, 'group') || null,
				// @property {Array<Utils.ItemOptionsObject>} options
				options: Transaction.parseLineOptions(
					line.getValue('options', null, 'group')
				),
				// @property {String} trandate
				trandate: line.getValue('trandate', null, 'max')
			};
			// @class ReorderItems.Model
		});
		
	   
	}





		const result = Application.getPaginatedSearchResults({
			record_type: 'transaction',
			filters: _.values(filters),
			columns: columns,
			page: query_filters.page,
			// page: 'all',
			column_count: new nlobjSearchColumn('formulatext', null, 'count').setFormula(
				'CONCAT({item}, {options})'
			)
		});

		// prepare an item collection, this will be used to preload item's details
		const items_info = _.map(result.records, function(line) {
			return {
				id: line.getValue('internalid', 'item', 'group'),
				type: line.getValue('type', 'item', 'group')
			};
		});
		// result.htmlFile= nlapiLoadFile('1010302').getValue();
		// Add all Data as per our requirement in netsuite
		result.customAllData = customAllData;
	   
		if (items_info.length) {
			// preload order's items information
			StoreItem.preloadItems(items_info);

			result.records = _.map(result.records, function(line) {
				// prepare the collection for the frontend
				// @class ReorderItems.Model.Attributes
				return {
					// @property {StoreItem} item
					item: StoreItem.get(
						line.getValue('internalid', 'item', 'group'),
						line.getValue('type', 'item', 'group')
					),
					// @property {String} tranid
					tranid: line.getValue('tranid', null, 'group') || null,
					// @property {Array<Utils.ItemOptionsObject>} options
					options: Transaction.parseLineOptions(
						line.getValue('options', null, 'group')
					),
					// @property {String} trandate
					trandate: line.getValue('trandate', null, 'max')
				};
				// @class ReorderItems.Model
			});
			
		   
		}
	   
		return result;
	}

});