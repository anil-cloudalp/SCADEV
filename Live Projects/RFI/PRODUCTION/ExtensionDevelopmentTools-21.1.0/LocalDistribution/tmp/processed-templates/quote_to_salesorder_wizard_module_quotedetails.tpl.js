define('quote_to_salesorder_wizard_module_quotedetails.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<p class=\"quote-to-salesorder-wizard-module-quotedetails\">\r\n	<span class=\"quote-to-salesorder-wizard-module-quotedetails-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"From Quote #: ",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n	<a href=\"/quotes/"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"quoteId") || (depth0 != null ? compilerNameLookup(depth0,"quoteId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"quoteId","hash":{},"data":data}) : helper)))
    + "\" class=\"quote-to-salesorder-wizard-module-quotedetails-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"quoteTranId") || (depth0 != null ? compilerNameLookup(depth0,"quoteTranId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"quoteTranId","hash":{},"data":data}) : helper)))
    + "</a>\r\n</p>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quote_to_salesorder_wizard_module_quotedetails'; return template;});