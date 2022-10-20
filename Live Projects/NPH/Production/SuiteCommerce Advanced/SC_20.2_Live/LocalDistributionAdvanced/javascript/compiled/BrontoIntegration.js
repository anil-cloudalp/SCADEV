/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("BrontoIntegration", ["require", "exports", "jQuery", "Configuration"], function (require, exports, jQuery, Configuration_1) {
    "use strict";
    return {
        // @property {String} instanceId
        instanceId: '',
        // @property {String} adapterUrl
        adapterUrl: '',
        // @method loadScript @return {Void}
        loadScript: function () {
            jQuery('body').append(jQuery('<script src="' +
                this.adapterUrl +
                '" data-bronto-integrations="' +
                this.instanceId +
                '"></script>'));
        },
        // @method mountToApp @return {Void}
        mountToApp: function (application) {
            if (SC.ENVIRONMENT.jsEnvironment === 'browser') {
                var bronto_config = Configuration_1.Configuration.bronto;
                if (bronto_config && bronto_config.accountId) {
                    this.instanceId = bronto_config.accountId;
                    this.adapterUrl = bronto_config.adapterUrl;
                    application.getLayout().once('afterAppendView', jQuery.proxy(this, 'loadScript'));
                }
            }
        }
    };
});

//# sourceMappingURL=BrontoIntegration.js.map
