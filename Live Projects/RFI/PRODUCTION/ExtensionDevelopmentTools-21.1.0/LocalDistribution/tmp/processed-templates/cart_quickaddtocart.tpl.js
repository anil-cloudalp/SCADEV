define('cart_quickaddtocart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div data-view=\"AddToCart\">\r\n			<input name=\"quantity\" data-action=\"setquantity\" class=\"cart-quickaddtocart-quantity\" type=\"number\" min=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"minimumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minimumQuantity","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMaximumQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "\"/>\r\n		</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " max=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maximumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maximumQuantity") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maximumQuantity","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<form class=\"cart-quickaddtocart\" data-action=\"add-to-cart\">\r\n	<div data-view=\"ProductViewsPrice.Price\" class=\"cart-quickaddtocart-price\"></div>\r\n	<div data-view=\"Extension.Price\" class=\"cart-quickaddtocart-price\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showQuickAddToCartButton") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</form>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cart_quickaddtocart'; return template;});