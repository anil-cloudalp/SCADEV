define('payment_wizard_showinvoices_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<tr data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"payment-wizard-showinvoices-module-invoice\">\r\n							<td>\r\n								<span class=\"payment-wizard-showinvoices-module-value-title\">\r\n									"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n								</span>\r\n								<span class=\"payment-wizard-showinvoices-module-amount\">\r\n									<span class=\"payment-wizard-showinvoices-module-mobile-header-amount\">\r\n										"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount:",{"name":"translate","hash":{},"data":data}))
    + "\r\n									</span>\r\n									<span class=\"payment-wizard-showinvoices-module-value-amount\">\r\n										"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amountFormatted","hash":{},"data":data}) : helper)))
    + "\r\n									</span>\r\n								</span>\r\n							</td>\r\n						</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"payment-wizard-showinvoices-module\">\r\n	<div class=\"payment-wizard-showinvoices-module-expander-head\">\r\n		<a class=\"payment-wizard-showinvoices-module-expander-head-toggle\" data-toggle=\"collapse\" data-target=\"#payment-wizard-showinvoices-module-body\" aria-expanded=\"false\" aria-controls=\"payment-wizard-showinvoices-module-body\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoices (<span class=\"payment-wizard-showinvoices-module-invoices-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"invoicesLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n			<i class=\"payment-wizard-showinvoices-module-expander-head-toggle-icon\"></i>\r\n		</a>\r\n	</div>\r\n\r\n	<div class=\"payment-wizard-showinvoices-module-expander-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"payment-wizard-showinvoices-module-body\">\r\n		<div class=\"payment-wizard-showinvoices-module-expander-body-wrapper\">\r\n\r\n			<table class=\"payment-wizard-showinvoices-module-records\">\r\n				<thead class=\"payment-wizard-showinvoices-module-records-head\">\r\n					<tr>\r\n						<th class=\"payment-wizard-showinvoices-module-header-number\">\r\n							<span class=\"payment-wizard-showinvoices-module-header-number-value\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Number",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n						</th>\r\n						<th class=\"payment-wizard-showinvoices-module-header-amount\">\r\n							"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "\r\n						</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"invoices") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<tr class=\"payment-wizard-showinvoices-module-subtotal\">\r\n						<td>\r\n							<span class=\"payment-wizard-showinvoices-module-subtotal-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoices Subtotal: ",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n							<span class=\"payment-wizard-showinvoices-module-value-subtotal\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"invoicesTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoicesTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"invoicesTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_showinvoices_module'; return template;});