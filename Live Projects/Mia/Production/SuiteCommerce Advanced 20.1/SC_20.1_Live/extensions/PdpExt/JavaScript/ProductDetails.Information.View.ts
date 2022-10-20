/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ProductDetails.Information.View"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as product_details_information_tpl from 'product_details_information.tpl';

import Configuration = require('../../../Commons/Utilities/JavaScript/SC.Configuration');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import $ = require('../../../Commons/Core/JavaScript/jQuery');
import ProductReviewsCenterView = require('../../../Commons/ProductReviews/JavaScript/ProductReviews.Center.View');

// @class ProductDetails.Information.View @extends Backbone.View
const ProductDetailsInformationView: any = BackboneView.extend({
    template: product_details_information_tpl,

    events: {
        'click [data-action="show-more"]': 'showMore'
    },
    // @method initialize Override default method to allow passing pre-calculated details
    // @param {ProductDetails.Information.View.InitializationOptions} options
    // @return {Void}
    initialize: function initialize() {
        BackboneView.prototype.initialize.apply(this, arguments);
        this.details = this.options.details;
        Backbone.on('resizeView', function(event) {
            $('[data-action="sc-pusher-dismiss"]').click();
            return true;
        });
    },

    render: function() {
        this.details = this.details || this.computeDetailsArea();

        this._render();
    },

    destroy: function() {
        this._destroy();
        this.off('resizeView');
    },

    // @method computeDetailsArea
    // Process what you have configured in itemDetails as item details.
    // In the PDP extra information can be shown based on the itemDetails property in the Shopping.Configuration.
    // These are extra field extracted from the item model
    // @return {Array<ProductDetails.Information.DataContainer>}
    computeDetailsArea: function() {
        const self = this;
        const details = [];
       
        var dataSheetUrl = this.model.get('item').get('custitem_web_datasheet') || '';
        var userGuideUrl = this.model.get('item').get('custitem_web_user_guide') || '';

        var resourceContent = '';
        if(dataSheetUrl){
             resourceContent= '<div class="data-sheet-button">'+'<a href="'+dataSheetUrl+'" target="_blank">Download Data Sheet</a>'+'</div>';
        }
        if(userGuideUrl)
        {
            resourceContent += '<div class="user-guide-button">'+'<a href="'+userGuideUrl+'" target="_blank">Download User Guide</a>'+'</div>';
        }
		
        _.each(Configuration.get('productDetailsInformation', []), function(item_information: any) {
            let content = '';

            if (item_information.contentFromKey) {
                content = self.model.get('item').get(item_information.contentFromKey);
            }

            if (content && $.trim(content)) {
                // @class ProductDetails.Information.DataContainer
                details.push({
                    // @property {String} name
                    name: item_information.name,
                    // @property {String} content Any string and event valid HTML is allowed
                    content: content,
                    // @property {String} itemprop
                    itemprop: item_information.itemprop
                });
                // @class ProductDetails.Information.View
            }
        });
        var reviews = '<div data-view="ProductReviewsCenter"></div>';

         details.push({
             // @property {String} name
             name: "Reviews",
             // @property {String} content Any string and event valid HTML is allowed
             content: reviews,
             // @property {String} itemprop
             itemprop: "Reviews"
         });
        if(resourceContent){

            details.push({
                // @property {String} name
                name: "Resources",
                // @property {String} content Any string and event valid HTML is allowed
                content: resourceContent,
                // @property {String} itemprop
                itemprop: "Resources"
            });

        }



        return details;
    },

    childViews: {
        'ProductReviewsCenter': function() {
            return new ProductReviewsCenterView({
                item: this.model.get('item'),
                application: this.parentView.application
            });
        }
      },

    // @method showMore Toggle the content of an options, and change the label Show Less and Show More by adding a class
    // @return {Void}
    showMore: function() {
        this.$('[data-type="information-content"]').toggleClass('show');
    },

    getContext: function() {
        return {
            // @property {Boolean} showInformation
            showInformation: this.details.length > 0,
            // @property {Boolean} showHeader
            showHeader: this.details.length < 2,
            // @property {Array<ProductDetails.Information.DataContainer>} details
            details: this.details,
            // @property {Boolean} isNotPageGenerator
            isNotPageGenerator: !SC.isPageGenerator()
        };
    }
});

export = ProductDetailsInformationView;

// @class ProductDetails.Information.View.InitializationOptions
// @property {Array<ProductDetails.Information.DataContainer>?} details
// @property {Product.Model} model
//
