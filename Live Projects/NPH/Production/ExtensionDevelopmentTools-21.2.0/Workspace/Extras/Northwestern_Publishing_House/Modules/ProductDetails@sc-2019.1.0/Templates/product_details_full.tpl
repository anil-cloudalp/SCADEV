<div class="product-details-full">
	<div data-cms-area="item_details_banner" data-cms-area-filters="page_type"></div>

	<header class="product-details-full-header">
		<div id="banner-content-top" class="product-details-full-banner-top"></div>
	</header>
	<!--div class="product-details-full-divider-desktop"></div-->
	<article class="product-details-full-content" itemscope itemtype="https://schema.org/Product">
		<meta itemprop="url" content="{{itemUrl}}">
		<div id="banner-details-top" class="product-details-full-banner-top-details"></div>
		{{#if backtosearch}}
				<div  class="header-profile-welcome-link product-details-full-actions-custom2"><a href="{{backtosearchresultUrl}}">Return to search results</a></div>
		{{/if}}
		<section class="product-details-full-main-content">
			<div class="product-details-full-content-header">

				<div data-cms-area="product_details_full_cms_area_1" data-cms-area-filters="page_type"></div>

				<h1 class="product-details-full-content-header-title" itemprop="name">{{pageHeader}}</h1>
				{{#if model.item.custitem_nph_subtitle}}
				<div class="product-details-full-subtitle">{{model.item.custitem_nph_subtitle}}</div>
				{{/if}}
				<div data-view="Product.Sku"></div>
				{{#if info}}<div class="facets-item-cell-list-price" style="color:#c01a29" >Previously Purchased</div>{{/if}}
				<div class="product-details-full-rating" data-view="Global.StarRating"></div>
				{{#if model.item.storedescription}}
				<div class="product-details-full-description">{{{model.item.storedescription}}} <a id="goto-description">Read More</a></div>
				{{/if}}
				<div data-cms-area="item_info" data-cms-area-filters="path"></div>
			</div>
			<div class="product-details-full-main-content-left">
				<div class="product-details-full-image-gallery-container">
					<div id="banner-image-top" class="content-banner banner-image-top"></div>
					<div data-view="Product.ImageGallery"></div>
					<div id="banner-image-bottom" class="content-banner banner-image-bottom"></div>

					<div data-cms-area="product_details_full_cms_area_2" data-cms-area-filters="path"></div>
					<div data-cms-area="product_details_full_cms_area_3" data-cms-area-filters="page_type"></div>
				</div>
			</div>

			<div class="product-details-full-main-content-right">
			<div class="product-details-full-divider"></div>

			<div class="product-details-full-main">
				{{#if isItemProperlyConfigured}}
					<form id="product-details-full-form" data-action="submit-form" method="POST">

						<section class="product-details-full-info">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</section>
						
						

						<div data-cms-area="product_details_full_cms_area_4" data-cms-area-filters="path"></div>

						

						
						<div data-view="Quantity.Pricing"></div>
						<div class="product-details-full-stockinfo">Availability: <b>{{#if model.item.isinstock}} In Stock{{else}} Out Of Stock {{/if}}</b></div>
						
						<div data-view="Product.Stock.Info"></div>
						{{#if isOnSale}}
							<div class="on_sale_message">{{OnSaleMessage}}</div>
						{{/if}}
						<div data-view="Product.Subitems"></div>
						
						<div class="product-details-full-options">
							<div data-view="Product.ImprintOption"></div>
							<section data-view="Product.Options"></section>
							
							{{#if isMatrixItem}}
							<!-- extra subscription options starts-->
							<div class="subscription-options">
								<div class="is-gift-option">
									<div class="">
										<label><span class="input-required">*</span>Is this a Gift?</label>
										<div class="subscription-options-radio-btns input-container subs_isgift-radio">
											<label><input type="radio" name="subs_isgift" value="T"> Yes</label>
											<br/>
											<label><input type="radio" name="subs_isgift" value="F"> No</label>
										</div>
									</div>
									<div class="">
										<label>Existing Subscription Number (If applicable, it begins with a P)</label>
										<div class="input-container">
											<input type="text" name="existing_subs_number" maxlength="30"/>
										</div>
									</div>
								
									<div class="yes-zone">
										<label><span class="input-required">*</span>Recipient's Name</label>
										<div class="input-container">
											<input type="text" name="subs_recipient_name" class="required-subs-field" maxlength="20"/>
										</div>
									</div>
									<div class="yes-zone">
										<label><span class="input-required">*</span>Recipient's Address</label>
										<div class="input-container">
											<input type="text" name="subs_recipient_addr1" class="required-subs-field" maxlength="30"/>
										</div>
									</div>
									<div class="yes-zone">
										<label><span class="input-required">*</span>Recipient's City</label>
										<div class="input-container">
											<input type="text" name="subs_recipient_city" class="required-subs-field" maxlength="20"/>
										</div>
									</div>
									<div class="yes-zone">
										<label><span class="input-required">*</span>Recipient's Country</label>
										<div class="input-container">
											<select name="subs_recipient_country" class="required-subs-field">
												<option value="">-- Please Select --</option>
												{{#each countries}}
													<option value="{{this.code}}">{{this.name}}</option>
												{{/each}}
											</select>
										</div>
									</div>
									<div class="yes-zone">
										<label><span class="input-required">*</span>Recipient's State</label>
										<div class="input-container subs_recipient_state_content">
											<input type="text" name="subs_recipient_state" class="required-subs-field" maxlength="20"/>
										</div>
									</div>
									
									<div class="yes-zone">
										<label><span class="input-required">*</span>Recipient's Zip Code</label>
										<div class="input-container">
											<input type="number" name="subs_recipient_zip" class="required-subs-field"/>
										</div>
									</div>
									<div class="yes-zone">
										<label><span class="input-required">*</span>Recipient's Email</label>
										<div class="input-container">
											<input type="email" name="subs_recipient_email" class="required-subs-field" maxlength="30"/>
										</div>
									</div>
									<div class="yes-zone">
										<label>Recipient's Existing Subscription Number (If applicable, it begins with a P)</label>
										<div class="input-container">
											<input type="text" name="recipient_subs_number" maxlength="20"/>
										</div>
									</div>
									<div class="yes-zone">
										<label>Gift Enclosure Note</label>
										<div class="input-container">
											<input type="text" name="subs_gift_note" maxlength="160"/>
										</div>
									</div>
									<div class="yes-zone">
										<label><span class="input-required">*</span>Send Renewal Notice To</label>
										<div class="subscription-options-radio-btns input-container subs_Renewal_notice-radio">
											<label><input type="radio" name="subs_Renewal_notice" value="gift-giver"> Gift Giver</label>
											<br/>
											<label><input type="radio" name="subs_Renewal_notice" value="recipient"> Recipient</label>
										</div>
									</div>
								</div>
								<div class="send-renewal-notice">
									<div class="no-zone">
										<label><span class="input-required">*</span>Send Renewal Notice Via</label>
										<div class="input-container">
											<select name="subs_Renewal_notice_via" class="required-subs-field">
												<option value="">-- Please Select --</option>
												<option value="Email">Email</option>
												<option value="Mail">Mail</option>
											</select>
										</div>
									</div>
								</div>
								<div class="">
									<label>Comments</label>
									<div class="input-container last">
										<textarea name="subs_comments" maxlength="160"></textarea>
									</div>
								</div>
								<div class="input-required">* Required Fields</div>
							</div>
							<!-- extra subscription options ends-->
							{{/if}}
						</div>
						
						<div class="product-details-full-actions-custom">
							{{#unless hasSubItems}}
								<div class="product-details-full-price-content" data-view="Product.Price"></div>
							{{/unless}}
							
							{{#if isPriceEnabled}}
							<div class="product-details-full-cart-content">
							
								{{#unless hasSubItems}}
									<div data-view="Quantity"></div>
								{{/unless}}
								
								<div data-view="MainActionView"></div>
							</div>
							{{/if}}
						</div>
						{{#if isPriceEnabled}}
							<div class="product-details-full-actions-custom2">
							<div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div>
							<!--a class="add-to-compare">Add to Compare</a-->
							</div>
						{{/if}}

							<!--section class="product-details-full-actions">
								<div class="product-details-full-actions-container">
									

									<div data-view="ProductDetails.AddToQuote" class="product-details-full-actions-addtoquote"></div>
								</div>

							</section-->
						

						<div data-view="StockDescription"></div>
						<!--div data-view="SocialSharing.Flyout" class="product-details-full-social-sharing"></div-->

						<div class="product-details-full-main-bottom-banner">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</div>
					</form>
				{{else}}
					<div data-view="GlobalViewsMessageView.WronglyConfigureItem"></div>
				{{/if}}

				<div id="banner-details-bottom" class="product-details-full-banner-details-bottom" data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>
			</div>
			</div>

		</section>

		<div data-cms-area="product_details_full_cms_area_5" data-cms-area-filters="page_type"></div>
		<div data-cms-area="product_details_full_cms_area_6" data-cms-area-filters="path"></div>

		<section data-view="Product.Information"></section>

		<div class="product-details-full-divider-desktop"></div>

		<div data-cms-area="product_details_full_cms_area_7" data-cms-area-filters="path"></div>

		<div data-view="ProductReviews.Center"></div>

		<div data-cms-area="product_details_full_cms_area_8" data-cms-area-filters="path"></div>

		<div class="product-details-full-content-related-items">
			<div data-view="Related.Items"></div>
		</div>

		<div class="product-details-full-content-correlated-items">
			<div data-view="Correlated.Items"></div>
		</div>
		<div id="banner-details-bottom" class="content-banner banner-details-bottom" data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
	</article>
</div>


{{!----
Use the following context variables when customizing this template:

	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.options (Array)
	model.options.0 (Object)
	model.options.0.cartOptionId (String)
	model.options.0.itemOptionId (String)
	model.options.0.label (String)
	model.options.0.type (String)
	model.location (String)
	model.fulfillmentChoice (String)
	pageHeader (String)
	itemUrl (String)
	isItemProperlyConfigured (Boolean)
	isPriceEnabled (Boolean)

----}}
