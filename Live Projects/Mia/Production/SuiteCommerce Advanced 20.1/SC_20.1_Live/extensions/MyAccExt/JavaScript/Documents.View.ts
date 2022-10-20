

/// <amd-module name="Documents.View"/>
import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as documents_tpl from 'documents.tpl';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import BackboneModel = require('../../../Commons/BackboneExtras/JavaScript/Backbone.Model');
import Session = require('../../../Commons/Session/JavaScript/Session');

// @class Documents.View @extends Backbone.View
const DocumentsView: any = BackboneView.extend({
    template: documents_tpl,

    page_header: Utils.translate('Downloads'),

    title: Utils.translate('Downloads'),

    attributes: {
        id: 'documents',
        class: 'DocumentsView'
    },
	events: {
		'change [name="doc_filter"]': 'applyFilter'
	},
	applyFilter: function(e){
		this.vendor = this.$('#doc_vendor').val();
		this.category = this.$('#doc_category').val();
		
		var filter = this.vendor + '-' + this.category;
		var serviceUrl = Utils.getAbsoluteUrl('services/GetMacDetails.ss?docs=T&filter=' + filter);
		var self = this;
		new BackboneModel().fetch({url: serviceUrl}).then(function(res){
			
			self.refreshContent(res);
			self.render();
		});

	},
	refreshContent: function(res){
		this.documents = (res && _.has(res,'documents'))? res.documents : '';
		this.vendorsOptions = (res && _.has(res,'vendorsOptions'))? res.vendorsOptions : '';
		this.downloadCatOptions = (res && _.has(res,'downloadCatOptions'))? res.downloadCatOptions : '';
	},
    beforeShowContent: function(){
		
		
		var self = this;
		var promise = new BackboneModel().fetch({url: Utils.getAbsoluteUrl('services/GetMacDetails.ss?docs=T')}).then(function(res){
			
						self.refreshContent(res);
					});
					
			return promise;
	},


    // @method getSelectedMenu
    getSelectedMenu: function() {
        return 'documents';
    },
    // @method getBreadcrumbPages
    getBreadcrumbPages: function() {
        return {
            text: this.title,
            href: '/downloads'
        };
    },

    // @method getContext @return Documents.View.Context
    getContext: function() {
        // @class Documents.View.Context
		
        return {
            documents: this.documents || '',
			downloadCatOptions: this.downloadCatOptions || '',
			vendorsOptions: this.vendorsOptions || '',
			vendor: this.vendor,
			category: this.category,
			domain: Session.get('touchpoints.home')
            
        };
    }
});

export = DocumentsView;
