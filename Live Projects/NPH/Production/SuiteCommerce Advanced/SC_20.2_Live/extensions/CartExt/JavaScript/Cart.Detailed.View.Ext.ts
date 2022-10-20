/// <amd-module name="Cart.Detailed.View.Ext"/>
import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import existingView = require('../../../Commons/Cart/JavaScript/Cart.Detailed.View');
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';

import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import CartLinesView = require('../../../Commons/Cart/JavaScript/Cart.Lines.View');
import CartItemSummaryView = require('../../../Commons/Cart/JavaScript/Cart.Item.Summary.View');
import CartItemActionsView = require('../../../Commons/Cart/JavaScript/Cart.Item.Actions.View');
import { GlobalViewsMessageView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Message.View';

_.extend(existingView.prototype, {
	
	childViews: _.extend(existingView.prototype.childViews, {
		
        'Item.ListNavigable': function() {
            const lines = _.filter(this.model.get('lines').models || [], function(line: any) {
                return (line.get('free_gift') !== true && line.get('item').get('custitem_appf_is_imprint_item') != true);
            });

            return new BackboneCollectionView({
                collection: lines,
                viewsPerRow: 1,
                childView: CartLinesView,
                childViewOptions: {
                    navigable: true,
                    application: this.application,
                    SummaryView: CartItemSummaryView,
                    ActionsView: CartItemActionsView,
                    showAlert: false
                }
            });
        }
    }),
	
	initPlugins: function initPlugins() {
        const viewport_width = Utils.getViewportWidth();
        const mobile_width_max = 768;
        if (Configuration.get('siteSettings.sitetype') === 'ADVANCED') {

            if(viewport_width < mobile_width_max){

                this.$('.cart-detailed-proceed-to-checkout').scStickyButton();
            }
            else{   
                this.$('[data-action="sticky"]').scStickyButton();
            }
        }
		Utils.initBxSlider(
            this.$('[data-type="carousel-items"]'),
            Configuration.get('bxSliderDefaults')
        );
    },
	 // @method updateItemQuantity
    // Finds the item in the cart model, updates its quantity and saves the cart model
    updateItemQuantity: function updateItemQuantity(e) {
        const self = this;
        const $form = this.getItemForm(e);
        const options = (<any>$form).serializeObject();
        let { internalid } = options;
        let line = this.model.get('lines').get(internalid);
        const $input = $form.find('[name="quantity"]');
        const validInput = this.validInputValue($input[0]);

        if (!line || this.isRemoving) {
            return;
        }

        if (!validInput || options.quantity) {
            const new_quantity = parseInt(options.quantity, 10);
            const item = line.get('item');
            const min_quantity = item
                ? item.get('_minimumQuantity', true)
                : line.get('minimumquantity');
            const max_quantity = item
                ? item.get('_maximumQuantity', true)
                : line.get('maximumquantity');
            const current_quantity = parseInt(line.get('quantity'), 10);

            let new_valid_quantity = new_quantity >= min_quantity ? new_quantity : min_quantity;
            new_valid_quantity =
                !!max_quantity && new_quantity > max_quantity
                    ? max_quantity
                    : new_quantity > min_quantity
                    ? new_quantity
                    : min_quantity;

            $input.val(new_valid_quantity);

            if (new_quantity !== current_quantity) {
				
				// calculation of quantity and evaluate internalid of imprint items
				var addQty = 0
				,	minusQty = 0
				,	imprintItem
				,	isCrossItem
				,	isHolyItem
				,	imprintItemId = 0
				,	crossItemId = 0
				,	holyItemId = 0;
				
				if(new_quantity > current_quantity)
					addQty = new_quantity - current_quantity;
				
				if(new_quantity < current_quantity)
					minusQty = current_quantity - new_quantity;
				
				var lineOptions = line.get('options') || '';
				
				if(_.has(lineOptions,'models'))
				 _.each(lineOptions.models,function(opt:any){
					 
					 if(opt.get('cartOptionId') == "custcol_appf_imprint_item_details")
						 imprintItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
					 
					if(opt.get('cartOptionId') == "custcol_appf_imprint_cross")
						isCrossItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
				
					if(opt.get('cartOptionId') == "custcol_appf_holy_bible")
						isHolyItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
					 
					if(imprintItem){
						
						if(imprintItem.indexOf('|') != -1){
							
							imprintItemId = parseInt(imprintItem.split('|')[0]);
							
							
							if(isCrossItem == "T" && imprintItem.split('|').length > 1)
								crossItemId = parseInt(imprintItem.split('|')[2]);
							
							if(isHolyItem == "T" && imprintItem.split('|').length > 3)
								holyItemId = parseInt(imprintItem.split('|')[4]);
						}
						
					}
				 });
				
				
                $input.val(new_valid_quantity).prop('disabled', true);
                line.set('quantity', new_valid_quantity);

                const invalid = line.validate();

                if (!invalid) {
                    const update_promise = this.model.updateLine(line, true);
                    this.disableElementsOnPromise(update_promise, `#${internalid} button`);
					
					//updating imprint items after update of main item
					update_promise.done(function (){
						if(imprintItemId){
							var cartLines = self.model.get('lines');
							
							$(document).ajaxStart(function () {
								
								if($('#cart-loading').length == 0)
									$('body').append('<div id="cart-loading"></div>');
							});
							$(document).ajaxStop(function () {
								
								if($('#cart-loading').length > 0)
									$('#cart-loading').remove();
							});
							
							if(_.has(cartLines,'models')){
							
								
								var promises = [];
								
								_.each(cartLines.models,function(cartLine:any){
									//console.log(cartLine);
									if(cartLine.get('item').get('internalid') == imprintItemId){
										
										var imprintItemTotal = cartLine.get('quantity');
										
										if(addQty)
										imprintItemTotal += addQty;
									
										if(minusQty)
											imprintItemTotal -= minusQty;
										
										cartLine.set('quantity', imprintItemTotal);
										//console.log(cartLine);
										var promise = self.model.updateLine(cartLine, true);
										promises.push(promise);
										//imprintItemLineId =  cartLine.internalid;
									}
									if(crossItemId && cartLine.get('item').get('internalid') == crossItemId){
										
										var crossItemTotal = cartLine.get('quantity');
										
										if(addQty)
										crossItemTotal += addQty;
									
										if(minusQty)
											crossItemTotal -= minusQty;
										
										cartLine.set('quantity', crossItemTotal);
										//console.log(cartLine);
										var promise = self.model.updateLine(cartLine, true);
										promises.push(promise);
										//crossItemTotal = cartLine.quantity;
										//crossItemLineId =  cartLine.internalid;
									}
									if(holyItemId && cartLine.get('item').get('internalid') == holyItemId){
										
										var holyItemTotal = cartLine.get('quantity');
										
										if(addQty)
										holyItemTotal += addQty;
									
										if(minusQty)
											holyItemTotal -= minusQty;
										
										cartLine.set('quantity', holyItemTotal);
										//console.log(cartLine);
										var promise = self.model.updateLine(cartLine, true);
										promises.push(promise);
										//holyItemTotal = cartLine.quantity;
										//holyItemLineId = cartLine.internalid;
									}
								});
								if(promises.length > 0){
									jQuery.when(promises).then(function(valArray) {
										self.model.fetch();
										//self.render();
										console.log(valArray);
									});
								}
							}
						}
					});
					
                    update_promise
                        .fail(function(jqXhr) {
                            const result = JSON.parse(jqXhr.responseText);
                            const { errorDetails } = result;

                            if (errorDetails.newLineId) {
                                internalid = errorDetails.newLineId;
                                // we use the new line
                                line = self.model.get('lines').get(internalid);
                            }

                            // revert quantity to the last quantity
                            line.set('quantity', current_quantity);
                            self.render();
                        })
                        .always(function() {
                            $input.prop('disabled', false);
                        });
                } else {
                    const placeholder = this.$(`#${internalid} [data-type="alert-placeholder"]`);
                    placeholder.empty();

                    _.each(invalid, function(value) {
                        const global_view_message = new GlobalViewsMessageView({
                            message: value,
                            type: 'error',
                            closable: true
                        });

                        placeholder.append(global_view_message.render().$el.html());
                    });

                    $input.prop('disabled', false);
                    line.set('quantity', current_quantity);
                }
            }
        }
    },
	// @method removeItem
    // handles the click event of the remove button
    // removes the item from the cart model and saves it.
    removeItem: function removeItem(e) {
        const self = this;
        const product = this.model.get('lines').get(this.$(e.target).data('internalid'));
        const remove_promise = this.model.removeLine(product);
        const internalid = product.get('internalid');
		
		
		var imprintItem
		,	isCrossItem
		,	isHolyItem
		,	imprintItemId = 0
		,	crossItemId = 0
		,	holyItemId = 0;
		
		var options = product.get('options') || '';
		var itemQty = product.get('quantity') || '';
		
		if(_.has(options,'models')){
			 _.each(options.models,function(opt:any){
				 
				 if(opt.get('cartOptionId') == "custcol_appf_imprint_item_details")
					 imprintItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
				 
				if(opt.get('cartOptionId') == "custcol_appf_imprint_cross")
					isCrossItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
			
				if(opt.get('cartOptionId') == "custcol_appf_holy_bible")
					isHolyItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
				 
				if(imprintItem){
					
					if(imprintItem.indexOf('|') != -1){
						
						imprintItemId = parseInt(imprintItem.split('|')[0]);
						
						
						if(isCrossItem == "T")
							crossItemId = parseInt(imprintItem.split('|')[2]);
						
						if(isHolyItem == "T")
							holyItemId = parseInt(imprintItem.split('|')[4]);
					}
					
				}
			 });
		}
		//console.log(itemQty + ' - ' + imprintItemId  + ' - ' + crossItemId  + ' - ' + holyItemId);
		
		remove_promise.done(function(){
			if(imprintItemId){
				var cartLines = self.model.get('lines');
				
				$(document).ajaxStart(function () {
					
					if($('#cart-loading').length == 0)
						$('body').append('<div id="cart-loading"></div>');
				});
				$(document).ajaxStop(function () {
					
					if($('#cart-loading').length > 0)
						$('#cart-loading').remove();
				});
				
				var promises = [];
				if(_.has(cartLines,'models')){
				
					
					
					_.each(cartLines.models,function(cartLine:any){
						//console.log(cartLine);
						if(cartLine.get('item').get('internalid') == imprintItemId){
							
							var imprintItemTotal = cartLine.get('quantity');
							
							if(imprintItemTotal == itemQty){
								
								var promise = self.model.removeLine(cartLine);
								promises.push(promise);
							}
							else{
								imprintItemTotal -= itemQty;
								
							cartLine.set('quantity', imprintItemTotal);
							
							var promise = self.model.updateLine(cartLine, true);
							promises.push(promise);
							}
							
							
						}
						if(crossItemId && cartLine.get('item').get('internalid') == crossItemId){
							
							var crossItemTotal = cartLine.get('quantity');
							
							if(crossItemTotal == itemQty){
								
								var promise = self.model.removeLine(cartLine);
								promises.push(promise);
							}
							else{
								crossItemTotal -= itemQty;
								
							cartLine.set('quantity', crossItemTotal);
							
							var promise = self.model.updateLine(cartLine, true);
							promises.push(promise);
							}
							
							
							
						}
						if(holyItemId && cartLine.get('item').get('internalid') == holyItemId){
							
							var holyItemTotal = cartLine.get('quantity');
							
							if(holyItemTotal == itemQty){
								
								var promise = self.model.removeLine(cartLine);
								promises.push(promise);
							}
							else{
								holyItemTotal -= itemQty;
								
							cartLine.set('quantity', holyItemTotal);
							
							var promise = self.model.updateLine(cartLine, true);
							promises.push(promise);
							}
						}
						
					});
				}
				if(promises.length > 0){
					jQuery.when(promises).then(function(valArray) {
						self.model.fetch();
						//self.render();
						console.log(valArray);
					});
				}
			}
		});
		
        this.isRemoving = true;
        this.disableElementsOnPromise(
            remove_promise,
            `article[id="${internalid}"] a, article[id="${internalid}"] button`
        );

        remove_promise.always(function() {
            self.isRemoving = false;
        });

        return remove_promise;
    },
	// @method getContext @return {Cart.Detailed.View.Context}
    getContext: function() {
        const lines = this.model.get('lines');
        var product_count = lines.length;
        var item_count = _.reduce(
            lines.models,
            function(memo, line: any) {
                return memo + line.get('quantity');
            },
            0
        );
        let product_and_items_count = '';
		
		_.each(lines.models,function(line:any){
			
			 if(line.get('item').get('custitem_appf_is_imprint_item') == true)
			 {
					
				 item_count = item_count - line.get('quantity');
				product_count--;
			 }
		});

        if (product_count === 1) {
            if (item_count === 1) {
                product_and_items_count = Utils.translate('1 Product, 1 Item');
            } else {
                product_and_items_count = Utils.translate('1 Product, $(0) Items', item_count);
            }
        } else if (item_count === 1) {
            product_and_items_count = Utils.translate('$(0) Products, 1 Item', product_count);
        } else {
            product_and_items_count = Utils.translate(
                '$(0) Products, $(1) Items',
                product_count,
                item_count
            );
        }

        // @class Cart.Detailed.View.Context
        return {
            // @property {LiveOrder.Model} model
            model: this.model,
            // @property {Boolean} showLines
            showLines: !!(lines && lines.length),
            // @property {Orderline.Collection} lines
            lines: lines,
            // @property {String} productsAndItemsCount
            productsAndItemsCount: product_and_items_count,
            // @property {Number} productCount
            productCount: product_count,
            // @property {Number} itemCount
            itemCount: item_count,
            // @property {String} pageHeader
            pageHeader: this.page_header
        };
        // @class Cart.Detailed.View
    }
});

export = existingView;

