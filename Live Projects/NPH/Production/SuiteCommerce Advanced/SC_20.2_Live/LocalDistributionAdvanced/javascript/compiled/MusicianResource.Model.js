/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("MusicianResource.Model", ["require", "exports", "Utils", "Backbone"], function (require, exports, Utils, Backbone) {
    "use strict";
    var MusicianResourceModel = Backbone.Model.extend({
        urlRoot: Utils.getAbsoluteUrl('services/MusicianResource.Service.ss'),
        parse: function (response) {
            return response;
        },
    });
    return MusicianResourceModel;
});

//# sourceMappingURL=MusicianResource.Model.js.map
