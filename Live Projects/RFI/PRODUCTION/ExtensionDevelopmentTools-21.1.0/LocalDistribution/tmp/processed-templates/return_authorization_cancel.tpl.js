define('return_authorization_cancel.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"return-authorization-cancel-modal\">\r\n	<h4>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Are you sure you want to cancel this return request?",{"name":"translate","hash":{},"data":data}))
    + "</h4>\r\n	<p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"The status of the request will change to \"Cancelled\" but it won't be removed.",{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n	<div class=\"return-authorization-cancel-modal-actions\">\r\n		<button class=\"return-authorization-cancel-modal-cancel-button\" data-action=\"delete\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Cancel Return",{"name":"translate","hash":{},"data":data}))
    + "\r\n		</button>\r\n		<button class=\"return-authorization-cancel-modal-close-button\" data-dismiss=\"modal\" data-action=\"cancel\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Close",{"name":"translate","hash":{},"data":data}))
    + "\r\n		</button>\r\n	</div>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'return_authorization_cancel'; return template;});