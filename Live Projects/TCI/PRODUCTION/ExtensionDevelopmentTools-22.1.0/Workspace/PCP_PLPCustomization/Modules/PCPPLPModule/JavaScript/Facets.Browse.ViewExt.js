/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.Facets.Browse.ViewExt'
	,	[
		'Facets.Browse.View'
		, 'underscore'
		,	'Backbone'
	]
	,	function (
		FacetsBrowseView	
		, _
		,	Backbone
	)
	{
		'use strict';

        _.extend(FacetsBrowseView.prototype, {

            initialize: _.wrap(FacetsBrowseView.prototype.initialize, function (fn) {
                fn.apply(this, _.toArray(arguments).slice(1));
             
                this.application.getLayout().on('afterAppendView', function () {
                    if ($('.facets-facet-browse-category-cells-container:has(*)').length) {
                        $('.facets-facet-browse-category-cells-container').show();
                    } else {
                        $('.facets-facet-browse-category-cells-container').hide();
                    }
                })
        
            })
        })

	});

