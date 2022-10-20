<style>
.facet-header{

    display: none;
}

.facets-item-list-show-selector{

    display: none;
}

.global-views-pagination{

    display: none;
}

.facets-facet-browse-header{
    display: none;
    }

    .facets-facet-browse-results{

        width: 100%;
    }

    .facets-browse-category-heading-main-description-custom h1, p{

        color: white;
    }

    .facets-browse-category-heading-main-description-custom h1{
    text-transform: none;
    letter-spacing: 0px;
    padding: 15px;
    font-size: 25px;
    }

    .facets-browse-category-heading-main-description-custom p{

        padding: 15px;
    }

    .facets-facet-browse{
        padding: 0px;
    }

</style>


<section class="facets-browse-category-heading-list-header-custom">
	{{#if hasBanner}}
		<div style="background-image: url({{resizeImage banner 'categorybanner'}})" class="facets-browse-category-heading-main-image-custom">
            <div class="facets-browse-category-heading-main-description-custom">
            <h1>{{pageheading}}</h1>
            {{#if showDescription}}	
                <p>{{{description}}}</p>
            {{/if}}
        </div>
		</div>
	{{/if}}
</section>

