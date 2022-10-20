define('product_reviews_review.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "				- <i class=\"product-reviews-review-icon-ok-sign\" data-toggle=\"tooltip\" data-placement=\"right\" title=\""
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"verified purchaser",{"name":"translate","hash":{},"data":data}))
    + "\"></i>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"product-reviews-review-rating-per-attribute\">\r\n					<div data-view=\"Global.StarRatingAttribute\"></div>\r\n				</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "		<div class=\"product-reviews-review-comment-footer\">\r\n			<p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Was this review helpful?",{"name":"translate","hash":{},"data":data}))
    + "</p>\r\n\r\n			<button class=\"product-reviews-review-comment-footer-button "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"usefulButtonClass") || (depth0 != null ? compilerNameLookup(depth0,"usefulButtonClass") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"usefulButtonClass","hash":{},"data":data}) : helper)))
    + "\" type=\"button\" data-action=\"vote\" data-type=\"mark-as-useful\" data-review-id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"reviewId","hash":{},"data":data}) : helper)))
    + "\">\r\n				<!-- <i class=\"product-reviews-review-comment-footer-button-icon-like\"></i>\r\n\r\n				<span>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"usefulCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</span>\r\n				-->\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"usefulCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "			</button>\r\n\r\n			<button class=\"product-reviews-review-comment-footer-button "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"notUsefulButtonClass") || (depth0 != null ? compilerNameLookup(depth0,"notUsefulButtonClass") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"notUsefulButtonClass","hash":{},"data":data}) : helper)))
    + "\" type=\"button\" data-action=\"vote\" data-type=\"mark-as-not-useful\" data-review-id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"reviewId","hash":{},"data":data}) : helper)))
    + "\">\r\n				<!-- <i class=\"product-reviews-review-comment-footer-button-icon-unlike\"></i>\r\n\r\n				<span>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"notusefulCountGreater") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</span> -->\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"notusefulCountGreater") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "			</button>\r\n		</div>\r\n	</div>\r\n\r\n	<div data-type=\"alert-placeholder\"></div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {})," ($(0))",(depth0 != null ? compilerNameLookup(depth0,"usefulCount") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Yes ($(0))",(depth0 != null ? compilerNameLookup(depth0,"usefulCount") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Yes",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {})," ($(0))",(depth0 != null ? compilerNameLookup(depth0,"notUsefulCount") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No ($(0))",(depth0 != null ? compilerNameLookup(depth0,"notUsefulCount") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"product-reviews-review\" itemprop=\"review\" itemscope itemtype=\"https://schema.org/Review\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewId","hash":{},"data":data}) : helper)))
    + "\">\r\n	\r\n	<div class=\"product-reviews-review-left\">\r\n		<div class=\"product-reviews-review-comment-item-cell\">\r\n			<div data-view=\"ProductReview.Review.Global.StarRating\" itemprop=\"reviewRating\" itemscope itemtype=\"https://schema.org/Rating\"></div>\r\n			<span class=\"product-reviews-review-comment-item-cell-date\" itemprop=\"datePublished\">\r\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"reviewCreatedOn") || (depth0 != null ? compilerNameLookup(depth0,"reviewCreatedOn") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewCreatedOn","hash":{},"data":data}) : helper)))
    + "\r\n			</span>\r\n		</div>\r\n		<h4 class=\"product-reviews-review-title\" itemprop=\"name\">\r\n			"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"reviewTitle") || (depth0 != null ? compilerNameLookup(depth0,"reviewTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewTitle","hash":{},"data":data}) : helper)))
    + "\r\n		</h4>\r\n		<p class=\"product-reviews-review-comment-username\">\r\n			"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"by <span itemprop=\"author\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"reviewAuthor") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReviewVerified") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</p>\r\n	</div>\r\n\r\n	<div class=\"product-reviews-review-right\">\r\n		<div class=\"product-reviews-review-review\">\r\n			<p class=\"product-reviews-review-review-description\" itemprop=\"description\">\r\n				"
    + alias4((compilerNameLookup(helpers,"breaklines") || (depth0 && compilerNameLookup(depth0,"breaklines")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"reviewText") : depth0),{"name":"breaklines","hash":{},"data":data}))
    + "\r\n			</p>\r\n			<div class=\"product-reviews-review-review-rating\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReviewRatingPerAttributesLegthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showActionButtons") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_reviews_review'; return template;});