/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="NavigationHelper.Plugins.Modals"/>

import * as _ from 'underscore';
import '../../UrlHelper/JavaScript/UrlHelper';
import * as Utils from '../../Utilities/JavaScript/Utils';

import * as jQuery from '../../Core/JavaScript/jQuery';

import BackboneView = require('../../BackboneExtras/JavaScript/Backbone.View');
import Backbone = require('../../Utilities/JavaScript/backbone.custom');

// @class NavigationHelper.Plugins.Modals Contains the plugins that implement the show in modal for links behavior.
// This means a link with the attribute data-toggle="show-in-modal" will be opened in a modal. Supports both internal and external URLs.
// @extends ApplicationModule
const modalsPlugin: any = {
    // @method showInternalLinkInModal for links that has the data-toggle="show-in-modal" we will open them in a modal,
    // we do this by overriding the showContent function of the layout
    // and by disabling the overrideViewSettings of the Content.EnhancedViews package
    // Then we just navigate to that URL to call the router and execute the logic as normal
    // layout_overlay prevents the user from calling the overridden showContent by clicking another element
    // @param {jQuery.Event} e
    // @param {String} href
    // @param {jQuery} $target
    // @param {ApplicationSkeleton.Layout} layout
    // @return {Void}
    showInternalLinkInModal: function(e, href, $target, layout) {
        const current_fragment = Backbone.history.fragment || '/';
        let original_view;

        layout.isShowContentRewritten = true;
        layout.originalShowContent = layout.showContent;

        if (modalsPlugin.ContentEnhancedViews) {
            modalsPlugin.originalOverrideViewSettings =
                modalsPlugin.ContentEnhancedViews.overrideViewSettings;
        }

        const layout_overlay = jQuery('<div class="layout-overlay"></div>');
        layout.$el.append(layout_overlay);

        layout.showContent = function(view) {
            return layout
                .getCancelableEmitter()
                .emitUnsafe('beforeAppendView', view)
                .then(() => _showContent(view))
                .fail(function() {
                    layout_overlay.remove();
                    modalsPlugin.undoNavigationHelperFunctionRewrite(layout);
                });
        };

        // Here we override the showContent function
        var _showContent = function _showContent(view) {
            layout_overlay.remove();

            let promise = jQuery.Deferred();
            // If you ever try to set a view that is not the original one
            // this code will catch it an do an undo
            if (!original_view) {
                original_view = view;
            } else if (original_view !== view) {
                promise = layout.originalShowContent.apply(layout, arguments);

                original_view &&
                    original_view.$containerModal &&
                    original_view.$containerModal
                        .removeClass('fade')
                        .modal('hide')
                        .data('bs.modal', null);
                return promise;
            }

            let modalFunction;
            if (view) {
                if (_.isFunction(view.showInModal)) {
                    modalFunction = view.showInModal;
                } else if (_.isFunction(view.modalNavigation)) {
                    modalFunction = view.modalNavigation;
                }
            }

            if (modalFunction) {
                // Then we just call the show in modal of the same view that we were passed in.
                promise = modalFunction.call(view, {
                    className: $target.data('modal-class-name'),
                    silence: true
                });

                // once this model closes we undo the override of the function
                view.$containerModal.on('hide.bs.modal', function() {
                    modalsPlugin.undoNavigationHelperFunctionRewrite(layout);
                });
            } else {
                modalsPlugin.undoNavigationHelperFunctionRewrite(layout);
                Backbone.history.navigate(href, { trigger: false, replace: true });
            }

            return promise;
        };

        if (href.indexOf('?') === -1) {
            href += '?showinmodal=T';
        } else {
            href += '&showinmodal=T';
        }

        // Here we navigate to the url and we then change the url to what it was originaly set in page that opened the modal
        Backbone.history.navigate(href, { trigger: true, replace: true });
        Backbone.history.navigate(current_fragment, { trigger: false, replace: true });
    },

    // @method undoNavigationHelperFunctionRewrite Helper method to undo the override performed by showInternalLinkInModal
    // @param {ApplicationSkeleton.Layout} layout
    // @return {Void}
    undoNavigationHelperFunctionRewrite: function(layout) {
        if (layout.isShowContentRewritten) {
            layout.showContent = layout.originalShowContent;

            if (modalsPlugin.ContentEnhancedViews) {
                modalsPlugin.ContentEnhancedViews.overrideViewSettings =
                    modalsPlugin.originalOverrideViewSettings;
            }

            layout.isShowContentRewritten = false;
        }
    },

    // @method showExternalLinkInModal Opens an external page in a modal, by rendering an iframe in it
    // @param {String} href
    // @param {NavigationContext} context
    // @param {ApplicationSkeleton} application
    // @return {Void}
    showExternalLinkInModal: function(href, context, application) {
        const view = new BackboneView({
            application: application
        });

        view.template = function() {
            return `<iframe src="${href}"></iframe>`;
        };
        view.page_header = context.$target.data('page-header') || '';

        application
            .getLayout()
            .getCancelableEmitter()
            .emitUnsafe('beforeAppendView', view)
            .then(function() {
                view.showInModal({
                    className: `${context.$target.data('modal-class-name') || ''} iframe-modal`
                });
            });
    },

    // @method clickNavigation Handle standard click navigation for the cases were the target DO IS not a modal
    // @param {ApplicationSkeleton.Layout} layout General application layout
    // @param {jQuery.Event} e jQuery event
    // @param {ApplicationSkeleton} application
    // @return {jQuery.Event} e
    clickNavigation: function(layout, e, application) {
        // Grabs info from the event element
        const context = layout.generateNavigationContext(e);
        let href = layout.getUrl(context) || '';
        const target_is_blank = layout.isTargetBlank(e) || e.button === 1;
        const target_is_modal = context.target_data.toggle === 'show-in-modal';
        const is_disabled = context.$target.attr('disabled');
        const is_dropdown = context.target_data.toggle === 'dropdown';
        let is_external;

        if (is_disabled) {
            e.stopPropagation();
            return e;
        }

        if (context.target_data.originalHref && !target_is_blank) {
            href = context.target_data.originalHref;
        }

        if (href === '#' || href === '' || is_dropdown) {
            return e;
        }

        // The navigation is within the same browser window
        if (!target_is_blank) {
            // if there is a modal open
            if (layout.$containerModal) {
                layout.$containerModal
                    .removeClass('fade')
                    .modal('hide')
                    .data('bs.modal', null);
            }

            // Wants to open this link in a modal
            if (target_is_modal) {
                is_external =
                    ~href.indexOf('http:') ||
                    ~href.indexOf('https:') ||
                    ~href.indexOf('mailto:') ||
                    ~href.indexOf('tel:');

                if (is_external) {
                    modalsPlugin.showExternalLinkInModal(href, context, application);
                } else {
                    modalsPlugin.showInternalLinkInModal(e, href, context.$target, layout);
                }
            }
        }

        return e;
    },

    // @property {Boolean} ContentEnhancedViews
    ContentEnhancedViews: false,

    // @method mountToApp
    // @param {ApplicationSkeleton} application
    mountToApp: function(application) {
        const layout = application.getLayout();

        // there is a soft dependency with Content.EnhancedViews
        // we only want it to disable the function that sets the title of the page,
        // we don't want to do that pages that open in modals
        try {
            modalsPlugin.ContentEnhancedViews = Utils.requireModules('Content.EnhancedViews');
        } catch (e) {}

        // Install Modal Navigation Plugins

        layout.click.install({
            name: 'modalNavigation',
            priority: 10,
            execute: function(e) {
                return modalsPlugin.clickNavigation(layout, e, application);
            }
        });
    }
};

export = modalsPlugin;
