<select data-type="navigator" class="facets-item-list-show-selector">
	{{#each options}}
	<option value="{{configOptionUrl}}" class="{{className}}" {{#if isSelected}} selected="" {{/if}} >{{name}}</option>
	{{/each}}
</select>
<script>
$('.10').remove();
</script>



{{!----
Use the following context variables when customizing this template: 
	
	options (Array)

----}}
