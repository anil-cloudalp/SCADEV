{{#if showTitle}}
	<a class="{{#if hasClass}} {{className}} {{else}}manageorder-accesspoints-headerlink-link{{/if}}" href="/manage-orders" data-hashtag="#/manage-orders" data-touchpoint="home" title="{{translate 'Manage My Order'}}">
		{{translate linkText}}
	</a>
{{/if}}


{{!----
Use the following context variables when customizing this template:

	hasClass (Boolean)
	cartTouchPoint (String)
	className (String)

----}}
