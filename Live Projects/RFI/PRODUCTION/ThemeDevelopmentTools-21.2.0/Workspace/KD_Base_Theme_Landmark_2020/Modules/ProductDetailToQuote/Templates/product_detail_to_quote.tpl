{{#if isLoading}}
	<div class="product-detail-to-quote-add-to-quote">
		<div class="product-detail-to-quote-loading">{{translate 'Loading...'}}</div>
	</div>
{{else}}
	{{#if isQuotable}}
		<div class="product-detail-to-quote-add-to-quote">
				<button data-toggle="modal" data-target="#exampleModal" id="add-to-quote" class="custom-button-request-quote">
					{{translate 'Request Quote'}}
				</button>
<!-- 				<button data-type="add-to-quote" class="product-detail-to-quote-add-to-quote-button" {{#unless isReadyForQuote}}disabled{{/unless}}>
					{{translate 'Request Quote'}}
				</button> -->
		</div>
		{{#if showMessage}}
			<div data-view="GlobalViews.FeedbackMessage"></div>
		{{/if}}
	{{/if}}
{{/if}}

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <iframe style="width: 100%;height: 680px;border: none;" src="/app/site/crm/externalleadpage.nl?compid=3389566&formid=10&h=AAFdikaICrg1wz7LLSUBU8Ax_I0kxDpUPauSKmn0M6tVwv4VNq8"></iframe>
      
	  </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>


{{!----
Use the following context variables when customizing this template: 
	
	isQuotable (Boolean)
	isLoading (Boolean)
	isReadyForQuote (Boolean)
	showMessage (Boolean)

----}}
