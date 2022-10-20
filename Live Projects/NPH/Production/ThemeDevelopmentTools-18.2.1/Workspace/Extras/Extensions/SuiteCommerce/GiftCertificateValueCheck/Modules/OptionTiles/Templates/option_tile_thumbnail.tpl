<button
  type="button"
  class="gift-certificate-tile picker-with-image {{#if isSelectedTile}}active{{else}}enabled{{/if}}"
  {{#unless isSelectedTile}}
    data-action="open-gift-certificate"
  {{/unless}}
  data-itemid="{{itemId}}"
  data-itemurl="{{itemURL}}"
>
  <img
    src="{{resizeImage thumbnail.url 'thumbnail'}}"
    alt="{{thumbnail.altimagetext}}"
    {{#unless isSelectedTile}}
      data-action="open-gift-certificate"
    {{/unless}} />
  <span class="button-label">{{tileLabel}}</span>
</button>
