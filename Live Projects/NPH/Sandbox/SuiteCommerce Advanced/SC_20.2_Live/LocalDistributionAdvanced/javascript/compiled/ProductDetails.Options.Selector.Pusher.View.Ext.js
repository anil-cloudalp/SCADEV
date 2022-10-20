define("ProductDetails.Options.Selector.Pusher.View.Ext", ["require", "exports", "underscore", "ProductDetails.Options.Selector.Pusher.View"], function (require, exports, _, existingView) {
    "use strict";
    _.extend(existingView.prototype, {
        getContext: _.wrap(existingView.prototype.getContext, function init(fn) {
            var retObj = fn.apply(this, _.toArray(arguments).slice(1));
            var item = this.model.get('item');
            retObj.selectedOptions = '';
            return retObj;
        })
    });
    return existingView;
});

//# sourceMappingURL=ProductDetails.Options.Selector.Pusher.View.Ext.js.map
