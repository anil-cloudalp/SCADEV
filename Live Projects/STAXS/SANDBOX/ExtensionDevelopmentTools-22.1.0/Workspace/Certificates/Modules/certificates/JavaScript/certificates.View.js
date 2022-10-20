// @module STAXS.Certificates.certificates
define('STAXS.Certificates.certificates.View'
	, [
		'staxs_certificates_certificates.tpl'
		, 'STAXS.Certificates.certificates.Model'
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
		staxs_certificates_certificates_tpl
		, certificatesModel
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
	) {
		'use strict';

		// @class STAXS.Certificates.certificates.View @extends Backbone.View
		return TransactionListView.extend({

			template: staxs_certificates_certificates_tpl,
			page_header: Utils.translate('My Certificates')
			, title: Utils.translate('My Certificates'),
			getBreadcrumbPages: function () {
				return {
					text: this.title,
					href: '/certificates'
				};
			}
			, initialize: function (options) {
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
					//rangeFilter: 'date',
					rangeFilterLabel: Utils.translate('From'),
					hidePagination: true,
					isFromCertificates: true,
					isFromHistoricalCertificates:true,
					StaxsLotNumber: true,
					ExternalLotNum: true,
					SalesOrder: false,
					ShowItemNumberOrName: true,
					PackingNote: false,
					allowEmptyBoundaries: true
				});
				this.collection.on('reset', this.showContent, this);
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
			_buildResultsView: function () {
				const self = this;
				let selectedColumns = [];
				selectedColumns.push({ label: 'item name', id: 'itemNumber', type: 'text' });
				selectedColumns.push({ label: 'STAXS Lot Number', id: 'staxs_lot_number', type: 'text' });
				selectedColumns.push({ label: 'External Lot Number', id: 'external_lot_number', type: 'text' });
				selectedColumns.push({ label: 'Certificates', id: 'Certificate_location', type: 'text' });
				const records_collection = new Backbone.Collection(
					this.collection.map(function (order) {
						
						const model = new Backbone.Model({
							columns: self._buildColumns(selectedColumns, order)
						});
						return model;
					})
				);
				return new BackboneCollectionView({
					childView: RecordViewsActionableView,
					collection: records_collection,
					viewsPerRow: 1,
					childViewOptions: {
						actionView: OrderHistoryListTrackingNumberView,
						actionOptions: {
							showContentOnEmpty: true,
							contentClass: '',
							collapseElements: true
						},
						hideorderNumber: true,
						hideTrack: true,
						showCertificates: false
					}
				});
			},

			events: {

			}

			, bindings: {


			},

			getContext: function () {
				this._resultsView = this._buildResultsView();
				let columns = [];
				if (this._resultsView.collection.length > 0) {
					columns = this._resultsView.collection.at(0).get('columns');
				}
				// @class OrderHistory.List.View.Context
				return {
					// @property {String} pageHeader
					pageHeader: this.page_header,
					// @property {Boolean} collectionLengthGreaterThan0
					collectionLengthGreaterThan0: this.collection.length > 0,
					// @property {Boolean} isLoading
					isLoading: this.isLoading,
					showPagination: !!(this.collection.totalRecordsFound && this.collection.recordsPerPage),
					showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD',
					isSCISIntegrationEnabled: this.isSCISIntegrationEnabled,
					columns: columns
				};
			}
		});
	});

