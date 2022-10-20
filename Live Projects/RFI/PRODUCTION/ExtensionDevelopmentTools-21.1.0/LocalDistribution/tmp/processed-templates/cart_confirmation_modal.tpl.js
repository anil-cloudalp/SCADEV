define('cart_confirmation_modal.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "			<div class=\"cart-confirmation-modal-quantity\">\r\n				<span class=\"cart-confirmation-modal-quantity-label\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Quantity: ",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n				<span class=\"cart-confirmation-modal-quantity-value\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "</span>\r\n			</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<div class=\"cart-confirmation-modal\">\r\n	<div class=\"cart-confirmation-modal-img\">\r\n		<img data-loader=\"false\" src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"main",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\">\r\n	</div>\r\n	<div class=\"cart-confirmation-modal-details\" itemscope itemtype=\"https://schema.org/Product\">\r\n		<a href=\""
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"_url") : stack1), depth0))
    + "\" class=\"cart-confirmation-modal-item-name\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemName","hash":{},"data":data}) : helper)))
    + "</a>\r\n		<div class=\"cart-confirmation-modal-price\">\r\n			<div data-view=\"Line.Price\"></div>\r\n		</div>\r\n		<!-- SKU -->\r\n		<div data-view=\"Line.Sku\" class=\"cart-confirmation-modal-sku\"></div>\r\n		<!-- Item Options -->\r\n		<div class=\"cart-confirmation-modal-options\">\r\n			<div data-view=\"Line.SelectedOptions\"></div>\r\n		</div>\r\n		<!-- Quantity -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"cart-confirmation-modal-actions\">\r\n			<div class=\"cart-confirmation-modal-view-cart\">\r\n				<a href=\"/cart\" class=\"cart-confirmation-modal-view-cart-button\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"View Cart &amp; Checkout",{"name":"translate","hash":{},"data":data}))
    + "</a>\r\n			</div>\r\n			<div class=\"cart-confirmation-modal-continue-shopping\">\r\n				<button class=\"cart-confirmation-modal-continue-shopping-button\" data-dismiss=\"modal\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Continue Shopping",{"name":"translate","hash":{},"data":data}))
    + "</button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cart_confirmation_modal'; return template;});