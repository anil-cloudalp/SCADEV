           <div class="form-in-home-page">
                <div class=" row form-tab-home">
                   <div class="col-sm-12 form-content">
                        <div class="get-in-touch-text-in-home-page">{{translate 'Get In Contact'}}</div>
    
                            <form method="POST" class="form-home-page">
                                <div class="content-form-first-name-or-lastname">
                                    <div class="col-sm-6 input-field-first-name" data-validation="control-group">
                                        <div class="name-field-content-form-first-name" data-validation="control" >
                                          <input type="text" name="firstname" placeholder="*First Name.">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 input-field-Last-name" data-validation="control-group">
                                        <div class="name-field-content-form-last-name" data-validation="control">
                                            <input type="text" name="lastname" placeholder="*Last Name.">
                                        </div>
                                    </div>
                                    <div class="input-field-email-name" data-validation="control-group">
                                        <div class="name-field-content-form-email-name" data-validation="control">
                                            <input type="email" name="email" placeholder="*Email Address.">
                                        </div>
                                    </div>
                                    <div class="input-field-phone-name" data-validation="control-group">
                                        <div class="name-field-content-form-phone-name" data-validation="control">
                                            <input type="text" name="phone" placeholder="*Phone Number.">
                                        </div>
                                    </div>
                                    <div class="input-field-business-name" >
                                        <div class="name-field-content-form-business-name" >
                                            <input type="text" name="business" placeholder="Business Name.">
                                        </div>
                                    </div>
                                    <div class="input-field-comment-name">
                                        <div class="name-field-content-form-comment-name">
                                            <input type="text" name="comments" placeholder="Im Intrested in.">
                                        </div>
                                    </div>
                                </div>
                      
                                <div class="submit-button-content">
                                    <a class="submit-home-button" data-action="submitcontent" type="submit">{{translate 'Submit'}}</a>
                                </div>
                                <div class="signup-button-content">
                                    <a class="signup-home-button" data-touchpoint="login" data-hashtag="login-register">{{translate 'SignUp/Login'}}</a>
                                </div>
                                <div class="see-vendors-button-content">
                                    <a class="see-vendors-home-button">{{translate 'See Vendors'}}</a>
                                </div>
                            </form>
                            <div id="alert-placeholder" >
                               <p class="alert-type" data-type="alert-placeholder"></p>
                            </div>
                        </div>
                    </div>
                </div> 


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->