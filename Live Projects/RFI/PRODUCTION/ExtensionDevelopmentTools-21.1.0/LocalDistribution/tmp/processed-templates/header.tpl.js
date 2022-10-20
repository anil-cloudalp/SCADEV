define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "							<li class=\"background-header-order header-order-color\" data-view=\"QuickOrderHeaderLink\"></li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <ul class=\"header-menu-actions\">\r\n                            <li class=\"header-menu-myaccount-overview\">\r\n                                <a class=\"header-menu-myaccount-signout-link\" href=\"#\" data-touchpoint=\"logout\" name=\"signout\">\r\n									<i class=\"header-menu-myaccount-signout-icon\"></i>\r\n                                        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Sign Out",{"name":"translate","hash":{},"data":data}))
    + "\r\n                                </a>\r\n                            </li>\r\n                            <li> | </li>\r\n                        </ul>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "					<ul class=\"header-menu-actions header-menu-actions-cart\">\r\n					<!-- <li data-view=\"RequestQuoteWizardHeaderLink\"></li> -->\r\n						<li class=\"hidde-mobile\"> | </li>\r\n					<div class=\"header-menu-cart\">\r\n						<div class=\"header-menu-cart-dropdown\">\r\n							<div data-view=\"Header.MiniCart\"></div>\r\n						</div>\r\n					</div>\r\n					 <i class=\"fa fa-shopping-cart\"></i>\r\n					</ul>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "					<ul class=\"header-subheader-options-lc\">\r\n						<!--  <li> | </li> -->\r\n						<li class=\"header-subheader-settings\">\r\n							<a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\" title=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data}))
    + "\">\r\n								<i class=\"header-menu-settings-icon\"></i>\r\n								<!--<i class=\"header-menu-settings-carret\"></i>-->\r\n							</a>\r\n							<div class=\"header-menu-settings-dropdown\">\r\n								<h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data}))
    + "</h5>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</div>\r\n						</li>\r\n						<!--<li> | </li>  -->\r\n					</ul>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"Global.HostSelector\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"Global.CurrencySelector\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!--<script type=\"text/javascript\">\r\n\r\n_linkedin_partner_id = \"2481852\";\r\n\r\nwindow._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];\r\n\r\nwindow._linkedin_data_partner_ids.push(_linkedin_partner_id);\r\n\r\n</script>\r\n<script type=\"text/javascript\">\r\n\r\n(function()var s = document.getElementsByTagName(\"script\")[0];\r\n\r\nvar b = document.createElement(\"script\");\r\n\r\nb.type = \"text/javascript\";b.async = true;\r\n\r\nb.src = \"https://snap.licdn.com/li.lms-analytics/insight.min.js\";\r\n\r\ns.parentNode.insertBefore(b, s);})();\r\n\r\n</script> -->\r\n\r\n<noscript>\r\n\r\n<!-- <img height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https://px.ads.linkedin.com/collect/?pid=2481852&fmt=gif\" /> -->\r\n\r\n</noscript>\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div class=\"header-main-container\">\r\n	<div class=\"header-message\" data-view=\"Message.Placeholder\"></div>\r\n	<div class=\"header-main-wrapper\">\r\n		<div class=\"header-main-nav\">\r\n\r\n			<div class=\"header-content\">\r\n\r\n				<div class=\"header-left-section\">\r\n					<!--<div data-cms-area=\"sdb-landmark_header_top-left-content\" data-cms-area-filters=\"global\"></div>-->\r\n					<ul class=\"header-menu-actions\">\r\n						<li><a href=\"/contact\" data-touchpoint=\"home\" data-hashtag=\"#contact\">Contact</a></li>\r\n						<li> | </li>\r\n						<li><a href=\"tel:1300000734\">Call</a></li>\r\n						<!--<li> | </li>\r\n						<li><a href=\"https://goo.gl/maps/3JLSoLaxtmZqZrJG8\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\" target=\"_blank\"></i> Find a dealer</a></li>-->	\r\n						<li> | </li>\r\n							<li data-view=\"StoreLocatorHeaderLink\"></li> \r\n					</ul>\r\n				</div>\r\n\r\n				<div class=\"header-right-menu\">\r\n\r\n					<ul class=\"header-menu-actions\">\r\n						<!-- <li data-view=\"RequestQuoteWizardHeaderLink\"></li> -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCart") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						<li><a target=\"_blank\" href=\"https://www.smartfreight.com/tracking\">TRACK ORDER</a></li>\r\n						<li> | </li>\r\n					</ul>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"islogin") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "								\r\n					<div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCart") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n				</div>\r\n			</div>\r\n\r\n		</div>\r\n\r\n	</div>\r\n\r\n	<div class=\"header-secondary-section\">\r\n\r\n		<!-- Start Mobile Toggle  -->\r\n		<div class=\"header-sidebar-toggle-wrapper hamb-menu\">\r\n			<button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\r\n				<i class=\"header-sidebar-toggle-icon\"></i>\r\n			</button>\r\n		</div>\r\n		<!-- End Mobile Toggle -->\r\n\r\n		<div class=\"header-logo-search-wrapper\">\r\n			\r\n			<div class=\"header-logo-wrapper\">\r\n				<div data-view=\"Header.Logo\"></div>\r\n			</div>\r\n			\r\n\r\n			<div class=\"search-container\">\r\n				<div class=\"header-site-search\" data-view=\"SiteSearch\" data-type=\"SiteSearch\"></div>\r\n			</div>\r\n\r\n		</div>\r\n		\r\n		<!-- Start Main Menu -->\r\n		<div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\" data-tablet-template=\"header_sidebar\"></div>\r\n\r\n	</div>\r\n\r\n	<div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!-- Scroll Header -->\r\n<!-- <div class=\"header-main-container header-scroll-fixed\">\r\n\r\n	<div class=\"header-secondary-section\"> -->\r\n\r\n		<!-- Logo -->\r\n<!-- 		<div class=\"header-logo-wrapper\">\r\n			<div data-view=\"Header.Logo\"></div>\r\n		</div> -->\r\n		\r\n		<!-- Start Main Menu -->\r\n<!-- 		<div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\" data-tablet-template=\"header_sidebar\"></div>\r\n		\r\n		<div class=\"header-scroll-right-icons\"> -->\r\n			<!-- Search -->\r\n<!-- 			<div class=\"header-menu-search\">\r\n				<button class=\"header-menu-search-link\" data-action=\"show-sitesearch\" title=\""
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Search",{"name":"translate","hash":{},"data":data}))
    + "\">\r\n					<i class=\"header-menu-search-icon\"></i>\r\n				</button>\r\n			</div>\r\n -->\r\n			<!-- Cart -->\r\n<!-- 			<div data-view=\"Header.MiniCart\"></div>\r\n		</div>\r\n\r\n	</div>\r\n</div> -->\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header'; return template;});