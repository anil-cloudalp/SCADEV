define('product_details_full.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "					<div class=\"product-line-sku-container\">\r\n						<span class=\"product-line-sku-label\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MPN: ",{"name":"translate","hash":{},"data":data}))
    + " </span>\r\n						<span class=\"Product-line-sku-value\">"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"mpn") : stack1), depth0))
    + "</span>\r\n					</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "						"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"badge") || (depth0 != null ? compilerNameLookup(depth0,"badge") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"badge","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "                                <div class=\"product-line-sku-container\">\r\n                                    <span class=\"product-line-sku-label\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MPN: ",{"name":"translate","hash":{},"data":data}))
    + " </span>\r\n                                    <span class=\"product-line-sku-value\">"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"itemid") : stack1), depth0))
    + "</span>\r\n                                </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return " "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"badge") || (depth0 != null ? compilerNameLookup(depth0,"badge") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"badge","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing, alias4="function";

  return "\r\n                    <div class=\"custom-content-short-description\">\r\n                        "
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_short_description") : stack1), depth0))
    + "\r\n                    </div>\r\n\r\n                    <form id=\"product-details-full-form\" data-action=\"submit-form\" method=\"POST\">\r\n\r\n                        <section class=\"product-details-full-info\">\r\n                            <div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div>\r\n\r\n\r\n                            <!-- =========================== CUSTOM OPTIONS =========================== -->\r\n\r\n                            <div class=\"box-extra-information\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemkd_item_tic_interchangeable_w") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemkd_item_tic_hdsb") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemkd_item_tic_pre_t_fme_c") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </div>\r\n\r\n\r\n                            <!-- ========================= END CUSTOM OPTIONS ========================= -->\r\n                        </section>\r\n\r\n                        <section data-view=\"Product.Options\"></section>\r\n\r\n\r\n\r\n                        <!-- 						"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " -->\r\n\r\n\r\n\r\n                        <div class=\"product-details-brief-description\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"minimumquantity") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n\r\n                            <!-- <div class=\"product-line-stock\">\r\n								<p class=\"product-line-stock-msg-out\">\r\n									<span class=\"product-line-stock-icon-out\"><i class=\""
    + alias1(((helper = (helper = compilerNameLookup(helpers,"stockIcon") || (depth0 != null ? compilerNameLookup(depth0,"stockIcon") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"stockIcon","hash":{},"data":data}) : helper)))
    + "\"></i></span>\r\n									<span class=\"product-line-stock-msg-out-text\">"
    + alias1(((helper = (helper = compilerNameLookup(helpers,"stockMsg") || (depth0 != null ? compilerNameLookup(depth0,"stockMsg") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"stockMsg","hash":{},"data":data}) : helper)))
    + "</span>\r\n								</p>\r\n							</div> -->\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"storedescription") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            <div data-cms-area=\"item_info\" data-cms-area-filters=\"path\"></div>\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"product-details-full-main-bottom-banner\">\r\n                            <div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div>\r\n                        </div>\r\n                    </form>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                <div class=\"box-extra-information__element\">\r\n                                    <div class=\"box-extra-information__element--img\">\r\n                                        <img src=\"/site/rfi_arrow_06.svg\" alt=\"\">\r\n                                    </div>\r\n                                    <div class=\"box-extra-information__element--text\">\r\n                                        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemkd_item_tic_interchangeable_w") : stack1), depth0))
    + "</div>\r\n                                </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                <div class=\"box-extra-information__element\">\r\n                                    <div class=\"box-extra-information__element--img\">\r\n                                        <img src=\"/site/rfi_arrow_06.svg\" alt=\"\">\r\n                                    </div>\r\n                                    <div class=\"box-extra-information__element--text\">\r\n                                        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemkd_item_tic_hdsb") : stack1), depth0))
    + "</div>\r\n                                </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                <div class=\"box-extra-information__element\">\r\n                                    <div class=\"box-extra-information__element--img\">\r\n                                        <img src=\"/site/rfi_arrow_06.svg\" alt=\"\">\r\n                                    </div>\r\n                                    <div class=\"box-extra-information__element--text\">\r\n                                        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemkd_item_tic_pre_t_fme_c") : stack1), depth0))
    + "</div>\r\n                                </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "\r\n						<section class=\"product-details-full-actions clearfix\">\r\n							<div data-view=\"Quantity\"></div>\r\n\r\n							<div class=\"product-details-full-actions-container\">\r\n								<div data-view=\"MainActionView\"></div>\r\n								<div data-view=\"ProductDetails.AddToQuote\" class=\"product-details-full-actions-addtoquote\"></div>\r\n								<div data-view=\"AddToProductList\" class=\"product-details-full-actions-addtowishlist\"></div>\r\n							</div>\r\n\r\n						</section>\r\n						";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            <p class=\"pdp-minimumQty\">(*) Minimum Quantity: "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"minimumquantity") : stack1), depth0))
    + "</p>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            <div class=\"this-full-width pdp-brief-description-content\">\r\n                                <h3>ABOUT THIS PRODUCT:</h3>\r\n                                <div>"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"storedescription") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem1") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "                                <div class=\"item-brand-logo "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem1") : stack1), depth0)) != null ? stack1 : "")
    + "\">"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem1") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                                </div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "                    <div data-view=\"GlobalViewsMessageView.WronglyConfigureItem\"></div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "\r\n                    style=\"align-items: center; margin-bottom: 15px !important;\" ";
},"27":function(container,depth0,helpers,partials,data) {
    return "\r\n                        style=\" z-index: 70;\" ";
},"29":function(container,depth0,helpers,partials,data) {
    return " custom-button-request-quote-edit ";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <section class=\"product-details-full-actions clearfix\">\r\n                            <div data-view=\"Quantity\"></div>\r\n\r\n                            <div class=\"product-details-full-actions-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"Toshowcart") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data})) != null ? stack1 : "")
    + "                                <!-- <div data-view=\"ProductDetails.AddToQuote\" class=\"product-details-full-actions-addtoquote\"></div> -->\r\n                                <!-- <div data-view=\"AddToProductList\" class=\"product-details-full-actions-addtowishlist\"></div> -->\r\n                            </div>\r\n\r\n                        </section>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    return "                                <div data-view=\"MainActionView\"></div>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    return "								<div><div class=\"custom-button-item-page-add-to-cart\" style=\"background-color:white !important;\"></div></div>\r\n";
},"36":function(container,depth0,helpers,partials,data) {
    return " product-details-full-actions-addtoquote ";
},"38":function(container,depth0,helpers,partials,data) {
    return "                        <div data-view=\"AddToProductList\" class=\"product-details-full-actions-addtowishlist\"></div>\r\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = (compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"storedetaileddescription") : stack1),{"name":"translate","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_voltage") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(45, data, 0),"data":data})) != null ? stack1 : "");
},"43":function(container,depth0,helpers,partials,data) {
    return "";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Output Voltage</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_voltage") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_over_temperature_range") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(48, data, 0),"data":data})) != null ? stack1 : "");
},"48":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Over Temperature Range</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_over_temperature_range") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_voltage") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(51, data, 0),"data":data})) != null ? stack1 : "");
},"51":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Voltage</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_voltage") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_battery_120") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(54, data, 0),"data":data})) != null ? stack1 : "");
},"54":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Capacity battery 120</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_battery_120") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"56":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_battery_100") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(57, data, 0),"data":data})) != null ? stack1 : "");
},"57":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Capacity battery 100</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_battery_100") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"59":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ip_rating") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(60, data, 0),"data":data})) != null ? stack1 : "");
},"60":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>IP Rating</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ip_rating") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"62":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_efficiency_typical") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(63, data, 0),"data":data})) != null ? stack1 : "");
},"63":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Max efficiency typical</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_efficiency_typical") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"65":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_in_sitemap") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(66, data, 0),"data":data})) != null ? stack1 : "");
},"66":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Frequency in sitemap</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_in_sitemap") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"68":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cavity_filter_type") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(69, data, 0),"data":data})) != null ? stack1 : "");
},"69":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Cavity Filter Type</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cavity_filter_type") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"71":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ferrite_circulator_type") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(72, data, 0),"data":data})) != null ? stack1 : "");
},"72":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Ferrite Circulator Type</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ferrite_circulator_type") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"74":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_receiver_preselector_freq") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(75, data, 0),"data":data})) != null ? stack1 : "");
},"75":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Receiver Preselector Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_receiver_preselector_freq") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"77":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cavity_diameter") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(78, data, 0),"data":data})) != null ? stack1 : "");
},"78":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Cavity diameter</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cavity_diameter") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"80":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cavity_filter_frequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(81, data, 0),"data":data})) != null ? stack1 : "");
},"81":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Cavity Filter Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cavity_filter_frequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"83":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_termination_connectors") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(84, data, 0),"data":data})) != null ? stack1 : "");
},"84":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Termination connectors</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_termination_connectors") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"86":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_attenuation_value") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(87, data, 0),"data":data})) != null ? stack1 : "");
},"87":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Attenuation value</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_attenuation_value") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"89":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_attenuation_accuracy") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(90, data, 0),"data":data})) != null ? stack1 : "");
},"90":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Attenuation accuracy</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_attenuation_accuracy") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"92":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_rating_maximum") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(93, data, 0),"data":data})) != null ? stack1 : "");
},"93":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Power Rating Maximum</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_rating_maximum") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"95":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_input_power_cw_max") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(96, data, 0),"data":data})) != null ? stack1 : "");
},"96":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Input Power CW Max</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_input_power_cw_max") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"98":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_pass_bandwidth") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(99, data, 0),"data":data})) != null ? stack1 : "");
},"99":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Pass bandwidth</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_pass_bandwidth") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"101":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_typ_isolation") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(102, data, 0),"data":data})) != null ? stack1 : "");
},"102":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Typ isolation</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_typ_isolation") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"104":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_wavelength") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(105, data, 0),"data":data})) != null ? stack1 : "");
},"105":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Wavelength</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_wavelength") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"107":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_typ_loss_db") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(108, data, 0),"data":data})) != null ? stack1 : "");
},"108":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Typical Loss dB</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_typ_loss_db") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"110":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_splits") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(111, data, 0),"data":data})) != null ? stack1 : "");
},"111":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Splits</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_splits") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"113":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_size_mm") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(114, data, 0),"data":data})) != null ? stack1 : "");
},"114":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Size mm</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_size_mm") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"116":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_shipping") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(117, data, 0),"data":data})) != null ? stack1 : "");
},"117":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Shipping</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_shipping") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"119":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rf_power_w") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(120, data, 0),"data":data})) != null ? stack1 : "");
},"120":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>RF Power W</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rf_power_w") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"122":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_return_loss_vswr") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(123, data, 0),"data":data})) != null ? stack1 : "");
},"123":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Return Loss VSWR</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_return_loss_vswr") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"125":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_port_to_port_isolation") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(126, data, 0),"data":data})) != null ? stack1 : "");
},"126":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Port To Port Isolation</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_port_to_port_isolation") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"128":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_pim_3rd_order_2x43dbm") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(129, data, 0),"data":data})) != null ? stack1 : "");
},"129":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>PIM 3rd Order 2x43dBm</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_pim_3rd_order_2x43dbm") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"131":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_min_frequency_separation") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(132, data, 0),"data":data})) != null ? stack1 : "");
},"132":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Min Frequency Separation</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_min_frequency_separation") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"134":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_min_sep_mhz") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(135, data, 0),"data":data})) != null ? stack1 : "");
},"135":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Minimum Separation MHz</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_min_sep_mhz") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"137":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_load_rating") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(138, data, 0),"data":data})) != null ? stack1 : "");
},"138":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Load rating</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_load_rating") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"140":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_isolation") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(141, data, 0),"data":data})) != null ? stack1 : "");
},"141":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Isolation</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_isolation") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"143":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_finish") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(144, data, 0),"data":data})) != null ? stack1 : "");
},"144":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Finish</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_finish") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"146":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_conn_types_all_terminatio") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(147, data, 0),"data":data})) != null ? stack1 : "");
},"147":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Connector Types All Termiantion Ports</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_conn_types_all_terminatio") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"149":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_frequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(150, data, 0),"data":data})) != null ? stack1 : "");
},"150":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Max Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_frequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"152":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_type_connectors") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(153, data, 0),"data":data})) != null ? stack1 : "");
},"153":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Cable Type Connectors</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_type_connectors") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"155":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_atten_per_30m_900mhz") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(156, data, 0),"data":data})) != null ? stack1 : "");
},"156":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Attenuation Per 30m MHz</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_atten_per_30m_900mhz") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"158":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_colour") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(159, data, 0),"data":data})) != null ? stack1 : "");
},"159":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Colour</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_colour") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"161":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_labels_pack") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(162, data, 0),"data":data})) != null ? stack1 : "");
},"162":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Labels Pack</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_labels_pack") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"164":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_thermal_shock") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(165, data, 0),"data":data})) != null ? stack1 : "");
},"165":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Thermal Shock</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_thermal_shock") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"167":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_salt_spray") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(168, data, 0),"data":data})) != null ? stack1 : "");
},"168":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Salt Spray</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_salt_spray") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"170":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_retention") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(171, data, 0),"data":data})) != null ? stack1 : "");
},"171":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Cable Retention</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_retention") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"173":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_coupling_nut_retention") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(174, data, 0),"data":data})) != null ? stack1 : "");
},"174":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Coupling Nut Retention</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_coupling_nut_retention") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"176":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_durability") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(177, data, 0),"data":data})) != null ? stack1 : "");
},"177":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Durability</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_durability") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"179":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_mating") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(180, data, 0),"data":data})) != null ? stack1 : "");
},"180":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Mating</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_mating") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"182":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_outer_contact") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(183, data, 0),"data":data})) != null ? stack1 : "");
},"183":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Outer Contact</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_outer_contact") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"185":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_centre_contact") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(186, data, 0),"data":data})) != null ? stack1 : "");
},"186":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Centre Contact</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_centre_contact") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"188":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_cycles_10") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(189, data, 0),"data":data})) != null ? stack1 : "");
},"189":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Number Cycles (10)</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_cycles_10") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"191":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_shield") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(192, data, 0),"data":data})) != null ? stack1 : "");
},"192":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Shield</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_shield") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"194":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vibration") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(195, data, 0),"data":data})) != null ? stack1 : "");
},"195":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Vibration</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vibration") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"197":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_type_of_jacket") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(198, data, 0),"data":data})) != null ? stack1 : "");
},"198":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Type of jacket</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_type_of_jacket") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"200":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemrfi_operation_frequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(201, data, 0),"data":data})) != null ? stack1 : "");
},"201":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Operational Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemrfi_operation_frequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"203":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_velocity") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(204, data, 0),"data":data})) != null ? stack1 : "");
},"204":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Nominal Velocity</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_velocity") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"206":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_jacket_od_mm") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(207, data, 0),"data":data})) != null ? stack1 : "");
},"207":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Jacket Outer Dimension mm</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_jacket_od_mm") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"209":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_impedance_ohms") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(210, data, 0),"data":data})) != null ? stack1 : "");
},"210":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Impedance</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_impedance_ohms") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"212":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dielectric") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(213, data, 0),"data":data})) != null ? stack1 : "");
},"213":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Dielectric</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dielectric") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"215":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_crimp_set_or_tool") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(216, data, 0),"data":data})) != null ? stack1 : "");
},"216":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Crimp Set or Tool</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_crimp_set_or_tool") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"218":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_center_conductor") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(219, data, 0),"data":data})) != null ? stack1 : "");
},"219":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Centre Conductor</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_center_conductor") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"221":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_type") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(222, data, 0),"data":data})) != null ? stack1 : "");
},"222":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Cable Type</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_type") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"224":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemcellular_frequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(225, data, 0),"data":data})) != null ? stack1 : "");
},"225":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Cellular Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemcellular_frequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"227":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_uhf_frequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(228, data, 0),"data":data})) != null ? stack1 : "");
},"228":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>UHF Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_uhf_frequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"230":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vhf_frequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(231, data, 0),"data":data})) != null ? stack1 : "");
},"231":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>VHF Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vhf_frequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"233":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_vhf") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(234, data, 0),"data":data})) != null ? stack1 : "");
},"234":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Frequency VHF</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_vhf") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"236":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_impedance_vhf") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(237, data, 0),"data":data})) != null ? stack1 : "");
},"237":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Impedance VHF</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_impedance_vhf") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"239":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_connector_vhf") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(240, data, 0),"data":data})) != null ? stack1 : "");
},"240":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Connector VHF</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_connector_vhf") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"242":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_cycles_50") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(243, data, 0),"data":data})) != null ? stack1 : "");
},"243":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Number Cycles (50)</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_cycles_50") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"245":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_gain_dbq") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(246, data, 0),"data":data})) != null ? stack1 : "");
},"246":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Nominal Gain dBq</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_gain_dbq") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"248":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_cycles_80") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(249, data, 0),"data":data})) != null ? stack1 : "");
},"249":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Number Cycles (80)</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_cycles_80") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"251":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_packaging") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(252, data, 0),"data":data})) != null ? stack1 : "");
},"252":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Packaging</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_packaging") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"254":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_whip_material") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(255, data, 0),"data":data})) != null ? stack1 : "");
},"255":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Whip Material</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_whip_material") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"257":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_whip_length_mm") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(258, data, 0),"data":data})) != null ? stack1 : "");
},"258":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Whip Length mm</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_whip_length_mm") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"260":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_battery_10") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(261, data, 0),"data":data})) != null ? stack1 : "");
},"261":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Capacity Battery (10)</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_battery_10") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"263":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_mounting") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(264, data, 0),"data":data})) != null ? stack1 : "");
},"264":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Mounting</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_mounting") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"266":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_and_connector") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(267, data, 0),"data":data})) != null ? stack1 : "");
},"267":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Cable And Connector</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_and_connector") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"269":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_tuning") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(270, data, 0),"data":data})) != null ? stack1 : "");
},"270":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Tuning</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_tuning") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"272":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_band") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(273, data, 0),"data":data})) != null ? stack1 : "");
},"273":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Band</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_band") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"275":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_material") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(276, data, 0),"data":data})) != null ? stack1 : "");
},"276":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Material</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_material") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"278":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_continuous_power") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(279, data, 0),"data":data})) != null ? stack1 : "");
},"279":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Continuous Power</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_continuous_power") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"281":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_current_a") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(282, data, 0),"data":data})) != null ? stack1 : "");
},"282":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Current (A)</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_current_a") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"284":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_return_loss_db") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(285, data, 0),"data":data})) != null ? stack1 : "");
},"285":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Return Loss dB</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_return_loss_db") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"287":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_insertion_loss_db") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(288, data, 0),"data":data})) != null ? stack1 : "");
},"288":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Insertion Loss dB</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_insertion_loss_db") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"290":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_under_voltage_restart") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(291, data, 0),"data":data})) != null ? stack1 : "");
},"291":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Under Voltage Restart</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_under_voltage_restart") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"293":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_input") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(294, data, 0),"data":data})) != null ? stack1 : "");
},"294":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Power Input</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_input") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"296":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_under_voltage_shutdown") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(297, data, 0),"data":data})) != null ? stack1 : "");
},"297":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Under Voltage Shutdown</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_under_voltage_shutdown") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"299":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_cable_crosssection") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(300, data, 0),"data":data})) != null ? stack1 : "");
},"300":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Max Cable Crosssection</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_cable_crosssection") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"302":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dc_connections") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(303, data, 0),"data":data})) != null ? stack1 : "");
},"303":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>DC Connections</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dc_connections") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"305":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_of_outputs") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(306, data, 0),"data":data})) != null ? stack1 : "");
},"306":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Number Of Outputs</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_of_outputs") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"308":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_algorithum") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(309, data, 0),"data":data})) != null ? stack1 : "");
},"309":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Charge Algorithum</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_algorithum") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"311":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ip_protection_category") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(312, data, 0),"data":data})) != null ? stack1 : "");
},"312":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>IP Protection Category</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ip_protection_category") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"314":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ac_connection") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(315, data, 0),"data":data})) != null ? stack1 : "");
},"315":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>AC Connection</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ac_connection") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"317":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_humidity_noncondensing") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(318, data, 0),"data":data})) != null ? stack1 : "");
},"318":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Humidity Non-Condensing</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_humidity_noncondensing") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"320":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_protection_over_temperat") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(321, data, 0),"data":data})) != null ? stack1 : "");
},"321":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Protection Over Temperature</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_protection_over_temperat") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"323":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_protection_output_sc") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(324, data, 0),"data":data})) != null ? stack1 : "");
},"324":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Protection Output Shortcircuit</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_protection_output_sc") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"326":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_protect_reverse_polarity") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(327, data, 0),"data":data})) != null ? stack1 : "");
},"327":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Protection Reverse Polarity</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_protect_reverse_polarity") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"329":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_current") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(330, data, 0),"data":data})) != null ? stack1 : "");
},"330":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Charge Current</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_current") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"332":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_voltage_storage") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(333, data, 0),"data":data})) != null ? stack1 : "");
},"333":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Charge Voltage Storage</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_voltage_storage") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"335":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_voltage_float") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(336, data, 0),"data":data})) != null ? stack1 : "");
},"336":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Charge Voltage Float</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_voltage_float") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"338":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_voltage_absorption") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(339, data, 0),"data":data})) != null ? stack1 : "");
},"339":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Charge Voltage Absorption</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_voltage_absorption") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"341":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_current_contin") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(342, data, 0),"data":data})) != null ? stack1 : "");
},"342":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Output Current Continuous</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_current_contin") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"344":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_power_w") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(345, data, 0),"data":data})) != null ? stack1 : "");
},"345":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Output Power W</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_power_w") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"347":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_self_disch_25degc") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(348, data, 0),"data":data})) != null ? stack1 : "");
},"348":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Self Disch @ 25 Degree C</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_self_disch_25degc") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"350":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_internal_resist_25degc") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(351, data, 0),"data":data})) != null ? stack1 : "");
},"351":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Internal Resistance @ Degree C</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_internal_resist_25degc") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"353":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_25degc") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(354, data, 0),"data":data})) != null ? stack1 : "");
},"354":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Capacity @ 25 Degree C</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_25degc") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"356":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_rating_watts") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(357, data, 0),"data":data})) != null ? stack1 : "");
},"357":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Power Rating Watts</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_rating_watts") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"359":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_terminal") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(360, data, 0),"data":data})) != null ? stack1 : "");
},"360":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Terminal</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_terminal") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"362":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rated_capacity_20h") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(363, data, 0),"data":data})) != null ? stack1 : "");
},"363":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Rated Capacity 20H</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rated_capacity_20h") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"365":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_voltage_v_adj") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(366, data, 0),"data":data})) != null ? stack1 : "");
},"366":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Output Voltage V Adj</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_voltage_v_adj") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"368":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemoutput_voltage_v") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(369, data, 0),"data":data})) != null ? stack1 : "");
},"369":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Output Voltage V</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemoutput_voltage_v") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"371":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_noise_mv") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(372, data, 0),"data":data})) != null ? stack1 : "");
},"372":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Output Noise mV</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_noise_mv") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"374":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_off_load_current_ma") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(375, data, 0),"data":data})) != null ? stack1 : "");
},"375":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Off Load Current mA</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_off_load_current_ma") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"377":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_voltage") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(378, data, 0),"data":data})) != null ? stack1 : "");
},"378":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Nominal Voltage</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_voltage") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"380":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_continuous_load_cur") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(381, data, 0),"data":data})) != null ? stack1 : "");
},"381":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Max Continuous Load Current</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_continuous_load_cur") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"383":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_input_voltage_range_v") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(384, data, 0),"data":data})) != null ? stack1 : "");
},"384":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Input Voltage Range V</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_input_voltage_range_v") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"386":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_galvanic_isolation") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(387, data, 0),"data":data})) != null ? stack1 : "");
},"387":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Galvanic Isolation</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_galvanic_isolation") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"389":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_efficiency_percent") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(390, data, 0),"data":data})) != null ? stack1 : "");
},"390":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Efficiency Percent</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_efficiency_percent") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"392":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_battery_connection") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(393, data, 0),"data":data})) != null ? stack1 : "");
},"393":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Battery Connection</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_battery_connection") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"395":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_availablefrequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(396, data, 0),"data":data})) != null ? stack1 : "");
},"396":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Available Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_availablefrequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"398":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_case") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(399, data, 0),"data":data})) != null ? stack1 : "");
},"399":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Case</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_case") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"401":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dc_supply2") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(402, data, 0),"data":data})) != null ? stack1 : "");
},"402":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>DC Supply</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dc_supply2") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"404":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_current_consumption2") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(405, data, 0),"data":data})) != null ? stack1 : "");
},"405":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Current Consumption</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_current_consumption2") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"407":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_impedance") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(408, data, 0),"data":data})) != null ? stack1 : "");
},"408":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Output Impedance</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_impedance") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"410":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_operational_temp_range") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(411, data, 0),"data":data})) != null ? stack1 : "");
},"411":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Operational Temperature Range</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_operational_temp_range") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"413":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_weight_inc_frame") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(414, data, 0),"data":data})) != null ? stack1 : "");
},"414":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Weight Inc Frame</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_weight_inc_frame") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"416":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rf_gain") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(417, data, 0),"data":data})) != null ? stack1 : "");
},"417":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>RF Gain</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rf_gain") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"419":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rf_connectors") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(420, data, 0),"data":data})) != null ? stack1 : "");
},"420":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>RF Connectors</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rf_connectors") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"422":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_supply") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(423, data, 0),"data":data})) != null ? stack1 : "");
},"423":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Power Supply</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_supply") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"425":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ambient_temp_range") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(426, data, 0),"data":data})) != null ? stack1 : "");
},"426":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Ambient Temp Range</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ambient_temp_range") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"428":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_battery_type") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(429, data, 0),"data":data})) != null ? stack1 : "");
},"429":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Battery type</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_battery_type") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"431":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_connector") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(432, data, 0),"data":data})) != null ? stack1 : "");
},"432":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Connector</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_connector") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"434":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_range") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(435, data, 0),"data":data})) != null ? stack1 : "");
},"435":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Frequency Range</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_range") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"437":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_impedance") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(438, data, 0),"data":data})) != null ? stack1 : "");
},"438":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Impedance</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_impedance") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"440":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemfrequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(441, data, 0),"data":data})) != null ? stack1 : "");
},"441":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemfrequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"443":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemcollinear_frequency_multiselec") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(444, data, 0),"data":data})) != null ? stack1 : "");
},"444":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Collinear Frequency Multiselect</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemcollinear_frequency_multiselec") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"446":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitembase_cellular_yagi") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(447, data, 0),"data":data})) != null ? stack1 : "");
},"447":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Base Cellular Yagi</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitembase_cellular_yagi") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"449":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitembase_vhf_frequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(450, data, 0),"data":data})) != null ? stack1 : "");
},"450":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Base VHF Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitembase_vhf_frequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"452":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_base_uhf_frequency") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(453, data, 0),"data":data})) != null ? stack1 : "");
},"453":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Base UHF Frequency</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_base_uhf_frequency") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"455":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_base_gain") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(456, data, 0),"data":data})) != null ? stack1 : "");
},"456":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Base Gain</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_base_gain") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"458":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_wind_gust_ratingkmh") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(459, data, 0),"data":data})) != null ? stack1 : "");
},"459":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Wind Load (Thrust) @ 160km/h N</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_wind_gust_ratingkmh") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"461":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_torque160kmh") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(462, data, 0),"data":data})) != null ? stack1 : "");
},"462":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Torque @ 160km/h Nm</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_torque160kmh") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"464":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_impedance") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(465, data, 0),"data":data})) != null ? stack1 : "");
},"465":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Nominal impedance</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_impedance") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"467":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_product_name") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(468, data, 0),"data":data})) != null ? stack1 : "");
},"468":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Frequency Product Name</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_product_name") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"470":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_w") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(471, data, 0),"data":data})) != null ? stack1 : "");
},"471":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Power w</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_w") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"473":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_gain_dbi") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(474, data, 0),"data":data})) != null ? stack1 : "");
},"474":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Nominal Gain Dbi</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_gain_dbi") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"476":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dimensions") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(477, data, 0),"data":data})) != null ? stack1 : "");
},"477":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Dimensions</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dimensions") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"479":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_polarisation") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(480, data, 0),"data":data})) != null ? stack1 : "");
},"480":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Polarisation</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_polarisation") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"482":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vswr") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(483, data, 0),"data":data})) != null ? stack1 : "");
},"483":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>VSWR</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vswr") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"485":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_termination") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(486, data, 0),"data":data})) != null ? stack1 : "");
},"486":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Termination</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_termination") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"488":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_radome_diameter_mm") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(489, data, 0),"data":data})) != null ? stack1 : "");
},"489":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Radome Diameter Mm</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_radome_diameter_mm") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"491":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_mounting_area") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(492, data, 0),"data":data})) != null ? stack1 : "");
},"492":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Mounting area</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_mounting_area") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"494":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_construction") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(495, data, 0),"data":data})) != null ? stack1 : "");
},"495":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Construction</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_construction") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"497":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vertical_beamwidth") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(498, data, 0),"data":data})) != null ? stack1 : "");
},"498":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Vertical beamwidth</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vertical_beamwidth") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"500":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_tuned_bandwidth") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(501, data, 0),"data":data})) != null ? stack1 : "");
},"501":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Tuned bandwidth</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_tuned_bandwidth") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"503":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_peak_instant_power_kw") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(504, data, 0),"data":data})) != null ? stack1 : "");
},"504":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Peak Instantaneous POWER Kw</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_peak_instant_power_kw") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"506":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitempassive_im_3rd_order_2x20w_dbc") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(507, data, 0),"data":data})) != null ? stack1 : "");
},"507":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Passive IM 3rd Order (2x20W) dBc</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitempassive_im_3rd_order_2x20w_dbc") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"509":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_gain_dbd") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(510, data, 0),"data":data})) != null ? stack1 : "");
},"510":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Nominal Gain dBd</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_gain_dbd") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"512":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_horizontal_beamwidth") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(513, data, 0),"data":data})) != null ? stack1 : "");
},"513":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Horizontal Beamwidth</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_horizontal_beamwidth") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"515":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_front_back_ratio_db") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(516, data, 0),"data":data})) != null ? stack1 : "");
},"516":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Front Back ratio dB</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_front_back_ratio_db") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"518":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_mhz") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(519, data, 0),"data":data})) != null ? stack1 : "");
},"519":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Frequency MHz</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_mhz") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"521":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_downtilt") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(522, data, 0),"data":data})) != null ? stack1 : "");
},"522":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Downtilt</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_downtilt") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"524":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_sug_solar_cap_for_48v_batt") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(525, data, 0),"data":data})) != null ? stack1 : "");
},"525":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Suggested Solar Capacity for 48V Batteries [W]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_sug_solar_cap_for_48v_batt") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"527":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_sug_solar_cap_for_24v_batt") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(528, data, 0),"data":data})) != null ? stack1 : "");
},"528":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Suggested Solar Capacity for 24V Batteries [W]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_sug_solar_cap_for_24v_batt") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"530":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_length_mm") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(531, data, 0),"data":data})) != null ? stack1 : "");
},"531":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Length [mm]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_length_mm") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"533":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_width_mm") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(534, data, 0),"data":data})) != null ? stack1 : "");
},"534":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Width [mm]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_width_mm") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"536":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_number_cells") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(537, data, 0),"data":data})) != null ? stack1 : "");
},"537":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Number of Cells</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_number_cells") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"539":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_voltage_max") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(540, data, 0),"data":data})) != null ? stack1 : "");
},"540":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Maximum System Voltage [V]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_voltage_max") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"542":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_solar_leads_connectors") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(543, data, 0),"data":data})) != null ? stack1 : "");
},"543":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Module Cables</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_solar_leads_connectors") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"545":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_solar_power_tolerance") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(546, data, 0),"data":data})) != null ? stack1 : "");
},"546":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Pmp Tolerance</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_solar_power_tolerance") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"548":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_junction_box") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(549, data, 0),"data":data})) != null ? stack1 : "");
},"549":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Junction Box</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_junction_box") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"551":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_noct") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(552, data, 0),"data":data})) != null ? stack1 : "");
},"552":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>NOCT [Â°C]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_noct") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"554":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_isc_temp_coefficient") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(555, data, 0),"data":data})) != null ? stack1 : "");
},"555":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Isc Temp Coefficient [%/Â°C]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_isc_temp_coefficient") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"557":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_voc_temp_coefficient") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(558, data, 0),"data":data})) != null ? stack1 : "");
},"558":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Voc Temp Coefficient [%/Â°C]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_voc_temp_coefficient") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"560":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_temperature_coefficent") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(561, data, 0),"data":data})) != null ? stack1 : "");
},"561":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Pmp Temp Coefficient [%/Â°C]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_temperature_coefficent") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"563":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_open_circuit_voltage") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(564, data, 0),"data":data})) != null ? stack1 : "");
},"564":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Open Circuit Voltage (Voc) [V]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_open_circuit_voltage") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"566":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_isc") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(567, data, 0),"data":data})) != null ? stack1 : "");
},"567":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Short Circuit Current (Isc) [A]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_isc") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"569":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_imp") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(570, data, 0),"data":data})) != null ? stack1 : "");
},"570":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Maximum Power Current (Imp) [A]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_imp") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"572":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_maximum_power_voltage") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(573, data, 0),"data":data})) != null ? stack1 : "");
},"573":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Maximum Power Voltage (Vmp) [V]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_maximum_power_voltage") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"575":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pv_technology") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(576, data, 0),"data":data})) != null ? stack1 : "");
},"576":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Solar Cell Type</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pv_technology") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"578":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_frame_colour") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(579, data, 0),"data":data})) != null ? stack1 : "");
},"579":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Frame Colour</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_frame_colour") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"581":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_fuse_rating_max") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(582, data, 0),"data":data})) != null ? stack1 : "");
},"582":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Maximum Series Fuse rating [A]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_fuse_rating_max") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"584":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_power_max") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(585, data, 0),"data":data})) != null ? stack1 : "");
},"585":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Maximum Power (Pmp) [W]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_power_max") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"587":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_device_family") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(588, data, 0),"data":data})) != null ? stack1 : "");
},"588":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Device Family</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_device_family") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"590":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_type_of_charger") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(591, data, 0),"data":data})) != null ? stack1 : "");
},"591":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Type of Charger</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_type_of_charger") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"593":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_load_control_a") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(594, data, 0),"data":data})) != null ? stack1 : "");
},"594":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Load Control [A DC]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_load_control_a") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"596":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_ground_type") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(597, data, 0),"data":data})) != null ? stack1 : "");
},"597":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Grounding Polarity</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_ground_type") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"599":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_remote_communications") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(600, data, 0),"data":data})) != null ? stack1 : "");
},"600":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Remote Communications</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_remote_communications") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"602":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_suggested_solar_capacity_f") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(603, data, 0),"data":data})) != null ? stack1 : "");
},"603":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Suggested Solar Capacity for 12V Batteries [W]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_suggested_solar_capacity_f") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"605":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_maximum_solar_array_voc") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(606, data, 0),"data":data})) != null ? stack1 : "");
},"606":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Maximum Solar Array Voc [V DC]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_maximum_solar_array_voc") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"608":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_mounting") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(609, data, 0),"data":data})) != null ? stack1 : "");
},"609":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Mounting </td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_mounting") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"611":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_temperature_compensation") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(612, data, 0),"data":data})) != null ? stack1 : "");
},"612":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Temperature Compensated Charging</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_temperature_compensation") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"614":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_adjustable_regulation_set_") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(615, data, 0),"data":data})) != null ? stack1 : "");
},"615":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Adjustable Battery Charging Parameters</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_adjustable_regulation_set_") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"617":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_low_voltage_disconnect_lvd") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(618, data, 0),"data":data})) != null ? stack1 : "");
},"618":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Low Voltage Disconnect (LVD)</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_low_voltage_disconnect_lvd") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"620":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_maximum_charge_current_a") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(621, data, 0),"data":data})) != null ? stack1 : "");
},"621":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Maximum Output Current [A DC]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_maximum_charge_current_a") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"623":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_nominal_dc_voltage") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(624, data, 0),"data":data})) != null ? stack1 : "");
},"624":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Nominal DC Voltage [V]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_nominal_dc_voltage") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"626":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_cec_number_list") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(627, data, 0),"data":data})) != null ? stack1 : "");
},"627":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>CEC List Model Number</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_cec_number_list") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"629":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_battery_type") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(630, data, 0),"data":data})) != null ? stack1 : "");
},"630":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Battery Type</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_battery_type") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"632":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_temp_range") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(633, data, 0),"data":data})) != null ? stack1 : "");
},"633":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Operating Temperature Range [°C]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_temp_range") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"635":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_display_interface") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(636, data, 0),"data":data})) != null ? stack1 : "");
},"636":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Display Interface</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_display_interface") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"638":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_ip_rating") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(639, data, 0),"data":data})) != null ? stack1 : "");
},"639":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>IP Rating</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_ip_rating") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"641":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_backsheet_colour") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(642, data, 0),"data":data})) != null ? stack1 : "");
},"642":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Backsheet Colour</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_backsheet_colour") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"644":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_brand_solar") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(645, data, 0),"data":data})) != null ? stack1 : "");
},"645":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Brand</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_brand_solar") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"647":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_quantity_per_pallet") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(648, data, 0),"data":data})) != null ? stack1 : "");
},"648":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Quantity Per Pallet</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_quantity_per_pallet") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"650":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_weight") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(651, data, 0),"data":data})) != null ? stack1 : "");
},"651":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Weight [kg]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_weight") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"653":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_depth_mm") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(654, data, 0),"data":data})) != null ? stack1 : "");
},"654":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Depth [mm]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_depth_mm") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"656":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_height_mm") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(657, data, 0),"data":data})) != null ? stack1 : "");
},"657":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Height [mm]</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_height_mm") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"659":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rated_temp") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(660, data, 0),"data":data})) != null ? stack1 : "");
},"660":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Rated Temperature</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rated_temp") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"662":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_comp_type") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(663, data, 0),"data":data})) != null ? stack1 : "");
},"663":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Component Type</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_comp_type") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"665":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_batt_volts") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(666, data, 0),"data":data})) != null ? stack1 : "");
},"666":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Battery Voltage</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_batt_volts") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"668":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_cpcty_ah") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(669, data, 0),"data":data})) != null ? stack1 : "");
},"669":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Capacity (AH)</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_cpcty_ah") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"671":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_cpcty_kwh") : stack1),"&nbsp;",{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(672, data, 0),"data":data})) != null ? stack1 : "");
},"672":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                            <tr>\r\n                                <td>Capacity (KWH)</td>\r\n                                <td>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_cpcty_kwh") : stack1), depth0))
    + "</td>\r\n                            <tr>";
},"674":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_1") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\"\r\n                                download=\"pdf\">"
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf1") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\r\n                        </li>\r\n";
},"675":function(container,depth0,helpers,partials,data) {
    return " ";
},"677":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_2") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf2") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"679":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_3") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf3") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"681":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_4") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf4") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"683":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_5") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf5") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"685":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_6") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf6") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"687":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_7") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf7") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"689":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_8") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf8") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"691":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_9") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf9") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\r\n                        </li>\r\n";
},"693":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_10") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf10") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"695":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_11") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\"\r\n                                download=\"pdf\">"
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf11") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\r\n                        </li>\r\n";
},"697":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_12") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf12") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"699":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_13") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf13") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"701":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_14") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf14") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"703":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_15") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf15") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"705":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_16") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf16") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"707":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_17") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf17") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"709":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_18") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf18") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"711":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_19") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf19") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\r\n                        </li>\r\n";
},"713":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_20") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf20") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"715":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_21") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf21") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"717":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_22") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf22") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"719":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_23") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf23") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"721":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_24") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf24") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </a>\r\n                        </li>\r\n";
},"723":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <li>\r\n                            <a href='"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_25") : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pdf25") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\r\n                        </li>\r\n";
},"725":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                        "
    + container.escapeExpression(compilerNameLookup(helpers,"log").call(alias1,depth0,{"name":"log","hash":{},"data":data}))
    + "\r\n                             <li>\r\n                            <a href='"
    + ((stack1 = container.lambda((depth0 != null ? compilerNameLookup(depth0,"url") : depth0), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" download=\"pdf\">\r\n                                "
    + ((stack1 = (compilerNameLookup(helpers,"pdfsplit") || (depth0 && compilerNameLookup(depth0,"pdfsplit")) || helpers.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"pdfsplit","hash":{},"fn":container.program(675, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\r\n                        </li>\r\n";
},"727":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n		<div class=\"details-store-description collapse\" id=\"details-store-description\">\r\n			<div class=\"card card-body\">\r\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"storedetaileddescription") : stack1),{"name":"translate","hash":{},"data":data}))
    + "\r\n			</div>\r\n		</div>\r\n		";
},"729":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n		<div class=\"specifications-pdp collapse\" id=\"specifications-pdp\">\r\n		<div class=\"card card-body\"> -->\r\n        <!-- ============================= PERSONAL CUSTOM ============================= -->\r\n        <!-- 			<table class=\"blueTable\">\r\n				<tbody>\r\n				<tr>\r\n				<td>cell1_1</td><td>cell2_1</td></tr>\r\n				</tbody>\r\n			</table> -->\r\n        <!-- =========================== END PERSONAL CUSTOM =========================== -->\r\n\r\n        <!-- 			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"featureddescription") : stack1),{"name":"translate","hash":{},"data":data}))
    + "\r\n		</div>\r\n\r\n	</div>\r\n";
},"731":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"pdfs-content-pdp collapse\" id=\"pdfs-pdp\">\r\n		<div class=\"card card-body\">\r\n			<a href='"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_tab") : stack1),{"name":"translate","hash":{},"data":data}))
    + "'> Download PDF </a>\r\n		</div>\r\n\r\n	</div>\r\n		";
},"733":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"product-details-full-content-correlated-items\">\r\n            <div data-view=\"Correlated.Items\"></div>\r\n        </div>\r\n\r\n";
},"735":function(container,depth0,helpers,partials,data) {
    return "\r\n\r\n        <div class=\"product-details-full-content-related-items\">\r\n            <div data-view=\"Related.Items\">\r\n            </div>\r\n        </div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "\r\n<div data-cms-area=\"sdb-landmark_item_details_banner\" data-cms-area-filters=\"page_type\"></div>\r\n<div class=\"product-details-full\">\r\n\r\n    <!-- ====================================== ORIGINAL TITLE HEADER =========================================== -->\r\n    <!-- 	<header class=\"product-details-full-header\">\r\n		<div id=\"banner-content-top\" class=\"product-details-full-banner-top\"></div>\r\n		<div class=\"product-details-full-content-header\">\r\n			<h1 class=\"product-details-full-content-header-title\" itemprop=\"name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h1>\r\n			<div class=\"row product-details-full-content-title-secondline\">\r\n				<div class=\"container\">\r\n					<div data-view=\"Product.Sku\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"mpn") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<div class=\"product-details-full-rating\" data-view=\"Global.StarRating\"></div> -->\r\n    <!-- addition START BADGES -->\r\n    <!-- 					<div class=\"pdp-badge\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"badge") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</div> -->\r\n    <!-- addition END BADGES -->\r\n    <!-- 				</div>\r\n			</div>\r\n			<div data-cms-area=\"item_info\" data-cms-area-filters=\"path\"></div>\r\n		</div>\r\n	</header> -->\r\n    <!-- ====================================== END ORIGINAL TITLE HEADER =========================================== -->\r\n    <!-- <div class=\"product-details-full-divider-desktop\"></div> -->\r\n    <article class=\"product-details-full-content\" itemscope itemtype=\"https://schema.org/Product\">\r\n        <meta itemprop=\"url\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div id=\"banner-details-top\" class=\"product-details-full-banner-top-details\"></div>\r\n\r\n        <section class=\"product-details-full-main-content\">\r\n            <div class=\"product-details-full-main-content-left\">\r\n                <div class=\"product-details-full-image-gallery-container\">\r\n                    <div id=\"banner-image-top\" class=\"content-banner banner-image-top\"></div>\r\n                    <div data-view=\"Product.ImageGallery\"></div>\r\n                    <div id=\"banner-image-bottom\" class=\"content-banner banner-image-bottom\"></div>\r\n                </div>\r\n                <!-- Social Sharing -->\r\n                <!-- 				<div class=\"product-details-full-social-share\">\r\n					<p>Share: </p>\r\n					<div data-view=\"SocialSharing.Flyout\" class=\"product-details-full-social-sharing\"></div> -->\r\n                <!--<script type=\"text/javascript\" src=\"//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5720c41ce66f063f\"></script>\r\n					<div class=\"addthis_sharing_toolbox\"></div>-->\r\n                <!-- </div> -->\r\n            </div>\r\n\r\n            <div class=\"product-details-full-main-content-right\">\r\n                <div class=\"product-details-full-divider\"></div>\r\n                <div class=\"stock-boxes hidde-desktop\">\r\n                    <div class=\"stock-container\" data-view=\"Product.Stock.Info\"></div>\r\n                    <div data-view=\"StockDescription\"></div>\r\n                </div>\r\n                <!-- ======================================== NEW HEADER TITLE ======================================== -->\r\n                <div class=\"product-details-full-header\">\r\n                    <div id=\"banner-content-top\" class=\"product-details-full-banner-top\"></div>\r\n                    <div class=\"product-details-full-content-header\">\r\n                        <h1 class=\"product-details-full-content-header-title\" itemprop=\"name\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"displayname") : stack1), depth0))
    + "\r\n                        </h1>\r\n                        <div class=\"row product-details-full-content-title-secondline\">\r\n                            <div class=\"container container-top-product\">\r\n                                <div data-view=\"Product.Sku\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"mpn") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                <div class=\"short-description\" id=\"short-description\">\r\n                                    "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"featureddescription") : stack1),{"name":"translate","hash":{},"data":data}))
    + "\r\n                                </div>\r\n                                <!--<div class=\"product-details-full-rating\" data-view=\"Global.StarRating\"></div>\r\n								 addition START BADGES -->\r\n                                <div class=\"pdp-badge\">\r\n                                    "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"badge") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                </div>\r\n                                <!-- addition END BADGES -->\r\n                            </div>\r\n                        </div>\r\n                        <div data-cms-area=\"item_info\" data-cms-area-filters=\"path\"></div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- ====================================== END NEW HEADER TITLE ====================================== -->\r\n\r\n\r\n                <div class=\"product-details-full-main\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n                    <div id=\"banner-details-bottom\" class=\"product-details-full-banner-details-bottom\"\r\n                        data-cms-area=\"item_info_bottom\" data-cms-area-filters=\"page_type\"></div>\r\n                </div>\r\n\r\n                <div class=\"box-custom-price-and-quote\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n\r\n                    <div class=\"sub-first-block-box-custom-price-and-quote\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                        <div data-view=\"Product.Price\"></div>\r\n                    </div>\r\n                    <div\r\n                        class=\"sub-block-box-custom-price-and-quote  "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        <!-- <div data-view=\"ProductDetails.AddToQuote\" class=\"product-details-full-actions-addtoquote custom-button-request-quote\"></div> -->\r\n                        <div data-view=\"ProductDetails.AddToQuote\"\r\n                            class=\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\r\n\r\n                    <!-- <div data-view=\"Quantity.Pricing\"></div> -->\r\n\r\n                    <div data-view=\"Extension.Price\"></div>\r\n\r\n\r\n                </div>\r\n                <div class=\"stock-boxes hidde-mobile\">\r\n                    <div class=\"stock-container\" data-view=\"Product.Stock.Info\"></div>\r\n\r\n                    <div data-view=\"StockDescription\"></div>\r\n\r\n                </div>\r\n        </section>\r\n\r\n        <!--====================================================== BAR TAGS ====================================================== -->\r\n\r\n        <!--==================================================== END BAR TAGS ==================================================== -->\r\n\r\n        <div class=\"box-menu\">\r\n            <div class=\"box-menu-buttons\">\r\n\r\n                <button class=\"details-pdp box-menu__option \" data-toggle=\"collapse\" href=\"#details-store-description\"\r\n                    role=\"button\" aria-expanded=\"false\" aria-controls=\"details-store-description\">\r\n                    DESCRIPTION\r\n                </button>\r\n\r\n                <button id=\"custom-button-specification\" class=\"spec-pdp box-menu__option\" type=\"button\"\r\n                    data-toggle=\"collapse\" data-target=\"#specifications-pdp\" aria-expanded=\"false\"\r\n                    aria-controls=\"collapseExample\">\r\n                    SPECIFICATIONS\r\n                </button>\r\n\r\n                <button class=\"pdfs-pdp box-menu__option\" type=\"button\" data-toggle=\"collapse\" data-target=\"#pdfs-pdp\"\r\n                    aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                    PDFS & DOWNLOADS\r\n                </button>\r\n\r\n            </div>\r\n            <div class=\"box-menu-information\">\r\n\r\n                <!-- DESCRIPTION -->\r\n                <div class=\"box-description custom-show custom-display-content\" id=\"tab-description\">\r\n                    "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"storedetaileddescription") : stack1),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\r\n                <!-- SPECIFICATIONS -->\r\n                <div class=\"box-description\" id=\"tab-specifications\">\r\n                    <table class=\"custom-table\">\r\n                        <tbody>\r\n\r\n                            "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_voltage") : stack1),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_over_temperature_range") : stack1),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_voltage") : stack1),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_battery_120") : stack1),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_battery_100") : stack1),{"name":"if","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ip_rating") : stack1),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_efficiency_typical") : stack1),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_in_sitemap") : stack1),{"name":"if","hash":{},"fn":container.program(65, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cavity_filter_type") : stack1),{"name":"if","hash":{},"fn":container.program(68, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ferrite_circulator_type") : stack1),{"name":"if","hash":{},"fn":container.program(71, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_receiver_preselector_freq") : stack1),{"name":"if","hash":{},"fn":container.program(74, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cavity_diameter") : stack1),{"name":"if","hash":{},"fn":container.program(77, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cavity_filter_frequency") : stack1),{"name":"if","hash":{},"fn":container.program(80, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_termination_connectors") : stack1),{"name":"if","hash":{},"fn":container.program(83, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_attenuation_value") : stack1),{"name":"if","hash":{},"fn":container.program(86, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_attenuation_accuracy") : stack1),{"name":"if","hash":{},"fn":container.program(89, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_rating_maximum") : stack1),{"name":"if","hash":{},"fn":container.program(92, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_input_power_cw_max") : stack1),{"name":"if","hash":{},"fn":container.program(95, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_pass_bandwidth") : stack1),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_typ_isolation") : stack1),{"name":"if","hash":{},"fn":container.program(101, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_wavelength") : stack1),{"name":"if","hash":{},"fn":container.program(104, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_typ_loss_db") : stack1),{"name":"if","hash":{},"fn":container.program(107, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_splits") : stack1),{"name":"if","hash":{},"fn":container.program(110, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_size_mm") : stack1),{"name":"if","hash":{},"fn":container.program(113, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_shipping") : stack1),{"name":"if","hash":{},"fn":container.program(116, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rf_power_w") : stack1),{"name":"if","hash":{},"fn":container.program(119, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_return_loss_vswr") : stack1),{"name":"if","hash":{},"fn":container.program(122, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_port_to_port_isolation") : stack1),{"name":"if","hash":{},"fn":container.program(125, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_pim_3rd_order_2x43dbm") : stack1),{"name":"if","hash":{},"fn":container.program(128, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_min_frequency_separation") : stack1),{"name":"if","hash":{},"fn":container.program(131, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_min_sep_mhz") : stack1),{"name":"if","hash":{},"fn":container.program(134, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_load_rating") : stack1),{"name":"if","hash":{},"fn":container.program(137, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_isolation") : stack1),{"name":"if","hash":{},"fn":container.program(140, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_finish") : stack1),{"name":"if","hash":{},"fn":container.program(143, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_conn_types_all_terminatio") : stack1),{"name":"if","hash":{},"fn":container.program(146, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_frequency") : stack1),{"name":"if","hash":{},"fn":container.program(149, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_type_connectors") : stack1),{"name":"if","hash":{},"fn":container.program(152, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_atten_per_30m_900mhz") : stack1),{"name":"if","hash":{},"fn":container.program(155, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_colour") : stack1),{"name":"if","hash":{},"fn":container.program(158, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_labels_pack") : stack1),{"name":"if","hash":{},"fn":container.program(161, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_thermal_shock") : stack1),{"name":"if","hash":{},"fn":container.program(164, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_salt_spray") : stack1),{"name":"if","hash":{},"fn":container.program(167, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_retention") : stack1),{"name":"if","hash":{},"fn":container.program(170, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_coupling_nut_retention") : stack1),{"name":"if","hash":{},"fn":container.program(173, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_durability") : stack1),{"name":"if","hash":{},"fn":container.program(176, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_mating") : stack1),{"name":"if","hash":{},"fn":container.program(179, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_outer_contact") : stack1),{"name":"if","hash":{},"fn":container.program(182, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_centre_contact") : stack1),{"name":"if","hash":{},"fn":container.program(185, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_cycles_10") : stack1),{"name":"if","hash":{},"fn":container.program(188, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_shield") : stack1),{"name":"if","hash":{},"fn":container.program(191, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vibration") : stack1),{"name":"if","hash":{},"fn":container.program(194, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_type_of_jacket") : stack1),{"name":"if","hash":{},"fn":container.program(197, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemrfi_operation_frequency") : stack1),{"name":"if","hash":{},"fn":container.program(200, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_velocity") : stack1),{"name":"if","hash":{},"fn":container.program(203, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_jacket_od_mm") : stack1),{"name":"if","hash":{},"fn":container.program(206, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_impedance_ohms") : stack1),{"name":"if","hash":{},"fn":container.program(209, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dielectric") : stack1),{"name":"if","hash":{},"fn":container.program(212, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_crimp_set_or_tool") : stack1),{"name":"if","hash":{},"fn":container.program(215, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_center_conductor") : stack1),{"name":"if","hash":{},"fn":container.program(218, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_type") : stack1),{"name":"if","hash":{},"fn":container.program(221, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemcellular_frequency") : stack1),{"name":"if","hash":{},"fn":container.program(224, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_uhf_frequency") : stack1),{"name":"if","hash":{},"fn":container.program(227, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vhf_frequency") : stack1),{"name":"if","hash":{},"fn":container.program(230, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_vhf") : stack1),{"name":"if","hash":{},"fn":container.program(233, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_impedance_vhf") : stack1),{"name":"if","hash":{},"fn":container.program(236, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_connector_vhf") : stack1),{"name":"if","hash":{},"fn":container.program(239, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_cycles_50") : stack1),{"name":"if","hash":{},"fn":container.program(242, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_gain_dbq") : stack1),{"name":"if","hash":{},"fn":container.program(245, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_cycles_80") : stack1),{"name":"if","hash":{},"fn":container.program(248, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_packaging") : stack1),{"name":"if","hash":{},"fn":container.program(251, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_whip_material") : stack1),{"name":"if","hash":{},"fn":container.program(254, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_whip_length_mm") : stack1),{"name":"if","hash":{},"fn":container.program(257, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_battery_10") : stack1),{"name":"if","hash":{},"fn":container.program(260, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_mounting") : stack1),{"name":"if","hash":{},"fn":container.program(263, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_cable_and_connector") : stack1),{"name":"if","hash":{},"fn":container.program(266, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_tuning") : stack1),{"name":"if","hash":{},"fn":container.program(269, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_band") : stack1),{"name":"if","hash":{},"fn":container.program(272, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_material") : stack1),{"name":"if","hash":{},"fn":container.program(275, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_continuous_power") : stack1),{"name":"if","hash":{},"fn":container.program(278, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_current_a") : stack1),{"name":"if","hash":{},"fn":container.program(281, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_return_loss_db") : stack1),{"name":"if","hash":{},"fn":container.program(284, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_insertion_loss_db") : stack1),{"name":"if","hash":{},"fn":container.program(287, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_under_voltage_restart") : stack1),{"name":"if","hash":{},"fn":container.program(290, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_input") : stack1),{"name":"if","hash":{},"fn":container.program(293, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_under_voltage_shutdown") : stack1),{"name":"if","hash":{},"fn":container.program(296, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_cable_crosssection") : stack1),{"name":"if","hash":{},"fn":container.program(299, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dc_connections") : stack1),{"name":"if","hash":{},"fn":container.program(302, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_number_of_outputs") : stack1),{"name":"if","hash":{},"fn":container.program(305, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_algorithum") : stack1),{"name":"if","hash":{},"fn":container.program(308, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ip_protection_category") : stack1),{"name":"if","hash":{},"fn":container.program(311, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ac_connection") : stack1),{"name":"if","hash":{},"fn":container.program(314, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_humidity_noncondensing") : stack1),{"name":"if","hash":{},"fn":container.program(317, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_protection_over_temperat") : stack1),{"name":"if","hash":{},"fn":container.program(320, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_protection_output_sc") : stack1),{"name":"if","hash":{},"fn":container.program(323, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_protect_reverse_polarity") : stack1),{"name":"if","hash":{},"fn":container.program(326, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_current") : stack1),{"name":"if","hash":{},"fn":container.program(329, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_voltage_storage") : stack1),{"name":"if","hash":{},"fn":container.program(332, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_voltage_float") : stack1),{"name":"if","hash":{},"fn":container.program(335, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_charge_voltage_absorption") : stack1),{"name":"if","hash":{},"fn":container.program(338, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_current_contin") : stack1),{"name":"if","hash":{},"fn":container.program(341, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_power_w") : stack1),{"name":"if","hash":{},"fn":container.program(344, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_self_disch_25degc") : stack1),{"name":"if","hash":{},"fn":container.program(347, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_internal_resist_25degc") : stack1),{"name":"if","hash":{},"fn":container.program(350, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_capacity_25degc") : stack1),{"name":"if","hash":{},"fn":container.program(353, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_rating_watts") : stack1),{"name":"if","hash":{},"fn":container.program(356, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_terminal") : stack1),{"name":"if","hash":{},"fn":container.program(359, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rated_capacity_20h") : stack1),{"name":"if","hash":{},"fn":container.program(362, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_voltage_v_adj") : stack1),{"name":"if","hash":{},"fn":container.program(365, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemoutput_voltage_v") : stack1),{"name":"if","hash":{},"fn":container.program(368, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_noise_mv") : stack1),{"name":"if","hash":{},"fn":container.program(371, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_off_load_current_ma") : stack1),{"name":"if","hash":{},"fn":container.program(374, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_voltage") : stack1),{"name":"if","hash":{},"fn":container.program(377, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_max_continuous_load_cur") : stack1),{"name":"if","hash":{},"fn":container.program(380, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_input_voltage_range_v") : stack1),{"name":"if","hash":{},"fn":container.program(383, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_galvanic_isolation") : stack1),{"name":"if","hash":{},"fn":container.program(386, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_efficiency_percent") : stack1),{"name":"if","hash":{},"fn":container.program(389, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_battery_connection") : stack1),{"name":"if","hash":{},"fn":container.program(392, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_availablefrequency") : stack1),{"name":"if","hash":{},"fn":container.program(395, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_case") : stack1),{"name":"if","hash":{},"fn":container.program(398, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dc_supply2") : stack1),{"name":"if","hash":{},"fn":container.program(401, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_current_consumption2") : stack1),{"name":"if","hash":{},"fn":container.program(404, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_output_impedance") : stack1),{"name":"if","hash":{},"fn":container.program(407, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_operational_temp_range") : stack1),{"name":"if","hash":{},"fn":container.program(410, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_weight_inc_frame") : stack1),{"name":"if","hash":{},"fn":container.program(413, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rf_gain") : stack1),{"name":"if","hash":{},"fn":container.program(416, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rf_connectors") : stack1),{"name":"if","hash":{},"fn":container.program(419, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_supply") : stack1),{"name":"if","hash":{},"fn":container.program(422, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ambient_temp_range") : stack1),{"name":"if","hash":{},"fn":container.program(425, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_battery_type") : stack1),{"name":"if","hash":{},"fn":container.program(428, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_connector") : stack1),{"name":"if","hash":{},"fn":container.program(431, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_range") : stack1),{"name":"if","hash":{},"fn":container.program(434, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_impedance") : stack1),{"name":"if","hash":{},"fn":container.program(437, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemfrequency") : stack1),{"name":"if","hash":{},"fn":container.program(440, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitemcollinear_frequency_multiselec") : stack1),{"name":"if","hash":{},"fn":container.program(443, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitembase_cellular_yagi") : stack1),{"name":"if","hash":{},"fn":container.program(446, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitembase_vhf_frequency") : stack1),{"name":"if","hash":{},"fn":container.program(449, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_base_uhf_frequency") : stack1),{"name":"if","hash":{},"fn":container.program(452, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_base_gain") : stack1),{"name":"if","hash":{},"fn":container.program(455, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_wind_gust_ratingkmh") : stack1),{"name":"if","hash":{},"fn":container.program(458, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_torque160kmh") : stack1),{"name":"if","hash":{},"fn":container.program(461, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_impedance") : stack1),{"name":"if","hash":{},"fn":container.program(464, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_product_name") : stack1),{"name":"if","hash":{},"fn":container.program(467, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_power_w") : stack1),{"name":"if","hash":{},"fn":container.program(470, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_gain_dbi") : stack1),{"name":"if","hash":{},"fn":container.program(473, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_dimensions") : stack1),{"name":"if","hash":{},"fn":container.program(476, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_polarisation") : stack1),{"name":"if","hash":{},"fn":container.program(479, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vswr") : stack1),{"name":"if","hash":{},"fn":container.program(482, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_termination") : stack1),{"name":"if","hash":{},"fn":container.program(485, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_radome_diameter_mm") : stack1),{"name":"if","hash":{},"fn":container.program(488, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_mounting_area") : stack1),{"name":"if","hash":{},"fn":container.program(491, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_construction") : stack1),{"name":"if","hash":{},"fn":container.program(494, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_vertical_beamwidth") : stack1),{"name":"if","hash":{},"fn":container.program(497, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_tuned_bandwidth") : stack1),{"name":"if","hash":{},"fn":container.program(500, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_peak_instant_power_kw") : stack1),{"name":"if","hash":{},"fn":container.program(503, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitempassive_im_3rd_order_2x20w_dbc") : stack1),{"name":"if","hash":{},"fn":container.program(506, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_nominal_gain_dbd") : stack1),{"name":"if","hash":{},"fn":container.program(509, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_horizontal_beamwidth") : stack1),{"name":"if","hash":{},"fn":container.program(512, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_front_back_ratio_db") : stack1),{"name":"if","hash":{},"fn":container.program(515, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_frequency_mhz") : stack1),{"name":"if","hash":{},"fn":container.program(518, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_downtilt") : stack1),{"name":"if","hash":{},"fn":container.program(521, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_sug_solar_cap_for_48v_batt") : stack1),{"name":"if","hash":{},"fn":container.program(524, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_sug_solar_cap_for_24v_batt") : stack1),{"name":"if","hash":{},"fn":container.program(527, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_length_mm") : stack1),{"name":"if","hash":{},"fn":container.program(530, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_width_mm") : stack1),{"name":"if","hash":{},"fn":container.program(533, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_number_cells") : stack1),{"name":"if","hash":{},"fn":container.program(536, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_voltage_max") : stack1),{"name":"if","hash":{},"fn":container.program(539, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_solar_leads_connectors") : stack1),{"name":"if","hash":{},"fn":container.program(542, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_solar_power_tolerance") : stack1),{"name":"if","hash":{},"fn":container.program(545, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_junction_box") : stack1),{"name":"if","hash":{},"fn":container.program(548, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_noct") : stack1),{"name":"if","hash":{},"fn":container.program(551, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_isc_temp_coefficient") : stack1),{"name":"if","hash":{},"fn":container.program(554, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_voc_temp_coefficient") : stack1),{"name":"if","hash":{},"fn":container.program(557, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_temperature_coefficent") : stack1),{"name":"if","hash":{},"fn":container.program(560, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_open_circuit_voltage") : stack1),{"name":"if","hash":{},"fn":container.program(563, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_isc") : stack1),{"name":"if","hash":{},"fn":container.program(566, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_imp") : stack1),{"name":"if","hash":{},"fn":container.program(569, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_maximum_power_voltage") : stack1),{"name":"if","hash":{},"fn":container.program(572, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pv_technology") : stack1),{"name":"if","hash":{},"fn":container.program(575, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_frame_colour") : stack1),{"name":"if","hash":{},"fn":container.program(578, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_fuse_rating_max") : stack1),{"name":"if","hash":{},"fn":container.program(581, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_power_max") : stack1),{"name":"if","hash":{},"fn":container.program(584, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_device_family") : stack1),{"name":"if","hash":{},"fn":container.program(587, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_type_of_charger") : stack1),{"name":"if","hash":{},"fn":container.program(590, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_load_control_a") : stack1),{"name":"if","hash":{},"fn":container.program(593, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_ground_type") : stack1),{"name":"if","hash":{},"fn":container.program(596, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_remote_communications") : stack1),{"name":"if","hash":{},"fn":container.program(599, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_suggested_solar_capacity_f") : stack1),{"name":"if","hash":{},"fn":container.program(602, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_maximum_solar_array_voc") : stack1),{"name":"if","hash":{},"fn":container.program(605, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_mounting") : stack1),{"name":"if","hash":{},"fn":container.program(608, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_temperature_compensation") : stack1),{"name":"if","hash":{},"fn":container.program(611, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_adjustable_regulation_set_") : stack1),{"name":"if","hash":{},"fn":container.program(614, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_low_voltage_disconnect_lvd") : stack1),{"name":"if","hash":{},"fn":container.program(617, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_maximum_charge_current_a") : stack1),{"name":"if","hash":{},"fn":container.program(620, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_nominal_dc_voltage") : stack1),{"name":"if","hash":{},"fn":container.program(623, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_cec_number_list") : stack1),{"name":"if","hash":{},"fn":container.program(626, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_battery_type") : stack1),{"name":"if","hash":{},"fn":container.program(629, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_temp_range") : stack1),{"name":"if","hash":{},"fn":container.program(632, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_display_interface") : stack1),{"name":"if","hash":{},"fn":container.program(635, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_ip_rating") : stack1),{"name":"if","hash":{},"fn":container.program(638, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_backsheet_colour") : stack1),{"name":"if","hash":{},"fn":container.program(641, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_brand_solar") : stack1),{"name":"if","hash":{},"fn":container.program(644, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_quantity_per_pallet") : stack1),{"name":"if","hash":{},"fn":container.program(647, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_weight") : stack1),{"name":"if","hash":{},"fn":container.program(650, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_depth_mm") : stack1),{"name":"if","hash":{},"fn":container.program(653, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_height_mm") : stack1),{"name":"if","hash":{},"fn":container.program(656, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_rated_temp") : stack1),{"name":"if","hash":{},"fn":container.program(659, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_comp_type") : stack1),{"name":"if","hash":{},"fn":container.program(662, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                             \r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_batt_volts") : stack1),{"name":"if","hash":{},"fn":container.program(665, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_cpcty_ah") : stack1),{"name":"if","hash":{},"fn":container.program(668, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                                "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_rfi_ite_cpcty_kwh") : stack1),{"name":"if","hash":{},"fn":container.program(671, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <!-- PDFS AND DOWNLOADS -->\r\n                <div class=\"box-description\" id=\"tab-pdf-downloads\">\r\n                    <ol>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_1") : stack1),{"name":"if","hash":{},"fn":container.program(674, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_2") : stack1),{"name":"if","hash":{},"fn":container.program(677, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_3") : stack1),{"name":"if","hash":{},"fn":container.program(679, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_4") : stack1),{"name":"if","hash":{},"fn":container.program(681, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_5") : stack1),{"name":"if","hash":{},"fn":container.program(683, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_6") : stack1),{"name":"if","hash":{},"fn":container.program(685, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_7") : stack1),{"name":"if","hash":{},"fn":container.program(687, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_8") : stack1),{"name":"if","hash":{},"fn":container.program(689, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_9") : stack1),{"name":"if","hash":{},"fn":container.program(691, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_10") : stack1),{"name":"if","hash":{},"fn":container.program(693, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_11") : stack1),{"name":"if","hash":{},"fn":container.program(695, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_12") : stack1),{"name":"if","hash":{},"fn":container.program(697, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_13") : stack1),{"name":"if","hash":{},"fn":container.program(699, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_14") : stack1),{"name":"if","hash":{},"fn":container.program(701, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_15") : stack1),{"name":"if","hash":{},"fn":container.program(703, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_16") : stack1),{"name":"if","hash":{},"fn":container.program(705, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_17") : stack1),{"name":"if","hash":{},"fn":container.program(707, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_18") : stack1),{"name":"if","hash":{},"fn":container.program(709, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_19") : stack1),{"name":"if","hash":{},"fn":container.program(711, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_20") : stack1),{"name":"if","hash":{},"fn":container.program(713, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_21") : stack1),{"name":"if","hash":{},"fn":container.program(715, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_22") : stack1),{"name":"if","hash":{},"fn":container.program(717, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_23") : stack1),{"name":"if","hash":{},"fn":container.program(719, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_24") : stack1),{"name":"if","hash":{},"fn":container.program(721, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_pdf_download_25") : stack1),{"name":"if","hash":{},"fn":container.program(723, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pdfsExtras") : depth0),{"name":"each","hash":{},"fn":container.program(725, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        <li>\r\n\r\n                            "
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_extra_video_link") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                        </li>\r\n\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <!-- 		"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"storedetaileddescription") : stack1),{"name":"if","hash":{},"fn":container.program(727, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " -->\r\n\r\n        <!-- 		"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"featureddescription") : stack1),{"name":"if","hash":{},"fn":container.program(729, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"featureddescription") : stack1),{"name":"if","hash":{},"fn":container.program(731, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " -->\r\n\r\n\r\n        <!-- <section data-view=\"Product.Information\"></section> -->\r\n\r\n        <!-- <div class=\"product-details-full-divider-desktop\"></div> -->\r\n\r\n        <!-- <div data-view=\"ProductReviews.Center\"></div> -->\r\n\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_show_correlated") : stack1),{"name":"if","hash":{},"fn":container.program(733, data, 0),"inverse":container.program(735, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n\r\n\r\n        <div id=\"banner-details-bottom\" class=\"content-banner banner-details-bottom\"\r\n            data-cms-area=\"item_details_banner_bottom\" data-cms-area-filters=\"page_type\"></div>\r\n    </article>\r\n</div>\r\n\r\n\r\n<!-- ============================== CUSTOM SCRIPTS ============================== -->\r\n\r\n<script>\r\n    /* 	var specificationsBox = document.querySelector(\".custom-table\");\r\n		var buttonSpecifications = document.getElementById(\"custom-button-specification\");\r\n		if (specificationsBox.textContent === \"\") {\r\n			parentButtonSpecifications = buttonSpecifications.parentNode;\r\n			parentButtonSpecifications.removeChild(buttonSpecifications);\r\n		} */\r\n\r\n    var elementsButton = Array.from(document.getElementsByClassName(\"box-menu__option\"));\r\n    if (elementsButton.length > 0) elementsButton[0].classList.add(\"custom-button-click\");\r\n\r\n    // var descriptionContent = document.getElementById('description-content');\r\n    // descriptionContent.addEventListener('click', function() {\r\n    // 	descriptionContent.classList.toggle('auto-height');\r\n    // });\r\n\r\n\r\n    var boxMenuOptions = Array.from(document.querySelectorAll(\".box-menu__option\"));\r\n    var boxDescriptions = Array.from(document.querySelectorAll(\".box-description\"));\r\n    boxMenuOptions.forEach(function(button, index) {\r\n        button.addEventListener(\"click\", function() {\r\n            boxDescriptions.map(box => box.classList.remove('custom-show', 'custom-display-content'));\r\n            boxDescriptions[index].classList.add('custom-show', 'custom-display-content');\r\n\r\n            boxMenuOptions.map(button => button.classList.remove('custom-button-click'));\r\n            boxMenuOptions[index].classList.add('custom-button-click');\r\n        })\r\n    })\r\n    var boxInformation = document.querySelector(\".box-menu-buttons\");\r\n    var boxInformationContent = document.querySelector(\".box-menu-information\");\r\n    if (boxInformation.innerText == \"\") {\r\n        boxInformationContent.classList.add(\"custom-display-none\")\r\n    }\r\n\r\n    var containerText = document.getElementById('short-description');\r\n    console.dir(containerText)\r\n    var isTable = containerText.childNodes[0].tagName;\r\n    if (isTable === \"TABLE\") {\r\n        var textShortDescription = document.getElementById('short-description').innerText\r\n        containerText.innerHTML = textShortDescription;\r\n    }\r\n</script> ";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_full'; return template;});