{{!-- Edited for Posh Theme --}}
<section class="login-reg-login-section">

	{{#if extraLoginRegisterLoginView.loginSubtitle}}
		{{!----<h2 class="login-register-login-title">{{ translate 'LOG IN TO YOUR STAXS' }} {{translate '<sup>&reg</sup>' }} {{translate 'ACCOUNT'}} </h2>----}}
		<h2 class="login-register-login-title">{{{extraLoginRegisterLoginView.loginSubtitle}}}</h2>
	{{/if}}

	{{!----<p class="login-register-login-description">
	{{#unless isSkipLogin}}
	{{translate 'Login below to checkout with an existing account'}}
	{{/unless}}
</p>

<small class="login-register-login-required">{{translate 'Required <span class="login-register-login-form-required">*</span>'}}</small>
----}}
	<form class="login-register-login-form" novalidate>
		<fieldset class="login-register-login-form-fieldset">
			<div class="login-register-login-form-controls-group" data-validation="control-group">
				<label class="login-register-login-form-label" for="login-email">
					{{translate 'My email address is <small class="login-register-login-form-required">*</small>'}}
				</label>
				<div class="login-register-login-form-controls" data-validation="control">
					<input {{#if hasAutoFocus}} autofocus {{/if}} type="email" name="email" id="login-email"
						class="login-register-login-form-input" placeholder="{{translate 'Your email address'}}" />
				</div>
			</div>

			<div class="login-register-login-form-controls-group" data-validation="control-group">
				<label class="login-register-login-form-label" for="login-password">
					{{translate 'My Password '}}
				</label>
				<div class="login-register-login-form-controls" data-validation="control">
					<input type="password" name="password" id="login-password" class="login-register-login-form-input"
						placeholder="{{translate 'My Password'}}">
				</div>
			</div>

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

			<div class="login-register-login-form-controls-group" data-type="form-login-action">

				<button type="submit" class="login-register-login-submit" data-action="login-button">
					{{translate 'LOGIN'}}
				</button>

				<a class="login-register-login-forgot" href="/resetpassword">
					{{translate 'Forgot password?'}}
				</a>
			</div>


			<div class="no-staxs-account">
				{{translate 'NO STAXS '}} <span class="registered-sign"></span>{{translate 'ACCOUNT?'}} <br>
				<a href="/requestaccount" class="no-staxs-click-here"> {{translate 'Click here'}}</a>
				{{ translate 'to make an account request.'}}
			</div>

			<div class="no-staxs-account">
			 {{translate 'DO YOU HAVE A QUESTION? '}} <br>
			 <a href="{{#if ret.contactus}}{{ret.contactus}}{{/if}} " class="no-staxs-click-here">
					{{translate 'Click here'}}</a> {{ translate 'to contact STAXS'}}
					 <span	class="registered-sign"></span>{{ translate '.'}}
		 </div>

		</fieldset>
	</form>


</section>




{{!----
Use the following context variables when customizing this template: 
	
	isRedirect (Boolean)
	hasAutoFocus (Boolean)
	isUserSessionTimedOut (Boolean)
	isSkipLogin (Boolean)

----}}