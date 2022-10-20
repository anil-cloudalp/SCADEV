{{!-- <{{tag}} class="order-wizard-title" {{attributes}}>
	{{title}}
</{{tag}}>
{{#if showDetails}}
	<p>
		{{details}}
	</p>
{{/if}} --}}

<div class="order-wizard-title-container">
    <div>
        <{{tag}} class="order-wizard-title" {{attributes}}>
            {{title}}
        </{{tag}}>
        {{#if showDetails}}
            <p>
                {{details}}
            </p>
        {{/if}}
    </div>
    {{#if isShippingtitle}}
        <div>
                <div data-view="RequestshippingAddress" class="requestshipping" ></div>
        </div>
    {{/if}}
</div>
{{!----
Use the following context variables when customizing this template: 
	
	tag (String)
	attributes (String)
	details (String)
	title (String)
	showDetails (Boolean)

----}}
