<p
  data-id="{{ currencyId }}"
  class="available-balance-currency-line
    {{#unless isBalanceAmountGreaterThanZero}}balance-zero{{/unless}}"
>
  <span class="available-balance-currency-line-amount-balance-formatted">
    {{ balanceAmountFormatted }}
  </span>
</p>
