// @module Demo.TrackMyOrders.TrackMyOrdersModule
define('Demo.TrackMyOrders.TrackMyOrdersModule.View'
,	[
	'demo_trackmyorders_trackmyordersmodule.tpl'
	
	// ,	'Demo.TrackMyOrders.TrackMyOrdersModule.SS2Model'

	,'Demo.TrackMyOrders.TrackMyOrdersModule.Model'
	
	, 'Backbone'
	, 'Utils'
	, 'Transaction.List.View'
	, 'OrderHistory.Collection'
	, 'GlobalViews.Pagination.View'
	, 'GlobalViews.ShowingCurrent.View'
	, 'ListHeader.View'
	, 'RecordViews.Actionable.View'
	, 'Configuration'
	, 'Handlebars'
	, 'Backbone.CollectionView'
	, 'OrderHistory.List.Tracking.Number.View'
    ]
, function (
	demo_trackmyorders_trackmyordersmodule_tpl
	
	// ,	TrackMyOrdersModuleSS2Model

	,	TrackMyOrdersModuleModel
	
	, Backbone
	, Utils
	, TransactionListView
	, OrderHistoryCollection
	, GlobalViewsPaginationView
	, GlobalViewsShowingCurrentView
	, ListHeaderView
	, RecordViewsActionableView
	, Configuration
	, Handlebars
	, BackboneCollectionView
	, OrderHistoryListTrackingNumberView
)
{
    'use strict';

	// @class Demo.TrackMyOrders.TrackMyOrdersModule.View @extends Backbone.View
	return TransactionListView.extend({

		template: demo_trackmyorders_trackmyordersmodule_tpl,
		page_header: Utils.translate('Track My Orders'),
		 title: Utils.translate('Track My Orders'),
		getBreadcrumbPages: function () {
			return {
				text: this.title,
				href: '/track-my-orders'
			};
		}

		, initialize: function (options) {
			console.log("Starting Track My Orders Module");
			this.application = options.application;
				this.collection = new OrderHistoryCollection();
				const isoDate = Utils.dateToString(new Date());
				this.rangeFilterOptions = {
					fromMin: '1800-01-02',
					fromMax: isoDate,
					toMin: '1800-01-02',
					toMax: isoDate
				};

				this.listenCollection();
				this.listHeader = new ListHeaderView({
					view: this,
					application: this.application,
					collection: this.collection,
					sorts: this.sortOptions,
					statusSorts: this.statusSortOptions,
					selected_order_id:this.selected_order_id,
					selected_status:this.selected_status,
					isFromTrackOrders: true,
					rangeFilter: 'date',
					rangeFilterLabel: Utils.translate('From'),
					hidePagination: true,
					allowEmptyBoundaries: true,
					MyOrdersFilter: true,
					// statusfilterlabels: this.statusfilterlabels?this.statusfilterlabels:[],
				});

				// console.log("initialze ", this)
				this.collection.on('reset', this.showContent, this);
		
			// 				console.log("TMO initialize this",this);
			// console.log("TMO collection",this.collection);
			},

			listenCollection: function () {
				this.setLoading(true);
				this.collection.on({
					request: jQuery.proxy(this, 'setLoading', true),
					reset: jQuery.proxy(this, 'setLoading', false)
				});
			},

			setLoading: function (value) {
				this.isLoading = value;
			},

			sortOptions: [
				{
					value: 'trandate,internalid',
					name: Utils.translate('Sort By Date'),
					selected: true
				},
				{
					value: 'tranid',
					name: Utils.translate('Sort By Number')
				},
				{
					value: 'amount',
					name: Utils.translate('Sort By Amount')
				}
			],

			statusSortOptions: [
				{
					value: 'Pending Fulfillment',
					name: Utils.translate('Pending Fulfillment')
				},
				{
					value: 'Pending Approval',
					name: Utils.translate('Pending Approval'),
					// selected: true
				},
				{
					value: 'Shipped',
					name: Utils.translate('Shipped')
				},
				{
					value: 'Pending Billing',
					name: Utils.translate('Pending Billing'),
					selected: true
				},
			
				{
					value: 'Closed',
					name: Utils.translate('Closed')
				}
			],

			childViews: {
				ListHeader: function () {
					return this.listHeader;
				},
				'GlobalViews.Pagination': function () {
					return new GlobalViewsPaginationView(
						_.extend(
							{
								totalPages: Math.ceil(
									this.collection.totalRecordsFound / this.collection.recordsPerPage
								)
							},
							Configuration.defaultPaginationSettings
						)
					);
				},
				'GlobalViews.ShowCurrentPage': function () {
					return new GlobalViewsShowingCurrentView({
						items_per_page: this.collection.recordsPerPage,
						total_items: this.collection.totalRecordsFound,
						total_pages: Math.ceil(
							this.collection.totalRecordsFound / this.collection.recordsPerPage
						)
					});
				},
				'Order.History.Results': function () {
					return this._resultsView;
				}
			},
			_buildResultsView: function() {
				const self = this;
				let selectedColumns = [];
				console.log("Configuration.get().transactionListColumns",Configuration.get().transactionListColumns)
				if (!Configuration.get().transactionListColumns.enableOrderHistory) {
					// selectedColumns.push({ label: 'Date', id: 'trandate', type: 'date' });
					// selectedColumns.push({label: 'Amount',name: 'amount',id: 'amount_formatted',type: 'currency'});
					// if (self.isSCISIntegrationEnabled) {	
					// 	selectedColumns.push({ label: 'Origin', id: 'origin' });
					// } else {
						selectedColumns.push({ label: 'Status', id: 'status', type: 'status' });
					// }
				} else {
					selectedColumns = Configuration.get().transactionListColumns.orderHistory;
				}

				const records_collection = new Backbone.Collection(

					this.collection.map(function(order) {
						const model = new Backbone.Model({
							title: new Handlebars.SafeString(
								Utils.translate('<span class="tranid">$(0)</span>', order.get('internalid'))
							),
							touchpoint: 'customercenter',
							detailsURL: `/purchases/view/${order.get('recordtype')}/${order.get(
								'internalid'
							)}`,
							recordType: order.get('recordtype'),
							id: order.get('internalid'),
							internalid: order.get('internalid'),
							trackingNumbers: order.get('trackingnumbers'),
							columns: self._buildColumns(selectedColumns, order)
						});
						return model;
					})
				);
					console.log("selectedColumns",selectedColumns)
				return new BackboneCollectionView({
					childView: RecordViewsActionableView,
					collection: records_collection,
					viewsPerRow: 1,
					childViewOptions: {
						actionView: OrderHistoryListTrackingNumberView,
						actionOptions: {
							showContentOnEmpty: false,  // track items content will not be show on setting it to false
							contentClass: '',
							collapseElements: true
						}
					}
				});
			},
		
			events: {

			}

			, bindings: {


			},

			getContext: function () {
				var self = this;
				console.log("this.collection.length", this.collection.length)
				this._resultsView = this._buildResultsView();
				let columns = [];
				self.statusfilterlabels = [];
				if (this._resultsView.collection.length > 0) {
					columns = this._resultsView.collection.at(0).get('columns');

					_.each(this._resultsView.collection.models, function(model){
						if(!_.contains(self.statusfilterlabels, model.get('columns')[0].value)) {
							self.statusfilterlabels.push(model.get('columns')[0].value);
						}
						// console.log("model.get('columns')[0].value", model.get('columns')[0].value);
						// console.log("model.get('status')", model.get('status'));
					})
					// statusfilterlabels
					// console.log("result view",this._resultsView.collection);
				}

				// console.log("columns outside",columns);
				// console.log("statusfilter label",self.statusfilterlabels);
			
				// @class OrderHistory.List.View.Context
				return {
				        // @property {String} pageHeader
            pageHeader: this.page_header,
            // @property {Boolean} collectionLengthGreaterThan0
            collectionLengthGreaterThan0: this.collection.length > 0,
            // @property {Boolean} isLoading
            isLoading: this.isLoading,
            // @property {Boolean} showPagination
            showPagination: !!(this.collection.totalRecordsFound && this.collection.recordsPerPage),
            // @property {Boolean} showBackToAccount
            showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD',
            // @property {Boolean} isSCISIntegrationEnabled
            isSCISIntegrationEnabled: this.isSCISIntegrationEnabled,
            // @property {Boolean} allIsActive
            allIsActive: this.activeTab === 'all',
            // @property {Boolean} openIsActive
            openIsActive: this.activeTab === 'open',
            // @property {Boolean} inStoreIsActive
            inStoreIsActive: this.activeTab === 'instore',
            // @property {Array<{}>} columns
            columns: columns    
				};
		}
	});
});
