
define(
	'STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess'
	, [
		'STAXS.MyaccountCustomizations.HideMyaccountAndCertificatesOnlyAccess.View'
		, 'Profile.Model'
		, 'Header.Menu.MyAccount.View'
		, 'Header.Profile.View'
		, 'Header.View'
		, 'Header.Menu.View'
		, 'MyAccountMenu'
		, 'MenuTree.View'
		, 'Backbone.View'
		, 'Backbone'
		, 'Utils'
		, 'underscore'
		, 'Configuration'
	]
	, function (
		HideMyaccountAndCertificatesOnlyAccessView
		, ProfileModel
		, HeaderMenuMyAccountView
		, HeaderProfileView
		, HeaderView
		, HeaderMenuView
		, myaccount
		, MenuTreeView
		, BackboneView
		, Backbone
		, Utils
		, _
		, Configuration
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				var layout1 = container.getComponent('Layout');
				let profile = ProfileModel.getInstance();


				const myaccountmenu = container.getComponent("MyAccountMenu");
				myaccountmenu.addGroup({
					id: 'Certificates',
					name: Utils.translate('My certificates'),
					index: 10
				});

				myaccountmenu.addGroupEntry({
					id: "certificates",
					groupid: "Certificates",
					name: "Certificates",
					index: 1,
					url: "certificates"
				});

				myaccountmenu.addGroupEntry({
					id: "historical-certificates",
					groupid: "Certificates",
					name: "Certificates (Before 01/09/22)",
					index: 2,
					url: "historical-certificates"
				})


				if (layout) {
					layout.on('afterShowContent',function(){
						
						if(SC.ENVIRONMENT.SCTouchpoint === 'myaccount')
						{
							var urlHash = window.location.href.split('#')[1].replace('/',"").indexOf('?') != -1 ? window.location.href.split('#')[1].replace('/',"").split("?")[0] : window.location.href.split('#')[1].replace('/',"") ;
							console.log('11')
							_.each(myaccount.getInstance().getEntries(),function(val){
                               if(val.children.length)
							   {
								_.each(val.children,function(val2){

									if(urlHash == val2.url.replace('/',""))
									{
										//console.log('12')
										$('.menu-tree-node-item-anchor').removeClass('active');
										$('.menu-tree-node-submenu-wrapper').parent().removeClass('in');
										$('[data-type="menu-tree-node-expandable"]').removeClass('open');

									   $('.menu-tree-node-submenu-wrapper').find('.menu-tree-node-item-anchor').each(function(){
										   if($(this).data('id') == val2.id) {
											//console.log('13')
                                                // $('.menu-tree-node-submenu-wrapper').parent().removeClass('in');
											    $(this).addClass('active');
											    $('.menu-tree-node-item-anchor.active').parent().parent().parent().addClass('in');
												$(this).parent().parent().parent().css('height','unset');
												$(this).parent().parent().parent().parent().addClass('open');
												
										   }
									   })
									   
									}
								  })
							   }
							})

						}
					})
					layout.on('beforeShowContent', function () {
						var isCertificatesRoleAccessId = Configuration.get('HideMyaccountAndCertificatesOnlyAccess').config;
						var customerSalesRep = Configuration.get('HideMyaccountAndCertificatesOnlyAccess').salesRepCustomer;
						var staxsProductsOnly = 1217;
						const currentRole = container.currentRole;
						_.extend(HeaderView.prototype, {
							getContext: _.wrap(HeaderView.prototype.getContext, function getContext(fn) {
								var self = this;
								var context = fn.apply(this, _.toArray(arguments).slice(1));
								var show_hide = false;
								var hideMiniCart = true;
								if ((currentRole === 1087 && profile.get('internalid') != parseInt(customerSalesRep)) || (profile.get('internalid') != parseInt(customerSalesRep) && currentRole != parseInt(isCertificatesRoleAccessId))) {
									show_hide = true;
								}
								if (currentRole === staxsProductsOnly) {
									hideMiniCart = false;
								}
								context.Quickorder = show_hide;
								context.hideQuote = false;
								context.hideMiniCart = hideMiniCart;
								context.hideQuickorder = hideMiniCart;
								return context;
							})
						})


						_.extend(HeaderMenuView.prototype, {
							getContext: _.wrap(HeaderMenuView.prototype.getContext, function getContext(fn) {
								var self = this;
								var context = fn.apply(this, _.toArray(arguments).slice(1));
								var show_hide = false;
								var isCertificatesRoleAccessId = parseInt(Configuration.get('HideMyaccountAndCertificatesOnlyAccess').config);
								if (currentRole === 1087) {
									show_hide = true;
								}

								$(() => { // mobile view sidebar hiding contents 
									$('.header-sidebar-wrapper').find('#my-account').hide();
									$('.header-sidebar-wrapper').find('#certificates').hide();
									$('.header-sidebar-wrapper').find('#purchases').hide();
								})

								if (profile.get('internalid') == parseInt(customerSalesRep) || (staxsProductsOnly === currentRole) || currentRole === isCertificatesRoleAccessId) {
									var nav = Configuration.navigationData;

									var remove = [];
								
										if (currentRole === isCertificatesRoleAccessId){
										remove = ["purchases"];
										} else if(profile.get('internalid') == parseInt(customerSalesRep)){
										 remove = ["certificates","purchases","my-account"];
										}
										else{
										remove = ["certificates", "purchases"];
										}
										
									var showNavigation = [];
									_.each(nav, (menubar) => {
										if (remove.includes(menubar.id)) {
										} else {
											showNavigation.push(menubar)
										}
									});
									context.categories = showNavigation
								}
								context.Quickorder = show_hide;
								context.hideQuote = false;
								return context;
							})
						})



						if (profile.get('isLoggedIn') == 'T') {
							const customerInternalId = profile.get('internalid');
							const MenuItem = myaccount.getInstance().getEntries();
							const currentRole = container.currentRole;
							_.extend(HeaderMenuMyAccountView.prototype, {
								getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn) {
									var context = fn.apply(this, _.toArray(arguments).slice(1));
									var isCertificatesRoleAccessId = Configuration.get('HideMyaccountAndCertificatesOnlyAccess').config;
									// if contact  with viewcertificates show certificates and overview , settings > profile information
									// if salesrep  role show overview , settings > profile information
									if (currentRole === parseInt(isCertificatesRoleAccessId) || profile.get('internalid') == parseInt(customerSalesRep) || (staxsProductsOnly === currentRole)) {

										if (currentRole === parseInt(isCertificatesRoleAccessId)) {
											var showitem = ["Certificates", "settings", "home"];
											var childItem = "profileinformation";
										} else if (profile.get('internalid') == parseInt(customerSalesRep)) {
											var showitem = ["settings", "home"];
											var childItem = "profileinformation";
										}
										else if (staxsProductsOnly === currentRole) {
											var showitem = ["settings","home"];
											var childItem = ["resetpassword", "profileinformation"];
										}
										MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function (...args) {
											this.modifiedentries = this.backwardCompatibilitySanitize(
												myaccount.getInstance().getEntries()
											);
						
											var ShowMenu = [];
											if (staxsProductsOnly === currentRole) {
												var menuitemchildren = [];
												_.each(MenuItem, function (item) {
													if(item.id == "home")
													{
														ShowMenu.push(item)
													}
													if (item.id == "settings") {
														_.each(item.children, function (child) {
															if (childItem.includes(child.id)) {
																menuitemchildren.push(child)
															}
														});
														item.children = menuitemchildren;
														ShowMenu.push(item)
													}

												})
											} else {
												_.each(MenuItem, function (item) {
													if (showitem.includes(item.id)) {
														_.each(item.children, function (info) {
															if (info.id == childItem) {
																item.children = info
															}
														})

														ShowMenu.push(item)
													}
												})
											}

											this.fixedMenuItems = ShowMenu;
											BackboneView.prototype.render.apply(this, args);

										})
										var ShowMenu = [];
										if (staxsProductsOnly === currentRole) {
											var menuitemchildren = [];
											_.each(MenuItem, function (item) {
												if (item.id == "settings") {
													_.each(item.children, function (child) {
														if (childItem.includes(child.id)) {
															menuitemchildren.push(child)
														}
													});
													item.children = menuitemchildren;
													ShowMenu.push(item)
												}

											})

										} else {
											_.each(myaccount.getInstance().getEntries(), function (item) {

												if (showitem.includes(item.id)) {
													_.each(item.children, function (info) {
														if (info.id == childItem) {
															item.children = [info];
														}
													})
													ShowMenu.push(item)
												}
											})

										}

										context.hidemyaccount = true;

										context.entries = ShowMenu;

										if(profile.get('internalid') == parseInt(customerSalesRep)){
										    context.entries= [];
										 }
									}
									return context;
								})

							});

						}
					})

					// return new HideMyaccountAndCertificatesOnlyAccessView({ container: container });
				}
			}
		};
	});
