/// <amd-module name="DownItems.List.View"/>

import * as _ from 'underscore';
import * as order_history_list_tpl from 'order_history_list.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';
import { ListHeaderView } from '../../../Commons/ListHeader/JavaScript/ListHeader.View';
import { GlobalViewsPaginationView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View';
import { GlobalViewsShowingCurrentView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.ShowingCurrent.View';

import OrderHistoryListTrackingNumberView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.List.Tracking.Number.View');
import TransactionListView = require('../../../Commons/Transaction/JavaScript/Transaction.List.View');
import OrderHistoryCollection = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.Collection');
import RecordViewsActionableView = require('../../../Advanced/RecordViews/JavaScript/RecordViews.Actionable.View');
import Handlebars = require('../../../Commons/Utilities/JavaScript/Handlebars');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');

// @class OrderHistory.List.View view list of orders @extend Backbone.View
const DownItemsListView: any = TransactionListView.extend({
		//@property {Function} template
		template: order_history_list_tpl
		//@property {String} title
	,	title: Utils.translate('Downloadable Items')
		//@property {String} className
	,	className: 'DownItemsListView'
		//@property {String} page_header
	,	page_header: Utils.translate('Downloadable Items')
		//@property {Object} attributes
	,	attributes: {
			'id': 'downloadableitems'
		,	'class': 'DownItemsListView'
		}
		//@property {Object} events
	,	events: {
			//'click [data-action="navigate"]': 'navigateToOrder'
		}
		//@method getSelectedMenu
	,	getSelectedMenu: function ()
		{
			return 'downloadableitems';
		}
		//@method getBreadcrumbPages
	,	getBreadcrumbPages: function ()
		{
			return {
					text: this.title
				,	href: '/downloadable-items'
			};
		}
		//@method initialize
	,	initialize: function (options)
		{
			this.application = options.application;
			
			this.collection = new OrderHistoryCollection([], {
					filters: 'downitems:true'
				});
			this.activeTab = 'all';
			
			this.isSCISIntegrationEnabled = Configuration.get('siteSettings.isSCISIntegrationEnabled', false);

			var isoDate = Utils.dateToString(new Date());

			this.rangeFilterOptions = {
				fromMin: '1800-01-02'
			,	fromMax: isoDate
			,	toMin: '1800-01-02'
			,	toMax: isoDate
			};

			this.listenCollection();

			// Manages sorting and filtering of the collection
			this.listHeader = new ListHeaderView({
				view: this
			,	application: this.application
			,	collection: this.collection
			,	sorts: this.sortOptions
			,	rangeFilter: 'date'
			,	rangeFilterLabel: Utils.translate('From')
			,	hidePagination: true
			,   allowEmptyBoundaries: true
			//,	filters: this.filterOptions
			});
			this.collection.on('reset', this.showContent, this);
		}
	
		//@method listenCollection
	,	listenCollection: function ()
		{
			this.setLoading(true);

			this.collection.on({
				request: jQuery.proxy(this, 'setLoading', true)
			,	reset: jQuery.proxy(this, 'setLoading', false)
			});
		}
		//@method setLoading
	,	setLoading: function (value)
		{
			this.isLoading = value;
		}
	,	getStringDateFromDaysCount: function (days_back)
		{
			var now = new Date();
			return new Date(now.setDate(now.getDate() - days_back));
		}
		//@property {Array} sortOptions
		// Array of default sort options
		// sorts only apply on the current collection
		// which might be a filtered version of the original
	,	sortOptions: [
			{
				value: 'custrecord_appf_downloadable_item'
			,	name: Utils.translate('Sort By Item')
			,	selected: true
			}
		,	{
				value: 'created'
			,	name: Utils.translate('Sort By Date')
			}
		
		]
	,	filterOptions: [
			{
				value: function ()
				{
					return Utils.dateToString(this.getStringDateFromDaysCount(15)) + 'T'+ Utils.dateToString(new Date());
				}
			,	name: Utils.translate('Show last 15 days')
			,	className: 'reorder-items-filter-last-15-days'
			,	selected: true
			}
		,	{
				value: function ()
				{
					return Utils.dateToString(this.getStringDateFromDaysCount(30)) + 'T'+ Utils.dateToString(new Date());
				}
			,	name: Utils.translate('Show last 30 days')
			,	className: 'reorder-items-filter-last-30-days'
			}
		,	{
				value: function ()
				{
					return Utils.dateToString(this.getStringDateFromDaysCount(60)) + 'T'+ Utils.dateToString(new Date());
				}
			,	name: Utils.translate('Show last 60 days')
			,	className: 'reorder-items-filter-last-60-days'
			}
		,	{
				value: function ()
				{
					return Utils.dateToString(this.getStringDateFromDaysCount(90)) + 'T'+ Utils.dateToString(new Date());
				}
			,	name: Utils.translate('Show last 90 days')
			,	className: 'reorder-items-filter-last-90-days'
			}
		,	{
				value: function ()
				{
					return Utils.dateToString(this.getStringDateFromDaysCount(180)) + 'T'+ Utils.dateToString(new Date());
				}
			,	name: Utils.translate('Show last 180 days')
			,	className: 'reorder-items-filter-last-180-days'
			}
		]
		//@property {Object} childViews
	,	childViews: {
			'ListHeader': function ()
			{
				return this.listHeader;
			}
		,	'GlobalViews.Pagination': function ()
			{
				return new GlobalViewsPaginationView(_.extend({
					totalPages: Math.ceil(this.collection.totalRecordsFound / this.collection.recordsPerPage)
				}, Configuration.defaultPaginationSettings));
			}
		,	'GlobalViews.ShowCurrentPage': function ()
			{
				return new GlobalViewsShowingCurrentView({
					items_per_page: this.collection.recordsPerPage
		 		,	total_items: this.collection.totalRecordsFound
				,	total_pages: Math.ceil(this.collection.totalRecordsFound / this.collection.recordsPerPage)
				});
			}
		,	'Order.History.Results': function ()
			{
				return this._resultsView;
			}
		}
	,	_buildResultsView: function ()
		{
			var self = this
			var selectedColumns = [];

			
			selectedColumns.push({label: 'Item Name', id: 'item', type:'item'});
			
			selectedColumns.push({label: 'Date', id: 'created', type:'created'});
			
			
			
			
			var	records_collection = new Backbone.Collection(this.collection.map(function (order)
			{
				var soName = (order.get('soName')).replace('Sales Order #','');
				
				var model = new Backbone.Model({
						title: new Handlebars.SafeString(Utils.translate('<span class="tranid">' + soName + '</span>'))
					,	touchpoint: 'customercenter'
					,	detailsURL: '/purchases/view/salesorder/' + order.get('tranid')
					,	recordType: order.get('recordtype')
					,	id: order.get('internalid')
					,	internalid: order.get('internalid')
					,	isDownloadable: order.get('isDownloadable')
					,	itemId: order.get('itemId')
					,	columns: self._buildColumns(selectedColumns, order)
				});
				return model;
			}));

			return new BackboneCollectionView({
					childView: RecordViewsActionableView
				,	collection: records_collection
				,	viewsPerRow: 1
				,	childViewOptions: {
						actionView: OrderHistoryListTrackingNumberView
					,	actionOptions: {
							showContentOnEmpty: true
						,	contentClass: ''
						,	collapseElements: true
						,	downloadableitems: true
					}
				}
			});
		}

		//@method getContext @return DownItems.List.View.Context
	,	getContext: function ()
		{	
			//console.log(this);
			this._resultsView = this._buildResultsView();
			var columns = [];
			if (this._resultsView.collection.length > 0)
			{
				columns = this._resultsView.collection.at(0).get('columns');
			}
			//@class DownItems.List.View.Context
			return {
				//@property {String} pageHeader
				pageHeader: this.page_header
				//@property {Boolean} collectionLengthGreaterThan0
			,	collectionLengthGreaterThan0: this.collection.length > 0
				//@property {Boolean} isLoading
			,	isLoading: this.isLoading
				// @property {Boolean} showPagination
			,	showPagination: !!(this.collection.totalRecordsFound && this.collection.recordsPerPage)
				//@property {Boolean} showBackToAccount
			,	showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD'
				//@property {Boolean} isSCISIntegrationEnabled
			,	isSCISIntegrationEnabled: this.isSCISIntegrationEnabled
				//@property {Boolean} allIsActive
			,	allIsActive: this.activeTab === 'all'
				//@property {Boolean} openIsActive
			,	openIsActive: this.activeTab === 'open'
				//@property {Boolean} inStoreIsActive
			,	inStoreIsActive: this.activeTab === 'instore'
				//@property {Array<{}>} columns
			,	columns: columns
			,	downitems: true
			};
		}
	});

export = DownItemsListView;