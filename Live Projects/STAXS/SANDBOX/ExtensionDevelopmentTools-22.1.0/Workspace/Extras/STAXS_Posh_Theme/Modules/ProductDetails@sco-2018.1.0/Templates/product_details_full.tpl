{{!-- Edited for Posh Theme --}}

<div class="product-details-full">
    <div data-cms-area="item_details_banner" data-cms-area-filters="page_type"></div>

    <header class="product-details-full-header">
        <div id="banner-content-top" class="product-details-full-banner-top"></div>
    </header>

    <article class="product-details-full-content">
        <div id="banner-details-top" class="product-details-full-banner-top-details"></div>

        <section class="product-details-full-main-content">
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
                <div class="product-details-full-main">
                    <div class="product-details-full-content-header">
                        <div data-cms-area="product_details_full_cms_area_1" data-cms-area-filters="page_type"></div>

                        <h2 class="product-details-full-content-header-title" itemprop="name">{{pageHeader}}</h2>
                        {{#unless isItemProperlyConfigured}}
                        <div class="product-details-full-rating" data-view="Global.StarRating"></div>
                        {{/unless}}
                        <div data-cms-area="item_info" data-cms-area-filters="path"></div>
                    </div>
                    {{#if isItemProperlyConfigured}}
                    <form id="product-details-full-form" data-action="submit-form" method="POST">

                        <section class="product-details-full-info">
                            <div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom">
                            </div>
                        </section>

                        <div data-view="Product.Sku"></div>
                        <div data-view="Quantity.Pricing"></div>

                        <div class="product-details-full-rating" data-view="Global.StarRating"></div>

                        <div data-view="Product.Stock.Info"></div>

                        <section data-view="Product.Options" class="product-details-full-product-options-container">
                        </section>

                        <div data-cms-area="product_details_full_cms_area_4" data-cms-area-filters="path"></div>

                        {{#if isPriceEnabled}}

                        <div class="row">
                            <div class="col-sm-3 col-md-3 product-qnty" data-view="Quantity"></div>
                            <div class="price-add-to-cart col-sm-9 col-md-9">
                                <div data-view="Product.Price"></div>
                                <section class="product-details-full-actions">

                                    <div class="product-details-full-actions-container">
                                        <div data-view="MainActionView"></div>
                                        <div data-view="AddToProductList"
                                            class="product-details-full-actions-addtowishlist"></div>
                                    </div>

                                </section>
                            </div>

                        </div>




                        {{/if}}

                        <div data-view="StockDescription"></div>

                        <div data-view="SocialSharing.Flyout" class="product-details-full-social-sharing"></div>

                        <div class="product-details-full-main-bottom-banner">
                            <div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom">
                            </div>
                        </div>
                    </form>
                    {{else}}
                    <div data-view="GlobalViewsMessageView.WronglyConfigureItem"></div>
                    {{/if}}


                    {{!-- <section class="product-details-full-main-product-information-container"
                        data-view="Product.Information"></section> --}}

                    {{#if isDownloadsAvailable}}
                    <section>
                        <div class="box-menu">
                            <div class="box-menu-buttons">
                                <button class="pdfs-pdp box-menu__options" type="button">
                                    <h2>Downloads</h2>
                                </button>
                            </div>
                            <div class="">
                                <div class="box-description" id="tab-pdf-downloads">
                                    <ol class="box-ol">
                                        {{#if pdfsExtras}}
                                        {{#each pdfsExtras}}
                                        <li class="box-menu-li ">
                                            <div class="box-menu-link">
                                                <a href='{{{url}}}' target="_blank" download="pdf">
                                                    <i class="{{#if pdf}} pdf-icon {{/if}}  {{#if xls}} xls-icon 
                                                    {{/if}}  {{#if doc}} doc-icon 
                                                    {{/if}} {{#if img}} img-icon 
                                                    {{/if}}"
                                                        aria-hidden="true"></i>
                                                    <p>{{name}}</p>
                                                </a>
                                            </div>
                                        </li>
                                        {{/each}}
                                        {{else}}
                                        <p class="col-sm-4">NO DATA FOUND</p>
                                        {{/if}}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    {{/if}}
                    {{!-- tabs --}}
                    <div class="custom-tabs-product">
                        <div class="tab">
                            <button class="tablinks active" data-action="tabs-change" data-id="FeaturesAdvantages"
                                id="defaultOpen">Features & Advantages</button>
                            <button class="tablinks" id="ProductCharacteristics" data-action="tabs-change"
                                data-id="Productcharacteristics">Product characteristics</button>
                        </div>
                        <div id="FeaturesAdvantages" class="tabcontent">
                            <div class="products-featuresadvantages">
                                {{#if model.item.storedetaileddescription}}
                                {{{translate model.item.storedetaileddescription}}}
                                {{else}}
                                <div class="custom-tabs-product-no-data-found">
                                    <h5 class="product-details-features-lable">No Data Found </h5>
                                </div>
                            {{/if}}
                            </div>
                        </div>

                        <div id="Productcharacteristics" class="tabcontent">
                        <table class="table  table-bordered table-sm">
                        {{#if model.item.manufacturer}}
                            <tr>
                                <th>
                                    <h5 class="product-details-features-lable">{{translate 'Manufacturer'}}</h5>
                                </th>
                                <td>
                                    <p>{{model.item.manufacturer}}</p>
                                </td>
                            </tr>
                            {{/if}}
                            {{#if model.item.custitem_staxs_store_size}}
                            <tr>
                                <th>
                                    <h5 class="product-details-features-lable">{{translate 'Size'}}</h5>
                                </th>
                                <td>
                                    <p>{{model.item.custitem_staxs_store_size}}</p>
                                </td>
                            </tr>
                            {{/if}}
                            {{#if model.item.custitem_staxs_store_packaging}}
                            <tr>
                                <th>
                                    <h5 class="product-details-features-lable">{{translate 'Packaging'}}</h5>
                                </th>
                                <td>
                                    <p>{{model.item.custitem_staxs_store_packaging}}</p>
                                </td>
                            </tr>
                            {{/if}}
                            {{#if model.item.custitem_staxs_store_dimensions}}
                            <tr>
                                <th>
                                    <h5 class="product-details-features-lable">{{translate 'Dimensions'}}</h5>
                                </th>
                                <td>
                                    <p>{{model.item.custitem_staxs_store_dimensions}}</p>
                                </td>
                            </tr>
                            {{/if}}

                            {{#unless model.item.manufacturer}}
                            {{#unless model.item.custitem_staxs_store_size}}
                            {{#unless model.item.custitem_staxs_store_packaging}}
                            {{#unless model.item.custitem_staxs_store_dimensions}}
                               <div class="custom-tabs-product-no-data-found">
                                    <h5 class="product-details-features-lable">No Data Found </h5>
                                </div>
                            {{/unless}}
                            {{/unless}}
                            {{/unless}}
                            {{/unless}}
                            </table>
                        </div>
                    </div>

                    {{!-- tabs end--}}
                    <div id="banner-details-bottom" class="product-details-full-banner-details-bottom"
                        data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>
                </div>
            </div>

        </section>

        <section class="product-details-full-bottom-content">
            <div data-cms-area="product_details_full_cms_area_5" data-cms-area-filters="page_type"></div>
            <div data-cms-area="product_details_full_cms_area_6" data-cms-area-filters="path"></div>

            <div data-cms-area="product_details_full_cms_area_7" data-cms-area-filters="path"></div>

            <div data-view="ProductReviews.Center"></div>

            <div data-cms-area="product_details_full_cms_area_8" data-cms-area-filters="path"></div>

            <div class="product-details-full-content-related-items">
                <div data-view="Related.Items"></div>
            </div>

            <div class="product-details-full-content-correlated-items">
                <div data-view="Correlated.Items"></div>
            </div>
            <div id="banner-details-bottom" class="content-banner banner-details-bottom"
                data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
        </section>
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