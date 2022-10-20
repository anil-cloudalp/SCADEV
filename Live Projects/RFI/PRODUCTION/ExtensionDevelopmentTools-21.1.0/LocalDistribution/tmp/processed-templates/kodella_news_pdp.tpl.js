define('kodella_news_pdp.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"article-container\">\r\n\r\n<div style=\"background-image: url("
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_item_background") : stack1), depth0))
    + ")\" class=\"container-article-title\">\r\n\r\n<h3 class=\"article-title\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"displayname") : stack1), depth0))
    + "</h3>\r\n\r\n</div>\r\n\r\n<div class=\"article-date\"><p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_new_date") : stack1), depth0))
    + "</p></div>\r\n<div class=\"container-content\">\r\n    <img class=\"text-wrap\" src=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"FirstImage") : depth0), depth0))
    + "\" />\r\n    <p class=\"article-paragraph\">"
    + ((stack1 = (compilerNameLookup(helpers,"decodeFullDescription") || (depth0 && compilerNameLookup(depth0,"decodeFullDescription")) || helpers.helperMissing).call(alias3,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_kd_new_content") : stack1),{"name":"decodeFullDescription","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p>\r\n    \r\n</div>\r\n\r\n<div class=\"addthis_default_style addthis_toolbox addthis_button_compact\"></div>\r\n<div class=\"addthis_inline_share_toolbox\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"relateditems_detail") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>   \r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "  ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\r\n    <div class=\"next-article-container\">\r\n            <h3 class=\"next-article-title\">Read the next article</h3>\r\n\r\n            <a class=\"tag-next-article\" href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"relateditems_detail") : stack1)) != null ? compilerNameLookup(stack1,"0") : stack1)) != null ? compilerNameLookup(stack1,"urlcomponent") : stack1), depth0))
    + "\" data-touchpoint=\"home\"> "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"relateditems_detail") : stack1)) != null ? compilerNameLookup(stack1,"0") : stack1)) != null ? compilerNameLookup(stack1,"displayname") : stack1), depth0))
    + " </a>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<script type=\"text/javascript\" src=\"//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5fbd49d4722aba53\"></script>\r\n<style>\r\n.text-wrap{\r\n\r\n    float: right;\r\n    margin: 20px;\r\n    width: 60%;\r\n    margin-top: 10px;\r\n    margin-right: 0px;\r\n}\r\n\r\n\r\n.article-paragraph{\r\n\r\n    text-align: justify;\r\n}\r\n\r\n\r\n.next-article-container{\r\n    border-top: 3px solid #91b5f7;\r\n    border-bottom: 3px solid #91b5f7;\r\n    padding: 35px 0px 35px 0px;\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.next-article-title{\r\n\r\n    text-transform: none;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    letter-spacing: 0px;\r\n}\r\n\r\n.tag-next-article{\r\n\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n}\r\n\r\n.article-title{\r\n\r\n    text-transform: none;\r\n    color: white;\r\n    letter-spacing: 0px;\r\n    padding: 35px;\r\n    font-size: 25px;\r\n}\r\n\r\n.container-article-title{\r\n\r\n    margin: 20px 0px 20px 0px;\r\n}\r\n\r\n.article-container .container-content{\r\n\r\n    display: table;\r\n    width: 100%;\r\n\r\n}\r\n\r\n\r\n@media(max-width: 768px){\r\n\r\n    .text-wrap{\r\n\r\n        width: 100%;\r\n    }\r\n\r\n    .article-title{\r\n\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n</style>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'kodella_news_pdp'; return template;});