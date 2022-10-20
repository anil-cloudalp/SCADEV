<section class="login-register-forgot-password">

	<div class="login-register-forgot-password-body">

		<form class="login-register-forgot-password-form" novalidate>
			<p class="login-register-forgot-password-description">
				{{translate 'Please enter your email address. You will receive a link to create a new password via email.'}}
			</p>

			<fieldset>

				<div class="login-register-forgot-password-form-controls-group" data-validation="control-group">
					<label class="login-register-forgot-password-form-label" for="email">
						{{translate 'Email Address <small class="login-register-forgot-password-form-required">*</small>'}}
					</label>
					<div class="login-register-forgot-password-form-controls" data-validation="control">
						<input type="email" name="email" id="email" class="login-register-forgot-password-form-input">
					</div>
				</div>

				<div data-type="alert-placeholder"></div>

				<div class="login-register-forgot-password-form-controls-group align-right">
					<button type="submit" class="login-register-forgot-password-submit">
						{{translate 'Get New Password'}}
					</button>

				</div>

			</fieldset>
		</form>
		<div class="forget-password">
			<a href="/login-register" class="login-register-forgot-password-sign-in" data-target=".register" data-action="sign-in-now">
				{{translate 'Log in'}}
			</a>
		</div>
		{{#unless isChannelUc}}
		<div class="back-to-home">
		<a data-touchpoint="home" href="/" data-hashtag="#">
				{{translate '
		← Back to Mia Telecomms'}}
			</a>
		</div>
		{{/unless}}
	</div>
</section>



{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
