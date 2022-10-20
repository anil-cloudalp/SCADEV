{{#if title}}
<!-- <li> | </li> -->
<a href="#stores" class="{{#if hasClass}} {{className}} {{else}}storelocator-accesspoints-headerlink-link{{/if}}" data-touchpoint="{{touchpoint}}" data-hashtag="#stores" title="{{translate 'Store Locator'}}">
	<i class="storelocator-accesspoints-headerlink-link-icon"> </i>
	<span class="storelocator-accesspoints-headerlink-link-text"> 
		<!--{{translate title}}-->
		<i class="fa fa-map-marker" aria-hidden="true" target="_blank"></i> Find a dealer
	</span>
</a>
{{/if}}



{{!----
Use the following context variables when customizing this template: 
	
	title (String)
	hasClass (Boolean)
	touchpoint (String)

----}}
