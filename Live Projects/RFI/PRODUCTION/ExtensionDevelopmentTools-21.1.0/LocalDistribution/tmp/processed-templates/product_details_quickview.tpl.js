define('product_details_quickview.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "				<div class=\"product-line-mpn-container\">\r\n					<span class=\"product-line-mpn-label\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MPN: ",{"name":"translate","hash":{},"data":data}))
    + " </span>\r\n					<span class=\"Product-line-mpn-value\">"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"mpn") : stack1), depth0))
    + "</span>\r\n				</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "					"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"badge") || (depth0 != null ? compilerNameLookup(depth0,"badge") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"badge","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<form id=\"product-details-quickview-form\" data-action=\"submit-form\" method=\"POST\">\r\n\r\n					<section class=\"product-details-quickview-info\">\r\n\r\n						<div id=\"banner-summary-bottom\" class=\"product-details-quickview-banner-summary-bottom\"></div>\r\n\r\n					</section>\r\n\r\n					<section data-view=\"Product.Options\"></section>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"minimumquantity") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n					<div class=\"stock-boxes stock-quick\">\r\n						<div class=\"stock-container\" data-view=\"Product.Stock.Info\"></div>\r\n						<div data-view=\"StockDescription\"></div>\r\n					</div>\r\n\r\n					<div class=\"product-details-quickview-main-bottom-banner\">\r\n						<div id=\"banner-summary-bottom\" class=\"product-details-quickview-banner-summary-bottom\"></div>\r\n					</div>\r\n				</form>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<div data-view=\"Quantity\"></div>\r\n\r\n						<section class=\"product-details-quickview-actions\">\r\n\r\n							<div class=\"product-details-quickview-actions-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"Toshowcart") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</div>\r\n							<div class=\"product-details-quickview-actions-container\">\r\n								<div data-view=\"AddToProductList\" class=\"product-details-quickview-actions-container-add-to-wishlist\"></div>\r\n								<div data-view=\"ProductDetails.AddToQuote\" class=\"product-details-quickview-actions-container-add-to-quote\"></div>\r\n							</div>\r\n\r\n						</section>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "								<div data-view=\"MainActionView\"></div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<p class=\"qv-minimumQty\"><strong>(*) Minimum Quantity: "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"minimumquantity") : stack1), depth0))
    + "</strong></p>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"GlobalViewsMessageView.WronglyConfigureItem\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n\r\n<div class=\"product-details-quickview\">\r\n	<div class=\"product-details-quickview-img\">\r\n		<div data-view=\"Product.ImageGallery\"></div>\r\n	</div>\r\n	<div class=\"product-details-quickview-details\">\r\n\r\n		<h1 class=\"product-details-quickview-item-name\" itemprop=\"name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h1>\r\n		<div class=\"product-details-qv-content-title-secondline\">\r\n			<div class=\"qv-container\">\r\n				<div data-view=\"Product.Sku\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"mpn") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<!-- addition START BADGES -->\r\n				<div class=\"qv-badge\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"badge") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\r\n				<!-- addition END BADGES -->\r\n			</div>\r\n		</div>\r\n		\r\n		<a class=\"product-details-quickview-full-details\" data-action=\"go-to-fullview\" data-touchpoint=\"home\" data-name=\"view-full-details\" data-hashtag=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n			"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"View full details",{"name":"translate","hash":{},"data":data}))
    + "\r\n		</a>\r\n\r\n		<div data-view=\"Extension.Price\"></div>\r\n		<div data-view=\"Product.Price\"></div>\r\n		<div data-view=\"Quantity.Pricing\"></div>\r\n\r\n		<div class=\"product-details-quickview-main\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n			<div id=\"banner-details-bottom\" class=\"product-details-quickview-banner-details-bottom\" data-cms-area=\"item_info_bottom\" data-cms-area-filters=\"page_type\"></div>\r\n		</div>\r\n\r\n	</div>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_quickview'; return template;});