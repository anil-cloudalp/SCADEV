/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("jQuery.Loader", ["require", "exports", "underscore", "Utils", "jQuery"], function (require, exports, _, Utils, jQuery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Variable used to track the mouse position
    var mouse_position = {
        top: 0,
        left: 0
    };
    jQuery(document).ready(function () {
        var $body = jQuery(document.body);
        var $loading_icon = jQuery('#loadingIndicator');
        if (!$loading_icon.length && !(SC && SC.ENVIRONMENT && SC.ENVIRONMENT.isTouchEnabled)) {
            // if the icon wasn't there, lets add it and make a reference in the global scope
            $loading_icon = jQuery('<img/>', {
                id: 'loadingIndicator',
                class: 'global-loading-indicator',
                src: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/ajax-loader.gif'),
                css: {
                    zIndex: 9999,
                    position: 'absolute'
                }
            }).hide();
            if (!_.result(SC, 'isPageGenerator')) {
                $loading_icon.appendTo($body);
            }
        }
        SC.$loadingIndicator = $loading_icon;
        // loading icon sizes, used for positioning math
        var icon_height = 16;
        var icon_width = 16;
        $body.on({
            // On mouse move, we update the icon's position, even if its not shown
            mousemove: _.throttle(function (e) {
                mouse_position = {
                    top: Math.min($body.innerHeight() - icon_height, e.pageY + icon_width),
                    left: Math.min($body.innerWidth() - icon_width, e.pageX + icon_height)
                };
                $loading_icon.filter(':visible').css(mouse_position);
            }, 50),
            // when the body resizes, we move the icon to the bottom of the page
            // so we don't get some empty white space at the end of the body
            resize: _.throttle(function () {
                var icon_offset = $loading_icon.offset();
                if (!icon_offset) {
                    return;
                }
                mouse_position = {
                    top: Math.min($body.innerHeight() - icon_height, icon_offset.top),
                    left: Math.min($body.innerWidth() - icon_width, icon_offset.left)
                };
                $loading_icon.filter(':visible').css(mouse_position);
            }, 50)
        });
    });
    SC.loadingIndicatorShow = function () {
        SC.$loadingIndicator && SC.$loadingIndicator.css(mouse_position).show();
    };
    SC.loadingIndicatorHide = function () {
        SC.$loadingIndicator && SC.$loadingIndicator.hide();
    };
    // This registers an event listener to any ajax call
    var $document = jQuery(document)
        // http://api.jquery.com/ajaxStart/
        .ajaxStart(SC.loadingIndicatorShow)
        // http://api.jquery.com/ajaxStop/
        .ajaxStop(SC.loadingIndicatorHide);
    // fix to solve APM issue (timebrowser timing): https://confluence.corp.netsuite.com/display/SCRUMPSGSVCS/RUM+API+Issues+and+Enhancements
    if (_.result(SC.ENVIRONMENT, 'SENSORS_ENABLED')) {
        $document.ajaxStop(function () {
            if (typeof window.NLRUM !== 'undefined' &&
                typeof window.NLRUM.mark !== 'undefined') {
                window.NLRUM.mark('done');
            }
        });
    }
});

//# sourceMappingURL=jQuery.Loader.js.map
