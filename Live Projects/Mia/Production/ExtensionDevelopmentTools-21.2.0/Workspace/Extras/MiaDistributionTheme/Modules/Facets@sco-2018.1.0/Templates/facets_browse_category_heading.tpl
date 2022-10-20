{{!--  Edited for Horizon  --}}

{{#if banner}}
   <!---<div class="category-pusher"></div>
    <div class="facets-browse-category-heading-main-image" style="background-image: url('{{resizeImage banner 'categorybanner'}}');">
	
		<div class="row">
			<div class="col-sm-2"></div>
			<div class="col-sm-8">
					<h1>{{pageheading}}</h1>
					<div class="row">
						<a class="col-sm-4 col-xs-4" data-navigate="#categories_section"><img src="{{getThemeAssetsPath 'img/CATEGORY.png'}}"></a>
						<a class="col-sm-4 col-xs-4" data-navigate="#featured_item_section"><img src="{{getThemeAssetsPath 'img/FEATURED-PRODUCT.png'}}"></a>
						<a class="col-sm-4 col-xs-4" data-navigate="#featured_video_section"><img src="{{getThemeAssetsPath 'img/VIDEO.png'}}"></a>
					</div>
			</div>
			<div class="col-sm-2"><a href="/shop-main" class="back-to-shop">Back to Shop</a></div>
		</div>
		<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"> <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z"></path> </svg>
	</div>--->
{{else}}

<section class="facets-browse-category-heading-list-header">
	<div class="facets-browse-category-heading-main-description">
		<h1>{{pageheading}}</h1>
		{{#if description}}<p>{{{description}}}</p>{{/if}}
	</div>
</section>
{{/if}}

{{!----
Use the following context variables when customizing this template:

	name (String)
	banner (String)
	description (String)
	pageheading (String)
	hasBanner (Boolean)
	showDescription (Boolean)

----}}
