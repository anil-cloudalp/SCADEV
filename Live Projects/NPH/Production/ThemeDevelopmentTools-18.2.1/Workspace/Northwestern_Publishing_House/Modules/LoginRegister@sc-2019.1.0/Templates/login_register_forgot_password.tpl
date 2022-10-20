<section class="login-register-forgot-password">

	<header class="login-register-forgot-password-header">
		<h1 class="login-register-forgot-password-header-title">
			{{translate 'Forgot Your Password?'}}
		</h1>
	</header>

	<div class="login-register-forgot-password-body">
		<form class="login-register-forgot-password-form" novalidate>
			<fieldset>
				<p class="login-register-forgot-password-description">
				{{translate 'Please enter your email address below. An email will be sent with a link to reset your password.'}}
				</p>
				<div class="login-register-forgot-password-form-controls-group" data-validation="control-group">
					<label class="login-register-forgot-password-form-label" for="email">
						{{translate 'Email<small class="login-register-forgot-password-form-required">*</small>'}}
					</label>
					<div class="login-register-forgot-password-form-controls" data-validation="control">
						<input type="email" name="email" id="email" class="login-register-forgot-password-form-input">
					</div>
				</div>
				<p class="login-register-forgot-password-description">Please email <a href="mailto:orders@nph.wels.net">orders@nph.wels.net</a> or call <a href="tel:800-662-6022">800-662-6022</a> for additional assistance.</p>
			</fieldset>
			
			<div data-type="alert-placeholder"></div>
			<div class="row">
			<div class="login-register-forgot-password-form-controls-group submit-btn">
				
				<button type="submit" class="login-register-forgot-password-submit">
					{{translate 'Submit'}}
				</button>
				<small class="login-register-login-required">{{translate '* Required Fields'}}</small>
			</div>
			<a href="/login-register" class="login-register-forgot-password-sign-in" data-target=".register" data-action="sign-in-now">
			<small>« </small>Go back
			</a>
			</div>
		</form>
		
	</div>
</section>



{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
