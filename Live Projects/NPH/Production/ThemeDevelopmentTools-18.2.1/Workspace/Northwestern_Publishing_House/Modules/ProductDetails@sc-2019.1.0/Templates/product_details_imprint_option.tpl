{{#if results}}
<div class="imprint-options">
	<label><span class="input-required">*</span>Personalization Options</label>
	<div class="imprint-options-radio-btns input-container">
		<label><input type="radio" name="imprint-options" value="" checked="true"> No Personalization</label><br/>
		{{#each results}}
			<label><input type="radio" name="imprint-options" value={{otherChargeItem}} data-price={{price}} data-name="{{otherChargeItem_title}}" {{#ifEquals ../this.imprintItemId otherChargeItem}} checked="true"{{/ifEquals}} /> {{otherChargeItem_title}} +<b>${{price}}</b></label><br/>
		{{/each}}
	</div>
	<div class="name-row">
		<label>{{nameLabel}}</label>
		<div class="input-container">
		<input type="text" name="imprint-options-name" class="imprint-options-values" value="{{name}}" />
		</div>
	</div>
	<div class="date-row">
		<label>{{dateLabel}}</label>
		<div class="input-container">
			<input type="text" name="imprint-options-date" class="imprint-options-values" value="{{date}}" />
		</div>
	</div>
	<div class="cross-row">
		<label>Additional Options</label>
		<div class="input-container">
			<div class="cross-input">
				<input type="checkbox" name="imprint-options-cross" class="imprint-options-values"  value="T" data-price={{crossItemPrice}} data-id={{crossItem}} {{#if isCrossItem}}checked="true"{{/if}} /><label>Imprint Cross  +<b>${{crossItemPrice}}</b></label>
			</div>
			<div class="holy-input">
				<input type="checkbox" name="imprint-options-holy" class="imprint-options-values" value="T" data-price={{holyBibleItemPrice}} data-id={{holyBibleItem}}  {{#if isHolyItem}}checked="true"{{/if}} /><label>Imprint Holy Bible  +<b>${{holyBibleItemPrice}}</b></label>
			</div>
		</div>
	</div>
	<div class="options-row">
		<label>Personalization Location</label>
		<div class="input-container last">
			<select name="imprint-options-dateopt" class="imprint-options-values">
				<option value="">-- Please Select --</option>
			</select>
		</div>
	</div>
	<div class="input-required">* Required Fields</div>
</div>
{{/if}}