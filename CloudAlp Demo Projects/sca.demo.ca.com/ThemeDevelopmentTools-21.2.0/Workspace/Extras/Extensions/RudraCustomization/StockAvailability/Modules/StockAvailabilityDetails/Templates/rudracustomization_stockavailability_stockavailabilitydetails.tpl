<section class="stockavailabilitydemo-info-card">
   <div class="stockDetails">
       <div class="item-is-in-store-details">
          <div class="cust">
            <span class="item-available-hard-core">item in Stock:</span>
           {{#if isInstock}}
             <div class="item-stock-details correct">
               <p class="custom-font-type corrrect">
                 <i class="fa-correct"></i>
               </p>
             </div>
             {{else}}
              <div class="item-stock-details wrong">
               <p class="custom-font-type wrong">
                 <i class="fa-wrong"></i>
               </p>
             </div>
             {{/if}}
         </div>
       </div>
       <div class="item-stock-is-available-or-not">
         <span>
           Total Stock: {{ stockMessage}}
         </span>
       </div>
   </div>
</section>
<section class="testing-info-ProductDetails">
   
</section>



<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->