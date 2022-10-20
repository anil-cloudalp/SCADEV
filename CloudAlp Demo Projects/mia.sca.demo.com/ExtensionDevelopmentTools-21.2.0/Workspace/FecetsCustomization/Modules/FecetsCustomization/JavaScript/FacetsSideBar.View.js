// @module RudraCustomization.FecetsCustomization.FecetsCustomization
define('RudraCustomization.FecetsCustomization.FacetsSideBar.View'
,	[
	'facets_facets_sidebar.tpl'

	
	,	'Backbone'
    ]
, function (
	facets_facets_sidebar_tpl
	 
	
	,	Backbone
)
{
    'use strict';

	// @class RudraCustomization.FecetsCustomization.FacetsSideBar.View @extends Backbone.View
	return Backbone.View.extend({

		template: facets_facets_sidebar_tpl

	,	initialize: function (options) {

		
		}

	,	events: {
            'click .nav-list-item-wrapper': 'toggleList'
		}

    ,    toggleList:function(e){
		    if(jQuery(e.currentTarget).next('ul')){
		        jQuery(e.currentTarget).find('.arrow-icons').toggleClass('active');
		    }
		    jQuery(e.currentTarget).next('ul').slideToggle();
        }

	,	bindings: {
		}

	, 	childViews: {

		}	

    ,   getCategories: function(){
            var categories = (SC.CATEGORIES && SC.CATEGORIES.length >0)?SC.CATEGORIES:[] ;
            return categories;
        }
		//@method getContext @return RudraCustomization.FecetsCustomization.FacetsSideBar.View.Context
	,	getContext: function getContext()
		{
			//@class RudraCustomization.FecetsCustomization.FacetsSideBar.View.Context
			
			return {
				categories: this.getCategories()
			};
		}
	});
});
