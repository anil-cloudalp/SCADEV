define('upload_file.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"uploadfile-module\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":13,"column":8}}})) != null ? stack1 : "")
    + "\n	<p style=\"clear: both;\">\n		Please attach a PDF copy of your purchase order. Do not submit your purchase order in another format.\n	</p>\n\n	<form id=\"uploadfileform\">\n		<button class=\"button-outline\" id=\"file-upload\" data-toggle=\"uploadFile\">\n			Attach File\n		</button>\n		<div class=\"hidden\">\n			<input type=\"file\" id=\"hidden-file-input\" accept=\"image/*,.pdf,.jpg,.doc,.png,.xlsx\">\n		</div>\n	</form>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<h3 class=\"uploadfile-module-title\">\n			"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":5,"column":12}}}) : helper)))
    + "\n		</h3>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"uploadedFileName") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"uploadfile-module-filename\" style=\"margin-top: 7px;\">\n			<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"downloadUrl") || (depth0 != null ? compilerNameLookup(depth0,"downloadUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"downloadUrl","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":27}}}) : helper)))
    + "\" target=\"_blank\" style=\"font-size: 9pt; text-decoration: underline;\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"uploadedFileName") || (depth0 != null ? compilerNameLookup(depth0,"uploadedFileName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uploadedFileName","hash":{},"data":data,"loc":{"start":{"line":9,"column":97},"end":{"line":9,"column":117}}}) : helper)))
    + "</a>\n			<a href=\"#\" id=\"RemoveUploadFileAttachmentLink\" style=\"font-size: 9pt; margin-left: 3px;\">&#10008</a>\n		</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hideModule") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":28,"column":11}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/CheckoutCustomizationsExtension/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'upload_file'; return template;});