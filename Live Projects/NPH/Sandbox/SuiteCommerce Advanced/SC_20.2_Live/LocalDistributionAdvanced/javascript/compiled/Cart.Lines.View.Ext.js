define("Cart.Lines.View.Ext", ["require", "exports", "underscore", "Cart.Lines.View"], function (require, exports, _, existingView) {
    "use strict";
    _.extend(existingView.prototype, {
        getContext: _.wrap(existingView.prototype.getContext, function init(fn) {
            var retObj = fn.apply(this, _.toArray(arguments).slice(1));
            retObj.linkAttributes = retObj.item.get('_url');
            return retObj;
        })
    });
    return existingView;
});

//# sourceMappingURL=Cart.Lines.View.Ext.js.map
