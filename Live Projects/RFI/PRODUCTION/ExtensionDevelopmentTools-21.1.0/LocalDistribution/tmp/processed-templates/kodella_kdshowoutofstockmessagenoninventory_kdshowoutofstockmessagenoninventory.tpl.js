define('kodella_kdshowoutofstockmessagenoninventory_kdshowoutofstockmessagenoninventory.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"oufofstockmessage") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"product-line-stock\" style='margin-top: 30px !important;'><p class=\"product-line-stock-msg-out\"><span class=\"product-line-stock-icon-out\"><i></i></span><span class=\"product-line-stock-msg-out-text\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"oufofstockmessage") || (depth0 != null ? compilerNameLookup(depth0,"oufofstockmessage") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"oufofstockmessage","hash":{},"data":data}) : helper)))
    + "</span></p></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=helpers.helperMissing;

  return alias2(compilerNameLookup(helpers,"log").call(alias1,depth0,{"name":"log","hash":{},"data":data}))
    + "\n<section class=\"kdshowoutofstockmessagenoninventory-info-card\" style='display:none;'>\n    <span class=\"kdshowoutofstockmessagenoninventory-info-card-content\">\n      "
    + alias2(((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "\n    </span>\n</section>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"ispurchasable") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n<!--\n  Available helpers:\n  "
    + alias2((compilerNameLookup(helpers,"getExtensionAssetsPath") || (depth0 && compilerNameLookup(depth0,"getExtensionAssetsPath")) || alias3).call(alias1,"img/image.jpg",{"name":"getExtensionAssetsPath","hash":{},"data":data}))
    + " - reference assets in your extension\n  \n  "
    + alias2((compilerNameLookup(helpers,"getExtensionAssetsPathWithDefault") || (depth0 && compilerNameLookup(depth0,"getExtensionAssetsPathWithDefault")) || alias3).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getExtensionAssetsPathWithDefault","hash":{},"data":data}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder\n  \n  "
    + alias2((compilerNameLookup(helpers,"getThemeAssetsPath") || (depth0 && compilerNameLookup(depth0,"getThemeAssetsPath")) || alias3).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getThemeAssetsPath","hash":{},"data":data}))
    + " - reference assets in the active theme\n  \n  "
    + alias2((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault") || (depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault")) || alias3).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/theme-image.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder\n-->";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KDShowOutOFstockMessageNonInventory/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'kodella_kdshowoutofstockmessagenoninventory_kdshowoutofstockmessagenoninventory'; return template;});