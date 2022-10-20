define('header_mini_cart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "header-mini-cart-menu-cart-link-enabled";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<span class=\"header-mini-cart-summary-cart-ellipsis\"></span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0)",(depth0 != null ? compilerNameLookup(depth0,"itemsInCart") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":36}}}))
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	 	<div data-view=\"Header.MiniCartItemCell\" class=\"header-mini-cart-container\"></div>\n		<div class=\"header-mini-cart-subtotal\">\n			<div class=\"header-mini-cart-subtotal-items\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPluraLabel") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":3},"end":{"line":29,"column":10}}})) != null ? stack1 : "")
    + "			<div data-view=\"MiniCart.Subtotal\"></div>\n		</div>\n\n		<div class=\"header-mini-cart-buttons\">\n			<div class=\"header-mini-cart-buttons-left\">\n				<a href=\"#\" class=\"header-mini-cart-button-view-cart\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"cartTouchPoint","hash":{},"data":data,"loc":{"start":{"line":35,"column":75},"end":{"line":35,"column":93}}}) : helper)))
    + "\" data-hashtag=\"#cart\" >\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View Cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":5},"end":{"line":36,"column":30}}}))
    + "\n				</a>\n			</div>\n			<div class=\"header-mini-cart-buttons-right\">\n				<a href=\"#\" class=\"header-mini-cart-button-checkout\" data-touchpoint=\"checkout\" data-hashtag=\"#\" >\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Checkout",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":41,"column":5},"end":{"line":41,"column":29}}}))
    + "\n				</a>\n			</div>\n			<div data-view=\"MiniCart.Actions\"></div>\n		</div>\n\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) items",(depth0 != null ? compilerNameLookup(depth0,"itemsInCart") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":5},"end":{"line":19,"column":43}}}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":5},"end":{"line":21,"column":27}}}))
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"header-mini-cart-subtotal-amount\">\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SUBTOTAL: $(0)",(depth0 != null ? compilerNameLookup(depth0,"subtotalFormatted") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":4},"end":{"line":27,"column":52}}}))
    + "\n			</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"header-mini-cart-empty\">\n			<a href=\"#\" data-touchpoint=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"cartTouchPoint","hash":{},"data":data,"loc":{"start":{"line":49,"column":32},"end":{"line":49,"column":50}}}) : helper)))
    + "\" data-hashtag=\"#cart\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":50,"column":4},"end":{"line":54,"column":11}}})) != null ? stack1 : "")
    + "			</a>\n		</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Your cart is loading",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":51,"column":5},"end":{"line":51,"column":41}}}))
    + "\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Your cart is empty",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":53,"column":5},"end":{"line":53,"column":39}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<a class=\"header-mini-cart-menu-cart-link "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":105}}})) != null ? stack1 : "")
    + "\" data-type=\"mini-cart\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":1,"column":136},"end":{"line":1,"column":156}}}))
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"cartTouchPoint","hash":{},"data":data,"loc":{"start":{"line":1,"column":175},"end":{"line":1,"column":193}}}) : helper)))
    + "\" data-hashtag=\"#cart\" href=\"#\">\n	<i class=\"header-mini-cart-menu-cart-icon\">\n		<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\" class=\"svg-shopping-trolley\"><path class=\"svg-path-shopping-trolley\" d=\"M312 355.5c-10.6 0-19.8-3.9-27.4-11.4 -7.6-7.6-11.4-16.9-11.4-27.7 0-6.1 1.3-11.7 3.8-16.8h-97.7c2.5 5.1 3.8 10.7 3.8 16.8 0 10.8-3.8 20.1-11.4 27.7 -15.2 15.2-39.7 15.2-54.8 0 -7.6-7.6-11.4-16.8-11.4-27.4 0-6.9 1.7-13.4 5.2-19.4 2.7-4.6 6.2-8.6 10.4-11.9l-39-190.9H46.1c-5.5 0-10.4-2-14.3-5.9s-5.9-8.8-5.9-14.3v-9.3c0-5.5 2-10.4 5.9-14.3s8.8-5.9 14.3-5.9h60c4.6 0 8.8 1.6 12.5 4.7 3.5 3 5.9 6.7 7 11.1l4.3 21.5h224c6.6 0 12.1 2.6 16 7.6 3.9 5 5.1 11 3.4 17.1l-27.3 121c-1.1 4.9-3.5 8.9-7.2 11.7 -3.6 2.8-7.7 4.2-12.2 4.2H163.2l1.2 6.2H316c6.2 0 11.5 2.6 15.4 7.6 3.8 4.9 5.2 10.6 4.1 16.6l-2.5 10.3c4.8 3 8.8 7 11.8 11.8 3.9 6.2 5.9 13.1 5.9 20.5 0 10.6-3.9 19.8-11.4 27.4C331.8 351.6 322.6 355.5 312 355.5zM151.1 287.1h153.8l-11.4 10.8c-5.3 5-8 11.1-8 18.5 0 7.5 2.6 13.7 7.8 18.9 10.5 10.5 26.8 10.5 37.2 0 5.2-5.2 7.8-11.3 7.8-18.6 0-5.1-1.3-9.6-4-13.9 -2.7-4.3-6.3-7.4-11.1-9.6l-4.6-2.2 4.7-19.5c0.4-2.2-0.1-4.3-1.8-6.4 -1.6-2-3.2-2.8-5.6-2.8h-162l-5.8-31.1h178.3c1.7 0 3.2-0.5 4.7-1.6 1.4-1.1 2.2-2.5 2.7-4.6v0l27.4-121.2c0.7-2.7 0.4-4.5-1.2-6.5 -1.5-2-3.4-2.8-6.2-2.8H119.7l-6.2-31.2c-0.4-1.6-1.3-3-2.9-4.3 -1.4-1.2-2.8-1.7-4.4-1.7h-60c-2.3 0-4 0.7-5.5 2.3 -1.6 1.6-2.3 3.3-2.3 5.5v9.3c0 2.3 0.7 4 2.3 5.5 1.6 1.6 3.3 2.3 5.5 2.3H92L134.7 291l-3.7 2.3c-4.2 2.6-7.4 5.9-9.8 10.1 -2.4 4.1-3.5 8.5-3.5 13.2 0 7.3 2.6 13.4 7.8 18.6 10.5 10.5 26.8 10.5 37.3 0 5.2-5.2 7.8-11.4 7.8-18.9 0-7.4-2.6-13.5-8-18.5L151.1 287.1z\"/></svg>\n	</i>\n	<span class=\"header-mini-cart-menu-cart-legend\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":10,"column":9}}})) != null ? stack1 : "")
    + "	</span>\n</a>\n<div class=\"header-mini-cart\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":57,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_mini_cart'; return template;});