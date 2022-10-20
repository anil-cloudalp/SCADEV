define('tci_manageordersext_requestareturn_items.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"return-eligibility-eligible-items\">\n      <div class=\"find-invoice-form-group\" data-input=\"item\" data-validation=\"control-group\">\n        <div class=\"find-invoice-form-container\" data-validation=\"control\">\n          <input type=\"checkbox\" data-amount=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount") || (depth0 != null ? compilerNameLookup(depth0,"amount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount","hash":{},"data":data,"loc":{"start":{"line":17,"column":46},"end":{"line":17,"column":56}}}) : helper)))
    + "\" data-description=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":17,"column":76},"end":{"line":17,"column":91}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":102},"end":{"line":17,"column":108}}}) : helper)))
    + "\" data-itemNo=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemNo") || (depth0 != null ? compilerNameLookup(depth0,"itemNo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemNo","hash":{},"data":data,"loc":{"start":{"line":17,"column":123},"end":{"line":17,"column":133}}}) : helper)))
    + "\" data-quantity=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":17,"column":150},"end":{"line":17,"column":162}}}) : helper)))
    + "\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rate") || (depth0 != null ? compilerNameLookup(depth0,"rate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rate","hash":{},"data":data,"loc":{"start":{"line":17,"column":175},"end":{"line":17,"column":183}}}) : helper)))
    + "\" data-inputAmount=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"inputAmount") || (depth0 != null ? compilerNameLookup(depth0,"inputAmount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputAmount","hash":{},"data":data,"loc":{"start":{"line":17,"column":203},"end":{"line":17,"column":218}}}) : helper)))
    + "\" data-inputQuantity=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"inputQuantity") || (depth0 != null ? compilerNameLookup(depth0,"inputQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputQuantity","hash":{},"data":data,"loc":{"start":{"line":17,"column":240},"end":{"line":17,"column":257}}}) : helper)))
    + "\" name=\"item\">\n        </div>\n      </div>\n      <div class=\"return-eligibility-eligible-item-details\">\n        <p>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":21,"column":11},"end":{"line":21,"column":26}}}) : helper)))
    + "</p>\n        <div class=\"return-eligibility-eligible-item-amount-and-quantity\">\n          <span class=\"return-eligibility-eligible-item-amount\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inputAmount") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":28,"column":19}}})) != null ? stack1 : "")
    + "          </span>\n          <div class=\"return-eligibility-eligible-item-quantity\">\n            <span>Quantity:</span><input class=\"returnQuantity\" type=\"number\" name=\"quantity\" min=\"1\" max=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":31,"column":107},"end":{"line":31,"column":119}}}) : helper)))
    + "\" value=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inputQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":31,"column":128},"end":{"line":31,"column":193}}})) != null ? stack1 : "")
    + "\">\n          </div>\n        </div>\n      </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"inputAmount") || (depth0 != null ? compilerNameLookup(depth0,"inputAmount") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputAmount","hash":{},"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":27}}}) : helper)))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            $"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amount") || (depth0 != null ? compilerNameLookup(depth0,"amount") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"amount","hash":{},"data":data,"loc":{"start":{"line":27,"column":13},"end":{"line":27,"column":23}}}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"inputQuantity") || (depth0 != null ? compilerNameLookup(depth0,"inputQuantity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputQuantity","hash":{},"data":data,"loc":{"start":{"line":31,"column":149},"end":{"line":31,"column":166}}}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":31,"column":174},"end":{"line":31,"column":186}}}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"ineligible") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":4},"end":{"line":55,"column":13}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"return-ineligible-item-details\">\n      <div class=\"return-ineligible-item-details-left\">\n        <p>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":45,"column":11},"end":{"line":45,"column":26}}}) : helper)))
    + "</p>\n        <div class=\"return-ineligible-item-amount-and-quantity\">\n          <span class=\"return-ineligible-item-amount\">$"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount") || (depth0 != null ? compilerNameLookup(depth0,"amount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount","hash":{},"data":data,"loc":{"start":{"line":47,"column":55},"end":{"line":47,"column":65}}}) : helper)))
    + "</span>\n          <span class=\"return-ineligible-item-quantity\">Quantity: "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":48,"column":66},"end":{"line":48,"column":78}}}) : helper)))
    + "</span>\n        </div>\n      </div>\n      <div class=\"return-ineligible-item-details-right\">\n        Outside of return policy\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"return-container\">\n  <div class=\"return-requestor-container\">\n    <h2 class=\"return-requestor\">Requestor Information</h2>\n    <p>Name: <span id=\"requestorName\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":39},"end":{"line":4,"column":47}}}) : helper)))
    + " </span></p>\n    <p>Email: <span id=\"requestorEmail\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":5,"column":41},"end":{"line":5,"column":50}}}) : helper)))
    + " </span></p>\n    <p>Phone: <span id=\"requestorPhone\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data,"loc":{"start":{"line":6,"column":41},"end":{"line":6,"column":50}}}) : helper)))
    + " </span></p>\n    <p>Reason: <span id=\"requestorReason\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"reason") || (depth0 != null ? compilerNameLookup(depth0,"reason") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reason","hash":{},"data":data,"loc":{"start":{"line":7,"column":43},"end":{"line":7,"column":53}}}) : helper)))
    + " </span></p>\n  </div>\n  <div class=\"return-item-container\">\n    <h2 class=\"return-eligibility-eligible-title\">Check the Items You Wish to Return</h2>\n    <div data-type=\"alert-placeholder\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"trackingInfo") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":36,"column":13}}})) != null ? stack1 : "")
    + "    \n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showIneligible") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":4},"end":{"line":57,"column":11}}})) != null ? stack1 : "")
    + "    <button class=\"request-line-item-return\">\n      "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Return",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":59,"column":6},"end":{"line":59,"column":28}}}))
    + "\n    </button>\n  </div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/ManageOrdersExt/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'tci_manageordersext_requestareturn_items'; return template;});