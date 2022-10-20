define('product_views_option_checkbox.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<label class=\"product-views-option-checkbox-label\" for=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":4,"column":59},"end":{"line":4,"column":75}}}) : helper)))
    + "\">\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":13}}}) : helper)))
    + "\n			</label>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":25}}}) : helper)))
    + "-container\" class=\"product-views-option-checkbox\" data-type=\"option\" data-cart-option-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":1,"column":115},"end":{"line":1,"column":131}}}) : helper)))
    + "\" data-item-option-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemOptionId") || (depth0 != null ? compilerNameLookup(depth0,"itemOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemOptionId","hash":{},"data":data,"loc":{"start":{"line":1,"column":154},"end":{"line":1,"column":170}}}) : helper)))
    + "\">\n	<div class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":2,"column":13},"end":{"line":2,"column":29}}}) : helper)))
    + "-controls-group\" data-validation=\"control-group\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLabel") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":7,"column":9}}})) != null ? stack1 : "")
    + "		<div data-validation=\"control\">			\n			<input\n				name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":26}}}) : helper)))
    + "\"\n				type=\"checkbox\"\n				id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":24}}}) : helper)))
    + "\"\n				class=\"product-views-option-checkbox-input\"\n				value=\"T\"\n				"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":34}}})) != null ? stack1 : "")
    + "				\n				>			\n		</div>\n	</div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_views_option_checkbox'; return template;});