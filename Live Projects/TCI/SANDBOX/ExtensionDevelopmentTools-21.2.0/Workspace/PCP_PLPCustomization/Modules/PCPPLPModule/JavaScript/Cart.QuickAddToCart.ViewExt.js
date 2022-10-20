/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.Cart.QuickAddToCart.ViewExt'
	,	[
		'Cart.QuickAddToCart.View'
		, 'underscore'
		,	'Backbone'
        , 'ProductDetails.Options.Selector.View'
	]
	,	function (
		CartQuickAddToCartView	
		, _
		,	Backbone
        , ProductDetailsOptionsSelectorView
	)
	{
		'use strict';

        _.extend(CartQuickAddToCartView.prototype, {

            initialize : _.wrap(CartQuickAddToCartView.prototype.initialize, function(fn) {
                fn.apply(this, _.toArray(arguments).slice(1));
        
            }),
        
            events : _.extend({}, CartQuickAddToCartView.prototype.events, {
                'change [data-toggle="select-option"]': 'setDuration'
            }),
        
            setDuration:function(e) {
                this.model.setOption(e.target.id, e.target.value);
            },
        
            updateQuantity:function updateQuantity (e)
            {
                var new_quantity = parseInt(this.$(e.target).val(), 10)
                ,	minimum_quantity = this.getMinimumQuantity()
                ,	maximum_quantity = this.getMaximumQuantity();
        
                if (_.isNaN(new_quantity) || !_.isNumber(new_quantity) || new_quantity < minimum_quantity)
                {
                    new_quantity = minimum_quantity;
                }
                else if (!!maximum_quantity && new_quantity > maximum_quantity)
                {
                    new_quantity = maximum_quantity;
                }
        
                this.model.set('quantity', new_quantity);
        
                var optionValue = $(e.target).closest('.cart-quickaddtocart').find('.product-views-option-facets-dropdown-select').val();
        
                this.model.setOption($(e.target).closest('.cart-quickaddtocart').find('.product-views-option-facets-dropdown-select').attr('id'),optionValue);
        
                this.render();
            },
            
            childViews: _.extend({}, CartQuickAddToCartView.prototype.childViews, {
        
                'ItemDetails.Options': function() {
                    return new ProductDetailsOptionsSelectorView({
                        model: this.model
                    ,	application: this.application
                    ,	show_pusher: false
                    ,	show_required_label: this.model.get('item').get('itemtype') === 'GiftCert'
                    ,   templateName: 'facetCell'
        
                    });
                }
            }),
        
            getContext: _.wrap(CartQuickAddToCartView.prototype.getContext, function getContext(fn) {
                var context = fn.apply(this, _.toArray(arguments).slice(1));
        
                context.duration = !!this.model.get('item').get('onlinematrixpricerange');
                context.featuredDescription = this.model.get('item').get('featureddescription');
                var isItemWithReferenceTexts = this.model.get('item').get('itemid') === 'TB-MSSB';
                context.isItemWithReferenceTexts = isItemWithReferenceTexts;
        
                return context;
        
            })

        })

	});

