// @module MIA.MiaRewardsExtension.Confirmation
define('MIA.MiaRewardsExtension.Confirmation.View'
	, [
		'mia_miarewardsextension_confirmation.tpl'
		, 'Backbone'
        , 'Utils'
	]
	, function (
		mia_miarewardsextension_confirmation_tpl
		, Backbone
        ,Utils

	) {
		'use strict';

		// @class MIA.MiaRewardsExtension.MiaRewardsModule.View @extends Backbone.View
		return Backbone.View.extend({

			template: mia_miarewardsextension_confirmation_tpl

            ,title: Utils.translate('Submit New Claim')

            ,modalClass: 'global-views-modal-large'
        
            // @property {String} page_header
            ,page_header: Utils.translate('Submit New Claim')

            ,initialize: function() {
            
            }
	
			//@method getContext @return MIA.MiaRewardsExtension.MiaRewardsModule.View.Context
			, getContext: function getContext() {
				//@class MIA.MiaRewardsExtension.MiaRewardsModule.View.Context
				this.message = this.message || 'Hello World!!'
				return {
					page_header: this.page_header,
                    body : this.options.body
				};
			}
		});
	});
