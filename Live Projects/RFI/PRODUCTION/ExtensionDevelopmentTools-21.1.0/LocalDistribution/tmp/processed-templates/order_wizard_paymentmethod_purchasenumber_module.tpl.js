define('order_wizard_paymentmethod_purchasenumber_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"order-wizard-paymentmethod-purchasenumber-module\">\r\n	<h3 class=\"order-wizard-paymentmethod-purchasenumber-module-title\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Purchase Order Number",{"name":"translate","hash":{},"data":data}))
    + "\r\n	 </h3>\r\n	<div class=\"order-wizard-paymentmethod-purchasenumber-module-row\">\r\n		<label for=\"purchase-order-number\" class=\"order-wizard-paymentmethod-purchasenumber-module-purchase-order-label\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Enter Purchase Order Number",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"order-wizard-paymentmethod-purchasenumber-module-purchase-order-optional\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"(Optional)",{"name":"translate","hash":{},"data":data}))
    + " </span>\r\n		</label>\r\n		<input\r\n			type=\"text\"\r\n			name=\"purchase-order-number\"\r\n			id=\"purchase-order-number\"\r\n			class=\"order-wizard-paymentmethod-purchasenumber-module-purchase-order-value\"\r\n			value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchaseNumber") || (depth0 != null ? compilerNameLookup(depth0,"purchaseNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"purchaseNumber","hash":{},"data":data}) : helper)))
    + "\"\r\n		>\r\n	</div>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_paymentmethod_purchasenumber_module'; return template;});