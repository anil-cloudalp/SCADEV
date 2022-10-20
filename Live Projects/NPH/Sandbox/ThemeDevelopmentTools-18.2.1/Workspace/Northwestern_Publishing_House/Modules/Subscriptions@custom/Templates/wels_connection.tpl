<section class="subscription-content wels-connection-container">
	{{#if records}}
	<header>
	<h1>{{#if isKidsConnection}}KID'S Connection{{else}}WELS Connection{{/if}}</h1>
	</header>
	<div class="wels-connection-row">
		
		{{#each records}}
			<div class="wels-connection">
				<div class="image-container"><img src="{{imageUrl}}" alt="{{title}}"></div>
				<div class="text-container">
					<h2>{{date}}</h2>
					<h5>{{title}}</h5>
					<p>
						{{description}}
					</p>
					<div class="btn-container">
						<a href="{{download_link}}">Download File</a>
						<a href="{{download_cc_link}}">Download CC File</a>
					</div>
				</div>
				
			</div>
		{{/each}}
	</div>
	<div data-view="GlobalViews.Pagination"></div>
	{{/if}}
	{{#unless haveSubscription}}
	<h2> No subscriptions Available</h2>
	{{/unless}}
	
</section>