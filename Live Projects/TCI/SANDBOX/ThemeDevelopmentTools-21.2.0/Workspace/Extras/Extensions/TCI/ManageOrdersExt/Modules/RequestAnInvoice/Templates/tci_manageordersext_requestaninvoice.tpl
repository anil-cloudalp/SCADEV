<div class="container">
	<div class="cms-pages-side-menu-content">
		<div class="find-invoice">
			<h1>{{findInvoiceTitle}}</h1>
			{{{findInvoiceDescription}}}
		</div>
		<div class="find-invoice-form">
			<form>
				<div data-type="alert-placeholder"></div>
				<div class="find-invoice-form-group" data-input="order" data-validation="control-group">
					<label class="find-invoice-label" for="order">
						{{translate 'PO Number or TCI Order Number (for credit card payment):'}} 
					</label>
					<div class="find-invoice-form-container" data-validation="control">
						<input type="text" id="order" name="order">
					</div>
					
					<label class="find-invoice-label" for="zip">
						{{translate 'Billing Zip Code: '}} 
					</label>
					<div class="find-invoice-form-container" data-validation="control">
						<input type="text" id="zip" name="zip">
					</div>
				</div>
				<button type="submit" class="find-invoice-form-submit">
					{{translate 'Search'}}
				</button>
			</form>
		</div>
		{{#if showTrackInfo}}
		<div class="found-invoice-results">
			<h3 class="found-invoice-results-title">Search Results</h3>
			<div class="found-invoice-results-labels">
				<span class="found-invoice-results-labels-po">Purchase Number</span>
				<span class="found-invoice-results-labels-zip">Billing Zipcode</span>
				<span class="found-invoice-results-labels-actions">Actions</span>
			</div>
			<div class="found-invoice-results-row">
				<span class="found-invoice-results-row-po">{{trackingInfo.tranid}}</span>
				<span class="found-invoice-results-row-zip">{{trackingInfo.zip}}</span>
				{{!-- <div class="found-invoice-results-row-email" data-view="EmailInvoice"></div> --}}
				<div class="found-invoice-results-row-print" data-view="PrintInvoice"></div>
			</div>
		</div>
		{{/if}}
		{{#if showNotAvaliable}}
		<div>
			<div>
				<h3>Search Results</h3>
				{{{notAvaliable.message}}}
			</div>
		</div>
		{{/if}}
	</div>
	<div class="cms-pages-side-menu-menu">
		<div class="cms-pages-side-menu" data-view="SideNavigation"></div>
	</div>
</div>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->