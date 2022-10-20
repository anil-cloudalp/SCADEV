/// <amd-module name="OrderHistory.Collection.Ext"/>
import * as _ from 'underscore';
import existingCollection = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.Collection');
import { Configuration  } from '../../../Advanced/SCA/JavaScript/Configuration';

_.extend(existingCollection.prototype, {
	
	parse: function(response) {
        this.totalRecordsFound = response.totalRecordsFound;
        this.recordsPerPage = response.recordsPerPage;
		this.listOptions = response.listOptions;
		
        return response.records;
    },
	update: function(options) 
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
			catid:Configuration.get("Musicianresourcepage.musicianresourceid") || ''
		};                      
		this.fetch({
			data: data_filters,
			reset: true,
			killerId: options.killerId
		});
    }
	
});

export = existingCollection;

