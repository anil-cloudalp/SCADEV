define('tci_manageordersext_requestaninvoice.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<div class=\"found-invoice-results\">\n			<h3 class=\"found-invoice-results-title\">Search Results</h3>\n			<div class=\"found-invoice-results-labels\">\n				<span class=\"found-invoice-results-labels-po\">Purchase Number</span>\n				<span class=\"found-invoice-results-labels-zip\">Billing Zipcode</span>\n				<span class=\"found-invoice-results-labels-actions\">Actions</span>\n			</div>\n			<div class=\"found-invoice-results-row\">\n				<span class=\"found-invoice-results-row-po\">"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"trackingInfo") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), depth0))
    + "</span>\n				<span class=\"found-invoice-results-row-zip\">"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"trackingInfo") : depth0)) != null ? compilerNameLookup(stack1,"zip") : stack1), depth0))
    + "</span>\n				<div class=\"found-invoice-results-row-print\" data-view=\"PrintInvoice\"></div>\n			</div>\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div>\n			<div>\n				<h3>Search Results</h3>\n				"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"notAvaliable") : depth0)) != null ? compilerNameLookup(stack1,"message") : stack1), depth0)) != null ? stack1 : "")
    + "\n			</div>\n		</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"container\">\n	<div data-cms-area=\"manage-orders-request-invoice\" data-cms-area-filters=\"path\"></div>\n	<div class=\"cms-pages-side-menu-content\">\n		<div class=\"find-invoice\">\n			<h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"findInvoiceTitle") || (depth0 != null ? compilerNameLookup(depth0,"findInvoiceTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"findInvoiceTitle","hash":{},"data":data,"loc":{"start":{"line":5,"column":7},"end":{"line":5,"column":27}}}) : helper)))
    + "</h1>\n			"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"findInvoiceDescription") || (depth0 != null ? compilerNameLookup(depth0,"findInvoiceDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"findInvoiceDescription","hash":{},"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":6,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n		<div class=\"find-invoice-form\">\n			<form>\n				<div data-type=\"alert-placeholder\"></div>\n				<div class=\"find-invoice-form-group\" data-input=\"order\" data-validation=\"control-group\">\n					<label class=\"find-invoice-label\" for=\"order\">\n						"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"PO Number or TCI Order Number (for credit card payment):",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":78}}}))
    + " \n					</label>\n					<div class=\"find-invoice-form-container\" data-validation=\"control\">\n						<input type=\"text\" id=\"order\" name=\"order\">\n					</div>\n					\n					<label class=\"find-invoice-label\" for=\"zip\">\n						"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Billing Zip Code: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":20,"column":40}}}))
    + " \n					</label>\n					<div class=\"find-invoice-form-container\" data-validation=\"control\">\n						<input type=\"text\" id=\"zip\" name=\"zip\">\n					</div>\n				</div>\n				<button type=\"submit\" class=\"find-invoice-form-submit\">\n					"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":5},"end":{"line":27,"column":27}}}))
    + "\n				</button>\n			</form>\n		</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTrackInfo") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":2},"end":{"line":46,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showNotAvaliable") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":2},"end":{"line":54,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"cms-pages-side-menu-menu\">\n		<div class=\"cms-pages-side-menu\" data-view=\"SideNavigation\"></div>\n	</div>\n</div>\n\n<!--\n  Available helpers:\n  "
    + alias4((compilerNameLookup(helpers,"getExtensionAssetsPath")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPath"))||alias2).call(alias1,"img/image.jpg",{"name":"getExtensionAssetsPath","hash":{},"data":data,"loc":{"start":{"line":63,"column":2},"end":{"line":63,"column":45}}}))
    + " - reference assets in your extension\n  \n  "
    + alias4((compilerNameLookup(helpers,"getExtensionAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getExtensionAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":65,"column":2},"end":{"line":65,"column":68}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder\n  \n  "
    + alias4((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":67,"column":2},"end":{"line":67,"column":53}}}))
    + " - reference assets in the active theme\n  \n  "
    + alias4((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/theme-image.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":69,"column":2},"end":{"line":69,"column":70}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder\n-->";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/ManageOrdersExt/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'tci_manageordersext_requestaninvoice'; return template;});