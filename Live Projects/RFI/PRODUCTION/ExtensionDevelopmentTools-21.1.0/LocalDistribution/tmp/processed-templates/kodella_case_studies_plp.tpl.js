define('kodella_case_studies_plp.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  \r\n    <div class=\"row item\">\r\n      <div class=\"col-md-6 col-xs-12 side-img\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"custitem_kd_case_thumb_img") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"col-md-6 col-xs-12 description\">\r\n        <h2 class=\"title\">\r\n          "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"custitem_kd_case_study_header_txt") || (depth0 != null ? compilerNameLookup(depth0,"custitem_kd_case_study_header_txt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"custitem_kd_case_study_header_txt","hash":{},"data":data}) : helper)))
    + "\r\n        </h2>\r\n        <h5 class=\"subtitle\">\r\n          "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"custitem_kd_case_study_tags") || (depth0 != null ? compilerNameLookup(depth0,"custitem_kd_case_study_tags") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"custitem_kd_case_study_tags","hash":{},"data":data}) : helper)))
    + "\r\n        </h5>\r\n        <h5 class=\"subtitle-2\">/ "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"custitem_kd_case_study_datenew") || (depth0 != null ? compilerNameLookup(depth0,"custitem_kd_case_study_datenew") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"custitem_kd_case_study_datenew","hash":{},"data":data}) : helper)))
    + "</h5>\r\n        <p class=\"text\">\r\n          "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"custitem_kd_case_study_intro") || (depth0 != null ? compilerNameLookup(depth0,"custitem_kd_case_study_intro") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"custitem_kd_case_study_intro","hash":{},"data":data}) : helper)))
    + "\r\n        </p>\r\n        <a class=\"anchor-arrow\" href="
    + alias4(((helper = (helper = compilerNameLookup(helpers,"urlcomponent") || (depth0 != null ? compilerNameLookup(depth0,"urlcomponent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlcomponent","hash":{},"data":data}) : helper)))
    + "> → </a>\r\n        <div class=\"row social-media-row\">\r\n          <a href="
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facebookurl") || (depth0 != null ? compilerNameLookup(depth0,"facebookurl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facebookurl","hash":{},"data":data}) : helper)))
    + " target=\"_blank\">\r\n            <img src=\"/site/Landing-Pages/case-studies/facebook-icon.png\" alt=\"\" class=\"social-media\" />\r\n          </a>\r\n          <a href="
    + alias4(((helper = (helper = compilerNameLookup(helpers,"twitterurl") || (depth0 != null ? compilerNameLookup(depth0,"twitterurl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"twitterurl","hash":{},"data":data}) : helper)))
    + " target=\"_blank\">\r\n            <img src=\"/site/Landing-Pages/case-studies/twitter-icon.png\" alt=\"\" class=\"social-media\" />\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <img src="
    + alias4(((helper = (helper = compilerNameLookup(helpers,"custitem_kd_case_thumb_img") || (depth0 != null ? compilerNameLookup(depth0,"custitem_kd_case_thumb_img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"custitem_kd_case_thumb_img","hash":{},"data":data}) : helper)))
    + " alt=\"\">\r\n        <a class=\"side-img-overlay\" href="
    + alias4(((helper = (helper = compilerNameLookup(helpers,"urlcomponent") || (depth0 != null ? compilerNameLookup(depth0,"urlcomponent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlcomponent","hash":{},"data":data}) : helper)))
    + "> </a>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <img src="
    + alias4(((helper = (helper = compilerNameLookup(helpers,"custitem_kd_case_study_header_img") || (depth0 != null ? compilerNameLookup(depth0,"custitem_kd_case_study_header_img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"custitem_kd_case_study_header_img","hash":{},"data":data}) : helper)))
    + " alt=\"\">\r\n        <a class=\"side-img-overlay\" href="
    + alias4(((helper = (helper = compilerNameLookup(helpers,"urlcomponent") || (depth0 != null ? compilerNameLookup(depth0,"urlcomponent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlcomponent","hash":{},"data":data}) : helper)))
    + "> </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<style>\r\n  #case-studies {\r\n    font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\r\n    /*font-family: \"Raleway\", sans-serif;*/\r\n  }\r\n\r\n  #case-studies .row {\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n  }\r\n\r\n  #case-studies div.col-md-6 {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  #main-banner .main-img {\r\n    position: relative;\r\n    height: 450px;\r\n  }\r\n\r\n  #main-banner .title-container {\r\n    background-color: rgb(0, 45, 114, 50%);\r\n    width: 100%;\r\n    padding: 2em 2em 0.5em 5em;\r\n    position: absolute;\r\n    bottom: 0px;\r\n  }\r\n\r\n  #main-banner .title {\r\n    color: white;\r\n    font-weight: bolder;\r\n    font-size: 40px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  #case-studies .side-img {\r\n    border: 0em;\r\n    max-width: 100%;\r\n    position: relative;\r\n    padding: 0px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  #case-studies h2.title {\r\n    color: black;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    text-transform: none;\r\n    margin-top: 12px;\r\n  }\r\n\r\n  #case-studies p.text {\r\n    font-size: 14px;\r\n    color: black;\r\n    line-height: 21px;\r\n  }\r\n\r\n  #case-studies ul.content-list {\r\n    font-size: 14px;\r\n    color: black;\r\n    line-height: 21px;\r\n    padding-inline-start: 15px;\r\n  }\r\n\r\n  #case-studies h5.subtitle {\r\n    color: #002d72;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n  }\r\n\r\n  #case-studies h5.subtitle-2 {\r\n    color: #002d72;\r\n    font-size: 14px;\r\n    text-transform: none;\r\n    font-weight: 500;\r\n  }\r\n\r\n  #case-studies a.anchor-arrow {\r\n    font-family: Gotham, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 46px !important;\r\n    text-decoration: none !important;\r\n    padding-bottom: 10px !important;\r\n    margin-left: -2px !important;\r\n    opacity: 1;\r\n    transition: opacity 0.2s;\r\n    color: black;\r\n    position: relative;\r\n    top: -25px;\r\n  }\r\n\r\n  #case-studies a.anchor-arrow:hover {\r\n    opacity: 0.7;\r\n  }\r\n\r\n  #case-studies img.social-media {\r\n    height: 24px;\r\n    width: auto;\r\n    padding: 0px 3px;\r\n  }\r\n\r\n  #case-studies div.social-media-row {\r\n    display: flex;\r\n    margin-top: -19px;\r\n    margin-left: -5px;\r\n  }\r\n\r\n  @media (max-width: 1200px) {}\r\n\r\n  @media (max-width: 991px) {}\r\n\r\n  @media (max-width: 768px) {\r\n\r\n    #main-banner .main-img{\r\n    position: relative;\r\n    height: 270px;\r\n    background-position: cover;\r\n    width: 100%;\r\n    background-size: 100%;\r\n    background-repeat-y: no-repeat!important;\r\n    }\r\n    \r\n  }\r\n\r\n  @media(max-width: 660px){\r\n    #main-banner .main-img{\r\n    position: relative;\r\n    height: 209px;\r\n    background-position: cover;\r\n    width: 100%;\r\n    background-size: 100%;\r\n    background-repeat-y: no-repeat!important;\r\n    }\r\n  }\r\n\r\n  @media(max-width: 420px){\r\n    #main-banner .main-img{\r\n    height: 130px;\r\n    }\r\n  }\r\n\r\n  \r\n  @media(max-width: 320px){\r\n    #main-banner .main-img{\r\n    height: 100px;\r\n    }\r\n  }\r\n\r\n  /******/\r\n\r\n  #main-banner .main-img {\r\n    background-image: url(\"/site/Case Studies/plp-images/case-study-banner.jpg\");\r\n  }\r\n\r\n  #main-content .row:nth-child(odd) .side-img-overlay {\r\n    background-image: url(\"/site/Case Studies/plp-images/read-more-left.jpg\") !important;\r\n    background-size: cover;\r\n  }\r\n\r\n  #main-content .row:nth-child(even) .side-img-overlay {\r\n    background-image: url(\"/site/Case Studies/plp-images/read-more-right.jpg\") !important;\r\n    background-size: cover;\r\n  }\r\n\r\n  .facets-facet-browse-narrowedby,\r\n  .facets-facet-browse-header,\r\n  .facets-facet-browse-category,\r\n  .facets-facet-browse-facets {\r\n    display: none;\r\n  }\r\n\r\n  .facets-facet-browse-results {\r\n    width: 100%;\r\n  }\r\n\r\n  #main-banner {\r\n    margin-bottom: 15px;\r\n  }\r\n</style>\r\n\r\n<div id=\"case-studies\">\r\n  <div id=\"main-banner\">\r\n    <div class=\"main-img\">\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"main-content\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"collection") : depth0)) != null ? compilerNameLookup(stack1,"models") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  </div> \r\n</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'kodella_case_studies_plp'; return template;});