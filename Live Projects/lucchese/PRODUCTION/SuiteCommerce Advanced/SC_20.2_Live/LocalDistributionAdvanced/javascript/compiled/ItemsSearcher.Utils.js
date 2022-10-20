/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("ItemsSearcher.Utils", ["require", "exports", "underscore", "Utils", "Configuration"], function (require, exports, _, Utils, Configuration_1) {
    "use strict";
    return {
        formatKeywords: function (keywords) {
            var keywordFormatter = Utils.getPathFromObject(Configuration_1.Configuration, 'searchPrefs.keywordsFormatter');
            if (keywordFormatter && _.isFunction(keywordFormatter)) {
                keywords = keywordFormatter(keywords);
                var maxLength = Utils.getPathFromObject(Configuration_1.Configuration, 'searchPrefs.maxLength', 99999);
                if (keywords.length > maxLength) {
                    keywords = keywords.substring(0, maxLength);
                }
            }
            return keywords;
        }
    };
});

//# sourceMappingURL=ItemsSearcher.Utils.js.map
