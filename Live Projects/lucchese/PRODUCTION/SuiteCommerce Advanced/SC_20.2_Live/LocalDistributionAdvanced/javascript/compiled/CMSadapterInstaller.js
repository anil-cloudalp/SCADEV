/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("CMSadapterInstaller", ["require", "exports", "Configuration", "CMSadapter.v2", "CMSadapter.v3"], function (require, exports, Configuration_1, CMSadapter2, CMSadapter_v3_1) {
    "use strict";
    return {
        mountToApp: function (application) {
            var cms_adapter_version = Configuration_1.Configuration.get('cms.adapterVersion');
            var cms_adapter = null;
            switch (cms_adapter_version) {
                case '2':
                    cms_adapter = CMSadapter2;
                    break;
                case '3':
                    cms_adapter = new CMSadapter_v3_1.CMSadapter3();
                    break;
            }
            if (cms_adapter) {
                return cms_adapter.mountAdapter(application);
            }
        }
    };
});

//# sourceMappingURL=CMSadapterInstaller.js.map
