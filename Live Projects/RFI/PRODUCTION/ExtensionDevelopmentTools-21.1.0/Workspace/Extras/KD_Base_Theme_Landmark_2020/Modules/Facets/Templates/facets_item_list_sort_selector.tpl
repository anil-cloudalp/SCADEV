<select data-type="navigator" class="facets-item-list-sort-selector">
	{{#each options}}
	<option value="{{configOptionUrl}}" class="{{className}}" {{#if isSelected}} selected="" {{/if}} >{{translate name}}</option>
	{{/each}}
</select>

<script>
var url = window.location.href;

if(!url.includes("news-release")){
$('.custitem_kd_new_date-asc').remove();
$('.custitem_kd_new_date-desc').remove();
}else{
$('.onlinecustomerprice-asc').remove();
$('.onlinecustomerprice-desc').remove();

}
</script>



{{!----
Use the following context variables when customizing this template: 
	
	options (Array)

----}}
