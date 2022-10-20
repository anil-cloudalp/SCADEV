<section class="mia-rewards-section">
    <div class="mia-rewards-section-header">
        <div class="mia-rewards-section-logo">
            <p>
                <img class="mia-rewards-section-logo-image"
                    src="{{getExtensionAssetsPathWithDefault logoUrl 'img/mia-light.png'}}"
                    alt="mia-rewards-home-image">
            </p>
        </div>
        <div class="mia-rewards-section-top-menu">
            <div class="mia-rewards-section-menu-wrapper">
                <a class="active" data-id="section1" data-action="show-hide">
                    MIA Rewards
                </a>
                <a class="" data-id="section2" data-action="show-hide">
                    Account
                </a>
                <a class="" href="#" data-touchpoint="logout" name="signout">
                    {{translate 'Logout'}}
                </a>
            </div>
        </div>
        <div class="mia-rewards-section-content-wrapper">
            <div class="mia-rewards-section-content-wrapper-sections tab-active" id="section1">
                <div class="mia-rewards-section-content-wrapper-logo">
                    <div class="mia-rewards-section-content-wrapper-logo-image"><img
                            src="{{getExtensionAssetsPathWithDefault logoUrl 'img/icici-amazon-pay.png'}}"></div>
                    <div class="mia-rewards-section-content-wrapper-logo-text">
                        <p class="welcome-text">Welcome</p>
                        <div class="mia-rewards-section-text-wrapper">
                            <p class="user-name-text">{{displayName}}</p><span>(MIA Distribution)</span>
                        </div>
                    </div>
                </div>
                <div class="mia-rewards-section-content-wrapper-container">
                    <div class="mia-rewards-section-main-div-first">
                        <div class="mia-rewards-section-sub-div-first">
                            <div class="sub-div1">
                                <p class="small-text"><small>Earn more with</small></p>
                                <p class="other-text">PanaPlus</p>
                            </div>
                            <div class="sub-div2"></div>
                            <div class="sub-div3">
                                <p class="sub-div3-text1">Panasonic</p>
                                <p class="sub-div3-text2">BUSINESS</p>
                            </div>
                        </div>
                    </div>
                    <div class="mia-rewards-section-main-div-second">
                        <div class="mia-rewards-section-sub-div-second">
                            <p class="sub-div-second-text">UNPAID CLAIMS</p>
                            <div class="mia-rewards-section-sub-div-second-box">
                                <p>$ 0</p>
                            </div>
                        </div>
                        <div class="mia-rewards-section-sub-div-second">
                            <p class="sub-div-second-text">PROMOTION ENDS</p>
                            <div class="mia-rewards-section-sub-div-second-box">
                                <p>27 March 2020</p>
                            </div>
                        </div>
                        <div class="mia-rewards-section-sub-div-second">
                            <p class="sub-div-second-text">LAST DATE TO SUBMIT CLAIMS</p>
                            <div class="mia-rewards-section-sub-div-second-box">
                                <p>3 April 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="mia-rewards-section-main-div-third">
                        <div class="mia-rewards-section-sub-div-third1">
                            <p class="sub-div-second-text">CLAIM HISTORY</p>
                            <div class="mia-rewards-section-sub-div-third1-box">
                                <p>$ 0</p>
                            </div>
                        </div>
                        <div class="mia-rewards-section-sub-div-third2">
                            <p class="sub-div-second-text">LINKS</p>
                            <div class="mia-rewards-section-sub-div-third2-box">
                                {{#if docID}}
                                <a href="/" data-hashtag="#principal-registration"
                                    data-touchpoint="home">Principal Registration</a>
                                {{else}}
                                <a data-action="redirect-doc">Principal Registration</a>
                                {{/if}}
                                <a href="/" data-hashtag="#submit-claim" data-touchpoint="home">Submit New
                                    Claim</a>
                                <a href="">Download Brochure</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mia-rewards-section-content-wrapper-sections" id="section2">
                This Account section
            </div>
        </div>
</section>