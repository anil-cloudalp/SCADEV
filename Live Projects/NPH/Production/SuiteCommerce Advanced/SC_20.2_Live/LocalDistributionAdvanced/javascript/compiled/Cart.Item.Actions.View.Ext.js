define("Cart.Item.Actions.View.Ext", ["require", "exports", "underscore", "Cart.Item.Actions.View"], function (require, exports, _, existingView) {
    "use strict";
    _.extend(existingView.prototype, {
        getContext: _.wrap(existingView.prototype.getContext, function init(fn) {
            var retObj = fn.apply(this, _.toArray(arguments).slice(1));
            retObj.editUrl = this.model.getFullLink({ location: null, fulfillmentChoice: null });
            return retObj;
        })
    });
    return existingView;
});

//# sourceMappingURL=Cart.Item.Actions.View.Ext.js.map
