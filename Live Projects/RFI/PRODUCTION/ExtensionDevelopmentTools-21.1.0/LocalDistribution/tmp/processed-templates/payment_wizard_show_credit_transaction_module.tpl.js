define('payment_wizard_show_credit_transaction_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Credits",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Deposits",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "in";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n						<div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-left\">\r\n							<p>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"$(0) #$(1)",(depth0 != null ? compilerNameLookup(depth0,"type") : depth0),(depth0 != null ? compilerNameLookup(depth0,"number") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n						</div>\r\n						<div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-right\">\r\n							<p>\r\n							<span class=\"payment-wizard-show-credit-transaction-module-accordion-container-label\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount: ",{"name":"translate","hash":{},"data":data}))
    + " </span> \r\n							<span class=\"payment-wizard-show-credit-transaction-module-accordion-container-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amountFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n\r\n							</p>\r\n						</div>\r\n					</div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Credits Subtotal:",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Deposits Subtotal:",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"payment-wizard-show-credit-transaction-module-accordion-divider\">\r\n	<div class=\"payment-wizard-show-credit-transaction-module-accordion-head\">\r\n		<a class=\"payment-wizard-show-credit-transaction-module-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#payment-wizard-show-credit-transaction-module-products\" aria-expanded=\"true\" aria-controls=\"payment-wizard-show-credit-transaction-module-products\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "		<i class=\"payment-wizard-show-credit-transaction-module-accordion-toggle-icon\"></i>\r\n		</a>\r\n	</div>\r\n	<div class=\"payment-wizard-show-credit-transaction-module-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"payment-wizard-show-credit-transaction-module-products\" role=\"tabpanel\" data-target=\"#payment-wizard-show-credit-transaction-module-products\">\r\n		<div data-content=\"items-body\">\r\n			<div class=\"payment-wizard-show-credit-transaction-module-accordion-body-header\">\r\n				<p class=\"payment-wizard-show-credit-transaction-module-accordion-body-header-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n			</div>\r\n			<div class=\"payment-wizard-show-credit-transaction-module-accordion-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"transactions") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n			</div>\r\n\r\n			<div class=\"payment-wizard-show-credit-transaction-module-accordion-body-footer\">\r\n				<div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row\">\r\n					<span class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-label\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "					</span>\r\n					<b>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</b>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_show_credit_transaction_module'; return template;});