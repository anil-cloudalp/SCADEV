define('customer_payment_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"customer-payment-details-message-warning\">\r\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"The payment process of this purchase was not completed. To place order, please <a href=\"$(0)\">finalize your payment.</a>",(depth0 != null ? compilerNameLookup(depth0,"redirectUrl") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n		</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "in";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "			<table class=\"customer-payment-details-accordion-body-container-recordviews-table\">\r\n				<thead class=\"customer-payment-details-accordion-body-container-recordviews-table-header\">\r\n					<tr>\r\n						<th class=\"customer-payment-details-accordion-body-container-recordviews-title\">\r\n							"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Number",{"name":"translate","hash":{},"data":data}))
    + "\r\n						</th>\r\n						<th class=\"customer-payment-details-accordion-body-container-recordviews-date\" data-name=\"date\">\r\n							"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data}))
    + "\r\n						</th>\r\n						<th class=\"customer-payment-details-accordion-body-container-recordviews-discount\" data-name=\"discount\">\r\n							"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Disc",{"name":"translate","hash":{},"data":data}))
    + "\r\n						</th>\r\n						<th class=\"customer-payment-details-accordion-body-container-recordviews-currency\" data-name=\"amount\">\r\n							"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "\r\n						</th>\r\n					</tr>\r\n				</thead>\r\n\r\n				<tbody data-view=\"Invoices.Collection\"></tbody>\r\n\r\n				<tfoot>\r\n					<tr>\r\n					<td colspan=\"4\" class=\"customer-payment-details-accordion-body-container-payment-total\">\r\n						<p>\r\n						<span class=\"customer-payment-details-payment-total-label\">\r\n							"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment Total: ",{"name":"translate","hash":{},"data":data}))
    + "\r\n						</span>\r\n						<span class=\"customer-payment-details-payment-total-value\">\r\n							"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "\r\n						</span>\r\n\r\n						</p>\r\n					</td>\r\n					</tr>\r\n				</tfoot>\r\n			</table>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"customer-payment-details-noinvoices-message\">\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"This payment is not applied to any invoices.",{"name":"translate","hash":{},"data":data}))
    + "\r\n			</div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"customer-payment-details-accordion-body-container-payment-method\">\r\n						<div class=\"customer-payment-details-accordion-body-container-payment-method-card\">\r\n							<div data-view=\"PaymentMethod\"></div>\r\n						</div>\r\n					</div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"customer-payment-details-accordion-body-container-payment-memo\">\r\n						<div class=\"customer-payment-details-accordion-body-container-payment-memo-card\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Memo:",{"name":"translate","hash":{},"data":data}))
    + "\r\n							<div class=\"customer-payment-details-accordion-body-container-payment-memo-card-info\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"memo","hash":{},"data":data}) : helper)))
    + "</div>\r\n						</div>\r\n					</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<a href=\"/transactionhistory\" class=\"customer-payment-details-back\">\r\n	"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"&lt; Back to Transaction History",{"name":"translate","hash":{},"data":data}))
    + "\r\n</a>\r\n\r\n<section class=\"customer-payment-details\">\r\n	<header class=\"customer-payment-details-header\">\r\n		<h2>\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment <span class=\"customer-payment-details-header-number\">#$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n			<span class=\"customer-payment-details-header-amount\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</h2>\r\n	</header>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaymentEventFail") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n	<div class=\"customer-payment-details-information\">\r\n		<div class=\"customer-payment-details-information-col-date\">\r\n			<p class=\"customer-payment-details-information-col-date-text\">\r\n				<span class=\"customer-payment-details-information-col-status-label\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date:",{"name":"translate","hash":{},"data":data}))
    + " </span>\r\n				<span class=\"customer-payment-details-information-date\">\r\n				"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"tranDate") || (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tranDate","hash":{},"data":data}) : helper)))
    + "\r\n				</span>\r\n			</p>\r\n		</div>\r\n		<div class=\"customer-payment-details-information-col-status\">\r\n			<p class=\"customer-payment-details-information-col-status-text\">\r\n				<span class=\"customer-payment-details-information-col-status-label\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Status: ",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n				<span class=\"customer-payment-details-information-status\">\r\n				"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"status") || (depth0 != null ? compilerNameLookup(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "\r\n				</span>\r\n			</p>\r\n			<a href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"downloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"downloadPDFURL") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"downloadPDFURL","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" target=\"_blank\" class=\"customer-payment-details-information-col-button\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + "\r\n			</a>\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"customer-payment-details-accordion-head\">\r\n		<a class=\"customer-payment-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#invoice-items\" aria-expanded=\"true\" aria-controls=\"invoice-items\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoices",{"name":"translate","hash":{},"data":data}))
    + "\r\n			<i class=\"customer-payment-details-accordion-toggle-icon\"></i>\r\n		</a>\r\n	</div>\r\n	<div class=\"customer-payment-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"invoice-items\" role=\"tabpanel\" data-target=\"#invoice-items\">\r\n		<div class=\"customer-payment-details-accordion-container\" data-content=\"order-items-body\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n\r\n	<div class=\"customer-payment-details-accordion-head\">\r\n		<a class=\"customer-payment-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#billing-payment-items\" aria-expanded=\"true\" aria-controls=\"billing-payment-items\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Billing & Payment Method",{"name":"translate","hash":{},"data":data}))
    + "\r\n			<i class=\"customer-payment-details-accordion-toggle-icon\"></i>\r\n		</a>\r\n	</div>\r\n	<div class=\"customer-payment-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"billing-payment-items\" role=\"tabpanel\" data-target=\"#billing-payment-items\">\r\n		<div class=\"customer-payment-details-accordion-container\" data-content=\"order-items-body\">\r\n			<div class=\"customer-payment-details-accordion-body-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n\r\n</section>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'customer_payment_details'; return template;});