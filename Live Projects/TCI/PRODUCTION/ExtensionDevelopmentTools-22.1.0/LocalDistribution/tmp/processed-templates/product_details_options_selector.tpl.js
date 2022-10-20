define('product_details_options_selector.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"Pusher\" data-type=\"sc-pusher\" data-target=\"product-details-options\"></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " class=\"product-details-options-selector-content\" data-action=\"pushable\" data-id=\"product-details-options\" ";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-details-options-selector-content-price\" data-view=\"Item.Price\"></div>\n\n			<div class=\"product-details-options-selector-content-stock\" data-view=\"Item.Stock\"></div>\n\n			<div data-view=\"StockDescription\"></div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-details-options-selector-reference-container\">\n				<small>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Required",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":11},"end":{"line":21,"column":35}}}))
    + " <span class=\"product-details-options-selector-reference\">*</span></small>\n			</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!--div class=\"product-details-options-selector-message\"></div-->\n\n<div class=\"product-details-options-selector\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":7,"column":8}}})) != null ? stack1 : "")
    + "\n	<div "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":138}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":17,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRequiredLabel") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":23,"column":9}}})) != null ? stack1 : "")
    + "\n		<div data-view=\"Options.Collection\" class=\"product-details-options-selector-option-container\"></div>\n		<div class=\"product-details-featured-description\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"featuredDescription") || (depth0 != null ? compilerNameLookup(depth0,"featuredDescription") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"featuredDescription","hash":{},"data":data,"loc":{"start":{"line":26,"column":52},"end":{"line":26,"column":77}}}) : helper))) != null ? stack1 : "")
    + "</div>\n	</div>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_options_selector'; return template;});