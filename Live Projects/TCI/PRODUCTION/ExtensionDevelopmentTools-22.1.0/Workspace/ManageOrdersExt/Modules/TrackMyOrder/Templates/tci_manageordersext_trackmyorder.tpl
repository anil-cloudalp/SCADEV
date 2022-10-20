<div class="container">
  <div data-cms-area="manage-orders-track-order" data-cms-area-filters="path"></div>
  <div class="cms-pages-side-menu-content">
    {{#if showNotAvaliable}}
    <div class="track-order-not-available">
      <div class="track-order-not-available-holder">
        {{{notAvaliable}}}
      </div>
    </div>
    {{/if}}
    <div class="track-your-order">
      <h1>{{trackTitle}}</h1>
      {{{trackDescription}}}
    </div>
    <div class="track-your-order-fields">
      <form>
        <div data-type="alert-placeholder"></div>
        <div class="track-your-order-group" data-input="order" data-validation="control-group">
          <label class="track-your-order-label" for="order">
            {{orderNumberLabel}}
          </label>
          <div class="track-your-order-controls" data-validation="control">
            <input type="text" class="track-your-order-input" id="order" name="order">
          </div>
          <label class="track-your-order-label" for="zip">
            {{billZipLabel}}
          </label>
          <div class="track-your-order-controls" data-validation="control">
            <input type="text" class="track-your-order-input" id="zip" name="zip">
          </div>
        </div>
        <button type="submit" class="track-your-order-button-submit">
          {{translate 'Search'}}
        </button>
      </form>
    </div>
    {{#if showTrackInfo}}
    <div class="track-your-order-details">
      <div class="track-your-order-details-title">
        <h3>Search Results</h3>
      </div>
      {{#if name}}
      <p><span class="track-your-order-details-labels">Name:</span> {{name}}</p>
      {{/if}}
      {{#if shipToName}}
      <p><span class="track-your-order-details-labels">Ship To:</span> {{shipToName}}</p>
      {{/if}}
      {{#if poNumber}}
      <p><span class="track-your-order-details-labels">PO Number:</span> {{poNumber}}</p>
      {{/if}}
      {{#if orderNumber}}
      <p><span class="track-your-order-details-labels">Order Number:</span> {{orderNumber}}</p>
      {{/if}}
      {{#if orderDate}}
      <p><span class="track-your-order-details-labels">Order Date:</span> {{orderDate}}</p>
      {{/if}}
    </div>
    <div class="track-your-order-item-container-product">
      <div class="track-your-order-item-container-product-item-label">Ship Date</div>
      <div class="track-your-order-item-container-product-item-label">Status</div>
      <div class="track-your-order-item-container-product-item-label item">Item</div>
      <div class="track-your-order-item-container-product-item-label description">Description</div>
      <div class="track-your-order-item-container-product-item-label quantity">Quantity</div>
      <div class="track-your-order-item-container-product-item-label tracking">Tracking</div>
      {{!-- Begin
      <div class="track-your-order-item-container-product-item-label">Ship To</div>
      <div class="track-your-order-item-container-product-item-label">Name</div>
      <div class="track-your-order-item-container-product-item-label">poNumber</div>
      <div class="track-your-order-item-container-product-item-label">orderNumber</div>
      <div class="track-your-order-item-container-product-item-label">orderDate</div>
      End --}}
    </div>
    <div class="track-table">
      {{#each items}}
      <div class="track-table-row">
        <div class="track-table-row-middle">
          <div class="track-table-column">
            <p>{{shipDate}}</p>
          </div>
          <div class="track-table-column">
            <p>{{status}}</p>
          </div>
          <div class="track-table-column item">
            <p>{{item}}</p>
          </div>
          <div class="track-table-column description">
            <p>{{description}}</p>
          </div>
          <div class="track-table-column quantity">
            <p>{{quantity}}</p>
          </div>
          <div class="track-table-column tracking">
            <p>{{{tracking}}}</p>
          </div>
          {{!-- Begin
          <div class="track-table-column">
            <p>{{shipToName}}</p>
          </div>
          <div class="track-table-column">
            <p>{{name}}</p>
          </div>
          <div class="track-table-column">
            <p>{{poNumber}}</p>
          </div>
          <div class="track-table-column">
            <p>{{orderNumber}}</p>
          </div>
          <div class="track-table-column">
            <p>{{orderDate}}</p>
          </div>
          End --}}
        </div>
      </div>
      {{/each}}
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