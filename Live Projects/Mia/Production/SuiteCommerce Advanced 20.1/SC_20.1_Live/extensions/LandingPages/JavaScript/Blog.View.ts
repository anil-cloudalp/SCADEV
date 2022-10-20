
/// <amd-module name="Blog.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as blog_page_tpl from 'blog_page.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import BackboneModel = require('../../../Commons/BackboneExtras/JavaScript/Backbone.Model');

// @module Blog.View @extends Backbone.View
const BlogView: any = BackboneView.extend({
    template: blog_page_tpl,

    title: Utils.translate('Blog | Mia Telecomms'),

    page_header: Utils.translate('Blog'),

    attributes: {
        id: 'blog-page',
        class: 'blog-page'
    },

    initialize: function() {
        
    },
    getContext: function() {
       

        return {
            
        };
    }
});

export = BlogView;
