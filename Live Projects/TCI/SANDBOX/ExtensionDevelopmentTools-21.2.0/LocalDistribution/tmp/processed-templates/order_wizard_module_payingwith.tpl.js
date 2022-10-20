define('order_wizard_module_payingwith.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "checked ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div>\n            <input type=\"radio\" class=\"order-wizard-module-payingwith-option\" id=\"order-wizard-module-payingwith-option-personalcc\" name=\"order-wizard-module-payingwith-option\" value=\"2\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"payingWithPersonalCreditCard") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":187},"end":{"line":13,"column":238}}})) != null ? stack1 : "")
    + " />\n            <label for=\"order-wizard-module-payingwith-option-personalcc\">A Personal Credit Card</label>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"order-wizard-module-payingwith-step\">\n    <div class=\"order-wizard-module-payingwith-options-container\">\n        <div>\n            <input type=\"radio\" class=\"order-wizard-module-payingwith-option\" id=\"order-wizard-module-payingwith-option-schoolcc\" name=\"order-wizard-module-payingwith-option\" value=\"1\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"payingWithSchoolCreditCard") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":185},"end":{"line":4,"column":234}}})) != null ? stack1 : "")
    + " />\n            <label for=\"order-wizard-module-payingwith-option-schoolcc\">A School Credit Card</label>\n        </div>\n        <div>\n            <input type=\"radio\" class=\"order-wizard-module-payingwith-option\" id=\"order-wizard-module-payingwith-option-purchaseorder\" name=\"order-wizard-module-payingwith-option\" value=\"purchaseOrder\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"payingWithPurchaseOrder") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":202},"end":{"line":8,"column":248}}})) != null ? stack1 : "")
    + " />\n            <label for=\"order-wizard-module-payingwith-option-purchaseorder\">A Purchase Order (Not Available for International Orders)</label>\n        </div>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hidePersonalCreditCardOption") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":16,"column":19}}})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/CheckoutCustomizationsExtension/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_module_payingwith'; return template;});