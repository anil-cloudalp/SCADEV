
define(
	'TCI.FooterExt.ExtraFooterLinks'
,   [
		'TCI.FooterExt.ExtraFooterLinks.View'
	,	'Header.MiniCart.View'	
	]
,   function (
		ExtraFooterLinksView
	,	HeaderMiniCartView	
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			HeaderMiniCartView.prototype.getContext = _.wrap(HeaderMiniCartView.prototype.getContext, function (fn) {
                var context = fn.apply(this, _.toArray(arguments).slice(1));
                context.itemsInCart = this.model.get('lines').length;
                return context;
            });
			
			if(layout)
			{
				// layout.addChildView('Header.Logo', function() { 
				// 	return new ExtraFooterLinksView({ container: container });
				// });
			}

		}
	};
});
