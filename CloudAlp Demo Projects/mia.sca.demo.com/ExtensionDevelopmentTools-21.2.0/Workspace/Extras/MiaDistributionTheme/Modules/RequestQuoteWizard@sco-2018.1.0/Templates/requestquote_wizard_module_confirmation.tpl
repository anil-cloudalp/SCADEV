<div class="requestquote-wizard-module-confirmation">
	<h2 class="requestquote-wizard-module-confirmation-title">{{translate 'Thank you!'}}</h2>
	<p class="requestquote-wizard-module-confirmation-body">
		{{#if isOpportunity}}
		{{translate 'Your Opportunity Request <a href="/opportunities/$(0)">#$(1)</a> was successfully placed.' quoteId quoteTranId}}
		{{else}}
		{{translate 'Your Quote Request <a href="/quotes/$(0)">#$(1)</a> was successfully placed.' quoteId quoteTranId}}
		{{/if}}
	</p>
	{{#unless isOpportunity}}
		<p class="requestquote-wizard-module-confirmation-body">
			{{translate contactBusinessDaysMessage}}
		</p>
	{{/unless}}
	<p class="requestquote-wizard-module-confirmation-body">
		{{#if hasSalesrep}}
			{{translate 'For immediate assistance call us at <strong>$(0)</strong> or email us at <a href="mailto:$(1)">$(1)</a>' salesrepPhone salesrepEmail}}
		{{else}}
			{{{disclaimer}}}
		{{/if}}
	</p>
	{{#if isOpportunity}}
	<a class="requestquote-wizard-module-confirmation-new-quote" href="/request-an-opportunity">{{translate 'Request a new Opportunity'}}</a>
	<a class="requestquote-wizard-module-confirmation-continue" href="/opportunities">{{translate 'See Your Opportunities'}}</a>
	{{else}}
	<a class="requestquote-wizard-module-confirmation-new-quote" href="/request-a-quote">{{translate 'Request a new Quote'}}</a>
	<a class="requestquote-wizard-module-confirmation-continue" href="/quotes">{{translate 'See Your Quotes'}}</a>
	{{/if}}
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
