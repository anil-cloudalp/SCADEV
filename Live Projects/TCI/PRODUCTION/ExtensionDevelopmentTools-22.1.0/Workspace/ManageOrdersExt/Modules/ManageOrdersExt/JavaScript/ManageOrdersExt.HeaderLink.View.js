// @module TCI.ManageOrdersExt.ManageOrdersExt
define('TCI.ManageOrdersExt.ManageOrdersExt.HeaderLink.View'
,	[
	'tci_manageordersext_manageordersext_header_link.tpl',
	'Backbone.View',
	'Configuration'
    ]
, function (
	tci_manageordersext_manageordersext_header_link_tpl,
	BackboneView,
	Configuration
)
{
    'use strict';
	var ManageMyOrdersHeaderLinkView = BackboneView.extend({
		template: tci_manageordersext_manageordersext_header_link_tpl,
		initialize: function initialize () {
			// console.log('ManageMyOrdersHeaderLinkView');
			// console.log('manageOrder.title', Configuration.get('manageOrder.title'));
		},
		getContext: function getContext (){
			return {
				showTitle: Configuration.get('manageOrder.showLink'),
				linkText: Configuration.get('manageOrder.title')
			}
		}
	  });
  
	return ManageMyOrdersHeaderLinkView;
});
