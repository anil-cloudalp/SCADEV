/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("PageType", ["require", "exports", "PageType.Component"], function (require, exports, PageTypeComponent) {
    "use strict";
    return {
        mountToApp: function (application) {
            return PageTypeComponent(application);
        }
    };
});

//# sourceMappingURL=PageType.js.map
