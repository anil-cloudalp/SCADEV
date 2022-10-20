<div class="container">
  <div class="cms-pages-side-menu-content">
    <div class="find-invoice">
      <h1>{{returnTitle}}</h1>
      {{{returnDescription}}}
    </div>
    <div class="find-invoice-form">
      <form>
        <div data-type="alert-placeholder"></div>
        <div class="find-invoice-form-group" data-input="order" data-validation="control-group">
          <label for="name">
            {{translate 'Full Name: '}} 
          </label>
          <div class="find-invoice-form-container" data-validation="control">
            <input type="text" id="name" name="name">
          </div>
          <label for="email">
            {{translate 'Email: '}} 
          </label>
          <div class="find-invoice-form-container" data-validation="control">
            <input type="email" id="email" name="email">
          </div>
          <label for="phone">
            {{translate 'Phone: '}} 
          </label>
          <div class="find-invoice-form-container" data-validation="control">
            <input type="tel" name="phone" id="phone"> 
          </div>
          <label for="order">
            {{translate 'PO Number or TCI Order Number (for credit card payment): '}} 
          </label>
          <div class="find-invoice-form-container" data-validation="control">
            <input type="text" id="order" name="order">
          </div>
          <label for="zip">
            {{translate 'Billing Zipcode: '}} 
          </label>
          <div class="find-invoice-form-container" data-validation="control">
            <input type="text" id="zip" name="zip">
          </div>
          <label for="reason">
            {{translate 'Reason for Return: '}} 
          </label>
          <div class="find-invoice-form-container" data-validation="control">
            <input type="radio" id="reason" name="reason" data-value="Ordered Wrong Item" value="1"> Ordered Wrong Item <br>
            <input type="radio" name="reason" data-value="Wrong item Fulfilled" value="2"> Wrong item Fulfilled <br>
            <input type="radio" name="reason" data-value="No Longer Needed" value="3"> No Longer Needed <br>
          </div>
        </div>
        <button type="submit" class="find-invoice-form-submit">
          {{translate 'Search'}}
        </button>
      </form>
    </div>
    {{#if showTrackInfo}}
    <div data-view='ReturnItems'></div>
    {{/if}}
    {{#if showNotAvaliable}}
    <div>
      <div>
        <div class='return-container'>
          <p class='return-eligibility-error'>
            {{{notAvaliable.message}}}
          </p>
        </div>
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