define('order_wizard_address_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<h3 class=\"order-wizard-address-module-title\">\n				"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":13}}}) : helper)))
    + "\n			</h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div id=\"order-wizard-address-module-placeholder\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showManageValue") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":53},"end":{"line":23,"column":113}}})) != null ? stack1 : "")
    + "\n				class=\"order-wizard-address-module-list-placeholder\">\n\n				<div class=\"order-wizard-address-module-address-container\">\n					<div data-view=\"Address.List\"></div>\n				</div>\n\n				<div data-view=\"OrderWizard.After"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manageValue") || (depth0 != null ? compilerNameLookup(depth0,"manageValue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"manageValue","hash":{},"data":data,"loc":{"start":{"line":30,"column":37},"end":{"line":30,"column":52}}}) : helper)))
    + "\"></div>\n			</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-manage=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manageValue") || (depth0 != null ? compilerNameLookup(depth0,"manageValue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"manageValue","hash":{},"data":data,"loc":{"start":{"line":23,"column":89},"end":{"line":23,"column":104}}}) : helper)))
    + "\" ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div id=\"address-module-form-placeholder\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showManageValue") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":45},"end":{"line":33,"column":105}}})) != null ? stack1 : "")
    + "\n				class=\"order-wizard-address-module-form-placeholder\">\n				<div data-view=\"New.Address.Form\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaveButton") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":4},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + "\n				<div data-view=\"OrderWizard.After"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manageValue") || (depth0 != null ? compilerNameLookup(depth0,"manageValue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"manageValue","hash":{},"data":data,"loc":{"start":{"line":45,"column":37},"end":{"line":45,"column":52}}}) : helper)))
    + "\"></div>\n\n			</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"order-wizard-address-module-form-actions\">\n						<button type=\"submit\" class=\"order-wizard-address-module-save-button\" data-action=\"submit\">\n							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":7},"end":{"line":40,"column":35}}}))
    + "\n						</button>\n					</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"order-wizard-address-module\">\n	<div class=\"order-wizard-address-module-show-addresses-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":7,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAddressList") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":48,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_address_module'; return template;});