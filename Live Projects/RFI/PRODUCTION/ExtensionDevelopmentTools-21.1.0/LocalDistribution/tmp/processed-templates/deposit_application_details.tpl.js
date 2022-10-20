define('deposit_application_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "				<table class=\"deposit-application-details-table\">\r\n					<thead class=\"deposit-application-details-table-header\">\r\n						<th class=\"deposit-application-details-table-header-number\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Number",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n						<th class=\"deposit-application-details-table-header-transaction-date\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Transaction Date",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n						<th class=\"deposit-application-details-table-header-amount\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n					</thead>\r\n\r\n					<tbody data-view=\"Invoices.Collection\"></tbody>\r\n\r\n					<tfoot>\r\n						<tr>\r\n							<td class=\"deposit-application-details-applied-amount\" colspan=\"3\">\r\n								<span class=\"deposit-application-details-applied-amount-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied Amount:",{"name":"translate","hash":{},"data":data}))
    + " </span>\r\n								<span class=\"deposit-application-details-applied-amount-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n							</td>\r\n						</tr>\r\n					</tfoot>\r\n				</table>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "	<div class=\"deposit-application-details-accordion-divider\">\r\n		<div class=\"deposit-application-details-accordion-head\">\r\n			<a class=\"deposit-application-details-accordion-head-toggle-secondary\" data-toggle=\"collapse\" data-target=\"#deposit-application-more-details\" aria-expanded=\"true\" aria-controls=\"deposit-application-more-details\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"More Details",{"name":"translate","hash":{},"data":data}))
    + "\r\n				<i class=\"deposit-application-details-accordion-toggle-icon-secondary\"></i>\r\n			</a>\r\n		</div>\r\n		<div class=\"deposit-application-details-accordion-body collapse\" id=\"deposit-application-more-details\" role=\"tabpanel\" data-target=\"#deposit-application-more-details\">\r\n			<div class=\"deposit-application-details-accordion-container\">\r\n				<div class=\"deposit-application-details-info-card\">\r\n					<p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Memo:",{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n					<p class=\"deposit-application-details-deposit-memo\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"memo","hash":{},"data":data}) : helper)))
    + "</p>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<section>\r\n	<a href=\"/transactionhistory\" class=\"deposit-application-details-back-btn\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"&lt; Back to Transaction History",{"name":"translate","hash":{},"data":data}))
    + "\r\n	</a>\r\n	<header>\r\n		<h2 class=\"deposit-application-details-title\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposit Application <span class=\"deposit-application-details-deposit-number\">#$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n			<span class=\"deposit-application-details-deposit-amount\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</h2>\r\n\r\n	</header>\r\n\r\n	<div class=\"deposit-application-details-header-information\">\r\n		<div class=\"deposit-application-details-row\">\r\n			<div class=\"deposit-application-details-header-information-container\">\r\n				<p class=\"deposit-application-details-transaction-date-info\">\r\n				<span class=\"deposit-application-details-transaction-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Transaction Date: ",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n				<span class=\"deposit-application-details-transaction-date-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"tranDate") || (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tranDate","hash":{},"data":data}) : helper)))
    + "</span>\r\n				</p>\r\n				<p class=\"deposit-application-details-from-info\">\r\n					<span class=\"deposit-application-details-from-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"From:",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n					<span class=\"deposit-application-details-from-link\"><a href=\"/transactionhistory/customerdeposit/"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositInternalId") || (depth0 != null ? compilerNameLookup(depth0,"depositInternalId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"depositInternalId","hash":{},"data":data}) : helper)))
    + "\" class=\"deposit-application-details-deposit-link\">\r\n						"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositName") || (depth0 != null ? compilerNameLookup(depth0,"depositName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"depositName","hash":{},"data":data}) : helper)))
    + "\r\n					</a></span>\r\n				</p>\r\n				<p class=\"deposit-application-details-deposit-date-info\">\r\n					<span class=\"deposit-application-details-deposit-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposit Date:",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n					<span class=\"deposit-application-details-deposit-date-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositDate") || (depth0 != null ? compilerNameLookup(depth0,"depositDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"depositDate","hash":{},"data":data}) : helper)))
    + "</span>\r\n				</p>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"deposit-application-details-accordion-divider\">\r\n		<div class=\"deposit-application-details-accordion-head\">\r\n			<a class=\"deposit-application-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#deposit-application-applied-to-invoices\" aria-expanded=\"true\" aria-controls=\"deposit-application-applied-to-invoices\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied to Invoices",{"name":"translate","hash":{},"data":data}))
    + "\r\n				<i class=\"deposit-application-details-accordion-toggle-icon\"></i>\r\n			</a>\r\n		</div>\r\n		<div class=\"deposit-application-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"deposit-application-applied-to-invoices\" role=\"tabpanel\" data-target=\"#deposit-application-applied-to-invoices\">\r\n			<div class=\"deposit-application-details-accordion-container-table\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'deposit_application_details'; return template;});