// @module Kodella.ProductSalesTemplate2.ProductSalesPage2
define('Kodella.ProductSalesTemplate2.ProductSalesPage2.View'
	, [
		'kodella_productsalestemplate2_productsalespage2.tpl'

		, 'Kodella.ProductSalesTemplate2.ProductSalesPage2.SS2Model'

		, 'CustomContentType.Base.View'
	]
	, function (
		kodella_productsalestemplate2_productsalespage2_tpl

		, ProductSalesPage2SS2Model

		, CustomContentTypeBaseView
	) {
		'use strict';

		return CustomContentTypeBaseView.extend({

			template: kodella_productsalestemplate2_productsalespage2_tpl

			, events: {
				'click [data-banner="psp2"]': 'setOptions'
			}

			, install: function install(settings, context_data) {
				return this._install(settings, context_data);
			}

			, getContext: function getContext() {
				return {
					heading_title: this.settings.custrecord_cctpsp2_heading,
					heading_description: this.settings.custrecord_cctpsp2_heading_description,
					product_benefits: this.settings.custrecord_cctpsp2_product_benefits,
					product_benefits_description: this.settings.custrecord_cctpsp2_product_benefits_des,
					product_benefits_image: this.settings.custrecord_cctpsp2_product_benefits_img,
					key_benefits_1: this.settings.custrecord_cctpsp2_key_benefits_1,
					key_benefits_1_title: this.settings.custrecord_cctpsp2_key_benefits_1_title,
					key_benefits_2: this.settings.custrecord_cctpsp2_key_benefits_2,
					key_benefits_2_title: this.settings.custrecord_cctpsp2_key_benefits_2_title,
					key_benefits_3: this.settings.custrecord_cctpsp2_key_benefits_3,
					key_benefits_3_title: this.settings.custrecord_cctpsp2_key_benefits_3_title,
					key_benefits_4: this.settings.custrecord_cctpsp2_key_benefits_4,
					key_benefits_4_title: this.settings.custrecord_cctpsp2_key_benefits_4_title,
					key_benefits_5: this.settings.custrecord_cctpsp2_key_benefits_5,
					key_benefits_5_title: this.settings.custrecord_cctpsp2_key_benefits_5_title,
					key_benefits_6: this.settings.custrecord_cctpsp2_key_benefits_6,
					key_benefits_6_title: this.settings.custrecord_cctpsp2_key_benefits_6_title,
					key_benefits_7: this.settings.custrecord_cctpsp2_key_benefits_7,
					key_benefits_7_title: this.settings.custrecord_cctpsp2_key_benefits_7_title,
					key_benefits_8: this.settings.custrecord_cctpsp2_key_benefits_8,
					key_benefits_8_title: this.settings.custrecord_cctpsp2_key_benefits_8_title,
					key_benefits_9: this.settings.custrecord_cctpsp2_key_benefits_9,
					key_benefits_9_title: this.settings.custrecord_cctpsp2_key_benefits_9_title,
					customer_quote_title: this.settings.custrecord_cctpsp2_customers_quote_title,
					customer_quote: this.settings.custrecord_cctpsp2_customers_quote,
					customer_quote_photo: this.settings.custrecord_cctpsp2_customers_photo,
					product_features_title: this.settings.custrecord_cctpsp2_product_features,
					product_features_description: this.settings.custrecord_cctpsp2_product_features_des,
				};
			}
		});
	});
