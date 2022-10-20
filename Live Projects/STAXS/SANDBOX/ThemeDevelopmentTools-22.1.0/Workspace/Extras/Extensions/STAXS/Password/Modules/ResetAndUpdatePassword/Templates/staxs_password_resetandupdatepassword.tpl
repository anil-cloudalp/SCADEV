{{#if profile}}
<div class="update-password-container">

	<div class="password-form-container">
		<div class="update-password">
			<form class="resetandupdatepassword-reset-password-form reset-password-myaccount" method="POST"
				name="contact-form">
				<h2 class="resetandupdatepassword-forgot-password-title"> Update Password </h2>
				<div class="remove-comments">
					<label class="resetandupdatepassword-reset-password-comments-label" for="comments">
						{{translate 'Comments'}}
						<small class="resetandupdatepassword-reset-password-form-required">*</small>
					</label>
					<textarea id="comments" class="resetandupdatepassword-reset-password-group-text" name="comments">
</textarea>
				</div>
				<div class="status-email-msg"></div>
				<div class="resetandupdatepassword-reset-password-form-actions">
					<button type="submit" data-action="submit-reset-password-myaccount"
						class="resetandupdatepassword-actions-button-submit">{{translate ' Send Email '}}</button>
				</div>
			</form>
		</div>

	</div>
</div>

{{else}}

<div class="reset-password-container bg-cover">
	<img class="header-logo-image-login" src="{{getThemeAssetsPathWithDefault logoUrl 'img/logo-staxs.png'}}"
		alt="{{siteName}}">

	<div class="password-form-container">
		<div class="resetandupdatepassword-reset-password">
			<h2 class="resetandupdatepassword-forgot-password-title"> Forgot Password </h2>
			<form class="resetandupdatepassword-reset-password-form" method="POST" name="contact-form">    
				    {{!-- <div class="resetandupdatepassword-reset-password-row" data-input="firstname" data-validation="control-group">
                    <label class="resetandupdatepassword-reset-password-firstname-label" for="customerId">
                            {{translate 'CustomerId'}}
				                            <small class="resetandupdatepassword-reset-password-form-required">*</small>
				                    </label>
				                    <input type="text"  class="resetandupdatepassword-reset-password-input-large"
					 data-action="customerId" id="customerId" name="customerId"  value="{{customerId}}">
				                        <p class="error-msg-customerId"></p>
				       
		</div> --}}
		 
		    <div class="resetandupdatepassword-reset-password-row" data-input="email" data-validation="control-group">
			                    <label class="resetandupdatepassword-reset-password-email-label" for="email">
				                            {{translate 'Email'}}
				                            <small class="resetandupdatepassword-reset-password-form-required">*</small>
				                    </label>
			                    <input type="email" data-action="enteremail"
				class="resetandupdatepassword-reset-password-input-large" id="email" placeholder="Your email address"
				name="email" data-type="email" value="{{email}}">
			                            <p class="error-msg-email"></p>
			        </div>
		  <div class="status-email-msg"></div>
		    <div class="resetandupdatepassword-reset-password-form-actions">
			            <button type="submit" data-action="submit-reset-password"
				class="resetandupdatepassword-actions-button-submit">{{translate ' Send Email '}}</button>
			        </div>
		</form>
		<a href="/login-register" class="login-register-forgot-password-sign-in" data-target=".register"
			data-action="sign-in-now"> Log in now </a>

	</div>
	   
</div>
</div>

{{/if}}
<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->