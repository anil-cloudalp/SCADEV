<tr class="gift-certificates-list-row" data-id="{{ giftcertcode }}">
  <td class="gift-certificates-list-row-column-code">
    <div class="gift-certificates-list-row-column-code-container"
      data-action="gift-certificate-code-copy"
      data-toggle="tooltip"
      data-placement="bottom"
      title="{{copyIconHelp}}">
      <span class="gift-certificate-code">{{ giftcertcode }}</span>
      <button class="gift-certificates-list-row-column-code-copy-button">
        <i></i>
      </button>
    </div>
    <div class="gift-certificates-list-row-summary">
      {{#if hasExpirationDate}}
        <p class="gift-certificates-list-row-summary-expiration-date">
          <span class="gift-certificates-list-row-summary-label">{{ expiryDateLabel }}</span>
          <span class="gift-certificates-list-row-summary-expiration-date-value">
            {{ expirationDate }}
          </span>
        </p>
      {{/if}}

      <div>
        <button
          class="gift-certificates-list-row-summary-collapse-button"
          data-toggle="collapse"
          data-target="#gift-certificates-list-row-summary-accordion-{{ cid }}"
          aria-expanded="false"
          aria-controls="gift-certificates-list-row-summary-accordion-{{ cid }}">
          {{ moreDetailsLabel }}
        </button>
        <span class="gift-certificates-list-row-summary-collapse-button-icon collapsed">
          <i></i>
        </span>
      </div>

      <div
        id="gift-certificates-list-row-summary-accordion-{{ cid }}"
        class="gift-certificates-list-row-summary-accordion collapse">
        <p class="gift-certificates-list-row-summary-sent-by">
          <span class="gift-certificates-list-row-summary-label">{{ sentByLabel }}</span>
          <br>
          <span class="gift-certificates-list-row-summary-sent-by-value">{{ sender }}</span>
        </p>
        <p class="gift-certificates-list-row-summary-sent-on-date">
          <span class="gift-certificates-list-row-summary-label">{{ sentOnDateLabel }}</span>
          <br>
          <span class="gift-certificates-list-row-summary-sent-on-date">{{ sentOnDate }}</span>
        </p>
        <p class="gift-certificates-list-row-summary-expired">
          {{#unless isExpired}}
            <span class="gift-certificates-list-row-summary-label">{{ originalAmountLabel }}</span>
            <span class="gift-certificates-list-row-summary-expired-value">
              {{ originalAmountFormatted }}
            </span>
          {{/unless}}
        </p>
      </div>
    </div>
  </td>
  <td
    class="gift-certificates-list-row-column-remaining-balance
      {{#unless isRemainingAmountGreaterThanZero}}balance-zero{{/unless}}">
    {{#if isExpired}}
      <span class="gift-certificates-list-row-column-remaining-balance-expired">
        {{ expiredLabel }}
      </span>
    {{else}}
      <span class="gift-certificates-list-row-column-remaining-balance-value">
        {{ amountRemainingFormatted }}
      </span>
    {{/if}}
    <div class="gift-certificates-list-row-remove-button-mobile-{{ cid }}">
      <p class="gift-certificates-list-row-remove-button-mobile"
          data-view="GiftCertificates.Remove.Button.Mobile">
      </p>
    </div>
  </td>
  <td class="gift-certificates-list-row-column-expiration-date">{{ expirationDate }}</td>
  <td class="gift-certificates-list-row-column-sent-by">{{ sender }}</td>
  <td class="gift-certificates-list-row-column-sent-on-date">{{ sentOnDate }}</td>
  <td class="gift-certificates-list-row-column-amount">{{ originalAmountFormatted }}</td>
  <td class="gift-certificates-list-row-column-remove"
      data-view="GiftCertificates.Remove.Button"></td>
</tr>
