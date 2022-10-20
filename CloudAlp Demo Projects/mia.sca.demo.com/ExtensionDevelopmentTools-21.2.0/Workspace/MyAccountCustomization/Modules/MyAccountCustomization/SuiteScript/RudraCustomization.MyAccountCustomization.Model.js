define('RudraCustomization.MyAccountCustomization.Model', [
        'SC.Model'
    ,   'Models.Init'
    ,   'Application'
    ,   'underscore'
    ,   'Configuration'
  ], function (
        SCModel
    ,   ModelsInit
    ,   Application
    ,   _
    ,   Configuration
   
  ) {

    return SCModel.extend({
        name: 'MyAccountCustomizationModel',

        isMultiSite: ModelsInit.context.getFeature('MULTISITE'),

        getSalesOrder: function() {
          var returnString = {};
          try {
                var  toDate = new Date()
                ,	fromDate = nlapiAddMonths(toDate,'-5');
                
                fromDate.setDate(1);
                    
            var filters = {
              'mainline': ['mainline', 'is', 'T'],
              'trandate_operator': 'and',
              'trandate': ['trandate', 'within', [fromDate, toDate]],
              'type_operator': 'and',
              'type': ['type', 'anyof', 'SalesOrd'],
              'entity_operator': 'and',
              'entity': ['entity', 'anyof', nlapiGetUser()]
    
            };
            if (this.isMultiSite) {
              const site_id = ModelsInit.session.getSiteSettings(['siteid']).siteid;
              const filter_site =
                  Configuration.get('filterSite') || Configuration.get('filter_site');
              var search_filter_array = null;

              if (_.isString(filter_site) && filter_site === 'current') {
                  search_filter_array = [site_id, '@NONE@'];
              } else if (_.isString(filter_site) && filter_site === 'all') {
                  search_filter_array = [];
              } else if (_.isArray(filter_site)) {
                  search_filter_array = filter_site;
                  search_filter_array.push('@NONE@');
              } else if (_.isObject(filter_site) && filter_site.option) {
                  switch (filter_site.option) {
                      case 'all':
                          search_filter_array = [];
                          break;
                      case 'siteIds':
                          search_filter_array = filter_site.ids;
                          break;
                      default:
                          // case 'current' (current site) is configuration default
                          search_filter_array = [site_id, '@NONE@'];
                          break;
                  }
              }

              if (search_filter_array && search_filter_array.length) {
                  filters['site_operator'] = 'and';
                  filters.site = ['website', 'anyof', _.uniq(search_filter_array)];
              }
          }
    
            var columns = {
              'internalid': new nlobjSearchColumn('internalid'),
              'entity': new nlobjSearchColumn('entity'),
              'total': new nlobjSearchColumn('total'),
              'trandate': new nlobjSearchColumn('trandate')
            };
            columns['internalid'].setSort(true);
    
            var transactionSearch = Application.getAllSearchResults('transaction', _.values(filters), _.values(columns));
            
            var fromMonth = fromDate.getMonth();
            var toMonth = toDate.getMonth();
            
            //start new 
            var results = [];
            var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                                
            monthArray.forEach(function(mo){
                results.push({
                    month: mo,
                    totalSO: 0
                });
            });
    
            //end new
            _.each(transactionSearch || [], function(record) {
                
                var tranTotal = parseFloat(record.getValue('total'));
                    
                var tranDate = record.getValue('trandate');
                
                var month = nlapiStringToDate(tranDate).getMonth();
                
                var result = _.findWhere(results,{'month': monthArray[month]});
                if(result){
                    result.totalSO += tranTotal;
                }
            });
            
            returnString.fromMonth = fromMonth;
            returnString.toMonth = toMonth;
            
            //new block
            var start = fromMonth
            , end = toMonth
            , arr = []
            , imo = 1;
            while (imo <= 6) {
                
                var result = _.findWhere(results,{'month': monthArray[start]});
                if(result){
                    arr.push(_.values(result));
                }
                if(start == 11)
                    start = 0;
                else
                    start++;
                
                imo++;
            }
                    
            returnString.salesOrder = arr;
            //end new block
          }
          catch (e) {
            returnString.error = e.toString();
          }
    
          return returnString;
        }
    });
  })
  