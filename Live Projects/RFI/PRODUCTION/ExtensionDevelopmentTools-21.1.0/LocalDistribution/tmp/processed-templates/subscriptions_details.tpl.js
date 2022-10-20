define('subscriptions_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"subscriptions-details-header-container subscriptions-details-activation-date\">\r\n                <span class=\"subscriptions-details-line-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Activation",{"name":"translate","hash":{},"data":data}))
    + "</span><br/>\r\n                <span class=\"subscriptions-details-line-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"startDate") || (depth0 != null ? compilerNameLookup(depth0,"startDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"startDate","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"subscriptions-details-header-container subscriptions-details-last-bill\">\r\n                <span class=\"subscriptions-details-line-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Last Billing",{"name":"translate","hash":{},"data":data}))
    + "</span><br/>\r\n                <span class=\"subscriptions-details-line-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"lastBillDate") || (depth0 != null ? compilerNameLookup(depth0,"lastBillDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"lastBillDate","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"subscriptions-details-header-container subscriptions-details-next-bill\">\r\n                <span class=\"subscriptions-details-line-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Next Billing",{"name":"translate","hash":{},"data":data}))
    + "</span><br/>\r\n                <span class=\"subscriptions-details-line-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"nextBillCycleDate") || (depth0 != null ? compilerNameLookup(depth0,"nextBillCycleDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"nextBillCycleDate","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"subscriptions-details-header-container subscriptions-details-renewal\">\r\n                <span class=\"subscriptions-details-line-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Renewal",{"name":"translate","hash":{},"data":data}))
    + "</span><br/>\r\n                <span class=\"subscriptions-details-line-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"nextRenewalStartDate") || (depth0 != null ? compilerNameLookup(depth0,"nextRenewalStartDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"nextRenewalStartDate","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    <section class=\"subscriptions-details-plan\">\r\n        <div data-view='Required.Lines.Collection' class=\"subscriptions-details-required-lines-list\"></div>\r\n    </section>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "    <section class=\"subscriptions-details-lines\">\r\n	    <div class=\"subscriptions-details-lines-header\">\r\n                <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add-ons",{"name":"translate","hash":{},"data":data}))
    + "</h3>\r\n	    </div>\r\n        <div data-view='Optional.Lines.Collection' class=\"subscriptions-details-optional-lines-list\"></div>\r\n    </section>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <button data-action=\"goToAddOnsMarket\" class=\"subscriptions-details-addons-button\">\r\n            "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"View all Add-ons",{"name":"translate","hash":{},"data":data}))
    + "\r\n        </button>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"subscriptions-details-cancel-button\" data-action=\"cancel-subscription\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Cancel Subscription",{"name":"translate","hash":{},"data":data}))
    + "</button>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"subscriptions-details-reactivate-button\" data-action=\"reactivate-subscription\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Reactivate Subscription",{"name":"translate","hash":{},"data":data}))
    + "</button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"subscriptions-details\">\r\n\r\n    <header class=\"subscriptions-details-top-header\">\r\n            <h2>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n            <span data-view=\"StatusView\"></span>\r\n    </header>\r\n\r\n    <section class=\"subscriptions-details-top-info\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasStartDate") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasLastBillDate") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasNextBillCycleDate") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasNextRenewalStartDate") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </section>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRequiredLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOptionalLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"subscriptions-details-buttons-container\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNonIncludedLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <br>\r\n        <hr>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"canBeSuspended") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"canBeReactivated") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_details'; return template;});