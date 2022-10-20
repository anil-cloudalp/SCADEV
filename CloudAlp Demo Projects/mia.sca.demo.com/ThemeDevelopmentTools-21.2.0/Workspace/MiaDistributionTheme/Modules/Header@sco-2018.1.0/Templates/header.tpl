{{!-- Edited for Horizon Theme --}}

<div class="header-message" data-view="Message.Placeholder"></div>
{{#unless isChannelUcUserNotLogin}}
<div class="header-main-wrapper{{#if isChannelUc}} ischanneluc-subheader{{/if}}">
    <nav class="header-main-nav">

        <div class="header-sidebar-toggle-wrapper">
            <button class="header-sidebar-toggle" data-action="header-sidebar-show">
                <i class="header-sidebar-toggle-icon"></i>
            </button>
        </div>

        <div class="header-content">
            <!--div class="header-logo-wrapper">
                <div data-view="Header.Logo"></div>
            </div-->
			{{#unless isChannelUc}}
            <div class="header-left-content">
				{{#if extraFooterView.socialMediaLinks}}
					<div class="footer-content-social">
						<ul class="footer-content-social-list">
						{{#each extraFooterView.socialMediaLinks}}
							<li><a {{objectToAtrributes item}} data-hashtag="{{datahashtag}}" data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}" class="footer-content-social-link" target="_blank">{{#if icon}}<i class="footer-content-social-icon icon-{{icon}}"></i>{{else}}{{text}}{{/if}}</a></li>
						{{/each}}
						</ul>
					</div>
				{{/if}}
                {{#if extraHeaderView.bannertext}}
                    <p>{{extraHeaderView.bannertext}}</p>
                {{/if}}
            </div>
			{{/unless}}

            <div class="header-right-menu">
                <ul class="header-right-menu-options">
                    <!--li class="header-menu-storelocator-list-item" data-view="StoreLocatorHeaderLink"></li>
                    <li data-view="RequestQuoteWizardHeaderLink">{{translate 'Request a Quote'}}</li-->
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
                    <!--li data-view="QuickOrderHeaderLink"></li-->
                </ul>
                

                <!--div class="header-menu-locator-mobile" data-view="StoreLocatorHeaderLink"></div>
                <div class="header-menu-searchmobile">
                    <button class="header-menu-searchmobile-link" data-action="show-sitesearch" title="{{translate 'Search'}}">
                        <i class="header-menu-searchmobile-icon"></i>
                    </button>
                </div-->
				
            </div>

        </div>
    </nav>
</div>
{{/unless}}
	<div class="logo-and-menu">
	  <div class="header-logo-wrapper">
		  <div data-view="Header.Logo"></div>
	  </div>
	  {{#unless isChannelUcUserNotLogin}}
	  <div class="login-and-cart">
		<div class="header-menu-profile" data-view="Header.Profile"></div>
		<div class="header-menu-cart">
			<div class="header-menu-cart-dropdown">
				<div data-view="Header.MiniCart"></div>
			</div>
		</div>
	</div>
	  <div class="header-secondary-wrapper" data-view="Header.Menu" data-phone-template="header_sidebar" data-tablet-template="header_sidebar"></div>
	 {{/unless}}
	</div>
	

<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>

<div class="header-site-search" data-view="SiteSearch" data-type="SiteSearch"></div>

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
