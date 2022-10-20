<div class="gift-certificate-balance-main-form">
  <div>
    <form>
      <div class="gift-certificate-balance-main-form-label-row">
        <label for="gift-certificate-balance-main-form-input-field-code">{{ labelText }}</label>
        {{#if hasHelpText}}
          <i
            class="gift-certificate-balance-main-form-help-text"
            data-toggle="tooltip"
            data-placement="left"
            title="{{ helpText }}"></i>
        {{/if}}
      </div>
      <div class="gift-certificate-balance-main-form-row">
        <div class="gift-certificate-balance-main-form-input-field-column">
          <input
            type="text"
            id="gift-certificate-balance-main-form-input-field-code"
            class="gift-certificate-balance-main-form-input-field-code"
            name="giftcertcode"
            placeholder="{{ placeholderText }}"
            value="{{giftCode}}"/>
          <small
            class="gift-certificate-balance-main-form-alert-placeholder"
            data-type="input-help-text"></small>
        </div>
        <div class="gift-certificate-balance-main-form-button-column">
          <button
            type="button"
            class="gift-certificate-balance-main-form-button"
            data-action="gift-certificate-get">
            {{ buttonText }}
          </button>
          {{#if isEnabledAddToMyAccount }}
            {{#if showAddToMyAccountButtonAsLink}}
              <a
                href="#"
                data-action="gift-certificate-save"
                class="gift-certificate-balance-main-form-save-button">
                {{ addToMyAccountButtonText }}
              </a>
            {{else}}
              <button
                type="button"
                class="gift-certificate-balance-main-form-save-button"
                data-action="gift-certificate-save">
                {{ addToMyAccountButtonText }}
              </button>
            {{/if}}
          {{/if}}
        </div>
      </div>
    </form>
  </div>
</div>
