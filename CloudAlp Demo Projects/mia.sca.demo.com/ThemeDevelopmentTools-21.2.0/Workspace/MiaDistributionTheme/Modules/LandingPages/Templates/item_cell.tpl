<div class="inventory-list" itemtype="https://schema.org/ItemList">
		<div class="categories-section-heading"><h3>Inventory Availability</h3><div class="devider-gradient"></div></div>
		{{#if hasItems}}
			<table class="item-list-table">
			<colgroup>
				<col width="20%">
				<col width="15%">
				<col width="45%">
				<col width="10%">
				<col width="10%">
			 </colgroup>
			<thead>
				<tr>
					<th>Name</th>
					<th>MPN</th>
					<th>Description</th>
					<th>In Stock</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
			{{#each items}}
				<tr itemprop="itemListElement" itemtype="http://schema.org/Product" data-item-id="{{itemId}}">
					<td>
						<a {{#if urlcomponent}}href="{{urlcomponent}}"{{else}}href="/product/{{internalid}}"{{/if}}" itemprop="name">{{storedisplayname2}}</a>
					</td>
					<td><span class="label-xs">MPN: </span>{{mpn}}</div>
					<td><span class="label-xs">Description: </span>{{storedescription}}</td>
					<td><span class="label-xs">In Stock: </span>{{instock}}</td>
					<td><span class="label-xs">Price: </span>{{onlinecustomerprice_formatted}}</td>
				</tr>
			{{/each}}
			</tbody>
			</table>
		{{else}}
			<h3>No Items Found</h3>
		{{/if}}
	</div>