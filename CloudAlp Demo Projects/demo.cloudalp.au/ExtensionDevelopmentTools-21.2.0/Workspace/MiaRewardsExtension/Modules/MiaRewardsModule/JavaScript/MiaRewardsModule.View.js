// @module MIA.MiaRewardsExtension.MiaRewardsModule
define('MIA.MiaRewardsExtension.MiaRewardsModule.View'
	, [
		'mia_miarewardsextension_miarewardsmodule.tpl'

		, 'MIA.MiaRewardsExtension.MiaRewardsModule.Model'
		, 'MIA.PrincipalRegistration.PrincipalRegistrationModule.Model'
		, 'Profile.Model'
		, 'Backbone'
	]
	, function (
		mia_miarewardsextension_miarewardsmodule_tpl

		, MiaRewardsModuleModel
		, PrincipalRegistrationModuleModel
		, ProfileModel
		, Backbone

	) {
		'use strict';

		// @class MIA.MiaRewardsExtension.MiaRewardsModule.View @extends Backbone.View
		return Backbone.View.extend({

			template: mia_miarewardsextension_miarewardsmodule_tpl

			, events:{
				'click [data-action="show-hide"]': 'showHide',
				'click [data-action="redirect-doc"]': 'redirectToDOC',
				'click [data-action="redirect-to-page"]': 'redirectToPage'
			}

			,redirectToDOC : function(){
				var a= document.createElement('a');
				a.target= '_blank';
				a.href= this.pdfURL;
				a.click();
			}
			,redirectToPage: function(e){
		
			}


			,showHide: function(e) {
                console.log($(e.currentTarget));
				var id = $(e.currentTarget).data('id');
				$('[data-action="show-hide"]').removeClass('active');
				$('.mia-rewards-section-content-wrapper-sections').removeClass('tab-active');
				var target = '#' + id;
				console.log($(target));
				$(e.currentTarget).addClass('active');
				$(target).addClass('tab-active');

			}

			, beforeShowContent: function(){
				var self = this;
				var profile = ProfileModel.getInstance();
				// var promise = jQuery.Deferred();
				
				
				var	promise = new PrincipalRegistrationModuleModel().fetch({
						data: {
							email: profile.get('email')
						}
					})
					promise.then(function (res) {
						if (_.has(res, 'docID'))
							self.docID = res.docID;
						if (_.has(res, 'pdfURL'))
							self.pdfURL = res.pdfURL;
					})
					
				return promise;
			}
	
			//@method getContext @return MIA.MiaRewardsExtension.MiaRewardsModule.View.Context
			, getContext: function getContext() {
				//@class MIA.MiaRewardsExtension.MiaRewardsModule.View.Context
				var profile = ProfileModel.getInstance();
				console.log(SC.ENVIRONMENT.currentHostString+this.pdfURL,"jj")
				return {
					pdfURL: this.pdfURL,
					displayName: profile.get('firstname') || profile.get('companyname'),
				    docID: this.docID == '' ? true : false
					
				};
			}
		});
	});
