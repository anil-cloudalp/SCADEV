define('CA.PromotionsInMenuTree.Collection'
,	[
		'Backbone'
	,	'Utils'
	,	'CA.PromotionsInMenuTree.PromotionsInMenuTree.Model'
	,   'underscore'
    ]
, function (
	
	    Backbone
	,	Utils
	,	PromotionsInMenuTreeModel
	,   _
){
    return Backbone.Collection.extend({
        model: PromotionsInMenuTreeModel,
        cacheSupport: false,
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/PromotionsInMenuTree.Service.ss"
            )
        ),
        parse: function parse(response) {
            if (!_.isUndefined(response.totalRecordsFound)) {
                this.totalRecordsFound = response.totalRecordsFound;
                this.recordsPerPage = response.recordsPerPage;
                return response.records;
            }
            return response;
        }

    })
})