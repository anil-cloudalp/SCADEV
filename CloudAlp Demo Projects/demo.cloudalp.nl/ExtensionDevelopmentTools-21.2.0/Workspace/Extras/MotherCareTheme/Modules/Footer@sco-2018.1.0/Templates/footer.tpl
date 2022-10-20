{{!-- Edited for Threads Theme --}}


<div class="footer-content">

    <div id="banner-footer" class="content-banner banner-footer" data-cms-area="global_banner_footer"
        data-cms-area-filters="global"></div>

    <div id="banner-footer-custom" class="content-banner banner-footer" data-cms-area="global_banner_footer_custom"
        data-cms-area-filters="global"></div>

    <!--section class="footer-content-upper-section-container">
        <div class="footer-content-upper-section">
          {{#if extraFooterViewContext.showLegacyNewsletter}}
            {{#if extraFooterViewContext.title}}
              <h5 class="footer-content-upper-section-title">{{extraFooterViewContext.title}}</h5>
            {{/if}}
            <div data-view="FooterContent" class="footer-content-newsletter-container"></div>
          {{else}}
            <div class="newsletter-cct-area" data-cms-area="newsletter-cct-area" data-cms-area-filters="global"></div>
          {{/if}}
        </div>
    </section-->

    {{!-- <section class="footer-content-middle-section-container">
        <div class="footer-content-middle-section">


            <div class="footer-columns">
                {{#if extraFooterViewContext.col1Links}}
                    <div class="footer-column-links">
                        <ul>
                            {{#each extraFooterViewContext.col1Links}}
                                {{#if href}}
                                    <li class="footer-column-link-listitem"><a class="footer-column-link"
                                            {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                            data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}"
                                            data-toggle="collapse">{{text}}</a></li>
                                {{else}}
                                    <li class="footer-column-heading-listitem">
                                        <h4 class="footer-column-heading">{{text}}
                                            <span>
                                                <i class="footer-column-heading-icon"></i>
                                            </span>
                                        </h4>
                                    </li>
                                {{/if}}
                            {{/each}}
                        </ul>
                    </div>
                {{/if}}
                {{#if extraFooterViewContext.col2Links}}
                    <div class="footer-column-links">
                        <ul>
                            {{#each extraFooterViewContext.col2Links}}
                                {{#if href}}
                                    <li class="footer-column-link-listitem"><a class="footer-column-link"
                                            {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                            data-touchpoint="{{datatouchpoint}}"
                                            data-target="{{datatarget}}">{{text}}</a></li>
                                {{else}}
                                    <li class="footer-column-heading-listitem">
                                        <h4 class="footer-column-heading">{{text}}
                                            <span>
                                                <i class="footer-column-heading-icon"></i>
                                            </span>
                                        </h4>
                                    </li>
                                {{/if}}
                            {{/each}}
                        </ul>
                    </div>
                {{/if}}
                {{#if extraFooterViewContext.col3Links}}
                    <div class="footer-column-links">
                        <ul>
                            {{#each extraFooterViewContext.col3Links}}
                                {{#if href}}
                                    <li class="footer-column-link-listitem"><a class="footer-column-link"
                                            {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                            data-touchpoint="{{datatouchpoint}}"
                                            data-target="{{datatarget}}">{{text}}</a></li>
                                {{else}}
                                    <li class="footer-column-heading-listitem">
                                        <h4 class="footer-column-heading">{{text}}
                                            <span>
                                                <i class="footer-column-heading-icon"></i>
                                            </span>
                                        </h4>
                                    </li>
                                {{/if}}
                            {{/each}}
                        </ul>
                    </div>
                {{/if}}
                {{#if isPhoneDevice}}
                    {{#if extraFooterViewContext.col4Links}}
                        <div class="footer-column-links">
                            <ul>
                                {{#each extraFooterViewContext.col4Links}}
                                    {{#if href}}
                                        <li class="footer-column-link-listitem"><a class="footer-column-link"
                                                {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                                data-touchpoint="{{datatouchpoint}}"
                                                data-target="{{datatarget}}">{{text}}</a></li>
                                    {{else}}
                                        <li class="footer-column-heading-listitem">
                                            <h4 class="footer-column-heading">{{text}}
                                                <span>
                                                    <i class="footer-column-heading-icon"></i>
                                                </span>
                                            </h4>
                                        </li>
                                    {{/if}}
                                {{/each}}
                            </ul>
                        </div>
                    {{/if}}
                {{/if}}
                {{#if extraFooterViewContext.socialMediaLinks}}
                    {{#unless isPhoneDevice}}
                        <div class="footer-content-social">
                            <h4 class="footer-content-social-heading">{{translate 'connect'}}</h4>
                            <!--div class="footer-logo-view-container" data-view="Footer.Logo.View"></div-->
                            <ul class="footer-content-social-list">
                                {{#if extraFooterViewContext.socialMediaLinksTitle}}
                                    <li class="footer-content-social-media-links-title">
                                        {{extraFooterViewContext.socialMediaLinksTitle}}
                                    </li>
                                {{/if}}
                                {{#each extraFooterViewContext.socialMediaLinks}}
                                    <li><a {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                            data-touchpoint="{{datatouchpoint}}" data-target="{{datatarget}}"
                                            class="footer-content-social-link" target="_blank">{{#if icon}}<i
                                                    class="footer-content-social-icon icon-{{icon}}"></i>
                                            {{else}}{{text}}{{/if}}</a>
                                    </li>
                                {{/each}}
                            </ul>
                        </div>
                    {{/unless}}
                {{/if}}
                {{#if extraFooterViewContext.col4Links}}
                    {{#unless isPhoneDevice}}
                        <div class="footer-column-links">
                            <ul>
                                {{#each extraFooterViewContext.col4Links}}
                                    {{#if href}}
                                        <li class="footer-column-link-listitem"><a class="footer-column-link"
                                                {{objectToAtrributes item}} data-hashtag="{{datahashtag}}"
                                                data-touchpoint="{{datatouchpoint}}"
                                                data-target="{{datatarget}}">{{text}}</a></li>
                                    {{else}}
                                        <li class="footer-column-heading-listitem">
                                            <h4 class="footer-column-heading">{{text}}</h4>
                                        </li>
                                    {{/if}}
                                {{/each}}
                            </ul>
                        </div>
                    {{/unless}}
                {{/if}}
            </div>
            <div class="footer-content-newsletter-cust">
                {{#if extraFooterViewContext.showLegacyNewsletter}}
                    {{#if extraFooterViewContext.title}}
                        <!--h5 class="footer-content-upper-section-title">{{extraFooterViewContext.title}}</h5-->
                    {{/if}}
                    <div data-view="FooterContent" class="footer-content-newsletter-container"></div>
                {{else}}
                    <div class="newsletter-cct-area" data-cms-area="newsletter-cct-area" data-cms-area-filters="global">
                </div>
                {{/if}}
            </div>
    </section> --}}

    {{#with extraFooterViewContext.copyright}}
        {{#unless hide}}
            <section class="footer-content-bottom-section-container">
                <div class="footer-content-bottom-section">
                    <div class="footer-content-copyright">
                        {{#if showRange}}
                            {{translate '&copy; $(0) &#8211; $(1) $(2)' initialYear currentYear companyName}}
                            <!-- an en dash &#8211; is used to indicate a range of values -->
                        {{else}}
                            {{translate '&copy; $(0) $(1)' currentYear companyName}}
                        {{/if}}
                    </div>
                </div>
                <div data-view="Global.BackToTop"></div>
            </section>
        {{/unless}}
    {{/with}}
</div>



{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)

----}}
