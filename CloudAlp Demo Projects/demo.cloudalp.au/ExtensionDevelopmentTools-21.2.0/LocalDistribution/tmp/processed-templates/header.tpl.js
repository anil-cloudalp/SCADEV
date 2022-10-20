define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"header-menu-bannertext\">\n			<p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1), depth0))
    + "</p>\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"header-menu-bannertext-desktop\">\n					<p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1), depth0))
    + "</p>\n				</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<ul class=\"header-subheader-options\">\n						<li class=\"header-subheader-settings\">\n							<a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\"\n								title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":15},"end":{"line":43,"column":39}}}))
    + "\">\n								<i class=\"header-menu-settings-icon\"></i>\n								<i class=\"header-menu-settings-carret\"></i>\n							</a>\n							<div class=\"header-menu-settings-dropdown\">\n								<h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":48,"column":56},"end":{"line":48,"column":85}}}))
    + "</h5>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":8},"end":{"line":51,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":8},"end":{"line":54,"column":15}}})) != null ? stack1 : "")
    + "							</div>\n						</li>\n					</ul>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"Global.HostSelector\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"Global.CurrencySelector\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"header-message\" data-view=\"Message.Placeholder\"></div>\n\n<div class=\"header-main-wrapper\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":8,"column":8}}})) != null ? stack1 : "")
    + "\n	<div id=\"banner-header-top\" class=\"content-banner banner-header-top header-banner-top\"\n		data-cms-area=\"header_banner_top\" data-cms-area-filters=\"global\"></div>\n\n	<nav class=\"header-main-nav\">\n\n		<div class=\"header-content\">\n			<div class=\"header-logo-wrapper\">\n				<div data-view=\"Header.Logo\"></div>\n			</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":3},"end":{"line":24,"column":10}}})) != null ? stack1 : "")
    + "\n			<div class=\"header-right-menu\">\n				<div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\n				<div class=\"header-menu-locator\" data-view=\"StoreLocatorHeaderLink\"></div>\n				<div class=\"header-menu-mobile-cart\">\n					<div class=\"header-menu-cart-dropdown\">\n						<div data-view=\"Header.MiniCart\"></div>\n					</div>\n				</div>\n				<div class=\"header-menu-quote\" data-view=\"RequestQuoteWizardHeaderLink\"></div>\n				<div class=\"header-become-a-dealer-desktop\">\n					<a href=\"#\" data-touchpoint=\"home\" data-hashtag=\"#become-a-dealer\">Become a dealer</a>\n				</div>\n				<div class=\"header-menu-quickorder\" data-view=\"QuickOrderHeaderLink\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":4},"end":{"line":58,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n\n			<div class=\"header-sidebar-toggle-wrapper\">\n				<button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\n					<span></span>\n				</button>\n			</div>\n\n		</div>\n	</nav>\n</div>\n\n<div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div>\n\n<div class=\"header-logo-nav-container\">\n	<div class=\"header-logo-nav-wrapper\">\n		<div class=\"header-logo-desktop-wrapper\">\n			<div data-view=\"Header.Logo\"></div>\n		</div>\n		<div class=\"header-nav-desktop-wrapper\">\n			<div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\"\n				data-tablet-template=\"header_sidebar\"></div>\n		</div>\n		<div class=\"header-right-menu-also\">\n			<div class=\"header-menu-cart\">\n				<div class=\"header-menu-cart-dropdown\">\n					<div data-view=\"Header.MiniCart\"></div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div id=\"banner-header-bottom\" class=\"content-banner banner-header-bottom\" data-cms-area=\"header_banner_bottom\"\n	data-cms-area-filters=\"global\"></div>\n\n<div class=\"header-site-search search-mobile\" data-view=\"SiteSearch\" data-type=\"SiteSearch\"></div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header'; return template;});