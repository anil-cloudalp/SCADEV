<div class="checkout_custom_fields_row">

	<div>
		<label>Where did you learn about the items you are purchasing?</label>
		<select name="campaign_category">
			<option value=""> Select Any </option>
			
			{{#each campaign_category_options}}
				<option value="{{id}}" {{#ifEquals ../campaign_category id}}selected{{/ifEquals}}> {{name}} </option>
			{{/each}}
		</select>
	</div>
	<div>
		<label>Customer Comment</label>
		<textarea name="cust_comment">{{cust_comment}}</textarea>
	</div>
	{{#unless isPerson}}
	<div>
		<label>Ordered By Name <span class="input-required">(Required)<span></label>
		<input type="text" name="ordered_by" value="{{ordered_by}}" />
	</div>
	{{/unless}}
</div>
