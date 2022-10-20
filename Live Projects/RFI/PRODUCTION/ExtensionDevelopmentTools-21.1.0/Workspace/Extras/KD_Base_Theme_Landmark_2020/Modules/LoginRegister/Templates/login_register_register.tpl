<script src="https://www.google.com/recaptcha/api.js"></script>
{{#unless showFormFieldsOnly}}
<p class="login-register-register-form-description">
	{{translate 'Create a new customer account to view prices, check stock availability and experience the convenience of placing orders online.'}} <br /><br />
	{{translate 'Complete the form below and we will set up your online account (usually by the next business day for existing RFI customers).'}} <br /><br />
	{{translate 'If you are opening an account for the first time, then further account set up information will be required, and our Customer Service team will be in contact with further information requirements.'}} <br /><br />

	</p>

<form class="login-register-register-form" method="POST" novalidate>
	<small class="login-register-register-required">{{translate 'Required <span class="login-register-register-form-required">*</span>'}}</small>

{{/unless}}

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="register-firstname">
			{{translate 'First Name <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input {{#if hasAutoFocus}} autofocus {{/if}} type="text" name="firstname" id="register-firstname" class="login-register-register-form-input">
		</div>
	</div>

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="register-lastname">
			{{translate 'Last Name <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="text" name="lastname" id="register-lastname" class="login-register-register-form-input">
		</div>
	</div>

	{{#if showCompanyField}}
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label" for="register-company">
			<!-- #if isCompanyFieldRequire}} -->
			{{translate 'Company <small class="login-register-register-form-required">*</small>'}}
			<!-- else
				translate 'Company' <small class="login-register-register-form-optional">translate '(optional)'</small> *
			/if}} -->
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="company" id="register-company" class="login-register-register-form-input"/>
			</div>
			<div class="message-error msg-error-custom" id="register-company-label-empty">
				<p>Company is required</p>
		</div>
		</div>
	{{/if}}

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="phone">
			{{translate 'Phone <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
		<input type="tel" class="login-register-register-form-input" id="phone" name="custentity_kd_contact_phone" value="">
			<p class="login-register-register-form-help-block">
				<small>
					{{translate 'We need your phone to contact you about your order.'}}
				</small>
			</p>
			<div class="message-error msg-error-custom" id="register-phone-label-empty">
				<p>Phone is required</p>
			</div>
		</div>
	</div>

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="register-abn">
			{{translate 'ABN <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="text" name="custentity_kd_customer_abn" id="register-abn" class="login-register-register-form-input" placeholder="">
			<p class="login-register-register-form-help-block">
			</p>
		</div>
			<div class="message-error msg-error-custom" id="register-abn-label-empty">
					<p>ABN is required</p>
			</div>
	</div>

	<div class="login-register-register-form-controls-group" data-validation="control-group">
	<label class="login-register-register-form-label" for="register-state">
		{{translate 'State'}}
	</label>
	<div class="login-register-register-form-controls" data-validation="control">
		<select type="text" name="custentity_kd_form_australian_states" id="register-state" class="login-register-register-form-input" placeholder="">
			<option value="">Select State</option>
			<option value="1">NSW</option>
			<option value="2">QLD</option>
			<option value="3">VIC</option>
			<option value="4">SA</option>
			<option value="5">WA</option>
			<option value="6">TAS</option>
			<option value="7">NT</option>
			<option value="8">International</option>
		</select>
	</div>
</div>

	<input type='text' value="" name="custentity_kd_value_state_caselead" id='stateString' style="display: none"></input>

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="register-email">
			{{translate 'Email Address <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="email" name="email" id="register-email" class="login-register-register-form-input" placeholder="{{translate 'your@email.com'}}">
			<p class="login-register-register-form-help-block">
				<small>
					{{translate 'We need your email address to contact you about your order.'}}
				</small>
			</p>
		</div>
	</div>
	<div class="login-register-register-form-controls-group" data-validation="control-group" id="container-pass1">
		<label class="login-register-register-form-label" for="register-password">
			{{translate 'Password <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="password" name="password" id="register-password" class="login-register-register-form-input">
		</div>
	</div>

	<div class="login-register-register-form-controls-group" data-validation="control-group" id="container-pass2">
		<label class="login-register-register-form-label" for="register-password2">
			{{translate 'Re-Enter Password <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="password" name="password2" id="register-password2" class="login-register-register-form-input">
		</div>
	</div>

	
	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="hidden" value="" name="custentity_kd_custom_pswd" id="custentity_kd_custom_pswd" class="login-register-register-form-input">
		</div>
	</div>


	{{#if isRedirect}}
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<div class="login-register-register-form-controls" data-validation="control">
				<input value="true" type="hidden" name="redirect">
			</div>
		</div>
	{{/if}}

	<div data-view="Register.CustomFields"></div>

	<div class="login-register-register-form-controls-group">
		<label class="login-register-register-form-label">
			<input type="checkbox" name="emailsubscribe" id="register-emailsubscribe" value="T" {{#if isEmailSubscribeChecked}} checked {{/if}}>
			{{translate 'Yes, Please sign me up for RFI Technology Solutions exclusive offers and promotions' }} <!-- use $(0) siteName to show the web site name siteName -->
		</label>
	</div>

	<div class="login-register-register-form-messages" data-type="alert-placeholder"></div>
<div class="container-recaptcha">
        <div class="g-recaptcha" data-sitekey="6LcxfMAaAAAAAAYjwX4f5-t45lSkO59RWdUzt31w"></div>
    </div>
	<div class="message-error msg-error-custom" id="register-captcha-label-empty">
				<p>Please prove you're not a robot.</p>
		</div>

{{#unless showFormFieldsOnly}}
	<div class="login-register-register-form-controls-group">
		<button type="submit" class="login-register-register-form-submit">
			{{translate 'Request Account'}}
		</button>
	</div>
</form>
{{/unless}}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 


{{!----
Use the following context variables when customizing this template: 
	
	showCompanyField (Boolean)
	isCompanyFieldRequire (Boolean)
	siteName (String)
	showFormFieldsOnly (Boolean)
	isRedirect (Boolean)
	hasAutoFocus (Boolean)

----}}
