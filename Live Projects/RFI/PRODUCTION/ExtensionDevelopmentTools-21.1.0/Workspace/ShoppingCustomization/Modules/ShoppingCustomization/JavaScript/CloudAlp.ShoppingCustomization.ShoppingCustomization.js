
define(
	'CloudAlp.ShoppingCustomization.ShoppingCustomization'
,   [
		'CloudAlp.ShoppingCustomization.ShoppingCustomization.View'
	, 	'Home.View'
    , 	'Utils'
    , 	'underscore'	
	]
,   function (
		ShoppingCustomizationView
	, 	HomeView
    , 	Utils
    , 	underscore	
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			layout.on('afterShowContent', () => {
			  if ($('#content').find('.home-page').length !== 0) {
				$('.shopping-layout-content').addClass('home-new-layout');
			  } else {
				$('.shopping-layout-content').removeClass('home-new-layout');
			  }
			});
			_.extend(HomeView.prototype, {
				initSlider: function initSlider() {
					Utils.initBxSlider(this.$('.bxslider'), {
					  autoStart: true,
					  auto: true,
					  pager: true,
					  controls: false,
					  forceStart: true,
					  preloadImages: "all",
					  touchEnabled: true,
					  infiniteLoop: true,
					  responsive: true
					});
				},
				initialize: _.wrap(HomeView.prototype.initialize, function initialize(fn) {
					fn.apply(this, _.toArray(arguments).slice(1));
					this.options.application.getLayout().on('afterAppendView', this.initSlider, this);
				}),
				getContext: _.wrap(HomeView.prototype.getContext, function getContext(fn) {
					var ret = fn.apply(this, _.toArray(arguments).slice(1));
					var configSlideData = SC.CONFIGURATION.ShoppingCustomization.desktop;
						if (!_.isEmpty(configSlideData)) {
						  ret.configSlideData = configSlideData;
						}
						else{
							ret.configSlideData = [];
						}
					var configSlideMobileData = SC.CONFIGURATION.ShoppingCustomization.mobile;
						if (!_.isEmpty(configSlideMobileData)) {
						  ret.configSlideMobileData = configSlideMobileData;
						}
						else {
						  ret.configSlideMobileData = [];
						}
					var ourProducts = SC.CONFIGURATION.OurProducts.config;
						if (!_.isEmpty(ourProducts)) {
						  ret.ourProducts = ourProducts;
						}
						else {
						  ret.ourProducts = [];
						}
					return ret;
				  })
			});
			
		}
	};
});
