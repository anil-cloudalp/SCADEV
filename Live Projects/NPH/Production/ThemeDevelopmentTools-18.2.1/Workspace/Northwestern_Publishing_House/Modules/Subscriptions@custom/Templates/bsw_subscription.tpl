<section class="subscription-content bsw-subscription">

	{{#if haveSubscription}}
		<header>
		<h1>Bible Study Workshop</h1>
		</header>
		
		<div class="bsw-subscription-filters">
			<button data-sort="title">Sort By Title</button><button data-sort="book">Sort By Book</button><button data-sort="audience">Sort By Audience</button><button data-sort="topic">Sort By Topic</button>
			<input type="text" placeholder="Search" id="filter-input" {{#if filterInput}}value="{{filterInput}}"{{/if}}/><button data-filter="title">Search</button>
		</div>
		<div class="bsw-subscription-row">
			{{#each records}}
				<div class="bsw-subscription-content">
					<h2>{{title}}</h2>
					<p><b>Book of the Bible:</b> {{book}}</p>
					<p><b>Audience:</b> {{audience}}</p>
					<p><b>Topic:</b> {{topic}}</p>
					<div class="btn-container"><a href="{{download_link}}">Download</a></div>
				</div>
			{{else}}
				<h2> No Records Available</h2>
			{{/each}}
		</div>
		<div data-view="GlobalViews.Pagination"></div>
	
	{{else}}
	<h2> No subscriptions Available</h2>
	{{/if}}
	
</section>
