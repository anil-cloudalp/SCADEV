/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.ProductDetails.Options.Selector.ViewExt'
	,	[
		'ProductDetails.Options.Selector.View'
		, 'underscore'
		,	'Backbone'
        , 'ProductViews.Option.View'
        , 'Backbone.CollectionView'
	]
	,	function (
		ProductDetailsOptionsSelectorView	
		, _
		,	Backbone
        , ProductViewsOptionView
        , BackboneCollectionView
	)
	{
		'use strict';

        _.extend(ProductDetailsOptionsSelectorView.prototype, {

            childViews: _.extend({}, ProductDetailsOptionsSelectorView.prototype.childViews, {

                'Options.Collection': function() {
                    
        
                    return new BackboneCollectionView({
                        collection: this.model.getVisibleOptions()
                    ,	childView: ProductViewsOptionView
                    ,	viewsPerRow: 1
                    ,	childViewOptions: {
                            line: this.model
                        ,	item: this.model.get('item')
                        ,	templateName: this.options.templateName || 'selector'
                        ,	show_required_label: this.options.show_required_label
                        }
                    });
                }
            }),
           getContext : _.wrap(ProductDetailsOptionsSelectorView.prototype.getContext, function(fn) {
                var context = fn.apply(this, _.toArray(arguments).slice(1));
                
                context.featuredDescription = this.model.get('item').get('featureddescription');
                
                return context;
            })

        })

	});

