		{{#if hidechkout}}
    <a id="btn-proceed-checkout" class="rqstshpaddr"  data-toggle="modal" data-target="#shippingAddressModal">
			{{translate 'Request to Create a shipping address'}}
		</a>
    {{else}}

    	<a id="btn-proceed-checkout" class="rqstshpaddr"  data-toggle="modal" data-target="#shippingAddressModal">
					{{translate 'REQUEST TO CHANGE OR ADD A SHIPPING ADDRESS'}}
				</a>
    
        {{/if}}



        <div class="modal fade" id="shippingAddressModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel"> Request For Updating Address </h5>
        		<button type="button" class="global-views-modal-content-header-close" data-dismiss="modal" aria-hidden="true">
				    &times;
			      </button>
      </div>
      <div class="modal-body">
        <label for="email">Email Address</label>
        <input type="email"  id="mail" name="email" value="{{email}}" disabled>
        <label for="address"> Address Details </label>
        <textarea style="width:100%" id="address" name="address" ></textarea>
        <div class="change-status"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary sbmit-btn" data-action="requestchange"> Submit </button>
      </div>
    </div>
  </div>
</div>
