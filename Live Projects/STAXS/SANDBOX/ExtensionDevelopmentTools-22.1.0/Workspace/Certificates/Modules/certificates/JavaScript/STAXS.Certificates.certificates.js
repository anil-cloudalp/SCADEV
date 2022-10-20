
define(
	'STAXS.Certificates.certificates'
	, [
		'STAXS.Certificates.certificates.View'
		, 'STAXS.Certificates.historicalcertificates.View'
		, 'Header.Menu.MyAccount.View'
		, 'MyAccountMenu'
		, 'MenuTree.View'
		, 'Backbone.View'
		, 'Utils'
		, 'underscore'
		, 'Configuration'
		, 'OrderHistory.Collection'
		, "ListHeader.View"
		, 'Backbone.CompositeView'
		, 'AjaxRequestsKiller'
		, 'RecordViews.Actionable.View'
		, 'RecordViews.View'
		, 'Handlebars'
		, 'UrlHelper'
	]
	, function (
		certificatesView
		, historicalcertificatesView
		, HeaderMenuMyAccountView
		, myaccount
		, MenuTreeView
		, BackboneView
		, Utils
		, _
		, Configuration
		, OrderHistoryCollection
		, ListHeaderView
		, BackboneCompositeView
		, AjaxRequestsKiller
		, RecordViewsActionableView
		, RecordViewsView
		, Handlebars
		, UrlHelper
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				const myaccountmenu = container.getComponent("MyAccountMenu");
				const pageType = container.getComponent('PageType');

				Handlebars.registerHelper("isUrl", function (name) {
					var urlRegex = /(https?:\/\/[^\s]+)/g;

					if ((name != '') && name != undefined) {
						if (!((name.indexOf('?') == -1))) {
						//return new Handlebars.SafeString("<a style='color:#E50570'  href='" + name + "'>" + 'Download' +"</a>");
						return new Handlebars.SafeString(`<a  class="button-primary" style="color:white;padding:5px" href= ${SC.CONFIGURATION.siteSettings.touchpoints.home}${name} target="_blank" download>Download</a>`);
						} else {
							return new Handlebars.SafeString('<span class="recordviews-actionable-value">' + name + '</span>')
						} 
					}
					
				});

				RecordViewsActionableView.prototype.getContext = _.wrap(RecordViewsActionableView.prototype.getContext, function getContext(fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					context.hideTracking = this.options.hideTrack || false;
					context.showCertificates = this.options.showCertificates || false;
					context.hideorderNumber = this.options.hideorderNumber || false;
					return context;
				})

				pageType.registerPageType({
					name: 'Certificates',
					routes: ['certificates'],
					view: certificatesView,
					defaultTemplate: {
						name: 'staxs_certificates_certificates_tpl',
						displayName: 'Certificates'
					}
				});

				pageType.registerPageType({
					name: 'Historical Certificates',
					routes: ['historical-certificates'],
					view: historicalcertificatesView,
					defaultTemplate: {
						name: 'staxs_certificates_certificates_tpl',
						displayName: 'Certificates'
					}
				});




				var obj = MenuTreeView.prototype.events;
				obj["click .menu-tree-node-item-anchor"] = "updateMenuitems";
				MenuTreeView.prototype.events = obj;

				var extobj = ListHeaderView.prototype.events;
				extobj["change .filter_by_Staxs_lot_number"] = "Staxs_lot_filter";
				extobj["change .filter_by_Staxs_ext_number"] = "Staxs_ext_filter";
				extobj["change .filter_by_packing_note"] = "Staxs_packing_note";
				extobj["change .filter_by_SalesOrder"] = "Staxs_SalesOrder";
				extobj["change .filter_by_ItemName"] = "Staxs_ItemName";
				ListHeaderView.prototype.events = extobj;
				//selectedSalesOrder
				_.extend(MenuTreeView.prototype, {
					updateMenuitems: function (e) {
						var hasDataTarget = $(e.currentTarget).parent().data('type');

						if (hasDataTarget !== "menu-tree-node-expandable") {
							this.updateSidebar($(e.currentTarget).data('id'));
						}
					}

				});

				_.extend(ListHeaderView.prototype, {
					render: function () {
						// if there are no items in the collection, avoid rendering the list header
						if (this.totalCount === 0) {
							return;
						}
						if (
							!this.selectedFilter &&
							!this.selectedSort &&
							!this.order &&
							!this.selectedRange &&
							!this.selectedDisplay &&
							!this.selectedStaxs_lot_filter &&
							!this.selectedStaxs_ext_filter &&
							!this.selectedPackingNote &&
							!this.selectedSalesOrder &&
							!this.SelectedItem
						) {
							this.setSelecteds();

							if (!this.avoidFirstFetch) {
								this.updateCollection();
							}
						}
						this._render();
						this.updateCalendarButtons();
						if (this.options.customFilterHandler) {
							this.options.customFilterHandler(this.selectedFilter, this.getElementSort());
						}
					},

					updateCollection: function () {
						let range = null;
						const { collection } = this;
						if (this.selectedRange) {
							range = {
								from:
									this.selectedRange.from ||
									(this.allowEmptyBoundaries ? '' : this.rangeFilterOptions.fromMin),
								to:
									this.selectedRange.to ||
									(this.allowEmptyBoundaries ? '' : this.rangeFilterOptions.toMax)
							};
						}

						// @lass Collection.Filter
						collection.update &&
							collection.update(
								{
									filter: this.selectedFilter,
									range: range,
									sort: this.selectedSort,
									SelectedItem: this.SelectedItem,
									selectedSalesOrder: this.this.selectedSalesOrder,
									selectedPackingNote: this.selectedPackingNote,
									selectedStaxs_lot_filter: this.selectedStaxs_lot_filter,
									selectedStaxs_ext_filter: this.selectedStaxs_ext_filter,
									isFromCertificates: this.isFromCertificates ? this.isFromCertificates : false,
									isFromHistoricalCertificates: this.isFromHistoricalCertificates ? this.isFromHistoricalCertificates : false,
									order: this.order,
									page: this.page,
									killerId: AjaxRequestsKiller.getKillerId()
								},
								this
							);
						return this;
					},

					getInitialDateRange: function (url_range) {



						if (this.isFromCertificates || this.isFromHistoricalCertificates) {
							if (!url_range) {
								var minDate = new Date();
								minDate.setMonth(minDate.getMonth() - 3);
								var defalutfrom = minDate.toISOString().split('T')[0];
								var defalutto = (new Date()).toISOString().split('T')[0];
								var url_range = `${defalutfrom || ''}to${defalutto || ''}`;
							}
						}
						if (this.rangeFilter) {
							const date_range_fromUrl = this.getRangeFromUrl(url_range);
							if (date_range_fromUrl.from || date_range_fromUrl.to) {
								// By doing this, I can be sure I'm not entering out of
								// range values in the filter input fields.
								// However, if invalid values are entered, they are not considered for filtering.
								this.validateDateRange(date_range_fromUrl);
								return date_range_fromUrl;
							}
							const quantityDays = this.notUseDefaultDateRange
								? this.quantityDaysRange
								: this.application.getConfig().listHeader.filterRangeQuantityDays;

							if (quantityDays) {
								const from = new Date();
								const to = new Date();

								from.setDate(from.getDate() - quantityDays);

								return {
									from: Utils.dateToString(from),
									to: Utils.dateToString(to)
								};
							}
						}
					},


					setSelecteds: function () {
						const url_options = Utils.parseUrlOptions(Backbone.history.fragment);
						this.selectedFilter = this.getFilterFromUrl(url_options.filter);
						this.selectedRange = this.getInitialDateRange(url_options.range) || {};
						this.selectedSort = this.getSortFromUrl(url_options.sort);
						this.selectedSalesOrder = url_options.SoNum ? url_options.SoNum : '';
						this.SelectedItem = url_options.ItemNum ? url_options.ItemNum : '';
						this.order = this.getOrderFromUrl(url_options.order);
						this.selectedSalesOrder = url_options.SoNum ? url_options.SoNum : '';
						this.selectedPackingNote = url_options.PackingNote ? url_options.PackingNote : '';
						this.selectedStaxs_ext_filter = url_options.extNum ? url_options.extNum : '';
						this.selectedStaxs_lot_filter = url_options.LotNum ? url_options.LotNum : '';
						this.page = this.getPageFromUrl(url_options.page);
						this.selectedDisplay = this.getDisplayFromUrl(url_options.display);
					},

					Staxs_lot_filter: function (e) {

						this.selectedStaxs_lot_filter = e.target.value;
						this.updateUrl();
					},

					Staxs_ext_filter: function (e) {
						this.selectedStaxs_ext_filter = e.target.value;
						this.updateUrl();
					},
					Staxs_packing_note: function (e) {
						this.selectedPackingNote = e.target.value;
						this.updateUrl();
					},
					Staxs_SalesOrder: function (e) {
						this.selectedSalesOrder = e.target.value;
						this.updateUrl();

					},
					Staxs_ItemName: function (e) {
						this.SelectedItem = e.target.value;
						this.updateUrl();
					},

					//	selectedPackingNote
					updateUrl: function () {
						let url = Backbone.history.fragment;


						// UrlHelper = UrlHelper.UrlHelper;
						UrlHelper = (UrlHelper.UrlHelper) ? (UrlHelper.UrlHelper) : UrlHelper;
						url = this.isDefaultFilter(this.selectedFilter)
							? UrlHelper.removeUrlParameter(url, 'filter')
							: UrlHelper.setUrlParameter(
								url,
								'filter',
								_.isFunction(this.selectedFilter.value)
									? this.selectedFilter.value.apply(this.view)
									: this.selectedFilter.value
							);
						url =
							(!this.SelectedItem)
								? UrlHelper.removeUrlParameter(url, 'ItemNum')
								: UrlHelper.setUrlParameter(url, 'ItemNum', this.SelectedItem);

						url =
							(!this.selectedPackingNote)
								? UrlHelper.removeUrlParameter(url, 'PackingNote')
								: UrlHelper.setUrlParameter(url, 'PackingNote', this.selectedPackingNote);
						url =
							(!this.selectedSalesOrder)
								? UrlHelper.removeUrlParameter(url, 'SoNum')
								: UrlHelper.setUrlParameter(url, 'SoNum', this.selectedSalesOrder);

						url =
							(!this.selectedStaxs_lot_filter)
								? UrlHelper.removeUrlParameter(url, 'LotNum')
								: UrlHelper.setUrlParameter(url, 'LotNum', this.selectedStaxs_lot_filter);
						url =
							(!this.selectedStaxs_ext_filter)
								? UrlHelper.removeUrlParameter(url, 'extNum')
								: UrlHelper.setUrlParameter(url, 'extNum', this.selectedStaxs_ext_filter);

						url = this.isDefaultSort(this.selectedSort)
							? UrlHelper.removeUrlParameter(url, 'sort')
							: UrlHelper.setUrlParameter(url, 'sort', this.selectedSort.value);
						url =
							this.order === 1
								? UrlHelper.removeUrlParameter(url, 'order')
								: UrlHelper.setUrlParameter(url, 'order', 'inverse');

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
						Backbone.history.navigate(url, { trigger: false });
						return this.updateCollection();
					},

					initialize: function (options) {

						BackboneCompositeView.add(this);
						const { view } = options;
						_.extend(this, options);
						// @property {Boolean} avoidFirstFetch true only if the module using list header is the one responsible of fetching the collection for the first time (optional)
						this.avoidFirstFetch = options.avoidFirstFetch;

						this.StaxsLotNumber = options.StaxsLotNumber;

						this.ExternalLotNum = options.ExternalLotNum;

						this.PackingNote = options.PackingNote;

						this.SalesOrder = options.SalesOrder;

						this.ShowItemNumberOrName = options.ShowItemNumberOrName;

						this.isFromHistoricalCertificates = options.isFromHistoricalCertificates;

						this.isFromCertificates = options.isFromCertificates
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


					updateCollection: function () {
						let range = null;
						const { collection } = this;
						if (this.selectedRange) {
							// @class RangeFilter
							// If there is no date selected i keep the range empty in order to get "transactions" dated in the future
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
									range: range,
									sort: this.selectedSort,
									order: this.order,
									page: this.page,
									SelectedItem: this.SelectedItem,
									selectedSalesOrder: this.selectedSalesOrder,
									selectedPackingNote: this.selectedPackingNote,
									selectedStaxs_ext_filter: this.selectedStaxs_ext_filter,
									selectedStaxs_lot_filter: this.selectedStaxs_lot_filter,
									isFromCertificates: this.isFromCertificates ? this.isFromCertificates : false,
									isFromHistoricalCertificates: this.isFromHistoricalCertificates? this.isFromHistoricalCertificates:false,
									killerId: AjaxRequestsKiller.getKillerId()
								},
								this
							);
						return this;
					},
				}),


					ListHeaderView.prototype.getContext = _.wrap(ListHeaderView.prototype.getContext, function getContext(fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						var minDate = new Date();
						minDate.setMonth(minDate.getMonth() - 3);
						if (this.isFromCertificates) {
							context.selectedRangeFrom = (this.selectedRange && this.selectedRange.from) ? this.selectedRange && this.selectedRange.from : minDate.toISOString().split('T')[0];
							context.selectedRangeTo = (this.selectedRange && this.selectedRange.to) ? (this.selectedRange && this.selectedRange.to) : (new Date()).toISOString().split('T')[0];
						}
						context.StaxsLotNumber = this.StaxsLotNumber;
						context.ExternalLotNum = this.ExternalLotNum;
						context.ShowItemNumberOrName = this.ShowItemNumberOrName;
						context.PackingNote = this.PackingNote;
						context.SelectedItem = this.SelectedItem;
						context.SalesOrder = this.SalesOrder;
						context.selectedSalesOrder = this.selectedSalesOrder;
						context.selectedStaxs_ext_filter = this.selectedStaxs_ext_filter;
						context.selectedStaxs_lot_filter = this.selectedStaxs_lot_filter;
						context.selectedPackingNote = this.selectedPackingNote;

						return context;
					}),
					_.extend(OrderHistoryCollection.prototype, {
						// initialize: function (options) {
						// },

						    parse: function(response) {
								this.totalRecordsFound = response.totalRecordsFound;
								this.recordsPerPage = response.recordsPerPage;
                                    
							

								return response.records;
							},

						update: function (options) {

							if (options.isFromCertificates || options.isFromHistoricalCertificates) {
								this.url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/certificates.Service.ss'))
							}
							const range = options.range || {};
							const data = {
								filter: this.customFilters || (options.filter && options.filter.value),
								sort: options.sort ? options.sort.value : '',
								order: options.order,
								from: range.from,
								to: range.to,
								page: options.page,
								SelectedItem: options.SelectedItem,
								selectedSalesOrder: options.selectedSalesOrder,
								selectedPackingNote: options.selectedPackingNote,
								selectedStaxs_ext_filter: options.selectedStaxs_ext_filter,
								selectedStaxs_lot_filter: options.selectedStaxs_lot_filter,
								isFromHistoricalCertificates: options.isFromHistoricalCertificates
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
