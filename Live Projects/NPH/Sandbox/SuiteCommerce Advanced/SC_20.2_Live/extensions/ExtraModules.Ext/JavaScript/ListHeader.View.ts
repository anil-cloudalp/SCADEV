/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ListHeader.View"/>

import * as _ from 'underscore';
import 'bootstrap-datepicker';
import * as list_header_view_tpl from 'list_header_view.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';
import { GlobalViewsPaginationView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View';
import { GlobalViewsShowingCurrentView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.ShowingCurrent.View';
import { AjaxRequestsKiller } from '../../../Commons/AjaxRequestsKiller/JavaScript/AjaxRequestsKiller';
import { UrlHelper } from '../../../Commons/UrlHelper/JavaScript/UrlHelper';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

// @class ListHeader.View
// View used to manipulate a collection by adding sorting and filtering capabilities
// based on the sort and filter options from the collection
// @extend Backbone.View
export const ListHeaderView: any = BackboneView.extend({
    // @property {Function} template
    template: list_header_view_tpl,

    // @property {Object} events
    events: {
        'change [data-action="filter"]': 'filterHandler',
        'change [data-action="sort"]': 'sortHandler',
        'click [data-action="toggle-sort"]': 'toggleSortHandler',
        'change [data-action="select-all"]': 'selectAll',
        'change [data-action="unselect-all"]': 'unselectAll',
		'keyup [data-type="searchso"]': 'searching',
		

        /*
         * range-filter focus/blur work together to update the date range when:
         * Blur happens on a field and user don't focus on the other during a defined interval
         */
        'focus [data-action="range-filter"]': 'clearRangeFilterTimeout',
        'blur [data-action="range-filter"]': 'rangeFilterBlur',
		'click [data-action="clear-search"]':'clearSearchValue',
        'click [data-action="toggle-filters"]': 'toggleFilters',
        'click [data-action="clear-value"]': 'clearRangeValue',
		'click #from-icon': 'fromIcon',
		'click #to-icon': 'toIcon'
    },
	fromIcon: function(e)
	{
		$('#from').trigger('focus');
	},
	toIcon: function(e)
	{
		$('#to').trigger('focus');
	},
    // @method initialize
    // @param {ListHeader.View.initialize.Options} options
    // @return {Void}
    initialize: function(options) {
        const { view } = options;

        _.extend(this, options);

        // @property {Boolean} avoidFirstFetch true only if the module using
        // list header is the one responsible of fetching the collection
        // for the first time (optional)
        this.avoidFirstFetch = options.avoidFirstFetch;

        // @property {Number} totalCount the original count of items
        // of the collection without filtering (optional)
        this.totalCount = options.totalCount;

        // @property {Object} rangeFilterOptions store the range (date) filter options
        this.rangeFilterOptions = view.rangeFilterOptions || {};

        // @property {String} rangeFilterLabel Label for range filter (optional)
        this.rangeFilterLabel = options.rangeFilterLabel;

        // @property {String} expandedStatePath default value of filter collapse
        this.expandedStatePath = this.view.className
            ? `${this.view.className}.expanded`
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

    destroy: function() {
        this.clearRangeFilterTimeout();
        this._destroy();
    },

    childViews: {
        'GlobalViews.Pagination': function() {
            return new GlobalViewsPaginationView(
                _.extend(
                    {
                        currentPage: this.page,
                        totalPages: Math.ceil(
                            this.collection.totalRecordsFound / this.collection.recordsPerPage
                        ),
                        pager: this.pager
                    },
                    Configuration.defaultPaginationSettings
                )
            );
        },

        'GlobalViews.ShowCurrentPage': function() {
            return new GlobalViewsShowingCurrentView({
                current_page: this.page,
                items_per_page: this.collection.recordsPerPage,
                total_items: this.collection.totalRecordsFound,
                total_pages: Math.ceil(
                    this.collection.totalRecordsFound / this.collection.recordsPerPage
                ),
                extraClass: 'pull-right'
            });
        }
    },

    // @method getContext @returns {ListHeader.View.Context}
    getContext: function() {
        const self = this;
        const hideHeaderExpandable = _.isFunction(this.hideFilterExpandable)
            ? this.hideFilterExpandable()
            : this.hideFilterExpandable;
        let selected_filter;
        let selected_sort;

        if (this.selectedFilter) {
            selected_filter = _.isFunction(this.selectedFilter.value)
                ? this.selectedFilter.value.apply(this.view)
                : this.selectedFilter.value;
        }

        if (this.selectedSort) {
            selected_sort = this.selectedSort.value;
        }

        _.each(this.displays, function(display: any) {
            display.url = UrlHelper.fixUrl(self.displayer(display.id));
            display.activeClassName = self.selectedDisplay.id === display.id ? 'active' : '';
        });

        _.each(this.filters, function(filter: any) {
            const item_value = _.isFunction(filter.value)
                ? filter.value.apply(self.view)
                : filter.value;
            filter.cssClassName = filter.className || '';
            filter.itemValue = item_value;
            filter.selected = selected_filter === item_value;
        });

        _.each(this.sorts, function(sort: any) {
            sort.selected = selected_sort === sort.value;
        });

        // @class ListHeader.View.Context
        return {
            // @property {Boolean} showHeader
            showHeader: !!(
                this.displays ||
                this.rangeFilter ||
                this.filters ||
                this.collection.length
            ),
            // @property {String} headerMarkup
            headerMarkup: _.isFunction(this.headerMarkup) ? this.headerMarkup() : this.headerMarkup,
            // @property {String} classes
            classes: this.classes || '',
            // @property {Boolean} showHeaderExpandable
            showHeaderExpandable: !hideHeaderExpandable,
            // @property {Array} displays
            displays: this.displays,
            rangeFilter: this.rangeFilter,
            // @property {Number} selectedRangeFrom
            selectedRangeFrom: this.selectedRange && this.selectedRange.from,
            // @property {String} rangeFilterLabel
            rangeFilterLabel: _.isUndefined(this.rangeFilterLabel)
                ? Utils.translate('From')
                : Utils.translate(this.rangeFilterLabel),
            // @property {String} rangeFilterFromMin
            rangeFilterFromMin: this.rangeFilterOptions.fromMin || '',
            // @property {String} rangeFilterFromMax
            rangeFilterFromMax: this.rangeFilterOptions.fromMax || '',
            // @property {Number} selectedRangeTo
            selectedRangeTo: this.selectedRange && this.selectedRange.to,
            // @property {String} rangeFilterToMin
            rangeFilterToMin: this.rangeFilterOptions.toMin || '',
            // @property {String} rangeFilterToMax
            rangeFilterToMax: this.rangeFilterOptions.toMax || '',
            // @property {Array} filters
            filters: this.filters,
            // @property {Array} sorts
            sorts: this.sorts,
            // @property {String} sortIconUp
            sortIconUp: this.order > 0 ? 'listheader-filter-sortorder-arrow-selected' : '',
            // @property {String} sortIconDown
            sortIconDown: this.order < 0 ? 'listheader-filter-sortorder-arrow-selected' : '',
            // @property {Boolean} showSelectAll
            showSelectAll: this.selectable && this.collection.length > 1,
            // @property {Number} unselectedLength
            unselectedLength: this.getUnselectedLength(),
            // @property {Number} collectionLength
            collectionLength: this.getCollectionLength(),
            // @property {Boolean} showPagination
            showPagination: !this.options.hidePagination
                ? !!(this.collection.totalRecordsFound && this.collection.recordsPerPage)
                : false,
            // @property {Boolean} showCurrentPage
            showCurrentPage: !!this.options.showCurrentPage,
            // @property {String} initiallyCollapsed
            initiallyCollapsed: Utils.isPhoneDevice() || Utils.isTabletDevice() ? 'collapse' : '',
		    searchvalue:this.searchso || "",
            isValueExists:(this.searchso)?true:false
        };
        // @class ListHeader.View
    },

    // @method toggleFilters
    toggleFilters: function(e) {
        e.preventDefault();
        const current_target = jQuery(e.currentTarget);
        const filter_icon = current_target.find('.filter-icon');
        const is_expanded = this.getPersistedState(this.expandedStatePath, false);

        is_expanded
            ? filter_icon.addClass('icon-chevron-down').removeClass('icon-chevron-up')
            : filter_icon.removeClass('icon-chevron-down').addClass('icon-chevron-up');
        this.setPersistedState(this.expandedStatePath, !is_expanded);

        current_target
            .parents('[data-type="accordion"]')
            .toggleClass('well')
            .toggleClass('facet-header-white-well')
            .find('[data-type="accordion-body"]')
            .stop()
            .slideToggle()
            .removeClass('collapse');
    },

    // @method clearRangeValue
    clearRangeValue: function(e) {
        const input = jQuery(e.currentTarget)
            .parent()
            .find('[data-action="range-filter"]');

        input.val('');
        this.rangeFilterHandler();
    },
	clearSearchValue: function(e) {
        const input = jQuery(e.currentTarget)
            .parent()
            .find('[data-type="searchso"]');
        input.val('');
        this.removesearch();
    },
    // @method getExpanded
    getExpanded: function() {
        return this.getPersistedState(this.expandedStatePath, false);
    },

    // @method getInitialDateRange
    // @param  {String} url_range
    // @returns {from:string,to:string} the initial date range to apply
    getInitialDateRange: function(url_range) {
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

    // @method getUnselectedLength @returns {Number}the number of unselected items
    getUnselectedLength: function() {
        return this.collection.filter(function(record) {
            return !record.get('checked');
        }).length;
    },

    // @method getCollectionLength @returns {Number} the length of the current collection.
    // This is a function so it can be overriden be any client of the list header
    getCollectionLength: function() {
        return this.collection.length;
    },

    // @method setSelecteds set the selected rows from url information
    setSelecteds: function() {
        const url_options = Utils.parseUrlOptions(Backbone.history.fragment);

        this.selectedFilter = this.getFilterFromUrl(url_options.filter);
        this.selectedRange = this.getInitialDateRange(url_options.range) || {};
        this.selectedSort = this.getSortFromUrl(url_options.sort);
        this.order = this.getOrderFromUrl(url_options.order);
        this.page = this.getPageFromUrl(url_options.page);

        this.selectedDisplay = this.getDisplayFromUrl(url_options.display);
		this.search = this.getSearchFromUrl(url_options.search);
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
            !this.order &&
            !this.selectedRange &&
            !this.selectedDisplay&&
			!this.searchso
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
                    // @property {value:String} sort
                    sort: this.selectedSort,
                    // @property {String} order
                    order: this.order,
                    page: this.page,
					search: this.searchso,
                    // @property {Number} killerId
                    killerId: AjaxRequestsKiller.getKillerId()
                },
                this
            );

        // @class ListHeader.View
        return this;
    },

    // @method getFilter @param {String} value @returns {Object} a specific filter
    getFilter: function(value) {
        return _(this.filters).find(function(filter) {
            return _.isFunction(filter.value)
                ? filter.value.apply(this.view) === value
                : filter.value === value;
        }, this);
    },

    // @method getSort @param {String} value @returns {Object} returns a specific sort
    getSort: function(value) {
        return _.findWhere(this.sorts, { value: value });
    },
    // @metod getElementSort @returns {object} returns specific element from view
    getElementSort: function() {
        return this.$('select[name=sort]');
    },
    // @method getDisplay @param {String} value @returns {Object} a specific display
    getDisplay: function(value) {
        return _.findWhere(this.displays, { id: value });
    },

    // @method getFilterFromUrl @param {String} url_value @returns
    // {Object} the selected filter from the url
    // or the default filter if no value set up
    getFilterFromUrl: function(url_value) {
        return this.getFilter(url_value) || this.getDefaultFilter();
    },

    // @method getRangeFromUrl @param {String} url_value @returns {from:String,to:String}
    getRangeFromUrl: function(url_value) {
        const split = url_value ? url_value.split('to') : [];

        return {
            from: split[0],
            to: split[1]
        };
    },

    // @method getSortFromUrl @param {String} url_value @returns the selected sort from the url
    // or the default sort if no value set up
    getSortFromUrl: function(url_value) {
        return this.getSort(url_value) || this.getDefaultSort();
    },

    // @method getOrderFromUrl @param {String} url_value @returns the selected order from the url
    // this could be inverse or nothing
    getOrderFromUrl: function(url_value) {
        return url_value === 'inverse' ? -1 : 1;
    },

    // @method getDisplayFromUrl Retrieve current selected display
    // option or 'list' by default @param {String} url_value @returns {String}
    getDisplayFromUrl: function(url_value) {
        return this.getDisplay(url_value) || this.getDefaultDisplay();
    },
	getSearchFromUrl:function(url_value) {
 
        return this.searchso || {}

    },
    // @method getPageFromUrl @param {String} url_value @returns {Number}
    getPageFromUrl: function(url_value) {
        const page_number = parseInt(url_value, 10);
        return !isNaN(page_number) && page_number > 0 ? page_number : 1;
    },

    // @method pager @param {String} url_value @returns {String}
    pager: function(url_value) {
        const page_number = parseInt(url_value, 10);
        const url = Backbone.history.fragment;

        return isNaN(page_number) || page_number === 1
            ? UrlHelper.removeUrlParameter(url, 'page')
            : UrlHelper.setUrlParameter(url, 'page', page_number);
    },

    // @method displayer @param {String} display_option @returns {String}
    displayer: function(display_option) {
        const url = Backbone.history.fragment;
        return display_option === this.getDefaultDisplay().id
            ? UrlHelper.removeUrlParameter(url, 'display')
            : UrlHelper.setUrlParameter(url, 'display', display_option);
    },

    // @method getDefaultFilter if there's already a default filter, return that
    // otherwise find the one selected on the filter list @return {String}
    getDefaultFilter: function() {
        return (
            this.defaultFilter ||
            (this.defaultFilter =
                _.findWhere(this.filters, { selected: true }) || _.first(this.filters))
        );
    },

    // @method getDefaultSort if there's already a default sort, return that
    // otherwise find the one selected on the sort list @return {String}
    getDefaultSort: function() {
        return (
            this.defaultSort ||
            (this.defaultSort = _.findWhere(this.sorts, { selected: true }) || _.first(this.sorts))
        );
    },

    // @method getDefaultDisplay
    getDefaultDisplay: function() {
        return (
            this.defaultDisplay ||
            (this.defaultDisplay =
                _.findWhere(this.displays, { selected: true }) || _.first(this.displays))
        );
    },

    // @method isDefaultFilter @returns {Boolean}
    isDefaultFilter: function(filter) {
        return this.getDefaultFilter() === filter;
    },

    // @method isDefaultSort @returns {Boolean}
    isDefaultSort: function(sort) {
        return this.getDefaultSort() === sort;
    },

    // @method isDefaultDisplay @returns {Boolean}
    isDefaultDisplay: function(display) {
        return this.getDefaultDisplay() === display;
    },

    // @method filterHandler method called when dom dropdown change
    filterHandler: function(e) {
        // unselect all elements
        this.unselectAll({ silent: true });
        // sets the selected filter
        this.selectedFilter = this.getFilter(e.target.value);
        // updates the url and the collection
        this.updateUrl();
    },
	searching: function() {
		var self = this;  
        this.delay(function() {  
        var searchParam = this.$('#searchfield').val();
        self.searchso = searchParam || '';
        self.updateUrl();}, 2000 );
    },
    removesearch: function() {

        var self = this;        
        this.delay(function(){
            self.searchso = this.$('#searchfield').val();
            self.updateUrl();
           }, 1000 );

    },
    // @method sortHandler method called when dom dropdown change
    sortHandler: function(e) {
        // sets the selected sort
        this.selectedSort = this.getSort(e.target.value);
        // updates the url and the collection
        this.updateUrl();
    },

    // @method toggleSortHandler method called when dom button clicked
    toggleSortHandler: function(e) {
        if (e) {
            e.preventDefault();
        }

        // toggles the selected order
        this.order *= -1;
        // updates the url and the collection
        this.updateUrl();
    },

    // @method selectAll selects all in collection
    selectAll: function() {
        if ('selectAll' in this.view) {
            this.view.selectAll();
        }

        return this;
    },

    // @method unselectAll unselects in collection
    unselectAll: function(options) {
        if ('unselectAll' in this.view) {
            this.view.unselectAll(options);
        }

        return this;
    },
	delay: function(){
        var timer = 0;
        return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
       };
      }(),
    // @method rangeFilterBlur
    rangeFilterBlur: function() {
        this.clearRangeFilterTimeout();
        this.rangeFilterTimeout = setTimeout(_.bind(this.rangeFilterHandler, this), 1000);
    },

    // @method clearRangeFilterTimeout
    clearRangeFilterTimeout: function() {
        if (this.rangeFilterTimeout) {
            clearTimeout(this.rangeFilterTimeout);
            this.rangeFilterTimeout = null;
        }
    },

    // @method rangeFilterHandler
    rangeFilterHandler: function() {
        const selected_range = this.selectedRange;
        const $ranges = this.$('[data-action="range-filter"]');

        $ranges.each(function() {
            if (this.value) {
                selected_range[this.name] = this.value;
            } else {
                delete selected_range[this.name];
            }
        });

        if (this.validateDateRange(selected_range)) {
            // updates the url and the collection
            this.updateUrl();
        } else {
            this.showError(this.application.getErrorMessage('invalidDateFormat'));
        }

        return this;
    },

    // @method validateDateRange Indicate if a certain range is valid or not
    // @param {} selected_range
    // @return {Boolean} If the selected range if valid or not
    validateDateRange: function(selected_range) {
        const options = this.rangeFilterOptions;
        let is_valid = true;
        const to = new Date(selected_range.to);
        const from = new Date(selected_range.from);
        const toMin = new Date(options.toMin);
        const toMax = new Date(options.toMax);
        const fromMin = new Date(options.fromMin);
        const fromMax = new Date(options.fromMax);
        const validateRange: any = {};

        if (
            options.toMin &&
            Utils.isDateValid(toMin) &&
            Utils.isDateValid(to) &&
            to.getTime() < toMin.getTime()
        ) {
            validateRange.to = options.toMin;
        } else if (
            !selected_range.to ||
            (options.toMax &&
                Utils.isDateValid(toMax) &&
                Utils.isDateValid(to) &&
                to.getTime() > toMax.getTime())
        ) {
            validateRange.to = options.toMax;
        }

        if (
            !selected_range.from ||
            (options.fromMin &&
                Utils.isDateValid(fromMin) &&
                Utils.isDateValid(from) &&
                from.getTime() < fromMin.getTime())
        ) {
            validateRange.from = options.fromMin;
        } else if (
            options.fromMax &&
            Utils.isDateValid(fromMax) &&
            Utils.isDateValid(from) &&
            from.getTime() > fromMax.getTime()
        ) {
            validateRange.from = options.fromMax;
        }

        if (validateRange.to && !Utils.isDateValid(Utils.stringToDate(validateRange.to))) {
            is_valid = false;
            delete selected_range.to;
        }

        if (validateRange.from && !Utils.isDateValid(Utils.stringToDate(validateRange.from))) {
            is_valid = false;

            delete selected_range.from;
        }

        return is_valid;
    },

    // @method updateUrl Updates the URL with the new applied filters
    // @return {ListHeader.View} Return itself
    updateUrl: function() {
        let url = Backbone.history.fragment;
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
        url = this.isDefaultSort(this.selectedSort)
            ? UrlHelper.removeUrlParameter(url, 'sort')
            : UrlHelper.setUrlParameter(url, 'sort', this.selectedSort.value);
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
		if(this.searchso) {
            url =  UrlHelper.setUrlParameter(url, 'search', this.searchso);
        } else {
           url =  UrlHelper.removeUrlParameter(url, 'search');
        }
        // just go there already, but warn no one
        Backbone.history.navigate(url, { trigger: false });

        return this.updateCollection();
    },

    // @method updateCalendarButtons
    // @return {Void}
    updateCalendarButtons: function() {
        const $ranges = this.$('[data-action="range-filter"]');

        $ranges.each(function() {
            const parent = jQuery(this).parent();
            const calendar_icon = parent.find('.list-header-view-accordion-body-calendar-icon');
            const clear_button = parent.find('.list-header-view-accordion-body-clear');

            if (this.value) {
                calendar_icon.hide();
                clear_button.show();
            } else {
                calendar_icon.show();
                clear_button.hide();
            }
        });
    },
    // @method setPersistedState Allow save STATICALY any value to
    // be shared by all ListHeader instances
    // @param {String} path @param {String} value @static
    setPersistedState: function(path, value) {
        return Utils.setPathFromObject((this.state = this.state || {}), path, value);
    },
    // @method getPersistedState Allow get STATICALY any value to
    // be shared by all ListHeader instances
    // @param {String} path @param {String} default_value @static
    getPersistedState: function(path, default_value) {
        return Utils.getPathFromObject((this.state = this.state || {}), path, default_value);
    }
});

export type ListHeaderView = any;

// @class ListHeader.View.initialize.Options
// @property {Backbone.View} view
// @property {Boolean} avoidFirstFetch True only if the module using list header is the one
// responsible of fetching the collection for the first time (optional)
// @property {Number} totalCount

// @class ListHeader.View.FilterOption
// @property {String} value
// @property {String} name
// @property {Boolean} selected

// @class ListHeader.View.SortOption
// @property {String} value
// @property {String} name
// @property {Boolean} selected
