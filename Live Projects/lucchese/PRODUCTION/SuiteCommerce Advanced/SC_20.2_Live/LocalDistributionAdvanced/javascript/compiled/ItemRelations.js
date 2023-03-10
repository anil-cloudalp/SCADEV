/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("ItemRelations", ["require", "exports", "ItemRelations.Related.View", "ItemRelations.Correlated.View", "Cart.Detailed.View"], function (require, exports, ItemRelationsRelatedView, ItemRelationsCorrelatedView, CartDetailedView) {
    "use strict";
    var ItemRelations = {
        // @method mountToApp
        // @param {ApplicationSkeleton} application
        // @return {Void}
        mountToApp: function (application) {
            CartDetailedView.addChildViews({
                'Correlated.Items': function wrapperFunction(options) {
                    return function () {
                        return new ItemRelationsCorrelatedView({
                            itemsIds: options.model.getItemsIds(),
                            application: application
                        });
                    };
                },
                'Related.Items': function wrapperFunction(options) {
                    return function () {
                        return new ItemRelationsRelatedView({
                            itemsIds: options.model.getItemsIds(),
                            application: application
                        });
                    };
                }
            });
        }
    };
    return ItemRelations;
});

//# sourceMappingURL=ItemRelations.js.map
