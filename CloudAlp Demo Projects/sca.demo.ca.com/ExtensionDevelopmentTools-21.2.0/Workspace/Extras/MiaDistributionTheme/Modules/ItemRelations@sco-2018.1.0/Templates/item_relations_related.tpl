{{#if showCells}}
	<aside class="item-relations-related">
		<h3>{{translate 'Related products'}}</h3>
		<div class="item-relations-related-row" itemscope itemtype="http://schema.org/ItemList">
			<div data-type="backbone.collection.view.rows"></div>
		</div>
	</aside>
{{/if}}



{{!----
Use the following context variables when customizing this template:

	collection (Array)
	showCells (Boolean)

----}}
