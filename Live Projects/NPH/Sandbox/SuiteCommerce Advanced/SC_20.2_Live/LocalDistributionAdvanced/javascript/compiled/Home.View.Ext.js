/// <amd-module name="Home.View.Ext"/>
define("Home.View.Ext", ["require", "exports", "underscore", "jQuery", "Home.View", "Item.Collection", "NewAndNoteWorthy.View", "NPHRecommends.View", "SessionStorageHandler"], function (require, exports, _, jQuery, HomeView, ItemCollection, NewAndNoteWorthyView, NPHRecommendsView, SessionStorageHandler) {
    "use strict";
    _.extend(HomeView.prototype, {
        initialize: function () {
            this.options.application.getLayout().on('beforeAppendView', function (view) {
                var viewId = view.$el.attr('id');
                if (viewId == 'home-page') {
                    SessionStorageHandler.set("musician-resource-page", "false");
                    $('.shopping-layout-breadcrumb').hide();
                    this.render();
                    this.$(document).ready(function () {
                        $('.shopping-layout-breadcrumb').hide();
                    });
                }
            });
        },
        beforeShowContent: function () {
            var self = this;
            var promise = jQuery.Deferred();
            jQuery.get('/api/items?custitem_appf_nph_recommends=true&fieldset=details', function (result) {
                self.nphRecommends = (result && result.total > 0) ? new ItemCollection(_.compact(result.items)) : [];
                jQuery.get('/api/items?custitem_appf_new_noteworthy=true&fieldset=details', function (result) {
                    self.newAndNoteWorty = (result && result.total > 0) ? new ItemCollection(_.compact(result.items)) : [];
                    promise.resolve();
                });
            });
            return promise;
        },
        childViews: {
            'NewAndNoteWorthy': function () {
                return new NewAndNoteWorthyView({
                    application: this.options.application,
                    collection: this.newAndNoteWorty
                });
            },
            'NPHRecommends': function () {
                return new NPHRecommendsView({
                    application: this.options.application,
                    collection: this.nphRecommends
                });
            }
        },
        getContext: _.wrap(HomeView.prototype.getContext, function init(fn) {
            var retObj = fn.apply(this, _.toArray(arguments).slice(1));
            retObj = _.extend(retObj, {
                isNotCmsEdit: (window.parent.location.href.indexOf("cms") == -1) ? true : false
            });
            return retObj;
        })
    });
    return HomeView;
});

//# sourceMappingURL=Home.View.Ext.js.map
