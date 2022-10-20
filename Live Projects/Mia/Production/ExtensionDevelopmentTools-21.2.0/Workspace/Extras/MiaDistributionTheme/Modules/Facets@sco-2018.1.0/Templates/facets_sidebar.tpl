
<div class="facets-search-heading">SEARCH FOR PRODUCTS</div>
<div class="product-details-site-search" data-view="SiteSearch" data-type="SiteSearch"></div>
<ul class="nav-list">

	{{#each categories}}
		<li class="nav-list-item level0">
			<div class="nav-list-item-wrapper">
				<a class="nav-list-item-link" {{#if extLink}}href="{{extLink}}" target="_blank"{{else}}href="{{fullurl}}"{{/if}}>{{name}}</a>
				{{#if categories}}<span class="nav-list-item-subtoggle"><i class="arrow-icons"></i></span>{{/if}}
			</div>
			{{#if categories}}
				<ul class="nav-list-submenu">
				{{#each categories}}
					<li class="nav-list-item level1">
						<div class="nav-list-item-wrapper">
							<a class="nav-list-item-link" {{#if extLink}}href="{{extLink}}" target="_blank"{{else}}href="{{fullurl}}"{{/if}}>{{name}}</a>
							{{#if categories}}<span class="nav-list-item-subtoggle"><i class="arrow-icons"></i></span>{{/if}}
						</div>
						{{#if categories}}
						<ul class="nav-list-submenu">
						{{#each categories}}
							<li class="nav-list-item level2">
								<div class="nav-list-item-wrapper">
									<a class="nav-list-item-link" {{#if extLink}}href="{{extLink}}" target="_blank"{{else}}href="{{fullurl}}"{{/if}}>{{name}}</a>
								</div>
							</li>
						{{/each}}
						</ul>
						{{/if}}
					</li>
				{{/each}}
				</ul>
			{{/if}}
		</li>
	{{/each}}
</ul>