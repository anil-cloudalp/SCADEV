define('global_views_showing_current.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class=\"global-views-showing-current "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"extraClass") || (depth0 != null ? compilerNameLookup(depth0,"extraClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"extraClass","hash":{},"data":data,"loc":{"start":{"line":2,"column":41},"end":{"line":2,"column":55}}}) : helper)))
    + "\">\n	<p>"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Showing $(0) - $(1) of $(2)",(depth0 != null ? compilerNameLookup(depth0,"firstItem") : depth0),(depth0 != null ? compilerNameLookup(depth0,"lastItem") : depth0),(depth0 != null ? compilerNameLookup(depth0,"totalItems") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":77}}}))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"order_text") || (depth0 != null ? compilerNameLookup(depth0,"order_text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"order_text","hash":{},"data":data,"loc":{"start":{"line":3,"column":78},"end":{"line":3,"column":92}}}) : helper)))
    + "</p>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_showing_current'; return template;});