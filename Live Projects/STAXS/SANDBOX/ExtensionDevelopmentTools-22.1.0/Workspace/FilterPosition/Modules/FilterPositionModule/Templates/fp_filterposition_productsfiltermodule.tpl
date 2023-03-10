{{#if showFacet}}
<div class="facets-faceted-navigation-item-category product-catagories-filters-container">
	{{#if isUncollapsible}}
	<div class="facets-faceted-navigation-item-category-facet-group-expander">
		<h3 class="facets-faceted-navigation-item-category-title">{{parentName}}</h3>
	</div>
	{{else}}
	<a href="#" class="facets-faceted-navigation-item-category-facet-group-expander" data-toggle="collapse"
		data-target="#product-category-wrapper" data-type="collapse" title="{{translate 'Category'}}">
		<i class="facets-faceted-navigation-item-category-facet-group-expander-icon productfiltericon"></i>
		<h3 class="facets-faceted-navigation-item-category-title">{{parentName}}</h3>
	</a>
	{{/if}}

	<div class="facets-faceted-navigation-item-category-facet-group" data-type="rendered-facet"
		data-facet-id="{{facetId}}" id="product">

		<div class="{{#if isCollapsed}} collapse in {{else}} collapse  
		{{/if}} facets-faceted-navigation-item-category-facet-group-wrapper"
			id="product-category-wrapper">
			<div class="facets-faceted-navigation-item-category-facet-group-content">
				<ul class="facets-faceted-navigation-item-category-facet-optionlist">
					{{#each displayValues}}
					<li>
						<a class="facets-faceted-navigation-item-category-facet-option {{#if isActive}}option-active{{/if}}"
							href="{{fullurl}}" title="{{label}}">
							{{name}}
						</a>
					</li>
					{{/each}}
				</ul>

				{{#if showExtraValues}}
				<ul class="facets-faceted-navigation-item-category-facet-optionlist-extra collapse ">
					{{#each extraValues}}
					<li>
						<a class="facets-faceted-navigation-item-category-facet-option {{#if isActive}}option-active{{/if}}"
							href="{{fullurl}}" title="{{label}}">
							{{name}}
						</a>
					</li>
					{{/each}}
				</ul>

				<div class="facets-faceted-navigation-item-category-optionlist-extra-wrapper">
					<button class="facets-faceted-navigation-item-category-optionlist-extra-button"
						data-toggle="collapse"
						data-target="#product .facets-faceted-navigation-item-category-facet-optionlist-extra"
						data-action="see-more">
						<span data-type="see-more">
							{{translate 'See More'}}
						</span>
						<span data-type="see-less" class="facets-faceted-navigation-item-category-alt-caption">
							{{translate 'See Less'}}
						</span>
					</button>
				</div>
				{{/if}}


			</div>
		</div>
	</div>
</div>
{{/if}}




{{!----
Use the following context variables when customizing this template:

htmlId (String)
facetId (String)
showFacet (Boolean)
values (Array)
displayValues (Array)
extraValues (Array)
showExtraValues (Boolean)
isUncollapsible (Boolean)
isCollapsed (Boolean)
parentName (String)

----}}