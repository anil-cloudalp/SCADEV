define('return_authorization_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "				<div class=\"return-authorization-confirmation-comments-row\">\r\n					<div class=\"return-authorization-confirmation-comments\">\r\n						<p>"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Comments:",{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n						<blockquote>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"memo") : stack1), depth0))
    + "</blockquote>\r\n					</div>\r\n				</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"return-authorization-confirmation\">\r\n	<h2 class=\"return-authorization-confirmation-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageTitle") || (depth0 != null ? compilerNameLookup(depth0,"pageTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</h2>\r\n\r\n	<div class=\"return-authorization-confirmation-module\">\r\n		<h2 class=\"return-authorization-confirmation-module-title\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Thank you!",{"name":"translate","hash":{},"data":data}))
    + "</h2>\r\n		<p class=\"return-authorization-confirmation-module-body\">\r\n		<a href=\"returns/returnauthorization/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalId","hash":{},"data":data}) : helper)))
    + "\" class=\"return-authorization-confirmation-module-body-return-id\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Return request #$(0)",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1),{"name":"translate","hash":{},"data":data}))
    + "</a></p>\r\n		<p class=\"return-authorization-confirmation-module-body\">\r\n			"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Your request was successfully submitted and a representative will contact you briefly.",{"name":"translate","hash":{},"data":data}))
    + "\r\n			"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"An email was sent to you with a copy of this request.",{"name":"translate","hash":{},"data":data}))
    + "\r\n		</p>\r\n		<a href=\"/returns\" class=\"return-authorization-confirmation-module-continue\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Go to list of requests",{"name":"translate","hash":{},"data":data}))
    + "</a>\r\n	</div>\r\n\r\n	<h3>\r\n		<span>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"From:",{"name":"translate","hash":{},"data":data}))
    + "</span>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Purchase #$(0)",((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"tranid") : stack1),{"name":"translate","hash":{},"data":data}))
    + "\r\n		<span class=\"return-authorization-confirmation-amount\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span>\r\n	</h3>\r\n	\r\n	<div class=\"return-authorization-confirmation-row\" name=\"return-content-layout\">\r\n		<div class=\"return-authorization-confirmation-content-col\">\r\n\r\n			<div class=\"return-authorization-confirmation-accordion-divider\">\r\n				<div class=\"return-authorization-confirmation-accordion-head\">	\r\n					<a href=\"#\" class=\"return-authorization-confirmation-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#return-products\" aria-expanded=\"true\" aria-controls=\"return-products\">\r\n						"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Items ($(0))",(depth0 != null ? compilerNameLookup(depth0,"linesLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n						<i class=\"return-authorization-confirmation-head-toggle-icon\"></i>\r\n					</a>\r\n				</div>\r\n\r\n				<div class=\"return-authorization-confirmation-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"return-products\" role=\"tabpanel\" data-target=\"#return-products\">\r\n					<table class=\"return-authorization-confirmation-products-table\">\r\n						<thead class=\"return-authorization-confirmation-headers\">\r\n							<tr>\r\n								<th class=\"return-authorization-confirmation-headers-image\"></th>\r\n								<th class=\"return-authorization-confirmation-headers-product\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Item",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n								<th class=\"return-authorization-confirmation-headers-amount\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n								<th class=\"return-authorization-confirmation-headers-quantity\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Qty to return",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n								<th class=\"return-authorization-confirmation-headers-reason\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Reason for Return",{"name":"translate","hash":{},"data":data}))
    + "</th>\r\n							</tr>\r\n				      	</thead>\r\n		      			<tbody data-view=\"Items.Collection\"></tbody>\r\n					</table>\r\n				</div>\r\n			</div>\r\n			\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComments") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'return_authorization_confirmation'; return template;});