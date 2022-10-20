<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

<div id="product-sales-page-2" data-banner="psp2">
  <div class="header">
    <div class="container-fluid">
      <i class="fa fa-play-circle"></i>
      <h1>{{ heading_title }}</h1>
      <p>
        {{{ heading_description }}}
      </p>
      <div class="arrow"></div>
    </div>
  </div>
  <div id="benefits-2-container">
    <div class="row">
      <div class=" col-md-6 col-sm-12">
        <img src={{product_benefits_image}} alt="" />
      </div>
      <div class="col-md-6 col-sm-12">
        <div id="main-title-p">
          <h2>{{ product_benefits }}</h2>
          <p>
            {{{ product_benefits_description }}}
          </p>
        </div>
        <div class="benefits">
          <div>
            <i class="fa fa-circle-o"></i>
          </div>
          <div class="benefit-title-p">
            <h3>{{key_benefits_1_title}}</h3>
            <p>
              {{{key_benefits_1}}}
            </p>
          </div>

        </div>
        <div class="benefits">
          <div>
            <i class="fa fa-circle-o"></i>
          </div>
          <div class="benefit-title-p">
            <h3>{{key_benefits_2_title}}</h3>
            <p>
              {{{key_benefits_2}}}
            </p>
          </div>

        </div>
        <div class="benefits">

          <div>
            <i class="fa fa-circle-o"></i>
          </div>
          <div class="benefit-title-p">
            <h3>{{key_benefits_3_title}}</h3>
            <p>
              {{{key_benefits_3}}}
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>
  <div id="customer-reviews">
    <h2>{{customer_quote_title}}</h2>
    <span id="quote-icon">“</span>
    <div class="review-phrase">
      {{{customer_quote}}}
    </div>
    <img class="review-photo" src={{customer_quote_photo}} alt="" />
  </div>
  <div id="benefits-3-container">
    <div id="features" class="row">
      <h2>{{product_features_title}}</h2>
      <p>
        {{{product_features_description}}}
      </p>
    </div>
    <div class="col-md-6 col-sm-12">
      <div class="benefits-2">

        <div>
          <i class="fa fa-circle-o"></i>
        </div>
        <div class="benefit-title-p">
          <h3>{{key_benefits_4_title}}</h3>
          <p>
            {{{key_benefits_4}}}
          </p>
        </div>

      </div>
      <div class="benefits-2">

        <div>
          <i class="fa fa-circle-o"></i>
        </div>
        <div class="benefit-title-p">
          <h3>{{key_benefits_5_title}}</h3>
          <p>
            {{{key_benefits_5}}}
          </p>
        </div>

      </div>
      <div class="benefits-2">

        <div>
          <i class="fa fa-circle-o"></i>
        </div>
        <div class="benefit-title-p">
          <h3>{{key_benefits_6_title}}</h3>
          <p>
            {{{key_benefits_6}}}
          </p>
        </div>

      </div>
    </div>
    <div class="col-md-6 col-sm-12">
      <div class="benefits-2">

        <div>
          <i class="fa fa-circle-o"></i>
        </div>
        <div class="benefit-title-p">
          <h3>{{key_benefits_7_title}}</h3>
          <p>
            {{{key_benefits_7}}}
          </p>
        </div>

      </div>
      <div class="benefits-2">

        <div>
          <i class="fa fa-circle-o"></i>
        </div>
        <div class="benefit-title-p">
          <h3>{{key_benefits_8_title}}</h3>
          <p>
            {{{key_benefits_8}}}
          </p>
        </div>

      </div>
      <div class="benefits-2">

        <div>
          <i class="fa fa-circle-o"></i>
        </div>
        <div class="benefit-title-p">
          <h3>{{key_benefits_9_title}}</h3>
          <p>
            {{{key_benefits_9}}}
          </p>
        </div>

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