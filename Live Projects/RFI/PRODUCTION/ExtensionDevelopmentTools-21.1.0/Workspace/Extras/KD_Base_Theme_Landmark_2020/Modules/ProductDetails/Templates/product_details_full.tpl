
<div data-cms-area="sdb-landmark_item_details_banner" data-cms-area-filters="page_type"></div>
<div class="product-details-full">

    <!-- ====================================== ORIGINAL TITLE HEADER =========================================== -->
    <!-- 	<header class="product-details-full-header">
		<div id="banner-content-top" class="product-details-full-banner-top"></div>
		<div class="product-details-full-content-header">
			<h1 class="product-details-full-content-header-title" itemprop="name">{{pageHeader}}</h1>
			<div class="row product-details-full-content-title-secondline">
				<div class="container">
					<div data-view="Product.Sku"></div>
					{{#if model.item.mpn}}
					<div class="product-line-sku-container">
						<span class="product-line-sku-label">{{translate 'MPN: '}} </span>
						<span class="Product-line-sku-value">{{model.item.mpn}}</span>
					</div>
					{{/if}}
					<div class="product-details-full-rating" data-view="Global.StarRating"></div> -->
    <!-- addition START BADGES -->
    <!-- 					<div class="pdp-badge">
					{{#if badge}}
						{{{ badge }}}
						{{/if}}
					</div> -->
    <!-- addition END BADGES -->
    <!-- 				</div>
			</div>
			<div data-cms-area="item_info" data-cms-area-filters="path"></div>
		</div>
	</header> -->
    <!-- ====================================== END ORIGINAL TITLE HEADER =========================================== -->
    <!-- <div class="product-details-full-divider-desktop"></div> -->
    <article class="product-details-full-content" itemscope itemtype="https://schema.org/Product">
        <meta itemprop="url" content="{{itemUrl}}">
        <div id="banner-details-top" class="product-details-full-banner-top-details"></div>

        <section class="product-details-full-main-content">
            <div class="product-details-full-main-content-left">
                <div class="product-details-full-image-gallery-container">
                    <div id="banner-image-top" class="content-banner banner-image-top"></div>
                    <div data-view="Product.ImageGallery"></div>
                    <div id="banner-image-bottom" class="content-banner banner-image-bottom"></div>
                </div>
                <!-- Social Sharing -->
                <!-- 				<div class="product-details-full-social-share">
					<p>Share: </p>
					<div data-view="SocialSharing.Flyout" class="product-details-full-social-sharing"></div> -->
                <!--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5720c41ce66f063f"></script>
					<div class="addthis_sharing_toolbox"></div>-->
                <!-- </div> -->
            </div>

            <div class="product-details-full-main-content-right">
                <div class="product-details-full-divider"></div>
                <div class="stock-boxes hidde-desktop">
                    <div class="stock-container" data-view="Product.Stock.Info"></div>
                    <div data-view="StockDescription"></div>
                </div>
                <!-- ======================================== NEW HEADER TITLE ======================================== -->
                <div class="product-details-full-header">
                    <div id="banner-content-top" class="product-details-full-banner-top"></div>
                    <div class="product-details-full-content-header">
                        <h1 class="product-details-full-content-header-title" itemprop="name">{{model.item.displayname}}
                        </h1>
                        <div class="row product-details-full-content-title-secondline">
                            <div class="container container-top-product">
                                <div data-view="Product.Sku"></div>

                                {{#if model.item.mpn}}
                                <div class="product-line-sku-container">
                                    <span class="product-line-sku-label">{{translate 'MPN: '}} </span>
                                    <span class="product-line-sku-value">{{model.item.itemid}}</span>
                                </div>
                                {{/if}}
                                <div class="short-description" id="short-description">
                                    {{translate model.item.featureddescription}}
                                </div>
                                <!--<div class="product-details-full-rating" data-view="Global.StarRating"></div>
								 addition START BADGES -->
                                <div class="pdp-badge">
                                    {{#if badge}} {{{ badge }}} {{/if}}
                                </div>
                                <!-- addition END BADGES -->
                            </div>
                        </div>
                        <div data-cms-area="item_info" data-cms-area-filters="path"></div>
                    </div>

                </div>
                <!-- ====================================== END NEW HEADER TITLE ====================================== -->


                <div class="product-details-full-main">
                    {{#if isItemProperlyConfigured}}

                    <div class="custom-content-short-description">
                        {{model.item.custitem_kd_short_description}}
                    </div>

                    <form id="product-details-full-form" data-action="submit-form" method="POST">

                        <section class="product-details-full-info">
                            <div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>


                            <!-- =========================== CUSTOM OPTIONS =========================== -->

                            <div class="box-extra-information">
                                {{#if model.item.custitemkd_item_tic_interchangeable_w }}
                                <div class="box-extra-information__element">
                                    <div class="box-extra-information__element--img">
                                        <img src="/site/rfi_arrow_06.svg" alt="">
                                    </div>
                                    <div class="box-extra-information__element--text">
                                        {{model.item.custitemkd_item_tic_interchangeable_w}}</div>
                                </div>
                                {{/if}}
                                {{#if model.item.custitemkd_item_tic_hdsb}}
                                <div class="box-extra-information__element">
                                    <div class="box-extra-information__element--img">
                                        <img src="/site/rfi_arrow_06.svg" alt="">
                                    </div>
                                    <div class="box-extra-information__element--text">
                                        {{model.item.custitemkd_item_tic_hdsb}}</div>
                                </div>
                                {{/if}}
                                {{#if model.item.custitemkd_item_tic_pre_t_fme_c}}
                                <div class="box-extra-information__element">
                                    <div class="box-extra-information__element--img">
                                        <img src="/site/rfi_arrow_06.svg" alt="">
                                    </div>
                                    <div class="box-extra-information__element--text">
                                        {{model.item.custitemkd_item_tic_pre_t_fme_c}}</div>
                                </div>
                                {{/if}}
                            </div>


                            <!-- ========================= END CUSTOM OPTIONS ========================= -->
                        </section>

                        <section data-view="Product.Options"></section>



                        <!-- 						{{#if isPriceEnabled}}
						<section class="product-details-full-actions clearfix">
							<div data-view="Quantity"></div>

							<div class="product-details-full-actions-container">
								<div data-view="MainActionView"></div>
								<div data-view="ProductDetails.AddToQuote" class="product-details-full-actions-addtoquote"></div>
								<div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div>
							</div>

						</section>
						{{/if}} -->



                        <div class="product-details-brief-description">
                            {{#if model.item.minimumquantity}}
                            <p class="pdp-minimumQty">(*) Minimum Quantity: {{ model.item.minimumquantity }}</p>
                            {{/if}}



                            <!-- <div class="product-line-stock">
								<p class="product-line-stock-msg-out">
									<span class="product-line-stock-icon-out"><i class="{{stockIcon}}"></i></span>
									<span class="product-line-stock-msg-out-text">{{stockMsg}}</span>
								</p>
							</div> -->

                            {{#if model.item.storedescription }}
                            <div class="this-full-width pdp-brief-description-content">
                                <h3>ABOUT THIS PRODUCT:</h3>
                                <div>{{{model.item.storedescription}}}</div>
                                {{#if model.item.custitem1 }}
                                <div class="item-brand-logo {{{model.item.custitem1}}}">{{{ model.item.custitem1 }}}
                                </div>
                                {{/if}}
                            </div>
                            {{/if}}
                            <div data-cms-area="item_info" data-cms-area-filters="path"></div>
                        </div>



                        <div class="product-details-full-main-bottom-banner">
                            <div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
                        </div>
                    </form>
                    {{else}}
                    <div data-view="GlobalViewsMessageView.WronglyConfigureItem"></div>
                    {{/if}}

                    <div id="banner-details-bottom" class="product-details-full-banner-details-bottom"
                        data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>
                </div>

                <div class="box-custom-price-and-quote" {{#unless isPriceEnabled}}
                    style="align-items: center; margin-bottom: 15px !important;" {{/unless}}>

                    <div class="sub-first-block-box-custom-price-and-quote" {{#unless isPriceEnabled}}
                        style=" z-index: 70;" {{/unless}}>
                        <div data-view="Product.Price"></div>
                    </div>
                    <div
                        class="sub-block-box-custom-price-and-quote  {{#unless isPriceEnabled}} custom-button-request-quote-edit {{/unless}}">

                        {{#if isPriceEnabled}}
                        <section class="product-details-full-actions clearfix">
                            <div data-view="Quantity"></div>

                            <div class="product-details-full-actions-container">
							{{#if Toshowcart}}
                                <div data-view="MainActionView"></div>
							{{else}}
								<div><div class="custom-button-item-page-add-to-cart" style="background-color:white !important;"></div></div>
							{{/if}}	
                                <!-- <div data-view="ProductDetails.AddToQuote" class="product-details-full-actions-addtoquote"></div> -->
                                <!-- <div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div> -->
                            </div>

                        </section>
                        {{/if}}
                        <!-- <div data-view="ProductDetails.AddToQuote" class="product-details-full-actions-addtoquote custom-button-request-quote"></div> -->
                        <div data-view="ProductDetails.AddToQuote"
                            class=" {{#if isPriceEnabled}} product-details-full-actions-addtoquote {{/if}}"></div>
                        {{#if isPriceEnabled}}
                        <div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div>
                        {{/if}}
                    </div>

                    <!-- <div data-view="Quantity.Pricing"></div> -->

                    <div data-view="Extension.Price"></div>


                </div>
                <div class="stock-boxes hidde-mobile">
                    <div class="stock-container" data-view="Product.Stock.Info"></div>

                    <div data-view="StockDescription"></div>

                </div>
        </section>

        <!--====================================================== BAR TAGS ====================================================== -->

        <!--==================================================== END BAR TAGS ==================================================== -->

        <div class="box-menu">
            <div class="box-menu-buttons">

                <button class="details-pdp box-menu__option " data-toggle="collapse" href="#details-store-description"
                    role="button" aria-expanded="false" aria-controls="details-store-description">
                    DESCRIPTION
                </button>

                <button id="custom-button-specification" class="spec-pdp box-menu__option" type="button"
                    data-toggle="collapse" data-target="#specifications-pdp" aria-expanded="false"
                    aria-controls="collapseExample">
                    SPECIFICATIONS
                </button>

                <button class="pdfs-pdp box-menu__option" type="button" data-toggle="collapse" data-target="#pdfs-pdp"
                    aria-expanded="false" aria-controls="collapseExample">
                    PDFS & DOWNLOADS
                </button>

            </div>
            <div class="box-menu-information">

                <!-- DESCRIPTION -->
                <div class="box-description custom-show custom-display-content" id="tab-description">
                    {{#if model.item.storedetaileddescription}} {{{translate model.item.storedetaileddescription}}}
                    {{/if}}
                </div>
                <!-- SPECIFICATIONS -->
                <div class="box-description" id="tab-specifications">
                    <table class="custom-table">
                        <tbody>

                            {{#if model.item.custitem_rfi_output_voltage}}{{#ifEquals model.item.custitem_rfi_output_voltage '&nbsp;'}}{{else}}
                            <tr>
                                <td>Output Voltage</td>
                                <td>{{model.item.custitem_rfi_output_voltage}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_over_temperature_range}}{{#ifEquals model.item.custitem_rfi_over_temperature_range '&nbsp;'}}{{else}}
                            <tr>
                                <td>Over Temperature Range</td>
                                <td>{{model.item.custitem_rfi_over_temperature_range}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_voltage}}{{#ifEquals model.item.custitem_rfi_voltage '&nbsp;'}}{{else}}
                            <tr>
                                <td>Voltage</td>
                                <td>{{model.item.custitem_rfi_voltage}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_capacity_battery_120}}{{#ifEquals model.item.custitem_rfi_capacity_battery_120 '&nbsp;'}}{{else}}
                            <tr>
                                <td>Capacity battery 120</td>
                                <td>{{model.item.custitem_rfi_capacity_battery_120}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_capacity_battery_100}}{{#ifEquals model.item.custitem_rfi_capacity_battery_100 '&nbsp;'}}{{else}}
                            <tr>
                                <td>Capacity battery 100</td>
                                <td>{{model.item.custitem_rfi_capacity_battery_100}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_ip_rating}}{{#ifEquals model.item.custitem_rfi_ip_rating '&nbsp;'}}{{else}}
                            <tr>
                                <td>IP Rating</td>
                                <td>{{model.item.custitem_rfi_ip_rating}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_max_efficiency_typical}}{{#ifEquals model.item.custitem_rfi_max_efficiency_typical '&nbsp;'}}{{else}}
                            <tr>
                                <td>Max efficiency typical</td>
                                <td>{{model.item.custitem_rfi_max_efficiency_typical}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_frequency_in_sitemap}}{{#ifEquals model.item.custitem_rfi_frequency_in_sitemap '&nbsp;'}}{{else}}
                            <tr>
                                <td>Frequency in sitemap</td>
                                <td>{{model.item.custitem_rfi_frequency_in_sitemap}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_cavity_filter_type}}{{#ifEquals model.item.custitem_rfi_cavity_filter_type '&nbsp;'}}{{else}}
                            <tr>
                                <td>Cavity Filter Type</td>
                                <td>{{model.item.custitem_rfi_cavity_filter_type}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_ferrite_circulator_type}}{{#ifEquals model.item.custitem_rfi_ferrite_circulator_type '&nbsp;'}}{{else}}
                            <tr>
                                <td>Ferrite Circulator Type</td>
                                <td>{{model.item.custitem_rfi_ferrite_circulator_type}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_receiver_preselector_freq}}{{#ifEquals model.item.custitem_rfi_receiver_preselector_freq '&nbsp;'}}{{else}}
                            <tr>
                                <td>Receiver Preselector Frequency</td>
                                <td>{{model.item.custitem_rfi_receiver_preselector_freq}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_cavity_diameter}}{{#ifEquals model.item.custitem_rfi_cavity_diameter '&nbsp;'}}{{else}}
                            <tr>
                                <td>Cavity diameter</td>
                                <td>{{model.item.custitem_rfi_cavity_diameter}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_cavity_filter_frequency}}{{#ifEquals model.item.custitem_rfi_cavity_filter_frequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>Cavity Filter Frequency</td>
                                <td>{{model.item.custitem_rfi_cavity_filter_frequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_termination_connectors}}{{#ifEquals model.item.custitem_rfi_termination_connectors '&nbsp;'}}{{else}}
                            <tr>
                                <td>Termination connectors</td>
                                <td>{{model.item.custitem_rfi_termination_connectors}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_attenuation_value}}{{#ifEquals model.item.custitem_rfi_attenuation_value '&nbsp;'}}{{else}}
                            <tr>
                                <td>Attenuation value</td>
                                <td>{{model.item.custitem_rfi_attenuation_value}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_attenuation_accuracy}}{{#ifEquals model.item.custitem_rfi_attenuation_accuracy '&nbsp;'}}{{else}}
                            <tr>
                                <td>Attenuation accuracy</td>
                                <td>{{model.item.custitem_rfi_attenuation_accuracy}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_power_rating_maximum}}{{#ifEquals model.item.custitem_rfi_power_rating_maximum '&nbsp;'}}{{else}}
                            <tr>
                                <td>Power Rating Maximum</td>
                                <td>{{model.item.custitem_rfi_power_rating_maximum}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_input_power_cw_max}}{{#ifEquals model.item.custitem_rfi_input_power_cw_max '&nbsp;'}}{{else}}
                            <tr>
                                <td>Input Power CW Max</td>
                                <td>{{model.item.custitem_rfi_input_power_cw_max}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_pass_bandwidth}}{{#ifEquals model.item.custitem_rfi_pass_bandwidth '&nbsp;'}}{{else}}
                            <tr>
                                <td>Pass bandwidth</td>
                                <td>{{model.item.custitem_rfi_pass_bandwidth}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_typ_isolation}}{{#ifEquals model.item.custitem_rfi_typ_isolation '&nbsp;'}}{{else}}
                            <tr>
                                <td>Typ isolation</td>
                                <td>{{model.item.custitem_rfi_typ_isolation}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_wavelength}}{{#ifEquals model.item.custitem_rfi_wavelength '&nbsp;'}}{{else}}
                            <tr>
                                <td>Wavelength</td>
                                <td>{{model.item.custitem_rfi_wavelength}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_typ_loss_db}}{{#ifEquals model.item.custitem_rfi_typ_loss_db '&nbsp;'}}{{else}}
                            <tr>
                                <td>Typical Loss dB</td>
                                <td>{{model.item.custitem_rfi_typ_loss_db}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_splits}}{{#ifEquals model.item.custitem_rfi_splits '&nbsp;'}}{{else}}
                            <tr>
                                <td>Splits</td>
                                <td>{{model.item.custitem_rfi_splits}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_size_mm}}{{#ifEquals model.item.custitem_rfi_size_mm '&nbsp;'}}{{else}}
                            <tr>
                                <td>Size mm</td>
                                <td>{{model.item.custitem_rfi_size_mm}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_shipping}}{{#ifEquals model.item.custitem_rfi_shipping '&nbsp;'}}{{else}}
                            <tr>
                                <td>Shipping</td>
                                <td>{{model.item.custitem_rfi_shipping}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_rf_power_w}}{{#ifEquals model.item.custitem_rfi_rf_power_w '&nbsp;'}}{{else}}
                            <tr>
                                <td>RF Power W</td>
                                <td>{{model.item.custitem_rfi_rf_power_w}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_return_loss_vswr}}{{#ifEquals model.item.custitem_rfi_return_loss_vswr '&nbsp;'}}{{else}}
                            <tr>
                                <td>Return Loss VSWR</td>
                                <td>{{model.item.custitem_rfi_return_loss_vswr}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_port_to_port_isolation}}{{#ifEquals model.item.custitem_rfi_port_to_port_isolation '&nbsp;'}}{{else}}
                            <tr>
                                <td>Port To Port Isolation</td>
                                <td>{{model.item.custitem_rfi_port_to_port_isolation}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_pim_3rd_order_2x43dbm}}{{#ifEquals model.item.custitem_rfi_pim_3rd_order_2x43dbm '&nbsp;'}}{{else}}
                            <tr>
                                <td>PIM 3rd Order 2x43dBm</td>
                                <td>{{model.item.custitem_rfi_pim_3rd_order_2x43dbm}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_min_frequency_separation}}{{#ifEquals model.item.custitem_rfi_min_frequency_separation '&nbsp;'}}{{else}}
                            <tr>
                                <td>Min Frequency Separation</td>
                                <td>{{model.item.custitem_rfi_min_frequency_separation}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_min_sep_mhz}}{{#ifEquals model.item.custitem_rfi_min_sep_mhz '&nbsp;'}}{{else}}
                            <tr>
                                <td>Minimum Separation MHz</td>
                                <td>{{model.item.custitem_rfi_min_sep_mhz}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_load_rating}}{{#ifEquals model.item.custitem_rfi_load_rating '&nbsp;'}}{{else}}
                            <tr>
                                <td>Load rating</td>
                                <td>{{model.item.custitem_rfi_load_rating}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_isolation}}{{#ifEquals model.item.custitem_rfi_isolation '&nbsp;'}}{{else}}
                            <tr>
                                <td>Isolation</td>
                                <td>{{model.item.custitem_rfi_isolation}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_finish}}{{#ifEquals model.item.custitem_rfi_finish '&nbsp;'}}{{else}}
                            <tr>
                                <td>Finish</td>
                                <td>{{model.item.custitem_rfi_finish}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_conn_types_all_terminatio}}{{#ifEquals model.item.custitem_rfi_conn_types_all_terminatio '&nbsp;'}}{{else}}
                            <tr>
                                <td>Connector Types All Termiantion Ports</td>
                                <td>{{model.item.custitem_rfi_conn_types_all_terminatio}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_max_frequency}}{{#ifEquals model.item.custitem_rfi_max_frequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>Max Frequency</td>
                                <td>{{model.item.custitem_rfi_max_frequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_cable_type_connectors}}{{#ifEquals model.item.custitem_rfi_cable_type_connectors '&nbsp;'}}{{else}}
                            <tr>
                                <td>Cable Type Connectors</td>
                                <td>{{model.item.custitem_rfi_cable_type_connectors}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_atten_per_30m_900mhz}}{{#ifEquals model.item.custitem_rfi_atten_per_30m_900mhz '&nbsp;'}}{{else}}
                            <tr>
                                <td>Attenuation Per 30m MHz</td>
                                <td>{{model.item.custitem_rfi_atten_per_30m_900mhz}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_colour}}{{#ifEquals model.item.custitem_rfi_colour '&nbsp;'}}{{else}}
                            <tr>
                                <td>Colour</td>
                                <td>{{model.item.custitem_rfi_colour}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_labels_pack}}{{#ifEquals model.item.custitem_rfi_labels_pack '&nbsp;'}}{{else}}
                            <tr>
                                <td>Labels Pack</td>
                                <td>{{model.item.custitem_rfi_labels_pack}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_thermal_shock}}{{#ifEquals model.item.custitem_rfi_thermal_shock '&nbsp;'}}{{else}}
                            <tr>
                                <td>Thermal Shock</td>
                                <td>{{model.item.custitem_rfi_thermal_shock}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_salt_spray}}{{#ifEquals model.item.custitem_rfi_salt_spray '&nbsp;'}}{{else}}
                            <tr>
                                <td>Salt Spray</td>
                                <td>{{model.item.custitem_rfi_salt_spray}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_cable_retention}}{{#ifEquals model.item.custitem_rfi_cable_retention '&nbsp;'}}{{else}}
                            <tr>
                                <td>Cable Retention</td>
                                <td>{{model.item.custitem_rfi_cable_retention}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_coupling_nut_retention}}{{#ifEquals model.item.custitem_rfi_coupling_nut_retention '&nbsp;'}}{{else}}
                            <tr>
                                <td>Coupling Nut Retention</td>
                                <td>{{model.item.custitem_rfi_coupling_nut_retention}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_durability}}{{#ifEquals model.item.custitem_rfi_durability '&nbsp;'}}{{else}}
                            <tr>
                                <td>Durability</td>
                                <td>{{model.item.custitem_rfi_durability}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_mating}}{{#ifEquals model.item.custitem_rfi_mating '&nbsp;'}}{{else}}
                            <tr>
                                <td>Mating</td>
                                <td>{{model.item.custitem_rfi_mating}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_outer_contact}}{{#ifEquals model.item.custitem_rfi_outer_contact '&nbsp;'}}{{else}}
                            <tr>
                                <td>Outer Contact</td>
                                <td>{{model.item.custitem_rfi_outer_contact}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_centre_contact}}{{#ifEquals model.item.custitem_rfi_centre_contact '&nbsp;'}}{{else}}
                            <tr>
                                <td>Centre Contact</td>
                                <td>{{model.item.custitem_rfi_centre_contact}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_number_cycles_10}}{{#ifEquals model.item.custitem_rfi_number_cycles_10 '&nbsp;'}}{{else}}
                            <tr>
                                <td>Number Cycles (10)</td>
                                <td>{{model.item.custitem_rfi_number_cycles_10}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_shield}}{{#ifEquals model.item.custitem_rfi_shield '&nbsp;'}}{{else}}
                            <tr>
                                <td>Shield</td>
                                <td>{{model.item.custitem_rfi_shield}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_vibration}}{{#ifEquals model.item.custitem_rfi_vibration '&nbsp;'}}{{else}}
                            <tr>
                                <td>Vibration</td>
                                <td>{{model.item.custitem_rfi_vibration}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_type_of_jacket}}{{#ifEquals model.item.custitem_rfi_type_of_jacket '&nbsp;'}}{{else}}
                            <tr>
                                <td>Type of jacket</td>
                                <td>{{model.item.custitem_rfi_type_of_jacket}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitemrfi_operation_frequency}}{{#ifEquals model.item.custitemrfi_operation_frequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>Operational Frequency</td>
                                <td>{{model.item.custitemrfi_operation_frequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_nominal_velocity}}{{#ifEquals model.item.custitem_rfi_nominal_velocity '&nbsp;'}}{{else}}
                            <tr>
                                <td>Nominal Velocity</td>
                                <td>{{model.item.custitem_rfi_nominal_velocity}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_jacket_od_mm}}{{#ifEquals model.item.custitem_rfi_jacket_od_mm '&nbsp;'}}{{else}}
                            <tr>
                                <td>Jacket Outer Dimension mm</td>
                                <td>{{model.item.custitem_rfi_jacket_od_mm}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_impedance_ohms}}{{#ifEquals model.item.custitem_rfi_impedance_ohms '&nbsp;'}}{{else}}
                            <tr>
                                <td>Impedance</td>
                                <td>{{model.item.custitem_rfi_impedance_ohms}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_dielectric}}{{#ifEquals model.item.custitem_rfi_dielectric '&nbsp;'}}{{else}}
                            <tr>
                                <td>Dielectric</td>
                                <td>{{model.item.custitem_rfi_dielectric}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_crimp_set_or_tool}}{{#ifEquals model.item.custitem_rfi_crimp_set_or_tool '&nbsp;'}}{{else}}
                            <tr>
                                <td>Crimp Set or Tool</td>
                                <td>{{model.item.custitem_rfi_crimp_set_or_tool}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_center_conductor}}{{#ifEquals model.item.custitem_rfi_center_conductor '&nbsp;'}}{{else}}
                            <tr>
                                <td>Centre Conductor</td>
                                <td>{{model.item.custitem_rfi_center_conductor}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_cable_type}}{{#ifEquals model.item.custitem_rfi_cable_type '&nbsp;'}}{{else}}
                            <tr>
                                <td>Cable Type</td>
                                <td>{{model.item.custitem_rfi_cable_type}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitemcellular_frequency}}{{#ifEquals model.item.custitemcellular_frequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>Cellular Frequency</td>
                                <td>{{model.item.custitemcellular_frequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_uhf_frequency}}{{#ifEquals model.item.custitem_rfi_uhf_frequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>UHF Frequency</td>
                                <td>{{model.item.custitem_rfi_uhf_frequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_vhf_frequency}}{{#ifEquals model.item.custitem_rfi_vhf_frequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>VHF Frequency</td>
                                <td>{{model.item.custitem_rfi_vhf_frequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_frequency_vhf}}{{#ifEquals model.item.custitem_rfi_frequency_vhf '&nbsp;'}}{{else}}
                            <tr>
                                <td>Frequency VHF</td>
                                <td>{{model.item.custitem_rfi_frequency_vhf}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_impedance_vhf}}{{#ifEquals model.item.custitem_rfi_impedance_vhf '&nbsp;'}}{{else}}
                            <tr>
                                <td>Impedance VHF</td>
                                <td>{{model.item.custitem_rfi_impedance_vhf}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_connector_vhf}}{{#ifEquals model.item.custitem_rfi_connector_vhf '&nbsp;'}}{{else}}
                            <tr>
                                <td>Connector VHF</td>
                                <td>{{model.item.custitem_rfi_connector_vhf}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_number_cycles_50}}{{#ifEquals model.item.custitem_rfi_number_cycles_50 '&nbsp;'}}{{else}}
                            <tr>
                                <td>Number Cycles (50)</td>
                                <td>{{model.item.custitem_rfi_number_cycles_50}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_nominal_gain_dbq}}{{#ifEquals model.item.custitem_rfi_nominal_gain_dbq '&nbsp;'}}{{else}}
                            <tr>
                                <td>Nominal Gain dBq</td>
                                <td>{{model.item.custitem_rfi_nominal_gain_dbq}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_number_cycles_80}}{{#ifEquals model.item.custitem_rfi_number_cycles_80 '&nbsp;'}}{{else}}
                            <tr>
                                <td>Number Cycles (80)</td>
                                <td>{{model.item.custitem_rfi_number_cycles_80}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_packaging}}{{#ifEquals model.item.custitem_rfi_packaging '&nbsp;'}}{{else}}
                            <tr>
                                <td>Packaging</td>
                                <td>{{model.item.custitem_rfi_packaging}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_whip_material}}{{#ifEquals model.item.custitem_rfi_whip_material '&nbsp;'}}{{else}}
                            <tr>
                                <td>Whip Material</td>
                                <td>{{model.item.custitem_rfi_whip_material}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_whip_length_mm}}{{#ifEquals model.item.custitem_rfi_whip_length_mm '&nbsp;'}}{{else}}
                            <tr>
                                <td>Whip Length mm</td>
                                <td>{{model.item.custitem_rfi_whip_length_mm}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_capacity_battery_10}}{{#ifEquals model.item.custitem_rfi_capacity_battery_10 '&nbsp;'}}{{else}}
                            <tr>
                                <td>Capacity Battery (10)</td>
                                <td>{{model.item.custitem_rfi_capacity_battery_10}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_mounting}}{{#ifEquals model.item.custitem_rfi_mounting '&nbsp;'}}{{else}}
                            <tr>
                                <td>Mounting</td>
                                <td>{{model.item.custitem_rfi_mounting}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_cable_and_connector}}{{#ifEquals model.item.custitem_rfi_cable_and_connector '&nbsp;'}}{{else}}
                            <tr>
                                <td>Cable And Connector</td>
                                <td>{{model.item.custitem_rfi_cable_and_connector}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_tuning}}{{#ifEquals model.item.custitem_rfi_tuning '&nbsp;'}}{{else}}
                            <tr>
                                <td>Tuning</td>
                                <td>{{model.item.custitem_rfi_tuning}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_band}}{{#ifEquals model.item.custitem_rfi_band '&nbsp;'}}{{else}}
                            <tr>
                                <td>Band</td>
                                <td>{{model.item.custitem_rfi_band}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_material}}{{#ifEquals model.item.custitem_rfi_material '&nbsp;'}}{{else}}
                            <tr>
                                <td>Material</td>
                                <td>{{model.item.custitem_rfi_material}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_continuous_power}}{{#ifEquals model.item.custitem_rfi_continuous_power '&nbsp;'}}{{else}}
                            <tr>
                                <td>Continuous Power</td>
                                <td>{{model.item.custitem_rfi_continuous_power}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_current_a}}{{#ifEquals model.item.custitem_rfi_current_a '&nbsp;'}}{{else}}
                            <tr>
                                <td>Current (A)</td>
                                <td>{{model.item.custitem_rfi_current_a}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_return_loss_db}}{{#ifEquals model.item.custitem_rfi_return_loss_db '&nbsp;'}}{{else}}
                            <tr>
                                <td>Return Loss dB</td>
                                <td>{{model.item.custitem_rfi_return_loss_db}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_insertion_loss_db}}{{#ifEquals model.item.custitem_rfi_insertion_loss_db '&nbsp;'}}{{else}}
                            <tr>
                                <td>Insertion Loss dB</td>
                                <td>{{model.item.custitem_rfi_insertion_loss_db}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_under_voltage_restart}}{{#ifEquals model.item.custitem_rfi_under_voltage_restart '&nbsp;'}}{{else}}
                            <tr>
                                <td>Under Voltage Restart</td>
                                <td>{{model.item.custitem_rfi_under_voltage_restart}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_power_input}}{{#ifEquals model.item.custitem_rfi_power_input '&nbsp;'}}{{else}}
                            <tr>
                                <td>Power Input</td>
                                <td>{{model.item.custitem_rfi_power_input}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_under_voltage_shutdown}}{{#ifEquals model.item.custitem_rfi_under_voltage_shutdown '&nbsp;'}}{{else}}
                            <tr>
                                <td>Under Voltage Shutdown</td>
                                <td>{{model.item.custitem_rfi_under_voltage_shutdown}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_max_cable_crosssection}}{{#ifEquals model.item.custitem_rfi_max_cable_crosssection '&nbsp;'}}{{else}}
                            <tr>
                                <td>Max Cable Crosssection</td>
                                <td>{{model.item.custitem_rfi_max_cable_crosssection}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_dc_connections}}{{#ifEquals model.item.custitem_rfi_dc_connections '&nbsp;'}}{{else}}
                            <tr>
                                <td>DC Connections</td>
                                <td>{{model.item.custitem_rfi_dc_connections}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_number_of_outputs}}{{#ifEquals model.item.custitem_rfi_number_of_outputs '&nbsp;'}}{{else}}
                            <tr>
                                <td>Number Of Outputs</td>
                                <td>{{model.item.custitem_rfi_number_of_outputs}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_charge_algorithum}}{{#ifEquals model.item.custitem_rfi_charge_algorithum '&nbsp;'}}{{else}}
                            <tr>
                                <td>Charge Algorithum</td>
                                <td>{{model.item.custitem_rfi_charge_algorithum}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_ip_protection_category}}{{#ifEquals model.item.custitem_rfi_ip_protection_category '&nbsp;'}}{{else}}
                            <tr>
                                <td>IP Protection Category</td>
                                <td>{{model.item.custitem_rfi_ip_protection_category}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_ac_connection}}{{#ifEquals model.item.custitem_rfi_ac_connection '&nbsp;'}}{{else}}
                            <tr>
                                <td>AC Connection</td>
                                <td>{{model.item.custitem_rfi_ac_connection}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_humidity_noncondensing}}{{#ifEquals model.item.custitem_rfi_humidity_noncondensing '&nbsp;'}}{{else}}
                            <tr>
                                <td>Humidity Non-Condensing</td>
                                <td>{{model.item.custitem_rfi_humidity_noncondensing}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_protection_over_temperat}}{{#ifEquals model.item.custitem_rfi_protection_over_temperat '&nbsp;'}}{{else}}
                            <tr>
                                <td>Protection Over Temperature</td>
                                <td>{{model.item.custitem_rfi_protection_over_temperat}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_protection_output_sc}}{{#ifEquals model.item.custitem_rfi_protection_output_sc '&nbsp;'}}{{else}}
                            <tr>
                                <td>Protection Output Shortcircuit</td>
                                <td>{{model.item.custitem_rfi_protection_output_sc}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_protect_reverse_polarity}}{{#ifEquals model.item.custitem_rfi_protect_reverse_polarity '&nbsp;'}}{{else}}
                            <tr>
                                <td>Protection Reverse Polarity</td>
                                <td>{{model.item.custitem_rfi_protect_reverse_polarity}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_charge_current}}{{#ifEquals model.item.custitem_rfi_charge_current '&nbsp;'}}{{else}}
                            <tr>
                                <td>Charge Current</td>
                                <td>{{model.item.custitem_rfi_charge_current}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_charge_voltage_storage}}{{#ifEquals model.item.custitem_rfi_charge_voltage_storage '&nbsp;'}}{{else}}
                            <tr>
                                <td>Charge Voltage Storage</td>
                                <td>{{model.item.custitem_rfi_charge_voltage_storage}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_charge_voltage_float}}{{#ifEquals model.item.custitem_rfi_charge_voltage_float '&nbsp;'}}{{else}}
                            <tr>
                                <td>Charge Voltage Float</td>
                                <td>{{model.item.custitem_rfi_charge_voltage_float}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_charge_voltage_absorption}}{{#ifEquals model.item.custitem_rfi_charge_voltage_absorption '&nbsp;'}}{{else}}
                            <tr>
                                <td>Charge Voltage Absorption</td>
                                <td>{{model.item.custitem_rfi_charge_voltage_absorption}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_output_current_contin}}{{#ifEquals model.item.custitem_rfi_output_current_contin '&nbsp;'}}{{else}}
                            <tr>
                                <td>Output Current Continuous</td>
                                <td>{{model.item.custitem_rfi_output_current_contin}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_output_power_w}}{{#ifEquals model.item.custitem_rfi_output_power_w '&nbsp;'}}{{else}}
                            <tr>
                                <td>Output Power W</td>
                                <td>{{model.item.custitem_rfi_output_power_w}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_self_disch_25degc}}{{#ifEquals model.item.custitem_rfi_self_disch_25degc '&nbsp;'}}{{else}}
                            <tr>
                                <td>Self Disch @ 25 Degree C</td>
                                <td>{{model.item.custitem_rfi_self_disch_25degc}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_internal_resist_25degc}}{{#ifEquals model.item.custitem_rfi_internal_resist_25degc '&nbsp;'}}{{else}}
                            <tr>
                                <td>Internal Resistance @ Degree C</td>
                                <td>{{model.item.custitem_rfi_internal_resist_25degc}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_capacity_25degc}}{{#ifEquals model.item.custitem_rfi_capacity_25degc '&nbsp;'}}{{else}}
                            <tr>
                                <td>Capacity @ 25 Degree C</td>
                                <td>{{model.item.custitem_rfi_capacity_25degc}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_power_rating_watts}}{{#ifEquals model.item.custitem_rfi_power_rating_watts '&nbsp;'}}{{else}}
                            <tr>
                                <td>Power Rating Watts</td>
                                <td>{{model.item.custitem_rfi_power_rating_watts}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_terminal}}{{#ifEquals model.item.custitem_rfi_terminal '&nbsp;'}}{{else}}
                            <tr>
                                <td>Terminal</td>
                                <td>{{model.item.custitem_rfi_terminal}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_rated_capacity_20h}}{{#ifEquals model.item.custitem_rfi_rated_capacity_20h '&nbsp;'}}{{else}}
                            <tr>
                                <td>Rated Capacity 20H</td>
                                <td>{{model.item.custitem_rfi_rated_capacity_20h}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_output_voltage_v_adj}}{{#ifEquals model.item.custitem_rfi_output_voltage_v_adj '&nbsp;'}}{{else}}
                            <tr>
                                <td>Output Voltage V Adj</td>
                                <td>{{model.item.custitem_rfi_output_voltage_v_adj}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitemoutput_voltage_v}}{{#ifEquals model.item.custitemoutput_voltage_v '&nbsp;'}}{{else}}
                            <tr>
                                <td>Output Voltage V</td>
                                <td>{{model.item.custitemoutput_voltage_v}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_output_noise_mv}}{{#ifEquals model.item.custitem_rfi_output_noise_mv '&nbsp;'}}{{else}}
                            <tr>
                                <td>Output Noise mV</td>
                                <td>{{model.item.custitem_rfi_output_noise_mv}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_off_load_current_ma}}{{#ifEquals model.item.custitem_rfi_off_load_current_ma '&nbsp;'}}{{else}}
                            <tr>
                                <td>Off Load Current mA</td>
                                <td>{{model.item.custitem_rfi_off_load_current_ma}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_nominal_voltage}}{{#ifEquals model.item.custitem_rfi_nominal_voltage '&nbsp;'}}{{else}}
                            <tr>
                                <td>Nominal Voltage</td>
                                <td>{{model.item.custitem_rfi_nominal_voltage}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_max_continuous_load_cur}}{{#ifEquals model.item.custitem_rfi_max_continuous_load_cur '&nbsp;'}}{{else}}
                            <tr>
                                <td>Max Continuous Load Current</td>
                                <td>{{model.item.custitem_rfi_max_continuous_load_cur}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_input_voltage_range_v}}{{#ifEquals model.item.custitem_rfi_input_voltage_range_v '&nbsp;'}}{{else}}
                            <tr>
                                <td>Input Voltage Range V</td>
                                <td>{{model.item.custitem_rfi_input_voltage_range_v}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_galvanic_isolation}}{{#ifEquals model.item.custitem_rfi_galvanic_isolation '&nbsp;'}}{{else}}
                            <tr>
                                <td>Galvanic Isolation</td>
                                <td>{{model.item.custitem_rfi_galvanic_isolation}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_efficiency_percent}}{{#ifEquals model.item.custitem_rfi_efficiency_percent '&nbsp;'}}{{else}}
                            <tr>
                                <td>Efficiency Percent</td>
                                <td>{{model.item.custitem_rfi_efficiency_percent}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_battery_connection}}{{#ifEquals model.item.custitem_rfi_battery_connection '&nbsp;'}}{{else}}
                            <tr>
                                <td>Battery Connection</td>
                                <td>{{model.item.custitem_rfi_battery_connection}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_availablefrequency}}{{#ifEquals model.item.custitem_rfi_availablefrequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>Available Frequency</td>
                                <td>{{model.item.custitem_rfi_availablefrequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_case}}{{#ifEquals model.item.custitem_rfi_case '&nbsp;'}}{{else}}
                            <tr>
                                <td>Case</td>
                                <td>{{model.item.custitem_rfi_case}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_dc_supply2}}{{#ifEquals model.item.custitem_rfi_dc_supply2 '&nbsp;'}}{{else}}
                            <tr>
                                <td>DC Supply</td>
                                <td>{{model.item.custitem_rfi_dc_supply2}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_current_consumption2}}{{#ifEquals model.item.custitem_rfi_current_consumption2 '&nbsp;'}}{{else}}
                            <tr>
                                <td>Current Consumption</td>
                                <td>{{model.item.custitem_rfi_current_consumption2}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_output_impedance}}{{#ifEquals model.item.custitem_rfi_output_impedance '&nbsp;'}}{{else}}
                            <tr>
                                <td>Output Impedance</td>
                                <td>{{model.item.custitem_rfi_output_impedance}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_operational_temp_range}}{{#ifEquals model.item.custitem_rfi_operational_temp_range '&nbsp;'}}{{else}}
                            <tr>
                                <td>Operational Temperature Range</td>
                                <td>{{model.item.custitem_rfi_operational_temp_range}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_weight_inc_frame}}{{#ifEquals model.item.custitem_rfi_weight_inc_frame '&nbsp;'}}{{else}}
                            <tr>
                                <td>Weight Inc Frame</td>
                                <td>{{model.item.custitem_rfi_weight_inc_frame}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_rf_gain}}{{#ifEquals model.item.custitem_rfi_rf_gain '&nbsp;'}}{{else}}
                            <tr>
                                <td>RF Gain</td>
                                <td>{{model.item.custitem_rfi_rf_gain}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_rf_connectors}}{{#ifEquals model.item.custitem_rfi_rf_connectors '&nbsp;'}}{{else}}
                            <tr>
                                <td>RF Connectors</td>
                                <td>{{model.item.custitem_rfi_rf_connectors}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_power_supply}}{{#ifEquals model.item.custitem_rfi_power_supply '&nbsp;'}}{{else}}
                            <tr>
                                <td>Power Supply</td>
                                <td>{{model.item.custitem_rfi_power_supply}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_ambient_temp_range}}{{#ifEquals model.item.custitem_rfi_ambient_temp_range '&nbsp;'}}{{else}}
                            <tr>
                                <td>Ambient Temp Range</td>
                                <td>{{model.item.custitem_rfi_ambient_temp_range}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_battery_type}}{{#ifEquals model.item.custitem_rfi_battery_type '&nbsp;'}}{{else}}
                            <tr>
                                <td>Battery type</td>
                                <td>{{model.item.custitem_rfi_battery_type}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_connector}}{{#ifEquals model.item.custitem_rfi_connector '&nbsp;'}}{{else}}
                            <tr>
                                <td>Connector</td>
                                <td>{{model.item.custitem_rfi_connector}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_frequency_range}}{{#ifEquals model.item.custitem_rfi_frequency_range '&nbsp;'}}{{else}}
                            <tr>
                                <td>Frequency Range</td>
                                <td>{{model.item.custitem_rfi_frequency_range}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_impedance}}{{#ifEquals model.item.custitem_rfi_impedance '&nbsp;'}}{{else}}
                            <tr>
                                <td>Impedance</td>
                                <td>{{model.item.custitem_rfi_impedance}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitemfrequency}}{{#ifEquals model.item.custitemfrequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>Frequency</td>
                                <td>{{model.item.custitemfrequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitemcollinear_frequency_multiselec}}{{#ifEquals model.item.custitemcollinear_frequency_multiselec '&nbsp;'}}{{else}}
                            <tr>
                                <td>Collinear Frequency Multiselect</td>
                                <td>{{model.item.custitemcollinear_frequency_multiselec}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitembase_cellular_yagi}}{{#ifEquals model.item.custitembase_cellular_yagi '&nbsp;'}}{{else}}
                            <tr>
                                <td>Base Cellular Yagi</td>
                                <td>{{model.item.custitembase_cellular_yagi}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitembase_vhf_frequency}}{{#ifEquals model.item.custitembase_vhf_frequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>Base VHF Frequency</td>
                                <td>{{model.item.custitembase_vhf_frequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_base_uhf_frequency}}{{#ifEquals model.item.custitem_rfi_base_uhf_frequency '&nbsp;'}}{{else}}
                            <tr>
                                <td>Base UHF Frequency</td>
                                <td>{{model.item.custitem_rfi_base_uhf_frequency}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_base_gain}}{{#ifEquals model.item.custitem_rfi_base_gain '&nbsp;'}}{{else}}
                            <tr>
                                <td>Base Gain</td>
                                <td>{{model.item.custitem_rfi_base_gain}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_wind_gust_ratingkmh}}{{#ifEquals model.item.custitem_rfi_wind_gust_ratingkmh '&nbsp;'}}{{else}}
                            <tr>
                                <td>Wind Load (Thrust) @ 160km/h N</td>
                                <td>{{model.item.custitem_rfi_wind_gust_ratingkmh}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_torque160kmh}}{{#ifEquals model.item.custitem_rfi_torque160kmh '&nbsp;'}}{{else}}
                            <tr>
                                <td>Torque @ 160km/h Nm</td>
                                <td>{{model.item.custitem_rfi_torque160kmh}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_nominal_impedance}}{{#ifEquals model.item.custitem_rfi_nominal_impedance '&nbsp;'}}{{else}}
                            <tr>
                                <td>Nominal impedance</td>
                                <td>{{model.item.custitem_rfi_nominal_impedance}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_frequency_product_name}}{{#ifEquals model.item.custitem_rfi_frequency_product_name '&nbsp;'}}{{else}}
                            <tr>
                                <td>Frequency Product Name</td>
                                <td>{{model.item.custitem_rfi_frequency_product_name}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_power_w}}{{#ifEquals model.item.custitem_rfi_power_w '&nbsp;'}}{{else}}
                            <tr>
                                <td>Power w</td>
                                <td>{{model.item.custitem_rfi_power_w}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_nominal_gain_dbi}}{{#ifEquals model.item.custitem_rfi_nominal_gain_dbi '&nbsp;'}}{{else}}
                            <tr>
                                <td>Nominal Gain Dbi</td>
                                <td>{{model.item.custitem_rfi_nominal_gain_dbi}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_dimensions}}{{#ifEquals model.item.custitem_rfi_dimensions '&nbsp;'}}{{else}}
                            <tr>
                                <td>Dimensions</td>
                                <td>{{model.item.custitem_rfi_dimensions}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_polarisation}}{{#ifEquals model.item.custitem_rfi_polarisation '&nbsp;'}}{{else}}
                            <tr>
                                <td>Polarisation</td>
                                <td>{{model.item.custitem_rfi_polarisation}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_vswr}}{{#ifEquals model.item.custitem_rfi_vswr '&nbsp;'}}{{else}}
                            <tr>
                                <td>VSWR</td>
                                <td>{{model.item.custitem_rfi_vswr}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_termination}}{{#ifEquals model.item.custitem_rfi_termination '&nbsp;'}}{{else}}
                            <tr>
                                <td>Termination</td>
                                <td>{{model.item.custitem_rfi_termination}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_radome_diameter_mm}}{{#ifEquals model.item.custitem_rfi_radome_diameter_mm '&nbsp;'}}{{else}}
                            <tr>
                                <td>Radome Diameter Mm</td>
                                <td>{{model.item.custitem_rfi_radome_diameter_mm}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_mounting_area}}{{#ifEquals model.item.custitem_rfi_mounting_area '&nbsp;'}}{{else}}
                            <tr>
                                <td>Mounting area</td>
                                <td>{{model.item.custitem_rfi_mounting_area}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_construction}}{{#ifEquals model.item.custitem_rfi_construction '&nbsp;'}}{{else}}
                            <tr>
                                <td>Construction</td>
                                <td>{{model.item.custitem_rfi_construction}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_vertical_beamwidth}}{{#ifEquals model.item.custitem_rfi_vertical_beamwidth '&nbsp;'}}{{else}}
                            <tr>
                                <td>Vertical beamwidth</td>
                                <td>{{model.item.custitem_rfi_vertical_beamwidth}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_tuned_bandwidth}}{{#ifEquals model.item.custitem_rfi_tuned_bandwidth '&nbsp;'}}{{else}}
                            <tr>
                                <td>Tuned bandwidth</td>
                                <td>{{model.item.custitem_rfi_tuned_bandwidth}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_peak_instant_power_kw}}{{#ifEquals model.item.custitem_rfi_peak_instant_power_kw '&nbsp;'}}{{else}}
                            <tr>
                                <td>Peak Instantaneous POWER Kw</td>
                                <td>{{model.item.custitem_rfi_peak_instant_power_kw}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitempassive_im_3rd_order_2x20w_dbc}}{{#ifEquals model.item.custitempassive_im_3rd_order_2x20w_dbc '&nbsp;'}}{{else}}
                            <tr>
                                <td>Passive IM 3rd Order (2x20W) dBc</td>
                                <td>{{model.item.custitempassive_im_3rd_order_2x20w_dbc}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_nominal_gain_dbd}}{{#ifEquals model.item.custitem_rfi_nominal_gain_dbd '&nbsp;'}}{{else}}
                            <tr>
                                <td>Nominal Gain dBd</td>
                                <td>{{model.item.custitem_rfi_nominal_gain_dbd}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_horizontal_beamwidth}}{{#ifEquals model.item.custitem_rfi_horizontal_beamwidth '&nbsp;'}}{{else}}
                            <tr>
                                <td>Horizontal Beamwidth</td>
                                <td>{{model.item.custitem_rfi_horizontal_beamwidth}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_front_back_ratio_db}}{{#ifEquals model.item.custitem_rfi_front_back_ratio_db '&nbsp;'}}{{else}}
                            <tr>
                                <td>Front Back ratio dB</td>
                                <td>{{model.item.custitem_rfi_front_back_ratio_db}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_frequency_mhz}}{{#ifEquals model.item.custitem_rfi_frequency_mhz '&nbsp;'}}{{else}}
                            <tr>
                                <td>Frequency MHz</td>
                                <td>{{model.item.custitem_rfi_frequency_mhz}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_downtilt}}{{#ifEquals model.item.custitem_rfi_downtilt '&nbsp;'}}{{else}}
                            <tr>
                                <td>Downtilt</td>
                                <td>{{model.item.custitem_rfi_downtilt}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_sug_solar_cap_for_48v_batt}}{{#ifEquals model.item.custitem_kd_sug_solar_cap_for_48v_batt '&nbsp;'}}{{else}}
                            <tr>
                                <td>Suggested Solar Capacity for 48V Batteries [W]</td>
                                <td>{{model.item.custitem_kd_sug_solar_cap_for_48v_batt}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_sug_solar_cap_for_24v_batt}}{{#ifEquals model.item.custitem_kd_sug_solar_cap_for_24v_batt '&nbsp;'}}{{else}}
                            <tr>
                                <td>Suggested Solar Capacity for 24V Batteries [W]</td>
                                <td>{{model.item.custitem_kd_sug_solar_cap_for_24v_batt}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_length_mm}}{{#ifEquals model.item.custitem_kd_length_mm '&nbsp;'}}{{else}}
                            <tr>
                                <td>Length [mm]</td>
                                <td>{{model.item.custitem_kd_length_mm}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_width_mm}}{{#ifEquals model.item.custitem_kd_width_mm '&nbsp;'}}{{else}}
                            <tr>
                                <td>Width [mm]</td>
                                <td>{{model.item.custitem_kd_width_mm}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_number_cells}}{{#ifEquals model.item.custitem_kd_number_cells '&nbsp;'}}{{else}}
                            <tr>
                                <td>Number of Cells</td>
                                <td>{{model.item.custitem_kd_number_cells}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_voltage_max}}{{#ifEquals model.item.custitem_kd_voltage_max '&nbsp;'}}{{else}}
                            <tr>
                                <td>Maximum System Voltage [V]</td>
                                <td>{{model.item.custitem_kd_voltage_max}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_solar_leads_connectors}}{{#ifEquals model.item.custitem_kd_solar_leads_connectors '&nbsp;'}}{{else}}
                            <tr>
                                <td>Module Cables</td>
                                <td>{{model.item.custitem_kd_solar_leads_connectors}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_solar_power_tolerance}}{{#ifEquals model.item.custitem_kd_solar_power_tolerance '&nbsp;'}}{{else}}
                            <tr>
                                <td>Pmp Tolerance</td>
                                <td>{{model.item.custitem_kd_solar_power_tolerance}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_junction_box}}{{#ifEquals model.item.custitem_kd_junction_box '&nbsp;'}}{{else}}
                            <tr>
                                <td>Junction Box</td>
                                <td>{{model.item.custitem_kd_junction_box}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_noct}}{{#ifEquals model.item.custitem_kd_noct '&nbsp;'}}{{else}}
                            <tr>
                                <td>NOCT [Â°C]</td>
                                <td>{{model.item.custitem_kd_noct}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_isc_temp_coefficient}}{{#ifEquals model.item.custitem_kd_isc_temp_coefficient '&nbsp;'}}{{else}}
                            <tr>
                                <td>Isc Temp Coefficient [%/Â°C]</td>
                                <td>{{model.item.custitem_kd_isc_temp_coefficient}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_voc_temp_coefficient}}{{#ifEquals model.item.custitem_kd_voc_temp_coefficient '&nbsp;'}}{{else}}
                            <tr>
                                <td>Voc Temp Coefficient [%/Â°C]</td>
                                <td>{{model.item.custitem_kd_voc_temp_coefficient}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_temperature_coefficent}}{{#ifEquals model.item.custitem_kd_temperature_coefficent '&nbsp;'}}{{else}}
                            <tr>
                                <td>Pmp Temp Coefficient [%/Â°C]</td>
                                <td>{{model.item.custitem_kd_temperature_coefficent}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_open_circuit_voltage}}{{#ifEquals model.item.custitem_kd_open_circuit_voltage '&nbsp;'}}{{else}}
                            <tr>
                                <td>Open Circuit Voltage (Voc) [V]</td>
                                <td>{{model.item.custitem_kd_open_circuit_voltage}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_isc}}{{#ifEquals model.item.custitem_kd_isc '&nbsp;'}}{{else}}
                            <tr>
                                <td>Short Circuit Current (Isc) [A]</td>
                                <td>{{model.item.custitem_kd_isc}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_imp}}{{#ifEquals model.item.custitem_kd_imp '&nbsp;'}}{{else}}
                            <tr>
                                <td>Maximum Power Current (Imp) [A]</td>
                                <td>{{model.item.custitem_kd_imp}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_maximum_power_voltage}}{{#ifEquals model.item.custitem_kd_maximum_power_voltage '&nbsp;'}}{{else}}
                            <tr>
                                <td>Maximum Power Voltage (Vmp) [V]</td>
                                <td>{{model.item.custitem_kd_maximum_power_voltage}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_pv_technology}}{{#ifEquals model.item.custitem_kd_pv_technology '&nbsp;'}}{{else}}
                            <tr>
                                <td>Solar Cell Type</td>
                                <td>{{model.item.custitem_kd_pv_technology}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_frame_colour}}{{#ifEquals model.item.custitem_kd_frame_colour '&nbsp;'}}{{else}}
                            <tr>
                                <td>Frame Colour</td>
                                <td>{{model.item.custitem_kd_frame_colour}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_fuse_rating_max}}{{#ifEquals model.item.custitem_kd_fuse_rating_max '&nbsp;'}}{{else}}
                            <tr>
                                <td>Maximum Series Fuse rating [A]</td>
                                <td>{{model.item.custitem_kd_fuse_rating_max}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_power_max}}{{#ifEquals model.item.custitem_kd_power_max '&nbsp;'}}{{else}}
                            <tr>
                                <td>Maximum Power (Pmp) [W]</td>
                                <td>{{model.item.custitem_kd_power_max}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_device_family}}{{#ifEquals model.item.custitem_kd_device_family '&nbsp;'}}{{else}}
                            <tr>
                                <td>Device Family</td>
                                <td>{{model.item.custitem_kd_device_family}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_type_of_charger}}{{#ifEquals model.item.custitem_kd_type_of_charger '&nbsp;'}}{{else}}
                            <tr>
                                <td>Type of Charger</td>
                                <td>{{model.item.custitem_kd_type_of_charger}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_load_control_a}}{{#ifEquals model.item.custitem_kd_load_control_a '&nbsp;'}}{{else}}
                            <tr>
                                <td>Load Control [A DC]</td>
                                <td>{{model.item.custitem_kd_load_control_a}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_ground_type}}{{#ifEquals model.item.custitem_kd_ground_type '&nbsp;'}}{{else}}
                            <tr>
                                <td>Grounding Polarity</td>
                                <td>{{model.item.custitem_kd_ground_type}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_remote_communications}}{{#ifEquals model.item.custitem_kd_remote_communications '&nbsp;'}}{{else}}
                            <tr>
                                <td>Remote Communications</td>
                                <td>{{model.item.custitem_kd_remote_communications}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_suggested_solar_capacity_f}}{{#ifEquals model.item.custitem_kd_suggested_solar_capacity_f '&nbsp;'}}{{else}}
                            <tr>
                                <td>Suggested Solar Capacity for 12V Batteries [W]</td>
                                <td>{{model.item.custitem_kd_suggested_solar_capacity_f}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_maximum_solar_array_voc}}{{#ifEquals model.item.custitem_kd_maximum_solar_array_voc '&nbsp;'}}{{else}}
                            <tr>
                                <td>Maximum Solar Array Voc [V DC]</td>
                                <td>{{model.item.custitem_kd_maximum_solar_array_voc}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_mounting}}{{#ifEquals model.item.custitem_kd_mounting '&nbsp;'}}{{else}}
                            <tr>
                                <td>Mounting </td>
                                <td>{{model.item.custitem_kd_mounting}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_temperature_compensation}}{{#ifEquals model.item.custitem_kd_temperature_compensation '&nbsp;'}}{{else}}
                            <tr>
                                <td>Temperature Compensated Charging</td>
                                <td>{{model.item.custitem_kd_temperature_compensation}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_adjustable_regulation_set_}}{{#ifEquals model.item.custitem_kd_adjustable_regulation_set_ '&nbsp;'}}{{else}}
                            <tr>
                                <td>Adjustable Battery Charging Parameters</td>
                                <td>{{model.item.custitem_kd_adjustable_regulation_set_}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_low_voltage_disconnect_lvd}}{{#ifEquals model.item.custitem_kd_low_voltage_disconnect_lvd '&nbsp;'}}{{else}}
                            <tr>
                                <td>Low Voltage Disconnect (LVD)</td>
                                <td>{{model.item.custitem_kd_low_voltage_disconnect_lvd}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_maximum_charge_current_a}}{{#ifEquals model.item.custitem_kd_maximum_charge_current_a '&nbsp;'}}{{else}}
                            <tr>
                                <td>Maximum Output Current [A DC]</td>
                                <td>{{model.item.custitem_kd_maximum_charge_current_a}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_nominal_dc_voltage}}{{#ifEquals model.item.custitem_kd_nominal_dc_voltage '&nbsp;'}}{{else}}
                            <tr>
                                <td>Nominal DC Voltage [V]</td>
                                <td>{{model.item.custitem_kd_nominal_dc_voltage}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_cec_number_list}}{{#ifEquals model.item.custitem_kd_cec_number_list '&nbsp;'}}{{else}}
                            <tr>
                                <td>CEC List Model Number</td>
                                <td>{{model.item.custitem_kd_cec_number_list}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_battery_type}}{{#ifEquals model.item.custitem_kd_battery_type '&nbsp;'}}{{else}}
                            <tr>
                                <td>Battery Type</td>
                                <td>{{model.item.custitem_kd_battery_type}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_temp_range}}{{#ifEquals model.item.custitem_kd_temp_range '&nbsp;'}}{{else}}
                            <tr>
                                <td>Operating Temperature Range [°C]</td>
                                <td>{{model.item.custitem_kd_temp_range}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_display_interface}}{{#ifEquals model.item.custitem_kd_display_interface '&nbsp;'}}{{else}}
                            <tr>
                                <td>Display Interface</td>
                                <td>{{model.item.custitem_kd_display_interface}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_ip_rating}}{{#ifEquals model.item.custitem_kd_ip_rating '&nbsp;'}}{{else}}
                            <tr>
                                <td>IP Rating</td>
                                <td>{{model.item.custitem_kd_ip_rating}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_backsheet_colour}}{{#ifEquals model.item.custitem_kd_backsheet_colour '&nbsp;'}}{{else}}
                            <tr>
                                <td>Backsheet Colour</td>
                                <td>{{model.item.custitem_kd_backsheet_colour}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_brand_solar}}{{#ifEquals model.item.custitem_kd_brand_solar '&nbsp;'}}{{else}}
                            <tr>
                                <td>Brand</td>
                                <td>{{model.item.custitem_kd_brand_solar}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_quantity_per_pallet}}{{#ifEquals model.item.custitem_kd_quantity_per_pallet '&nbsp;'}}{{else}}
                            <tr>
                                <td>Quantity Per Pallet</td>
                                <td>{{model.item.custitem_kd_quantity_per_pallet}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_weight}}{{#ifEquals model.item.custitem_kd_weight '&nbsp;'}}{{else}}
                            <tr>
                                <td>Weight [kg]</td>
                                <td>{{model.item.custitem_kd_weight}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_depth_mm}}{{#ifEquals model.item.custitem_kd_depth_mm '&nbsp;'}}{{else}}
                            <tr>
                                <td>Depth [mm]</td>
                                <td>{{model.item.custitem_kd_depth_mm}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_kd_height_mm}}{{#ifEquals model.item.custitem_kd_height_mm '&nbsp;'}}{{else}}
                            <tr>
                                <td>Height [mm]</td>
                                <td>{{model.item.custitem_kd_height_mm}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_rated_temp}}{{#ifEquals model.item.custitem_rfi_rated_temp '&nbsp;'}}{{else}}
                            <tr>
                                <td>Rated Temperature</td>
                                <td>{{model.item.custitem_rfi_rated_temp}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_ite_comp_type}}{{#ifEquals model.item.custitem_rfi_ite_comp_type '&nbsp;'}}{{else}}
                            <tr>
                                <td>Component Type</td>
                                <td>{{model.item.custitem_rfi_ite_comp_type}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                             
                                {{#if model.item.custitem_rfi_ite_batt_volts}}{{#ifEquals model.item.custitem_rfi_ite_batt_volts '&nbsp;'}}{{else}}
                            <tr>
                                <td>Battery Voltage</td>
                                <td>{{model.item.custitem_rfi_ite_batt_volts}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_ite_cpcty_ah}}{{#ifEquals model.item.custitem_rfi_ite_cpcty_ah '&nbsp;'}}{{else}}
                            <tr>
                                <td>Capacity (AH)</td>
                                <td>{{model.item.custitem_rfi_ite_cpcty_ah}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                                {{#if model.item.custitem_rfi_ite_cpcty_kwh}}{{#ifEquals model.item.custitem_rfi_ite_cpcty_kwh '&nbsp;'}}{{else}}
                            <tr>
                                <td>Capacity (KWH)</td>
                                <td>{{model.item.custitem_rfi_ite_cpcty_kwh}}</td>
                            <tr>{{/ifEquals}}{{/if}}
                        </tbody>
                    </table>
                </div>
                <!-- PDFS AND DOWNLOADS -->
                <div class="box-description" id="tab-pdf-downloads">
                    <ol>
                        {{#if model.item.custitem_kd_pdf_download_1}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_1}}}' target="_blank"
                                download="pdf">{{#pdfsplit this.pdf1}} {{/pdfsplit}}</a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_2}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_2}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf2}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_3}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_3}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf3}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_4}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_4}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf4}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_5}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_5}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf5}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_6}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_6}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf6}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_7}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_7}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf7}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_8}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_8}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf8}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_9}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_9}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf9}} {{/pdfsplit}}</a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_10}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_10}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf10}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_11}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_11}}}' target="_blank"
                                download="pdf">{{#pdfsplit this.pdf11}} {{/pdfsplit}}</a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_12}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_12}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf12}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_13}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_13}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf13}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_14}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_14}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf14}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_15}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_15}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf15}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_16}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_16}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf16}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_17}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_17}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf17}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_18}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_18}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf18}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_19}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_19}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf19}} {{/pdfsplit}}</a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_20}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_20}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf20}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_21}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_21}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf21}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_22}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_22}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf22}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_23}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_23}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf23}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_24}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_24}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf24}} {{/pdfsplit}} </a>
                        </li>
                        {{/if}}
                        {{#if model.item.custitem_kd_pdf_download_25}}
                        <li>
                            <a href='{{{model.item.custitem_kd_pdf_download_25}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.pdf25}} {{/pdfsplit}}</a>
                        </li>
                        {{/if}}
                         {{#each this.pdfsExtras}}
                        {{log this}}
                             <li>
                            <a href='{{{this.url}}}' target="_blank" download="pdf">
                                {{#pdfsplit this.name}} {{/pdfsplit}}</a>
                        </li>
                        {{/each}}
                        <li>

                            {{{model.item.custitem_kd_extra_video_link}}}
                        </li>

                    </ol>
                </div>
            </div>
        </div>



        <!-- 		{{#if model.item.storedetaileddescription}}
		<div class="details-store-description collapse" id="details-store-description">
			<div class="card card-body">
			{{translate model.item.storedetaileddescription}}
			</div>
		</div>
		{{/if}} -->

        <!-- 		{{#if model.item.featureddescription}}
		<div class="specifications-pdp collapse" id="specifications-pdp">
		<div class="card card-body"> -->
        <!-- ============================= PERSONAL CUSTOM ============================= -->
        <!-- 			<table class="blueTable">
				<tbody>
				<tr>
				<td>cell1_1</td><td>cell2_1</td></tr>
				</tbody>
			</table> -->
        <!-- =========================== END PERSONAL CUSTOM =========================== -->

        <!-- 			{{translate model.item.featureddescription}}
		</div>

	</div>
		{{/if}}

		{{#if model.item.featureddescription}}
		<div class="pdfs-content-pdp collapse" id="pdfs-pdp">
		<div class="card card-body">
			<a href='{{translate model.item.custitem_kd_pdf_tab}}'> Download PDF </a>
		</div>

	</div>
		{{/if}} -->


        <!-- <section data-view="Product.Information"></section> -->

        <!-- <div class="product-details-full-divider-desktop"></div> -->

        <!-- <div data-view="ProductReviews.Center"></div> -->


        {{#if model.item.custitem_kd_show_correlated}}
        <div class="product-details-full-content-correlated-items">
            <div data-view="Correlated.Items"></div>
        </div>

        {{else}}


        <div class="product-details-full-content-related-items">
            <div data-view="Related.Items">
            </div>
        </div>

        {{/if}}



        <div id="banner-details-bottom" class="content-banner banner-details-bottom"
            data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
    </article>
</div>


<!-- ============================== CUSTOM SCRIPTS ============================== -->

<script>
    /* 	var specificationsBox = document.querySelector(".custom-table");
		var buttonSpecifications = document.getElementById("custom-button-specification");
		if (specificationsBox.textContent === "") {
			parentButtonSpecifications = buttonSpecifications.parentNode;
			parentButtonSpecifications.removeChild(buttonSpecifications);
		} */

    var elementsButton = Array.from(document.getElementsByClassName("box-menu__option"));
    if (elementsButton.length > 0) elementsButton[0].classList.add("custom-button-click");

    // var descriptionContent = document.getElementById('description-content');
    // descriptionContent.addEventListener('click', function() {
    // 	descriptionContent.classList.toggle('auto-height');
    // });


    var boxMenuOptions = Array.from(document.querySelectorAll(".box-menu__option"));
    var boxDescriptions = Array.from(document.querySelectorAll(".box-description"));
    boxMenuOptions.forEach(function(button, index) {
        button.addEventListener("click", function() {
            boxDescriptions.map(box => box.classList.remove('custom-show', 'custom-display-content'));
            boxDescriptions[index].classList.add('custom-show', 'custom-display-content');

            boxMenuOptions.map(button => button.classList.remove('custom-button-click'));
            boxMenuOptions[index].classList.add('custom-button-click');
        })
    })
    var boxInformation = document.querySelector(".box-menu-buttons");
    var boxInformationContent = document.querySelector(".box-menu-information");
    if (boxInformation.innerText == "") {
        boxInformationContent.classList.add("custom-display-none")
    }

    var containerText = document.getElementById('short-description');
    console.dir(containerText)
    var isTable = containerText.childNodes[0].tagName;
    if (isTable === "TABLE") {
        var textShortDescription = document.getElementById('short-description').innerText
        containerText.innerHTML = textShortDescription;
    }
</script> {{!---- Use the following context variables when customizing this template: model (Object) model.item (Object) model.item.internalid
(Number) model.item.type (String) model.quantity (Number) model.options (Array) model.options.0 (Object) model.options.0.cartOptionId
(String) model.options.0.itemOptionId (String) model.options.0.label (String) model.options.0.type (String) model.location
(String) model.fulfillmentChoice (String) pageHeader (String) itemUrl (String) isItemProperlyConfigured (Boolean) isPriceEnabled
(Boolean) ----}}