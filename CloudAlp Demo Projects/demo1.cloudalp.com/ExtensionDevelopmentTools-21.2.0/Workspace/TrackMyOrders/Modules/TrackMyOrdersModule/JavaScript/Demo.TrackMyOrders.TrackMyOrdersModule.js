
define(
	'Demo.TrackMyOrders.TrackMyOrdersModule'
,   [
		'Demo.TrackMyOrders.TrackMyOrdersModule.View'
		, "ListHeader.View"
		, 'Backbone.CompositeView'
		, 'Header.Menu.MyAccount.View'
		, 'MyAccountMenu'
		, 'MenuTree.View'
		, 'Backbone.View'
		, 'Utils'
		, 'underscore'
		, 'Configuration'
		, 'OrderHistory.Collection'
		, 'AjaxRequestsKiller'
		, 'RecordViews.Actionable.View'
		, 'RecordViews.View'
		, 'Handlebars'
		, 'UrlHelper'
	]
,   function (
		TrackMyOrdersModuleView
		, ListHeaderView
		, BackboneCompositeView
		, HeaderMenuMyAccountView
		, myaccount
		, MenuTreeView
		, BackboneView
		, Utils
		, _
		, Configuration
		, OrderHistoryCollection
		, AjaxRequestsKiller
		, RecordViewsActionableView
		, RecordViewsView
		, Handlebars
		, UrlHelper
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var myaccountmenu = container.getComponent("MyAccountMenu");

			const pageType = container.getComponent('PageType');

			myaccountmenu.addGroupEntry({
				id: "track-my-orders",
				groupid: "orders",
				name: "Track My Orders",
				index: 5,
				url: "track-my-orders",
				permissionoperator: "OR",
				permission: [
					{
						group: "transactions",
						id: "tranSalesOrd",
						level: "1"
					},
					{
						group: "transactions",
						id: "tranEstimate",
						level: "1"
					}
					// ,
					// {
					// 	group: "transactions",
					// 	id: "tranPurchasesReturns",
					// 	level: "1"
					// }
				]
			})


			pageType.registerPageType({
				name: 'track-my-orders',
				routes: ['track-my-orders'],
				view: TrackMyOrdersModuleView,
				defaultTemplate: {
					name: 'demo_trackmyorders_trackmyordersmodule_tpl',
					displayName: 'Track My Orders'
				}
			});


			var menuobj = MenuTreeView.prototype.events;
			menuobj["click .menu-tree-node-item-anchor"] = "updateMenu";
			MenuTreeView.prototype.events = menuobj;


			var obj = ListHeaderView.prototype.events;
			obj["change .filter_by_OrderId"] = "FilterbyOrderId",
			obj['change [data-action="statusfilter"]'] = 'statusSortHandler',
			// obj["change .status-filter-select"] = "statusfiltering"
			ListHeaderView.prototype.events = obj;


		_.extend(MenuTreeView.prototype, {
			updateMenu: function (e) {
				console.log("update menutree")
				var hasDataTarget = $(e.currentTarget).parent().data('type');
				
				if (hasDataTarget !== "menu-tree-node-expandable") {
					this.updateSidebar($(e.currentTarget).data('id'));
					console.log("menutree",this.updateSidebar($(e.currentTarget).data('id')));

				}
			}

		});
			
		_.extend(ListHeaderView.prototype, {

			
			initialize: function (options) {
				_.each(options.collection.models,function(model){
					console.log("TRACK No", model.get('trackingnumbers') )
				})
				
				BackboneCompositeView.add(this);
				const { view } = options;
				_.extend(this, options);
				// @property {Boolean} avoidFirstFetch true only if the module using list header is the one responsible of fetching the collection for the first time (optional)
				// this.avoidFirstFetch = options.avoidFirstFetch;


				this.MyOrdersFilter = options.MyOrdersFilter;
				// this.selected_order_id = options.selected_order_id;
				this.isFromTrackOrders = options.isFromTrackOrders;
				this.statusfilterlabels = options.view.statusfilterlabels;
				console.log("options starter file",options);
	
		
				// @property {Number} totalCount the original count of items of the collection without filtering (optional)
				this.totalCount = options.totalCount;
				// @property {Object} rangeFilterOptions store the range (date) filter options
				this.rangeFilterOptions = view.rangeFilterOptions || {};
				// @property {String} rangeFilterLabel Label for range filter (optional)
				this.rangeFilterLabel = options.rangeFilterLabel;
				// @property {String} expandedStatePath default value of filter collapse
				this.expandedStatePath = this.view.className
					? this.view.className + '.expanded'
					: 'state.expanded';
				this.setPersistedState(
					this.expandedStatePath,
					this.getPersistedState(this.expandedStatePath, false)
				);
				// @property {Boolean} enable the eventName trigger
				this.eventFilter = options.eventFilter;
				// @property {String} to handle filter behavior in particular view
				this.eventName = options.eventName;
				// @property {Boolean} to allows if "from" or "to" date filters can be empty
				this.allowEmptyBoundaries = options.allowEmptyBoundaries;

			
			},


		    // when rendering we need to check
		// if there are options already set up in the url
		render: function() {
        // if there are no items in the collection, avoid rendering the list header
        if (this.totalCount === 0) {
            return;
        }

        if (
            !this.selectedFilter &&
            !this.selectedSort &&
            !this.selectedStatusSort &&
            !this.order &&
            !this.selectedRange &&
			!this.selected_order_id &&
			!this.selected_status &&
            !this.selectedDisplay
        ) {
            this.setSelecteds();

            // after we set the current status
            // we update the collection
            if (!this.avoidFirstFetch) {
                this.updateCollection();
            }
        }

        this._render();

        this.updateCalendarButtons();

        if (this.options.customFilterHandler) {
            this.options.customFilterHandler(this.selectedFilter, this.getElementSort());
        }
        // if (this.options.customFilterHandler) {
        //     this.options.customFilterHandler(this.selectedFilter, this.getElementStatusSort());
        // }
    },


			    // @method updateCollection
    // the collection used by the view MUST have an update method
    // this method is going to be called whenever a sort/filter value changes
    // @return {ListHeader.View} Returns itself
    updateCollection: function() {
        let range = null;
        const { collection } = this;

        if (this.selectedRange) {
            // @class RangeFilter
            // If there is no date selected i keep the range empty in order
            // to get "transactions" dated in the future
            range = {
                // @property {String} from
                from:
                    this.selectedRange.from ||
                    (this.allowEmptyBoundaries ? '' : this.rangeFilterOptions.fromMin),
                // @property {String} to
                to:
                    this.selectedRange.to ||
                    (this.allowEmptyBoundaries ? '' : this.rangeFilterOptions.toMax)
            };
        }

        // @lass Collection.Filter
        collection.update &&
            collection.update(
                {
                    // @property {value:String} filter
                    filter: this.selectedFilter,
                    // @property {RangeFilter} range
                    range: range,

					selected_order_id: this.selected_order_id,

					selected_status: this.selected_status,

					selected_status_sort: this.selected_status_sort,

					isFromTrackOrders : this.isFromTrackOrders ? this.isFromTrackOrders : false,
                    // @property {value:String} sort
                    sort: this.selectedSort,

                    statusSort: this.selectedStatusSort,
                    // @property {String} order
                    order: this.order,
                    page: this.page,
                    // @property {Number} killerId
                    killerId: AjaxRequestsKiller.getKillerId()
                },
                this
            );
		// console.log("after update collection",collection);	
        // @class ListHeader.View
        return this;	
    },


	getStatusSort:function(value){
		console.log("Get status sort", value," this.statusSorts", this.statusSorts)
		return _.findWhere(this.statusSorts, { value: value });
	},

	getElementStatusSort: function() {
        return this.$('select[name=statusSort]');
    },


	getStatusSortFromUrl: function(url_value) {
        return this.getStatusSort(url_value) || this.getDefaultStatusSort();
    },


	getDefaultStatusSort: function() {                                                                                                                            
        return (
            this.defaultStatusSort ||
            (this.defaultStatusSort = _.findWhere(this.StatusSorts, { selected: true }) || _.first(this.statusSorts))
        );
    },

	isDefaultStatusSort: function(statusSort) {
        return this.getDefaultStatusSort() === statusSort;
    },
    // @method setSelecteds set the selected rows from url information
    setSelecteds: function() {
        const url_options = Utils.parseUrlOptions(Backbone.history.fragment);

        this.selectedFilter = this.getFilterFromUrl(url_options.filter);
        this.selectedRange = this.getInitialDateRange(url_options.range) || {};
        this.selectedSort = this.getSortFromUrl(url_options.sort);
        this.selectedStatusSort = this.getStatusSortFromUrl(url_options.statusSort);
        this.order = this.getOrderFromUrl(url_options.order);
        this.page = this.getPageFromUrl(url_options.page);
		this.selected_order_id= url_options.MyOrders ? url_options.MyOrders : '';
		this.selected_status= url_options.OrderStatus ? url_options.OrderStatus : '';
        this.selectedDisplay = this.getDisplayFromUrl(url_options.display);
    },


			FilterbyOrderId: function(e) {
				this.selected_order_id = e.target.value;
				console.log("filter method", this);
				if(!_.isUndefined(this.selectedStatusSort)){
					this.selectedStatusSort = undefined;
				}
				
				this.updateUrl();
			},

			// @method filterHandler method called when dom dropdown change
			statusSortHandler: function(e) {
				// sets the selected sort
				console.log("e.target value", e.target.value)
				this.selectedStatusSort = this.getStatusSort(e.target.value);

				//clearing order id filter when selecting status filter
				this.selected_order_id = '';
				// updates the url and the collection
				this.updateUrl();
			},

			// statusfiltering: function(e) {
			// 	this.selected_order_id = e.target.value;
			// 	console.log("status selected order id", this.selected_order_id);
			// 	console.log("status filtering", this);
			// 	// this.updateUrl();
			// },
							//	selectedPackingNote
    // @method updateUrl Updates the URL with the new applied filters
    // @return {ListHeader.View} Return itself
    updateUrl: function() {
        let url = Backbone.history.fragment;

		UrlHelper = (UrlHelper.UrlHelper) ? (UrlHelper.UrlHelper) : UrlHelper;
        // if the selected filter is the default one
        //   remove the filter parameter
        // else change it for the selected value
        url = this.isDefaultFilter(this.selectedFilter)
            ? UrlHelper.removeUrlParameter(url, 'filter')
            : UrlHelper.setUrlParameter(
                  url,
                  'filter',
                  _.isFunction(this.selectedFilter.value)
                      ? this.selectedFilter.value.apply(this.view)
                      : this.selectedFilter.value
              );
        // if the selected sort is the default one
        //   remove the sort parameter
        // else change it for the selected value
		if(!_.isUndefined( this.selectedSort)){
        url = this.isDefaultSort(this.selectedSort)
            ? UrlHelper.removeUrlParameter(url, 'sort')
            : UrlHelper.setUrlParameter(url, 'sort', this.selectedSort.value);
		}
		if(!_.isUndefined( this.selectedStatusSort)){
		url = this.isDefaultStatusSort(this.selectedStatusSort)
            ? UrlHelper.removeUrlParameter(url, 'statusSort')
            : UrlHelper.setUrlParameter(url, 'statusSort', this.selectedStatusSort.value);
		}
       
			url =
			(!this.selected_order_id )
				? UrlHelper.removeUrlParameter(url, 'MyOrders')
				: UrlHelper.setUrlParameter(url, 'MyOrders', this.selected_order_id);
			
			// console.log("updateurl url", url);
			// console.log("updateurl this.selected_order_id", this.selected_order_id);

			//status filter
			url =
			(!this.selected_status )
				? UrlHelper.removeUrlParameter(url, 'OrderStatus')
				: UrlHelper.setUrlParameter(url, 'OrderStatus', this.selected_status);
			
			console.log("updateurl url", url);
			console.log("updateurl this.selected_status", this.selected_status);


		// if the selected order is the default one
        //   remove the order parameter
        // else change it for the selected value
        url =
            this.order === 1
                ? UrlHelper.removeUrlParameter(url, 'order')
                : UrlHelper.setUrlParameter(url, 'order', 'inverse');
        // if range from and range to are set up
        //   change them in the url
        // else remove the parameter
        if (this.selectedRange) {
            url =
                this.selectedRange.from || this.selectedRange.to
                    ? UrlHelper.setUrlParameter(
                          url,
                          'range',
                          `${this.selectedRange.from || ''}to${this.selectedRange.to || ''}`
                      )
                    : UrlHelper.removeUrlParameter(url, 'range');
        }

        url = UrlHelper.removeUrlParameter(url, 'page');
        this.page = 1;

        // just go there already, but warn no one
        Backbone.history.navigate(url, { trigger: false });

        return this.updateCollection();
    },

		
		})


		// ListHeaderView.prototype.initialize = _.wrap(ListHeaderView.prototype.initialize, function initialize(fn) {
		// 	var context = fn.apply(this, _.toArray(arguments).slice(1));

		// 	this.MyOrdersFilter = options.MyOrdersFilter;

		// 	return context
		// })

		ListHeaderView.prototype.getContext = _.wrap(ListHeaderView.prototype.getContext, function getContext(fn) {
			var context = fn.apply(this, _.toArray(arguments).slice(1));

			
		//  console.log("LIST GETCONTEXT", context, this);	
			context.MyOrdersFilter = this.MyOrdersFilter;
			context.statusfilterlabels = this.view.statusfilterlabels;
			// context.selected_order_id =this.selected_order_id;

			let selected_status_sort;

			if (this.selectedStatusSort) {
				selected_status_sort = this.selectedStatusSort.value;
			}


			_.each(this.statusSorts, function(statusSort) {
				statusSort.selected = selected_status_sort === statusSort.value;
			});

			console.log("List headers VIEW ", this)

			context.statusSorts = this.statusSorts;
			return context;
		})

		_.extend(OrderHistoryCollection.prototype, {
			// initialize: function (options) {
			// },

				parse: function(response) {
					this.totalRecordsFound = response.totalRecordsFound;
					this.recordsPerPage = response.recordsPerPage;
						
				

					return response.records;
				},

			update: function (options) {

				if (options.isFromTrackOrders) {
					this.url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/TrackMyOrdersModule.Service.ss'))
				}
				const range = options.range || {};
				const data = {
					filter: this.customFilters || (options.filter && options.filter.value),
					sort: options.sort ? options.sort.value : '',
					statusSort: options.statusSort ? options.statusSort.value : '',
					order: options.order,
					from: range.from,
					to: range.to,
					page: options.page,
					selected_order_id:options.selected_order_id,
					selected_status:options.selected_status,
				};

				this.fetch({
					data: data,
					reset: true,
					killerId: options.killerId
				});
			}
		})

		}
	};
});
