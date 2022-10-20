/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("BootListNav.View", ["require", "exports", "boot_list_nav.tpl", "Backbone.View"], function (require, exports, home_tpl, BackboneView) {
    "use strict";
    // @module Home.View @extends Backbone.View
    var BootListNavView = BackboneView.extend({
        template: home_tpl,
        events: {
            'click .nav-item': 'addActive'
        },
        initialize: function () {
        },
        addActive: function (e) {
            $('.nav-item').removeClass('active');
            $(e.currentTarget).addClass('active');
        },
        // @method getContext @return Home.View.Context
        getContext: function () {
            return {
                isCollapse: $(window).width() < 992 ? true : false
            };
        }
    });
    return BootListNavView;
});

//# sourceMappingURL=BootListNav.View.js.map
