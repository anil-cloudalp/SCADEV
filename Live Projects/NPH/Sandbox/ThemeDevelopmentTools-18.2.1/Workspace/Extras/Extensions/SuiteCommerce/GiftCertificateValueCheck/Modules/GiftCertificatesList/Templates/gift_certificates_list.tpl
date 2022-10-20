<div class="gift-certificates-list">
  <h2 class="gift-certificates-list-title">{{ title }}</h2>
  <p class="gift-certificates-list-description">{{ description }}</p>
  <div class="gift-certificates-list-placeholder"
        data-type="gift-certificates-list-placeholder"></div>
  <table class="gift-certificates-list-table {{#if hideList}} hide {{/if}}">
    <thead class="gift-certificates-list-table-head">
      <tr>
        <th class="gift-certificates-list-table-head-code">{{ codeColumnHeaderText }}</th>
        <th class="gift-certificates-list-table-head-remaining-amount">
          {{ remainingBalanceColumnHeaderText }}
        </th>
        <th class="gift-certificates-list-table-head-expiry-date">
          {{ expiryDateColumnHeaderText }}
        </th>
        <th class="gift-certificates-list-table-head-sent-by">{{ sentByColumnHeaderText }}</th>
        <th class="gift-certificates-list-table-head-sent-on-date">
          {{ dateColumnHeaderText }}
        </th>
        <th class="gift-certificates-list-table-head-amount">{{ amountColumnHeaderText }}</th>
        <th class="gift-certificates-list-table-head-remove"></th>
      </tr>
    </thead>
    <tbody class="gift-certificates-list-table-body" data-view="GiftCertificatesRows"></tbody>
  </table>
</div>
