define('CA.PromotionsInMenuTree.Model', [
    'SC.Model',
    'Application'
], function(
    SCModel,
    Application
) {
    return SCModel.extend({
        list:function(data){
            this.data = data;
            var date = new Date();
          	var converted_date = nlapiDateToString(date);
            var fils = [[['enddate', 'isempty',''],'or',['enddate','onorafter',converted_date]],'and',['custrecord_tier', 'is', this.data.cust_tier],'and',['isinactive', 'is', 'F']];
            var cols = [new nlobjSearchColumn('code'),new nlobjSearchColumn('discountrate')];
            var search_results = Application.getAllSearchResults('promotioncode', _.values(fils), _.values(cols));
          	var promo_items = [];
            if(search_results != null){
                for(var i=0;i<search_results.length;i++){
                    var promo_record = nlapiLoadRecord('promotioncode',search_results[i].id);
                    for(var j=1; j <= promo_record.getLineItemCount('discounteditems');j++){
                        var itemObj = {};
                        itemObj.item_discount = search_results[i].getValue('discountrate');
                        itemObj.promo_item_id = promo_record.getLineItemValue('discounteditems','discounteditem',j);
                      	promo_items.push(itemObj);
                    }
                }
            }
          	return promo_items;
        },

        search:function(promo){
            var item_filters = new nlobjSearchFilter('displayname',null,'is',promo);
            var item_columns = new nlobjSearchColumn('internalid');
            var required_item_record = nlapiSearchRecord('item',null,item_filters,item_columns);
            var itemid = [];
            if(required_item_record != null){
              itemid.push(required_item_record[0].getValue('internalid'));
            }
            return itemid;
        }
    });
});