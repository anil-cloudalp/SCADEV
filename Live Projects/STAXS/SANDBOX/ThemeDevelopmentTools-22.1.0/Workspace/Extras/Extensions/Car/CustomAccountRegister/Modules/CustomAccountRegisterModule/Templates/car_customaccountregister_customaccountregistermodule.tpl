<div class="request-account-container" >

<img class="header-logo-image-login" src="{{getThemeAssetsPathWithDefault logoUrl 'img/logo-staxs.png'}}" alt="{{siteName}}">

<div class="request-account-form-container">
<div class="request-account-form-section">
<h2 class="login-register-login-title"> I have no STAXS account </h2>

<form class="login-register-register-form" method="POST" novalidate>
			<label >
				{{translate 'First Name <small class="star">*</small>'}}
			</label>
	<input type="text" name="firstname" data-action="firstname"  id="register-firstname" class="custom-register-register-form-input firstname">
  	<div class="frsterr"></div>
	  			
	<label >	{{translate 'Last Name <small class="star">*</small>'}} </label>
	<input type="text" name="lastname" data-action="lastname" id="register-lastname" class="custom-register-register-form-input lastname" >
	<div class="lsterr"></div>

	<label >	{{translate 'Company Name <small class="star">*</small>'}} </label>
	<input type="text" name="companyname" data-action="companyname" id="register-companyname" class="custom-register-register-form-input companyname" placeholder="{{translate 'Ex: Your company name'}}">
	<div class="companyerr"></div>

  			<label class="login-register-login-form-label" for="login-email">
				{{translate 'My email address is <small class="star">*</small>'}}
			</label>
		<div class="login-register-login-form-controls" data-validation="control">
	<input data-action="enteremail" name="email" type="email" id="register-email" class="custom-register-register-form-input email" placeholder="{{translate 'Your email address'}}">
		</div>
	<div class="status-msg"></div>
	<div class="login-register-register-form-controls-group">
		<button type="submit" data-action="senddata"  class="custom-register-register-form-submit submit-btn">
			{{translate 'Request Account'}}
		</button>
	</div>
</form>
		<a href="/login-register" class="back-to-login" data-target=".register" data-action="sign-in-now">
			{{translate 'Back'}}
		</a>
<div>
<div>

</div>
<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->