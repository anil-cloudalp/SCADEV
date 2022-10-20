/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="MusicianResource.List.View"/>

import * as _ from 'underscore';
import '../../../Commons/BootstrapExtras/JavaScript/Bootstrap.Slider';
import * as facets_special_plp_tpl from 'facets_facet_browse.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { CategoriesModel } from '../../../Commons/Categories/JavaScript/Categories.Model';
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';
import { getAdditionalFields } from '../../../Commons/Categories/JavaScript/Categories.Utils';
import { FacetsItemsCollectionView } from '../../../Commons/Facets/JavaScript/FacetsItemsCollectionView';
import { GlobalViewsPaginationView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View';
import { AjaxRequestsKiller } from '../../../Commons/AjaxRequestsKiller/JavaScript/AjaxRequestsKiller';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';
import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');
import Categories = require('../../../Commons/Categories/JavaScript/Categories');
import CategoriesUtils = require('../../../Commons/Categories/JavaScript/Categories.Utils');
import FacetsHelper = require('../../../Commons/Facets/JavaScript/Facets.Helper');
import FacetsModel = require('../../../Commons/Facets/JavaScript//Facets.Model');
import FacetsFacetedNavigationView = require('../../../Commons/Facets/JavaScript//Facets.FacetedNavigation.View');
import FacetsFacetsDisplayView = require('../../../Commons/Facets/JavaScript//Facets.FacetsDisplay.View');
import FacetsItemListDisplaySelectorView = require('../../../Commons/Facets/JavaScript//Facets.ItemListDisplaySelector.View');
import FacetsItemListSortSelectorView = require('../../../Commons/Facets/JavaScript//Facets.ItemListSortSelector.View');
import FacetsItemListShowSelectorView = require('../../../Commons/Facets/JavaScript//Facets.ItemListShowSelector.View');
import FacetsEmptyView = require('../../../Commons/Facets/JavaScript//Facets.Empty.View');
import FacetsBrowseCategoryHeadingView = require('../../../Commons/Facets/JavaScript/Facets.Browse.CategoryHeading.View');
import FacetsCategoryCellView = require('../../../Commons/Facets/JavaScript//Facets.CategoryCell.View');
import FacetsFacetedNavigationItemView = require('../../../Commons/Facets/JavaScript/Facets.FacetedNavigationItem.View');
import FacetsFacetedNavigationItemCategoryView = require('../../../Commons/Facets/JavaScript/Facets.FacetedNavigationItemCategory.View');
import Tracker = require('../../../Commons/Tracker/JavaScript/Tracker');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import Cookies = require('../../../Commons/Utilities/JavaScript/js.cookie');
import ItemCollection = require('../../../Commons/Item/JavaScript/Item.Collection');
import Session = require('../../../Commons/Session/JavaScript/Session');
import { ListHeaderView } from '../../../Commons/ListHeader/JavaScript/ListHeader.View';
import SessionStorageHandler = require("../../../Commons/Utilities/JavaScript/SessionStorageHandler");
import  MusicianResourceModel  = require('./MusicianResource.Model');
import { identity } from 'underscore';

// statuses stores the statuses of the collapsible facets
const statuses = ((<any>window).statuses = {});

const collapsable_elements = ((<any>window).collapsable_elements = {});

// @class Facets.Browse.View View that handles the item list @extends Backbone.View
export = BackboneView.extend({
	
    template: facets_special_plp_tpl,
	
	title: Utils.translate('Musician Resource Product List'),

	page_header: Utils.translate('Musician Resource Product List'),

    description: Utils.translate('This is a description'),

    enhancedEcommercePage: true,

    attributes: {
        id: 'musician-resource-list',
        class: 'view facet-browse',
        'data-root-component-id': 'Facets.Browse.View'
    },

    events: {

        'click [data-toggle="facet-navigation"]': 'toggleFacetNavigation',
        'click [data-action="toggle-filters"]': 'toggleFilters',
        'click [data-view="Facets.FacetsDisplay"] a': '_gotoFacets',
        'click [data-view="Facets.FacetedNavigation"] a': '_gotoFacets',
        'click [data-view="GlobalViews.Pagination"] a': '_gotoPage',
        'click [data-view="Facets.ItemListDisplaySelector"] a': '_gotoDisplay',
        'change [data-view="Facets.ItemListShowSelector"] select': '_gotoShow',
        'change [data-view="Facets.ItemListSortSelector"] select': '_gotoOrder'
    },

    initialize(options) {
        
        this.options = options;
        this.application = options.application;
        this.application.getLayout().on('beforeAppendView',function(view){
            const viewId = view.$el.attr('id');
            if(viewId == 'musician-resource-list'){
                this.$(document).ready(function(){
    
                $('.shopping-layout-breadcrumb').hide();
                });
                this.render();
            }
        })
        this.statuses = statuses;
        this.collapsable_elements = collapsable_elements;
        this.translatorConfig = this.application.translatorConfig;
        this.items = [];
        const fullurl = Backbone.history.fragment;
        const url = fullurl.split('?')[0];

        this.categoriesTopLevelUrl = Categories.getTopLevelCategoriesUrlComponent();
        this.isCategoryPage = !!_.find(this.categoriesTopLevelUrl, function(categoryUrl: string) {
            categoryUrl = Utils.correctURL(categoryUrl);
            const caturl = Utils.correctURL(url);

            return caturl.indexOf(categoryUrl) === 0;
        });

        this.model = new FacetsModel();
        this.translator = FacetsHelper.parseUrl(
            fullurl,
            this.translatorConfig,
            this.isCategoryPage
        );
        this.router = this.constructor.router;

        this.setOptionsTranslator();

        var query = [];

        var addingattributesatpapi = this.translator.getApiParams();

        var itemfieldsoptionss = SessionStorageHandler.get("musicianResourcecategotyItems");
        
        //addingattributesatpapi["commercecategoryurl"] ="/bibles"
		if(Configuration.get("Musicianresourcepage.musicianresourceid"))
		{
            addingattributesatpapi["commercecategoryid"] =Configuration.get("Musicianresourcepage.musicianresourceid");
        }
		var self = this;
		if (itemfieldsoptionss.length > 0) 
		{			
			self.totalitem = itemfieldsoptionss.length;
            self.model.total = itemfieldsoptionss.length;
            var page = self.translator.options.page ? self.translator.options.page : 1;
			var resPerPage = self.translator.options.show ? self.translator.options.show : 24;
            var chunkedArray = _.chunk(itemfieldsoptionss, parseInt(resPerPage));
            var finalArray = chunkedArray[page - 1];
            addingattributesatpapi["id"] = finalArray.toString();
            //addingattributesatpapi["id"] =  itemfieldsoptionss.toString();
        }
		else {
            addingattributesatpapi['custitem_appf_meter'] = "fornoitemavaialablepage"
        }
		
        this.model.options = {
            data: addingattributesatpapi || this.translator.getApiParams(),   //addid,
            killerId: AjaxRequestsKiller.getKillerId(),
            pageGeneratorPreload: true
        };

           if (this.isCategoryPage) {
            const categoryModel = new CategoriesModel({
                data: { fullurl: this.translator.getCategoryUrl() },
                killerId: AjaxRequestsKiller.getKillerId()
            });
               
            this.model.set('category', categoryModel);
        }

        const { itemsDisplayOptions, resultsPerPage, sortOptions } = this.application.getConfig();
        this.itemsDisplayOptions = Utils.deepCopy(itemsDisplayOptions);
        this.resultsPerPage = Utils.deepCopy(resultsPerPage);
        this.sortOptions = Utils.deepCopy(sortOptions);

        _.each(this.resultsPerPage, function(perPage: any) {
            perPage.id = String(perPage.items);
        });

        this.cart = LiveOrderModel.getInstance();
        this.collapsable_elements['facet-header'] = this.collapsable_elements['facet-header'] || {
            selector: 'this.collapsable_elements["facet-header"]',
            collapsed: false
        };
		this.musician = new MusicianResourceModel();
    },

    beforeShowContent: function beforeShowContent() {

        const promise = jQuery.Deferred();
        
        // if prices aren't to be shown we take out price related facet
        // and clean up the url

        if (ProfileModel.getInstance().hidePrices()) {

            this.translator = this.translator.cloneWithoutFacetId('onlinecustomerprice');

        }

        const self = this;
        const models = [this.model];
        const categoryModel = this.model.get('category');

        if (categoryModel) {

            models.push(categoryModel);

        }

       jQuery.when
            .apply(null, _.invoke(models, 'fetch', {}))
            .then(function(facetResponse) {
                facetResponse = categoryModel ? facetResponse[0] : facetResponse;
                    self.translator.setLabelsFromFacets(self.model.get('facets') || []);
                    var array = [];
                    for(var i = 0;i< self.model.get('items').models.length;i++)
					{
                        array.push(self.model.get('items').models[i].get('internalid'));
                    }
					
					var SortedArrayOnId = _.sortBy(self.model.get('items').models, 'id');
					self.model.get('items').models = SortedArrayOnId;
							
					const url_options = Utils.parseUrlOptions(window.location.href);
					if (url_options.order == "pricelevel5:asc") 
					{
							var itemmodels = [];
							_.each(self.model.get('items').models, function (model) {
								itemmodels.push(model);
							})
						var itemAttrmodels = [];
							 _.each(itemmodels, function (model) {
								itemAttrmodels.push(model.attributes);
							 })
							var SortedOnpriceArray = _.sortBy(itemAttrmodels, 'onlinecustomerprice');
							var finalArray = [];
							for (var m = 0; m < SortedOnpriceArray.length; m++)
							{
								for (var k = 0; k < (self.model.get('items').models).length; k++)
								{
									 if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) 
									 {
										 finalArray.push(self.model.get('items').models[k]);
										 break;
									  }
								 }
							}
							self.model.get('items').models = finalArray;
					}
					else if (url_options.order == "pricelevel5:desc") {
                        var itemmodels = [];
                        _.each(self.model.get('items').models, function (model) {
                            itemmodels.push(model);
                        })
                        var itemmodel = [];
                        _.each(itemmodels, function (model) {
                            itemmodel.push(model.attributes);
                        })
                        var SortedOnpriceArray = _.sortBy(itemmodel, 'onlinecustomerprice');
                        var finalArray = [];
                        for (var m = 0; m < SortedOnpriceArray.length; m++) {
                            for (var k = 0; k < (self.model.get('items').models).length; k++) {
                                if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
                                    finalArray.push(self.model.get('items').models[k]);
                                    break;
                                }
                            }
                        }
                        finalArray = finalArray.reverse();
                        self.model.get('items').models = finalArray;
                    } else {
                        var SortedArrayOnId = _.sortBy(self.model.get('items').models, 'id');
                        self.model.get('items').models = SortedArrayOnId;
                    }
					
                    var data = {"iteminternalids":array};
                    const musicianpromise = self.musician.save(data, {wait: true});
                    if(musicianpromise)
                    {
                        musicianpromise.done((response) => {        
                            self.priviouslyPurchasedData =  response;  
                            promise.resolve();
                        }); 
                    }
                
            })
            .fail(function(jqXhr) {
                promise.reject();
                if (`${jqXhr.status}` === '404') {
                    self.application.getLayout().notFound();
                }
            });

            return promise;
    },

    getPagination: function getPagination() {        
        return {
            currentPage: this.translator.getOptionValue('page'),
            pageCount: this.totalPages,
            itemCount: this.totalitem,//this.model.get('total'),
            pageSize: parseInt(this.translator.getOptionValue('show'), 10),
            sorting: this.translator.getOptionValue('order'),
            display: this.translator.getOptionValue('display'),
            filters: this._getFacetsTranslator(this.translator),
            searchText: this.translator.getOptionValue('keywords')
        };
    },

    _setEvent: function _setEvent(options) {
        this.setEvent(options.eventName, options.value).fail(function() {
            if (options.event.currentTarget.nodeName === 'SELECT') {
                options.event.currentTarget.value = options.valueOriginal;
            }

            options.event.stopPropagation();
            options.event.preventDefault();
        });
    },

    _getFacetsTranslator(translator) {
        const facets = {};
        const allFacets = translator.getAllFacets();

        _.each(allFacets, function(facet: any) {
            facets[facet.url] = facet.value;
        });

        return facets;
    },

    _gotoFacets: function _gotoFacet(e) {
        const url = e.currentTarget.href;
        const translator = FacetsHelper.parseUrl(
            url,
            this.translator.configuration,
            !!this.model.get('category')
        );

        this._setEvent({
            event: e,
            eventName: 'Filters',
            value: this._getFacetsTranslator(translator)
        });
    },

    _gotoDisplay: function gotoDisplay(e) {

        this.itemsDisplayOptions[0].isDefault = true;
        this.itemsDisplayOptions[2].isDefault = false;

        const default_value = _.find(this.itemsDisplayOptions, function(result: any) {
            return result.isDefault;
        }).id;
        const display = Utils.getParameterByName(e.currentTarget.href, 'display') || default_value;

        this._setEvent({ event: e, eventName: 'Display', value: display });
    },

    _gotoShow: function gotoShow(e) {
        const original = this.translator.getUrl();
        const default_value = _.find(this.resultsPerPage, function(result: any) {
            return result.isDefault;
        }).id;
        const show =
            parseInt(Utils.getParameterByName(e.currentTarget.value, 'show'), 10) || default_value;
        this._setEvent({
            event: e,
            eventName: 'PageSize',
            value: show,
            valueOriginal: original
        });
    },

    _gotoOrder: function gotoOrder(e) {

        const original = this.translator.getUrl();
        const default_value = _.find(this.sortOptions, function(result: any) {
            return result.isDefault;
        }).id;
        const order = Utils.getParameterByName(e.currentTarget.value, 'order') || default_value;

        this._setEvent({
            event: e,
            eventName: 'Sorting',
            value: order,
            valueOriginal: original
        });
    },

    _gotoPage: function gotoPage(e) {
        const order = parseInt(Utils.getParameterByName(e.currentTarget.href, 'page'), 10) || 1;
        this._setEvent({ event: e, eventName: 'CurrentPage', value: order });
    },

    setEvent: function setEvent(event_name, value) {
        const self = this;
        const pagination = this.getPagination();

        pagination[`set${event_name}`] = value;

        return this.model
            .cancelableTrigger(`FacetModel.set${event_name}`, pagination)
            .done(function() {
                Backbone.history.once('route', function() {
                    
                    const pagination = self.getPagination();

                    pagination[event_name.charAt(0).toLowerCase() + event_name.slice(1)] = value;

                    self.model.cancelableTrigger(`FacetModel.set${event_name}`, pagination);
                });
            });
    },

    // @method toggleFilters
    toggleFilters(e) {
        e.preventDefault();

        const current_target = jQuery(e.currentTarget);

        this.collapsable_elements['facet-header'].collapsed = !this.collapsable_elements[
            'facet-header'
        ].collapsed;

        current_target.find('.filter-icon').toggleClass('icon-chevron-up');

        current_target
            .parents('[data-type="accordion"]')
            .toggleClass('well')
            .toggleClass('facet-header-white-well')
            .find('[data-type="accordion-body"]')
            .stop()
            .slideToggle();
    },

    // @method getPath
    getPath() {
        const base_url = `${window.location.protocol}//${window.location.hostname}`;
        let canonical = `/${Backbone.history.fragment.split('?')[0]}`;
        if (this.model.get('category')) {
            const category_canonical =
                this.model.get('category').get('canonical') ||
                this.model.get('category').get('fullurl');
            if (canonical.indexOf(category_canonical) !== 0) {
                canonical = category_canonical;
            }
        }

        return (canonical.indexOf('/') === 0 ? base_url : '') + canonical;
    },

    // @method getCanonical
    getCanonical() {
        let canonical_url = this.getPath();
        const current_page = this.translator.getOptionValue('page');

        if (current_page > 1) {
            canonical_url += `?page=${current_page}`;
        }

        return canonical_url;
    },

    // @method getRelPrev
    getRelPrev() {
        let previous_page_url = this.getPath();
        const current_page = this.translator.getOptionValue('page');

        if (current_page > 1) {
            if (current_page === 2) {
                return previous_page_url;
            }

            if (current_page > 2) {
                return (previous_page_url += `?page=${current_page - 1}`);
            }
        }

        return null;
    },

    // @method getRelNext
    getRelNext() {
        let next_page_url = this.getPath();
        const current_page = this.translator.getOptionValue('page');

        if (current_page < this.totalPages) {
            return (next_page_url += `?page=${current_page + 1}`);
        }

        return null;
    },

// @method formatFacetTitle: accepts a facet object and returns a string formatted to be displayed on the document's title according with user facet configuration property titleToken
    // @param {Object} facet @returns {String}
    formatFacetTitle(facet) {
        const defaults = {
            range: '$(2): $(0) to $(1)',
            multi: '$(1): $(0)',
            single: '$(1): $(0)'
        };

        if (!facet.config.titleToken) {
            facet.config.titleToken = defaults[facet.config.behavior] || defaults.single;
        }
        if (_.isFunction(facet.config.titleToken)) {
            return facet.config.titleToken(facet);
        }
        if (facet.config.behavior === 'range') {
            return Utils.translate(
                facet.config.titleToken,
                facet.value.to,
                facet.value.from,
                facet.config.name
            );
        }
        if (facet.config.behavior === 'multi') {
            const buffer = [];
            _.each(facet.value, function(val) {
                buffer.push(val);
            });
            return Utils.translate(facet.config.titleToken, buffer.join(', '), facet.config.name);
        }
        const value = this.translator.getLabelForValue(facet.config.id, facet.value);

        return Utils.translate(facet.config.titleToken, value, facet.config.name);
    },

    // @method getTitle overrides Backbone.Views.getTitle
    getTitle() {
        if (this.title) {
            return this.title;
        }

        const { facets } = this.translator;
        const category = this.model.get('category');
        let title = category
            ? category.get('pagetitle') || _.pluck(this.getBreadcrumbPages(), 'text').join(' > ')
            : this.title;

        if (facets && facets.length) {
            const buffer = [];
            let facet = null;

            for (let i = 0; i < facets.length; i++) {
                facet = facets[i];
                buffer.push(this.formatFacetTitle(facet));

                if (i < facets.length - 1) {
                    buffer.push(facet.config.titleSeparator || ', ');
                }
            }

            title = title ? `${title} - ` : '';

            const { searchTitlePrefix, searchTitleSuffix } = this.application.getConfig();
            title = (searchTitlePrefix || '') + buffer.join('') + (searchTitleSuffix || '');
        } else if (this.translator.getOptionValue('keywords')) {
            title = Utils.translate(
                'Search results for "$(0)"',
                this.translator.getOptionValue('keywords')
            );
        } else {
            const { defaultSearchTitle } = this.application.getConfig();
            title = title || defaultSearchTitle || '';
        }

        // Update the meta tag 'twitter:title'
        this.setMetaTwitterTitle(title);

        return title;
    },

    // @method getMetaDescription Get view's SEO attributes @return {String}
    getMetaDescription() {
        const category = this.model.get('category');

        return (category && category.get('metadescription')) || this.metaDescription;
    },

    // @method getMetaKeywords @return {String}
    getMetaKeywords() {
        const category = this.model.get('category');

        return (category && category.get('metakeywords')) || this.metaKeywords;
    },

    getAddToHead() {
        const category = this.model.get('category');

        return (category && category.get('addtohead')) || this.addToHead;
    },

    // @method setMetaTwitterTitle @param {Strnig}title
    setMetaTwitterTitle(title) {
        const seo_twitter_title = jQuery('meta[name="twitter:title"]');
        seo_twitter_title && seo_twitter_title.attr('content', title);
    },

    // @method setOptionsTranslator Set up the default option for displaying the facets.
    // If we are in a small device, we've got to omit the 'grid' display option,
    // for it is not showing in this kind of devices. We must change it for 'table'
    setOptionsTranslator() {
        if (this.translator.options.display === 'grid' && Utils.isPhoneDevice()) {
            this.translator.options.display = 'table';
        }
    },

    // @method showContent overrides Backbone.View.showContent to works with the title to find the proper wording and calls the layout.showContent
    showContent() {
        // If its a free text search it will work with the title
        const self = this;
        let keywords = this.translator.getOptionValue('keywords');
        const resultCount = this.totalitem ? this.totalitem : 0;//this.model.get('total');
        if (keywords) {
            keywords = decodeURIComponent(keywords);

            if (resultCount > 0) {
                this.subtitle =
                    resultCount > 1
                        ? Utils.translate('Results for "$(0)"', keywords)
                        : Utils.translate('Result for "$(0)"', keywords);
            } else {
                this.subtitle = Utils.translate(
                    'We couldn\'t find any items that match "$(0)"',
                    keywords
                );
            }
        }

        this.totalPages = Math.ceil(resultCount / this.translator.getOptionValue('show'));
       
        return this.application
            .getLayout()
            .showContent(this)
            .done(function() {
                if ((<any>jQuery.fn).scPush) {
                    self.$el.find('[data-action="pushable"]').scPush({ target: 'tablet' });
                }
                });
    },

    render() {
        let list_type = 'Facets';

        if (this.model.get('category')) {
            list_type = 'Category';
        } else if (this.translator.getOptionValue('keywords')) {
            list_type = 'Search';
        }

        Tracker.getInstance().trackProductList(this.items, list_type);

        this._render();
    },

    // @method getBreadcrumbPages
    // It will generate an array suitable to pass it to the breadcrumb macro
    // It looks in the category facet value
    // @return {Array<Object>}
    getBreadcrumbPages() {
        const breadcrumb = [];

        if (this.model.get('category')) {
            const list = this.model.get('category').get('breadcrumb');
            const self = this;

            _.each(list, function(bread: any) {
                breadcrumb.push({
                    text: bread.name,
                    href: bread.fullurl,
                    additionalFields: getAdditionalFields(
                        self.model.get('category').attributes,
                        'categories.breadcrumb.fields'
                    )
                });
            });

            return breadcrumb;
        }
        if (this.translator.getOptionValue('keywords')) {
            breadcrumb.push({
                href: '#',
                text: Utils.translate('Search Results')
            });
        } else {
            breadcrumb.push({
                href: this.application.translatorConfig.fallbackUrl
                    ? `/${this.application.translatorConfig.fallbackUrl}`
                    : '#',
                text: Utils.translate('Shop')
            });
        }

        return breadcrumb;
    },

    // @method toggleFacetNavigation Hides/Shows the facet navigation area
    toggleFacetNavigation() {
        this.$el.toggleClass('narrow-by');
        this.toggleNavigationListener(this.$el.hasClass('narrow-by'));
    },

    // @method toggleNavigationListener
    // adds/removes event listeners to the HTML to hide the facet navigation area
    // @param {Boolean} isOn
    toggleNavigationListener(isOn) {
        const self = this;
        let touch_started = null;

        // turn listeners on
        if (isOn) {
            jQuery('html')
                // we save the time when the touchstart happened
                .on('touchstart.narrow-by', function() {
                    touch_started = new Date().getTime();
                })
                // code for touchend and mousdown is the same
                .on('touchend.narrow-by mousedown.narrow-by', function(e) {
                    // if there wasn't a touch event, or the time difference between
                    // touch start and touch end is less that 200 miliseconds
                    // (this is to allow scrolling without closing the facet navigation area)
                    if (!touch_started || new Date().getTime() - touch_started < 200) {
                        const $target = jQuery(e.target);

                        // if we are not touching the narrow by button or the facet navigation area
                        if (
                            !$target.closest('[data-toggle="facet-navigation"]').length &&
                            !$target.closest('#faceted-navigation').length
                        ) {
                            // we hide the navigation
                            self.toggleFacetNavigation();
                        }
                    }
                });
        } else {
            jQuery('html')
                // if the navigation area is hidden, we remove the event listeners from the HTML
                .off('mousedown.narrow-by touchstart.narrow-by touchend.narrow-by');
        }
    },

    contextData: {
        itemList() {
            return Utils.deepCopy(this.model.get('items'));
        },
        category() {
            return Utils.deepCopy(this.model.get('category'));
        }
    },

    childViews: {

        'Facets.ItemListDisplaySelector': function() {
            return new FacetsItemListDisplaySelectorView({
                configClasses: 'pull-right',
                options: this.itemsDisplayOptions,
                translator: this.translator
            });
        },

        'Facets.ItemListSortSelector': function() {
            return new FacetsItemListSortSelectorView({
                options: this.sortOptions,
                translator: this.translator
            });
        },
        // Show 'XX products per page' View
        'Facets.ItemListShowSelector': function() {
            return new FacetsItemListShowSelectorView({
                options: this.resultsPerPage,
                translator: this.translator
            });
        },
        // Extra Facet filter View
        'Facets.Items': function() {
			
            const self = this;
            const display_option: any = _.find(this.itemsDisplayOptions, function(option) {
                return option.id === self.translator.getOptionValue('display');
            });
         
            return new FacetsItemsCollectionView ({
                application: this.application,
                keywords: this.translator.getOptionValue('keywords'),
                collection:this.model.get('items').models , 
                viewsPerRow: parseInt(display_option.columns, 10),
                cellViewTemplate: display_option.template,
                isspecialCategory:true,
				previouslyPurchased: self.priviouslyPurchasedData || []
            });
        },
        'Facets.Items.Empty': function() {
            return new FacetsEmptyView({
                keywords: this.translator.getOptionValue('keywords')
            });
        },

       'GlobalViews.Pagination': function() {
            const { translator } = this;

            return new GlobalViewsPaginationView(
                _.extend(
                    {
                        currentPage: translator.getOptionValue('page'),
                        totalPages: this.totalPages,
                        pager(page) {
                            return translator.cloneForOption('page', page).getUrl();
                        }
                    },
                    Configuration.defaultPaginationSettings
                )
            );
        },

        'Facets.Browse.CategoryHeading': function() {
            return new FacetsBrowseCategoryHeadingView({
                model: this.model.get('category'),
                showDescription:
                    this.translator.cloneWithoutFacetId('category').getAllFacets().length === 0
            });
        },

        'Facets.CategoryCells': function() {
            return new BackboneCollectionView({
                childView: FacetsCategoryCellView,
                collection: this.model.get('category')
                    ? this.model.get('category').get('categories')
                    : []
            });
        },

        'Facets.CategorySidebar': function() {
            return new FacetsFacetedNavigationItemCategoryView({
                model: this.model.get('category'),
                categoryUrl: this.translator.getCategoryUrl()
            });
        }
    },

    // @method getContext @returns {Facets.Browse.View.Context}
    getContext() {
        const hasSelectedFacets = this.translator.cloneWithoutFacetId('category').getAllFacets()
            .length;
        const hasSubcategories = this.model.get('category')
            ? this.model.get('category').get('categories').length
            : false;
        const hasItems =  this.model.get('items') && this.model.get('items').length > 0;

        var isImage = ((Configuration.get('Musicianresourcepage.musicianpageurl')).slice(-4) == ("jpeg" || "png"))?true:false;
            
// @class Facets.Browse.View.Context
        return {
            // @property {Number} total            
            total: this.totalitem ? this.totalitem : this.model.get('total'),
            // @property {Boolean} isTotalProductsOne
            isTotalProductsOne:((this.totalitem ? this.totalitem : this.model.get('total')) === 1),
            // @property {String} title
            title: this.getTitle(),
            // @property {Boolean} hasItemsAndFacets
            hasItemsAndFacets: !!(
                hasItems &&
                this.model.get('facets') &&
                this.model.get('facets').length
            ),
            // @property {Boolean} collapseHeader
            collapseHeader: !!this.collapsable_elements['facet-header'].collapsed,
            // @property {String} keywords
            keywords: this.translator.getOptionValue('keywords'),
            // @property {Boolean} showResults
            showResults: _.isNull(this.translator.getOptionValue('keywords'))
                ? true
                : ((this.totalitem ? this.totalitem : this.model.get('total')) > 0),
            // @property {Boolean} isEmptyList
            isEmptyList: ((this.totalitem ? this.totalitem : this.model.get('total')) <= 0),
            // @property {Boolean} isCategory
            isCategory: !!this.model.get('category'),
            // @property {Boolean} showItems
            showItems:
                hasItems ||
                (!hasItems && hasSelectedFacets) ||
                !(!hasItems && !hasSelectedFacets && hasSubcategories),
             shownavigation: false,
             isImage:isImage,
             pageTopimage:Configuration.get('Musicianresourcepage.musicianpageurl')
        };
    }
});
