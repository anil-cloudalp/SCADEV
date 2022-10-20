
	<div class="quantity-pricing {{#unless showContent}}quantity-pricing-hidden{{/unless}}">
		<div class="quantity-pricing-container">
			<div class="quantity-pricing-expander-body collapse in" data-nonprefix='true' id="expander-body-container-{{itemKey}}" aria-expanded="true">
				<!-- content -->
				<div class="quantity-pricing-expander-body-container">
					{{#each priceSchedule}}
					<div>
						
							{{#if maximumquantity}}
								Buy {{minimumquantity}} - {{maximumquantity}}
								{{#if is_range}}
									 for <b>{{price_range.min_formatted}} - {{price_range.max_formatted}}</b> each
								{{else}}
									 for <b>{{price_formatted}}</b> each
								{{/if}}
							{{else}}
								Buy {{minimumquantity}} +
								{{#if is_range}}
									 for <b>{{price_range.min_formatted}} - {{price_range.max_formatted}}</b> each
								{{else}}
									 for <b>{{price_formatted}}</b> each
								{{/if}}
							{{/if}}
							{{#ifEquals discount 0}}
							
							{{else}}
							 and <b>save {{discount}}%</b>
							{{/ifEquals}}
					</div>
					{{/each}}
				</div>
				<!-- /content -->
			</div>
		</div>
	</div>




{{!----
Use the following context variables when customizing this template:

	isAccordion (Boolean)
	showContent (Boolean)
	priceSchedule (Boolean)
	isOpen (Boolean)
	itemKey (String)

----}}
