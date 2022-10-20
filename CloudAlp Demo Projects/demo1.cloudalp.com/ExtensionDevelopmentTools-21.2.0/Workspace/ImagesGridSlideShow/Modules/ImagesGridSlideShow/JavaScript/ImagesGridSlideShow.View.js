// @module Acme.ImagesGridSlideShow.ImagesGridSlideShow
define("Acme.ImagesGridSlideShow.ImagesGridSlideShow.View", [
  "CustomContentType.Base.View",
  "acme_imagesgridslideshow_imagesgridslideshow.tpl",
  "Utils",
  "Backbone",
  "jQuery",
  "underscore",
  "jquery.slick"
], function (
  CustomContentTypeBaseView,
  acme_imagesgridslideshow_imagesgridslideshow_tpl,
  Utils,
  Backbone,
  jQuery,
  _,
  slick
) {
  "use strict";

  // @class Acme.ImagesGridSlideShow.ImagesGridSlideShow.View @extends Backbone.View
  return CustomContentTypeBaseView.extend({
    template: acme_imagesgridslideshow_imagesgridslideshow_tpl,
    
    install: function (settings, context_data) {
       this._install(settings, context_data);
       
    },

    initialize: function (options) {
      var SettingOpt =[];
    
       this.on('afterViewRender',() =>{
         var self =this;
        //  console.log(self.sliderSettings);
         self.$(".slider").slick(self.sliderSettings);
        });
       
    },
    

    // The list of contexts that you may need to run the CCT
    contextDataRequest: ["item"],

    // By default when you drop a CCT in the SMT admin, it will run the 'validateContextDataRequest' method to check that you have
    // all the requested contexts and it will fail if some context is missing.
    validateContextDataRequest: function validateContextDataRequest() {
      return true;
    },

    getContext: function getContext() {     
       
      let resultData =this.settings;
      //  console.log(resultData);
      let Slick =[];
      var self = this;
  
      $.each(resultData,function(index, value) {
        	 
        var Index = index.split('custrecordcustom_images_grid_img')[1];
         if(!isNaN(Index) && value !=""){
            var obj ={};
           obj.imageURL =resultData[`custrecordcustom_images_grid_img${Index}_url`];
           obj.redirectUrl =resultData[`custrecordcustom_images_grid_href${Index}`];
           obj.altText =resultData[`custrecordcustom_images_grid_img_alt${Index}`];
           obj.button =resultData[`custrecordcustom_button${Index}`];
           obj.id =Index
           
           Slick.push(obj);
            
         }
          
        });
        Slick.sort((a,b) =>  a.id-b.id);

        var sliderSettings={
            rows:parseInt(resultData[`custrecordcustom_slick_grid_desk_rows`]),
            slidesToShow:parseInt(resultData[`custrecordcustom_slick_slides_show`]),
            // slidesToShow:4,
            slidesToScroll:parseInt(resultData[`custrecordcustom_slick_slides_scroll`]),
            dots:true,
            responsive: [{
                             breakpoint:767,
                             settings: { 
                               rows:parseInt(resultData[`custrecordcustom_slick_grid_mobile_rows`]),
                               slidesToShow:parseInt(resultData[`custrecordcustom_slick_slides_show_mobil`]),
                               slidesToScroll:parseInt(resultData[`custrecordcustom_slick_slides_scroll_mob`])

                              }
                           }
                          ]
             
        };
        if(sliderSettings){
          this.sliderSettings =sliderSettings

        } 
        // console.log(Slick);
      return {
          slideData:Slick
      };
    },
   
  });
});
