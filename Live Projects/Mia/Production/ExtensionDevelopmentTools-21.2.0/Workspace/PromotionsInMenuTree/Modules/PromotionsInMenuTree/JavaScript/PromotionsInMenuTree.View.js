// @module CA.PromotionsInMenuTree.PromotionsInMenuTree
define('CA.PromotionsInMenuTree.PromotionsInMenuTree.View'
,	[
	'ca_promotionsinmenutree_promotionsinmenutree.tpl'
	
	,	'Backbone'
    ]
, function (
	ca_promotionsinmenutree_promotionsinmenutree_tpl
	
	,	Backbone
)
{
    'use strict';

	// @class CA.PromotionsInMenuTree.PromotionsInMenuTree.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_promotionsinmenutree_promotionsinmenutree_tpl

	,	initialize: function (options) {

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.PromotionsInMenuTree.PromotionsInMenuTree.View.Context
	,	getContext: function getContext()
		{
	
		}
	});
});
