{{!-- Edited for Posh Theme --}}

<div data-view="Global.BackToTop"></div>
<div class="footer-banner-wrapper">
	<div id="banner-footerFull" class="content-banner banner-footer footer-banner"
		data-cms-area="global_banner_footerFull" data-cms-area-filters="global"></div>
	<div id="banner-footer1" class="content-banner banner-footer footer-banner-1" data-cms-area="global_banner_footer1"
		data-cms-area-filters="global"></div>
	<div id="banner-footer5" class="content-banner banner-footer footer-banner-5" data-cms-area="global_banner_footer5"
		data-cms-area-filters="global"></div>
</div>

<section class="footer-wrapper">
	<div class="row footer-row">
		<div class="col-sm-3 footer-logo-section">
			<div>
				<div class="footer-logo-heading">
					<div class="footer-logo-img-cct" data-cms-area="footer_logo_img_cct_area" data-cms-area-filters="global">
					</div>
					<div class="footer-logo-content-text-cct" data-cms-area="footer_logo_content_text_cct_area"
						data-cms-area-filters="global"></div>
				</div>
			</div>
			<div class="hr-line"></div>
		</div>
		<div class="footer-office-hareeven-cct" data-cms-area="footer_office_hareeven_cct_area"
			data-cms-area-filters="global"></div>
		<div class="footer-office-niel-cct" data-cms-area="footer_office_niel_cct_area" data-cms-area-filters="global">
		</div>

		<div class="col-sm-2 footer-url-links">
			{{#if extraFooterView.col1Links}}
				<ul class="footer-content-nav">
					{{#each extraFooterView.col1Links}}
						{{#if href}}
														<li class="footer-column-link-listitem"><a class="footer-column-link" {{objectToAtrributes item}}
									data-hashtag="{{datahashtag}}" data-touchpoint="{{datatouchpoint}}"
									data-target="{{datatarget}}">{{text}}</li>
	 
						{{else}}
							<li class="footer-column-heading-listitem">
								<h3 class="footer-column-heading">{{text}}</h3>
							</li>
						{{/if}}
					{{/each}}
				</ul>
			{{/if}}
		</div>

	</div>
	<div class="footer-hr-line-two"></div>
</section>

{{#with extraFooterView.copyright}}
	{{#unless hide}}
		<section class="footer-content-copyright-wrapper">
			<div class="footer-content-copyright">
				{{!-- {{#if showRange}}
					{{translate '&copy; $(0) &#8211; $(1) $(2)' initialYear currentYear companyName}}
					<!-- an en dash &#8211; is used to indicate a range of values -->
				{{else}}
					{{translate '&copy; $(0) $(1)' currentYear companyName}}
				{{/if}} --}}
				<span class="footer-extra-info">{{#if ../extraFooterView.text}}{{{../extraFooterView.text}}}{{/if}}</span>
			</div>
		</section>
	{{/unless}}
{{/with}}


{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)


----}}