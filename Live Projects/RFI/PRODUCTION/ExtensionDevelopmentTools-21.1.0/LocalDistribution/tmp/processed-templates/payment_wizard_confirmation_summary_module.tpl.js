define('payment_wizard_confirmation_summary_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "				<div class=\"payment-wizard-confirmation-summary-module-deposits-subtotal\">\r\n					<p class=\"payment-wizard-confirmation-summary-module-grid-float\">\r\n						<span class=\"payment-wizard-confirmation-summary-module-deposits-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"depositTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"depositTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n						"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposits Subtotal",{"name":"translate","hash":{},"data":data}))
    + "\r\n						\r\n					</p>\r\n				</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "				<div class=\"payment-wizard-confirmation-summary-module-credits-subtotal\">\r\n					<p class=\"payment-wizard-confirmation-summary-module-grid-float\">\r\n						<span class=\"payment-wizard-confirmation-summary-module-credits-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"creditTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"creditTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"creditTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n						"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credits Subtotal",{"name":"translate","hash":{},"data":data}))
    + "						\r\n					</p>\r\n				</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"payment-wizard-confirmation-summary-module\">\r\n	<div class=\"payment-wizard-confirmation-summary-module-container\">\r\n		<header class=\"payment-wizard-confirmation-summary-module-header\">\r\n			<h3 class=\"payment-wizard-confirmation-summary-module-title\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment Summary",{"name":"translate","hash":{},"data":data}))
    + "\r\n			</h3>\r\n		</header>\r\n		<div class=\"payment-wizard-confirmation-summary-module-body\">\r\n			<div class=\"payment-wizard-confirmation-summary-module-invoices\">\r\n				<p class=\"payment-wizard-confirmation-summary-module-grid-float\">\r\n					<span class=\"payment-wizard-confirmation-summary-module-invoices-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"invoiceTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoiceTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"invoiceTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoices (<span class=\"payment-wizard-confirmation-summary-module-invoices-number\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"selectedInvoicesLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + "					\r\n				</p>\r\n			</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDeposit") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCredit") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n			<div class=\"payment-wizard-confirmation-summary-module-estimated\">\r\n				<p class=\"payment-wizard-confirmation-summary-module-grid-float\">\r\n					<span class=\"payment-wizard-confirmation-summary-module-total-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n					<span class=\"payment-wizard-confirmation-summary-module-total-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment Total",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n				</p>\r\n			</div>			\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_confirmation_summary_module'; return template;});