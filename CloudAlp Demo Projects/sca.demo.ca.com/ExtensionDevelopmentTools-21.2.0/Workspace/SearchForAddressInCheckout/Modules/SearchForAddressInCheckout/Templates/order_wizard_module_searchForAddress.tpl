<div class="order-wizard-module-search-for-address">

     <div class="search-for-address-custom-model" >
        <div class="search-for-address-content col-sm-12">
            <div class="search-for-address-content-input">
                <span class="twitter-typeahead" style="position: relative; display:flex;">
                    <input data-action="searchAddress" class="search-for-address-input typeahead tt-input" placeholder="Enter your Address Zipcode" type="search" /> 
                     <button class="search-for-address-button-submit" type="submit" data-action="onSubmit">
                        <i class="search-for-address-input-icon"></i>
                     </button> 
                </span>
            </div>
                <p class = "error" id = "add_here" name="csv_status"></p> 
            <a class="search-for-address-input-reset" data-type="search-reset">
                <i class="search-for-address-input-reset-icon"></i>
            </a>
        </div>
       
    </div>

   <div class="table-format-data-search-for-address ">
       {{#if customData}}
            {{#each selectedAddressfield}}
            <div class="search-for-address-table-container">
                <div class="table-format-content">
                    <div class="radio-Button-container">
                        <input type="radio" name="address-options-billaddress" data-action="saved-result-radio-button" class="address-details-selector-option" checked data-id="{{internalid}}" value="{{internalid}}">
                    </div>
                    <address>
                        <div class="address-details-info">
                            <p class="address-details-container-multiselect-address-title" data-name="company">
                                <b>{{fullname}}</b>
                            </p>
                            <p class="address-details-container-multiselect-address-details-{{addr1}}" data-name="{{addr1}}">
                                {{addr1}}
                            </p>
                            <p class="address-details-container-multiselect-address-line">
                                <span class="address-details-container-multiselect-address-details-city" data-name="city">
                                    {{city}}&nbsp;
                                </span>
                                <span class="address-details-container-multiselect-address-details-state" data-name="state">
                                    {{state}}&nbsp;
                                </span>
                                <span class="address-details-container-multiselect-address-zip" data-name="zip">
                                    {{zip}}
                                </span>
                            </p>
                            <p class="address-details-country" data-name="country">
                                {{country}}
                            </p>
                            <p class="address-details-phone" data-name="phone">
                                <a href="tel:${x.attributes.phone}">{{phone}}</a>
                            </p>
                        </div>
                    </address>
                </div>
            </div>
            {{/each}}
       {{/if}}

      
   </div>

</div>