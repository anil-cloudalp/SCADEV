<!--<script type="text/javascript">

_linkedin_partner_id = "2481852";

window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];

window._linkedin_data_partner_ids.push(_linkedin_partner_id);

</script>
<script type="text/javascript">

(function()var s = document.getElementsByTagName("script")[0];

var b = document.createElement("script");

b.type = "text/javascript";b.async = true;

b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";

s.parentNode.insertBefore(b, s);})();

</script> -->

<noscript>

<!-- <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=2481852&fmt=gif" /> -->

</noscript>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="header-main-container">
	<div class="header-message" data-view="Message.Placeholder"></div>
	<div class="header-main-wrapper">
		<div class="header-main-nav">

			<div class="header-content">

				<div class="header-left-section">
					<!--<div data-cms-area="sdb-landmark_header_top-left-content" data-cms-area-filters="global"></div>-->
					<ul class="header-menu-actions">
						<li><a href="/contact" data-touchpoint="home" data-hashtag="#contact">Contact</a></li>
						<li> | </li>
						<li><a href="tel:1300000734">Call</a></li>
						<!--<li> | </li>
						<li><a href="https://goo.gl/maps/3JLSoLaxtmZqZrJG8"><i class="fa fa-map-marker" aria-hidden="true" target="_blank"></i> Find a dealer</a></li>-->	
						<li> | </li>
							<li data-view="StoreLocatorHeaderLink"></li> 
					</ul>
				</div>

				<div class="header-right-menu">

					<ul class="header-menu-actions">
						<!-- <li data-view="RequestQuoteWizardHeaderLink"></li> -->
						{{#if showCart}}
							<li class="background-header-order header-order-color" data-view="QuickOrderHeaderLink"></li>
						{{/if}}
						<li><a target="_blank" href="https://www.smartfreight.com/tracking">TRACK ORDER</a></li>
						<li> | </li>
					</ul>
					{{#if islogin}}
                        <ul class="header-menu-actions">
                            <li class="header-menu-myaccount-overview">
                                <a class="header-menu-myaccount-signout-link" href="#" data-touchpoint="logout" name="signout">
									<i class="header-menu-myaccount-signout-icon"></i>
                                        {{translate 'Sign Out'}}
                                </a>
                            </li>
                            <li> | </li>
                        </ul>
                    {{/if}}
								
					<div class="header-menu-profile" data-view="Header.Profile"></div>
					{{#if showCart}}
					<ul class="header-menu-actions header-menu-actions-cart">
					<!-- <li data-view="RequestQuoteWizardHeaderLink"></li> -->
						<li class="hidde-mobile"> | </li>
					<div class="header-menu-cart">
						<div class="header-menu-cart-dropdown">
							<div data-view="Header.MiniCart"></div>
						</div>
					</div>
					 <i class="fa fa-shopping-cart"></i>
					</ul>
					{{/if}}
					{{#if showLanguagesOrCurrencies}}
					<ul class="header-subheader-options-lc">
						<!--  <li> | </li> -->
						<li class="header-subheader-settings">
							<a href="#" class="header-subheader-settings-link" data-toggle="dropdown" title="{{translate 'Settings'}}">
								<i class="header-menu-settings-icon"></i>
								<!--<i class="header-menu-settings-carret"></i>-->
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
						<!--<li> | </li>  -->
					</ul>
					{{/if}}

				</div>
			</div>

		</div>

	</div>

	<div class="header-secondary-section">

		<!-- Start Mobile Toggle  -->
		<div class="header-sidebar-toggle-wrapper hamb-menu">
			<button class="header-sidebar-toggle" data-action="header-sidebar-show">
				<i class="header-sidebar-toggle-icon"></i>
			</button>
		</div>
		<!-- End Mobile Toggle -->

		<div class="header-logo-search-wrapper">
			
			<div class="header-logo-wrapper">
				<div data-view="Header.Logo"></div>
			</div>
			
			{{!--
			<!-- Header Center Message  -->
			<!--<div class="header-center-msg">
				<div data-cms-area="sdb-landmark_header_center-msg" data-cms-area-filters="global"></div>
			</div>-->
			--}}

			<div class="search-container">
				<div class="header-site-search" data-view="SiteSearch" data-type="SiteSearch"></div>
			</div>

		</div>
		
		<!-- Start Main Menu -->
		<div class="header-secondary-wrapper" data-view="Header.Menu" data-phone-template="header_sidebar" data-tablet-template="header_sidebar"></div>

	</div>

	<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>
</div>





<!-- Scroll Header -->
<!-- <div class="header-main-container header-scroll-fixed">

	<div class="header-secondary-section"> -->

		<!-- Logo -->
<!-- 		<div class="header-logo-wrapper">
			<div data-view="Header.Logo"></div>
		</div> -->
		
		<!-- Start Main Menu -->
<!-- 		<div class="header-secondary-wrapper" data-view="Header.Menu" data-phone-template="header_sidebar" data-tablet-template="header_sidebar"></div>
		
		<div class="header-scroll-right-icons"> -->
			<!-- Search -->
<!-- 			<div class="header-menu-search">
				<button class="header-menu-search-link" data-action="show-sitesearch" title="{{translate 'Search'}}">
					<i class="header-menu-search-icon"></i>
				</button>
			</div>
 -->
			<!-- Cart -->
<!-- 			<div data-view="Header.MiniCart"></div>
		</div>

	</div>
</div> -->

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
