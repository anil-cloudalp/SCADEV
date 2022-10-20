{{log this}}
<section class="kdshowoutofstockmessagenoninventory-info-card" style='display:none;'>
    <span class="kdshowoutofstockmessagenoninventory-info-card-content">
      {{message}}
    </span>
</section>
{{#if ispurchasable}}
{{#if oufofstockmessage}}
<div class="product-line-stock" style='margin-top: 30px !important;'><p class="product-line-stock-msg-out"><span class="product-line-stock-icon-out"><i></i></span><span class="product-line-stock-msg-out-text">{{oufofstockmessage}}</span></p></div>
{{/if}}
{{/if}}


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->