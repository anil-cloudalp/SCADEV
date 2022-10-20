{{#if showCells}}
	<aside class="item-relations-correlated">
		<h3>{{translate 'You may also like…'}}</h3>
		<div class="item-relations-correlated-row" itemscope itemtype="http://schema.org/ItemList">
			<div data-type="backbone.collection.view.rows"></div>
		</div>
	</aside>
{{/if}}



{{!----
Use the following context variables when customizing this template:

	collection (Array)
	showCells (Boolean)

----}}
