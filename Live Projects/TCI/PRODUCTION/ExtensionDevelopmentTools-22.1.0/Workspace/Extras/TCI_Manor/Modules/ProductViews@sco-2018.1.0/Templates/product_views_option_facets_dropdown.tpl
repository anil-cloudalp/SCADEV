<div id="{{cartOptionId}}-container" class="product-views-option-facets-dropdown" data-type="option" data-cart-option-id="{{cartOptionId}}" data-item-option-id="{{itemOptionId}}">
	<div class="{{cartOptionId}}-controls-group" data-validation="control-group">
		{{#if showLabel}}
			{{!-- <label class="product-views-option-facets-dropdown-label" for="{{cartOptionId}}">
				{{label}}
				{{#if showSelectedValue}}
					: <span data-value="{{cartOptionId}}">{{selectedValue.label}}</span>
				{{/if}}
				{{#if showRequiredLabel}}<span class="product-views-option-dropdown-label-required">*</span>{{/if}}
			</label> --}}
		{{/if}}
		<div class="{{cartOptionId}}-controls" data-validation="control">
			<select name="{{cartOptionId}}" id="{{cartOptionId}}" class="product-views-option-facets-dropdown-select" data-toggle="select-option">
				{{#if showModifiedDefaultSelectLabel}}
					<option value="">{{modifiedDefaultSelectLabel}}</option>
				{{else}}
					<option value="">{{translate '- Select -'}}</option>
				{{/if}}
				{{#each values}}
					{{#if internalId}}
						<option
							value="{{internalId}}"
							{{#if isActive}}selected{{/if}}
							data-active="{{isActive}}"
							data-available="{{isAvailable}}">
								{{label}}
						</option>
					{{/if}}
				{{/each}}
			</select>
		</div>
	</div>
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
