<div class="container-fluid blogpost-container">

    {{#if loading}}
    <h3>{{translate 'Loading'}}...</h3>
    {{else}}

    {{#if headerImage}}
    <div class="blogpost-heading-image">
        <img src="{{resizeImage headerImage headerImageResizeId}}" alt="{{headerImageAlt}}" title="{{headerImageAlt}}" />
    </div>
    {{/if}}

    <div class="row">
        <div class="col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
            <div class="blogpost-padding">
                <div class="blogpost-heading">
                    {{#if category}}
                        <h5 class="blogpost-category">
                            Category: {{category}}
                        </h5>
                    {{/if}}

                    <h1 class="blogpost-title">
                        {{title}}
                    </h1>

                    <p class="blogpost-author-date">
                        Published by: {{author}}{{#if datePublished}}, {{datePublished}} {{/if}}
                    </p>
                </div>

                <div class="blogpost-content">
                    {{{content}}}
                </div>
            </div>
        </div>
    </div>
    {{/if}}

</div>