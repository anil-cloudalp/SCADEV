<div class="global-views-message {{type}} alert" role="alert">
	<div>
		{{#if showStringMessage}}
			{{#if showMultipleMessage}}
				<ul>
				{{#each messages}}
					<li>{{{this}}}</li>
				{{/each}}
				<ul>
			{{else}}
				{{#if hasErrorCode}}
					{{{message}}}<span class="alert-error-code">{{translate 'CODE'}}: {{errorCode}}</span>
				{{else}}
					{{{message}}}
				{{/if}}
			{{/if}}
		{{else}}
			<div data-view="global-views-message-childview-message"></div>
		{{/if}}
	</div>
	{{#if closable}}
		<button class="global-views-message-button" data-action="close-message" type="button" data-dismiss="alert">&times;</button>
	{{/if}}
</div>
<script>
var url = window.location.href;
if(url.includes('search')){
	$('.global-views-message-button').click(function(){
		$(this).parent().parent().parent().css('display', 'none');
		console.log('click');
		});
}
</script>


{{!----
Use the following context variables when customizing this template:

	message (String)
	closable (Boolean)
	type (String)
	showMultipleMessage (Boolean)
	messages (Array)
	showStringMessage (Boolean)

----}}
