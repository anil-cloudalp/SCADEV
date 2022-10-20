{{!-- Edited for Threads Theme --}}
<div class="sidebar">
  <div class="header-section">
    <div class="logo-mobile-view" data-view="Header.SideBarLogo.View">
      <h1 class="header-logo-text">mothercare</h1>
    </div>
    <button class="header-sidebar-toggle" data-action="header-sidebar-nav-close">
      <i class="close-icon"></i>
    </button>
  </div>
  <hr>
  <div class="header-sidebar-wrapper header-sidebar-menu-wrapper">
    <div class="header-sidebar-profile-menu" data-view="Header.Profile"></div>
  </div>
  <nav>
    <ul class="nav-links">
      {{#each categories}}
        {{#if text}}
          <li>
            <div class="iocn-link">
              {{!-- <a href="{{this.href}}" class="arrow1 {{class}}">--}}
              <a {{objectToAtrributes this}} {{#if categories}} data-action="dropdown-arrow1" {{/if}}
                class="arrow1 {{class}}">
                <span class="link_name">{{text}}</span>
                {{#if categories}}
                  <i class='bx fa-chevron-up arrow'></i>
                {{/if}}
              </a>

            </div>

            <ul class="sub-menu">
              {{#each categories}}
                <li>
                  <div class="iocn-link">
                    {{!-- <a href="{{this.href}}" class="{{#if categories}}sub_catagories1 sub_catagories{{/if}}">--}}
                    <a {{objectToAtrributes this}} {{#if categories}} data-action="dropdown-sub_catagories"
                      class="sub_catagories1 sub_catagories" {{/if}}>
                      <span class="{{#if categories}}{{class}} {{/if}} link_name_content">{{ text}}</span>
                      {{#if categories}}
                        <i class='bx fa-chevron-up sub_catagories'></i>
                      {{/if}}
                    </a>

                    {{#if categories}}
                      <ul class="sub-menu_show">
                        {{#each categories}}
                          <li>
                            <div class="iocn-link">
                              <a class="{{class}}" {{objectToAtrributes this}} name="{{text}}"><span
                                  class="link_name_content">{{ text}}</span></a>
                            </div>
                          </li>
                        {{/each}}
                      </ul>
                    {{/if}}
                </li>
              {{/each}}
              <hr class="hr-sub-menu">
            </ul>
          </li>
        {{/if}}
      {{/each}}
    </ul>
  </nav>
  <div class="header-right-mobile">
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
    <li class="header-mobile-en-icon" data-action="open-currency-lan">
      <i class="header-menu-settings-icon"> </i>
      <span class="header-menu-settings-text">{{translate 'EN'}}</span>
    </li>
    <div class="header-mobile-language-tab">
      {{#if showLanguages}}
        <div data-view="Global.HostSelector"></div>
      {{/if}}
      {{#if showCurrencies}}
        <div data-view="Global.CurrencySelector"></div>
      {{/if}}
    </div>
    {{#if showExtendedMenu}}
      <div class="header-siderbar-signout">
        <a class="header-sidebar-user-logout" href="#" data-touchpoint="logout" name="logout">
          <i class="header-sidebar-user-logout-icon"></i>
          {{translate 'Sign Out'}}
        </a>
    {{/if}}
  </div>
</div>

</div>

<script>
  // $(".header-mobile-en-icon ").click(function(){
  //   console.log('trigger');
  //   $('.header-mobile-language-tab ').toggle()
  // })


</script>





{{!----
Use the following context variables when customizing this template:

categories (Array)
showExtendedMenu (Boolean)
showLanguages (Boolean)
showCurrencies (Boolean)

----}}
