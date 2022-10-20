
define(
	'STAXS.Password.ResetAndUpdatePassword'
	, [
		'STAXS.Password.ResetAndUpdatePassword.View'
		, 'MyAccountMenu'
		, 'Header.Menu.MyAccount.View'
		, 'MenuTree.View'
		, 'Utils'
		, 'Backbone.View'
		, 'jQuery'
		, 'Footer.View'
		, 'Header.Logo.View'
	]
	, function (
		ResetAndUpdatePasswordView
		, myaccount
		, HeaderMenuMyAccountView
		, MenuTreeView
		, Utils
		, BackboneView
		, $
		, FooterView
		, HeaderLogoView
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
				const pageType = container.getComponent('PageType');
				const menu = myaccount.getInstance();
				const myaccountmenu = container.getComponent("MyAccountMenu");
				pageType.registerPageType({
					name: 'ResetPassword',
					routes: ['resetpassword'],
					view: ResetAndUpdatePasswordView,
					defaultTemplate: {
						name: 'staxs_password_resetandupdatepassword.tpl',
						displayName: 'resetpassword'
					}
				})
		
				menu.addSubEntry({
					entryId: 'settings',
					id: 'resetpassword',
					name: Utils.translate('Update Password'),
					url: 'resetpassword',
					index: 6
				});

				if (layout) {

					var isDisplay = false

					_.extend(HeaderLogoView.prototype, {
						getContext: _.wrap(HeaderLogoView.prototype.getContext, function getContext(fn) {
							var context = fn.apply(this, _.toArray(arguments).slice(1));
							isDisplay = true;

							$(() => {
								if (isDisplay) {
									$('.header-simplified-header').css('display', "none");
								}

							})
							context.isDisplay = isDisplay;

							return context;
						})
					})

					_.extend(FooterView.prototype, {
						getContext: _.wrap(FooterView.prototype.getContext, function getContext(fn) {
							var context = fn.apply(this, _.toArray(arguments).slice(1));
							isDisplay = true;

							context.isDisplay = isDisplay;

							return context;
						})
					})


					_.extend(HeaderMenuMyAccountView.prototype, {
						getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn) {
							var context = fn.apply(this, _.toArray(arguments).slice(1));
							MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function (...args) {
								this.modifiedentries = this.backwardCompatibilitySanitize(
									myaccount.getInstance().getEntries()
								);
								var removedsubentrie = ["updateyourpassword", "paymentmethods", "emailpreferences"];
								var menuitemchildren = [];
								var ShowMenu = [];
								for (let i in this.modifiedentries) {
									if (this.modifiedentries[i].id == "settings") {
										_.each(this.modifiedentries[i].children, function (child) {
											if (removedsubentrie.includes(child.id)) {
											} else {
												menuitemchildren.push(child)
											}
										})
										this.modifiedentries[i].children = menuitemchildren;
									}
									if (this.modifiedentries[i].id == "orders") {
										let hasQuote = "quotes"
										var children = [];
										this.modifiedentries[i].name = 'My Orders';
										_.each(this.modifiedentries[i].children, function (child) {
											if (hasQuote.includes(child.id)) {
											} else {
												children.push(child)
											}
										})
										this.modifiedentries[i].children = children;
									}

								}
								this.fixedMenuItems = this.modifiedentries
								BackboneView.prototype.render.apply(this, args);

							})
							var MenuItem = myaccount.getInstance().getEntries();
							var removedsubentrie = ["updateyourpassword", "paymentmethods", "emailpreferences"];
							var menuitemchildren = [];
							var ShowMenu = [];
							for (let i in MenuItem) {
								if (MenuItem[i].id == "settings") {
									_.each(MenuItem[i].children, function (child) {
										if (removedsubentrie.includes(child.id)) {
										} else {
											menuitemchildren.push(child)
										}
									})
									MenuItem[i].children = menuitemchildren;
								}
								if (MenuItem[i].id == "orders") {
									let hasQuote = "quotes"
									var children = [];
									MenuItem[i].name = 'My Orders';
									_.each(MenuItem[i].children, function (child) {
										if (hasQuote.includes(child.id)) {
										} else {
											children.push(child)
										}
									})
									MenuItem[i].children = children;
								}

							}

							context.entries = MenuItem;

							return context
						})

					})
				}

			}
		};
	});
