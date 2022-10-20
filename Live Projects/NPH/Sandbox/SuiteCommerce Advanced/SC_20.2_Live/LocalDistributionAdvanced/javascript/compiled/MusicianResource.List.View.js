/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("MusicianResource.List.View", ["require", "exports", "underscore", "facets_facet_browse.tpl", "Utils", "jQuery", "Categories.Model", "Configuration", "Categories.Utils", "FacetsItemsCollectionView", "GlobalViews.Pagination.View", "AjaxRequestsKiller", "Profile.Model", "LiveOrder.Model", "Categories", "Facets.Helper", "Facets.Model", "Facets.ItemListDisplaySelector.View", "Facets.ItemListSortSelector.View", "Facets.ItemListShowSelector.View", "Facets.Empty.View", "Facets.Browse.CategoryHeading.View", "Facets.CategoryCell.View", "Facets.FacetedNavigationItemCategory.View", "Tracker", "Backbone.View", "Backbone", "Backbone.CollectionView", "SessionStorageHandler", "MusicianResource.Model", "Bootstrap.Slider"], function (require, exports, _, facets_special_plp_tpl, Utils, jQuery, Categories_Model_1, Configuration_1, Categories_Utils_1, FacetsItemsCollectionView_1, GlobalViews_Pagination_View_1, AjaxRequestsKiller_1, Profile_Model_1, LiveOrderModel, Categories, FacetsHelper, FacetsModel, FacetsItemListDisplaySelectorView, FacetsItemListSortSelectorView, FacetsItemListShowSelectorView, FacetsEmptyView, FacetsBrowseCategoryHeadingView, FacetsCategoryCellView, FacetsFacetedNavigationItemCategoryView, Tracker, BackboneView, Backbone, BackboneCollectionView, SessionStorageHandler, MusicianResourceModel) {
    "use strict";
    // statuses stores the statuses of the collapsible facets
    var statuses = (window.statuses = {});
    var collapsable_elements = (window.collapsable_elements = {});
    return BackboneView.extend({
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
        initialize: function (options) {
            this.options = options;
            this.application = options.application;
            this.application.getLayout().on('beforeAppendView', function (view) {
                var viewId = view.$el.attr('id');
                if (viewId == 'musician-resource-list') {
                    this.$(document).ready(function () {
                        $('.shopping-layout-breadcrumb').hide();
                    });
                    this.render();
                }
            });
            this.statuses = statuses;
            this.collapsable_elements = collapsable_elements;
            this.translatorConfig = this.application.translatorConfig;
            this.items = [];
            var fullurl = Backbone.history.fragment;
            var url = fullurl.split('?')[0];
            this.categoriesTopLevelUrl = Categories.getTopLevelCategoriesUrlComponent();
            this.isCategoryPage = !!_.find(this.categoriesTopLevelUrl, function (categoryUrl) {
                categoryUrl = Utils.correctURL(categoryUrl);
                var caturl = Utils.correctURL(url);
                return caturl.indexOf(categoryUrl) === 0;
            });
            this.model = new FacetsModel();
            this.translator = FacetsHelper.parseUrl(fullurl, this.translatorConfig, this.isCategoryPage);
            this.router = this.constructor.router;
            this.setOptionsTranslator();
            var query = [];
            var addingattributesatpapi = this.translator.getApiParams();
            var itemfieldsoptionss = SessionStorageHandler.get("musicianResourcecategotyItems");
            /*if(itemfieldsoptionss){

            
              if(itemfieldsoptionss["Ritesinternalid"] != ""){

                addingattributesatpapi["custitem_appf_rites"] = itemfieldsoptionss["Ritesinternalid"];
              
              }
              if(itemfieldsoptionss["HymnSectioninternalid"] != ""){

                addingattributesatpapi["custitem_appf_hymn_section"] = itemfieldsoptionss["HymnSectioninternalid"];
              
              }
              if(itemfieldsoptionss["yearsunday"] != null && itemfieldsoptionss["yearsunday"] != "" && itemfieldsoptionss["yearsunday"].length > 0){

                addingattributesatpapi["custitem_appf_lectionary_year_sunday"] = itemfieldsoptionss["yearsunday"][0];
              
              }
              if(itemfieldsoptionss["bookchapterverse"] != null && itemfieldsoptionss["bookchapterverse"] != "" && itemfieldsoptionss["bookchapterverse"].length > 0){

                addingattributesatpapi["custitem_appf_scripture_book"] = itemfieldsoptionss["bookchapterverse"][0];
              
              }
              if(itemfieldsoptionss["SelectaMeterinternalid"] != ""){

                addingattributesatpapi["custitem_appf_meter"] = itemfieldsoptionss["SelectaMeterinternalid"];
              
              }
              if(itemfieldsoptionss["SelectaPackageinternalid"] != ""){

                addingattributesatpapi["custitem_appf_package"] = itemfieldsoptionss["SelectaPackageinternalid"];
              
              }

              if(itemfieldsoptionss["HymnNumberinternalid"] != ""){

                query.push(itemfieldsoptionss["HymnNumberinternalid"]);
              
              }
             if(itemfieldsoptionss["HymnTitleinternalid"] != ""){

                      query.push(itemfieldsoptionss["HymnTitleinternalid"]);
              }
             if(itemfieldsoptionss["HymanTuneinternalid"] != ""){

                query.push(itemfieldsoptionss["HymanTuneinternalid"]);
              
            }
              if(itemfieldsoptionss["PsalmNumberinternalid"] != ""){

                query.push(itemfieldsoptionss["PsalmNumberinternalid"]);
              
              }
          if(itemfieldsoptionss["PsalmTitleinternalid"] != ""){

                query.push(itemfieldsoptionss["PsalmTitleinternalid"]);
              
             }
             if(itemfieldsoptionss["PsalmTuneinternalid"] != ""){

                query.push(itemfieldsoptionss["PsalmTuneinternalid"]);
              
             }

              if(query.length>0){

             var c = ((query[0])?query[0]:" ")+" "+((query[1])?query[1]:" ")+" "+((query[2])?query[2]:" ")+" "+((query[3])?query[3]:" ")+" "+((query[4])?query[4]:" ")+" "+((query[5])?query[5]:" ")//(itemfieldsoptionss["HymnNumberinternalid"])?itemfieldsoptionss["HymnNumberinternalid"]:" " + " "+ (itemfieldsoptionss["HymnTitleinternalid"])?itemfieldsoptionss["HymnTitleinternalid"]:" " +" "+(itemfieldsoptionss["HymanTuneinternalid"])?itemfieldsoptionss["HymanTuneinternalid"]:" "+" "+ (itemfieldsoptionss["PsalmNumberinternalid"])?itemfieldsoptionss["PsalmNumberinternalid"]:" "+" "+ (itemfieldsoptionss["PsalmTitleinternalid"])?itemfieldsoptionss["PsalmTitleinternalid"]:" "+" "+(itemfieldsoptionss["PsalmTuneinternalid"])?itemfieldsoptionss["PsalmTuneinternalid"]:" "


             addingattributesatpapi["q"] = c.replace("/,/g"," ");
             

              }
        }*/
            //addingattributesatpapi["commercecategoryurl"] ="/bibles"
            if (Configuration_1.Configuration.get("Musicianresourcepage.musicianresourceid")) {
                addingattributesatpapi["commercecategoryid"] = Configuration_1.Configuration.get("Musicianresourcepage.musicianresourceid");
            }
            var self = this;
            if (itemfieldsoptionss.length > 0) {
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
                addingattributesatpapi['custitem_appf_meter'] = "fornoitemavaialablepage";
            }
            this.model.options = {
                data: addingattributesatpapi || this.translator.getApiParams(),
                killerId: AjaxRequestsKiller_1.AjaxRequestsKiller.getKillerId(),
                pageGeneratorPreload: true
            };
            if (this.isCategoryPage) {
                var categoryModel = new Categories_Model_1.CategoriesModel({
                    data: { fullurl: this.translator.getCategoryUrl() },
                    killerId: AjaxRequestsKiller_1.AjaxRequestsKiller.getKillerId()
                });
                this.model.set('category', categoryModel);
            }
            var _a = this.application.getConfig(), itemsDisplayOptions = _a.itemsDisplayOptions, resultsPerPage = _a.resultsPerPage, sortOptions = _a.sortOptions;
            this.itemsDisplayOptions = Utils.deepCopy(itemsDisplayOptions);
            this.resultsPerPage = Utils.deepCopy(resultsPerPage);
            this.sortOptions = Utils.deepCopy(sortOptions);
            _.each(this.resultsPerPage, function (perPage) {
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
            var promise = jQuery.Deferred();
            // if prices aren't to be shown we take out price related facet
            // and clean up the url
            if (Profile_Model_1.ProfileModel.getInstance().hidePrices()) {
                this.translator = this.translator.cloneWithoutFacetId('onlinecustomerprice');
            }
            var self = this;
            var models = [this.model];
            var categoryModel = this.model.get('category');
            if (categoryModel) {
                models.push(categoryModel);
            }
            jQuery.when
                .apply(null, _.invoke(models, 'fetch', {}))
                .then(function (facetResponse) {
                facetResponse = categoryModel ? facetResponse[0] : facetResponse;
                self.translator.setLabelsFromFacets(self.model.get('facets') || []);
                var array = [];
                for (var i = 0; i < self.model.get('items').models.length; i++) {
                    array.push(self.model.get('items').models[i].get('internalid'));
                }
                var SortedArrayOnId = _.sortBy(self.model.get('items').models, 'id');
                self.model.get('items').models = SortedArrayOnId;
                var url_options = Utils.parseUrlOptions(window.location.href);
                if (url_options.order == "pricelevel5:asc") {
                    var itemmodels = [];
                    _.each(self.model.get('items').models, function (model) {
                        itemmodels.push(model);
                    });
                    var itemAttrmodels = [];
                    _.each(itemmodels, function (model) {
                        itemAttrmodels.push(model.attributes);
                    });
                    var SortedOnpriceArray = _.sortBy(itemAttrmodels, 'onlinecustomerprice');
                    var finalArray = [];
                    for (var m = 0; m < SortedOnpriceArray.length; m++) {
                        for (var k = 0; k < (self.model.get('items').models).length; k++) {
                            if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
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
                    });
                    var itemmodel = [];
                    _.each(itemmodels, function (model) {
                        itemmodel.push(model.attributes);
                    });
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
                }
                else {
                    var SortedArrayOnId = _.sortBy(self.model.get('items').models, 'id');
                    self.model.get('items').models = SortedArrayOnId;
                }
                var data = { "iteminternalids": array };
                var musicianpromise = self.musician.save(data, { wait: true });
                if (musicianpromise) {
                    musicianpromise.done(function (response) {
                        self.priviouslyPurchasedData = response;
                        promise.resolve();
                    });
                }
            })
                .fail(function (jqXhr) {
                promise.reject();
                if ("" + jqXhr.status === '404') {
                    self.application.getLayout().notFound();
                }
            });
            return promise;
        },
        getPagination: function getPagination() {
            return {
                currentPage: this.translator.getOptionValue('page'),
                pageCount: this.totalPages,
                itemCount: this.totalitem,
                pageSize: parseInt(this.translator.getOptionValue('show'), 10),
                sorting: this.translator.getOptionValue('order'),
                display: this.translator.getOptionValue('display'),
                filters: this._getFacetsTranslator(this.translator),
                searchText: this.translator.getOptionValue('keywords')
            };
        },
        _setEvent: function _setEvent(options) {
            this.setEvent(options.eventName, options.value).fail(function () {
                if (options.event.currentTarget.nodeName === 'SELECT') {
                    options.event.currentTarget.value = options.valueOriginal;
                }
                options.event.stopPropagation();
                options.event.preventDefault();
            });
        },
        _getFacetsTranslator: function (translator) {
            var facets = {};
            var allFacets = translator.getAllFacets();
            _.each(allFacets, function (facet) {
                facets[facet.url] = facet.value;
            });
            return facets;
        },
        _gotoFacets: function _gotoFacet(e) {
            var url = e.currentTarget.href;
            var translator = FacetsHelper.parseUrl(url, this.translator.configuration, !!this.model.get('category'));
            this._setEvent({
                event: e,
                eventName: 'Filters',
                value: this._getFacetsTranslator(translator)
            });
        },
        _gotoDisplay: function gotoDisplay(e) {
            this.itemsDisplayOptions[0].isDefault = true;
            this.itemsDisplayOptions[2].isDefault = false;
            var default_value = _.find(this.itemsDisplayOptions, function (result) {
                return result.isDefault;
            }).id;
            var display = Utils.getParameterByName(e.currentTarget.href, 'display') || default_value;
            this._setEvent({ event: e, eventName: 'Display', value: display });
        },
        _gotoShow: function gotoShow(e) {
            var original = this.translator.getUrl();
            var default_value = _.find(this.resultsPerPage, function (result) {
                return result.isDefault;
            }).id;
            var show = parseInt(Utils.getParameterByName(e.currentTarget.value, 'show'), 10) || default_value;
            this._setEvent({
                event: e,
                eventName: 'PageSize',
                value: show,
                valueOriginal: original
            });
        },
        _gotoOrder: function gotoOrder(e) {
            var original = this.translator.getUrl();
            var default_value = _.find(this.sortOptions, function (result) {
                return result.isDefault;
            }).id;
            var order = Utils.getParameterByName(e.currentTarget.value, 'order') || default_value;
            this._setEvent({
                event: e,
                eventName: 'Sorting',
                value: order,
                valueOriginal: original
            });
        },
        _gotoPage: function gotoPage(e) {
            var order = parseInt(Utils.getParameterByName(e.currentTarget.href, 'page'), 10) || 1;
            this._setEvent({ event: e, eventName: 'CurrentPage', value: order });
        },
        setEvent: function setEvent(event_name, value) {
            var self = this;
            var pagination = this.getPagination();
            pagination["set" + event_name] = value;
            return this.model
                .cancelableTrigger("FacetModel.set" + event_name, pagination)
                .done(function () {
                Backbone.history.once('route', function () {
                    var pagination = self.getPagination();
                    pagination[event_name.charAt(0).toLowerCase() + event_name.slice(1)] = value;
                    self.model.cancelableTrigger("FacetModel.set" + event_name, pagination);
                });
            });
        },
        // @method toggleFilters
        toggleFilters: function (e) {
            e.preventDefault();
            var current_target = jQuery(e.currentTarget);
            this.collapsable_elements['facet-header'].collapsed = !this.collapsable_elements['facet-header'].collapsed;
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
        getPath: function () {
            var base_url = window.location.protocol + "//" + window.location.hostname;
            var canonical = "/" + Backbone.history.fragment.split('?')[0];
            if (this.model.get('category')) {
                var category_canonical = this.model.get('category').get('canonical') ||
                    this.model.get('category').get('fullurl');
                if (canonical.indexOf(category_canonical) !== 0) {
                    canonical = category_canonical;
                }
            }
            return (canonical.indexOf('/') === 0 ? base_url : '') + canonical;
        },
        // @method getCanonical
        getCanonical: function () {
            var canonical_url = this.getPath();
            var current_page = this.translator.getOptionValue('page');
            if (current_page > 1) {
                canonical_url += "?page=" + current_page;
            }
            return canonical_url;
        },
        // @method getRelPrev
        getRelPrev: function () {
            var previous_page_url = this.getPath();
            var current_page = this.translator.getOptionValue('page');
            if (current_page > 1) {
                if (current_page === 2) {
                    return previous_page_url;
                }
                if (current_page > 2) {
                    return (previous_page_url += "?page=" + (current_page - 1));
                }
            }
            return null;
        },
        // @method getRelNext
        getRelNext: function () {
            var next_page_url = this.getPath();
            var current_page = this.translator.getOptionValue('page');
            if (current_page < this.totalPages) {
                return (next_page_url += "?page=" + (current_page + 1));
            }
            return null;
        },
        // @method formatFacetTitle: accepts a facet object and returns a string formatted to be displayed on the document's title according with user facet configuration property titleToken
        // @param {Object} facet @returns {String}
        formatFacetTitle: function (facet) {
            var defaults = {
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
                return Utils.translate(facet.config.titleToken, facet.value.to, facet.value.from, facet.config.name);
            }
            if (facet.config.behavior === 'multi') {
                var buffer_1 = [];
                _.each(facet.value, function (val) {
                    buffer_1.push(val);
                });
                return Utils.translate(facet.config.titleToken, buffer_1.join(', '), facet.config.name);
            }
            var value = this.translator.getLabelForValue(facet.config.id, facet.value);
            return Utils.translate(facet.config.titleToken, value, facet.config.name);
        },
        // @method getTitle overrides Backbone.Views.getTitle
        getTitle: function () {
            if (this.title) {
                return this.title;
            }
            var facets = this.translator.facets;
            var category = this.model.get('category');
            var title = category
                ? category.get('pagetitle') || _.pluck(this.getBreadcrumbPages(), 'text').join(' > ')
                : this.title;
            if (facets && facets.length) {
                var buffer = [];
                var facet = null;
                for (var i = 0; i < facets.length; i++) {
                    facet = facets[i];
                    buffer.push(this.formatFacetTitle(facet));
                    if (i < facets.length - 1) {
                        buffer.push(facet.config.titleSeparator || ', ');
                    }
                }
                title = title ? title + " - " : '';
                var _a = this.application.getConfig(), searchTitlePrefix = _a.searchTitlePrefix, searchTitleSuffix = _a.searchTitleSuffix;
                title = (searchTitlePrefix || '') + buffer.join('') + (searchTitleSuffix || '');
            }
            else if (this.translator.getOptionValue('keywords')) {
                title = Utils.translate('Search results for "$(0)"', this.translator.getOptionValue('keywords'));
            }
            else {
                var defaultSearchTitle = this.application.getConfig().defaultSearchTitle;
                title = title || defaultSearchTitle || '';
            }
            // Update the meta tag 'twitter:title'
            this.setMetaTwitterTitle(title);
            return title;
        },
        // @method getMetaDescription Get view's SEO attributes @return {String}
        getMetaDescription: function () {
            var category = this.model.get('category');
            return (category && category.get('metadescription')) || this.metaDescription;
        },
        // @method getMetaKeywords @return {String}
        getMetaKeywords: function () {
            var category = this.model.get('category');
            return (category && category.get('metakeywords')) || this.metaKeywords;
        },
        getAddToHead: function () {
            var category = this.model.get('category');
            return (category && category.get('addtohead')) || this.addToHead;
        },
        // @method setMetaTwitterTitle @param {Strnig}title
        setMetaTwitterTitle: function (title) {
            var seo_twitter_title = jQuery('meta[name="twitter:title"]');
            seo_twitter_title && seo_twitter_title.attr('content', title);
        },
        // @method setOptionsTranslator Set up the default option for displaying the facets.
        // If we are in a small device, we've got to omit the 'grid' display option,
        // for it is not showing in this kind of devices. We must change it for 'table'
        setOptionsTranslator: function () {
            if (this.translator.options.display === 'grid' && Utils.isPhoneDevice()) {
                this.translator.options.display = 'table';
            }
        },
        // @method showContent overrides Backbone.View.showContent to works with the title to find the proper wording and calls the layout.showContent
        showContent: function () {
            // If its a free text search it will work with the title
            var self = this;
            var keywords = this.translator.getOptionValue('keywords');
            var resultCount = this.totalitem ? this.totalitem : 0; //this.model.get('total');
            if (keywords) {
                keywords = decodeURIComponent(keywords);
                if (resultCount > 0) {
                    this.subtitle =
                        resultCount > 1
                            ? Utils.translate('Results for "$(0)"', keywords)
                            : Utils.translate('Result for "$(0)"', keywords);
                }
                else {
                    this.subtitle = Utils.translate('We couldn\'t find any items that match "$(0)"', keywords);
                }
            }
            this.totalPages = Math.ceil(resultCount / this.translator.getOptionValue('show'));
            return this.application
                .getLayout()
                .showContent(this)
                .done(function () {
                if (jQuery.fn.scPush) {
                    self.$el.find('[data-action="pushable"]').scPush({ target: 'tablet' });
                }
            });
        },
        render: function () {
            var list_type = 'Facets';
            if (this.model.get('category')) {
                list_type = 'Category';
            }
            else if (this.translator.getOptionValue('keywords')) {
                list_type = 'Search';
            }
            Tracker.getInstance().trackProductList(this.items, list_type);
            this._render();
        },
        // @method getBreadcrumbPages
        // It will generate an array suitable to pass it to the breadcrumb macro
        // It looks in the category facet value
        // @return {Array<Object>}
        getBreadcrumbPages: function () {
            var breadcrumb = [];
            if (this.model.get('category')) {
                var list = this.model.get('category').get('breadcrumb');
                var self_1 = this;
                _.each(list, function (bread) {
                    breadcrumb.push({
                        text: bread.name,
                        href: bread.fullurl,
                        additionalFields: Categories_Utils_1.getAdditionalFields(self_1.model.get('category').attributes, 'categories.breadcrumb.fields')
                    });
                });
                return breadcrumb;
            }
            if (this.translator.getOptionValue('keywords')) {
                breadcrumb.push({
                    href: '#',
                    text: Utils.translate('Search Results')
                });
            }
            else {
                breadcrumb.push({
                    href: this.application.translatorConfig.fallbackUrl
                        ? "/" + this.application.translatorConfig.fallbackUrl
                        : '#',
                    text: Utils.translate('Shop')
                });
            }
            return breadcrumb;
        },
        // @method toggleFacetNavigation Hides/Shows the facet navigation area
        toggleFacetNavigation: function () {
            this.$el.toggleClass('narrow-by');
            this.toggleNavigationListener(this.$el.hasClass('narrow-by'));
        },
        // @method toggleNavigationListener
        // adds/removes event listeners to the HTML to hide the facet navigation area
        // @param {Boolean} isOn
        toggleNavigationListener: function (isOn) {
            var self = this;
            var touch_started = null;
            // turn listeners on
            if (isOn) {
                jQuery('html')
                    // we save the time when the touchstart happened
                    .on('touchstart.narrow-by', function () {
                    touch_started = new Date().getTime();
                })
                    // code for touchend and mousdown is the same
                    .on('touchend.narrow-by mousedown.narrow-by', function (e) {
                    // if there wasn't a touch event, or the time difference between
                    // touch start and touch end is less that 200 miliseconds
                    // (this is to allow scrolling without closing the facet navigation area)
                    if (!touch_started || new Date().getTime() - touch_started < 200) {
                        var $target = jQuery(e.target);
                        // if we are not touching the narrow by button or the facet navigation area
                        if (!$target.closest('[data-toggle="facet-navigation"]').length &&
                            !$target.closest('#faceted-navigation').length) {
                            // we hide the navigation
                            self.toggleFacetNavigation();
                        }
                    }
                });
            }
            else {
                jQuery('html')
                    // if the navigation area is hidden, we remove the event listeners from the HTML
                    .off('mousedown.narrow-by touchstart.narrow-by touchend.narrow-by');
            }
        },
        contextData: {
            itemList: function () {
                return Utils.deepCopy(this.model.get('items'));
            },
            category: function () {
                return Utils.deepCopy(this.model.get('category'));
            }
        },
        childViews: {
            'Facets.ItemListDisplaySelector': function () {
                return new FacetsItemListDisplaySelectorView({
                    configClasses: 'pull-right',
                    options: this.itemsDisplayOptions,
                    translator: this.translator
                });
            },
            'Facets.ItemListSortSelector': function () {
                return new FacetsItemListSortSelectorView({
                    options: this.sortOptions,
                    translator: this.translator
                });
            },
            // Show 'XX products per page' View
            'Facets.ItemListShowSelector': function () {
                return new FacetsItemListShowSelectorView({
                    options: this.resultsPerPage,
                    translator: this.translator
                });
            },
            // Extra Facet filter View
            'Facets.Items': function () {
                var self = this;
                var display_option = _.find(this.itemsDisplayOptions, function (option) {
                    return option.id === self.translator.getOptionValue('display');
                });
                return new FacetsItemsCollectionView_1.FacetsItemsCollectionView({
                    application: this.application,
                    keywords: this.translator.getOptionValue('keywords'),
                    collection: this.model.get('items').models,
                    viewsPerRow: parseInt(display_option.columns, 10),
                    cellViewTemplate: display_option.template,
                    isspecialCategory: true,
                    previouslyPurchased: self.priviouslyPurchasedData || []
                });
            },
            'Facets.Items.Empty': function () {
                return new FacetsEmptyView({
                    keywords: this.translator.getOptionValue('keywords')
                });
            },
            'GlobalViews.Pagination': function () {
                var translator = this.translator;
                return new GlobalViews_Pagination_View_1.GlobalViewsPaginationView(_.extend({
                    currentPage: translator.getOptionValue('page'),
                    totalPages: this.totalPages,
                    pager: function (page) {
                        return translator.cloneForOption('page', page).getUrl();
                    }
                }, Configuration_1.Configuration.defaultPaginationSettings));
            },
            'Facets.Browse.CategoryHeading': function () {
                return new FacetsBrowseCategoryHeadingView({
                    model: this.model.get('category'),
                    showDescription: this.translator.cloneWithoutFacetId('category').getAllFacets().length === 0
                });
            },
            'Facets.CategoryCells': function () {
                return new BackboneCollectionView({
                    childView: FacetsCategoryCellView,
                    collection: this.model.get('category')
                        ? this.model.get('category').get('categories')
                        : []
                });
            },
            'Facets.CategorySidebar': function () {
                return new FacetsFacetedNavigationItemCategoryView({
                    model: this.model.get('category'),
                    categoryUrl: this.translator.getCategoryUrl()
                });
            }
        },
        // @method getContext @returns {Facets.Browse.View.Context}
        getContext: function () {
            var hasSelectedFacets = this.translator.cloneWithoutFacetId('category').getAllFacets()
                .length;
            var hasSubcategories = this.model.get('category')
                ? this.model.get('category').get('categories').length
                : false;
            var hasItems = this.model.get('items') && this.model.get('items').length > 0;
            var isImage = ((Configuration_1.Configuration.get('Musicianresourcepage.musicianpageurl')).slice(-4) == ("jpeg" || "png")) ? true : false;
            // @class Facets.Browse.View.Context
            return {
                // @property {Number} total            
                total: this.totalitem ? this.totalitem : this.model.get('total'),
                // @property {Boolean} isTotalProductsOne
                isTotalProductsOne: ((this.totalitem ? this.totalitem : this.model.get('total')) === 1),
                // @property {String} title
                title: this.getTitle(),
                // @property {Boolean} hasItemsAndFacets
                hasItemsAndFacets: !!(hasItems &&
                    this.model.get('facets') &&
                    this.model.get('facets').length),
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
                showItems: hasItems ||
                    (!hasItems && hasSelectedFacets) ||
                    !(!hasItems && !hasSelectedFacets && hasSubcategories),
                shownavigation: false,
                isImage: isImage,
                pageTopimage: Configuration_1.Configuration.get('Musicianresourcepage.musicianpageurl')
            };
            // @class Facets.Browse.View
        }
    });
});

//# sourceMappingURL=MusicianResource.List.View.js.map
