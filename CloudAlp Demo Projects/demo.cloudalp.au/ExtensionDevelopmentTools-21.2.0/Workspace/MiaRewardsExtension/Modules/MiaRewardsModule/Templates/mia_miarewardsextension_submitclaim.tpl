<section class="miarewardsmodule-info-card">
{{#if isLoggedIn}}
<form id="submit-claim">
    <h1 class="form-header">Submit New Claim</h1>
    <div class="tabs" id="tabbedForm">
      <nav class="tab-nav"></nav>
      <div class="tab" data-id="Dealership Information" data-name="1 Dealership Information">
        <div class="header-err-wrap">
        <div class="top-err-message"></div>
        <h3 class="tab-header">Dealership Information</h3>
        </div>
        <div class="input-wrapper">
          <div class="wrapper-container">
            <h4 data-label="Dealer Account Code" class="label">Dealer Account Code <span class="req">*</span>
            </h4>
            <input data-action="checkErr" name="dealercode" type="text"/>
          </div>
          <div class="wrapper-container">
           <h4 data-label="Company Name" class="label">Company Name
            <span class="req">*</span>
            </h4>
            <input data-action="checkErr" name="companyname" type="text"/>
          </div>
          
        </div>
         <div class="input-wrapper">
          <div class="wrapper-container">
            <h4 data-label="Sales Rep's Name" class="label">Sales Rep's Name <span class="req">*</span>
            </h4>
            <input data-action="checkErr" name="firstname" type="text"/>
            <p class="small-text">First</p>
          </div>
          <div class="wrapper-container">
           <h4  data-label="Sales Rep's Name" class="label"> &nbsp;
            </h4>
            <input data-action="checkErr" name="lastname" type="text"/>
            <p class="small-text">Last</p>
          </div>
          
        </div>
         <div class="input-wrapper">
          <div class="wrapper-container">
            <h4 data-label="Sales Rep's Mobile" class="label">Sales Rep's Mobile <span class="req">*</span>
            </h4>
            <input data-action="checkErr" name="salesrepphone" type="text"/>
          </div>
          <div class="wrapper-container">
           <h4 data-label="Sales Rep's Email" class="label">Sales Rep's Email
            <span class="req">*</span>
            </h4>
            <input data-action="checkErr" name="salesrepemail" type="text"/>
          </div>
          
        </div>
      </div>
      <div class="tab" data-id="Sale Information" data-name="2 Sale Information">
      <div class="header-err-wrap">
      <div class="top-err-message"></div>
      <h3 class="tab-header">Sale Information</h3>
      </div>
        <div class="input-wrapper">
          <div class="wrapper-container">
            <h4 data-label="System" class="label">System <span class="req">*</span> (Select multiple options)
            </h4>
            <select data-action="checkErr" name="system" multiple>
              <option></option>
              {{#if systemList}}
              {{#each systemList}}
              <option value="{{id}}">{{name}}</option>
              {{/each}}
              {{/if}}
            </select>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="wrapper-container">
            <h4 data-label="Quantity" class="label">Quantity <span class="req">*</span>
            </h4>
            <input data-action="checkErr" name="quantity" type="text"/>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="wrapper-container">
            <h4 data-label="Select Term" class="label">Select Term <span class="req">*</span>
            </h4>
              <select data-action="checkErr" name="terms">
              <option></option>
              <option value="SystemA">System1</option>
              <option value="SystemB">System2</option>
            </select>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="wrapper-container">
            <h4 data-label="Dealer PO Number or Order Number" class="label">Dealer PO Number or Order Number <span class="req">*</span>
            </h4>
            <input data-action="checkErr" name="ponumber" type="text"/>
          </div>
        </div>
      </div>
      <div class="tab" data-id="Additional Information" data-name="3 Switch Information">
      <div class="header-err-wrap">
      <div class="top-err-message"></div>
      <h3 class="tab-header">Additional Details</h3>
      </div>
        <div class="input-wrapper">
          <div class="wrapper-container">
            <h4 data-label="Customer Name" class="label">Customer Name <span class="req">*</span>
            </h4>
            <input data-action="checkErr" value="{{customerName}}" name="custname" type="text"/>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="wrapper-container">
            <div>
            <h4 id="rd-label" data-label="Does this claim relate to Telstra Bussiness System (TBS)" class="label">Does this claim relate to Telstra Bussiness System (TBS)<span class="req">*</span>
            </h4>
            <p><input  data-action="checkErr" type="radio" id="rd1-yes" value="yes"  name="radio-btn"> <span>Yes</span></p>
            <p><input data-action="checkErr" type="radio" id="rd1-no" value="no" name="radio-btn"> <span> No</span></p>
            </div>
            <div id="demo" class="">
              <h5  data-label="Mia Distribution Invoice" class="label">Please upload a file of Mia Distribution Invoice <span class="req">*</span></h5>
              <input  name="fileupload" type="file">
              <p class="small-text">Please Ensure this is the official invoice issued by Mia Distribution
              </p>
           </div>
          </div>
        </div>
         <div class="input-wrapper">
          <div class="wrapper-container">
            <h4 data-label="System Serial Number" class="label">System Serial Number <span class="req">*</span>
            </h4>
            <input data-action="checkErr" name="serialnumber" type="text"/>
          </div>
        </div>
      </div>
       <div class="tab" data-id="Confirm Information" data-name="4 Confirm Information">
       <div class="header-err-wrap">
       <div class="top-err-message"></div>
       <h3 class="tab-header">Confirm Submission</h3>
       <p>Please review your submission below to confirm all the information entered is correct.</p>
       </div>
         <div class="confirmation-content"></div>
      </div>
      <nav class="tab-pag"></nav>
    </div>
  </form>
  {{else}}
    <div class="login-wrapper">
    <h1 class="form-header">Submit New Claim</h1>
    <div><br><br><h4>Please login to submit a claim.<a href="{{loginUrl}}" data-navigation="ignore-click"> Click here</a></h4></div>
    </div>
  {{/if}}
</section>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->