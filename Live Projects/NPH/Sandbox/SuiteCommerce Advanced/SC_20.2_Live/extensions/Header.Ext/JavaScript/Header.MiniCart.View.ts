/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Header.MiniCart.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/GlobalDeclarations.d.ts" />

import * as header_mini_cart_tpl from 'header_mini_cart.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');
import HeaderMiniCartSummaryView = require('../../../Advanced/Header/JavaScript/Header.MiniCartSummary.View');
import HeaderMiniCartItemCellView = require('../../../Advanced/Header/JavaScript/Header.MiniCartItemCell.View');
import Tracker = require('../../../Commons/Tracker/JavaScript/Tracker');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import * as _ from 'underscore';
// @module Header

// @class Header.MiniCart.View @extends BackboneView
export = BackboneView.extend({
    template: header_mini_cart_tpl,

    // @property {Object} attributes List of HTML attributes applied by Backbone into the $el
    attributes: {
        id: 'Header.MiniCart.View',
        'data-root-component-id': 'Header.MiniCart.View'
    },
    events: {
        'click [data-touchpoint="checkout"]': 'trackEvent'
    },

    initialize: function initialize() {
        const self = this;

        this.isLoading = true;
        this.itemsInCart = 0;

        this.model = LiveOrderModel.getInstance();

        LiveOrderModel.loadCart().done(function() {
            self.isLoading = false;
            self.render();
        });

        this.model.on('change', this.render, this);
        this.model.get('lines').on('add remove', this.render, this);
    },

    trackEvent: function() {
        Tracker.getInstance().trackProceedToCheckout();
    },

    render: function render() {
		
		var itemsInCartNew = this.model.getTotalItemCount();
			
		_.each(this.model.get('lines').models,function(line:any){
			 if(line.get('item').get('custitem_appf_is_imprint_item') == true)
			 {

				 itemsInCartNew = itemsInCartNew - line.get('quantity');

			 }
		});
			
		this.itemsInCart = itemsInCartNew;

        BackboneView.prototype.render.apply(this, arguments);

        // on tablet or desktop make the minicart dropdown
        if (
            Utils.isTabletDevice() ||
            Utils.isDesktopDevice() ||
            SC.CONFIGURATION.addToCartBehavior === 'showMiniCart'
        ) {
            this.$('[data-type="mini-cart"]').attr('data-toggle', 'dropdown');
        }
    },

    destroy: function destroy() {
        this._destroy();

        this.model.off('change', this.render, this);
        this.model.get('lines').off('add remove', this.render, this);
    },

    childViews: {
        'Header.MiniCartSummary': function() {
            return new HeaderMiniCartSummaryView();
        },
        'Header.MiniCartItemCell': function() {
			
			var lines = _.filter(this.model.get('lines').models,function(line:any){return line.get('item').get('custitem_appf_is_imprint_item') != true;});

            return new BackboneCollectionView({
                collection: !this.isLoading ? lines : new Backbone.Collection(),
                childView: HeaderMiniCartItemCellView,
                viewsPerRow: 1
            });
        }
    },

    // @method getContext
    // @return {Header.MiniCart.View.Context}
    getContext: function() {
        const summary = this.model.get('summary');
		const profileModel = ProfileModel.getInstance();
		
		var digitalItems = this.model.get('lines').filter(function(line:any){
			
			var item = line.getItem();
			return (item.get('custitem_appf_is_downloadable_item') || item.get('custitem10'));

		});
		
        // @class Header.MiniCart.View.Context
        return {
            // @property {LiveOrder.Model} model
            model: this.model,
            // @property {Number} itemsInCart
            itemsInCart: this.itemsInCart,
            // @property {Boolean} showPluraLabel
            showPluraLabel: this.itemsInCart !== 1,
            // @property {Boolean} showLines
            showLines: this.itemsInCart > 0,
            // @property {Boolean} isLoading
            isLoading: this.isLoading,
            // @property {String} subtotalFormatted
            subtotalFormatted: !this.isLoading ? summary && summary.subtotal_formatted : '',
            // @property {String} cartTouchPoint
            cartTouchPoint: Configuration.get('modulesConfig.Cart.startRouter', false)
                ? Configuration.get('currentTouchpoint')
                : 'viewcart',
            // @property {Boolean} isPriceEnabled
            isPriceEnabled: !ProfileModel.getInstance().hidePrices(),
			showLoginPage: ((digitalItems.length > 0) && (profileModel.get('firstname') === 'Guest') && (profileModel.get('lastname') === 'Shopper'))
        };
        // @class Header.MiniCart.View
    }
});
