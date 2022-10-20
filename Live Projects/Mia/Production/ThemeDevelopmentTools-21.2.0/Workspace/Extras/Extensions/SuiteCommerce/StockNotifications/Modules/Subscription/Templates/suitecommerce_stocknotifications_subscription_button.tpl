{{#if hasChildren}}
  <a class="stocknotifications-button-small stocknotifications-cancelall-button"
    data-action="cancel-all-subscriptions">
  {{#if undoAllButton }}
    {{translate undoAllButtonText}}
  {{else}}
    {{translate cancelAllButtonText}}
  {{/if}}
  </a>
{{/if}}
{{#if isSubscribed}}
  <a class="stocknotifications-button-small stocknotifications-cancel-button"
    data-action="cancel-subscription">
  {{#if deletedSubscription}}
      {{translate undoButtonText}}
  {{else}}
      {{translate cancelButtonText}}
  {{/if}}
  </a>
{{/if}}
