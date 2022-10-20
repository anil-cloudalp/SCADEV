/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ReorderItems.Collection"/>
import { ReorderItemsModel } from '../../../Advanced/ReorderItems/JavaScript/ReorderItems.Model';

import TransactionLineCollection = require('../../../Commons/Transaction/JavaScript/Transaction.Line.Collection');
import { Configuration  } from '../../../Advanced/SCA/JavaScript/Configuration';

const ReorderItemsCollection: any = TransactionLineCollection.extend({
    url: 'services/ReorderItems.Service.ss',

    model: ReorderItemsModel,

	initialize: function(models, options) {
        TransactionLineCollection.prototype.initialize.apply(this, arguments);
        this.customFilters = options && options.filters;
    },
    parse: function(response) {
        this.totalRecordsFound = response.totalRecordsFound;
        this.recordsPerPage = response.recordsPerPage;

        return response.records;
    },
	update: function(options,list_header) 
	{
        if(this.customFilters == "musicitems:true")
		{
            const range = options.range || {};
            const data_filters: any = {
                filter: this.customFilters,
                sort: options.sort.value,
                order: options.order,
                from: range.from,
                to: range.to,    
                page: options.page,
                search:options.search,
				catid:Configuration.get("Musicianresourcepage.musicianresourceid") || null
            };                      
            this.fetch({
                data: data_filters,
                reset: true,
                killerId: options.killerId
            });
        }
        else
		{
            const data_filters: any = {
            sort: options.sort.value,
            order_id: this.order_id,
            order: options.order,
            page: options.page
			};

			if (!this.order_id) {
				let date_string = options.filter.value.apply(list_header.view);
				date_string = date_string && date_string.split('T');

				data_filters.from = date_string[0];
				data_filters.to = date_string[1];
			}

			this.fetch({
				data: data_filters,
				reset: true,
				killerId: options.killerId
			});
        }       
    }
});

export = ReorderItemsCollection;
