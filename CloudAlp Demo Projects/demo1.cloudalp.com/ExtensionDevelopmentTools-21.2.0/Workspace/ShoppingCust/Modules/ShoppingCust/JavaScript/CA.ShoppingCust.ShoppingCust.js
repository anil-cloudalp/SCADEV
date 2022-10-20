
define(
	'CA.ShoppingCust.ShoppingCust'
	, [
		'CA.ShoppingCust.ShoppingCust.View'
		, 'Header.View'
		, 'Home.View'
		, 'Header.Menu.View'
		, 'Utils'
		, 'underscore'
	]
	, function (
		ShoppingCustView
		, HeaderView
		, HomeView
		, HeaderMenuView
		, Utils
		, _
	) {
		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');

				HomeView.prototype.initSlider = _.wrap(HomeView.prototype.initSlider, function initSlider(fn) {
					fn.apply(this, _.toArray(arguments).slice(1));
					if (jQuery(window).width() < 768) {
						Utils.initBxSlider(this.$('.home-banner-text'), {
							controls: true,
							maxSlides: 1,
							minSlides: 1,
							moveSlides: 1,
							pager: false,
							preloadImages: "all",
							nextText: '<a class="home-banner-prev-icon"></a>',
							prevText: '<a class="home-banner-next-icon"></a>',
							touchEnabled: true,
							infiniteLoop: true,
							autoControls: true,
							speed: 600

						});
					}
				});

				_.extend(HeaderView.prototype, {
					verifyShowSiteSearch: _.wrap(HeaderView.prototype.verifyShowSiteSearch, function (...args) {
						if (this.$('[data-action="show-sitesearch"]').length > 0) {
							let hash = Backbone.history.getFragment() || '';
							hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
							const is_home = hash === '' || hash === '/';
						}

					})
					, hideSiteSearch: _.wrap(HeaderView.prototype.hideSiteSearch, function (...args) {
						// This hide Sitesearch div
						// if (Utils.getDeviceType() == 'phone') { this.$('[data-type="SiteSearch"]').hide(); }
						this.$('[data-type="SiteSearch"]').hide();
					})
					, showSidebar: _.wrap(HeaderView.prototype.showSidebar, function (...args) {
						jQuery('#main').addClass('header-sidebar-opened');
						jQuery('.header-secondary-wrapper').css("width", "100%");
						jQuery('.sidebar').css("overflow-y", "auto");
					})


				});

				//HeaderMenuView sider bar
				var eventsHeaderMenuView = HeaderMenuView.prototype.events;
				eventsHeaderMenuView['click .header-mobile-en-icon'] = "menuopencust";
				eventsHeaderMenuView['click [data-action="header-sidebar-nav-close"] '] = "closeMenuSideBar";
				eventsHeaderMenuView['click [data-action="dropdown-arrow1"] '] = "dropDownArrow1";
				eventsHeaderMenuView['click  [data-action="dropdown-sub_catagories"] '] = "dropDownSubCatagories";
				HeaderMenuView.prototype.events = eventsHeaderMenuView;
				_.extend(HeaderMenuView.prototype, {
					menuopencust: function () {
						this.$(".header-mobile-language-tab").toggle();
					},
					closeMenuSideBar: function () {
						$('.header-secondary-wrapper').css("width", "0");
						$('#main').removeClass('header-sidebar-opened');

					},
					dropDownArrow1: function (e) {
						jQuery(e.currentTarget).closest('li').toggleClass("showMenu");
					},
					dropDownSubCatagories: function (e) {
						jQuery(e.currentTarget).closest('li').toggleClass("showSubMenu");
					}
				});
				//HeaderMenuView end
			}
		};
	});
