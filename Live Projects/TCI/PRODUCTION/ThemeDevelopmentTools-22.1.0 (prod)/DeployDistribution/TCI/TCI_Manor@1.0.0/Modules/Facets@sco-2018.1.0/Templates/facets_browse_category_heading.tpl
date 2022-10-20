{{!-- Edited for Manor Theme --}}

<section class="facets-browse-category-heading-list-header">
	<div class="facets-browse-category-heading-main-description">
		<h1>{{pageheading}}</h1>
		{{#if showDescription}}
			{{#if hasDescription}}
				{{#if hasOldVersion}}
					<div class="facets-browse-category-versions">
						Need an earlier edition? 
						{{#each siblings}}
								<a class="{{#if isVersionDisplayed}}isVersionDisplayed{{/if}}" href="{{fullurl}}">{{description}} Version</a>
						{{/each}}	
					</div>	      
				{{/if}}
			{{else}}
				{{#if hasBanner}}
					<div class="facets-browse-category-heading-main-image">
						<img src="{{resizeImage banner 'categorybanner'}}" alt="{{pageheading}}" />
					</div>
				{{/if}}
			{{/if}}	
		{{/if}}
	</div>
</section>



{{!----
Use the following context variables when customizing this template: 
	
	name (String)
	banner (String)
	description (String)
	pageheading (String)
	hasBanner (Boolean)
	showDescription (Boolean)

----}}
