{{#each serialNumbers}}
	<div><label><input type="checkbox" value="{{serial}}" name="return_lines_serial" {{#if isSelected}}checked{{/if}}/>{{serial}}</label></div>
{{/each}}
<div data-view="return_lines_serial_submit"></div>
<button class="button-secondary button-small" name="return_lines_serial_submit">Submit</button>
