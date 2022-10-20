<div class="header-message" data-view="Message.Placeholder"></div>

<div class="header-main-wrapper">
	{{!--- {{#if extraHeaderView.bannertext}}
	<div class="header-banner-text-container">
		<div class="header-banner-text">{{extraHeaderView.bannertext}}</div>
	</div>
	{{/if}}---}}
	<nav class="header-main-nav">
		<div id="banner-header-top" class="content-banner banner-header-top" data-cms-area="header_banner_top"
			data-cms-area-filters="global"></div>

		<div class="header-sidebar-toggle-wrapper">
			<button class="header-sidebar-toggle" data-action="header-sidebar-show">
				<i class="header-sidebar-toggle-icon"></i>
			</button>
		</div>

		<div class="header-content">
			<div class="header-logo-wrapper-mobile">
				<div data-view="Header.Logo"></div>
			</div>
			<div class="header-menu-searchmobile ">
				<div class="header-logos-icons-mobile">
					<a {{#ifEquals profileModel.isLoggedIn 'F' }} style="display:inline" {{else}} style="display:none"
						{{/ifEquals}} data-hashtag="login-register" data-touchpoint="login">
						<i class="mcicon-Register reg-icon mobile-resize-icon"></i>
					</a>
					<i class="header-like-icon mobile-resize-icon header-favourite-list-open"></i>
					{{#if list}}

						<div class="favourite-list">
							<ul>
								{{#each list}}
									<li>
										<a href="#" data-touchpoint="customercenter" data-hashtag="#{{this.url}}"
											name="{{this.name}}">{{translate this.name}} ({{this.val}})</a>
									</li>
								{{/each}}
							</ul>
						</div>
					{{/if}}

					{{!-- <a  data-type="mini-cart">
					<i class="header-cart-icon mobile-resize-icon"></i>
				</a>	 --}}



					<div data-view="Header.MiniCart"></div>




					<button class="header-menu-searchmobile-link" data-action="show-sitesearch" title="{{translate 'Search'}}">
						<i class="header-menu-searchmobile-icon mobile-resize-icon"></i>
					</button>
				</div>
			</div>


			<div class="header-right-menu">

				<ul class="header-subheader-options">
					<li>
						<a href="#">
							<span class="header-menu-settings-text">{{translate 'track order'}}</span>
						</a>
					</li>

					<li>
						<a href="#">
							<span class="header-menu-settings-text">{{translate 'contact us'}}</span>
						</a>
					</li>
					<li data-view="StoreLocatorHeaderLink"></li>
					{{#if showLanguagesOrCurrencies}}
						<li class="header-subheader-settings">
							<a href="#" class="header-subheader-settings-link" data-toggle="dropdown"
								title="{{translate 'Settings'}}">
								<i class="header-menu-settings-icon"></i> <span class="header-menu-settings-text">{{translate
								'EN'}}</span>
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

				</ul>
			</div>

			{{!--- <div class="header-menu-cart">
				<div class="header-menu-cart-dropdown">
					<div data-view="Header.MiniCart"></div>
				</div>
			</div>--}}
		</div>


		<div class="row header-custom-logo-icons-search">

			<div class="col-sm-3 header-logo-wrapper header-logo-wrapper-desktop">
				<div data-view="Header.Logo"></div>
			</div>

			<div class="col-sm-6 header-site-search-tablet">
				<div class="header-site-search" data-view="SiteSearch" data-type="SiteSearch"></div>
			</div>

			<div class="col-sm-3 header-left-section-icons">

				<div class="header-logos-icons">


					<div class="header-menu-cart">
						<div class="header-menu-cart-dropdown">
							<div data-view="Header.MiniCart"></div>
						</div>
					</div>

					<i class="header-like-icon header-favourite-list-open"></i>

					{{#if list}}
						<div class="favourite-list">
							<ul>
								{{#each list}}
									<li>
										<a href="#" data-touchpoint="customercenter" data-hashtag="#{{this.url}}"
											name="{{this.name}}">{{translate this.name}} ({{this.val}})</a>
									</li>
								{{/each}}
							</ul>
						</div>
					{{/if}}

					<div class="account">
						<div class="header-menu-profile" data-view="Header.Profile">
						</div>

					</div>
				</div>

			</div>
			<div id="banner-header-bottom" class="content-banner banner-header-bottom" data-cms-area="header_banner_bottom"
				data-cms-area-filters="global"></div>
	</nav>
</div>
<div class="hr-line">
	<hr>
</div>
<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>
<div class="header-secondary-wrapper" data-view="Header.Menu" data-phone-template="header_sidebar"
	data-tablet-template="header_sidebar">
</div>
{{!--

<script>

	$('.header-favourite-list-open').click(() => {

		$('.favourite-list').toggle();
	})
</script> --}}

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
