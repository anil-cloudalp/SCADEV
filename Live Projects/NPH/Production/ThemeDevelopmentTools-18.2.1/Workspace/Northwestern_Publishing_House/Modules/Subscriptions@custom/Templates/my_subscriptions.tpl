<section class="subscription-content">
	<header>
	<h1>My Subscriptions</h1>
	</header>
	<div class="subscription-content-manage">
		<button><a href="https://online.nph.net/subscriptions">Subscribe</a></button> <button><a href="https://online.nph.net/manage-my-subscription">Manage Subscription</a></button>
	</div>
	<div class="subscription-content-links">
		{{#if exp_dates}}
			{{#if exp_dates.emed_expire}}
				<p><a href="/daily-meditations">Daily Meditations Devotions Online</a> (expires {{exp_dates.emed_expire}})</p>
			{{/if}}
			{{#if exp_dates.efic_expire}}
				<p><a href="/digital-forward-in-christ">Digital Forward in Christ</a> (expires {{exp_dates.efic_expire}})</p>
			{{/if}}
			{{#if exp_dates.wc_expire}}
				<p><a href="/wels-connection-detail">WELS Connection</a> (expires {{exp_dates.wc_expire}})</p>
			{{/if}}
			{{#if exp_dates.kc_expire}}
				<p><a href="/kids-connection">Kid’s Connection</a> (expires {{exp_dates.kc_expire}})</p>
			{{/if}}
			{{#ifEquals exp_dates.bsw_expire 'T'}}
				<p><a href="/bsw-subscription">Bible Study Workshop</a></p>
			{{/ifEquals}}
		{{else}}
		<h2>No Active Subscriptions Available</h2>
		{{/if}}
	</div>
</section>