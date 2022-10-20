/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Backbone.View", ["require", "exports", "underscore", "Utils", "jQuery", "Environment", "SC.CancelableEvents", "Backbone", "PluginContainer", "View"], function (require, exports, _, Utils, jQuery, Environment_1, SC_CancelableEvents_1, Backbone, PluginContainer) {
    "use strict";
    /*
    @module BackboneExtras
    #Backbone.View
    Extends native Backbone.View with a bunch of required methods most of this
     were defined as no-ops in ApplicationSkeleton.js
    @module Backbone @class Backbone.View
    It overwrites the Backbone.View constructor with the one necessary to load
     all the views as composite views through
    the beforeInitialize and afterInitialize plugins. This code needs to be
     here so that all the views can load it first.
    */
    // Static methods
    var class_properties = {
        beforeInitialize: new PluginContainer(),
        afterInitialize: new PluginContainer(),
        // @method _isEventSelectorValid Validates is the passed in selector
        // follows the format/standard required by SC Views
        // format: '<event_name> [data=action="<event_handlerName>"]'
        // @private
        // @param {String} event_selector Selector to be validates
        // @return {Boolean}
        _isEventSelectorValid: function _isEventSelectorValid(event_selector) {
            var event_name = [
                'blur',
                'change',
                'click',
                'contextmenu',
                'dblclick',
                'error',
                'focus',
                'focusin',
                'focusout',
                'keydown',
                'keypress',
                'keyup',
                'load',
                'mousedown',
                'mousemove',
                'mouseout',
                'mouseover',
                'mouseup',
                'resize',
                'scroll',
                'select',
                'submit',
                'touchend',
                'touchmove',
                'touchstart',
                'unload'
            ];
            var event_selector_structure_re = /([a-zA-Z]+) \[data\-action="([^"]+)"\]/;
            var matches = event_selector_structure_re.exec(event_selector);
            return matches && _.indexOf(event_name, matches[1]) >= 0 && !!matches[2].length;
        },
        // @method addExtraEventHandler Adds an extra event handler to the current view
        // @param {String} event_selector Event specification to be added into the list
        // of event handled by the current view
        // @param {Function} callback Function that will be called when the specified event is triggered
        // @return {Void}
        // @static
        // @public
        addExtraEventHandler: function addExtraEventHandler(event_selector, callback) {
            var error = {};
            this.prototype.events = this.prototype.events || {};
            if (!this._isEventSelectorValid(event_selector)) {
                error = new Error('The specified event_selector parameter does not respect the required format.');
                error.name = 'INVALID_PARAM';
                throw error;
            }
            if (this.prototype.events[event_selector]) {
                error = new Error('Duplicated event selector. Please specify a different one.');
                error.name = 'DUPLICATED_EVENT_SELECTOR';
                throw error;
            }
            this.prototype.events[event_selector] = _.bind(callback, null);
            this.prototype.events[event_selector].custom = true;
        },
        // @method removeExtraEventHandler Removes an extra event handler of the current view
        // @param {String} event_selector Event specification to be added into the list of event
        // handled by the current view
        // @return {Void}
        // @static
        // @public
        removeExtraEventHandler: function removeExtraEventHandler(event_selector) {
            var error = {};
            this.prototype.events = this.prototype.events || {};
            if (!this.prototype.events[event_selector] ||
                !this.prototype.events[event_selector].custom) {
                error = new Error('The specified event selector does not exists or is not custom.');
                error.name = 'INVALID_PARAM';
                throw error;
            }
            delete this.prototype.events[event_selector];
        }
    };
    var properties = _.extend({
        constructor: function (options) {
            this.cid = _.uniqueId('view');
            this._configure(options || {});
            this._ensureElement();
            this.constructor.beforeInitialize.executeAllWithContext(this, arguments);
            this.initialize.apply(this, arguments);
            this.constructor.afterInitialize.executeAllWithContext(this, arguments);
            this.delegateEvents();
        },
        // @property {Array<String>} contextDataRequest The list of
        // contexts that the view is requesting
        contextDataRequest: [],
        // @property {String} errorMessage Default error message,
        // usally overwritten by server response on error
        errorMessage: 'Sorry, the information you provided is either incomplete or needs to be corrected.',
        // @method showContent @param {Boolean} dont_scroll will eventually
        // be changed to an object literal
        // @return {jQuery.Deferred}
        showContent: function (dont_scroll) {
            var application = this.options.application || this.options.container;
            return application && application.getLayout().showContent(this, dont_scroll);
        },
        // @method showInModal @param {Object} options @return {jQuery.Deferred}
        showInModal: function (options) {
            // NavigationHelper.Plugins.Modals triggering the beforeShowContent event twice
            // for the ProductDetails.Quick.View
            if (options && options.silence) {
                delete options.silence;
                return (this.options.application &&
                    this.options.application.getLayout()._showInModal(this, options));
            }
            return (this.options.application &&
                this.options.application.getLayout().showInModal(this, options));
        },
        // @method showInPush @param {Object} options @return {jQuery.Deferred}
        showInPush: function (options) {
            return (this.options.application &&
                this.options.application.getLayout().showInPush(this, options));
        },
        // @method getMetaDescription Get view's SEO attributes @return {String}
        getMetaDescription: function () {
            return this.metaDescription;
        },
        setMetaDescription: function (metaDescription) {
            this.metaDescription = metaDescription;
        },
        // @method getMetaKeywords @return {String}
        getMetaKeywords: function () {
            return this.metaKeywords;
        },
        setMetaKeywords: function (metaKeywords) {
            this.metaKeywords = metaKeywords;
        },
        // @method getAddToHead @return {String}
        getAddToHead: function () {
            return this.addToHead;
        },
        setAddToHead: function (addToHead) {
            this.addToHead = addToHead;
        },
        // @method getMetaTags @return {Array<HTMLElement>}
        getMetaTags: function () {
            return jQuery('<head/>')
                .html(this.metaTags || '')
                .children('meta');
        },
        setMetaTags: function (metaTags) {
            this.metaTags = metaTags;
        },
        // @method getTitle @returns {String} the document's title to show when this view is active.
        getTitle: function () {
            // @property {String} title this view title. The default
            // behavior is to set the document's title using view.title
            // when calling view.showContent()
            return this.title;
        },
        setTitle: function (title) {
            this.title = title;
        },
        // @method getPageDescription returns a text describing the
        // page this view is implemented in the case is rendered as a
        // main view with Layout.showContent()
        getPageDescription: function () {
            return this.attributes ? this.attributes.id || this.attributes.class || '' : '';
        },
        // @method getCanonical @return {String}
        getCanonical: function () {
            var history = Backbone.history;
            var canonical = window.location.protocol + "//" + window.location.hostname + "/" + history.fragment;
            var index_of_query = canonical.indexOf('?');
            // !~ means: indexOf == -1
            return !~index_of_query ? canonical : canonical.substring(0, index_of_query);
        },
        // @method getRelPrev For paginated pages, subclasses should
        // implement this operations to return the url of the previous and next pages
        getRelPrev: jQuery.noop,
        // @method getRelNext For paginated pages, subclasses should
        // implement this operations to return the url of the previous and next pages
        getRelNext: jQuery.noop,
        // @method _destroy "private", shouldn't be overwritten if a
        // custom destroy method is required override the destroy method.
        // This method should still be called
        // @param {Boolean} softDestroy decides if the view should be empty instead of removed
        _destroy: function () { },
        // @method destroy
        destroy: function (softDestroy) {
            this._destroy(softDestroy);
        },
        // @method showConfirmationMessage @param {String} message
        showConfirmationMessage: function (message, fixed) {
            var Application = Environment_1.Environment.getApplication();
            var layout = Application.getLayout();
            var confirmation_message = this.$('[data-confirm-message]');
            layout.showMessage(confirmation_message, message, 'success', true);
            if (!fixed) {
                setTimeout(function () {
                    confirmation_message.fadeOut(3000);
                }, 5000);
            }
        },
        // @method showWarningMessage @param {String} message
        showWarningMessage: function (message) {
            var Application = Environment_1.Environment.getApplication();
            var layout = Application.getLayout();
            layout.showMessage(this.$('[data-confirm-message]'), message, 'warning', true);
        },
        // @method disableElementsOnPromise Disables and re-enables a given
        // set of elements based on a promise
        // @param {jQuery.Deferred} promise @param {String} selector
        disableElementsOnPromise: function (promise, selector) {
            var $target = this.$(selector);
            console.warn('Use of deprecated method View.disableElementsOnPromise');
            if ($target.length === 0) {
                return;
            }
            $target.attr('disabled', true);
            promise.always(function () {
                $target.attr('disabled', false);
            });
        },
        getContext: function () {
            return {};
        },
        // @method validateContextDataRequest Validate if the context that
        // the view recieves is enough for it to work
        // @param {Object} context_data An object with the contexts found
        // @return {Boolean}
        validateContextDataRequest: function (context_data) {
            return _.keys(context_data).length === this.contextDataRequest.length;
        },
        // @method getContextDataRequest Returns a copy of the 'contextDataRequest' property
        // @return {Array<String>}
        getContextDataRequest: function () {
            return this.contextDataRequest.slice();
        },
        hideError: function () {
            var Application = Environment_1.Environment.getApplication();
            Application.getLayout().hideError();
        },
        showError: function (message, type, closable, disableElements) {
            this.hideError();
            // Finds or create the placeholder for the error message
            var placeholder = this.$('[data-type="alert-placeholder"]');
            if (!placeholder.length) {
                placeholder = jQuery('<div/>', { 'data-type': 'alert-placeholder' });
                this.$el.prepend(placeholder);
            }
            var Application = Environment_1.Environment.getApplication();
            var layout = Application.getLayout();
            layout.showMessage(placeholder, message, type || 'error', !_.isUndefined(closable) ? !!closable : false, true);
            // Re Enables all posible disableded buttons of the view
            if (!disableElements) {
                this.$(':disabled').attr('disabled', false);
            }
            // If the backToTop module is loaded, we scroll to the top
            // of the view to show the error.
            if (this.application) {
                _.result(this.application.getLayout(), 'backToTop');
            }
        },
        // @method showErrorInModal @param  {String} message
        showErrorInModal: function (message) {
            var view = new Backbone.View({ application: this.application });
            view.setTitle(Utils.translate('Error'));
            view.render = function () {
                this.$el.append("<p class=\"error-message\">" + message + "</p>");
            };
            view.showInModal();
        }
    }, SC_CancelableEvents_1.SCCancelableEvents);
    Backbone.View = Backbone.View.extend(properties, class_properties);
    var BackboneView = Backbone.View;
    return BackboneView;
});

//# sourceMappingURL=Backbone.View.js.map
