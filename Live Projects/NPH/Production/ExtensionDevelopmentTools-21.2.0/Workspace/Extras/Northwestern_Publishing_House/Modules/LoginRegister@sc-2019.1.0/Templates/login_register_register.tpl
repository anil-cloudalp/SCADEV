{{#if isRegister}}
{{#unless showFormFieldsOnly}}
<h1 class="login-register-title"> {{translate 'Create An Account'}}</h1>

<form class="login-register-register-form" method="POST" novalidate>

{{/unless}}
	<fieldset>
		<legend>Login Information</legend>
		<p class="sign-in-help">Already have an account? <a href="/login-register">Sign In</a></p>
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label">
				{{translate 'Email <small class="login-register-register-form-required">*</small>'}}
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="email" name="email" id="register-email" class="login-register-register-form-input">
			</div>
		</div>
		<div class="row">
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<label class="login-register-register-form-label" for="register-password">
					{{translate 'Password<small class="login-register-register-form-required">*</small>'}}
				</label>
				<div class="login-register-register-form-controls" data-validation="control">
					<input type="password" name="password" id="register-password" class="login-register-register-form-input">
				</div>
			</div>

			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<label class="login-register-register-form-label" for="register-password2">
					{{translate 'Confirm Password<small class="login-register-register-form-required">*</small>'}}
				</label>
				<div class="login-register-register-form-controls" data-validation="control">
					<input type="password" name="password2" id="register-password2" class="login-register-register-form-input">
				</div>
			</div>
		</div>
	</fieldset>
	<fieldset>
		<legend>Account Information</legend>
		<div class="hidden-fields">
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="paidforbyvalue" class="login-register-register-form-input"/>
				</div>
			</div>
		</div>
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label">
				{{translate 'Purchases Will Be<small class="login-register-register-form-required">*</small>'}}
			</label>
			<div class="login-register-register-form-controls radio-btns" data-validation="control">
				<label><input type="radio" name="paidforby" value="1"> Paid for with my personal funds</label><br/>
				<label><input type="radio" name="paidforby" value="2"> Reimbursed by an organization or other business</label>
			</div>
		</div>
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label">
				{{translate 'Title'}}
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="paidfortitle" class="login-register-register-form-input" placeholder="Mr./Mrs./Rev.">
			</div>
		</div>
		<div class="login-register-register-conditional-inputs-1">
			
			<div class="row">
				<div class="login-register-register-form-controls-group" data-validation="control-group">
					<label class="login-register-register-form-label">
						{{translate 'First Name<small class="login-register-register-form-required">*</small>'}}
					</label>
					<div class="login-register-register-form-controls" data-validation="control">
						<input type="text" name="firstname" id="register-firstname"  class="login-register-register-form-input">
					</div>
				</div>
				<div class="login-register-register-form-controls-group" data-validation="control-group">
					<label class="login-register-register-form-label">
						{{translate 'Last Name<small class="login-register-register-form-required">*</small>'}}
					</label>
					<div class="login-register-register-form-controls" data-validation="control">
						<input type="text" name="lastname" id="register-lastname" class="login-register-register-form-input">
					</div>
				</div>
			</div>
		</div>
		<div class="login-register-register-conditional-inputs-2">
			
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<label class="login-register-register-form-label">
					{{translate 'Organization'}}
				</label>
				<div class="login-register-register-form-controls" data-validation="control">
					<input type="text" name="paidfororganization" class="login-register-register-form-input largeinput">
				</div>
			</div>
			<div class="row">
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<label class="login-register-register-form-label">
					{{translate 'Organization City<small class="login-register-register-form-required">*</small>'}}
				</label>
				<div class="login-register-register-form-controls" data-validation="control">
					<input type="text" name="paidforcity" class="login-register-register-form-input">
				</div>
			</div>
			
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<label class="login-register-register-form-label">
					{{translate 'Organization State<small class="login-register-register-form-required">*</small>'}}
				</label>
				<div class="login-register-register-form-controls" data-validation="control">
					<input type="text" name="paidforstate" class="login-register-register-form-input">
				</div>
			</div>
			</div>
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<label class="login-register-register-form-label">
					{{translate 'Organization Type<small class="login-register-register-form-required">*</small>'}}
				</label>
				<div class="login-register-register-form-controls" data-validation="control">
				<select id="register-category" name="category" class="login-register-register-form-input largeinput">
					<option value="">-- Select --</option>
					{{#if selectOpt}}
						{{#each selectOpt.orgTypeArr}}
							<option value="{{id}}">{{name}}</option>
						{{/each}}
					{{/if}}
				</select>
				</div>
			</div>
		</div>
		<div class="row">
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label">
				{{translate 'I Am A<small class="login-register-register-form-required">*</small>'}}
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<select id="register-customertype" name="customertype" class="login-register-register-form-input">
				
				<option value="">-- Select --</option>
				{{#if selectOpt}}
					{{#each selectOpt.custTypeArr}}
						<option value="{{id}}">{{name}}</option>
					{{/each}}
				{{/if}}
				</select>
			</div>
		</div>
		
		<div class="login-register-register-form-controls-group attention_field" data-validation="control-group">
			<label class="login-register-register-form-label">
				{{translate 'Attention'}}
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="attention" id="register-attention" class="login-register-register-form-input">
			</div>
		</div>
		</div>
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label">
				{{translate 'Address<small class="login-register-register-form-required">*</small>'}}
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="addr" id="register-addr" class="login-register-register-form-input largeinput">
			</div>
		</div>
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="address2" id="register-address2" class="login-register-register-form-input largeinput">
			</div>
		</div>
		<div class="row">
		<div class="login-register-register-form-controls-group" data-validation="control-group" data-view="CountriesDropdown"></div>
		<div class="hidden-fields">
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="statevalue" class="login-register-register-form-input"/>
				</div>
			</div>
		</div>
		<div class="login-register-register-form-controls-group" data-validation="control-group" data-view="StatesView">
		</div>
		</div>
		<div class="row">
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label">
				{{translate 'City<small class="login-register-register-form-required">*</small>'}}
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="city" id="register-city" class="login-register-register-form-input">
			</div>
		</div>
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label">
				{{translate 'Zip/Postal Code<small class="login-register-register-form-required zip_code_star">*</small>'}}
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="zipcode" id="register-zipcode" class="login-register-register-form-input">
			</div>
		</div>
		
		</div>
		</div>
		<div class="row">
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label">
				{{translate 'Telephone<small class="login-register-register-form-required">*</small>'}}
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="tel" name="phone" id="register-phone" class="login-register-register-form-input">
			</div>
		</div>
		</div>
		{{#if showCompanyField}}
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<label class="login-register-register-form-label" for="register-company">
					{{#if isCompanyFieldRequire}}
						{{translate 'Company <small class="login-register-register-form-required">*</small>'}}
					{{else}}
						{{translate 'Company'}} <small class="login-register-register-form-optional">{{translate '(optional)'}}</small>
					{{/if}}
				</label>
				<div class="login-register-register-form-controls" data-validation="control">
					<input type="text" name="company" id="register-company" class="login-register-register-form-input"/>
				</div>
			</div>
		{{/if}}

		

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
				Sign up to receive emails and promotions
			</label>
		</div>
		<p class="login-register-register-form-help-text">If you are a tax exempt organization, provide us with your tax exempt certificate and we will update your account to reflect a tax exempt status. Please email your certificate to <a href="mailto:tax.exempt@nph.wels.net">tax.exempt@nph.wels.net</a>, or <a href="/contact-us" data-hashtag="#contact-us" data-touchpoint="home" target="_blank">mail</a> to the attention of accounting.</p>
		
		<div class="hidden-fields">
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="captcha_val" class="login-register-register-form-input"/>
				</div>
			</div>
		</div>
		<div id="captcha">
			<div class="login-register-register-form-controls-group" data-validation="control-group">
				<label class="login-register-register-form-label">
					{{translate 'Please type the characters below<small class="login-register-register-form-required">*</small>'}}
				</label>
				<div class="login-register-register-form-controls" data-validation="control">
					<input type="text" name="captcha_text" class="user-text login-register-register-form-input">
				</div>
			</div>
			
		</div>
	</fieldset>
	<div class="devider"></div>
	
	
	<div class="login-register-register-form-messages" data-type="alert-placeholder"></div>
{{#unless showFormFieldsOnly}}
	<div class="row">
		<a class="login-register-sign-in" href="/login-register">
				{{translate '« Back'}}
		</a>
		<div class="login-register-register-form-controls-group submit-btn">
			
			<button type="submit" class="login-register-register-form-submit">
				{{translate 'Submit'}}
			</button>
			<small class="login-register-login-required">{{translate '* Required Fields'}}</small>
		</div>
	</div>
</form>
{{/unless}}

{{else}}
	<div class="login-register-custom">
	<p>By creating an NPH account, you will enjoy the following benefits:</p>
	<ul>
	<li>Streamlined checkout</li>
	<li>Account appropriate pricing</li>
	<li>Account history & details</li>
	<li>Tax exempt status, if applicable</li>
	<li>Access your purchased digital subscription content</li>
	</ul>
	<div class="login-register-btn"><a href="/register">Create an Account</a></div>
	<!-- <h2 class="login-register-title-register">Existing NPH Customers</h2>
	<p>For your convenience, NPH no longer requires a numeric account number to login to an account. Instead, a username and password will be used. Please register on our new site by transitioning your NPH account number to a username and password, and you will receive the benefits highlighted above.</p>
	<div class="login-register-btn"><a href="/customer-migration" data-hashtag="#customer-migration" data-touchpoint="home">Register</a></div> -->
	</div>
{{/if}}


{{!----
Use the following context variables when customizing this template: 
	
	showCompanyField (Boolean)
	isCompanyFieldRequire (Boolean)
	siteName (String)
	showFormFieldsOnly (Boolean)
	isRedirect (Boolean)
	hasAutoFocus (Boolean)

----}}
