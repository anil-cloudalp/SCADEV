

/// <amd-module name="Opportunity.Collection"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import OpportunityModel = require('./Opportunity.Model');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

// @class Opportunity.Collection @extends Backbone.Collection
const OpportunityCollection: any = Backbone.Collection.extend({
    // @property {Opportunity.Model} model
    model: OpportunityModel,

    // @property {String} url
    url: 'services/Opportunity.Service.ss?types=Opprtnty',

    // @method parse
    // @param {Opportunity.Model.List.Result} response This is the backend service response when fetching the model\
    // @return {Arra<Transaction.Model.List.Result.Record>}
    parse: function(response) {
        this.totalRecordsFound = response.totalRecordsFound;
        this.recordsPerPage = response.recordsPerPage;

        return response.records;
    },

    // @method update Method used by the ListHeader to filter the current list when seeing the Opportunity List
    // @param {Collection.Filter} options
    // @return {Void}
    update: function(options): void {
        const range = options.range || {};
        const from = range.from && Utils.stringToDate(range.from);
        const to = range.to && Utils.stringToDate(range.to);

        this.fetch({
            data: {
                filter: options.filter.value,
                sort: options.sort.value,
                order: options.order,
                from: from || null,
                to: to || null,
                page: options.page
            },
            reset: true,
            killerId: options.killerId
        });
    }
});

export = OpportunityCollection;
