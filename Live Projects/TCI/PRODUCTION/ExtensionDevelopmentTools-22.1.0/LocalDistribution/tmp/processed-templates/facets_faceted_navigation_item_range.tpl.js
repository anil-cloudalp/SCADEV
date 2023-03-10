define('facets_faceted_navigation_item_range.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"facets-faceted-navigation-item-range-facet-group\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":2,"column":66},"end":{"line":2,"column":76}}}) : helper)))
    + "\" data-type=\"rendered-facet\" data-facet-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data,"loc":{"start":{"line":2,"column":120},"end":{"line":2,"column":131}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHeading") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":26,"column":8}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":28,"column":1},"end":{"line":32,"column":11}}})) != null ? stack1 : "")
    + "				<span class=\"facets-faceted-navigation-item-range-end\" data-range-indicator=\"end\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeToLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeToLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeToLabel","hash":{},"data":data,"loc":{"start":{"line":33,"column":86},"end":{"line":33,"column":102}}}) : helper)))
    + "</span>\n				<span class=\"facets-faceted-navigation-item-range-start\" data-range-indicator=\"start\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFromLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeFromLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFromLabel","hash":{},"data":data,"loc":{"start":{"line":34,"column":90},"end":{"line":34,"column":108}}}) : helper)))
    + "</span>\n				<div\n						class=\"facets-faceted-navigation-item-range-slider\"\n						data-toggle=\"slider\"\n						data-facet-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data,"loc":{"start":{"line":38,"column":21},"end":{"line":38,"column":32}}}) : helper)))
    + "\"\n						data-min=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMin","hash":{},"data":data,"loc":{"start":{"line":39,"column":16},"end":{"line":39,"column":28}}}) : helper)))
    + "\"\n						data-max=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMax","hash":{},"data":data,"loc":{"start":{"line":40,"column":16},"end":{"line":40,"column":28}}}) : helper)))
    + "\"\n						data-low=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFrom") || (depth0 != null ? compilerNameLookup(depth0,"rangeFrom") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFrom","hash":{},"data":data,"loc":{"start":{"line":41,"column":16},"end":{"line":41,"column":29}}}) : helper)))
    + "\"\n						data-high=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeTo") || (depth0 != null ? compilerNameLookup(depth0,"rangeTo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeTo","hash":{},"data":data,"loc":{"start":{"line":42,"column":17},"end":{"line":42,"column":28}}}) : helper)))
    + "\">\n					<div class=\"facets-faceted-navigation-item-range-slider-bar\" data-control=\"bar\" style=\"left: 0%; width: 100%;\"></div>\n					<button class=\"facets-faceted-navigation-item-range-slider-bar-right\" data-control=\"low\" style=\"left: 0%;\"></button>\n					<button class=\"facets-faceted-navigation-item-range-slider-bar-left\" data-control=\"high\" style=\"left: 100%;\"></button>\n				</div>\n			</div>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":25,"column":8}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"facets-faceted-navigation-item-range-facet-group-expander\">\n		<h4 class=\"facets-faceted-navigation-item-range-facet-group-title\">\n			"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":7,"column":23}}}) : helper)))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":3},"end":{"line":12,"column":10}}})) != null ? stack1 : "")
    + "		</h4>\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<a class=\"facets-faceted-navigation-item-range-filter-delete\" href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"removeLink") || (depth0 != null ? compilerNameLookup(depth0,"removeLink") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"removeLink","hash":{},"data":data,"loc":{"start":{"line":9,"column":71},"end":{"line":9,"column":85}}}) : helper)))
    + "\">\n				<i class=\"facets-faceted-navigation-item-range-filter-delete-icon\"></i>\n			</a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<a href=\"#\" class=\"facets-faceted-navigation-item-range-facet-group-expander collapsed\" data-toggle=\"collapse\" data-target=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":16,"column":126},"end":{"line":16,"column":136}}}) : helper)))
    + "-category-wrapper\" data-type=\"collapse\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":16,"column":183},"end":{"line":16,"column":203}}}) : helper)))
    + "\">\n		<i class=\"facets-faceted-navigation-item-range-facet-group-expander-icon\"></i>\n		<h4 class=\"facets-faceted-navigation-item-range-facet-group-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":18,"column":69},"end":{"line":18,"column":89}}}) : helper)))
    + "</h4>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":23,"column":9}}})) != null ? stack1 : "")
    + "	</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<a class=\"facets-faceted-navigation-item-range-filter-delete\" href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"removeLink") || (depth0 != null ? compilerNameLookup(depth0,"removeLink") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"removeLink","hash":{},"data":data,"loc":{"start":{"line":20,"column":70},"end":{"line":20,"column":84}}}) : helper)))
    + "\">\n			<i class=\"facets-faceted-navigation-item-range-filter-delete-icon\"></i>\n		</a>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"facets-faceted-navigation-item-range-facet-group-wrapper\">\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"facets-faceted-navigation-item-range-facet-group-wrapper "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCollapsed") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":31,"column":72},"end":{"line":31,"column":128}}})) != null ? stack1 : "")
    + "\" id=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":31,"column":134},"end":{"line":31,"column":144}}}) : helper)))
    + "-category-wrapper\">\n";
},"12":function(container,depth0,helpers,partials,data) {
    return " collapse in ";
},"14":function(container,depth0,helpers,partials,data) {
    return " collapse";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showFacet") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":49,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_faceted_navigation_item_range'; return template;});