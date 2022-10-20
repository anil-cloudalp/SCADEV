<label class="global-views-countriesDropdown-group-label" for="{{manage}}country">
    {{translate 'Country'}} <span class="global-views-countriesDropdown-input-required">*</span>
</label>
<div  class="global-views-countriesDropdown-form-controls" data-validation="control">
    <select class="{{#if showCSSclass}} {{cssclass}} {{else}} global-views-countriesDropdown-select {{/if}}" id="{{id}}country" name="country" data-action="selectcountry">
        <option value="">
            {{translate '-- Select --'}}
        </option>
       
            <option value="AU">
                Australia
            </option>
    </select>
</div>



{{!----
Use the following context variables when customizing this template: 
	
	cssclass (String)
	showCSSclass (Boolean)
	id (String)
	countries (Array)

----}}
