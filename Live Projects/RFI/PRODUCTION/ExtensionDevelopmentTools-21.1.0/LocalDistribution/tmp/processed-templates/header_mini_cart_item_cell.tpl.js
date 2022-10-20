define('header_mini_cart_item_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		    		<span class=\"header-mini-cart-item-cell-free-badge\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FREE",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isFreeGift") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			    	<li class=\"header-mini-cart-item-cell-product-price\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "</li>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			    <li class=\"header-mini-cart-item-cell-product-price\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rateFormatted") || (depth0 != null ? compilerNameLookup(depth0,"rateFormatted") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"rateFormatted","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "		    	<li style=\"color: black;\">\r\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<a data-touchpoint=\"login\" data-hashtag=\"login-register\" origin-hash=\"\" href=\"#\" style=\"color: rgb(7, 54, 116) !important;     font-size: 12px !important; font-weight: 600!important; padding-right: 0; padding-left: 0;\">Login</a> to see price",{"name":"translate","hash":{},"data":data}))
    + "\r\n				</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<li class=\"header-mini-cart-item-cell\" data-item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-item-type=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemType") || (depth0 != null ? compilerNameLookup(depth0,"itemType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemType","hash":{},"data":data}) : helper)))
    + "\">\r\n		<a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkAttributes","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ">\r\n			<div class=\"header-mini-cart-item-cell-image\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isFreeGift") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"tinythumb",{"name":"resizeImage","hash":{},"data":data}))
    + "?resizeh=60\" alt=\""
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\">\r\n			</div>\r\n		</a>\r\n		<div class=\"header-mini-cart-item-cell-details\">\r\n			<ul>\r\n				<li class=\"header-mini-cart-item-cell-product-title\">\r\n					<a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkAttributes","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " class=\"header-mini-cart-item-cell-title-navigable\" style=\"color: black !important; font-size: 14px !important; padding: 0 !important;\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"_name") : stack1), depth0))
    + "</a>\r\n				</li>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n				<div data-view=\"Item.SelectedOptions\"></div>\r\n\r\n			    <li class=\"header-mini-cart-item-cell-product-qty\">\r\n		    	<span class=\"header-mini-cart-item-cell-quantity-label\">\r\n		    		"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Quantity: ",{"name":"translate","hash":{},"data":data}))
    + "\r\n		    	</span>\r\n			    	<span class=\"header-mini-cart-item-cell-quantity-value\">\r\n			    		"
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "\r\n			    	</span>\r\n			    </li>\r\n		    </ul>\r\n		</div>\r\n</li>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_mini_cart_item_cell'; return template;});