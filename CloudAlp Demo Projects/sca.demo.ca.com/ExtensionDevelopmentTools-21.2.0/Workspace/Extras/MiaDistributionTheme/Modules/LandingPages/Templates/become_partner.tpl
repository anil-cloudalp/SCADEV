 
<div class="become-a-partner-main-content">
     
 <div data-cms-area="become-a-partner-cms-area" data-cms-area-filters="path"></div>
</div>
 


<div class="become_a_partner_form">
<form method="POST"  class="become-a-partner-form-field">
{{!--become-a-partner-company-details  ---}}
<div class="become-a-partner-company-details row">
<h1 class="become-a-partner-h1"> {{translate 'Company Details'}} </h1>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'Company Name'}}<span>*</span></lable>
      <input class="become-a-partner-input" type="text" name="companyname" >
		   </div>

</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field  become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'ABN'}} <span>*</span></lable>
      <input class="become-a-partner-input" type="text" name="abn">
		   </div>
       
</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate ' Business Phone'}} </lable>
      <input class="become-a-partner-input" type="text" name="bizphone" >
		   </div>
       
</div>

</div>

{{!--become-a-partner-company-details  end ---}}

{{!--become-a-partner-company-Address  ---}}
<div class="become-a-partner-company-address row">

<h1 class="become-a-partner-h1">Address</h1>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'Address Line 1'}} <span>*</span></lable>
      <input class="become-a-partner-input" type="text" name="address1" >
		   </div>

</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field  become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" > {{translate 'Address Line 2'}}</lable>
      <input class="become-a-partner-input" type="text" name="address2">
		   </div>
       
</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'City'}} <span>*</span> </lable>
      <input class="become-a-partner-input" type="text" name="city" >
		   </div>
       
</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'Zip/Postal Code'}} <span>*</span></lable>
      <input class="become-a-partner-input" type="text" name="zipcode" >
		   </div>
       
</div>




{{#with listOptions}}
<div class="input-field" data-validation="control-group">
		<div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'Territory'}} <span>*</span></lable>
        <select class="same-select-field" name="territory">
	      <option></option>
				{{#each territory}}
					<option value="{{id}}">{{name}}</option>
				{{/each}}
		  </select>
	   </div>
       
</div>

<div class="input-field" data-validation="control-group">
		<div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'Country'}} <span>*</span></lable>
      <select class="same-select-field"  name="country">
				<option></option>
				{{#each countries}}
					<option value="{{id}}">{{name}}</option>
				{{/each}}
				</select>
		  </div>
       
</div>

{{/with}}

</div>

{{!--become-a-partner-company-Address   end ---}}

{{!--become-a-partner-company-Contact-Details ---}}

<div class="become-a-partner-company-Contact-Details row">
<h1 class="become-a-partner-h1">Contact Details</h1>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" > {{translate 'First Name'}} <span>*</span></lable>
      <input class="become-a-partner-input" type="text" name="firstname" >
		   </div>

</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field  become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'Last Name'}} <span> *</span></lable>
      <input class="become-a-partner-input" type="text" name="lastname">
		   </div>
       
</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'Job Title'}}</lable>
      <input class="become-a-partner-input" type="text" name="jobtitle" >
		   </div>
       
</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >	{{translate 'Email'}}<span>*</span></lable>
      <input class="become-a-partner-input" type="email" name="email" >
		   </div>
       
</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" > {{translate 'Phone Number'}} </lable>
      <input class="become-a-partner-input" type="text" name="phone" >
		   </div>
       
</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" >{{translate 'Login Email'}}<span>*</span></lable>
      <input class="become-a-partner-input" type="email" name="loginemail" >
</div>
       
</div>

</div>
{{!--become-a-partner-company-Contact-Details end  ---}}

{{!--become-a-partner-Partner-Information  ---}}
<div class="become-a-partner-Partner-Information row">
<h1 class="become-a-partner-h1">Partner Information</h1>

 <div class="input-field" data-validation="control-group">
       
			
			<div  data-validation="control">
			     <label class=" product-of-Intrested" >
				{{translate 'Products of interest'}} <span >*</span>
			</label>
				<textarea class="become-a-partner-textarea" name="prodofinterest"></textarea>
			</div>
