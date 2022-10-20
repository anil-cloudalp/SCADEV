<div class="become-a-dealer-container">
  <header>
    <h2 class="become-a-dealer-title">
      Become a dealer
    </h2>
  </header>
  <form class="become-a-dealer-form" method="POST" name="become-a-dealer">
    <div class="become-a-dealer-first-name-div">
      <label for="first-name" class="become-a-dealer-first-name-label">
        {{translate 'First Name'}}
        <small class="become-a-dealer-required">*</small>
      </label>
      <input type="text" name="firstname" class="become-a-dealer-first-name-input" value="" data-action="firstname">
      <p class="error-msg-fname"></p>
    </div>
    <div class="become-a-dealer-last-name-div">
      <label for="last-name" class="become-a-dealer-last-name-label">
        {{translate 'Last Name'}}
        <small class="become-a-dealer-required">*</small>
      </label>
      <input type="text" name="lastname" class="become-a-dealer-last-name-input" value="" data-action="lastname">
      <p class="error-msg-lname"></p>
    </div>

    <div class="become-a-dealer-company-div">
      <label for="company" class="become-a-dealer-company-label">
        {{translate 'Company'}}
        <small class="become-a-dealer-required">*</small>
      </label>
      <input type="text" name="company" class="become-a-dealer-company-input" value="" data-action="company">
      <p class="error-msg-company"></p>
    </div>

    <div class="become-a-dealer-email-address-div">
      <label for="company" class="become-a-dealer-email-address-label">
        {{translate 'Email address'}}
        <small class="become-a-dealer-required">*</small>
      </label>
      <input type="email" name="email" class="become-a-dealer-email-address-input" value="" data-action="email-address"
        placeholder="your@email.com">
      <p class="error-msg-email"></p>
    </div>

    <div class="become-a-dealer-phone-div">
      <label for="company" class="become-a-dealer-phone-label">
        {{translate 'Phone'}}
        <small class="become-a-dealer-required">*</small>
      </label>
      <input type="phone" name="phone" class="become-a-dealer-phone-input" value="" data-action="phone">
      <p class="error-msg-phone"></p>
    </div>

    <div class="become-a-dealer-comments-div">
      <label for="company" class="become-a-dealer-comments-label">
        {{translate 'Why do you want to become a dealer'}}
      </label>
      <div>
        <textarea id="comments" class="become-a-dealer-comments-text" name="comments">
      </textarea>
      </div>
    </div>
    <div class="status-form-msg"></div>

    <div class="become-a-dealer-form-actions">
      <button type="submit" data-action="become-a-dealer-submit"
        class="become-a-dealer-actions-button-submit">{{translate 'Submit'}}</button>
    </div>

  </form>
</div>
