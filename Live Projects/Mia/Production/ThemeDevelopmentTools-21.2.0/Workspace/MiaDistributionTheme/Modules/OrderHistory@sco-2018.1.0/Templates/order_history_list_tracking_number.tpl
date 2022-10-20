{{#if isTrackingNumberCollectionEmpty}}
	{{#if showContentOnEmpty}}
		<span class="order-history-list-tracking-number-not-available-label">{{translate 'Tracking Number:'}}</span>
		<span class="order-history-list-tracking-number-not-available {{contentClass}}">
			{{translate 'N/A'}}
		</span>
	{{/if}}
{{else}}
	{{#if isTrackingNumberCollectionLengthEqual1}}
		{{#if showTrackPackagesLabel}}
			<span class="order-history-list-tracking-number-label">
				{{translate 'Tracking'}}:
			</span>
		{{/if}}
			<span class="order-history-list-tracking-number-available-label">{{translate 'Tracking Number:'}} </span>
		{{#if firstTrackingNumberName}}
			<a  class="order-history-list-tracking-number-control-numbers-link" data-action="tracking-number">{{firstTrackingNumberName}} {{firstTrackingNumberText}}</a>
		{{else}}
			<a  class="order-history-list-tracking-number-control-numbers-link" data-action="tracking-number">{{firstTrackingNumberText}}</a>
		{{/if}}
	{{else}}
		<div class="order-history-list-tracking-number-control">
			<button class="order-history-list-tracking-number-control-button"  data-toggle="dropdown">
				{{translate 'Track Packages'}}
				<i class="order-history-list-tracking-number-control-toggle-icon"></i>
			</button>
			<div class="order-history-list-tracking-number-control-numbers {{#if collapseElements}}collapsed{{/if}}">
				<ul>
				{{#each trackingNumbers}}
					<li>
						<a  class="order-history-list-tracking-number-control-numbers-link" data-action="tracking-number">{{trackingNumber}}</a>
						{{serviceName}}
					</li>
				{{/each}}
				</ul>
			</div>
		</div>
	{{/if}}
{{/if}}



{{!----
Use the following context variables when customizing this template:

	isTrackingNumberCollectionEmpty (Boolean)
	isTrackingNumberCollectionLengthEqual1 (Boolean)
	showContentOnEmpty (Boolean)
	contentClass (String)
	trackingNumbersLength (Number)
	collapseElements (Boolean)
	trackingNumbers (Array)
	showTrackPackagesLabel (Boolean)

----}}
