
define(
	'Alp.RemoveAllItems.RemoveAllItems'
,   [
		'Alp.RemoveAllItems.RemoveAllItems.View'
	]
,   function (
		RemoveAllItemsView
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
			
			var Cart = container.getComponent('Cart')
			, Layout = container.getComponent('Layout')
			if (Cart && Layout)
      {
        Cart.addChildViews(Cart.CART_VIEW,
        {
          'Item.ListNavigable': 
          // Adding it to this child view means it will only show if there are >0 items in the cart
          {
            'RemoveAll':
            {
              childViewIndex:1
              // Renders the child view at the bottom of the page; set it to 1 to put it at the top
            , childViewConstructor: function ()
              {
                return new 	RemoveAllItemsView
                ({
                  Layout: Layout
                })
              }
            }
          }
        });
      
  };

		}
	};
});
