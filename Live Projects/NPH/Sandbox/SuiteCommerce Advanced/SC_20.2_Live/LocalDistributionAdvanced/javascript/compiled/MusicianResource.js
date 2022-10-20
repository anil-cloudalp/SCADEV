/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("MusicianResource", ["require", "exports", "MusicianResource.View", "MusicianResource.List.View"], function (require, exports, MusicianResourceView, MusicianResourceListView) {
    "use strict";
    return {
        mountToApp: function (application) {
            var pageType = application.getComponent('PageType');
            pageType.registerPageType({
                name: 'musicianResource',
                routes: ['musicians-resource'],
                view: MusicianResourceView
            });
            pageType.registerPageType({
                name: 'musicianResource',
                routes: ['musiciansresource'],
                view: MusicianResourceListView
            });
        }
    };
});

//# sourceMappingURL=MusicianResource.js.map
