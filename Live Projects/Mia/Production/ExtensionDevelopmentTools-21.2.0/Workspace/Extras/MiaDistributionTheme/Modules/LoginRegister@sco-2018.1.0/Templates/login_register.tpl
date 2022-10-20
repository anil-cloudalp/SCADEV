<div class=" login-page-content">
<section class="login-register " >
   <div class="col-sm-6">
  <h1 class="login-page-content-heading">Howdy Partner,</h1>
	   <h1 class="login-page-content-heading-2">Welcome Back.</h1>
   
    
	<div {{#if showRegister}} class="login-register-body" {{else}} class="login-register-body-colored" {{/if}}>

		{{#if showLogin}}
			<div class="login-register-wrapper-column-login">
				<div class="login-register-wrapper-login" data-view="Login"></div>
			</div>
		{{/if}}

	</div>
	



	<div data-cms-area="home_cms_main_content" data-cms-area-filters="path"></div>


    <div class="register-page-redirect-link">
		<p class="not-a-partner">Not a Partner? <a class="login-redirect-register" data-touchpoint="home" data-hashtag="become-a-partner"> Click Here</a> To start Your Journey </p>
	</div>
	<div class="login-register-forgetpassword-btn">  
		<a  data-action="forgot-password" href="/forgot-password">
			{{translate 'Forgot password?'}}
		</a>
    </div>	
  </div>
</section>
<div class="col-sm-6 login-page-image-form">
      <div class="login-page-image-field">
        <img src="{{getThemeAssetsPath (resizeImage 'img/login-main-img-content.png' ../imageHomeSize)}}" alt="demo-get in touch">
      </div>
    </div>
</div>


    <div class="container home-main-hr1"><hr class="embeded-hr-content"></div>



      <div class="container find-the-location-content-login">
        <div class="main-content-of-location-content-login">
          <div class="col-sm-4 location-heading-text-content-component-login">
            <div class="location-heading-content-component-login">
             <h2 class="heading-1-location-login">Find a Location</h2>
              <h2 class="heading-2-location-login">Right for You</h2>
              </div>
             <p class="Desktop-location-view">{{translate 'Book a time at one of our experience centres and explore UC solutions accross small mediam and large rooms.'}}</p>
              <p class="mobile-location-view">{{translate 'With Physical site locations in Melbourne and Sydney,  MIA Distribution has a National supply chain network servicing partners across Australia and the APAC region.'}}</p>
             
			  <div class="about-us-button12-login">
             <div class="about-us-eff-12-login"></div>
             <a  class="anchor12-login" data-touchpoint="home" data-hashtag="get-in-touch-new" > Get In Touch </a>
            </div>
          </div>
          <div class="col-sm-4 sydney-office-content1-login">
            <div class="sydney-office-text-content-login">
              <h2 class="sydney-heading-location-login"><span class="highlited-span-content-login">Sydney </span>Office &</h2>
              <h2 class="component-login"> Experience Centre</h2> 
            </div>
            <p>Unit 4/7-9 Orion Rd,
               Lane Cove West,
              Sydney Australia, NSW 2066</p>
              <div class="sydney-map-content1-login">
                <img src="{{getThemeAssetsPath (resizeImage 'img/login-map-2.png' ../imageHomeSize)}}" alt="sydney map">
              </div>
          </div>
          <div class="col-sm-4 mailborney-office-content1-login">
            <div class="mailborney-office-text-content-login">
              <h2 class="melborney-heading-content-1-login"><span class="highlited-span-content-login">Melbourne </span>Office &  </h2>
              <h2 class="melborney-heading-content-2-login"> Experience Centre</h2>
             </div>
            <p>Pier 35 – Suite P1A,
             263-329 Lorimer Street,
            Port Melbourne, VIC 3207</p>
              <div class="mailborney-map-content1-login">
                <img src="{{getThemeAssetsPath (resizeImage 'img/login-map-1.png' ../imageHomeSize)}}" alt="mailborney map">
              </div>
          </div>
        </div>



    

{{!----
Use the following context variables when customizing this template:

	showRegister (Boolean)
	showCheckoutAsGuest (Boolean)
	showLogin (Boolean)
	showRegisterOrGuest (Boolean)

----}}


