define("OrderHistory.Collection.Ext", ["require", "exports", "underscore", "OrderHistory.Collection", "Configuration"], function (require, exports, _, existingCollection, Configuration_1) {
    "use strict";
    _.extend(existingCollection.prototype, {
        parse: function (response) {
            this.totalRecordsFound = response.totalRecordsFound;
            this.recordsPerPage = response.recordsPerPage;
            this.listOptions = response.listOptions;
            return response.records;
        },
        update: function (options) {
            var range = options.range || {};
            var data_filters = {
                filter: this.customFilters,
                sort: options.sort.value,
                order: options.order,
                from: range.from,
                to: range.to,
                page: options.page,
                search: options.search,
                catid: Configuration_1.Configuration.get("Musicianresourcepage.musicianresourceid") || ''
            };
            this.fetch({
                data: data_filters,
                reset: true,
                killerId: options.killerId
            });
        }
    });
    return existingCollection;
});

//# sourceMappingURL=OrderHistory.Collection.Ext.js.map
