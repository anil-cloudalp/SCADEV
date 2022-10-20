<section class="login-register" >

	<header class="login-register-header">
		{{#if showRegister}}
		<h1 class="login-register-title"> {{translate 'Login Or Create An Account'}}</h1>
		{{else}}
		<h1 class="login-register-title"> {{translate 'Log in'}}</h1>
		{{/if}}
	</header>
	
	{{#if hasDigitalItems}}
		<div class="message message-warning" role="alert">
			<i>* In order to access the subscription or downloadable content you’re purchasing, you will need to have an online account. Please log in or create an account and then proceed to checkout.</i>
		</div>
	{{/if}}

	<div {{#if showRegister}} class="login-register-body" {{else}} class="login-register-body-colored" {{/if}}>

		

		{{#if showRegisterOrGuest}}
			<div class="login-register-wrapper-column-register">
				<div class="login-register-wrapper-register">
					<h2 class="login-register-title-register">{{translate 'New Customers'}}</h2>

					{{#if showCheckoutAsGuest}}
						<div class="login-register-wrapper-guest" data-view="CheckoutAsGuest"></div>
					{{/if}}

					{{#if showRegister}}
						<div class="{{#if showCheckoutAsGuest}}collapse{{/if}} " data-view="Register" id="register-view"></div>
					{{/if}}
				</div>
			</div>
		{{/if}}
		{{#if showLogin}}
			<div class="login-register-wrapper-column-login">
				<div class="login-register-wrapper-login" data-view="Login"></div>
			</div>
		{{/if}}

	</div>
</section>



{{!----
Use the following context variables when customizing this template:

	showRegister (Boolean)
	showCheckoutAsGuest (Boolean)
	showLogin (Boolean)
	showRegisterOrGuest (Boolean)

----}}
