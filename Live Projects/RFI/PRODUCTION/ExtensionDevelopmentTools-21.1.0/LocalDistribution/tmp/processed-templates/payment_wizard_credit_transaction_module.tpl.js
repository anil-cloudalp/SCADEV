define('payment_wizard_credit_transaction_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "data-manage=\"payment-wizard-credits-accordion\"";
},"3":function(container,depth0,helpers,partials,data) {
    return "data-manage=\"payment-wizard-deposits-accordion\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Credits (<span class=\"payment-wizard-credit-transaction-module-credits-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Deposits (<span class=\"payment-wizard-credit-transaction-module-deposits-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "							<span class=\"payment-wizard-credit-transaction-module-subtotal-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credits Subtotal: ",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n							<span class=\"payment-wizard-credit-transaction-module-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "							<span class=\"payment-wizard-credit-transaction-module-subtotal-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposits Subtotal: ",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n							<span class=\"payment-wizard-credit-transaction-module-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"payment-wizard-credit-transaction-module\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n	<div class=\"payment-wizard-credit-transaction-module-expander-head\">\r\n		<a class=\"payment-wizard-credit-transaction-module-expander-head-toggle\" data-toggle=\"collapse\" data-target=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"accordionId") || (depth0 != null ? compilerNameLookup(depth0,"accordionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordionId","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"false\" aria-controls=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"accordionId") || (depth0 != null ? compilerNameLookup(depth0,"accordionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordionId","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "			<i class=\"payment-wizard-credit-transaction-module-expander-head-toggle-icon\"></i>\r\n		</a>\r\n	</div>\r\n\r\n	<div class=\"payment-wizard-credit-transaction-module-expander-body collapse in\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"accordionId") || (depth0 != null ? compilerNameLookup(depth0,"accordionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordionId","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n		<table class=\"payment-wizard-credit-transaction-module-records\">\r\n			<thead class=\"payment-wizard-credit-transaction-module-records-head\">\r\n				<tr class=\"payment-wizard-credit-transaction-module-records-head-row\">\r\n					<th></th>\r\n					<th></th>\r\n					<th>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Original amount",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n					<th>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Remaining amount",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n					<th>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n					<th class=\"payment-wizard-credit-transaction-module-records-action-col\"></th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody class=\"payment-wizard-credit-transaction-module-records-body\" data-view=\"Transaction.Collection\"></tbody>\r\n\r\n			<tfoot class=\"payment-wizard-credit-transaction-module-records-foot\">\r\n				<tr>\r\n					<td colspan=\"6\" class=\"payment-wizard-credit-transaction-module-subtotal\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "					</td>\r\n				</tr>\r\n			</tfoot>\r\n		</table>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_credit_transaction_module'; return template;});