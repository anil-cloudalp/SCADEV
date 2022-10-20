/// <amd-module name="SubscriptionsExt"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
define("SubscriptionsExt", ["require", "exports", "Utils", "MyAccountMenu", "DailyMeditations.View", "WelsConnection.View", "BswSubscription.View", "MySubscriptions.View", "EficSubscription.View"], function (require, exports, Utils, MyAccountMenu_1, DailyMeditationsView, WelsConnectionView, BswSubscriptionView, MySubscriptionsView, EficSubscriptionView) {
    "use strict";
    return {
        mountToApp: function (application) {
            var pageType = application.getComponent('PageType');
            pageType.registerPageType({
                'name': 'my_subscriptions',
                'routes': ['my-subscriptions'],
                'view': MySubscriptionsView
            });
            pageType.registerPageType({
                'name': 'daily_meditations',
                'routes': ['daily-meditations'],
                'view': DailyMeditationsView
            });
            pageType.registerPageType({
                'name': 'efic_subscription',
                'routes': ['digital-forward-in-christ'],
                'view': EficSubscriptionView
            });
            pageType.registerPageType({
                'name': 'wels_connection',
                'routes': ['wels-connection-detail'],
                'view': WelsConnectionView
            });
            pageType.registerPageType({
                'name': 'wels_connection',
                'routes': ['kids-connection'],
                'view': WelsConnectionView
            });
            pageType.registerPageType({
                'name': 'bsw_subscription',
                'routes': ['bsw-subscription'],
                'view': BswSubscriptionView
            });
            var myAccountMenu = MyAccountMenu_1.MyAccountMenu.getInstance();
            myAccountMenu.addEntry({
                id: 'subscriptions',
                name: Utils.translate('My Subscriptions'),
                index: 2
            });
            myAccountMenu.addSubEntry({
                entryId: 'subscriptions',
                id: 'my_subscriptions',
                name: Utils.translate('Subscriptions'),
                url: 'my-subscriptions',
                index: 0
            });
        }
    };
});

//# sourceMappingURL=SubscriptionsExt.js.map
