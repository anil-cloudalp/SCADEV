define('subscriptions_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"subscriptions-list-button-back\">\r\n		<i class=\"subscriptions-list-button-back-icon\"></i>\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data}))
    + "\r\n	</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "			<table class=\"subscriptions-list-results-table\">\r\n				<thead class=\"subscriptions-list-actionable-header\">\r\n					<tr>\r\n						<th class=\"subscriptions-list-title-header-details\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Plan Name",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n						</th>\r\n                        <th class=\"subscriptions-list-title-header-activation-date\">\r\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Activation",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n                        </th>\r\n						<th class=\"subscriptions-list-table-header-row-date\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Last Billing",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n						</th>\r\n						<th class=\"subscriptions-list-table-header-row-date\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Next Billing",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n						</th>\r\n						<th class=\"subscriptions-list-table-header-row-renewal\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Renewal",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n						</th>\r\n						<th class=\"subscriptions-list-title-header-status\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n						</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody data-view=\"Records.Collection\" class=\"subscriptions-list-collection\"></tbody>\r\n			</table>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"transaction-history-list-empty-section\">\r\n                    <h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No subscriptions were found",{"name":"translate","hash":{},"data":data}))
    + "</h5>\r\n                </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"subscriptions-list-paginator\">\r\n				<div data-view=\"GlobalViews.Pagination\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "					<div data-view=\"GlobalViews.ShowCurrentPage\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n<section class=\"subscriptions-list\">\r\n	<header class=\"subscriptions-list-title\">\r\n		<h2>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	</header>\r\n\r\n        <div data-view=\"ListHeader.View\"></div>\r\n\r\n		<div class=\"subscriptions-list-results-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isThereAnyResult") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</section>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_list'; return template;});