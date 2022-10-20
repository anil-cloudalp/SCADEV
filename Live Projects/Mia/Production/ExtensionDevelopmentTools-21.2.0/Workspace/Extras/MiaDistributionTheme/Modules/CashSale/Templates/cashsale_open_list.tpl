{{#if showBackToAccount}}
	<a href="/" class="invoice-open-list-button-back">
		<i class="invoice-open-list-button-back-icon"></i>
		{{translate 'Back to Account'}}
	</a>
{{/if}}

<section class="invoice-open-list">

	{{#if showCashSales}}
		<div data-view="Invoices.Message"></div>
	{{/if}}

	<header class="invoice-open-list-header">
		<h2 class="invoice-open-list-title">{{pageHeader}}</h2>
	</header>

	

	<div data-view="ListHeader"></div>

	<div class="invoice-open-list-body">
		{{#if showCashSales}}

		<table class="invoice-open-list-records">
			<thead class="invoice-open-list-records-head">
			<tr class="invoice-open-list-records-head-row">
				
				<th class="invoice-open-list-records-head-row-invoice-number">{{translate 'Cash Sale No.'}}</th>
				{{#each columns}}
				<th>
					{{label}}
				</th>
				{{/each}}
			</thead>

			<tbody class="invoice-open-list-records-body" data-view="CashSale.Results"></tbody>

		</table>

		{{else}}
		<div class="invoice-open-list-no-records">
			<h5>{{translate 'You don\'t have any Cash Sales at the moment.<br/>'}}</h5>
		</div>
		{{/if}}
	</div>
	{{#if showPagination}}
	<div class="invoice-open-list-paginator">
		<div data-view="GlobalViews.Pagination"></div>
	</div>
	{{/if}}
</section>



{{!----
Use the following context variables when customizing this template:

cashsales (Array)
showCashSales (Boolean)
pageHeader (String)
showMakeAPaymentButton (Boolean)
enableMakeAPaymentButton (Boolean)
showBackToAccount (Boolean)

----}}
