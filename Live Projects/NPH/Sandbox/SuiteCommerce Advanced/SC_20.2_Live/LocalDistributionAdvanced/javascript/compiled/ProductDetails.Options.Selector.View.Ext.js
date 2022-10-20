define("ProductDetails.Options.Selector.View.Ext", ["require", "exports", "underscore", "ProductDetails.Options.Selector.View"], function (require, exports, _, existingView) {
    "use strict";
    _.extend(existingView.prototype, {
        getContext: _.wrap(existingView.prototype.getContext, function init(fn) {
            var retObj = fn.apply(this, _.toArray(arguments).slice(1));
            var item = this.model.get('item');
            retObj.isGiftItem = (item.get('itemtype') == "GiftCert") || false;
            retObj.isMatrixItem = !_.isUndefined(item.get('matrixchilditems_detail')) ? true : false;
            return retObj;
        })
    });
    return existingView;
});

//# sourceMappingURL=ProductDetails.Options.Selector.View.Ext.js.map
