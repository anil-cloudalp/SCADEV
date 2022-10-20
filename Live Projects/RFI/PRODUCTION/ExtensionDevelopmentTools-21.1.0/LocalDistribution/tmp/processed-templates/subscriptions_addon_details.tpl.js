define('subscriptions_addon_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "            <div class=\"subscriptions-addon-details-description\">\r\n                <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Description",{"name":"translate","hash":{},"data":data}))
    + "</h3>\r\n                <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n            </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"subscriptions-addon-details-row-fluid\">\r\n                <button class=\"subscriptions-addon-details-button-continue\" data-action=\"placeOrder\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isAddingLine") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "                </button>\r\n            </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Purchase Add-On",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Update Add-On",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "            <button class=\"subscriptions-addon-details-button-cancel\" data-action=\"cancel\">Cancel Add-On</button>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "            <p class=\"subscriptions-addon-details-summary-message-info\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Costs will be prorated to the current subscription billing period",{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subscriptions-addon-details-main-content\">\r\n    <div class=\"subscriptions-addon-details-content-header-wrapper\">\r\n        <h2 class=\"subscriptions-addon-details-content-header-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"displayName") || (depth0 != null ? compilerNameLookup(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</h2>\r\n        <span data-view=\"Status.View\"></span>\r\n    </div>\r\n    <div class=\"subscriptions-addon-details-col\">\r\n        <div class=\"subscriptions-addon-details-row\">\r\n            <div class=\"subscriptions-addon-details-left-col\">\r\n                <div class=\"subscriptions-addon-details-image-gallery-container\">\r\n                    <div id=\"banner-image-top\" class=\"subscriptions-addon-details-content-banner\"></div>\r\n                    <div class=\"subscriptions-addon-details-image-gallery\">\r\n                        <img class=\"subscriptions-addon-details-center-block\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageUrl") || (depth0 != null ? compilerNameLookup(depth0,"imageUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" itemprop=\"image\" data-loader=\"false\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalId","hash":{},"data":data}) : helper)))
    + "\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"subscriptions-addon-details-right-col\">\r\n                <div data-view=\"Pricing.View\"></div>\r\n            </div>\r\n        </div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDescription") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n    <div class=\"subscriptions-addon-details-summary\">\r\n        <div data-view=\"Quantity.Amount\"></div>\r\n        <div class=\"subscriptions-addon-details-summary-container\" data-view=\"Summary.View\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCancelButton") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInfoMessage") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_details'; return template;});