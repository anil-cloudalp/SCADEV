/// <amd-module name="CustomerMigration.View"/>

import * as customer_migration_tpl from 'customer_migration.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

	template: customer_migration_tpl
,   title: 'Migrate an account'

});
export = CustomView;