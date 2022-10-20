{{!-- Edited for Threads Theme --}}

{{#if currentPageLowerThanTotalPagesAndCurrentPageGreaterThan0AndPagesCountGreaterThan1}}
	<nav class="global-views-pagination">
		<ul
			class="global-views-pagination-links {{#if showPaginationLinksCompactClass}} global-views-pagination-links-compact {{/if}}">

			{{!-- <div class="restOfDev">
				{{#each restOfPrev}}
					<li class="global-views-pagination-prev-number">
						<a href="{{url}}">{{id}}</a>
					</li>
				{{/each}}
				{{#if restOfPrev}}
					<li>
						<i class="global-views-pagination-restprev-icon"></i>
						<div class="vertical-line"></div>
					</li>
				{{/if}}

			</div> --}}


			<div class="pagenation-main">
				{{#if isCurrentPageDifferentThan1}}
					<li class="global-views-pagination-prev">
						<a href="{{previousPageURL}}" class="global-views-pagination-previous-link">
							<i class="global-views-pagination-prev-icon"></i>
							Previous
						</a>
					</li>
				{{else}}
					<li class="global-views-pagination-prev-disabled">
						<a href="{{currentPageURL}}" class="global-views-pagination-previous-link">
							<i class="global-views-pagination-prev-icon"></i>
							Previous
						</a>
					</li>
				{{/if}}

				{{#if showPageIndicator}}
					<p class="global-views-pagination-count">{{translate 'Page $(0) of $(1)' currentPage totalPages}} </p>
				{{/if}}

				{{#if showPageList}}
					{{#if isRangeStartGreaterThan1}}
						<li class="global-views-pagination-disabled">
							<a href="{{currentPageURL}}">...</a>
						</li>
					{{/if}}

					{{#each pages}}
						{{#if isCurrentPageActivePage}}
							<li class="global-views-pagination-links-number">
								<a class="global-views-pagination-active" href="{{fixedURL}}">{{pageIndex}}</a>
							</li>
						{{else}}
							<li class="global-views-pagination-links-number">
								<a href="{{URL}}">{{pageIndex}}</a>
							</li>
						{{/if}}
					{{/each}}

					{{#if isRangeEndLowerThanTotalPages}}
						<li class="global-views-pagination-disabled">
							<a href="{{currentPageURL}}">...</a>
						</li>
					{{/if}}

				{{/if}}

				{{#if isCurrentPageLast}}
					<li class="global-views-pagination-next-disabled">
						<a href="{{currentPageURL}}" class="global-views-pagination-next-link">
							<i class="global-views-pagination-next-icon"></i>
							Next
						</a>
					</li>
				{{else}}
					<li class="global-views-pagination-next">
						<a href="{{nextPageURL}}" class="global-views-pagination-next-link">
							Next
							<i class="global-views-pagination-next-icon"></i>
						</a>
					</li>
				{{/if}}
			</div>

			{{!-- <div class="nextOfDev">
		{{#if restOfNext}}
			<li>
				<i class="global-views-pagination-restnext-icon">
						<div class="vertical-line-right"></div>
				</i>
			</li>
			{{/if}}

		{{#each restOfNext}}
		<li class="global-views-pagination-next-number">
			<a href="{{url}}">{{id}}</a>
		</li>
		{{/each}}
	</div> --}}

		</ul>


		{{!-- {{#if showPageIndicator}}
	<p class="global-views-pagination-count">{{translate '$(0) of $(1)' currentPage totalPages}}</p>
	{{/if}} --}}
	</nav>
{{/if}}



{{!----
Use the following context variables when customizing this template:

currentPageLowerThanTotalPagesAndCurrentPageGreaterThan0AndPagesCountGreaterThan1 (Boolean)
showPageIndicator (Boolean)
paginatorClass (String)
currentPage (Number)
totalPages (Number)
isCurrentPageDifferentThan1 (Boolean)
currentPageURL (String)
previousPageURL (String)
nextPageURL (String)
showPageList (Boolean)
showPaginationLinksCompactClass (Boolean)
isRangeStartGreaterThan1 (Boolean)
isRangeEndLowerThanTotalPages (Boolean)
isCurrentPageLast (Boolean)
pages (Array)

----}}
