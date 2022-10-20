
<style>

.item-relations-related-carousel-next {
    margin-left: 10px;
    cursor: pointer;
    cursor: hand;
    position: absolute;
    right: -15px;
    top: 35%;
    border: none;
}

.item-relations-related-carousel-prev {
    cursor: pointer;
    cursor: hand;
    position: absolute;
    left: -15px;
    top: 35%;
    /* background: white; */
    border: none;
    /* font-size: 19px; */
}

.carousel-next-arrow, .carousel-prev-arrow {
    color: #161616 !important;
    font-size: 28px!important;
}

.item-relations-related-carousel-prev:hover{
	background-color: transparent!important;

}

.item-relations-related-carousel-next:hover{
	background-color: transparent!important;s
}

.item-relations-related-carousel-prev:hover .carousel-prev-arrow {
	color: #8c8c8c !important;

}

.item-relations-related-carousel-next:hover .carousel-next-arrow {
	color: #8c8c8c !important;

}

</style>


{{#if showCells}}
	<aside class="recently-viewed-items">
		<h3>{{translate 'Recently viewed'}}</h3>
		<div data-type="backbone.collection.view.rows"></div>
	</aside>
{{/if}}



{{!----
Use the following context variables when customizing this template: 
	
	collection (Array)
	showCells (Boolean)

----}}
