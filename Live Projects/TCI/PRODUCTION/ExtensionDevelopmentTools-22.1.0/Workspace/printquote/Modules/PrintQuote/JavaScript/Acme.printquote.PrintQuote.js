
define(
	'Acme.printquote.PrintQuote'
,   [
	'Acme.printquote.PrintQuote.View'
	, 'GlobalViews.Modal.View'
	, 'Header.MiniCart.View'
	]
,   function (
	PrintQuoteView
	, GlobalViewsModalView
	, HeaderMiniCartView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp(container)
		{
			/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				var pageType = container.getComponent("PageType");
				pageType.registerPageType({
					name: "quote-page",
					routes: ["printquote"],
					view: PrintQuoteView,
					defaultTemplate: {
						name: "acme_printquote_printquote_tpl",
						displayName: "printquote",
				    },
				});
		
		GlobalViewsModalView.prototype.getContext = _.wrap(GlobalViewsModalView.prototype.getContext, function (fn) {
			var context = fn.apply(this, _.toArray(arguments).slice(1));
			context.pageHeader = (this.options.childViewIstance.attributes) ? (this.options.childViewIstance.attributes.id == 'PrintQuote_model' ? this.options.childViewIstance.options.pageHeader || '' : this.options.pageHeader || '') : this.options.pageHeader || '';
			return context;
			});	
		HeaderMiniCartView.prototype.getContext = _.wrap(HeaderMiniCartView.prototype.getContext, function (fn) {
			var context = fn.apply(this, _.toArray(arguments).slice(1));
			context.itemsInCart = this.model.get('lines').length;
			return context;
			});
		}
	};
});
