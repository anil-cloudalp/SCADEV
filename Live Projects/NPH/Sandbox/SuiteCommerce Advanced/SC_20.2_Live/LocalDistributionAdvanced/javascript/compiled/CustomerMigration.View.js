/// <amd-module name="CustomerMigration.View"/>
define("CustomerMigration.View", ["require", "exports", "customer_migration.tpl", "Backbone.View"], function (require, exports, customer_migration_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: customer_migration_tpl,
        title: 'Migrate an account'
    });
    return CustomView;
});

//# sourceMappingURL=CustomerMigration.View.js.map
