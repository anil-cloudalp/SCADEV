{{#if showBackToAccount}}
	<a href="/" class="quote-list-button-back">
	<i class="quote-list-button-back-icon"></i>
		{{translate 'Back to Account'}}
	</a>
{{/if}}

<section class="quote-list">
	<header class="quote-list-header">
		<h2>{{pageHeader}}</h2>
	</header>
	<div data-view="List.Header"></div>
	<div class="quote-list-results-container">
		{{#if collectionLength}}

			<table class="quote-list-quotes-table">
				<thead class="quote-list-content-table">
					<tr class="quote-list-content-table-header-row">
						<th class="quote-list-content-table-header-row-title">
							<span>{{#if isOpportunity}}{{translate 'Opportunity No.'}}{{else}}{{translate 'Quote No.'}}{{/if}}</span>
						</th>
						<th class="quote-list-content-table-header-row-request-date">
							<span>{{translate 'Request date'}}</span>
						</th>
						
						<th class="quote-list-content-table-header-row-currency">
							<span>{{translate 'Amount'}}</span>
						</th>
						{{#unless isOpportunity}}
							<th class="quote-list-content-table-header-row-expiration-date">
								<span>{{translate 'Expiration date'}}</span>
							</th>
						{{/unless}}
						<th class="quote-list-content-table-header-row-status">
							<span>{{translate 'Status'}}</span>
						</th>
					</tr>
				</thead>
				<tbody data-view="Quote.List.Items"></tbody>
			</table>

		{{else}}
			{{#if isLoading}}
				<p class="quote-list-empty">{{translate 'Loading...'}}</p>
			{{else}}
				<div class="quote-list-empty-section">
					<h5>{{#if isOpportunity}} {{translate 'No opportunity are found'}} {{else}}{{translate 'No quotes were found'}}{{/if}}</h5>
				</div>
			{{/if}}
		{{/if}}
	</div>
</section>


{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
