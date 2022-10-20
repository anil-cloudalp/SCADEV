// @module Kodella.CCTProductTPLOne.CCTProductTPLOne
define('Kodella.CCTProductTPLOne.CCTProductTPLOne.View'
,	[
	'CustomContentType.Base.View',
	'kodella_cctproducttplone_cctproducttplone.tpl'
    ]
, function (
	CustomContentTypeBase,
	kodella_cctproducttplone_cctproducttplone_tpl
)
{
    'use strict';

	// @class Kodella.CCTProductTPLOne.CCTProductTPLOne.View @extends Backbone.View

	return CustomContentTypeBase.extend({
		template: kodella_cctproducttplone_cctproducttplone_tpl
	
	  , events: {
		  'click [data-banner="cct-product-one"]': 'setOptions'
		}
	
	  , install: function install (settings, context_data)
		{
		  return this._install(settings, context_data);
		}

	
	
	  , getContext: function getContext ()
		{
			
		  return {
			title: this.settings.custrecord_kd_cct_header_title,
			subtitle: this.settings.custrecord_kd_subheader,
			prod_image1: this.settings.custrecord_kd_product1_image,
			key_benefits1: this.settings.custrecord_kd_keybenefits1,
			prod_description1: this.settings.custrecord_kd_description1,
			prod_image2: this.settings.custrecord_kd_product2_image,
			key_benefits2: this.settings.custrecord_kd_keybenefits2,
			prod_description2: this.settings.custrecord_kd_description2,
			prod_image3: this.settings.custrecord_kd_product3_image,
			key_benefits3: this.settings.custrecord_kd_keybenefits3,
			prod_description3: this.settings.custrecord_kd_description3
		  }
		}
	  });
});
