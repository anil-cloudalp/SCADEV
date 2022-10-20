define('case_detail.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"case-detail-reply-section\">\r\n						<button type=\"button\" class=\"case-detail-close-case-button\" data-action=\"close-case\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Close Case",{"name":"translate","hash":{},"data":data}))
    + "</button>\r\n					</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<div class=\"case-detail-message-group-row\">\r\n						<div class=\"case-detail-message-date-section\">\r\n							<span class=\"case-detail-field-message-date\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"date") || (depth0 != null ? compilerNameLookup(depth0,"date") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\r\n						</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"messages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<div class=\"case-detail-message-row "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"initialMessage") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n								<div class=\"case-detail-message\">\r\n									<span class=\"case-detail-field-message-author\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"author") || (depth0 != null ? compilerNameLookup(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</span>\r\n									<span class=\"case-detail-field-message-field-message-time\"> ("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"messageDate") || (depth0 != null ? compilerNameLookup(depth0,"messageDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"messageDate","hash":{},"data":data}) : helper)))
    + ")</span>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"initialMessage") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "								</div>\r\n								<p class=\"case-detail-field-message-text\">"
    + alias4((compilerNameLookup(helpers,"breaklines") || (depth0 && compilerNameLookup(depth0,"breaklines")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"breaklines","hash":{},"data":data}))
    + "</p>\r\n							</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "sc-highlighted";
},"7":function(container,depth0,helpers,partials,data) {
    return "										<span class=\"case-detail-field-message-original\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"- Original case message",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"case-detail\">\r\n	<header class=\"case-detail-title\">\r\n		<a href=\"/cases\" class=\"case-detail-back-btn\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"&lt; Back to Cases",{"name":"translate","hash":{},"data":data}))
    + "</a>\r\n		<h2 class=\"case-detail-header-title\">\r\n			<span class=\"case-detail-field-number\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</span>\r\n			<span class=\"case-detail-field-subject\"> "
    + alias3(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1), depth0))
    + "</span>\r\n		</h2>\r\n	</header>\r\n\r\n	<div data-confirm-message class=\"case-detail-confirm-message\"></div>\r\n\r\n	<div data-type=\"alert-placeholder\"></div>\r\n\r\n	<div class=\"case-detail-header-information\">\r\n		<div class=\"case-detail-header-row\">\r\n			<div class=\"case-detail-header-col-left\">\r\n				<p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"<span class=\"case-detail-label-type\">Type of inquiry: </span> <span class=\"case-detail-value-type\">$(0)</span>",((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"category") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1),{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n				<p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"<span class=\"case-detail-label-creation-date\">Creation date: </span> <span class=\"case-detail-value-creation-date\">$(0)</span>",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdDate") : stack1),{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n				<p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"<span class=\"case-detail-label-last-message-date\">Last message: </span> <span class=\"case-detail-value-last-message-date\">$(0)</span>",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"lastMessageDate") : stack1),{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n			</div>\r\n			<div class=\"case-detail-header-col-right\">\r\n				<p class=\"case-detail-header-status-info\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"<span class=\"case-detail-label-status\">Status: </span> <span class=\"case-detail-value-status\">$(0)</span>",((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1),{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"closeStatusId") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"case-detail-conversation-background\">\r\n		<form action=\"#\">\r\n				<div class=\"case-detail-reply-container\" data-validation=\"control-group\">\r\n					<label class=\"case-detail-reply-label\" for=\"reply\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Reply with a message:",{"name":"translate","hash":{},"data":data}))
    + "</label>\r\n					<span class=\"case-detail-controls\" data-validation=\"control\">\r\n						<textarea name=\"reply\" id=\"reply\" class=\"case-detail-reply-textarea\" rows=\"4\"></textarea>\r\n					</span>\r\n				</div>\r\n				<div class=\"case-detail-reply-section\">\r\n					<button type=\"submit\" class=\"case-detail-reply-button\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Reply",{"name":"translate","hash":{},"data":data}))
    + "</button>\r\n				</div>\r\n		</form>\r\n\r\n		<div class=\"case-detail-messages-accordion\">\r\n			<div class=\"case-detail-accordion-head\">\r\n				<a class=\"case-detail-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#response-messages\" aria-expanded=\"true\" aria-controls=\"response-messages\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Messages ($(0))",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"messages_count") : stack1),{"name":"translate","hash":{},"data":data}))
    + "\r\n					<i class=\"case-detail-accordion-toggle-icon\"></i>\r\n				</a>\r\n			</div>\r\n			<div class=\"case-detail-accordion-body collapse in\" id=\"response-messages\" role=\"tabpanel\" data-target=\"#response-messages\">\r\n				<div class=\"case-detail-accordion-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"grouped_messages") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n\r\n</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'case_detail'; return template;});