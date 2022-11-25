// @module CLOUDALPSCS.ConfigureItemsExt.ConfigureItemsModule
define('CLOUDALPSCS.ConfigureItemsExt.ConfigureItemsModule.View', [
	'cloudalpscs_configureitemsext_configureitemsmodule.tpl'

	, 'CLOUDALPSCS.ConfigureItemsExt.ConfigureItemsModule.SS2Model', 'Backbone', 'Utils', 'Transaction.List.View', 'ConfigureItems.Collection', 'GlobalViews.Pagination.View', 'GlobalViews.ShowingCurrent.View', 'ListHeader.View', 'RecordViews.Actionable.View', 'Handlebars', 'Backbone.CollectionView', 'OrderHistory.List.Tracking.Number.View','Transaction.Line.Views.Cell.Actionable.View'
], function (
	cloudalpscs_configureitemsext_configureitemsmodule_tpl

	, ConfigureItemsModuleSS2Model, Backbone, Utils, TransactionListView, ConfigureItemsCollection, GlobalViewsPaginationView, GlobalViewsShowingCurrentView, ListHeaderView, RecordViewsActionableView, Handlebars, BackboneCollectionView, OrderHistoryListTrackingNumberView,TransactionLineViewsCellActionableView
) {
	'use strict';

	// @class CLOUDALPSCS.ConfigureItemsExt.ConfigureItemsModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: cloudalpscs_configureitemsext_configureitemsmodule_tpl,
		page_header: Utils.translate('Configure Items'),
		title: Utils.translate('Configure Items'),
		getBreadcrumbPages: function () {
			return {
				text: this.title,
				href: '/configure-items'
			};
		},
		initialize: function (options) {
			this.application = options.application;
			this.collection = new ConfigureItemsCollection();
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
				// rangeFilter: 'date',
				// rangeFilterLabel: Utils.translate('From'),
				hidePagination: true,
				allowEmptyBoundaries: true
			});
			this.collection.on('reset', this.render, this);
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

		sortOptions: [{
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
					_.extend({
							totalPages: Math.ceil(
								this.collection.totalRecordsFound / this.collection.recordsPerPage
							)
						},
						SC.CONFIGURATION.defaultPaginationSettings
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
				'Reorder.Items': function()
			{
				var view = new BackboneCollectionView({
						collection: this.collection.filter(function (line){ return line.get('item').get('_id');})
					,	viewsPerRow: 1
					,	childView: TransactionLineViewsCellActionableView
					,	childViewOptions: {
								application: this.application
							,	navigable: true
							,	SummaryView: ReorderItemsActionsQuantityView
							,	ActionsView: ReorderItemsActionsAddToCartView
							,	showComparePrice: true
						}
				});

				this.collection.on('reset', function ()
				{
					view.render();
				});

				return view;
			}
		},
	

		events: {

		}

		,
		bindings: {


		},

		getContext: function () {

			// @class OrderHistory.List.View.Context
			return {
					//@propery {Boolean} isLoading
					isLoading: this.isLoading
					//@propery {Boolean} showItems
				//,	showItems: !!this.collection.totalRecordsFound
					//@propery {Boolean} itemsNotFound
			//	,	itemsNotFound: !this.collection.totalRecordsFound && !this.isLoading
					//@propery {String} pageHeader
				,	pageHeader: this.page_header
					// @property {Boolean} showPagination
				//,	showPagination: !!(this.collection.totalRecordsFound && this.collection.recordsPerPage)
					// @property {Boolean} showCurrentPage
				,	showCurrentPage: this.options.showCurrentPage
					//@property {Boolean} showBackToAccount
				,	showBackToAccount: SC.CONFIGURATION.get('siteSettings.sitetype') === 'STANDARD'
			};
		}
	});
});