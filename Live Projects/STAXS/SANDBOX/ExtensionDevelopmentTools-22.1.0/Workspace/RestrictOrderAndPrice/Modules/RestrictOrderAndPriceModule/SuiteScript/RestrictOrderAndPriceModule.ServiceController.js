define("STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.ServiceController", ["ServiceController",'underscore',], function (
  ServiceController,_
) {
  "use strict";

  return ServiceController.extend({
    name: "STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var retString = {};
      try {
        var role = nlapiGetRole();
        var custRecord = nlapiLoadRecord('customer', nlapiGetUser());
        var numberOfItemPricings = custRecord.getLineItemCount('itempricing');
        var itemIds = [];
        for (var i = 1; i <= numberOfItemPricings; i++) {
          var itemID = custRecord.getLineItemValue("itempricing", 'item', i);
          var isMatrixParent = nlapiLookupField('item', itemID, ['parent']);
          if (isMatrixParent.parent == '') {
            itemIds.push(itemID);
          }
        }
        if (itemIds.length) {
          retString.itemIds = itemIds;
        }
        retString.role = role;
      } catch (error) {
        retString.error = error;
      }
      return retString;
    },

    post: function post() {
      // not implemented
      console.warn("data-options", JSON.stringify(this.data));
      var retString = {};
      try {
        var itemIDArr = [];
        var cols = [];
        var dataVal = this.data.data;

        var custRecord = nlapiLoadRecord('customer', nlapiGetUser());
        var numberOfItemPricings = custRecord.getLineItemCount('itempricing');
        var itemIds = [];
        for (var i = 1; i <= numberOfItemPricings; i++) {
          var itemID = custRecord.getLineItemValue("itempricing", 'item', i);
      
            itemIds.push(itemID);
          
        }

        var itemids = itemIds;//dataVal.id;
        var listids = dataVal.listid;
        cols.push(new nlobjSearchColumn('internalid'));
        cols.push(new nlobjSearchColumn('parent'));
        var idsArray = [];
        for (var i = 0; i < itemids.length; i++) {
          idsArray.push(["internalid", "is", itemids[i]]);
          idsArray.push("OR");
        }
        idsArray.pop();

        var filters = [idsArray];

        for (var key in dataVal) {

          if(key.indexOf('custitem_') != -1)
          {
              var id = this.getListId(key,listids,dataVal[key]);
              if(id.length == 1)
              {
                filters.push('AND');
                filters.push([key, "anyof" , id[0]]);
              }
              else{
                filters.push('AND');
                filters.push([key, "anyof" , id]);
              }
          }
        }
        console.warn('filters',JSON.stringify(filters));

        var itemSrch = nlapiSearchRecord('item', null, filters, cols);
        console.warn('itemSrch',JSON.stringify(itemSrch));
        if (itemSrch != null && itemSrch != '') {
          for (var i = 0; i < itemSrch.length; i++) {
            var itemID = itemSrch[i].getValue('internalid');
            var parent = itemSrch[i].getValue('parent');
            if(!parent)
            itemIDArr.push(itemID);
            else
            itemIDArr.push(parent);
          }
        }

        retString.itemIDArr = itemIDArr;

      } catch (error) {
        retString.error = error;
      }
      return retString;

    },

    getListId: function (key,listids,facetVal){
      var filteredList = []; 
      filteredList = _.filter(listids,function (val){
        return val.filterId == key;
      })  
      var listSrch = nlapiSearchRecord(filteredList[0].listId,null,null,[new nlobjSearchColumn('name')]);
      console.warn('listSrch',JSON.stringify(listSrch));
      var idArr =[];
      for(var i=0;i<listSrch.length;i++){
        if(facetVal.indexOf('_')!== -1)
        {
          console.warn('if')
          _.each(facetVal.split('_'),function(valArr){
            if(listSrch[i].getValue('name') == valArr)
            {
              idArr.push(listSrch[i].getId());
            }
          })

        }
        else{
          console.warn('else')
          if(listSrch[i].getValue('name') == facetVal)
          {
            idArr.push(listSrch[i].getId());
          }
        }
      }
      console.warn('idArr', JSON.stringify(idArr));
      return idArr;
    },

    put: function put() {
      // not implemented
    },

    delete: function () {
      // not implemented
    }
  });
});