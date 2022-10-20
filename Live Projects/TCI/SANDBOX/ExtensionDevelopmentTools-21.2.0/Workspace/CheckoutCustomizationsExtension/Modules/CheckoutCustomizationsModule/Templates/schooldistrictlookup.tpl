<div class="school-district-schooldistrict-step">
    <div class="school-district-schooldistrict-top">
        For international schools, please enter zip code 00000.
    </div>
    <div class="school-district-zipcode-container">
        <div class="school-district-zipcode-container-wrap">
            {{!-- <span>Search by zip code</span> --}}
            <input type="text" class="school-district-zipcode-field" />
            <input type="button" class="school-district-zipcode-enter-button button-primary" value="Next"/>
        </div>
    </div>
    {{#if schools}}
    <div class="school-district-schools-container">
        <div>
            Schools in zip code {{zip}}:
        </div>
        <div class="school-district-schools-list">
          {{#each schools}}
              <div>
                  <input type="radio" {{#if isSelected}}checked {{/if}} class="school-district-schools-option" name="school-district-schools-option" value="{{internalid}}" id="{{internalid}}"
                      data-company-name="{{companyname}}"
                      data-subscriber-id="{{custentitysubscriber_id}}"
                      data-tax-exemption="{{custentitytax_exempt_received}}"
                      data-filfillment-flag="{{fulfillmentFlag}}"
                      data-terms="{{terms}}" />
                  <label for="{{internalid}}">{{companyname}}</label>
              </div>
          {{/each}}
        </div>
        {{#if selectedSchool}}
        <p>
            School selected: <b>{{selectedSchool.name}}</b>
        </p>
        {{/if}}
    </div>
    {{/if}}
</div>
