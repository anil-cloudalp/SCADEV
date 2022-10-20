
define(
	'CA.Filters.Filters'
	, [
		'CA.Filters.Filters.View',
		'Facets.FacetedNavigationItem.View',
		'Facets.Browse.View',
		'Utils',
		'underscore'
	]
	, function (
		FiltersView,
		FacetsFacetedNavigationItemView,
		FacetsBrowseView,
		Utils,
		_
	) {

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');

				// show items ex 80 Result:showing	to 12
				_.extend(FacetsBrowseView.prototype, {
					getContext: _.wrap(FacetsBrowseView.prototype.getContext, function getContext(fn) {
						var Context = fn.apply(this, _.toArray(arguments).slice(1));
						// console.log(this.model.get('items').length);
						const currentTotalItemsPerPage = this.model.get('items').length;
						Context.totalItemEnd = currentTotalItemsPerPage + this.model.options.data.offset;
						Context.totalItemStart = this.model.options.data.offset + 1;

						return Context;
					})
				});
				// end

				// shows the number filters selecetd in specific filter options and clear only that section if user clear all
				_.extend(FacetsFacetedNavigationItemView.prototype, {
					getContext: _.wrap(FacetsFacetedNavigationItemView.prototype.getContext, function getContext(fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						let lenArry = [];
						var FacetId = this.facetId;
						_.each(this.options.translator.facets, (d) => {
							if (d.id == FacetId) {
								lenArry.push(d.value.length);
							}
						});
						if (lenArry !== undefined && lenArry.length > 0) {
							this.val = lenArry;
						}
						// @property {array} facetselected length
						context.selectedFacetLength = !_.isUndefined(this.val) ? this.val[0] : false;
						return context;
					})
				});
				//end


			}
		};
	});
