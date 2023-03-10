/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="SiteSearch.View"/>

import * as _ from 'underscore';
import * as site_search_tpl from 'site_search.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import ItemsSearcherView = require('../../../Advanced/ItemsSearcher/JavaScript/ItemsSearcher.View');
import Session = require('../../../Commons/Session/JavaScript/Session');

// @class SiteSearch.View @extends Backbone.View
export = BackboneView.extend({
    // @property {Function} template
    template: site_search_tpl,

    // @property {Object} events
    events: {
        'submit [data-action="search"]': 'searchEventHandler',
        'click [data-type="search-reset"]': 'resetHandle'
    },

    // @method initialize
    // @return {Void}
    initialize: function() {
        this.itemsSearcherComponent = new ItemsSearcherView({
            minLength: Configuration.get('typeahead.minLength', 3),
            maxLength: Configuration.get('searchPrefs.maxLength', 0),
            limit: Configuration.get('typeahead.maxResults', 10),
            sort: Configuration.get('typeahead.sort', 'relevance:desc'),
            highlight: Configuration.get('typeahead.highlight', true)
        });

        this.itemsSearcherComponent.on('itemSelected', this.onItemSelected, this);
        this.itemsSearcherComponent.on('keyUp', this.showReset, this);
        this.itemsSearcherComponent.on('keyDown', this.cleanSearchOnEnter, this);

        this.application = this.options.application;
        // Listening the magnifying glass interactions
        this.application.getLayout().on('toggleItemSearcher', this.toggleItemSearcher, this);
        //this.application.getLayout().on('hideItemSearcher', this.hideItemSearcher, this);
    },

    toggleItemSearcher: function() {
        const element = this.$('[data-type="site-search"]');
        element.toggle();
        if (element.css('display') !== 'none') {
            this.itemsSearcherComponent.cleanSearch(true);
            this.itemsSearcherComponent.setFocus();
        }
    },

    hideItemSearcher: function() {
        this.$('[data-type="site-search"]').hide();
    },

    // @method showReset Handle when to show or hide the reset button
    // @param {ItemsSearcher.View.KeyDown.Properties} event_properties
    // @return {Void}
    showReset: function(event_properties) {
        if (event_properties.currentQuery) {
            this.$('[data-type="search-reset"]').show();
        } else {
            this.$('[data-type="search-reset"]').hide();
        }
    },

    // @method cleanSearchOnEnter Cleans the current search status
    // @param {ItemsSearcher.View.KeyDown.Properties} event_properties
    // @return {Void}
    cleanSearchOnEnter: function(event_properties) {
        if (event_properties.eventObject.keyCode === 27) {
            this.$('[data-type="search-reset"]').hide();
            this.itemsSearcherComponent.cleanSearch();
        }
    },

    // @method resetHandle Handle the reset action by hiding it and cleaning the current search status
    // @return {Void}
    resetHandle: function() {
        this.$('[data-type="search-reset"]').hide();
        this.itemsSearcherComponent.cleanSearch();
    },

    // @method showSiteSearch Auto-show the site search form
    showSiteSearch: function(dontFocus) {
        this.$('[data-type="search-reset"]').hide();
        this.itemsSearcherComponent.cleanSearch(true);

        if (!dontFocus) {
            this.itemsSearcherComponent.setFocus();
        }
    },

    // @method searchEventHandler Call on submit of the Search form
    // @param {jQueryElement} e
    // @return {Void}
    searchEventHandler: function(e) {
        e.preventDefault();

        const search_term = this.itemsSearcherComponent.getCurrentQuery();

        if (search_term.length < 1) {
            return;
        }

        this.itemsSearcherComponent.cleanSearch();

        this.executeSearch(search_term);
    },

    // @method search This method handle the navigation to the search result page. This happens when the user press enter or click the 'Go' button
    // @param {String} keywords
    // @return {Void}
    executeSearch: function(keywords) {
        if (keywords) {
        const self = this;
        const plp_component = this.application && this.application.getComponent('PLP');

        if (!plp_component) {
            self._executeSearch(keywords);
        } else {
            plp_component.setSearchText({ searchText: keywords }).fail(function(result) {
                self._executeSearch(keywords);
            });
        }
        }
    },

    _executeSearch: function(keywords) {
        const search_url = Utils.getPathFromObject(Configuration, 'defaultSearchUrl');
        const delimiters = Utils.getPathFromObject(Configuration, 'facetDelimiters');
        const keywordsDelimited = delimiters
            ? delimiters.betweenFacetsAndOptions + 'keywords' + delimiters.betweenOptionNameAndValue
            : '?keywords=';

        // If we are not in Shopping we have to redirect to it
        if (Utils.getPathFromObject(Configuration, 'currentTouchpoint') !== 'home') {
            // we called this using fragment instead of # because bridged domain
            window.location.href = Utils.addParamsToUrl(Session.get('touchpoints.home'), {
                fragment: search_url + keywordsDelimited + keywords
            });
        }
        // Else we stay in the same app
        else {
            // We navigate to the default search url passing the keywords
            Backbone.history.navigate(
                search_url + keywordsDelimited + keywords + this.getCurrentSearchOptions(),
                { trigger: true }
            );
        }
    },

    // @method onItemSelected Handle the selection of an item of the type-ahead result
    // @param {ItemsSearcher.View.itemSelected.Properties} result
    // @return {Void}
    onItemSelected: function(result) {
        const item = result.selectedItem;
        const { collection } = result;
        const query = result.currentQuery;

        this.$('[data-type="search-reset"]').hide();
        this.itemsSearcherComponent.cleanSearch(true);

        if (item) {
            const path = item.get('_url');

            if (Configuration.get('currentTouchpoint', '') !== 'home') {
                // we called this using fragment instead of # because bridged domain
                window.location.href = Utils.addParamsToUrl(Session.get('touchpoints.home'), {
                    fragment: path
                });
            } else {
                Backbone.history.navigate(path, { trigger: true });
            }
        } else {
            if (!collection.length && result.isResultCompleted) {
                return false;
            }
            this.executeSearch(query);
        }
    },

    // @method getCurrentSearchOptions Returns current search options formatted as query params.
    // @return {String}
    getCurrentSearchOptions: function() {
        const newOptions = [];
        const currentOptions = Utils.parseUrlOptions(window.location.href);

        _.each(currentOptions, function(value, key: any) {
            const lowerCaseKey = key.toLowerCase();

            if (lowerCaseKey === 'order' || lowerCaseKey === 'show' || lowerCaseKey === 'display') {
                newOptions.push(lowerCaseKey + '=' + value);
            }
        });

        let newOptionsStr = newOptions.join('&');

        if (newOptionsStr.length > 0) {
            newOptionsStr = '&' + newOptionsStr;
        }

        return newOptionsStr;
    },

    // @property {Object} childViews
    childViews: {
        ItemsSeacher: function() {
            return this.itemsSearcherComponent;
        }
    },

    // @method getContext
    // @return {SiteSearch.View.Context}
    getContext: function() {
        // @class SiteSearch.View.Context
        return {};
        // @class SiteSearch.View
    },

    // @method destroy Override default implementation to clean up all attached events of the initialize
    // @return {Void}
    destroy: function() {
        BackboneView.prototype.destroy.apply(this, arguments);

        this.itemsSearcherComponent.off('itemSelected');
        this.itemsSearcherComponent.off('keyUp');
        this.itemsSearcherComponent.off('keyDown');
    }
});
