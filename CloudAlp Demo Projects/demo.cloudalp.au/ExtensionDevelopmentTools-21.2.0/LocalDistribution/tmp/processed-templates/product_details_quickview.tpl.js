define('product_details_quickview.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<form id=\"product-details-quickview-form\" data-action=\"submit-form\" method=\"POST\">\n\n					<section class=\"product-details-quickview-info\">\n\n						<div id=\"banner-summary-bottom\" class=\"product-details-quickview-banner-summary-bottom\"></div>\n\n					</section>\n\n					<div data-view=\"Product.Sku\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"storedescription") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":5},"end":{"line":34,"column":12}}})) != null ? stack1 : "")
    + "\n					<div data-view=\"Product.Price\"></div>\n					<div data-view=\"Quantity.Pricing\"></div>\n\n					<div data-view=\"Product.Stock.Info\"></div>\n\n					<section data-view=\"Product.Options\" class=\"product-details-quickview-product-options-container\"></section>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":5},"end":{"line":60,"column":12}}})) != null ? stack1 : "")
    + "\n					<div data-view=\"StockDescription\"></div>\n\n					<div class=\"product-details-quickview-main-bottom-banner\">\n						<div id=\"banner-summary-bottom\" class=\"product-details-quickview-banner-summary-bottom\"></div>\n					</div>\n				</form>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\"product-detailsquickview-storedescription-sec\">\n							<p class=\"product-detailsquickview-storedescription-text\">\n								"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"storedescription") : stack1), depth0)) != null ? stack1 : "")
    + "\n							</p>\n						</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "						<div data-view=\"Quantity\"></div>\n\n						<section class=\"product-details-quickview-actions\">\n\n							<div class=\"product-details-quickview-actions-container\">\n								<div data-view=\"MainActionView\"></div>\n								<div data-view=\"AddToProductList\" class=\"product-details-quickview-actions-container-add-to-wishlist\">\n								</div>\n							</div>\n\n						</section>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"GlobalViewsMessageView.WronglyConfigureItem\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class=\"product-details-quickview\">\n	<div class=\"product-details-quickview-img\">\n		<div data-view=\"Product.ImageGallery\"></div>\n	</div>\n	<div class=\"product-details-quickview-details\">\n\n		<h1 class=\"product-details-quickview-item-name\" itemprop=\"name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":9,"column":66},"end":{"line":9,"column":80}}}) : helper)))
    + "</h1>\n\n		<a class=\"product-details-quickview-full-details\" data-action=\"go-to-fullview\" data-touchpoint=\"home\"\n			data-name=\"view-full-details\" data-hashtag=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":48},"end":{"line":12,"column":59}}}) : helper)))
    + "\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":67},"end":{"line":12,"column":78}}}) : helper)))
    + "\">\n			"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View full details",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":13,"column":36}}}))
    + "\n		</a>\n\n		<div class=\"product-details-quickview-main\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":70,"column":10}}})) != null ? stack1 : "")
    + "\n			<div id=\"banner-details-bottom\" class=\"product-details-quickview-banner-details-bottom\"\n				data-cms-area=\"item_info_bottom\" data-cms-area-filters=\"page_type\"></div>\n		</div>\n\n	</div>\n</div>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_quickview'; return template;});