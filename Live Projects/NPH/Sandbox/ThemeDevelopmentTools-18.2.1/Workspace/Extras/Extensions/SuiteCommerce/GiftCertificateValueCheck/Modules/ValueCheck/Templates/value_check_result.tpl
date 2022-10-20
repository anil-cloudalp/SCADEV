<div class="gift-certificate-balance-main-result hide">
  {{#if isCodeExpired}}
    <p class="gift-certificate-balance-main-result-remaining-balance">{{ expiredCodeMessage }}</p>
  {{else}}
    <p class="gift-certificate-balance-main-result-remaining-balance">
      {{ remainingBalanceLabel }}:
      {{#if isAmountRemainingGreaterThanZero}}
        <span class="gift-certificate-balance-main-result-remaining-balance-gt0">
          {{ amountRemaining }}
        </span>
      {{else}}
        <span class="gift-certificate-balance-main-result-remaining-balance-zero">
          {{ amountRemaining }}
        </span>
      {{/if}}
    </p>
  {{/if}}

  <p class="gift-certificate-balance-main-result-code">
    {{ gifCertificateCodeLabel }}: <span>{{ giftCertificateCode }}</span>
  </p>

  {{#if showExpirationDateInformation }}
    {{#if isCodeExpired}}
      <p class="gift-certificate-balance-main-result-expiration-date">
        {{ codeExpiredLabel }}: <span>{{ expirationDate }}</span>
      </p>
    {{else}}
      {{#if hasExpirationDate}}
        <p class="gift-certificate-balance-main-result-expiration-date">
          {{ expiryDateLabel }}: <span>{{ expirationDate }}</span>
        </p>
      {{/if}}
    {{/if}}
  {{/if}}
</div>
