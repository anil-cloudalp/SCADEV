define(
	'STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule', [
		'STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.View',
		'Facets.Browse.View',
		'Cart.AddToCart.Button.View',
		'Profile.Model',
		'ProductViews.Price.View',
		'STAXS.RestrictOrderAndPrice.RestrictOrderAndPriceModule.Model',
		'Utils',
		'underscore',
	],
	function (
		RestrictOrderAndPriceModuleView,
		FacetsBrowseView,
		CartAddToCartButtonView,
		ProfileModel,
		ProductViewsPriceView,
		RestrictOrderAndPriceModuleModel,
		Utils,
		_
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
				var cart = container.getComponent("Cart");
				var self = this;
				this.application = container;
				var url = Utils.getAbsoluteUrl(
					getExtensionAssetsPath(
						"services/RestrictOrderAndPriceModule.Service.ss"
					)
				)
				var promise = $.get(url);

				promise.then(function (res) {



					if (_.has(res, 'role')) {
						container.currentRole = res.role;
						container.items = res.itemIds;
					}
				})
				this.application.waitForPromise(promise);

				let profile = ProfileModel.getInstance();

				layout.on('afterShowContent', function () {

					if (self.application.currentRole !== 1087 || profile.get('internalid') == 858) {

						$('[data-hashtag="#search"]').parent().html('');
					}
				})


				_.extend(CartAddToCartButtonView.prototype, {
						getContext: _.wrap(CartAddToCartButtonView.prototype.getContext, function getContext(fn) {
							var self = this;
							var ret = fn.apply(this, _.toArray(arguments).slice(1));
							var showButton = true;

							if (container.currentRole == "1088" || container.currentRole == "1089" || container.currentRole == "1217") {
								showButton = false;
							}

							//hiding the addtocart button to items with no price
							var hideAddToCartButton = true;
							_.find(container.items, function (item) {
								if (!_.isUndefined(self.model.get('item'))) {
									return item == self.model.get('item').get('internalid') ? hideAddToCartButton = true : hideAddToCartButton = false;
								}
							})

							ret.hideAddToCartButton = hideAddToCartButton;

							ret.showButton = showButton;
							return ret;
						})
					}),

					_.extend(ProductViewsPriceView.prototype, {
						getContext: _.wrap(ProductViewsPriceView.prototype.getContext, function getContext(fn) {
							var self = this;
							var ret = fn.apply(this, _.toArray(arguments).slice(1));
							var showButton = true;

							if (container.currentRole == "1088" || container.currentRole == "1089" || container.currentRole == "1217") {
								showButton = false;
							}

							ret.showButton = showButton;

							//showing the price only for the customer items
							var showPrice = true;
							_.find(container.items, function (item) {
								if (!_.isUndefined(self.model.get('item'))) {

									return item == self.model.get('item').get('internalid') ? showPrice = true : showPrice = false;
								}
							})

							ret.showPrice = showPrice;

							return ret;
						})
					}),


					FacetsBrowseView.prototype.beforeShowContent = _.wrap(FacetsBrowseView.prototype.beforeShowContent, function beforeShowContent(fn) {
						fn.apply(this, _.toArray(arguments).slice(1));
						const promise = jQuery.Deferred();
						

						// if prices aren't to be shown we take out price related facet
						// and clean up the url
						if (ProfileModel.getInstance().hidePrices()) {
							this.translator = this.translator.cloneWithoutFacetId('onlinecustomerprice');
						}
						//_.extend(addingattributesatpapi,self.translator.getApiParams())

						const self = this;

						var obj = {};
						if (!_.isEmpty(self.addingattributesatpapi)) {
							obj.id = self.addingattributesatpapi.id.split(',');
							obj = _.extend(obj, self.translator.getApiParams());

						}

						var hasFilters = false;
						if (_.isUndefined(self.translator.getApiParams().q)) {
							if (!_.isEmpty(obj)) {
								const propertyNames = Object.keys(obj);

								_.each(propertyNames, function (key) {
									if (key.indexOf('custitem_') != -1) {
										hasFilters = true;
									}
								})
							}
						}


						if (!self.isCategoryPage && hasFilters) {

							var newModel = new RestrictOrderAndPriceModuleModel();


							for (var key in obj) {

								if (key.indexOf('custitem_') != -1) {

									var filteredFacet = _.findWhere(self.model.get('facets'), {
										id: key
									});
									
									var newValArry = [];
									if (!_.isUndefined(filteredFacet) && filteredFacet.values.length) {				
										_.each(filteredFacet.values, function (val) {
											if (obj[key].indexOf(',') !== -1) {
												_.each(obj[key].split(','), function (valArr) {
													if (valArr == val.url) {		
														newValArry.push(val.label);
													}
												})

											} else {
												if (val.url == obj[key]) {
													obj[key] = val.label;
												}
											}

										})
									}
								
									if (obj[key].indexOf(',') !== -1 && newValArry.length) {
										obj[key] = newValArry.join('_');
									}
								}
							}


							obj.listid = SC.CONFIGURATION.filtersid.filtersIdValues;
							var promise1 = newModel.save({
								data: obj
							}).then(function (res) {
								if (_.has(res, 'itemIDArr') && res['itemIDArr'].length); {
									self.model.options.data.id = res.itemIDArr.toString();

									const models = [self.model];
									const categoryModel = self.model.get('category');

									if (categoryModel) {
										models.push(categoryModel);
									}

									jQuery.when
										.apply(null, _.invoke(models, 'fetch', {}))

										.then(function (facetResponse, categoryResponse) {

											container.allitems = facetResponse.items;


											// facetResponse.items[12].ispricevisible = false;
											// facetResponse.items[12].ispricevisible_detail.bycurrentuserloginstatus = false;
											// facetResponse.items[12].ispricevisible_detail.inpersonalizedcatalog = false;


											if (categoryModel) {
												if (categoryResponse[0].errors) {
													self.application.getLayout().notFound();
													promise.reject();
													return promise;
												}

												facetResponse = facetResponse[0];
											}

											if (facetResponse.corrections && facetResponse.corrections.length > 0) {
												const unaliased_url = self.router.unaliasUrl(null, facetResponse.corrections);
												promise.reject();

												if (SC.ENVIRONMENT.jsEnvironment === 'server') {
													nsglobal.statusCode = 301;
													nsglobal.location = `/${unaliased_url}`;
												} else {
													Backbone.history.navigate(`#${unaliased_url}`, {
														trigger: true
													});
												}
											
											} else {
												self.translator.setLabelsFromFacets(self.model.get('facets') || []);

												const url_options = Utils.parseUrlOptions(window.location.href);
												
												if (url_options.order == "onlinecustomerprice:asc") {
													var itemmodels = [];
													_.each(self.model.get('items').models, function (model) {
														itemmodels.push(model);
													})
													var itemAttrmodels = [];
													_.each(itemmodels, function (model) {
														itemAttrmodels.push(model.attributes);
													})
													var SortedOnpriceArray = _.sortBy(itemAttrmodels, 'onlinecustomerprice');
													var finalArray = [];
													for (var m = 0; m < SortedOnpriceArray.length; m++) {
														for (var k = 0; k < (self.model.get('items').models).length; k++) {
															if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
																finalArray.push(self.model.get('items').models[k]);
																break;
															}
														}
													}
													self.model.get('items').models = finalArray;
												} else if (url_options.order == "onlinecustomerprice:desc") {
													var itemmodels = [];
													_.each(self.model.get('items').models, function (model) {
														itemmodels.push(model);
													})
													var itemmodel = [];
													_.each(itemmodels, function (model) {
														itemmodel.push(model.attributes);
													})
													var SortedOnpriceArray = _.sortBy(itemmodel, 'onlinecustomerprice');
													var finalArray = [];
													for (var m = 0; m < SortedOnpriceArray.length; m++) {
														for (var k = 0; k < (self.model.get('items').models).length; k++) {
															if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
																finalArray.push(self.model.get('items').models[k]);
																break;
															}
														}
													}
													finalArray = finalArray.reverse();
													self.model.get('items').models = finalArray;
												}
												else if (url_options.order == "relevance:desc") {
													
													var itemmodels = [];
													_.each(self.model.get('items').models, function (model) {
														itemmodels.push(model);
													})
													var itemmodel = [];
													_.each(itemmodels, function (model) {
														itemmodel.push(model.attributes);
													})
													
													var SortedOnpriceArray = _.sortBy(itemmodel, 'relevance');
													
													var finalArray = [];
													for (var m = 0; m < SortedOnpriceArray.length; m++) {
														for (var k = 0; k < (self.model.get('items').models).length; k++) {
															if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
																finalArray.push(self.model.get('items').models[k]);
																break;
															}
														}
													}
													
													finalArray = finalArray.reverse();

													self.model.get('items').models = finalArray;
												} 
												else {
													
													var itemmodels = [];
													
													_.each(self.model.get('items').models, function (model) {
														itemmodels.push(model);
													})
													var itemAttrmodels = [];
													_.each(itemmodels, function (model) {
														itemAttrmodels.push(model.attributes);
													})
													var SortedOnpriceArray = _.sortBy(itemAttrmodels, 'itemid');
													var finalArray = [];
													for (var m = 0; m < SortedOnpriceArray.length; m++) {
														for (var k = 0; k < (self.model.get('items').models).length; k++) {
															if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
																finalArray.push(self.model.get('items').models[k]);
																break;
															}
														}
													}
													self.model.get('items').models = finalArray;
													// var SortedArrayOnId = _.sortBy(self.model.get('items').models, 'id');
													// self.model.get('items').models = SortedArrayOnId;
													
												}

												var visibleFilter = [];

												if (ProfileModel.getInstance().get('internalid') !== '858') {
													_.each(self.model.get('facets'), function (facet) {
														_.each(SC.CONFIGURATION.filtersid.filtersIdValues, function (val) {
															if (facet.id == val.filterId) {
																visibleFilter.push(facet);
															}
														})
													})
													if (visibleFilter.length) {
														self.model.set('facets', visibleFilter);
													}
												}

												promise.resolve();

											}
										})
										.fail(function (jqXhr) {
											promise.reject();

											if (`${jqXhr.status}` === '404') {
												self.application.getLayout().notFound();
											}
										});
								}
							});

						} else {

							const models = [this.model];
							const categoryModel = this.model.get('category');

							if (categoryModel) {
								models.push(categoryModel);
							}

							jQuery.when
								.apply(null, _.invoke(models, 'fetch', {}))

								.then(function (facetResponse, categoryResponse) {

									container.allitems = facetResponse.items;


									// facetResponse.items[12].ispricevisible = false;
									// facetResponse.items[12].ispricevisible_detail.bycurrentuserloginstatus = false;
									// facetResponse.items[12].ispricevisible_detail.inpersonalizedcatalog = false;


									if (categoryModel) {
										if (categoryResponse[0].errors) {
											self.application.getLayout().notFound();
											promise.reject();
											return promise;
										}

										facetResponse = facetResponse[0];
									}

									if (facetResponse.corrections && facetResponse.corrections.length > 0) {
										const unaliased_url = self.router.unaliasUrl(null, facetResponse.corrections);
										promise.reject();

										if (SC.ENVIRONMENT.jsEnvironment === 'server') {
											nsglobal.statusCode = 301;
											nsglobal.location = `/${unaliased_url}`;
										} else {
											Backbone.history.navigate(`#${unaliased_url}`, {
												trigger: true
											});
										}
									} else {
										self.translator.setLabelsFromFacets(self.model.get('facets') || []);

										const url_options = Utils.parseUrlOptions(window.location.href);
									   ;
										if (url_options.order == "onlinecustomerprice:asc") {
											var itemmodels = [];
											_.each(self.model.get('items').models, function (model) {
												itemmodels.push(model);
											})
											var itemAttrmodels = [];
											_.each(itemmodels, function (model) {
												itemAttrmodels.push(model.attributes);
											})
											var SortedOnpriceArray = _.sortBy(itemAttrmodels, 'onlinecustomerprice');
											var finalArray = [];
											for (var m = 0; m < SortedOnpriceArray.length; m++) {
												for (var k = 0; k < (self.model.get('items').models).length; k++) {
													if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
														finalArray.push(self.model.get('items').models[k]);
														break;
													}
												}
											}
											self.model.get('items').models = finalArray;
										}
										else if (url_options.order == "relevance:desc") {
											var itemmodels = [];
											
											_.each(self.model.get('items').models, function (model) {
												itemmodels.push(model);
											})
											var itemAttrmodels = [];
											_.each(itemmodels, function (model) {
												itemAttrmodels.push(model.attributes);
											})
											var SortedOnpriceArray = _.sortBy(itemAttrmodels, 'relevance');
											var finalArray = [];
											for (var m = 0; m < SortedOnpriceArray.length; m++) {
												for (var k = 0; k < (self.model.get('items').models).length; k++) {
													if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
														finalArray.push(self.model.get('items').models[k]);
														break;
													}
												}
											}
											finalArray = finalArray.reverse();
											self.model.get('items').models = finalArray;
										} 
										else if (url_options.order == "onlinecustomerprice:desc") {
											var itemmodels = [];
											_.each(self.model.get('items').models, function (model) {
												itemmodels.push(model);
											})
											var itemmodel = [];
											_.each(itemmodels, function (model) {
												itemmodel.push(model.attributes);
											})
											var SortedOnpriceArray = _.sortBy(itemmodel, 'onlinecustomerprice');
											var finalArray = [];
											for (var m = 0; m < SortedOnpriceArray.length; m++) {
												for (var k = 0; k < (self.model.get('items').models).length; k++) {
													if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
														finalArray.push(self.model.get('items').models[k]);
														break;
													}
												}
											}
											finalArray = finalArray.reverse();
											self.model.get('items').models = finalArray;
										} else {
											
											var itemmodels = [];
											
											_.each(self.model.get('items').models, function (model) {
												itemmodels.push(model);
											})
											var itemAttrmodels = [];
											_.each(itemmodels, function (model) {
												itemAttrmodels.push(model.attributes);
											})
											var SortedOnpriceArray = _.sortBy(itemAttrmodels, 'itemid');
											var finalArray = [];
											for (var m = 0; m < SortedOnpriceArray.length; m++) {
												for (var k = 0; k < (self.model.get('items').models).length; k++) {
													if (SortedOnpriceArray[m].internalid == self.model.get('items').models[k].attributes.internalid) {
														finalArray.push(self.model.get('items').models[k]);
														break;
													}
												}
											}
											self.model.get('items').models = finalArray;
											// var SortedArrayOnId = _.sortBy(self.model.get('items').models, 'itemid');
											// self.model.get('items').models = SortedArrayOnId;
										}

										var visibleFilter = [];

										if (ProfileModel.getInstance().get('internalid') !== '858') {
											_.each(self.model.get('facets'), function (facet) {
												_.each(SC.CONFIGURATION.filtersid.filtersIdValues, function (val) {
													if (facet.id == val.filterId) {
														visibleFilter.push(facet);
													}
												})
											})
											if (visibleFilter.length) {
												self.model.set('facets', visibleFilter);
											}
										}

										promise.resolve();

									}
								})
								.fail(function (jqXhr) {
									promise.reject();

									if (`${jqXhr.status}` === '404') {
										self.application.getLayout().notFound();
									}
								});
						}

						return promise;

					})

			}
		};
	});