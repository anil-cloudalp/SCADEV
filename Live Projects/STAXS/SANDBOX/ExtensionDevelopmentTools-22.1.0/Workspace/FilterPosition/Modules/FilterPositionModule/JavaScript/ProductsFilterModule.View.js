define('Fp.FilterPosition.ProductsFilterModule.View'
,	[
	'fp_filterposition_productsfiltermodule.tpl'
	, 'SC.Configuration'
	,	'Backbone'
    ]
, function (
	fp_filterposition_productsfiltermodule_tpl
	, Configuration
	,	Backbone
)
{
    'use strict';

	return Backbone.View.extend({

		template: fp_filterposition_productsfiltermodule_tpl

	,	events: {
		'click [data-action="see-more"]': 'toggleSeeMoreLess'
		}

	,	bindings: {
		}

	,	initialize: function (options) {

			// this.on('afterViewRender', this.renderCategories, this);
		}
		
		// ,renderCategories() {
		// 	this.$('[data-collapsed="true"]').hide();
		// }

		,toggleSeeMoreLess(event) {
			const target = this.$(event.currentTarget);
			const target_see_more = target.find('[data-type="see-more"]');
			const target_see_less = target.find('[data-type="see-less"]');
			const target_was_expanded = !!target.data('collapsed');

	
			if (target_was_expanded) {
				target_see_more.show();
				target_see_less.hide();
			} else {
				target_see_more.hide();
				target_see_less.show();
			}
	
			target.data('collapsed', !target_was_expanded);
		}

	, 	childViews: {

		}

	,	getContext: function getContext()
		{

			const myCategories = SC.CATEGORIES[0];
			const showFacet = myCategories.categories.length;
			const showMax = Configuration.get('categories.sideMenu.showMax');
			const uncollapsible = Configuration.get('categories.sideMenu.uncollapsible');
			const collapsed = Configuration.get('categories.sideMenu.collapsed');
			const max = showMax;
			const displayValues = _.first(myCategories.categories, max);
			const extraValues = _.rest(myCategories.categories, max);
			const parentName = myCategories.name;

			return {
				parentName,

				displayValues,
				
				isCollapsed: !uncollapsible && collapsed,

				isUncollapsible: !!uncollapsible,

				showExtraValues: !!extraValues.length,

				extraValues,

				showFacet: !!showFacet,


			};
		}
	});
});
