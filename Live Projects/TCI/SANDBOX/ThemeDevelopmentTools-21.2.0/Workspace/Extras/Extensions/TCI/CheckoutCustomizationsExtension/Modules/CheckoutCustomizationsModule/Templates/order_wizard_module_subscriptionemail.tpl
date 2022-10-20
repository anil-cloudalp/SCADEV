<div class="order-wizard-module-subscriptionemail-container">
  <div class="subscriptionemail-form" >
		<label class="subscriptionemail-form-label" for="subscriptionemail">
      {{subscriptionEmailLabel}}
			{{!-- {{translate 'Subscription Email Contact'}}  --}}
      <span class="creditcard-edit-form-label-required">(Optional)</span>
      <a href="#" data-toggle="tooltip" title="{{tooltipMessage}}">
        <span class="creditcard-edit-form-securitycode-icon-container">
          <i class="fa"  data-toggle="popover" data-placement="bottom" data-title="{{creditCardHelpTitle}}">&#xf059;</i>
        </span>
      </a>

    </label>
		<div class="subscriptionemail-form-controls">
			<input type="email" class="subscriptionemail-form-input question-icon" id="subscriptionemail" name="subscriptionemail" value="">
		</div>
	</div>
</div>
