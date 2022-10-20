	{{!-- Edited for Threads Theme --}}

	<section class="facets-facet-browse">


		{{#if showResults}}
			{{#if isCategory}}
				<div class="facets-facet-browse-category">
					<div data-view="Facets.Browse.CategoryHeading" class="facets-facet-browse-category-heading-container"></div>

					<div data-view="Facets.CategoryCells" class="facets-facet-browse-category-cells-container"></div>
				</div>
			{{/if}}
		<div data-cms-area="item_list_banner" data-cms-area-filters="page_type"></div>
			<div class="facets-facet-browse-content row">
		<div class="col-sm-3 facets-facet-browse-facets-col-tab-4">	
				<div class="facets-facet-browse-facets" data-action="pushable" data-id="product-search-facets">

					<div data-cms-area="facet_navigation_top" data-cms-area-filters="page_type"></div>
 
{{!-- commercecategory					
					{{#if isCategory}}
						<div data-view="Facets.CategorySidebar" class="facets-facet-browse-facets-sidebar"></div>
					{{/if}} --}} 
					

				<div data-view="Facets.FacetedNavigation" data-exclude-facets="commercecategoryname,category"></div>
			
		<hr class="factes-faceted-nav-hr">

					<div data-cms-area="facet_navigation_bottom" data-cms-area-filters="page_type"></div>
				</div>
</div>	
				<!--
				Sample of how to add a particular facet into the HTML. It is important to specify the data-facet-id="<facet id>"
				properly <div data-view="Facets.FacetedNavigation.Item" data-facet-id="custitem1"></div>
				 -->
<div class="col-sm-9 facets-facet-browse-facets-col-tab-8">
				<div class="facets-facet-browse-results">

					<header class="facets-facet-browse-header">

						{{#if showItems}}
						{{!-- <h1 class="facets-facet-browse-title" data-quantity="{{total}}">
							{{#if keywords}}
								{{#if isTotalProductsOne}}
									{{translate '1 Result for <span class="facets-facet-browse-title-alt">$(0)</span>' keywords}}
								{{else}}
									{{translate '$(0) Results for <span class="facets-facet-browse-title-alt">$(1)</span>' total keywords}}
								{{/if}}
							{{else}}
								{{#if isTotalProductsOne}}
									{{translate '1 Product'}}
								{{else}}
									{{translate '$(0) Products' total}}
								{{/if}}
							{{/if}}
						</h1> --}}

						<nav class="facets-facet-browse-list-header">
							{{!-- <div class="facets-facet-browse-list-header-actions" data-view="Facets.ItemListDisplaySelector"></div>

							<div class="facets-facet-browse-list-header-expander">
								<button class="facets-facet-browse-list-header-expander-button collapsed" data-toggle="collapse" data-target="#list-header-filters" aria-expanded="true" aria-controls="list-header-filters">
									{{translate 'Sort & Filter'}}
									<i class="facets-facet-browse-list-header-expander-icon"></i>
								</button>
							</div> --}}

							<div class="facets-facet-browse-list-header-filters" id="list-header-filters">
								<div class="facets-facet-browse-list-header-filters-wrapper">

									<div class="facets-facet-browse-list-header-filters-row">

										{{!-- <div class="facets-facet-browse-list-header-filter-column" data-view="Facets.ItemListShowSelector">
										</div> --}}
										{{#if hasItemsAndFacets}}
											<div class="facets-facet-browse-list-header-filter-column facets-facet-browse-list-header-filter-column-mobile ">
												<button class="facets-facet-browse-list-header-filter-facets" data-type="sc-pusher" data-target="product-search-facets">
													{{translate 'Filter'}}
													<i class="facets-facet-browse-list-header-filter-facets-icon"></i>
												</button>
											</div>
										{{/if}}

										<div class="facets-facet-browse-list-header-filter-column facets-facet-browse-list-header-filter-column-sortby" data-view="Facets.ItemListSortSelector">
										</div>

										{{!-- <div class="facets-facet-browse-list-header-actions-mobile" data-view="Facets.ItemListDisplaySelector"></div> --}}

									
									</div>

								</div>
							</div>
						</nav>
						{{/if}}
					</header>


					<div data-cms-area="facets_facet_browse_cms_area_1" data-cms-area-filters="page_type"></div>

					<div id="banner-section-top" class="content-banner banner-section-top" data-cms-area="item_list_banner_top" data-cms-area-filters="path"></div>

					{{#if showItems}}
						<div class="facets-facet-browse-narrowedby" data-view="Facets.FacetsDisplay"></div>
	<span class="facets-facet-browse-title" data-quantity="{{total}}">
						{{#if keywords}}
					
							{{#if isTotalProductsOne}}
								{{translate '1 Result for <span class="facets-facet-browse-title-alt">$(0)</span>' keywords}}
							{{else}}
								{{translate '$(0) Results for <span class="facets-facet-browse-title-alt">$(1)</span>' total keywords}}
							{{/if}}
						{{else}}
							{{#if isTotalProductsOne}}
								{{translate '1 Product'}}
							{{else}}
								{{translate '$(0) Results : showing $(1) <span class="facets-facet-browse-title-span">to</span> $(2)' total totalItemStart totalItemEnd}}
							{{/if}}
						{{/if}}					
	</span>
						{{#if isEmptyList}}
							<div class="facets-facet-browse-empty-items" data-view="Facets.Items.Empty"></div>
						{{else}}
							<div class="facets-facet-browse-items" data-view="Facets.Items"></div>
						{{/if}}
					{{/if}}
<div class="hr-line-items">
	<hr>
</div>

<div class="pagination-container">
		<div class="facets-facet-browse-pagination" data-view="GlobalViews.Pagination"></div>
</div>

				</div>

							
</div>
				{{!-- <div class="facets-facet-browse-pagination" data-view="GlobalViews.Pagination"></div> --}}
			</div>

			<div class="facets-facet-browse-cms-area-2" data-cms-area="facets_facet_browse_cms_area_2" data-cms-area-filters="page_type"></div>

		{{else}}
			<div class="facets-facet-browse-empty-items" data-view="Facets.Items.Empty"></div>
		{{/if}}
{{!-- <div class="row">
		<div class="facets-facet-browse-pagination col-sm-9" data-view="GlobalViews.Pagination"></div>
</div> --}}


		<div id="banner-section-bottom" class="content-banner banner-section-bottom facets-facet-browse-banner-section-bottom" data-cms-area="item_list_banner_bottom" data-cms-area-filters="page_type"></div>
	</section>



	{{!----
	Use the following context variables when customizing this template:

		total (Number)
		isTotalProductsOne (Boolean)
		title (String)
		hasItemsAndFacets (Boolean)
		collapseHeader (Boolean)
		keywords (undefined)
		showResults (Boolean)
		isEmptyList (Boolean)
		isCategory (Boolean)
		showItems (Number)

	----}}
