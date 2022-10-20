<div class="items-list-page">
	{{#if isLogin}}
	<div class="facets-facet-browse-category-heading">
		<div class="facets-browse-category-heading-main-image" style="background-image: url('/core/media/media.nl?id=21917979&amp;c=4220479&amp;h=b30ef81981b3d21321b4');">
		<div class="row">
		<div class="col-sm-2"></div>
		<div class="col-sm-8"><h1>Inventory Availability</h1></div>
		<div class="col-sm-2"></div>
		</div>
		<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z"></path></svg></div>
	</div>
		
	<div class="list-of-categories facets-facet-browse-navCats">
		<div class="grap_all_items_container"><button name="grap_all_items">Download All Inventory  - Excel</button></div>
		<div class="categories-section-heading"><h3>Categories</h3><div class="devider-gradient"></div></div>

		{{#each categories}}
			<div class="navCats-lv1-links{{#if categories}} expand-icon{{/if}}">
			<a data-url="{{fullurl}}" title="{{name}}" {{#if categories}}data-action="expand-it"{{else}}data-action="show-items"{{/if}}>{{name}}</a>
			<button name="grap_all_items" data-url="{{fullurl}}">Download Inventory  - Excel</button>
			{{#if categories}}
				<i title="Click to Expand" name="expandIcon"></i>
				<div class="navCats-lv2-content">
					{{#each categories}}
						<div class="navCats-lv2-links{{#if categories}} expand-icon{{/if}}">
							<a data-url="{{fullurl}}" title="{{name}}" {{#if categories}}data-action="expand-it"{{else}}data-action="show-items"{{/if}}>{{name}}</a>
							{{#if categories}}
								<i title="Click to Expand" name="expandIcon"></i>
								<div class="navCats-lv3-content">
								{{#each categories}}
								<a data-url="{{fullurl}}" title="{{name}}" data-action="show-items">{{name}}</a>
								<div data-view="items.list"></div>
								{{/each}}
								</div>
							{{else}}
								<div data-view="items.list"></div>
							{{/if}}
						</div>
					{{/each}}
				</div>
			{{else}}
				<div data-view="items.list"></div>
			{{/if}}
			</div>
		{{/each}}
	</div>
	{{else}}
		<div class="list-of-categories"><br><br><h3><a href="{{loginUrl}}" class="login-url" data-navigation="ignore-click">Please login to access this page</a></h3></div>
	{{/if}}
</div>
