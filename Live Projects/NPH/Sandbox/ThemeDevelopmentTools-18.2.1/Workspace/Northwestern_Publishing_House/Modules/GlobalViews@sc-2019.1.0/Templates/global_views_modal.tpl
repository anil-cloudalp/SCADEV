<div class="modal-dialog global-views-modal {{modalDialogClass}}">
	<div class="global-views-modal-content">
		<!--Modal-Header -->
		<div id="modal-header" {{#if musicresource}} class="global-views-modal-content-header musician-resource-center-text" {{else}} class="global-views-modal-content-header"{{/if}}>
			<button type="button" {{#if musicresource}} class="global-views-modal-content-header-close musician-close-model" {{else}}  class="global-views-modal-content-header-close" {{/if}} data-dismiss="modal" aria-hidden="true">
				&times;
			</button>
			{{#if showPageHeader}}
				<h2 class="global-views-modal-content-header-title">
					{{pageHeader}}
				</h2>
			{{/if}}
		</div>
		<!--Modal-content -->
		<div id="modal-body" data-type="modal-body" class=" global-views-modal-content-body" data-view="Child.View">
		</div>
	</div>
</div>



{{!----
Use the following context variables when customizing this template:

	pageHeader (String)
	showPageHeader (Boolean)
	modalDialogClass (String)

----}}
