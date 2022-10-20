{{#if showLine}}
  <tr class="stocknotifications-details-wrapper
    {{#if isChild}}
      hide subscription-group-{{parentId}}
    {{else}}
      subscription-group-parent-{{parentId}}
    {{/if}}{{#if subscriptionId}}
    subscription-{{subscriptionId}}{{/if}}{{#if hideBottomBorder}}
      stocknotifications-hide-bottom-border{{/if}}"
    data-itemid="{{itemId}}"
  >
  <td class="stocknotifications-details-main{{#if isChild}} stocknotifications-is-child{{/if}}"
    {{#if hasChildren}}
      data-action="stocknotifications-toggle-group"{{/if}}>
    <div class="stocknotifications-name-container">
      <a href="#"
        class="stocknotifications-item-name"
        data-touchpoint="home"
        data-hashtag="#product/{{productId}}"
      >
        {{productName}}
      </a>
      {{#if hasChildren}}
        <i class="menu-tree-node-item-icon
        stock-notifications-group-arrow
        subscription-arrow-group-{{parentId}}"
          data-itemid="{{itemId}}"></i>
      {{/if}}
    </div>
    <p class="stocknotifications-item-sku">
    {{#if showItemSku}}
      SKU: {{productSku}}
    {{/if}}
    </p>
  </td>
  <td {{#if hasChildren}}
    data-action="stocknotifications-toggle-group"{{/if}}>
    <p class="stocknotifications-item-price">
    {{#if isSubscribed}}
      {{productPrice}}
    {{/if}}
    </p>
  </td>
  <td class="stocknotifications-actions-cell desktop"
    {{#if hasChildren}}
      data-action="stocknotifications-toggle-group"
    {{/if}}>
    <p class="stocknotifications-notification desktop">
    {{#if isSubscribed}}
      {{dateCreated}}
    {{/if}}
    </p>
  </td>
  <td class="stocknotifications-actions-cell desktop"
    {{#if hasChildren}}
      data-action="stocknotifications-toggle-group"
    {{/if}}>
  {{#if showButtonView}}
    <div data-view="StockNotifications.Subscription.Button"></div>
  {{/if}}
  </td>
  <td class="stocknotifications-actions-cell mobile"
    {{#if hasChildren}}
      data-action="stocknotifications-toggle-group"
    {{/if}}>
    <div class="stocknotifications-notification-container">
      <p class="stocknotifications-notification mobile">
      {{#if isSubscribed}}
        {{dateCreated}}
      {{/if}}
      </p>
    </div>
  {{#if showButtonView}}
    <div class="stocknotifications-actions-mobile"
        data-view="StockNotifications.Subscription.Button"></div>
  {{/if}}
  </td>
</tr>
{{/if}}
