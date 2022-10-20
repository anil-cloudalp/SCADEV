<script src="https://www.google.com/recaptcha/api.js"></script>


<form class="login-register-login-form" novalidate>
	<fieldset class="login-register-login-form-fieldset">
		<div class="login-register-login-form-controls-group" data-validation="control-group">
	
			<div class="login-register-login-form-controls" data-validation="control">
				<input {{#if hasAutoFocus}} autofocus {{/if}} type="email" name="email" id="login-email" class="login-register-login-form-input" placeholder="{{translate '* Email Address.'}}"/>
			</div>
		</div>

		<div class="login-register-login-form-controls-group" data-validation="control-group">
		
			<div class="login-register-login-form-controls" data-validation="control">
				<input type="password" name="password" id="login-password" placeholder="{{translate '* Password.'}}"class="login-register-login-form-input">
			</div>
		</div>

		<div data-view="Login.CustomFields"></div>

		{{#if isRedirect}}
			<div class="login-register-login-form-controls-group" data-validation="control-group">
				<div class="login-register-login-form-controls" data-validation="control">
					<input value="true" type="hidden" name="redirect">
				</div>
			</div>
		{{/if}}

		<div data-type="alert-placeholder" class="login-register-login-form-messages">
			{{#if isUserSessionTimedOut}}
				<div data-view="GlobalMessageSessionTimeout"></div>
			{{/if}}
		</div>
	<div class="container-recaptcha">
        <div class="g-recaptcha" id="recaptcha-anchor" data-sitekey="6LenamkdAAAAAE1NIpZxlxt-PM-pWGcAC8b6TxrX"></div>
    </div>
	 <div id="alert-placeholder" >
		<p class="alert-type" data-id="alert-type" ></p>
		</div>
		<div class="login-register-login-form-controls-group login-button1 desktop-site" data-type="form-login-action">
             <div class="login-eff-1"></div>
			<button type="submit" class="login-register-login-submit anchor-1" data-action="login-button">
				{{translate 'Submit'}}
			</button>
        
		</div>
        
		<div class="login-register-login-form-controls-group login-button2 mobile-site" data-type="form-login-action">
             <div class="login-eff-2"></div>
			<button type="submit" class="login-register-login-submit anchor-2" data-action="login-button">
				{{translate 'Login'}}
			</button>
         
		</div>

		
        
            
	</fieldset>
</form>




{{!----
Use the following context variables when customizing this template: 
	
	isRedirect (Boolean)
	hasAutoFocus (Boolean)
	isUserSessionTimedOut (Boolean)
	isSkipLogin (Boolean)

----}}