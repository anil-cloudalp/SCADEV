{{!-- Edited for Posh Theme --}}

<nav class="header-menu-secondary-nav">

	<ul class="header-menu-level1">

		{{#each categories}}
			{{#if text}}
				<li {{#if categories}}data-toggle="categories-menu"{{/if}}>
					<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
					{{#if categories}}
					{{#if dontshow}}
					<ul class="header-menu-level-container">
						<li>
							<ul class="header-menu-level2" >
								{{#each categories}}
								<li {{#if categories}}class="categories-menu-arrow"{{/if}}>
									<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
										{{#if categories}}
											<ul class="header-menu-level3">
												{{#each categories}}
												<li>
													<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
												</li>
												{{/each}}
											</ul>
										{{/if}}
								</li>
								{{/each}}
							</ul>
						</li>
					</ul>
					{{/if}}
					{{/if}}
				</li>
			{{/if}}
		{{/each}}
	</ul>
</nav>




{{!----
Use the following context variables when customizing this template:

	categories (Array)
	showExtendedMenu (Boolean)
	showLanguages (Boolean)
	showCurrencies (Boolean)

----}}
