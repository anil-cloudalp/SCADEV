/// <amd-module name="Cart.Summary.View.Ext"/>
import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import existingView = require('../../../Commons/Cart/JavaScript/Cart.Summary.View');
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

_.extend(existingView.prototype, {
	
	 // @method getContext
    // @return {Cart.Summary.View.Context}
    getContext: function getContext() {
        let continueURL =
            Configuration.get('siteSettings.sitetype') === 'ADVANCED'
                ? Configuration.defaultSearchUrl
                : '';
        let is_wsdk = false;
        const summary = this.model.get('summary');
        var items_count = _.reduce(
            this.model.get('lines').pluck('quantity'),
            function(memo, quantity: any) {
                return memo + (parseFloat(quantity) || 1);
            },
            0
        );
        const shipping_address =
            this.model.get('addresses').get(this.model.get('shipaddress')) || new Backbone.Model();
        const default_country =
            shipping_address.get('country') || Configuration.get('siteSettings.defaultshipcountry');
        const shipping_zip_code = shipping_address.get('zip');
        const promocodes = this.model.get('promocodes') || [];
        const promocodes_applied = _.filter(promocodes, function(promo: any) {
            return (
                (promo.isautoapplied == true && promo.isvalid == true) ||
                promo.isautoapplied == false
            );
        });
        const gift_certificates =
            this.model.get('paymentmethods').where({ type: 'giftcertificate' }) || [];
        const is_single_country = _.size(Configuration.get('siteSettings.countries', [])) === 1;
        let is_zipcode_require;
        let selected_country;
        let countries_list;
        let is_estimated_shipping_valid;
        let show_estimation_form = true;
        const countries = _.clone(Configuration.get('siteSettings.countries'));

        // Determine if the Zip Code is required and just leave selected the current address
        if (countries && default_country && countries[default_country]) {
            selected_country = _.findWhere(countries, { selected: true });
            if (selected_country) {
                selected_country.selected = false;
            }

            countries[default_country].selected = true;
			
			is_zipcode_require = (default_country == 'US' || default_country == 'CA');
				
            //is_zipcode_require = countries[default_country].isziprequired !== 'F';
            selected_country = countries[default_country];
            countries_list = _.toArray(countries);
        } else {
            selected_country = _.findWhere(countries, { selected: true });
            countries_list = _.toArray(countries);

            if (!selected_country) {
                selected_country = _.first(countries_list);
            }
			is_zipcode_require = (selected_country.code == 'US' || selected_country.code == 'CA');
				
            //is_zipcode_require = selected_country.isziprequired !== 'F';
        }

        // Determine if the current address is valid (complete)
        if (_.isString(shipping_address.id) && shipping_address.id !== '-------null') {
            is_estimated_shipping_valid = is_zipcode_require
                ? !!shipping_zip_code
                : !!shipping_address.get('country');
        } else {
            is_estimated_shipping_valid = false;
        }

        // Check if WSDK is configured
        if (
            Configuration.get('siteSettings.iswsdk', false) &&
            Configuration.get('siteSettings.wsdkcancelcarturl')
        ) {
            continueURL = Configuration.get('siteSettings.wsdkcancelcarturl');
            is_wsdk = true;
        }

        // Calculate if the estimation form should be rendered or not
        if (
            Configuration.get('siteSettings.showshippingestimator') === 'F' ||
            (is_estimated_shipping_valid && is_zipcode_require)
        ) {
            show_estimation_form = false;
        }
		
		_.each(this.model.get('lines').models,function(line:any){
		
			 if(line.get('item').get('custitem_appf_is_imprint_item') == true)
			 {

				 items_count = items_count - line.get('quantity');

			 }
		});
		
		var digitalItems = this.model.get('lines').filter(function(line:any){
			
			var item = line.getItem();
			return (item.get('custitem_appf_is_downloadable_item') || item.get('custitem10'));

		});
		
		const profileModel = ProfileModel.getInstance();
        // @class Cart.Summary.View.Context
        return {
            // @property {LiveOrder.Model} model
            model: this.model,
            // @property {Boolean} isWSDK
            isWSDK: is_wsdk,
            // @property {String} continueURL
            continueURL: continueURL,
            // @property {Boolean} showActions
            showActions: true,
            // @property {Boolean} showLabelsAsEstimated
            showLabelsAsEstimated: true,
            // @property {Object} summary
            summary: summary,
            // @property {Number} itemCount
            itemCount: items_count,
            // @property {Boolean} isSingleItem
            isSingleItem: items_count === 1,
            // @property {Boolean} isZipCodeRequire
            isZipCodeRequire: is_zipcode_require,
            // @property {Boolean} showEstimate Shows or not the estimation form
            showEstimate: show_estimation_form,
            // @property {Boolean} showHandlingCost
            showHandlingCost: !!summary.handlingcost,
            // @property {Boolean} showGiftCertificates
            showGiftCertificates: !!summary.giftcertapplied,
            // @property {Boolean} showPromocodeForm
            showPromocodeForm:
                Configuration.get('promocodes.allowMultiples', true) || !promocodes_applied.length,
            // @property {Array} giftCertificates
            giftCertificates: gift_certificates,
            // @property {Boolean} showDiscountTotal
            showDiscountTotal: !!summary.discounttotal,
            // @property {String} defaultCountry
            defaultCountry: default_country,
            // @property {Boolean} isDefaultCountryUS
            isDefaultCountryUS: default_country === 'US',
            // @property {Array} countries
            countries: countries_list,
            // @property {Boolean} singleCountry
            singleCountry: is_single_country,
            // @property {String} singleCountryCode
            singleCountryCode: is_single_country ? countries_list[0].code : '',
            // @property {String} shipToText
            shipToText: shipping_zip_code || selected_country.name,
            // @property {String} singleCountryName
            singleCountryName: is_single_country ? countries_list[0].name : '',
            // @property {String} shippingZipCode
            shippingZipCode: shipping_zip_code || '',
            // @property {Boolean} showPaypalButton
            showPaypalButton:
                Configuration.get('siteSettings.checkout.paypalexpress.available', 'F') === 'T',
            // @property {String} paypalButtonImageUrl
            paypalButtonImageUrl: Configuration.get(
                'paypalButtonImageUrl',
                'https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png'
            ),
            // @property {Boolean} showProceedButton
            showProceedButton: Configuration.get('siteSettings.sitetype') === 'STANDARD',
            // @property {String} urlLogin
            urlLogin: this.getUrlLogin(),
            // @property {Boolean} isPriceEnabled
            isPriceEnabled: !ProfileModel.getInstance().hidePrices(),
            // @property {Boolean} showPickupInStoreLabel
            showPickupInStoreLabel: this.model.getPickupInStoreLines().length > 0,
            // @property {Boolean} areAllItemsPickupable
            areAllItemsPickupable:
                this.model.getPickupInStoreLines().length === this.model.get('lines').length,
            // @property {String} summaryLabel
            taxLabel: Configuration.get('summaryTaxLabel')
                ? Configuration.get('summaryTaxLabel')
                : 'Tax',
            // @property {Boolean} hasShippingAddrress
            hasShippingAddrress: is_estimated_shipping_valid,
			showLoginPage: ((digitalItems.length > 0) && (profileModel.get('firstname') === 'Guest') && (profileModel.get('lastname') === 'Shopper'))
        };
        // @class Cart.Summary.View
    }
});

export = existingView;

