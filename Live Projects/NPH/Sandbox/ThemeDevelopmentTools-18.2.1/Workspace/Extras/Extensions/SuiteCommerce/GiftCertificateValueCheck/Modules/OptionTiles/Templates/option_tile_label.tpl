<button
  type="button"
  class="gift-certificate-tile {{#if isSelectedTile}}active{{else}}enabled{{/if}}"
  {{#unless isSelectedTile}}
    data-action="open-gift-certificate"
  {{/unless}}
  data-itemid="{{itemId}}"
  data-itemurl="{{itemURL}}"
>
  <span class="button-label">{{tileLabel}}</span>
</button>
