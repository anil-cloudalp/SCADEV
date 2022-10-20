<div class="container-fluid blogpostpreview">
    <div class="row">
        <div class="blogpostpreview-leftcolumn">
            <div class="blogpostpreview-previewimage">
                {{#if previewImage}}
                <a href="{{url}}">
                    <img src="{{resizeImage previewImage previewImageResizeId}}" alt="{{previewImageAlt}}" title="{{previewImageAlt}}" />
                </a>
                {{/if}}
            </div>
        </div>
        <div class="blogpostpreview-rightcolumn">
            <div class="blogpostpreview-rightcolumn-padding">
                <h1 class="blogpostpreview-title"><a href="{{url}}">{{title}}</a></h1>
                <p class="blogpostpreview-author">
                    Published by: {{author}}{{#if datePublished}}, {{datePublished}} {{/if}}
                </p>
                <div class="blogpostpreview-text">
                    {{{previewText}}}
                </div>
                <div class="blogpostpreview-continue">
                    <a href="{{url}}">{{linkText}}</a>
                </div>
            </div>
        </div>
    </div>
</div>