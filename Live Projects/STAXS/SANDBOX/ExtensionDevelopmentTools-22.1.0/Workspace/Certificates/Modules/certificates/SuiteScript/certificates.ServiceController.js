define("STAXS.Certificates.certificates.ServiceController", ["ServiceController","Application","Configuration"], function(
  ServiceController,
  Application,
  Configuration
) {
  "use strict";

  return ServiceController.extend({
    name: "STAXS.Certificates.certificates.ServiceController",

    options: {
      common: {}
    },

    mapListResult: function (result) {
      return result;
    },


    get: function get() {
      const self = this;
      var isfromCertificate = this.request.getParameter('isFromHistoricalCertificates');
     
        if(isfromCertificate == 'true'){

          var search = nlapiLoadSearch('inventorynumberitem', Configuration.get('certificates.savedsearchId'));
         var filters = search.getFilters();
          var newFils = [];
          newFils=newFils.concat(filters);
          var columns = search.getColumns();

       if (this.request.getParameter('selectedStaxs_ext_filter')) {
 
                var extLotNumberFilter = new nlobjSearchFilter('custitemnumber_staxs_text_external_lotnbr',null,'contains', this.request.getParameter('selectedStaxs_ext_filter'));
				newFils.push(extLotNumberFilter);
       }
      if (this.request.getParameter('selectedStaxs_lot_filter')) {

             var lotNumberFilter = new nlobjSearchFilter('inventorynumber',null,'contains', this.request.getParameter('selectedStaxs_lot_filter'));
				newFils.push(lotNumberFilter);
      }
 	if (!_.isEmpty(this.request.getParameter('SelectedItem'))) {

      var itemFilter = new nlobjSearchFilter('formulatext',null,'contains', this.request.getParameter('SelectedItem'));
      itemFilter.setFormula('{inventorynumber.item}')
		newFils.push(itemFilter);
      } 

          self.search_results = Application.getPaginatedSearchResults({
                      record_type:'inventorynumberitem',
                      filters: newFils,
                      columns: columns,
                      page: self.request.getParameter('page') || 1,
                      results_per_page: self.data.results_per_page || 20
                  });
                  var fileIDArr = [];
                  var fileURLObj = {};
          
                  if (self.search_results != null && self.search_results.records.length >= 1) {
                    for (var i=0; i < self.search_results.records.length; i++){
                      var cert = self.search_results.records[i].getValue('custitemnumber_staxs_doc_certificate');
                      if(cert)
                    fileIDArr.push(cert);
                    }
                  }
         
                  if (fileIDArr.length > 0)
                  {
                    var fils = [];
                    fils.push(new nlobjSearchFilter('internalid', null, 'anyof', fileIDArr));
                    var cols = [];
                    cols.push(new nlobjSearchColumn('url'));
                    var fileSrch = nlapiSearchRecord('file', null, fils, cols);
                    if (fileSrch != null && fileSrch != '')
                    {
                      for (var f = 0; f < fileSrch.length; f++)
                      {
                          var url = fileSrch[f].getValue('url');
                          var fileid = fileSrch[f].getId();
                          fileURLObj[fileid] = url;
                        }
                      }
                  }
          
          //self.search_results = srchResults;
                  var records = _.map(
                    self.search_results.records || [],
                        function(record) {
                          const result = {
                                  itemNumber: record.getText('item','inventorynumber'),
                                  staxs_lot_number: record.getText('inventorynumber'),
                                  external_lot_number: record.getValue('custitemnumber_staxs_text_external_lotnbr'),
                                  Certificate_location: fileURLObj[record.getValue('custitemnumber_staxs_doc_certificate')] || ''
                                };
                                return self.mapListResult(result, record);
                              }
                    );
        } else{
          
    	
          
           this.filters = {
                    entity: ['custrecord_ca_customer', 'anyof', '23']
           };
          
            this.data.from = this.request.getParameter('from');
            this.data.to = this.request.getParameter('to');

              if (this.data.from && this.data.to) {
                this.filters.date_operator = 'and';

                this.data.from = this.data.from.split('-');
                this.data.to = this.data.to.split('-');

                this.filters.date = [
                    'custrecord_ca_so_date',
                    'within',
                    new Date(this.data.from[0], this.data.from[1] - 1, this.data.from[2]),
                    new Date(this.data.to[0], this.data.to[1] - 1, this.data.to[2])
                ];
            } else if (this.data.from) {
                this.filters.date_from_operator = 'and';

                this.data.from = this.data.from.split('-');

                this.filters.date_from = [
                    'custrecord_ca_so_date',
                    'onOrAfter',
                    new Date(this.data.from[0], this.data.from[1] - 1, this.data.from[2])
                ];
            } else if (this.data.to) {
                this.filters.date_to_operator = 'and';

                this.data.to = this.data.to.split('-');

                this.filters.date_to = [
                    'custrecord_ca_so_date',
                    'onOrBefore',
                    new Date(this.data.to[0], this.data.to[1] - 1, this.data.to[2])
                ];
            }

      if (this.request.getParameter('selectedSalesOrder')) {
                self.filters.selectedsalesorder_operator = 'and';
                self.filters.selectedsalesorder = ['custrecord_ca_so_number', 'contains', this.request.getParameter('selectedSalesOrder')];
      }
       if (this.request.getParameter('selectedPackingNote')) {
                self.filters.selectedpackingnote_operator = 'and';
                self.filters.selectedpackingnote = ['custrecord_ca_packing_note', 'contains', this.request.getParameter('selectedPackingNote')];
       }
       if (this.request.getParameter('selectedStaxs_ext_filter')) {
                self.filters.selectedStaxsextfilter_operator = 'and';
                self.filters.selectedStaxsextfilter = ['custrecord_ca_external_lot_number', 'contains', this.request.getParameter('selectedStaxs_ext_filter')];
       }
      if (this.request.getParameter('selectedStaxs_lot_filter')) {
              self.filters.selectedStaxslotfilter_operator = 'and';
              self.filters.selectedStaxslotfilter = ['custrecord_ca_staxs_lot_number', 'contains', this.request.getParameter('selectedStaxs_lot_filter')];
      }
 	if (!_.isEmpty(this.request.getParameter('SelectedItem'))) {

         self.filters.selectedStaxslotfilter_operator = 'and';
              self.filters.selectedStaxslotfilter = ['custrecord_ca_item','contains', this.request.getParameter('SelectedItem')];
      } 
                self.columns = {
                    custrecord_ca_so_number   : new nlobjSearchColumn('custrecord_ca_so_number'),
                    custrecord_ca_so_date:  new nlobjSearchColumn('custrecord_ca_so_date'),
                    custrecord_ca_item: new nlobjSearchColumn('custrecord_ca_item'),
                    custrecord_ca_customer:  new nlobjSearchColumn('custrecord_ca_customer'),
                    custrecord_ca_staxs_lot_number: new nlobjSearchColumn('custrecord_ca_staxs_lot_number'),
                    custrecord_ca_external_lot_number: new nlobjSearchColumn('custrecord_ca_external_lot_number'),
                    custrecord_ca_packing_note: new nlobjSearchColumn('custrecord_ca_packing_note'),
                    custrecord_ca_certificate_location: new nlobjSearchColumn('custrecord_ca_certificate_location')
               };
      
                  self.search_results = Application.getPaginatedSearchResults({
                      record_type:'customrecord_ca_historical_certificates',
                      filters: _.values(self.filters),
                      columns: _.values(self.columns),
                      page: self.request.getParameter('page') || 1,
                      results_per_page: self.data.results_per_page || 20
                  });
           
                  var fileIDArr = [];
                  var fileURLObj = {};
          		if(self.search_results.records){
                  if (self.search_results != null && self.search_results.records.length >= 1) {
                    for (var i=0; i < self.search_results.records.length; i++){
                      var certFileID = self.search_results.records[i].getValue('custrecord_ca_certificate_location');
                        if(certFileID)
                      fileIDArr.push(certFileID);
                    }
                  }
                } 
          
                  if (fileIDArr.length > 0)
                  {
                    var fils = [];
                    fils.push(new nlobjSearchFilter('internalid', null, 'anyof', fileIDArr));
                    var cols = [];
                    cols.push(new nlobjSearchColumn('url'));
                    var fileSrch = nlapiSearchRecord('file', null, fils, cols);
                    if (fileSrch != null && fileSrch != '')
                    {
                      for (var f = 0; f < fileSrch.length; f++)
                      {
                          var url = fileSrch[f].getValue('url');
                          var fileid = fileSrch[f].getId();
                          fileURLObj[fileid] = url;
                        }
                      }
                  }
                  var records = _.map(
                      this.search_results.records || [],
                      function(record) {
                        const result = {
                          salesorder: record.getValue('custrecord_ca_so_number'),
                          salesOrderDate: record.getValue('custrecord_ca_so_date'),
                          itemNumber: record.getValue('custrecord_ca_item'),
                          customer: record.getText("custrecord_ca_customer"),
                          staxs_lot_number: record.getValue('custrecord_ca_staxs_lot_number'),
                          external_lot_number: record.getValue('custrecord_ca_external_lot_number'),
                          packing_note: record.getValue('custrecord_ca_packing_note'),
                          Certificate_location: fileURLObj[record.getValue('custrecord_ca_certificate_location')] || ''
                        };
                        return self.mapListResult(result, record);
                      }
                    );
      }
                 this.results = this.search_results;
			  this.results.records = records;
              return this.results;
    },

    post: function post() {
      // not implemented
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
