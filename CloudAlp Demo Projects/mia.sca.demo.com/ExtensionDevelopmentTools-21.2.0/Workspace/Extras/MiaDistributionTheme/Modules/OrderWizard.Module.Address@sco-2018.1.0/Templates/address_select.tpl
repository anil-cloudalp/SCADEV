{{#if showSelect}}
<select name="address_select_v1">
  <option value="">Select</option>
  {{#each addressList}}
	<option value="{{internalid}}" {{#if isSelected}}selected{{/if}}>
		{{title}},
		{{#if showCompanyAndFullName}}
			{{company}},
			{{fullname}},
		{{else}}
			{{#if showFullNameOnly}}
				{{fullname}},
			{{/if}}
		{{/if}}
		{{addressLine1}},
		{{#if showAddressLine1}}
			{{addressLine2}},
		{{/if}}
		{{city}},
		{{#if showState}}
			{{state}},
		{{/if}}
		{{zip}},
		{{country}},
		{{phone}}
	</option>
  {{/each}}
  
</select>
{{/if}}
<a href="/addressbook/new" data-toggle="show-in-modal">{{translate 'Add Address'}}</a>