/// <amd-module name="Overview.Home.View.Ext"/>
define("Overview.Home.View.Ext", ["require", "exports", "underscore", "Overview.Home.View"], function (require, exports, _, OverviewHomeView) {
    "use strict";
    _.extend(OverviewHomeView.prototype, {
        initialize: _.wrap(OverviewHomeView.prototype.initialize, function initialize(fn) {
            fn.apply(this, _.toArray(arguments).slice(1));
            this.isSCISIntegrationEnabled = false;
        })
    });
    return OverviewHomeView;
});

//# sourceMappingURL=Overview.Home.View.Ext.js.map
