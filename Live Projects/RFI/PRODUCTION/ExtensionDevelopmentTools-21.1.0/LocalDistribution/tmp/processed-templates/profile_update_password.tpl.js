define('profile_update_password.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"profile-update-password-button-back\">\r\n		<i class=\"profile-update-password-button-back-icon\"></i>\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data}))
    + "\r\n	</a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n<section class=\"profile-update-password\">\r\n	<h2 class=\"profile-update-password-form-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	<div data-type=\"alert-placeholder\"></div>\r\n	<div class=\"profile-update-password-form-area\">\r\n		<form class=\"profile-update-password-form\">\r\n			<fieldset>\r\n				<small class=\"profile-update-password-form-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Required",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"profile-update-password-form-group-label-required\">*</span></small>\r\n\r\n				<div class=\"profile-update-password-form-group\" data-input=\"current_password\" data-validation=\"control-group\">\r\n					<label class=\"profile-update-password-form-group-label\" for=\"current_password\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Current Password",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"profile-update-password-form-group-label-required\">*</span></label>\r\n					<div  class=\"profile-update-password-group-form-controls\" data-validation=\"control\">\r\n						<input type=\"password\" class=\"profile-update-password-form-group-input\" id=\"current_password\" name=\"current_password\" value=\"\">\r\n					</div>\r\n				</div>\r\n\r\n				<div class=\"profile-update-password-form-group\" data-input=\"password\" data-validation=\"control-group\">\r\n					<label class=\"profile-update-password-form-group-label\" for=\"password\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"New Password",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"profile-update-password-form-group-label-required\">*</span></label>\r\n					<div  class=\"profile-update-password-group-form-controls\" data-validation=\"control\">\r\n						<input type=\"password\" class=\"profile-update-password-form-group-input\" id=\"password\" name=\"password\" value=\"\">\r\n					</div>\r\n				</div>\r\n\r\n				<div class=\"profile-update-password-form-group\" data-input=\"confirm_password\" data-validation=\"control-group\">\r\n					<label class=\"profile-update-password-form-group-label\" for=\"confirm_password\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Confirm Password",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"profile-update-password-form-group-label-required\">*</span></label>\r\n					<div  class=\"profile-update-password-group-form-controls\" data-validation=\"control\">\r\n						<input type=\"password\" class=\"profile-update-password-form-group-input\" id=\"confirm_password\" name=\"confirm_password\" value=\"\">\r\n					</div>\r\n				</div>\r\n			</fieldset>\r\n			<div class=\"profile-update-password-form-actions\">\r\n				<button type=\"submit\" class=\"profile-update-password-form-actions-update\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Update",{"name":"translate","hash":{},"data":data}))
    + "</button>\r\n				<button type=\"reset\" class=\"profile-update-password-form-actions-reset hide\" data-action=\"reset\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Reset",{"name":"translate","hash":{},"data":data}))
    + "</button>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'profile_update_password'; return template;});