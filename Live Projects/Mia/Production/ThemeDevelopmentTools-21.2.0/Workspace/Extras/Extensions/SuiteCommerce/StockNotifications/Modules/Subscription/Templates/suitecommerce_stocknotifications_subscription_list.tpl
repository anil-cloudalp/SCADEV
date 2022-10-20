<section class="stocknotifications-list-lists">
  <div data-type="alert-placeholder" class="stocknotifications-message"></div>

  <header class="stocknotifications-header">
    <h2 class="stocknotifications-title">{{translate pageTitle}}</h2>
  </header>

  {{#if noSubscriptions}}
    <h4 class="stocknotifications-subtitle">{{translate emptyState}}</h4>
  {{else}}
    {{#if subscriptionList}}
    <div class="stocknotifications-wrapper">
      <table class="stocknotifications-details">
        <thead class="stocknotifications-table-head">
          <tr>
            <th class="stocknotifications-table-th">{{translate itemColumnLabel}}</th>
            <th class="stocknotifications-table-th">{{translate priceColumnLabel}}</th>
            <th class="stocknotifications-table-th">{{translate statusColumnLabel}}</th>
          </tr>
        </thead>
        <tbody
          class="stocknotifications-table-body"
          data-view="StockNotifications.Subscription.Line"
        >
        </tbody>
      </table>
    </div>
    {{/if}}
  {{/if}}
</section>
