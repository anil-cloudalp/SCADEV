<section class="container-fluid blogpostlist-container">
    {{#if loading}}
    <h3>{{translate 'Loading'}}...</h3>
    {{else}}
    <div class="row">
        <div class="col-xs-12 col-lg-10 col-lg-offset-1">
            <h1 class="blogpostlist-title">{{title}}</h1>
		    {{#if postsNotFound}}
		        <p>{{postsNotFoundText}}</p>
        	{{/if}}
            <div class="blogpostlist-list" data-view="PostList.Collection"></div>
        </div>
    </div>
    {{/if}}
</section>
