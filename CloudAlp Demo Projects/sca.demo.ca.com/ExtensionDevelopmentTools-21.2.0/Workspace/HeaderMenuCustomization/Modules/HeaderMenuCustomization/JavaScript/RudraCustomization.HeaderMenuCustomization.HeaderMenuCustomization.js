
define(
	'RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization'
,   [
		'RudraCustomization.HeaderMenuCustomization.HeaderMenuCustomization.View'
	,	'Header.Menu.View'
	,	'Configuration'
	]
,   function (
		HeaderMenuCustomizationView
	,	HeaderMenuView
	,	Configuration
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
		
			var obj = HeaderMenuView.prototype.events;
			obj['mouseenter [data-toggle="categories-submenu"]'] = "menuOpenSubmenu";
			obj['mouseleave [data-toggle="categories-submenu"]'] = "menuCloseSubmenu";
			obj['mouseenter .catagories-submenu-tag'] = "catagoriesSubMenu";
			HeaderMenuView.prototype.events = obj;

				_.extend(HeaderMenuView.prototype,{
					initialize:_.wrap(HeaderMenuView.prototype.initialize,function initialize(fn){
						fn.apply(this, _.toArray(arguments).slice(1));
						var some = _.map(Configuration.navigationData, (data) => {
							if (data["data-type"] === "commercecategory") {
							  return data;
							}
						  });
						  some = some.filter(function (element) {
							return element !== undefined;
						  });
						  var level2Data = some.map((data) => {
							if (data["categories"] !== []) {
							  return data["categories"];
							}
						  });
						  this.level2NavData = level2Data;
					}),
					catagoriesSubMenu: function(e){
						if(e.currentTarget.dataset.toggle === 'categories-submenu'){

						}else{
							$('.header-level-3-ul-tag-section .header-menu-level3').html('');

						}
					},
					menuOpenSubmenu: function (e) {
						jQuery(e.currentTarget).addClass("open-subcatagories");
					
						var Hashtag = $(e.currentTarget).find("a").data("hashtag");
						var self = this;
						this.level3NavData;
					
						this.level2NavData.filter((data) => {
						  data.map((value) => {
							if (value.data.hashtag === Hashtag) {
							  if (value.categories !== []) {
								self.level3NavData = value.categories;
								return value;
							  }
							}
						  });
						});
						var CustomTemplateRender=''
						this.level3NavData.map((x)=>{
							 CustomTemplateRender+=  `							
							<li>
								<a class="${x.class}" data-touchpoint="${x.data.touchpoint}" data-hashtag="${x.data.hashtag}">${x.text}</a>
							</li>`
							
							
						  var RenderedData= $(e.currentTarget).closest('.header-level-2-ul-tag-section').parent().find('.header-level-3-ul-tag-section .header-menu-level3');
						  RenderedData.addClass('submenu-catagories');
						  RenderedData.html(CustomTemplateRender);
						})
					  
																
					  },
					  menuCloseSubmenu: function (e) {
						jQuery(e.currentTarget).removeClass("open-subcatagories");
						var RenderedData= $(e.currentTarget).closest('.header-level-2-ul-tag-section').parent().find('.header-level-3-ul-tag-section .header-menu-level3');
						RenderedData.removeClass('submenu-catagories');
					  }

			})
			
		
		}
	};
});
