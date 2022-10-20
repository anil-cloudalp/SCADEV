// @module mia.instafeed.instafeedExt
define('mia.instafeed.instafeedExt.View'
,	[
	'mia_instafeed_instafeedext.tpl'
	
	,	'mia.instafeed.instafeedExt.SS2Model'
	,	'jQuery'
	,	'Backbone'
	, 	'Instafeed'
	,	"jquery.slick"
	,	'SC.Configuration'
    ]
, function (
	mia_instafeed_instafeedext_tpl
	
	,	instafeedExtSS2Model
	,	jQuery
	,	Backbone
	,	Instafeed
	,	slick
	,	Configuration
)
{
    'use strict';

	// @class mia.instafeed.instafeedExt.View @extends Backbone.View
	return Backbone.View.extend({ 

		template: mia_instafeed_instafeedext_tpl


	,	initialize: function initialize(options) {
		var access_token = Configuration.get('instagramApi.accessKey');
		var sort_by = Configuration.get('instagramApi.sortBy');
		var getData = Configuration.get('instagramApi.getData');
		var thumbnail = Configuration.get('instagramApi.getData');
			$(()=>{
			var self = this;
			var instafeeda = new Instafeed({
				accessToken: access_token,
				sortBy:sort_by,
				get:getData,
				resolution:thumbnail,
				after: function() {
					self.$('.instafeed').slick(self.sliderSetting);
				},
				template:'<div class="gallery-item" data-username="{{username}}" tabindex="0"><div class="image-section" style="background:url({{image}});background-position: top center;background-size: cover;background-repeat: no-repeat;"><a class="gallery-item-info" href="{{link}}"></a></div></div>'
				
			});
			if ($('#instafeed').length !== 0 ) {
				instafeeda.run();
			}
		});
		
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}
		//@method getContext @return mia.instafeed.instafeedExt.View.Context
	,	getContext: function getContext(data)
		{
			var sliderSetting = {
				dots:Configuration.get('instagramApi.sliderDots'),
				infinite: Configuration.get('instagramApi.infinite'),
				slidesToShow:Configuration.get('instagramApi.slidesToShow'),
				slidesToScroll: Configuration.get('instagramApi.slidesToScroll'),
				arrows: Configuration.get('instagramApi.arrow'),
				adaptiveHeight: Configuration.get('instagramApi.adaptiveHeight'),
				autoplay: Configuration.get('instagramApi.autoplay'),
				responsive:Configuration.get('Resopnsiveness')
				
				
			}
			this.sliderSetting =sliderSetting;

			//@class mia.instafeed.instafeedExt.View.Context
			return {
				
			};
		}
	});
});
