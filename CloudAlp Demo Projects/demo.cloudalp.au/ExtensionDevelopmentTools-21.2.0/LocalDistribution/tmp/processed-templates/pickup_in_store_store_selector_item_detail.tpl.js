define('pickup_in_store_store_selector_item_detail.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"pickup-in-store-store-selector-item-detail-list-divider\"></div>\n\n<div class=\"pickup-in-store-store-selector-item-detail\" data-item-type=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemType") || (depth0 != null ? compilerNameLookup(depth0,"itemType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemType","hash":{},"data":data,"loc":{"start":{"line":3,"column":72},"end":{"line":3,"column":84}}}) : helper)))
    + "\">\n	<div class=\"pickup-in-store-store-selector-item-detail-item-image\" name=\"item-image\">\n		<img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":53}}}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\">\n	</div>\n\n	<div class=\"pickup-in-store-store-selector-item-detail-details\" name=\"item-details\">\n		<p class=\"pickup-in-store-store-selector-item-detail-product-name\">\n			<span class=\"pickup-in-store-store-selector-item-detail-product-title\">\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":11,"column":16}}}) : helper)))
    + "\n			</span>\n		</p>\n\n        <div data-view=\"Item.Price\"></div>\n\n        <div data-view=\"Item.Sku\"></div>\n	</div>\n</div>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'pickup_in_store_store_selector_item_detail'; return template;});