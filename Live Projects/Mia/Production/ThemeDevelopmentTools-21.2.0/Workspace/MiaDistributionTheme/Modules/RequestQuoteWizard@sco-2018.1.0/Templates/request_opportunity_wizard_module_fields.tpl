<div data-type="alert-placeholder-module"></div>
<div class="opportunity_fields">
	<div>
		<label>Title - End User Details <small class="input-required">(Required)</small></label>
		<input type="text" data-field="title"/>
		<small class="input-required"></small>
	</div>
	<div>
		<label>Estimated Budget <small class="input-required">(Required)</small></label>
		<input type="number" data-field="estimatedbudget"/>
	</div>
	<div>
		<label><input type="checkbox" data-field="isbudgetapproved"/> Budget Approved</label>
		
	</div>
	<div>
		<label>Buying Time Frame <small class="input-required">(Required)</small></label>
		<select data-field="buyingtimeframe">
		<option value="">Select</option>
		{{#each listOptions.buyingtimeframe}}
		 <option value="{{id}}">{{name}}</option>
		{{/each}}
		</select>
	</div>
	<div>
		<label>Buying Reason <small class="input-required">(Required)</small></label>
		<select data-field="buyingreason">
		<option value="">Select</option>
		{{#each listOptions.buyingreason}}
		 <option value="{{id}}">{{name}}</option>
		{{/each}}
		</select>
	</div>
	<div>
		<label>Sales Readiness <small class="input-required">(Required)</small></label>
		<select data-field="salesreadiness">
		<option value="">Select</option>
		{{#each listOptions.salesreadiness}}
		 <option value="{{id}}">{{name}}</option>
		{{/each}}
		</select>
	</div>

	<div>
		<label>Details (Maximum 999 characters)</label>
		<textarea data-action="validate-textarea-length" maxlength="{{maxLength}}" data-type="memo-input" class="requestquote-wizard-module-comments-box-textarea">{{memo}}</textarea>
	</div>
</div>



{{!----
Use the following context variables when customizing this template:

	showTitle (Boolean)
	title (String)
	memo (String)
	isReadOnly (Boolean)
	maxLength (Number)

----}}
