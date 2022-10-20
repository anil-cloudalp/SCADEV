/// <amd-module name="OrderHistory.MusicianResource.List.View"/>
define("OrderHistory.MusicianResource.List.View", ["require", "exports", "underscore", "order_history_list.tpl", "Utils", "jQuery", "Configuration", "ListHeader.View", "GlobalViews.Pagination.View", "GlobalViews.ShowingCurrent.View", "OrderHistory.List.Tracking.Number.View", "Transaction.List.View", "OrderHistory.Collection", "RecordViews.Actionable.View", "Handlebars", "Backbone", "Backbone.CollectionView"], function (require, exports, _, order_history_list_tpl, Utils, jQuery, Configuration_1, ListHeader_View_1, GlobalViews_Pagination_View_1, GlobalViews_ShowingCurrent_View_1, OrderHistoryListTrackingNumberView, TransactionListView, OrderHistoryCollection, RecordViewsActionableView, Handlebars, Backbone, BackboneCollectionView) {
    "use strict";
    // @class OrderHistory.List.View view list of orders @extend Backbone.View
    var MusicianResourceItemsListView = TransactionListView.extend({
        //@property {Function} template
        template: order_history_list_tpl
        //@property {String} title
        ,
        title: Utils.translate("Musician's Resource Products")
        //@property {String} className
        ,
        className: 'OrderHistoryMusicianResourceItemsListView'
        //@property {String} page_header
        ,
        page_header: Utils.translate("Musician's Resource Products")
        //@property {Object} attributes
        ,
        attributes: {
            'id': 'orderhistorymusicianresourceitems',
            'class': 'OrderHistoryMusicianResourceItemsListView'
        }
        //@property {Object} events
        ,
        events: {}
        //@method getSelectedMenu
        ,
        getSelectedMenu: function () {
            return 'musicianresourceitems';
        }
        //@method getBreadcrumbPages
        ,
        getBreadcrumbPages: function () {
            return {
                text: this.title,
                href: '/musician-resource-products'
            };
        }
        //@method initialize
        ,
        initialize: function (options) {
            this.application = options.application;
            this.application.getLayout().on('afterAppendView', function (view) {
                var viewId = view.$el.attr('id');
                if (viewId == 'orderhistorymusicianresourceitems') {
                    $('#searchformusic').show();
                }
            });
            this.collection = new OrderHistoryCollection([], {
                filters: 'musicItems:true'
            });
            this.activeTab = 'all';
            this.isSCISIntegrationEnabled = Configuration_1.Configuration.get('siteSettings.isSCISIntegrationEnabled', false);
            var isoDate = Utils.dateToString(new Date());
            this.rangeFilterOptions = {
                fromMin: '1800-01-02',
                fromMax: isoDate,
                toMin: '1800-01-02',
                toMax: isoDate
            };
            this.listenCollection();
            // Manages sorting and filtering of the collection
            this.listHeader = new ListHeader_View_1.ListHeaderView({
                view: this,
                application: this.application,
                collection: this.collection,
                sorts: this.sortOptions,
                rangeFilter: 'date',
                rangeFilterLabel: Utils.translate('From'),
                hidePagination: true,
                allowEmptyBoundaries: true
            });
            this.collection.on('reset', this.showContent, this);
        },
        //@method listenCollection
        listenCollection: function () {
            this.setLoading(true);
            this.collection.on({
                request: jQuery.proxy(this, 'setLoading', true),
                reset: jQuery.proxy(this, 'setLoading', false)
            });
        }
        //@method setLoading
        ,
        setLoading: function (value) {
            this.isLoading = value;
        },
        getStringDateFromDaysCount: function (days_back) {
            var now = new Date();
            return new Date(now.setDate(now.getDate() - days_back));
        }
        //@property {Array} sortOptions
        // Array of default sort options
        // sorts only apply on the current collection
        // which might be a filtered version of the original
        ,
        sortOptions: [
            {
                value: 'name',
                name: Utils.translate('Sort By Item')
            },
            {
                value: 'date',
                name: Utils.translate('Sort By Date'),
                selected: true
            }
        ]
        //@property {Object} childViews
        ,
        _buildResultsView: function () {
            var self = this;
            var selectedColumns = [];
            selectedColumns.push({ label: 'Item Name', id: 'item', type: 'displayname' });
            selectedColumns.push({ label: 'Date', id: 'created', type: 'date' });
            var records_collection = new Backbone.Collection(this.collection.map(function (order) {
                var model = new Backbone.Model({
                    title: new Handlebars.SafeString(Utils.translate('<span class="tranid">$(0)</span>', order.get('tranid'))),
                    touchpoint: 'customercenter',
                    detailsURL: '/purchases/view/salesorder/' + order.get('order_internalid'),
                    recordType: order.get('recordtype'),
                    id: order.get('internalid'),
                    internalid: order.get('internalid'),
                    isDownloadable: order.get('isDownloadable'),
                    itemId: order.get('itemId'),
                    columns: self._buildColumns(selectedColumns, order)
                });
                return model;
            }));
            return new BackboneCollectionView({
                childView: RecordViewsActionableView,
                collection: records_collection,
                viewsPerRow: 1,
                childViewOptions: {
                    actionView: OrderHistoryListTrackingNumberView,
                    actionOptions: {
                        contentClass: '',
                        collapseElements: true,
                        downloadableitems: true
                    }
                }
            });
        },
        childViews: {
            'ListHeader': function () {
                return this.listHeader;
            },
            'GlobalViews.Pagination': function () {
                return new GlobalViews_Pagination_View_1.GlobalViewsPaginationView(_.extend({
                    totalPages: Math.ceil(this.collection.totalRecordsFound / this.collection.recordsPerPage)
                }, Configuration_1.Configuration.defaultPaginationSettings));
            },
            'GlobalViews.ShowCurrentPage': function () {
                return new GlobalViews_ShowingCurrent_View_1.GlobalViewsShowingCurrentView({
                    items_per_page: this.collection.recordsPerPage,
                    total_items: this.collection.totalRecordsFound,
                    total_pages: Math.ceil(this.collection.totalRecordsFound / this.collection.recordsPerPage)
                });
            },
            'Order.History.Results': function () {
                return this._resultsView;
            }
        }
        //@method getContext @return DownItems.List.View.Context
        ,
        getContext: function () {
            this._resultsView = this._buildResultsView();
            var columns = [];
            if (this._resultsView.collection.length > 0) {
                columns = this._resultsView.collection.at(0).get('columns');
            }
            //@class DownItems.List.View.Context
            return {
                //@property {String} pageHeader
                pageHeader: this.page_header
                //@property {Boolean} collectionLengthGreaterThan0
                ,
                collectionLengthGreaterThan0: this.collection.length > 0
                //@property {Boolean} isLoading
                ,
                isLoading: this.isLoading
                // @property {Boolean} showPagination
                ,
                showPagination: !!(this.collection.totalRecordsFound && this.collection.recordsPerPage)
                //@property {Boolean} showBackToAccount
                ,
                showBackToAccount: Configuration_1.Configuration.get('siteSettings.sitetype') === 'STANDARD'
                //@property {Boolean} isSCISIntegrationEnabled
                ,
                isSCISIntegrationEnabled: this.isSCISIntegrationEnabled
                //@property {Boolean} allIsActive
                ,
                allIsActive: this.activeTab === 'all'
                //@property {Boolean} openIsActive
                ,
                openIsActive: this.activeTab === 'open'
                //@property {Boolean} inStoreIsActive
                ,
                inStoreIsActive: this.activeTab === 'instore'
                //@property {Array<{}>} columns
                ,
                columns: columns
                //,	musicitems: true
                ,
                musicitems: true
            };
        }
    });
    return MusicianResourceItemsListView;
});

//# sourceMappingURL=OrderHistory.MusicianResource.List.View.js.map
