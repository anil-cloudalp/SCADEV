<style>
  #case-studies {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    /*font-family: "Raleway", sans-serif;*/
  }

  #case-studies .row {
    margin-right: 0px;
    margin-left: 0px;
  }

  #case-studies div.col-md-6 {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  #main-banner .main-img {
    position: relative;
    height: 450px;
  }

  #main-banner .title-container {
    background-color: rgb(0, 45, 114, 50%);
    width: 100%;
    padding: 2em 2em 0.5em 5em;
    position: absolute;
    bottom: 0px;
  }

  #main-banner .title {
    color: white;
    font-weight: bolder;
    font-size: 40px;
    text-transform: uppercase;
  }

  #case-studies .side-img {
    border: 0em;
    max-width: 100%;
    position: relative;
    padding: 0px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  #case-studies h2.title {
    color: black;
    font-weight: bold;
    font-size: 24px;
    text-transform: none;
    margin-top: 12px;
  }

  #case-studies p.text {
    font-size: 14px;
    color: black;
    line-height: 21px;
  }

  #case-studies ul.content-list {
    font-size: 14px;
    color: black;
    line-height: 21px;
    padding-inline-start: 15px;
  }

  #case-studies h5.subtitle {
    color: #002d72;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
  }

  #case-studies h5.subtitle-2 {
    color: #002d72;
    font-size: 14px;
    text-transform: none;
    font-weight: 500;
  }

  #case-studies a.anchor-arrow {
    font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 46px !important;
    text-decoration: none !important;
    padding-bottom: 10px !important;
    margin-left: -2px !important;
    opacity: 1;
    transition: opacity 0.2s;
    color: black;
    position: relative;
    top: -25px;
  }

  #case-studies a.anchor-arrow:hover {
    opacity: 0.7;
  }

  #case-studies img.social-media {
    height: 24px;
    width: auto;
    padding: 0px 3px;
  }

  #case-studies div.social-media-row {
    display: flex;
    margin-top: -19px;
    margin-left: -5px;
  }

  @media (max-width: 1200px) {}

  @media (max-width: 991px) {}

  @media (max-width: 768px) {

    #main-banner .main-img{
    position: relative;
    height: 270px;
    background-position: cover;
    width: 100%;
    background-size: 100%;
    background-repeat-y: no-repeat!important;
    }
    
  }

  @media(max-width: 660px){
    #main-banner .main-img{
    position: relative;
    height: 209px;
    background-position: cover;
    width: 100%;
    background-size: 100%;
    background-repeat-y: no-repeat!important;
    }
  }

  @media(max-width: 420px){
    #main-banner .main-img{
    height: 130px;
    }
  }

  
  @media(max-width: 320px){
    #main-banner .main-img{
    height: 100px;
    }
  }

  /******/

  #main-banner .main-img {
    background-image: url("/site/Case Studies/plp-images/case-study-banner.jpg");
  }

  #main-content .row:nth-child(odd) .side-img-overlay {
    background-image: url("/site/Case Studies/plp-images/read-more-left.jpg") !important;
    background-size: cover;
  }

  #main-content .row:nth-child(even) .side-img-overlay {
    background-image: url("/site/Case Studies/plp-images/read-more-right.jpg") !important;
    background-size: cover;
  }

  .facets-facet-browse-narrowedby,
  .facets-facet-browse-header,
  .facets-facet-browse-category,
  .facets-facet-browse-facets {
    display: none;
  }

  .facets-facet-browse-results {
    width: 100%;
  }

  #main-banner {
    margin-bottom: 15px;
  }
</style>

<div id="case-studies">
  <div id="main-banner">
    <div class="main-img">
    </div>
  </div>

  <div id="main-content">

    {{#each collection.models}}
  
    <div class="row item">
      <div class="col-md-6 col-xs-12 side-img">
      {{#if custitem_kd_case_thumb_img}}
        <img src={{custitem_kd_case_thumb_img}} alt="">
        <a class="side-img-overlay" href={{urlcomponent}}> </a>
        {{else}}
          <img src={{custitem_kd_case_study_header_img}} alt="">
        <a class="side-img-overlay" href={{urlcomponent}}> </a>
      {{/if}}  
      </div>
      <div class="col-md-6 col-xs-12 description">
        <h2 class="title">
          {{custitem_kd_case_study_header_txt}}
        </h2>
        <h5 class="subtitle">
          {{custitem_kd_case_study_tags}}
        </h5>
        <h5 class="subtitle-2">/ {{custitem_kd_case_study_datenew}}</h5>
        <p class="text">
          {{custitem_kd_case_study_intro}}
        </p>
        <a class="anchor-arrow" href={{urlcomponent}}> → </a>
        <div class="row social-media-row">
          <a href={{facebookurl}} target="_blank">
            <img src="/site/Landing-Pages/case-studies/facebook-icon.png" alt="" class="social-media" />
          </a>
          <a href={{twitterurl}} target="_blank">
            <img src="/site/Landing-Pages/case-studies/twitter-icon.png" alt="" class="social-media" />
          </a>
        </div>
      </div>
    </div>
    {{/each}}

  </div> {{!-- main container ends --}}
</div>