/// <amd-module name="MySubscriptions.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
define("MySubscriptions.View", ["require", "exports", "my_subscriptions.tpl", "Utils", "Backbone", "Backbone.View"], function (require, exports, my_subscriptions_tpl, Utils, Backbone, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: my_subscriptions_tpl,
        title: Utils.translate('My Subscriptions'),
        page_header: Utils.translate('My Subscriptions'),
        attributes: {
            'id': 'my_subscriptions',
            'class': 'MySubscriptionsView'
        },
        events: {
        //	'click #prev-mo': 'prevMo'
        },
        getSelectedMenu: function () {
            return 'my_subscriptions';
        },
        getBreadcrumbPages: function () {
            return {
                text: this.title,
                href: '/my-subscriptions'
            };
        }
        //@method initialize
        ,
        initialize: function (options) {
            this.application = options.application;
        },
        beforeShowContent: function () {
            return this.getResults({
                type: 'subscription',
            });
        },
        getResults: function (data) {
            var self = this;
            var promise = new Backbone.Model().save(data, {
                url: Utils.getAbsoluteUrl('services/Subscriptions.Service.ss')
            });
            promise.then(function (result) {
                self.collection = result;
            });
            return promise;
        }
        //@property {Object} childViews
        ,
        childViews: {},
        getContext: function () {
            return {
                exp_dates: this.collection || ''
            };
        }
    });
    return CustomView;
});

//# sourceMappingURL=MySubscriptions.View.js.map
