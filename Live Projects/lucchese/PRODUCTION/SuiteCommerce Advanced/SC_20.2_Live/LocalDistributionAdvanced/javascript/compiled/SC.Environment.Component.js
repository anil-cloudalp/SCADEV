/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("SC.Environment.Component", ["require", "exports", "underscore", "Utils", "Configuration", "SC.BaseComponent"], function (require, exports, _, Utils, Configuration_1, SC_BaseComponent_1) {
    "use strict";
    // Environment component. see APIdocs/JavaScript/EnvironmentComponent.js for documentation
    var SCEnvironmentComponent = {
        /** @param {ComponentContainer} container */
        mountToApp: function (container) {
            container.registerComponent(this.componentGenerator(container));
        },
        componentGenerator: function (container) {
            return SC_BaseComponent_1.SCBaseComponent.extend({
                componentName: 'Environment',
                application: container,
                getConfig: function getConfig(key) {
                    return Utils.deepCopy(Utils.getPathFromObject(Configuration_1.Configuration, key));
                },
                isPageGenerator: function isPageGenerator() {
                    return typeof nsglobal !== 'undefined';
                },
                getSiteSetting: function getSiteSettings(key) {
                    return Utils.deepCopy(Utils.getPathFromObject(SC.ENVIRONMENT.siteSettings, key));
                },
                getSession: function getSession() {
                    if (this.isPageGenerator()) {
                        return null;
                    }
                    var data = Utils.deepCopy(SC.SESSION);
                    delete data.touchpoints;
                    return data;
                },
                setTranslation: function setTranslation(locale, keys) {
                    var session = this.getSession();
                    if (session && session.language && session.language.locale === locale) {
                        _.each(keys, function (entry) {
                            SC.Translations[entry.key] = entry.value;
                        });
                    }
                }
            });
        }
    };
    return SCEnvironmentComponent;
});

//# sourceMappingURL=SC.Environment.Component.js.map
