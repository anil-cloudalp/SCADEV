define('footer.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h4>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaTitle") : stack1), depth0))
    + "</h4>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"footer-social\">\n		        <div class=\"footer-content-social\">\n		            <ul class=\"footer-content-social-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":14},"end":{"line":17,"column":23}}})) != null ? stack1 : "")
    + "		            </ul>\n		        </div>\n			</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "		                <li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":16,"column":25},"end":{"line":16,"column":52}}}))
    + " title="
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":16,"column":59},"end":{"line":16,"column":67}}}) : helper)))
    + " data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":16,"column":82},"end":{"line":16,"column":97}}}) : helper)))
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":16,"column":116},"end":{"line":16,"column":134}}}) : helper)))
    + "\" data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":16,"column":149},"end":{"line":16,"column":163}}}) : helper)))
    + "\" target=\"_blank\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":16,"column":181},"end":{"line":16,"column":272}}})) != null ? stack1 : "")
    + "</a></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"footer-content-social-icon icon-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"icon") || (depth0 != null ? compilerNameLookup(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":16,"column":235},"end":{"line":16,"column":243}}}) : helper)))
    + "\"></i>";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":16,"column":257},"end":{"line":16,"column":265}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showFooterNavigationLinks") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":3},"end":{"line":36,"column":10}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"footer-links\">\n				<div class=\"footer-content-links\">\n					<ul class=\"footer-content-links-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"footerNavigationLinks") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "					</ul>\n				</div>\n			</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "							<li>\n								<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":28,"column":11},"end":{"line":28,"column":38}}}))
    + ">\n									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":29,"column":9},"end":{"line":29,"column":17}}}) : helper)))
    + "\n								</a>\n							</li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"newsletterText") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":4},"end":{"line":41,"column":90}}})) != null ? stack1 : "")
    + "\n				<div data-view=\"FooterContent\"></div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"newsletterText") : stack1), depth0))
    + "</p>";
},"16":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"newsletter-cct-area\" data-cms-area=\"newsletter-cct-area\" data-cms-area-filters=\"global\"></div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	            <ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col1Links") : stack1),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":13},"end":{"line":60,"column":22}}})) != null ? stack1 : "")
    + "	            </ul>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"href") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":55,"column":13},"end":{"line":59,"column":20}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "	                <li class=\"footer-column-link-listitem\"><a class=\"footer-column-link\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":56,"column":87},"end":{"line":56,"column":114}}}))
    + " data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":56,"column":129},"end":{"line":56,"column":144}}}) : helper)))
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":56,"column":163},"end":{"line":56,"column":181}}}) : helper)))
    + "\" data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":56,"column":196},"end":{"line":56,"column":210}}}) : helper)))
    + "\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":56,"column":212},"end":{"line":56,"column":220}}}) : helper)))
    + "</a></li>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	                <li class=\"footer-column-heading-listitem\"><h4 class=\"footer-column-heading\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":58,"column":94},"end":{"line":58,"column":102}}}) : helper)))
    + "</h4></li>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	            <ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col2Links") : stack1),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":13},"end":{"line":72,"column":22}}})) != null ? stack1 : "")
    + "	            </ul>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	            <ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col3Links") : stack1),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":13},"end":{"line":84,"column":22}}})) != null ? stack1 : "")
    + "	            </ul>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	            <ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col4Links") : stack1),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":13},"end":{"line":96,"column":22}}})) != null ? stack1 : "")
    + "	            </ul>\n";
},"30":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hide") : depth0),{"name":"unless","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":105,"column":4},"end":{"line":118,"column":15}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <section class=\"footer-content-copyright-wrapper\">\n        <div class=\"footer-content-copyright\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRange") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.program(34, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":108,"column":12},"end":{"line":113,"column":19}}})) != null ? stack1 : "")
    + "            <span class=\"footer-extra-info\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"extraFooterView") : depths[1])) != null ? compilerNameLookup(stack1,"text") : stack1),{"name":"if","hash":{},"fn":container.program(36, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":44},"end":{"line":114,"column":111}}})) != null ? stack1 : "")
    + "</span>\n        </div>\n		<div class=\"footer-content-extralinks\" data-view=\"Footer.Extra.Links\"></div>\n    </section>\n";
},"32":function(container,depth0,helpers,partials,data) {
    return "                "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) &#8211; $(1) $(2)",(depth0 != null ? compilerNameLookup(depth0,"initialYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":109,"column":16},"end":{"line":109,"column":97}}}))
    + "\n                <!-- an en dash &#8211; is used to indicate a range of values -->\n";
},"34":function(container,depth0,helpers,partials,data) {
    return "                "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) $(1)",(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":112,"column":16},"end":{"line":112,"column":72}}}))
    + "\n";
},"36":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"extraFooterView") : depths[1])) != null ? compilerNameLookup(stack1,"text") : stack1), depth0)) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div data-view=\"Global.BackToTop\"></div>\n<div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"global_banner_footer\" data-cms-area-filters=\"global\"></div>\n\n<section class=\"footer-wrapper\">\n	<div class=\"footer-content-wrapper\">\n\n		<div class=\"footer-social-news\">\n			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaTitle") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":3},"end":{"line":10,"column":95}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":11,"column":3},"end":{"line":37,"column":10}}})) != null ? stack1 : "")
    + "\n			<div class=\"footer-content-newsletter\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"showLegacyNewsletter") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.program(16, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":40,"column":3},"end":{"line":45,"column":10}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n\n		<div class=\"footer-content\">\n\n			<div class=\"footer-content-nav\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col1Links") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":4},"end":{"line":62,"column":20}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col2Links") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":13},"end":{"line":74,"column":20}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col3Links") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":13},"end":{"line":86,"column":20}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col4Links") : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":13},"end":{"line":98,"column":20}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n</section>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"with").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"copyright") : stack1),{"name":"with","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":0},"end":{"line":119,"column":9}}})) != null ? stack1 : "")
    + "\n\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'footer'; return template;});