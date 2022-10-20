<div class="return-container">
  <div class="return-requestor-container">
    <h2 class="return-requestor">Requestor Information</h2>
    <p>Name: <span id="requestorName"> {{name}} </span></p>
    <p>Email: <span id="requestorEmail"> {{email}} </span></p>
    <p>Phone: <span id="requestorPhone"> {{phone}} </span></p>
    <p>Reason: <span id="requestorReason"> {{reason}} </span></p>
  </div>
  {{!-- <div class="return-eligibility-container"> --}}
  <div class="return-item-container">
    <h2 class="return-eligibility-eligible-title">Check the Items You Wish to Return</h2>
    <div data-type="alert-placeholder"></div>
    {{#each trackingInfo}}
    <div class="return-eligibility-eligible-items">
      <div class="find-invoice-form-group" data-input="item" data-validation="control-group">
        <div class="find-invoice-form-container" data-validation="control">
          <input type="checkbox" data-amount="{{amount}}" data-description="{{description}}" data-id="{{id}}" data-itemNo="{{itemNo}}" data-quantity="{{quantity}}" data-rate="{{rate}}" data-inputAmount="{{inputAmount}}" data-inputQuantity="{{inputQuantity}}" name="item">
        </div>
      </div>
      <div class="return-eligibility-eligible-item-details">
        <p>{{description}}</p>
        <div class="return-eligibility-eligible-item-amount-and-quantity">
          <span class="return-eligibility-eligible-item-amount">
            {{#if inputAmount}}
            {{inputAmount}}
            {{else}}
            ${{amount}}
            {{/if}}
          </span>
          <div class="return-eligibility-eligible-item-quantity">
            <span>Quantity:</span><input class="returnQuantity" type="number" name="quantity" min="1" max="{{quantity}}" value="{{#if inputQuantity}}{{inputQuantity}}{{else}}{{quantity}}{{/if}}">
          </div>
        </div>
      </div>
    </div>
    {{/each}}
    
    {{!-- </div> --}}
    {{#if showIneligible}}
    {{!-- <div class="return-ineligibility-container">
    <h2 class="return-ineligible-title">INELIGIBLE</h2> --}}
    {{#each ineligible}}
    <div class="return-ineligible-item-details">
      <div class="return-ineligible-item-details-left">
        <p>{{description}}</p>
        <div class="return-ineligible-item-amount-and-quantity">
          <span class="return-ineligible-item-amount">${{amount}}</span>
          <span class="return-ineligible-item-quantity">Quantity: {{quantity}}</span>
        </div>
      </div>
      <div class="return-ineligible-item-details-right">
        Outside of return policy
      </div>
    </div>
    {{/each}}
    {{!-- </div> --}}
    {{/if}}
    <button class="request-line-item-return">
      {{translate 'Return'}}
    </button>
  </div>
</div>
