define('deposit_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "				<table class=\"deposit-details-invoice-table\">\r\n					<thead class=\"deposit-details-invoice-table-heading\">\r\n						<th class=\"deposit-details-invoice-table-heading-number\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Number",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n						<th class=\"deposit-details-invoice-table-heading-date\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoice Date",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n						<th class=\"deposit-details-invoice-table-heading-date-applied\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date Applied",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n						<th class=\"deposit-details-invoice-table-heading-amount\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n					</thead>\r\n					<tbody data-view=\"Invoices.Collection\"></tbody>\r\n\r\n					<tfoot>\r\n						<tr>\r\n							<td colspan=\"4\" class=\"deposit-details-applied-amount\">\r\n								<span class=\"deposit-details-applied-amount-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied Amount:",{"name":"translate","hash":{},"data":data}))
    + " </span>\r\n								<span class=\"deposit-details-applied-amount-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paidFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paidFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paidFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n							</td>\r\n						</tr>\r\n\r\n						<tr>\r\n							<td colspan=\"4\" class=\"deposit-details-remaining-amount\">\r\n								<span class=\"deposit-details-remaining-amount-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Remaining Amount:",{"name":"translate","hash":{},"data":data}))
    + " </span>\r\n								<span class=\"deposit-details-remaining-amount-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"remainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"remainingFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"remainingFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n							</td>\r\n						</tr>\r\n					</tfoot>\r\n				</table>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"deposit-details-row\">\r\n					<div class=\"deposit-details-deposit-message\">\r\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"This Deposit has not been applied to any invoices yet.",{"name":"translate","hash":{},"data":data}))
    + "\r\n					</div>\r\n				</div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "								<div class=\"deposit-details-method\">\r\n									<div data-view=\"PaymentMethod\"></div>\r\n								</div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "						<div class=\"deposit-details-info-card-grid\">\r\n							<div class=\"deposit-details-info-card\">\r\n								<span class=\"deposit-details-memo-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Memo:",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n								<span class=\"deposit-details-memo-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"memo","hash":{},"data":data}) : helper)))
    + "</span>\r\n							</div>\r\n						</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<section class=\"deposit-details\">\r\n	<header>\r\n		<h2 class=\"deposit-details-header-title\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposit <span class=\"deposit-details-number\">#$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n			<span class=\"deposit-details-deposit-payment\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</h2>\r\n		<a href=\"/transactionhistory\" class=\"deposit-details-back-btn\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"&lt; Back to Transaction History",{"name":"translate","hash":{},"data":data}))
    + "\r\n		</a>\r\n	</header>\r\n\r\n	<div class=\"deposit-details-header-information\">\r\n		<div class=\"deposit-details-row\">\r\n			<div class=\"deposit-details-header-col-left\">\r\n				<p class=\"deposit-details-date-info\">\r\n					<span class=\"deposit-details-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date: ",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n					<span class=\"deposit-details-date-value\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"tranDate") || (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tranDate","hash":{},"data":data}) : helper)))
    + "</span>\r\n				</p>\r\n			</div>\r\n			<div class=\"deposit-details-header-col-right\">\r\n				<p class=\"deposit-details-status-info\">\r\n					 <span class=\"deposit-details-status-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Status: ",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n					 <span class=\"deposit-details-status-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"status") || (depth0 != null ? compilerNameLookup(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\r\n				</p>\r\n			</div>\r\n		</div>\r\n\r\n		<div class=\"deposit-details-row\">\r\n			<div class=\"deposit-details-button-container\">\r\n			<a href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"downloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"downloadPDFURL") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"downloadPDFURL","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" target=\"_blank\" class=\"deposit-details-button-download-as-pdf\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + "</a>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"deposit-details-accordion-divider\">\r\n		<div class=\"deposit-details-accordion-head\">\r\n			<a class=\"deposit-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#deposit-applied-to-invoices\" aria-expanded=\"true\" aria-controls=\"deposit-applied-to-invoices\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied to Invoices",{"name":"translate","hash":{},"data":data}))
    + "\r\n				<i class=\"deposit-details-accordion-toggle-icon\"></i>\r\n			</a>\r\n		</div>\r\n		<div class=\"deposit-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"deposit-applied-to-invoices\" role=\"tabpanel\" data-target=\"#deposit-applied-to-invoices\">\r\n			<div class=\"deposit-details-accordion-container-table\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"deposit-details-accordion-divider\">\r\n		<div class=\"deposit-details-accordion-head\">\r\n			<a class=\"deposit-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#deposit-billing\" aria-expanded=\"true\" aria-controls=\"deposit-billing\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Billing & Payment Method",{"name":"translate","hash":{},"data":data}))
    + "\r\n				<i class=\"deposit-details-accordion-toggle-icon\"></i>\r\n			</a>\r\n		</div>\r\n		<div class=\"deposit-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"deposit-billing\" role=\"tabpanel\" data-target=\"#deposit-billing\">\r\n			<div class=\"deposit-details-accordion-container\">\r\n				<div class=\"deposit-details-row\">\r\n					<div class=\"deposit-details-info-card-grid\">\r\n						<div class=\"deposit-details-info-card\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</section>\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'deposit_details'; return template;});