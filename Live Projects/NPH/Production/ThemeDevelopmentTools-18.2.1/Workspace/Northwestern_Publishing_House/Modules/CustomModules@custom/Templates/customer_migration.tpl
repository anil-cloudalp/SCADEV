<div class="customer-migration-form-content">
	<div class="customer-migration-form-container">
	<h1>Existing NPH Customer Registration</h1>
	<form class="customer-migration-form">
	
		<div class="fieldset">
			<div class="legend">Account Form</div>
			<p class="migration-help-text">
			For your convenience, NPH will no longer require a numeric account number to login to an account.
			<br/>
			Instead, a username and password will be used. Please complete the information below to register on our new website.
			</p>
			<div class="row">
				<div class="col-sm-6">
					<label>First Name<span class="required">*</span><a data-toggle="tooltip" title="First and Last name will appear as the contact name for your online account."></a></label>
					<input type="text" id="firstname" class="customer-migration-field" data-label="First Name"/>
				</div>
				<div class="col-sm-6">
					<label>Last Name<span class="required">*</span></label>
					<input type="text" id="lastname" class="customer-migration-field" data-label="Last Name"/>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-6">
					<p class="step-heading">
					<b>Step 1</b>
					Complete as much information below as possible.
					</p>
					<div>
						<label>NPH Account Number<span class="required">*</span><a data-toggle="tooltip" title="Your NPH account number can be found on your EXTRA Rewards card, a receipt, or an invoice from NPH."></a></label>
						<input type="text" id="nph-account-no" class="customer-migration-field" data-label="NPH Account Number"/>
					</div>
					<div>
						<label>Email</label>
						<input type="email" id="email" class="customer-migration-field"/>
					</div>
					<div>
						<label>Zip Code</label>
						<input type="text" id="zipcode" class="customer-migration-field" />
					</div>
				</div>
				<div class="col-sm-6">
					<p class="step-heading">
					<b>Step 2</b>
					Create a username and password for future login.
					</p>
					<div>
						<label>User Name<span class="required">*</span></label>
						<input type="text" id="username" class="customer-migration-field" data-label="User Name"/>
					</div>
					<div>
						<label>Password<span class="required">*</span></label>
						<input type="password" id="password" class="customer-migration-field" data-label="Password"/>
					</div>
					<div>
						<label>Confirm Password<span class="required">*</span></label>
						<input type="password" id="confirm-password" class="customer-migration-field" data-label="Confirm Password"/>
					</div>
				</div>
			</div>
			<p><strong>Need Help?</strong> <a href="/contact-us"> Contact us</a> for assistance, or use the new <a data-touchpoint="login" data-hashtag="login-register" href="#">customer registration</a> form if you don't know the account information.</p>
		</div>
		<div class="required-text">
			<span class="required">*</span> Required Fields
		</div>
		<div class="submit-btn">
			{{#if isResponse}}
				<div id="custom-error-message" {{#if isError}}data-validation-error="block" class="global-views-message global-views-message-error alert"{{else}}class="global-views-message global-views-message-success alert"{{/if}} role="alert">
				{{response}}
				  <span class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true" class="dis-btn">&times;</span>
				  </span>
				</div>
				<br/>
			{{/if}}
			<button id="customer-migration-submit" type="submit">SUBMIT</button>
		</div>
	</form>
	</div>
</div>