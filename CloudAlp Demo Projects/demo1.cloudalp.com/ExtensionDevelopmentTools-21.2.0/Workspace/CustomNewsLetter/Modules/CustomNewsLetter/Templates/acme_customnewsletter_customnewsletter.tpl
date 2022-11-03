<form class="newsletter-suscription-form" data-action="newsletter-subscribe" novalidate>

	<div data-validation="control-group">

		<h5 class="newsletter-subscription-form-label" for="login-email">{{translate 'Sign Up for Our Newsletter'}}</h5>

		<div class="newsletter-subscription-form-container {{#if showErrorMessage}}error{{/if}}" data-validation="control">
			<input
				name="email"
				id="email"
				type="email"
				class="newsletter-suscription-form-input"
				placeholder="{{translate 'username@domain.com'}}"
			>

			<button type="submit" class="newsletter-subscription-form-button-subscribe">
				{{translate 'Subscribe'}}
			</button>

			<div class="newsletter-alert-placeholder" data-type="alert-placeholder" >
          {{#if isFeedback}}
          <div data-view="GlobalMessageFeedback"></div>
          {{/if}}
			</div>

		</div>

	</div>
  
</form>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->