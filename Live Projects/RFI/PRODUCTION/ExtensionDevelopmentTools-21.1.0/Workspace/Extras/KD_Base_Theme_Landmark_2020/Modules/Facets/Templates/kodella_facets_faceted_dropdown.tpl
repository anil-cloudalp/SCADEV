<style>
#FacetCategory{

float: left;
border: none;

}

#FacetYear{

float: left;
border: none;
    
}

.facets-item-list-sort-selector{

    border: none;
}


</style>

{{#if YearFacets}}

<select  id="FacetYear">
<option value="">Year</option>
{{#each YearFacets}}
<option value="{{this.value}}">{{this.label}}</option>
{{/each}}

</select>

{{/if}}

{{#if CategoryNews}}

<select id="FacetCategory">
<option value="">Category</option>
{{#each CategoryNews}}
<option value="{{this.value}}">{{this.label}}</option>
{{/each}}

</select>

{{/if}}

