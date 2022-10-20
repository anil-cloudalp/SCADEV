<div class="header-message" data-view="Message.Placeholder"></div>
{{#if isMusicianResourcePage}}
	<div class="header-main-wrapper">
		<div class="header-subheader">
			<div data-cms-area="header_custom_banner_top" data-cms-area-filters="global"></div>
			<div class="header-subheader-container">
			<a class="header-profile-search"  href="/musicians-resource" >New Search</a>
			<span class="musician-separator">  | </span>
				<div class="header-menu-profile" id="musician-header-profile" data-view="MusicianResourceHeader.Profile"></div>
				<div class="header-menu-cart-musician">
					<div class="header-menu-cart-dropdown" >
						<div data-view="Header.MiniCart"></div>
					</div>
				</div>
			</div>
		</div>
		<nav class="header-main-nav">

			<div id="banner-header-top" class="content-banner banner-header-top" data-cms-area="header_banner_top" data-cms-area-filters="global"></div>

			<div class="header-sidebar-toggle-wrapper">
				<button class="header-sidebar-toggle" data-action="musician-header-sidebar-show">
					<i class="header-sidebar-toggle-icon"></i>
				</button>
			</div>
			<div class="header-right-menu-musician">
				<div class="header-menu-cart">
					<div class="header-menu-cart-dropdown" >
						<div data-view="Header.MiniCart"></div>
					</div>
				</div>
			</div>

			<div class="header-content">
				<div class="musician-header-logo-wrapper">
					<a class="musician-header-logo" href="/" data-touchpoint="{{headerLinkTouchPoint}}" data-hashtag="#" title="{{headerLinkTitle}}">
						{{#if logoUrl}}
						<img class="musician-header-logo-image" src="{{getThemeAssetsPathWithDefault logoUrl 'img/nph-logo-lg.jpg'}}" alt="{{siteName}}">
						{{else}}
						<span class="musician-header-logo-sitename">
						{{siteName}}
						</span>
						{{/if}}
					</a>
					<a class="musician-header-logo2" href="/musicians-resource" data-touchpoint="{{headerLinkTouchPoint}}" data-hashtag="#musicians-resource" title="{{headerLinkTitle}}">
						{{#if logoUrl}}
						<img class="musician-header-logo-image" src="{{getThemeAssetsPathWithDefault logoUrl 'img/musician-resource-page.jpg'}}" alt="{{siteName}}">
						{{else}}
						<span class="musician-header-logo-sitename">
						{{siteName}}
						</span>
						{{/if}}
					</a>
				</div>
			</div>

			<div id="banner-header-bottom" class="content-banner banner-header-bottom" data-cms-area="header_banner_bottom" data-cms-area-filters="global"></div>
		</nav>
	</div>
	<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>
	<div class="musician-header-secondary-wrapper" data-view="Header.Menu" data-phone-template="header_sidebar" data-tablet-template="header_sidebar"></div>
{{else}}
	<div class="header-main-wrapper">
		<div class="header-subheader">
			<div data-cms-area="header_custom_banner_top" data-cms-area-filters="global"></div>
			<div class="header-subheader-container">
				<div class="header-subheader-links">
				<a href="tel:800-662-6022" class="phone">800-662-6022</a> <span class="separator"> | </span>
				</div>
				<div class="header-menu-profile" data-view="Header.Profile"></div>
					<!--ul class="header-subheader-options">
						{{#if showLanguagesOrCurrencies}}
						<li class="header-subheader-settings">
							<a href="#" class="header-subheader-settings-link" data-toggle="dropdown" title="{{translate 'Settings'}}">
								<i class="header-menu-settings-icon"></i>
								<i class="header-menu-settings-carret"></i>
							</a>
							<div class="header-menu-settings-dropdown">
								<h5 class="header-menu-settings-dropdown-title">{{translate 'Site Settings'}}</h5>
								{{#if showLanguages}}
									<div data-view="Global.HostSelector"></div>
								{{/if}}
								{{#if showCurrencies}}
									<div data-view="Global.CurrencySelector"></div>
								{{/if}}
							</div>
						</li>
						{{/if}}
						<li data-view="StoreLocatorHeaderLink"></li>
						<li data-view="RequestQuoteWizardHeaderLink"></li>
						<li data-view="QuickOrderHeaderLink"></li>
					</ul-->
			</div>
		</div>
		<nav class="header-main-nav">

			<div id="banner-header-top" class="content-banner banner-header-top" data-cms-area="header_banner_top" data-cms-area-filters="global"></div>

			<div class="header-sidebar-toggle-wrapper">
				<button class="header-sidebar-toggle" data-action="header-sidebar-show">
					<i class="header-sidebar-toggle-icon"></i>
				</button>
			</div>

			<div class="header-content">
				<div class="header-logo-wrapper">
					<div data-view="Header.Logo"></div>
				</div>


				<div class="header-right-menu">
					
					<!--div class="header-menu-locator-mobile" data-view="StoreLocatorHeaderLink"></div>
					<div class="header-menu-searchmobile" data-view="SiteSearch.Button"></div-->
					<div class="header-menu-cart">
						<div class="header-menu-cart-dropdown" >
							<div data-view="Header.MiniCart"></div>
						</div>
					</div>
				</div>
				<div data-view="SiteSearch" class="header-search-div"></div>
			</div>

			<div id="banner-header-bottom" class="content-banner banner-header-bottom" data-cms-area="header_banner_bottom" data-cms-area-filters="global"></div>
		</nav>
	</div>

	<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>
	<div class="header-secondary-wrapper" data-view="Header.Menu" data-phone-template="header_sidebar" data-tablet-template="header_sidebar">
	</div>
{{/if}}
	

	



{{!----
Use the following context variables when customizing this template: 
	
	profileModel (Object)
	profileModel.addresses (Array)
	profileModel.addresses.0 (Array)
	profileModel.creditcards (Array)
	profileModel.firstname (String)
	profileModel.paymentterms (undefined)
	profileModel.phoneinfo (undefined)
	profileModel.middlename (String)
	profileModel.vatregistration (undefined)
	profileModel.creditholdoverride (undefined)
	profileModel.lastname (String)
	profileModel.internalid (String)
	profileModel.addressbook (undefined)
	profileModel.campaignsubscriptions (Array)
	profileModel.isperson (undefined)
	profileModel.balance (undefined)
	profileModel.companyname (undefined)
	profileModel.name (undefined)
	profileModel.emailsubscribe (String)
	profileModel.creditlimit (undefined)
	profileModel.email (String)
	profileModel.isLoggedIn (String)
	profileModel.isRecognized (String)
	profileModel.isGuest (String)
	profileModel.priceLevel (String)
	profileModel.subsidiary (String)
	profileModel.language (String)
	profileModel.currency (Object)
	profileModel.currency.internalid (String)
	profileModel.currency.symbol (String)
	profileModel.currency.currencyname (String)
	profileModel.currency.code (String)
	profileModel.currency.precision (Number)
	showLanguages (Boolean)
	showCurrencies (Boolean)
	showLanguagesOrCurrencies (Boolean)
	showLanguagesAndCurrencies (Boolean)
	isHomeTouchpoint (Boolean)
	cartTouchPoint (String)

----}}
