<div class="login-register">

	<header class="login-register-header">
		<img class="header-logo-image-login" src="{{getThemeAssetsPathWithDefault logoUrl 'img/logo-staxs.png'}}"
			alt="{{siteName}}">
	</header>

	<div class="login-register-body">
		<div class="login-register-wrapper-column-login">
			<div class="login-register-wrapper-login">
				<section class="login-reg-login-section">
					<h2 class="login-register-login-title"> I have no STAXS account </h2>

					<form class="login-register-register-form" method="POST" novalidate>
						<label>
							{{translate 'First Name <small class="star">*</small>'}}
						</label>
						<input type="text" name="firstname" data-action="firstname" id="register-firstname"
							class="custom-register-register-form-input firstname">
						<div class="frsterr"></div>

						<label> {{translate 'Last Name <small class="star">*</small>'}} </label>
						<input type="text" name="lastname" data-action="lastname" id="register-lastname"
							class="custom-register-register-form-input lastname">
						<div class="lsterr"></div>

						<label> {{translate 'Company Name <small class="star">*</small>'}} </label>
						<input type="text" name="companyname" data-action="companyname" id="register-companyname"
							class="custom-register-register-form-input companyname"
							placeholder="{{translate 'Ex: Your company name'}}">
						<div class="companyerr"></div>

						<label class="login-register-login-form-label" for="login-email">
							{{translate 'My email address is <small class="star">*</small>'}}
						</label>
						<div class="login-register-login-form-controls" data-validation="control">
							<input data-action="enteremail" name="email" type="email" id="register-email"
								class="custom-register-register-form-input email"
								placeholder="{{translate 'Your email address'}}">
						</div>
						<div class="status-msg"></div>
						<div class="login-register-register-form-controls-group">
							<button type="submit" data-action="senddata"
								class="custom-register-register-form-submit submit-btn">
								{{translate 'Request Account'}}
							</button>
						</div>
					</form>
					<a href="/login-register" class="back-to-login" data-target=".register" data-action="sign-in-now">
						{{translate 'Back'}}
					</a>
				</section>
			</div>
		</div>
	</div>
</div>