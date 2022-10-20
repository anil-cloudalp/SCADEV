<style>
select{

    background-position-y: 17px;
}


.search {
    width: 80%;
    text-align: left;
    display: flex;
    justify-content: center;
    position: relative;
    border-bottom: 2px solid #271588;
    display: flex;
    margin-top: 0px;
    margin: 0 auto;
}

.container-to-news {
    width: 98%;
    text-align: left;
    display: flex;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid #B1B1B1;
    display: flex;
    margin-top: 0px;
    margin-bottom: 20px;
    margin: 0 auto;
}

.facets-item-list-sort-selector{

    min-width: 120px!important;
}

.img-news {
    width: 40%;
    float: right;
    margin-top: 3%;
}


#CTALoadMore {
    color: black;
    background-color: #f9a225;
    text-align: center;
    margin-bottom: 40px;
    height: 39px;
    width: 210px;
    font-weight: bold;
    text-align: center;
    position: relative;
    border-radius: 5px;
}

#ContainerSort{

    float: right;
    border: none;
}



.container-all-filters{

    width: 100%;
    display: table;
    margin: 0 auto;

}

.initial-info-new{

    float: left;
    width: 60%;

}

.description-facet{

    float: left;
    width: 60%;
}

.date-facet{

    font-weight: bold;
}

.name-facet{

    font-weight: bold;
    color: #271588;
    text-align: justify;
    padding-right: 15px;
}


.name-facet a{

    font-weight: bold;
    color: #271588;
}

.container-description{

    padding: 20px 0px 20px 0px;
}

#CTAContainer{

    text-align: center;
    margin-top: 45px;
}

#TriggerSearch{

    width: 9%;
    font-size: 20px!important;
    padding-left: 17px;
    line-height: 36px;
}

.search-custom{

    border: none;
}


.description-facet{

color: black;
text-align: justify;
padding-right: 15px;
}

.facets-facet-browse-results{

    width: 100%;
}

.facets-item-list-show-selector{

    display: none;
}

.date-facet{
    color: black;
}


@media(max-width: 992px){

    .facets-facet-browse-results {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }

    #FacetCategory{

        padding-left: 0px;
    }

    #imageheader {
    width: 100%;
    position: absolute;
    /* top: -50%; */
    object-fit: cover;
    height: 100vh;
    width: 100%;
    }

    
}


@media(max-width: 768px){

    .shopping-layout-content{

        padding-left: 0px;
        padding-right: 0px;
    }

    .search {

        width: 90%;
    }

    .facets-item-list-sort-selector{

        min-width: 30px;
        width: 96px;
        float: right;

    }

    .container-all-filters {
        width: 100%;
    display: table;
    margin: 0 auto;
}

.img-news{

width: 100%;

}


.img-news a img{

    width: 100%;
}

.initial-info-new {
    float: left;
    width: 100%;
}

.description-facet {
    float: left;
    width: 100%;
}

#TriggerSearch {
    padding-left: 0px;
}

.description-facet {
    text-align: justify;
    padding-right: 0px;
}

}

#loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>


<!-- <div class="search">
<input type="search" placeholder="Search" id="SearchValue" class="search-custom">
    <i id="TriggerSearch" class="header-menu-search-icon"></i>
</div>-->

<div class="container-all-filters">
    <div id="ContainerFacets"></div>
    <div id="ContainerSort"></div>
</div>
<div id="ContainerItems">
{{#each this.collection}}

<div class="container-to-news">

    <div class="container-description">
     <div class="initial-info-new">
        
       <p class="date-facet"> {{this.custitem_kd_new_date}}</p>

        <p class="name-facet"> <a href="{{this.urlcomponent}}" data-touchpoint="home"> {{this.displayname}} </a> </p> </div>

        <div class="img-news"> <a href="{{this.urlcomponent}}" data-touchpoint="home">  <img src="{{this._thumbnail.url}}" alt="" /> </a></div>

        <p class="description-facet description-p{{this.internalid}}">{{#decodeDescription this.custitem_kd_new_content}} {{/decodeDescription}} </p>

        
    </div>
</div>

{{/each}}


</div>

<div id="CtaResults"></div>

<div id="CTAContainer"></div>
