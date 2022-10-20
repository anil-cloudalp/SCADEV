/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
    'TCI.PCP_PLPCustomization.Facets.Browse.CategoryHeading.ViewExt', [
        'Facets.Browse.CategoryHeading.View', 'underscore', 'Backbone'
    ],
    function (
        FacetsBrowseCategoryHeadingView, _, Backbone
    ) {
        'use strict';

        _.extend(FacetsBrowseCategoryHeadingView.prototype, {

            getContext: _.wrap(FacetsBrowseCategoryHeadingView.prototype.getContext, function getContext(fn) {



                var context = fn.apply(this, _.toArray(arguments).slice(1));
                var siblings = this.model.get('siblings');
                var self = this;
                if (siblings && siblings.length) {

                    var urlfragment = this.model.get('fullurl').split('/');
                    urlfragment = _.last(urlfragment);
                    var currentVersion = {
                        canonical: this.model.get('canonical'),
                        categories: this.model.get('categories') || [],
                        description: this.model.get('description'),
                        fullurl: this.model.get('fullurl'),
                        idpath: this.model.get('idpath'),
                        internalid: this.model.get('internalid'),
                        isVersionDisplayed: this.model.get('isVersionDisplayed'),
                        isprimaryurl: this.model.get('isprimaryurl'),
                        name: this.model.get('name'),
                        parenturl: this.model.get('parenturl'),
                        sequencenumber: this.model.get('sequencenumber'),
                        urlfragment: urlfragment
                    }
                    siblings.push(currentVersion);
                    if(!_.isUndefined(this.model.get('description')))
                    {
                        var isCurrent = this.model.get('description').toLowerCase() == 'current' ? true : false;
                    }
                 
                    if(isCurrent == false)
                    {
                        var maxArr = [];
                        _.each(siblings,function(val){
                            var urlFraArray = val.urlfragment.split('-');
                            _.each(urlFraArray, function (value) {
                              
                                    if (!_.isNaN(parseInt(value))) {
                                        maxArr.push(parseInt(value))
                                    }
                            })
                        })
                        var max = Math.max(...maxArr);
                        max = String(max);
                        
                        _.each(siblings,function(val){
                          if(val.urlfragment.indexOf(max) != -1)
                          {
                           
                            val.description = "Current" ;
                          }
                          else{
                             _.each(maxArr,function(arrVal){
                                 if(String(arrVal).indexOf(val.urlfragment) != -1) 
                                 {
                                    val.description = String(arrVal);
                                 }
                             }) 
                          }
                        })
                          
                    }
                    else{
                        _.each(siblings, function (val) {

                            if (_.isUndefined(val.description)) {
                                var urlFraArray = val.urlfragment.split('-');
                                _.each(urlFraArray, function (value) {
                                  
                                        if (!_.isNaN(parseInt(value))) {
                                            val.description =  String(value);
                                        }
                                    
    
                                })
                            }
    
                        })
            
                    }
                   
                    siblings = _.sortBy(siblings, function (sibling) {
                        return !_.isUndefined(sibling.description) ? sibling.description : sibling.name;
                    })
                    siblings = siblings.reverse();
               
                    for (var i = 0; i < siblings.length; i++) {
                        siblings[i].isVersionDisplayed = false;

                        if (!_.isUndefined(this.model.get('description')) && !_.isUndefined(siblings[i].description) && this.model.get('description') === siblings[i].description) {
                            siblings[i].isVersionDisplayed = true;
                        }
                    }
                }

                context.hasDescription = this.model.get('description') !== '' && !_.isUndefined(this.model.get('description'));
                context.hasOldVersion = !_.isUndefined(this.model.get('siblings')) ? this.model.get('siblings').length > 0 : false;
                context.siblings = siblings;
              

                return context;

            })

        })

    });