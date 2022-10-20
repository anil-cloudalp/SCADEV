{{#if showHome}}
	{{#if showExtendedMenu}}
		<div class = "musician-header-profile-home">
			<a class="header-profile-welcome-link" href="#" data-toggle="dropdown">
				<i class="header-profile-welcome-user-icon"></i>
				{{translate 'Welcome <strong class="header-profile-welcome-link-name">$(0)</strong>' displayName}}
				<i class="header-profile-welcome-carret-icon"></i>
			</a>
			<span class="musician-separator"> | </span>
			<a class="header-profile-login-link back-to-nph-link"  href='/'  data-touchpoint = "home" data-hashtag="#">Back to nph.net</a>
		<div>
			{{#if showMyAccountMenu}}
				<ul class="header-profile-menu-myaccount-container">
					<li data-view="Header.Menu.MyAccount"></li>
				</ul>
			{{/if}}
		</div>
	</div>
{{else}}
			{{#if showLoginMenu}}
			{{#if showLogin}}
				<div class="header-profile-menu-login-container">
					<ul class="header-profile-menu-login">
						<li>
							<a class="header-profile-login-link" data-touchpoint="login" data-hashtag="login-register" href="#">My Account</a>
						</li>
						<li><span class="separator"> | </span></li>
						<li>
							<a class="header-profile-login-link login-link" data-action = "musician-login">
								<!--i class="header-profile-login-icon"></i-->
								Login
							</a>
						</li>
						<li><span class="separator"> | </span></li>
						<li><a class="header-profile-login-link back-to-nph-link"  href='/' data-touchpoint = "home" data-hashtag="#">Back to nph.net</a></li>
					</ul>
				</div>
			{{/if}}
		{{else}}
			<a class="header-profile-loading-link">
				<i class="header-profile-loading-icon"></i>
				<span class="header-profile-loading-indicator"></span>
			</a>
		{{/if}}

	{{/if}}
{{else}}
	{{#if showExtendedMenu}}
		<div class = "musician-header-profile-home">
			<a class="header-profile-welcome-link" href="#" data-toggle="dropdown">
				<i class="header-profile-welcome-user-icon"></i>
				{{translate 'Welcome <strong class="header-profile-welcome-link-name">$(0)</strong>' displayName}}
				<i class="header-profile-welcome-carret-icon"></i>
			</a>
			<span class="musician-separator">  | </span>
			<a class="header-profile-welcome-link musicians-resource-link" data-touchpoint="home" data-hashtag="#/musicians-resource" href="/musicians-resource">Musician's Resource</a>
			<div>
				{{#if showMyAccountMenu}}
					<ul class="header-profile-menu-myaccount-container">
						<li data-view="Header.Menu.MyAccount"></li>
					</ul>
				{{/if}}
			</div>
		</div>
	{{else}}
	{{#if showLoginMenu}}
		{{#if showLogin}}
			<div class="header-profile-menu-login-container">
				<ul class="header-profile-menu-login">
					<li>
						<a class="header-profile-login-link" data-touchpoint="login" data-hashtag="login-register" href="#">My Account</a>
					</li>
					<li><span class="separator"> | </span></li>
					<li>
						<a class="header-profile-login-link" data-touchpoint="login" data-hashtag="login-register" href="#">
							<!--i class="header-profile-login-icon"></i-->
							  Login
						</a>
					</li>
					<li><span class="separator"> | </span></li>
						<li>
							
							<a class="header-profile-login-link musicians-resource-link" data-touchpoint="home" data-hashtag="#/musicians-resource"  href="/musicians-resource">
								Musician's Resource
							</a>
						</li>
					{{!--#if showRegister}}
						<li> | </li>
						<li>
							<a class="header-profile-register-link" data-touchpoint="register" data-hashtag="login-register" href="#">
								{{translate 'Register'}}
							</a>
						</li>
					{{/if--}}
				</ul>
			</div>
		{{/if}}
	{{else}}
		<a class="header-profile-loading-link">
			<i class="header-profile-loading-icon"></i>
			<span class="header-profile-loading-indicator"></span>
		</a>
	{{/if}}

{{/if}}
{{/if}}



{{!----
Use the following context variables when customizing this template:

	showExtendedMenu (Boolean)
	showLoginMenu (Boolean)
	showLoadingMenu (Boolean)
	showMyAccountMenu (Boolean)
	displayName (String)
	showLogin (Boolean)
	showRegister (Boolean)

----}}
