<h2>Downloads</h2>
<div class="doc_filters_row">
	<div>
		<label>Vendor</label>
		<select name="doc_filter" id="doc_vendor">
		<option value="all">ALL</option>
		{{#each vendorsOptions}}
			<option value="{{id}}" {{#ifEquals id ../vendor}}selected{{/ifEquals}}>{{name}}</option>
		{{/each}}
		</each>
		</select>
	</div>
	<div>
		<label>Download Category</label>
		<select name="doc_filter" id="doc_category">
		<option value="all">ALL</option>
		{{#each downloadCatOptions}}
			<option value="{{id}}" {{#ifEquals id ../category}}selected{{/ifEquals}}>{{name}}</option>
		{{/each}}
		</each>
		</select>
	</div>
</div>
{{#if documents}}
	<table class="documents-list-table">
	
	{{#each documents}}
		<tr>
		<th colspan="2" class="docs-keys">{{key}}</th>
		</tr>
		{{#if items}}
			<tr>
			<th>Name</th>
			<th>Downloads</th>
			</tr>
			{{#each items}}
				<tr>
					<td>{{name}}</td>
					<td>{{#if docUrl}}<a href="{{../domain}}{{docUrl}}" target="_blank">Download <i class="lock"></i></a>{{/if}}</td>
				</tr>
			{{/each}}
		{{/if}}
	{{/each}}
	</table>
{{else}}
<p>No Records Available</p>
{{/if}}