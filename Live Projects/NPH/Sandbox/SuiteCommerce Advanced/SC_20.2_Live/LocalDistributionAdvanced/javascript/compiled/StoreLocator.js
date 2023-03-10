/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("StoreLocator", ["require", "exports", "underscore", "Utils", "Configuration", "ReferenceMap", "ReferenceMap.Configuration", "StoreLocator.Main.View", "StoreLocator.Details.View", "StoreLocator.List.All.View", "StoreLocator.Upgrade.View"], function (require, exports, _, Utils, Configuration_1, ReferenceMap, ReferenceConfiguration, StoreLocatorMainView, StoreLocatorDetailsView, StoreLocatorListAllView, StoreLocatorUpgradeView) {
    "use strict";
    var StoreLocator = {
        // @method mountToApp
        // @param {Object} application
        mountToApp: function mountToApp(application) {
            var configurationIcons = [
                'storeLocator.icons.stores',
                'storeLocator.icons.position',
                'storeLocator.icons.autocomplete'
            ];
            _.each(configurationIcons, function (property) {
                if (Utils.getPathFromObject(Configuration_1.Configuration, property, '')) {
                    Utils.setPathFromObject(Configuration_1.Configuration, property, Utils.getAbsoluteUrlOfNonManagedResources(Utils.getPathFromObject(Configuration_1.Configuration, property, '')));
                }
            });
            var pageType = application.getComponent('PageType');
            if (ReferenceConfiguration.isEnabled() && window.location.protocol === 'https:') {
                if (Utils.oldIE(8)) {
                    pageType.registerPageType({
                        name: 'StoreLocatorUpgrade',
                        routes: ['stores', 'stores/details/:id', 'stores/all', 'stores/all?:options'],
                        view: StoreLocatorUpgradeView,
                        defaultTemplate: {
                            name: 'store_locator_upgrade.tpl',
                            displayName: 'Browser Upgrade',
                            thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('/path/to/store_locator_upgrade_tpl.png')
                        }
                    });
                }
                else {
                    var reference_map = new ReferenceMap();
                    pageType.registerPageType({
                        name: 'StoreLocatorMain',
                        routes: ['stores'],
                        view: StoreLocatorMainView,
                        defaultTemplate: {
                            name: 'store_locator_main.tpl',
                            displayName: reference_map.configuration.title(),
                            thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/default-layout-store-locator.png')
                        }
                    });
                    pageType.registerPageType({
                        name: 'StoreLocatorListAll',
                        routes: ['stores/all', 'stores/all?:options'],
                        view: StoreLocatorListAllView,
                        defaultTemplate: {
                            name: 'store_locator_list_all.tpl',
                            displayName: ReferenceConfiguration.title(),
                            thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/default-layout-store-locator-list.png')
                        }
                    });
                    pageType.registerPageType({
                        name: 'StoreLocatorDetails',
                        routes: ['stores/details/:id'],
                        view: StoreLocatorDetailsView,
                        defaultTemplate: {
                            name: 'store_locator_details.tpl',
                            displayName: reference_map.configuration.title(),
                            thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/default-layout-store-locator-details.png')
                        }
                    });
                }
            }
        }
    };
    return StoreLocator;
});

//# sourceMappingURL=StoreLocator.js.map
