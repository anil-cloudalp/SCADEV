<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5fbd49d4722aba53"></script>
<style>
.text-wrap{

    float: right;
    margin: 20px;
    width: 60%;
    margin-top: 10px;
    margin-right: 0px;
}


.article-paragraph{

    text-align: justify;
}


.next-article-container{
    border-top: 3px solid #91b5f7;
    border-bottom: 3px solid #91b5f7;
    padding: 35px 0px 35px 0px;
    margin-top: 40px;
    margin-bottom: 40px;
}

.next-article-title{

    text-transform: none;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: 0px;
}

.tag-next-article{

    font-weight: bold;
    font-size: 24px;
}

.article-title{

    text-transform: none;
    color: white;
    letter-spacing: 0px;
    padding: 35px;
    font-size: 25px;
}

.container-article-title{

    margin: 20px 0px 20px 0px;
}

.article-container .container-content{

    display: table;
    width: 100%;

}


@media(max-width: 768px){

    .text-wrap{

        width: 100%;
    }

    .article-title{

        font-size: 16px;
    }
}

</style>

{{#if isItemProperlyConfigured}}
<div class="article-container">

<div style="background-image: url({{this.model.item.custitem_kd_item_background}})" class="container-article-title">

<h3 class="article-title">{{this.model.item.displayname}}</h3>

</div>

<div class="article-date"><p>{{this.model.item.custitem_kd_new_date}}</p></div>
<div class="container-content">
    <img class="text-wrap" src="{{this.FirstImage}}" />
    <p class="article-paragraph">{{#decodeFullDescription this.model.item.custitem_kd_new_content}}  {{/decodeFullDescription}}</p>
    
</div>

<div class="addthis_default_style addthis_toolbox addthis_button_compact"></div>
<div class="addthis_inline_share_toolbox"></div>

    {{#if this.model.item.relateditems_detail}}

    <div class="next-article-container">
            <h3 class="next-article-title">Read the next article</h3>

            <a class="tag-next-article" href="{{this.model.item.relateditems_detail.[0].urlcomponent}}" data-touchpoint="home"> {{this.model.item.relateditems_detail.[0].displayname}} </a>
    </div>
    {{/if}}
 </div>   
{{/if}}