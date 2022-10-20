define("Acme.SearchForAddressInCheckout.OrderWizardModuleSearchForAddress.View", 
    [
        "order_wizard_module_searchForAddress.tpl"
    ,   "Utils"
    ,   "Wizard.Module"
    ,   "Profile.Model"
    ,   "underscore"
    ,   "SC.Configuration"
    ,   "LiveOrder.Model"
    , 	'GlobalViews.Message.View'
    ]
    , function (
        searchforaddressincheckout_searchforaddressincheckout_tpl

    ,   Utils
    ,   WizardModule
    ,   ProfileModel
    ,   _
    ,   Configuration
    ,   LiveOrderModel
    ,   GlobalViewsMessageView
) 
{

  "use strict";

  return WizardModule.extend({
    template: searchforaddressincheckout_searchforaddressincheckout_tpl,

    page_header: Utils.translate("Search For Address"),

    title: Utils.translate("Search For Address"),

    events: {
      'keyup [data-action="searchAddress"]': "searchDataKeyUp",
      'keydown [data-action="searchAddress"]': "searchDataKeyDown",
      'click [data-action="onSubmit"]': "search",
      'click [data-action="saved-result-radio-button"]': "selectedResults",
    },
    isActive: function isActive() {
      return true;
    },

    selectedResults: function selectedResults(e) {
      e.preventDefault();
      var cart = LiveOrderModel.getInstance();
      var selectedContent = jQuery(e.target).val().toString();
        this.selectedContent = selectedContent;
      cart
        .save({
          billaddress: selectedContent,
          shipaddress: selectedContent,
        })
        .always(function () {
          jQuery(e.target).prop("checked", true);

        });
    },
    showMessage: function (message, type, field) {

        if (type === 'success') {
            const global_view_message = new GlobalViewsMessageView({
                message: message,
                type: 'success',
                closable: true
            });

            this.$('[name="csv_status"]').html(global_view_message.render().$el.html());
        } else {
            const globa_view_message = new GlobalViewsMessageView({
                //  message:,
                message: message,

                type: 'error',
                closable: true
            });

            this.$('[name="csv_status"]').html(globa_view_message.render().$el.html());
        }
    },
    submit:function(){
        const promise = jQuery.Deferred();
        if(this.EmptyDiv === undefined || this.EmptyDiv.innerText === ''){
            promise.reject();
            this.showMessage('Please Select any Address','error');
        }else{
            var regExp = /[a-z]/i;
              if (regExp.test(this.EmptyDiv.innerText)) {
                promise.reject();
              } else {
                if(this.selectedContent === undefined){
                    this.showMessage('Please Select any Address','error');
                    promise.reject();
                }else{
                    
                    promise.resolve();
                }

              }
 
        }
        return promise;

    },
    searchDataKeyUp: function searchDataKeyUp(e) {
      e.preventDefault();
      var any = $(".table-format-data-search-for-address");
      any.html("");
      let val = e.target.value.toLowerCase();
      var value = String.fromCharCode(e.which) || e.key;
        this.EmptyDiv = document.createElement('div');
        this.EmptyDiv.innerHTML = val;
       
      this.valiDateData(val,val);
    },
    valiDateData: function valiDateData(value, str) {
      var regExp = /[a-z]/i;
      this.csvErr = this.$('[name="csv_status"]');
      this.csvErr.text("");
      if (str !== "") {
        if (regExp.test(str)) {
            this.showMessage('Please type Zipcode only','error');
          return false;
        } else {
          this.compareData(value);
          return true;
        }
      }

    },
    compareData: function compareData(value) {
      var regExp = /[a-z]/i;
      var any = $(".table-format-data-search-for-address");
      any.html("");
      let countries = Configuration.get("siteSettings.countries", []);
     
      if (value !== "") {
        //   do code in here
        this.custom = any;
        var cust = _.map(this.model.models, (x) => {
          var any = x.attributes.zip;

          const country_object = countries[x.attributes.country];
          const country = country_object
            ? country_object.name
            : x.attributes.country;
          const state_object =
            country_object && country_object.states
              ? _.findWhere(countries[x.attributes.country].states, {
                  code: x.attributes.state,
                })
              : null;
          const state = state_object ? state_object.name : x.attributes.state;
          x.attributes.country = country;
          x.attributes.state = state;

          if (any.startsWith(value)) {
            return x;
          }
        });

        this.templateData(cust);
      } else if (value == "") {
       
      }

    },
    templateData: function templateData(data) {
      var any = $(".table-format-data-search-for-address");
      var AddAddress = `
            <div class="addressBook-container-data">
                <a href="/addressbook/new" data-toggle="show-in-modal" class="cust">
                    <div class="content-add-address">
                        <i class="plus-font"></i>
                        <p>Add Address</p>       
                    </div>
                </a>
            </div> `;
      any.html("");
      var filteredData = data.filter(function (x) {
        return x !== undefined;
      });

      if (filteredData.length == 0) {
        any.html(AddAddress);
      } else {
        var EmptyData = "";
        _.each(filteredData, (x) => {
          if (_.isNull(x.attributes.state)) {
            x.attributes.state = "";
          }

          var data = `
            <div class="search-for-address-table-container">
                <div class="table-format-content">
                    <div class="radio-Button-container">
                        <input type="radio" name="address-options-billaddress" data-action="saved-result-radio-button" class="address-details-selector-option" data-id="${x.attributes.internalid}" value="${x.attributes.internalid}">
                    </div>
                    <address>
                        <div class="address-details-info">
                            <p class="address-details-container-multiselect-address-title" data-name="company">
                                <b>${x.attributes.fullname}</b>
                            </p>
                            <p class="address-details-container-multiselect-address-details-${x.attributes.addr1}" data-name="${x.attributes.addr1}">
                                ${x.attributes.addr1}
                            </p>
                            <p class="address-details-container-multiselect-address-line">
                                <span class="address-details-container-multiselect-address-details-city" data-name="city">
                                    ${x.attributes.city}&nbsp;
                                </span>
                                <span class="address-details-container-multiselect-address-details-state" data-name="state">
                                    ${x.attributes.state}&nbsp;
                                </span>
                                <span class="address-details-container-multiselect-address-zip" data-name="zip">
                                    ${x.attributes.zip}
                                </span>
                            </p>
                            <p class="address-details-country" data-name="country">
                                ${x.attributes.country}
                            </p>
                            <p class="address-details-phone" data-name="phone">
                                <a href="tel:${x.attributes.phone}">${x.attributes.phone}</a>
                            </p>
                        </div>
                    </address>
                </div>
            </div>`;
          EmptyData += data;
        });

        any.html(EmptyData);
      }
    },
    initializeTemplateData:function(data){
        console.log(data);
    },
    

    initialize: function () {
      WizardModule.prototype.initialize.apply(this, arguments);
      var Profilemodel = ProfileModel.getInstance(); // create a instance of profile model
      let profilemodelZipcode = Profilemodel.get("addresses"); // get the address model in that profile model

      this.model = profilemodelZipcode;
    },
    getContext: function getContext() {
        var NewOutputData ;
        if(this.selectedContent !== undefined){
           
            let countries = Configuration.get("siteSettings.countries", []);
          var cust = _.map(this.model.models, (x) => {
              var any = x.attributes.internalid;
    
              const country_object = countries[x.attributes.country];
              const country = country_object
                ? country_object.name
                : x.attributes.country;
              const state_object =
                country_object && country_object.states
                  ? _.findWhere(countries[x.attributes.country].states, {
                      code: x.attributes.state,
                    })
                  : null;
              const state = state_object ? state_object.name : x.attributes.state;
              x.attributes.country = country;
              x.attributes.state = state;
    
              if (any === this.selectedContent) {
                return x;
              }
            });
            var filteredData = cust.filter(function (x) {
                return x !== undefined;
              });
              NewOutputData = true;
        }else{
            NewOutputData = false;
        }

      return {
        customData : NewOutputData,
        selectedAddressfield : filteredData
      };
    }

  });

});
