define('cart_quickaddtocart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div data-view=\"AddToCart\">\n			<input name=\"quantity\" data-action=\"setquantity\" class=\"cart-quickaddtocart-quantity\" type=\"number\" min=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"minimumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minimumQuantity","hash":{},"data":data,"loc":{"start":{"line":5,"column":108},"end":{"line":5,"column":127}}}) : helper)))
    + "\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMaximumQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":128},"end":{"line":5,"column":186}}})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":5,"column":194},"end":{"line":5,"column":206}}}) : helper)))
    + "\"/>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " max=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maximumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maximumQuantity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maximumQuantity","hash":{},"data":data,"loc":{"start":{"line":5,"column":159},"end":{"line":5,"column":178}}}) : helper)))
    + "\"";
},"4":function(container,depth0,helpers,partials,data) {
    return " isItemWithReferenceTexts ";
},"6":function(container,depth0,helpers,partials,data) {
    return "<div class=\"cart-quickaddtocart-input-wrapper\">\n	<label class=\"facets-item-cell-list-options-label\">Duration</label>\n	<div data-view=\"ItemDetails.Options\"></div>\n</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--form class=\"cart-quickaddtocart\" data-action=\"add-to-cart\">\n	<div data-view=\"ProductViewsPrice.Price\" class=\"cart-quickaddtocart-price\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showQuickAddToCartButton") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":7,"column":8}}})) != null ? stack1 : "")
    + "</form-->\n<form class=\"cart-quickaddtocart "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isItemWithReferenceTexts") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":98}}})) != null ? stack1 : "")
    + "\" data-action=\"add-to-cart\">\n<div class=\"product-details-options-selector-message\"></div>\n<!--div data-view=\"ProductViewsPrice.Price\" class=\"cart-quickaddtocart-price\"></div-->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"duration") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + "<div class=\"cart-quickaddtocart-input-wrapper\">\n	<label class=\"facets-item-cell-list-options-label\">Quantity</label>\n	<input name=\"quantity\" data-action=\"setquantity\" class=\"cart-quickaddtocart-quantity\" type=\"number\" min=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"minimumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minimumQuantity","hash":{},"data":data,"loc":{"start":{"line":20,"column":106},"end":{"line":20,"column":125}}}) : helper)))
    + "\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMaximumQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":126},"end":{"line":20,"column":184}}})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":20,"column":192},"end":{"line":20,"column":204}}}) : helper)))
    + "\"/>\n</div>\n<div class=\"cart-quickaddtocart-input-wrapper\">\n	<div data-view=\"AddToCart\"></div>\n</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showQuickAddToCartButton") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":25,"column":39}}})) != null ? stack1 : "")
    + "\n</form>\n<div class=\"cart-quickaddtocart-featured-description\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"featuredDescription") || (depth0 != null ? compilerNameLookup(depth0,"featuredDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"featuredDescription","hash":{},"data":data,"loc":{"start":{"line":27,"column":54},"end":{"line":27,"column":79}}}) : helper))) != null ? stack1 : "")
    + "</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cart_quickaddtocart'; return template;});