</div>

<div class="input-field" data-validation="control-group">
		  <div class="lastname-field  become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" > {{translate 'Where did you hear about us?'}} </lable>
      <input class="become-a-partner-input" type="text" name="question">
		   </div>
       
</div>

 <div class="input-field" data-validation="control-group">
  <div class="lastname-field become-a-partner-input-box" data-validation="control">
    <lable class="become-a-partner-lable" for="" > {{translate 'Current Distributor Relationship*'}}</lable>
	<input type="text" name="currentdistributorrelationship" />
	<!---<div class="dist_selected_opts"></div>
	<div  data-validation="control" class="cs_container">
					<input type="text" name="curr_dist_rel" placeholder="Enter Distributor Relationship"/>
                   <div data-type="Cs.Items"></div>--->
</div>
     
</div>
       
</div>

 {{#with listOptions}}
 <div class="input-field" data-validation="control-group">
	 <div class="lastname-field become-a-partner-input-box  " data-validation="control">
      <lable class="become-a-partner-lable" for="" > {{translate 'Brands Sold/of Interest*'}} </lable>
      <select  class="same-select-field dynamic_add"  name="brandSold" id="brandSold-select-apperance" multiple>
     
         	<option value="new">-- Create New --</option>
					{{#each brandSold}}  
						<option value="{{id}}">{{name}}</option>
					{{/each}}
      </select>
		   </div>
       
</div>
 {{/with}}

 
 {{#with listOptions}}
<div class="input-field" data-validation="control-group">
	<div class="lastname-field become-a-partner-input-box " data-validation="control">
      <lable class="become-a-partner-lable" for="" > {{translate 'Customer Market Segment*'}} </lable>
      <select  class="same-select-field" name="marketSegment">
      <option value=""selected>Choose Brands</option>
  
					{{#each marketSegment}}
						<option value="{{id}}">{{name}}</option>
					{{/each}}

      </select>
	</div>     
</div>
{{/with}} 

 {{#with listOptions}}
 <div class="input-field" data-validation="control-group">
		  <div class="lastname-field become-a-partner-input-box" data-validation="control">
      <lable class="become-a-partner-lable" for="" > {{translate 'Customer Industry Type*'}} </lable>
       <select  class="same-select-field" name="industryType"  multiple>
      <option value="" selected>Choose Brands</option>
     	{{#each industryType}}
						<option value="{{id}}">{{name}}</option>
		{{/each}}
  
      </select>
	</div>     
</div>

          <div>
				<label class="become-a-partner-lable">
					<input type="checkbox" value="T" data-unchecked-value="F" name="douoffervoiceplatform"> Do you offer a Voice Platform
				</label>
			</div>

<div class="voice_platform" data-validation="control-group">
				<label class="become-a-partner-lable">
					{{translate 'Voice Platform'}} <span >*</span>
				</label>
				<div  data-validation="control">
					<select name="voicePlatform" class="same-select-field dynamic_add">
					<option></option>
					<option value="new">-- Create New --</option>
					{{#each voicePlatform}}
						<option value="{{id}}">{{name}}</option>
					{{/each}}
					</select>
				</div>
			</div>
  {{/with}}

<div id="alert-placeholder"><p class="alert-type" data-type="alert-placeholder"></p></div>

<div class="become-btn">
<div class="submit-button-content become-a-partner-btn">
<a class="submit-home-button" data-action="submitcontent"> {{translate 'Submit'}}</a>
</div>
</div>


</div>

</form>
{{!--become-a-partner-Partner-Information end  ---}}
</div>


<!-- Modal -->
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          
          <h4 class="modal-title">{{translate 'Add New Option'}}</h4>
        </div>
        <div class="modal-body">
          <input type="text" id="modal_option_value" style="max-width:300px;">
		  <input type="hidden" id="modal_option_sublistid" value="">
		  <input type="submit" id="modal_submit_form"   class="button-secondary button-medium">
		  <div data-type="modal-alert-placeholder"></div>
        </div>
      </div>
      
    </div>
</div> 
