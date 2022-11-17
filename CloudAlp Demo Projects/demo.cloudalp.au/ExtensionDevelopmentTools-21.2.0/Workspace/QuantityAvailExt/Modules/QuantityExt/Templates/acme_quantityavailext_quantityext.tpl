<div class="quantity-pricing">
    {{#if hasInventoryInfo}}
        <div class="quantity-pricing-container">
            <div class="quantity-pricing-expander-body">
                <div class="quantity-pricing-expander-body-container">
                    <table>
                        <thead>
                            <tr>
                                <th class="quantity-pricing-table-header-quantity">{{translate 'Location'}}</th>
                                <th class="quantity-pricing-table-header-price">{{translate 'Quantity Available'}}</th>
                                <th class="quantity-pricing-table-header-quantity">{{translate 'backordered'}}</td>
                            </tr>
                        </thead>
                        <tbody>
                            {{#each locationInfo}}
                                <tr>
                                    <td class="quantity-pricing-table-body-quantity">{{this.name}}</td>
                                    {{#if this.QuantityAvailable}}
                                            <td class="quantity-pricing-table-body-price">{{this.QuantityAvailable}}</td>
                                    {{else}}
                                            <td class="quantity-pricing-table-body-price">{{translate "0"}}</td>
                                    {{/if}}
                                    {{#if this.quantitybackordered}}
                                        <td class="quantity-pricing-table-body-price">{{this.quantitybackordered}}</td>
                                    {{else}}
                                        <td class="quantity-pricing-table-body-price">{{translate "0"}}</td>
                                    {{/if}}
                                </tr>
                            {{/each}}
                        </tbody>
                    </table>
               
                </div>
            </div>
        </div>
    </div>
    {{/if}}
</div> 
