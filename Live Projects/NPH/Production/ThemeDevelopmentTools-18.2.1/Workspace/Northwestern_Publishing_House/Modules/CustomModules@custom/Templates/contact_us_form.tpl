<div class="contact-us-form-content">
	
	<form class="contact-us-form">
	
		<div class="fieldset">
			<div class="legend">Personal Info</div>
			<div class="row">
			<div class="col-sm-6">
				<label>First Name<span class="required">*</span></label>
				<input type="text" id="firstname" class="contact-us-field" data-label="First Name"/>
			</div>
			<div class="col-sm-6">
				<label>Last Name<span class="required">*</span></label>
				<input type="text" id="lastname" class="contact-us-field" data-label="Last Name"/>
			</div>
			</div>
			<div>
				<label>E-mail Address<span class="required">*</span></label>
				<input type="email" id="email" class="contact-us-field" data-label="E-mail Address"/>
			</div>
			<div>
				<label>Phone Number</label>
				<input type="number" id="phone" class="contact-us-field"/>
			</div>
		</div>
		<div class="fieldset">
			<div class="legend2">Message</div>
			<div>
				<label>Message<span class="required">*</span></label>
				<textarea id="message" class="contact-us-field" data-label="Message"></textarea>
			</div>
			<p>By submitting your information you declare that you are consenting to the terms of our <a href="/privacy-policy">privacy policy</a>.</p>
		</div>
		
		<div class="required-text">
			<span class="required">*</span> Required Fields
		</div>
		<div class="submit-btn">
			{{#if isResponse}}
				<div id="custom-error-message" {{#if isError}}data-validation-error="block" class="global-views-message global-views-message-error alert"{{else}}class="global-views-message global-views-message-success alert"{{/if}} role="alert">
				{{response}}
				  <span class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true" class="dis-btn">&times;</span>
				  </span>
				</div>
				<br/>
			{{/if}}
			<button id="contact-us-submit" type="submit">SUBMIT</button>
		</div>
	</form>
</div>