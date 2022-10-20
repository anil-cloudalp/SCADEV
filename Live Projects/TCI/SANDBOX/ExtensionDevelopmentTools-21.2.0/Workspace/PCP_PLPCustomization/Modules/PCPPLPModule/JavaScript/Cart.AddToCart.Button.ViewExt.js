/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.Cart.AddToCart.Button.ViewExt'
	,	[
		'Cart.AddToCart.Button.View'
		, 'underscore'
		,	'Backbone'
        ,   'LiveOrder.Line.Model'
        , 'Cart.Confirmation.Helpers'
	]
	,	function (
		CartAddToCartButtonView	
		, _
		,	Backbone
        ,  LiveOrderLineModel
        ,  CartConfirmationHelpers
	)
	{
		'use strict';

        _.extend(CartAddToCartButtonView.prototype, {

            addToCart :function(e)
            {
                e.preventDefault();
                var self = this
                ,	cart_promise;
                var addItemQuantity = parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('.cart-quickaddtocart-quantity').val(), 10);
                var hasDuration = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol2');
                var hasDuration2 = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol3');
                var hasReferenceText1 = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_1');
                var hasReferenceText2 = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_2');
                var hasReferenceText3 = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_3');
                var addItemDuration = !!hasDuration.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol2').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol2').val().toString(), 10);
                var addItemDuration2 = !!hasDuration2.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol3').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol3').val().toString(), 10);
                var addReferenceText1 = !!hasReferenceText1.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_1').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_1').val().toString(), 10);
                var addReferenceText2 = !!hasReferenceText2.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_2').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_2').val().toString(), 10);
                var addReferenceText3 = !!hasReferenceText3.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_3').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_3').val().toString(), 10);
        
                jQuery('.product-details-options-selector-message').text('');
               
                if (!!hasDuration.length) {
                  if (!addItemDuration) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a duration.');
                    return;
                  }
                  else 
                  {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
                
                if (!!hasDuration2.length) {
                  if (!addItemDuration2) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a duration.');
                    return;
                  }
                  else 
                  {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
                
                if (addItemQuantity === 0) {
                  jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a quantity.');
                  return;
                }
                else 
                {
                  jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                }
                
                if (!!hasReferenceText1.length) {
                  if (!addReferenceText1) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a reference text 1.');
                    return;
                  } else {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
                if (!!hasReferenceText2.length) {
                  if (!addReferenceText2) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a reference text 2.');
                    return;
                  } else {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
                if (!!hasReferenceText3.length) {
                  if (!addReferenceText3) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a reference text 3.');
                    return;
                  } else {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
        
                if (!this.model.areAttributesValid(['options','quantity'], self.getAddToCartValidators()))
                {
                    return;
                }
        
                if (!this.model.isNew() && this.model.get('source') === 'cart')
                {
                    cart_promise = this.cart.updateProduct(this.model);
                    cart_promise.done(function ()
                    {
                        self.options.application.getLayout().closeModal();
                    });
                }
                else
                {
                    var line = LiveOrderLineModel.createFromProduct(this.model);
                    cart_promise = this.cart.addLine(line);
                    CartConfirmationHelpers.showCartConfirmation(cart_promise, line, self.options.application);
                }
        
                cart_promise.fail(function (jqXhr)
                {
                    var error_details = null;
                    try
                    {
                        var response = JSON.parse(jqXhr.responseText);
                        error_details = response.errorDetails;
                    }
                    finally
                    {
                        if (error_details && error_details.status === 'LINE_ROLLBACK')
                        {
                            self.model.set('internalid', error_details.newLineId);
                        }
                    }
        
                });
                
                var $quickAddToCart = $(e.target).closest('.cart-quickaddtocart');
                        
                if ($quickAddToCart.find('.cart-quickaddtocart-quantity').length) {        
                    $quickAddToCart.find('.cart-quickaddtocart-quantity').attr('value','0');
                }
                
                if ($quickAddToCart.find('.product-views-option-facets-dropdown-select').length) {
                    $quickAddToCart.find('.product-views-option-facets-dropdown-select').val('');
                    
                    $quickAddToCart.find('.product-views-option-facets-dropdown-select').find('option').removeAttr("selected");
                    $quickAddToCart.find('.product-views-option-facets-dropdown-select').find('option').attr('data-active', 'false');
                }
                var itemOption =  $quickAddToCart.find('.product-views-option-facets-dropdown-select').attr('id');
              
                this.model.set('quantity',0)
                // this.model.setOption(itemOption,'');
        
                this.disableElementsOnPromise(cart_promise, e.target);
                return false;
            },
        
            getContext: _.wrap(CartAddToCartButtonView.prototype.getContext, function (fn) {
                      var context = fn.apply(this, _.toArray(arguments).slice(1));
                      var isItemWithReferenceTexts = this.model.get('item').get('itemid') === 'TB-MSSB';
                      context.isItemWithReferenceTexts = isItemWithReferenceTexts
                      return context;
                  })

        })

	});

