/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("BootMaintenance.View", ["require", "exports", "boot_maintenance.tpl", "Utils", "Backbone.View", "BootListNav.View"], function (require, exports, home_tpl, Utils, BackboneView, BootListNavView) {
    "use strict";
    // @module Home.View @extends Backbone.View
    var BootMaintenanceView = BackboneView.extend({
        template: home_tpl,
        title: Utils.translate('Boot 101 | Lucchese'),
        attributes: {
            id: 'maintenance-page'
        },
        initialize: function () {
            this.application = this.options.application;
            var self = this;
            this.application.getLayout().on('afterAppendView', function (View) {
                $('.nav-link').removeClass('active');
                $('.nav-link').each(function () {
                    var url = window.location.href;
                    if ((url).includes($(this).attr('href'))) {
                        $(this).parent().addClass('active');
                    }
                });
            });
        },
        childViews: {
            'Nav.View': function () {
                return new BootListNavView({});
            }
        },
        // @method getContext @return Home.View.Context
        getContext: function () {
            return {
                isNotCmsEdit: (window.parent.location.href.indexOf("cms") == -1) ? true : false
            };
        }
    });
    return BootMaintenanceView;
});

//# sourceMappingURL=BootMaintenance.View.js.map
