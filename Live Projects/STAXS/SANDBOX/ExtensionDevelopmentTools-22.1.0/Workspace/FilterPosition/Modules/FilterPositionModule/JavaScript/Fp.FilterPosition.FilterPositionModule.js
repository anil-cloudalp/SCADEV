define(
	'Fp.FilterPosition.FilterPositionModule', [
		'Fp.FilterPosition.FilterPositionModule.View', 'Profile.Model', 'underscore', 'Facets.Browse.View', 'Categories', 'Categories.Model', 'Facets.Model', 'Utils', 'Facets.Helper', 'AjaxRequestsKiller', 'LiveOrder.Model', 'Home.View', 'SC.Configuration', 'Fp.FilterPosition.ProductsFilterModule.View', 'Facets.FacetedNavigationItemCategory.View', 'ProductDetails.Base.View'


	],
	function (
		FilterPositionModuleView, ProfileModel, _, FacetsBrowseView, Categories, CategoriesModel, FacetsModel, Utils, FacetsHelper, AjaxRequestsKiller, LiveOrderModel, HomeView, Configuration, ProductsFilterModuleView, FacetsFacetedNavigationItemCategoryView, ProductDetailsBaseView


	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				var self = this;
				/** @type {LayoutComponent} */

				var layout = container.getComponent('Layout');
				var plp = container.getComponent('PLP');

				HomeView.prototype.initialize = _.wrap(HomeView.prototype.initialize, function (fn) {
					fn.apply(this, _.toArray(arguments).slice(1));
					window.location.href = SC.SESSION.touchpoints.home + "/staxs-products";
				})

				var employee = false;

				var userprofilecomponent = container.getComponent("UserProfile");
				var customerSalesRep = Configuration.get('HideMyaccountAndCertificatesOnlyAccess').salesRepCustomer;

				userprofilecomponent.getUserProfile().done(function (data) {
					if (data.internalid == customerSalesRep) {
						return employee = false;
					} else {
						return employee = true;
					}

				});

				layout.on('afterShowContent', function (view) {
					if (!_.isUndefined($('.facets-facet-browse-items')) && $('.facets-facet-browse-items').html()) {
						$('.facets-facet-browse-results').removeClass('incrwidth');
					} else {

						$('.facets-facet-browse-results').addClass('incrwidth');

					}
					if (employee == true) {
						$('.navitems').addClass('salesrepfilter');
						$('.facets-facet-browse-results').addClass('incrwidth');

						//differentiating the desktop version of filters for sales rep and employees by adding new classes
						$('.facets-faceted-navigation-item-facet-group').addClass('group-employee');
						$('.facets-faceted-navigation-item-facet-group-wrapper').addClass('wrapper-employee');
						$('.facets-faceted-navigation-item-facet-group-content').addClass('content-employee');

						//to remove white space in the categories page and provide min-height 100px to the filters container
						const fullurl = Backbone.history.fragment;
						const url = fullurl.split('?')[0];

						if (Utils.correctURL(url) == '/staxs-products') {
							$('.facets-facet-browse-facets').removeClass('productflex')
						} else {
							$('.facets-facet-browse-facets').addClass('productflex')
						}

						$('.facets-faceted-navigation-item-category-facet-group-expander').css({
							'margin-right': '20px'
						});
						$('.facets-faceted-navigation-item-category').css({
							'margin-right': '15px'
						});

						//setting product filter position to absolute for employee
						// $('.facets-faceted-navigation-item-category').addClass('product-catagories-filters-container');

						//filter-margin 
						//  $('.facets-faceted-navigation-item-facet-group').first().addClass('filter-margin');

						//products filters options background
						//  $('.facets-faceted-navigation-item-category-facet-group').addClass('product-filters-options-bg');
						//clearall button position
						// $('.facets-faceted-navigation-facets-clear').removeClass('clearall')

					} else {
						$('.navitems').removeClass('salesrepfilter');
						$('.facets-faceted-navigation-item-category').css({
							'position': 'relative'
						});
						//hiding price label in for sales rep
						$('.product-details-price-label').css("display", "none")


						//adjusting clearall button (on selecting filters) for desktop version of salesrep
						//   $('.facets-faceted-navigation-facets-clear').addClass('clearall')
						// $('.facets-facet-browse-results').removeClass('incrwidth')
					}

				});

				var profile = ProfileModel.getInstance();

				var events = FacetsBrowseView.prototype.events;
				events['click [data-toggle="customdropdown"]'] = 'custdropdown',
					FacetsBrowseView.prototype.events = events;

				_.extend(FacetsBrowseView.prototype, {
					custdropdown: function (e) {
						if ($(e.currentTarget).siblings('.facets-faceted-navigation-item-facet-group-wrapper').hasClass('in')) {
							$('.facets-faceted-navigation-item-facet-group-wrapper').removeClass('in');
							$('.facets-faceted-navigation-item-facet-group-expander-icon').removeClass('down')
						} else {
							$('.facets-faceted-navigation-item-facet-group-wrapper').removeClass('in');
							$('.facets-faceted-navigation-item-facet-group-expander-icon').removeClass('down')
							$(e.currentTarget).siblings('.facets-faceted-navigation-item-facet-group-wrapper').addClass('in');
							$(e.currentTarget).find('.facets-faceted-navigation-item-facet-group-expander-icon').addClass('down')
						}

						$(e.currentTarget).siblings('.facets-faceted-navigation-item-facet-group-wrapper').attr('height', 'auto');

					},
					childViews: _.extend({}, FacetsBrowseView.prototype.childViews, {

						'Facets.CategorySidebar': function () {
							if (this.isCategoryPage) {

								if (this.translator.getCategoryUrl() == '/staxs-products') {
									return false;
								} else {
									return new FacetsFacetedNavigationItemCategoryView({
										model: this.model.get('category'),
										categoryUrl: this.translator.getCategoryUrl()

									});
								}

							} else {
								return new ProductsFilterModuleView({
									data: SC.CATEGORIES[0]
								});
							}
						}
					}),

					initialize: _.wrap(FacetsBrowseView.prototype.initialize, function initialize(fn) {
						fn.apply(this, _.toArray(arguments).slice(1));

						var self = this;
						this.statuses = statuses;
						this.collapsable_elements = collapsable_elements;
						this.translatorConfig = this.application.translatorConfig;

						const fullurl = Backbone.history.fragment;
						const url = fullurl.split('?')[0];

						this.categoriesTopLevelUrl = Categories.getTopLevelCategoriesUrlComponent();
						this.isCategoryPage = !!_.find(this.categoriesTopLevelUrl, function (categoryUrl) {
							categoryUrl = Utils.correctURL(categoryUrl);
							const caturl = Utils.correctURL(url);

							return caturl.indexOf(categoryUrl) === 0;
						});

						this.model = new FacetsModel();
						this.translator = FacetsHelper.parseUrl(
							fullurl,
							this.translatorConfig,
							this.isCategoryPage
						);
						this.router = this.constructor.router;

						this.setOptionsTranslator();
						this.addingattributesatpapi = {};

						if (self.application.currentRole === 1087) {
							var itemfieldsoptionss = self.application.items;
							if (itemfieldsoptionss.length > 0) {
								self.totalitem = itemfieldsoptionss.length;
								self.model.total = itemfieldsoptionss.length;
								var page = self.translator.options.page ? self.translator.options.page : 1;
								var resPerPage = self.translator.options.show ? self.translator.options.show : 24;
								var chunkedArray = _.chunk(itemfieldsoptionss, parseInt(resPerPage));
								var finalArray = chunkedArray[page - 1];
								self.addingattributesatpapi["id"] = finalArray.toString();
								//addingattributesatpapi["id"] =  itemfieldsoptionss.toString();
							}
						}

						this.model.options = {
							data: self.isCategoryPage == false && !_.isEmpty(self.addingattributesatpapi) && _.isUndefined(self.translator.getApiParams().q) ? self.addingattributesatpapi : this.translator.getApiParams(), //|| this.translator.getApiParams(),
							killerId: AjaxRequestsKiller.getKillerId(),
							pageGeneratorPreload: true
						};

						if (this.isCategoryPage) {
							const categoryModel = new CategoriesModel({
								data: {
									fullurl: this.translator.getCategoryUrl()
								},
								killerId: AjaxRequestsKiller.getKillerId()
							});

							this.model.set('category', categoryModel);
						}

						const {
							itemsDisplayOptions,
							resultsPerPage,
							sortOptions
						} = this.application.getConfig();
						this.itemsDisplayOptions = Utils.deepCopy(itemsDisplayOptions);
						this.resultsPerPage = Utils.deepCopy(resultsPerPage);
						this.sortOptions = Utils.deepCopy(sortOptions);

						_.each(this.resultsPerPage, function (perPage) {
							perPage.id = String(perPage.items);
						});

						this.cart = LiveOrderModel.getInstance();

						this.collapsable_elements['facet-header'] = this.collapsable_elements['facet-header'] || {
							selector: 'this.collapsable_elements["facet-header"]',
							collapsed: false
						};
						// for displaying selected filters count
						this.options.application.getLayout().once('afterAppendView', (view) => {
							//to hide price in plp / whenever face-item-cells are displayed
								if( view.$el.attr('id') == 'facet-browse'){
									$('.hide-price-in-plp').css('display','none')
								}
								$('.facets-faceted-navigation-item-facet-group').each(function () {
									var filtercount = 0;
									var self = this;
									$(this).find('.facets-faceted-navigation-item-facet-multi').each(function (x) {
										if ($(this).prop('checked') == true) {
											filtercount = filtercount + 1;
											$(self).find('.filternumber').text(filtercount).css({
												'background-color': 'black',
												'color': 'white',
												'padding': '3px 5px'
											})
										}
									})
								})
								//==================Breadcrumbs
								var currentcategory;
								if ($('.filtercheckbox:checked').length > 0) {

									if ($('.filtercheckbox:checked').length == 1) {
										currentcategory = $('.filtercheckbox:checked').val()
										

									} else
									if ($('.filtercheckbox:checked').length > 1) {

										if (!_.isUndefined(plp.current_view.model.get('category'))) {
											currentcategory = plp.current_view.model.get('category').get('name');
										
										} else {
											currentcategory = "search";
											
										}
									}
								} else {
									if (!_.isUndefined(plp.current_view.model.get('category'))) {
										var currentcategory = plp.current_view.model.get('category').get('name');
										
									} else {
										var currentcategory = "search";
										
									}
								}
								sessionStorage.setItem('facetcategory', currentcategory)
								var excludedcategories = this.options.application.checkedCatagories;
                                    excludedcategories.find(function(excluded){
                                        //hiding the items if the selected category is not available for the current customer
                                        if(currentcategory == excluded.not_required_categories_name){
                                            $('.facets-facet-browse-items').html(`<div style="text-align:center;font-weight:bold"><h2 style="font-weight:bold">This category is not available for this customer</h2></div>`)
											$('.facets-facet-browse-title').html('')
                                            }
                                    })
							},
							this
						);

					}),
					getContext: _.wrap(FacetsBrowseView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));
						//window click to close the filters dropdown on clicking anywhere on the page
						$(window).click(function (e) {
							if (e.target.parentElement.className != "facets-faceted-navigation-item-facet-group-expander") {
								$('.facets-faceted-navigation-item-facet-group-wrapper').removeClass('in');
								$('.facets-faceted-navigation-item-facet-group-expander-icon').removeClass('down')
							}

							if (e.target.parentElement.className != "facets-faceted-navigation-item-category-facet-group-expander") {
								// $('.facets-faceted-navigation-item-category-facet-group-wrapper').removeClass('in');

								$('.facets-faceted-navigation-item-category-facet-group-expander-icon').addClass('productfiltericon')
							} else {
								$('.facets-faceted-navigation-item-category-facet-group-expander-icon').removeClass('productfiltericon')
							}

							if (e.target.parentElement.className != "facets-faceted-navigation-item-category-optionlist-extra-button") {
								$('.facets-faceted-navigation-item-category-facet-group-wrapper').removeClass('in');

								// $('.facets-faceted-navigation-item-category-facet-group-expander-icon').addClass('productfiltericon')
								// $('.facets-faceted-navigation-item-category-facet-group-expander-icon').css({'transform':'rotate(0deg)'})
							} else {
								$('.facets-faceted-navigation-item-category-facet-group-expander-icon').removeClass('productfiltericon')
								$('.facets-faceted-navigation-item-category-facet-group-wrapper').addClass('in');
							}
						})


						ret.employee = employee;
						return ret
					})
				})


				//	=================PDP BreadCrumbs
				ProductDetailsBaseView.prototype.getBreadcrumbPages = function getBreadcrumbPages() {

					var itemcategories = this.model.attributes.item
					var breadcrumb = [];

					var categories = itemcategories.get('commercecategory').categories.find(function (a) {
						return a.name == sessionStorage.getItem('facetcategory')
					})

					if (_.isUndefined(categories)) {
						if (itemcategories.get('commercecategory').primarypath.length > 0) {
							return this.model.get('item').get('_breadcrumb');
						} else
						if (itemcategories.get('commercecategory').categories.length > 0) {
							breadcrumb.push({
								href: SC.CATEGORIES[0].fullurl,
								text: SC.CATEGORIES[0].name
							});

							breadcrumb.push({
								href: itemcategories.get('commercecategory').categories[0].urls[0],
								text: itemcategories.get('commercecategory').categories[0].name
							});

							breadcrumb.push({
								href: this.model.get('item').get('urlcomponent'),
								text: this.model.get('item').get('displayname')
							});
							return breadcrumb;

						} else {
							breadcrumb.push({
								href: "search",
								text: "search"
							});

							breadcrumb.push({
								href: this.model.get('item').get('urlcomponent'),
								text: this.model.get('item').get('storedisplayname2')
							});
							return breadcrumb;
						}

					} else
					// if(itemcategories.get('commercecategory').primarypath.length<=0 && itemcategories.get('commercecategory').categories.length > 0)
					{
						//main category ex : product
						breadcrumb.push({
							href: SC.CATEGORIES[0].fullurl,
							text: SC.CATEGORIES[0].name
						});

						//sub category ex : dotch
						if (!_.isUndefined(categories)) {
							breadcrumb.push({
								href: categories.urls[0],
								text: categories.name
							});
						}

						//Item name
						breadcrumb.push({
							href: this.model.get('item').get('urlcomponent'),
							text: this.model.get('item').get('displayname')
						});
						return breadcrumb;
					}

				}
			}
		};
	});