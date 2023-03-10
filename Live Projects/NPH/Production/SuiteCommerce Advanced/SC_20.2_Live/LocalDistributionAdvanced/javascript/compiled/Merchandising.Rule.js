/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define(["require", "exports", "Singleton", "Backbone.Model", "Backbone.CachedCollection"], function (require, exports, Singleton, BackboneModel, BackboneCachedCollection) {
    "use strict";
    // @module Merchandising
    // @class Merchandising.Rule.Collection
    // Object that contains both model and collection of Merchandising Rules
    // Each MerchandisingRule.Model is a Merchandising Rule record on the backend
    var MerchandisingRule = {};
    // Standard Backbone.Model, we call extend in case
    // we want to override some methods
    MerchandisingRule.Model = BackboneModel.extend({});
    // @class MerchandisingRule.Collection Handles the merchandising rules, it is a Singleton as
    // there is only one set of the rules @extends Backbone.CachedCollection
    // @extends Backbone.CachedCollection
    MerchandisingRule.Collection = BackboneCachedCollection.extend({
        url: '/dls/services/merchandising.ss',
        // @class MerchandisingRule.Collection.Model @extends Backbone.Model
        model: MerchandisingRule.Model
    }, Singleton);
    return MerchandisingRule;
});

//# sourceMappingURL=Merchandising.Rule.js.map
