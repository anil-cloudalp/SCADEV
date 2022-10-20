<section class="subscription-content">
	{{#if haveSubscription}}
	<header>
	<h1>Digital Forward in Christ</h1>
	</header>
	<div class="subscription-calender-row1">
	
		
		<div class="calender-year">
			<span id="prev-yr"></span>
			<span id="calender-year"></span>
			<span id="next-yr"></span>
		</div>
		<div class="calender-month">
			<span id="prev-mo"></span>
			<span id="calender-month"></span>
			<span id="next-mo"></span>
		</div>
	</div>
	<div class="subscription-calender-row2">
		<div id="calender-dates"></div>
	</div>
	<div id="efic-subscriptions"></div>
	{{else}}
		<h2> No subscriptions Available</h2>
	{{/if}}
</section>