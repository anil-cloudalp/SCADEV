/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="CashSale.Model"/>

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import TransactionCollection = require('../../../Commons/Transaction/JavaScript/Transaction.Collection');
import TransactionModel = require('../../../Commons/Transaction/JavaScript/Transaction.Model');



// @class CashSale.Model @extends Backbone.Model
const CashSaleModel: any = TransactionModel.extend({
    // @property {String} urlRoot
    urlRoot: 'services/CashSale.Service.ss',

    
    // @property {Boolean} cacheSupport enable or disable the support for cache (Backbone.CachedModel)
    cacheSupport: true,

    // @method initialize
    initialize: function(attributes): void {
        // call the initialize of the parent object, equivalent to super()
        TransactionModel.prototype.initialize.apply(this, arguments);
		
		this.on('change:adjustments', function(model, adjustments) {
            model.set('adjustments', new TransactionCollection(adjustments), { silent: true });
        });
        this.trigger('change:adjustments', this, (attributes && attributes.adjustments) || []);

    }

});

export = CashSaleModel;
